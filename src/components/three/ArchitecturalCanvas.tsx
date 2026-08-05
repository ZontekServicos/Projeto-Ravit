import { useEffect, useRef } from "react"
import * as THREE from "three"
import { gsap, prefersReducedMotion } from "@/lib/motion"

// Mirrors the tokens in src/index.css. Three.js materials need raw hex, so
// this is an intentional, documented duplication of the palette — update
// both places together if the brand colors ever change.
const PALETTE = {
  brown: 0x7d5e42,
  soft: 0x9e7d5e,
  gold: 0xb89060,
  cream: 0xfaf7f4,
  sketch: 0xc8beb4,
  line: 0xd9d0c6,
} as const

const CORNERS: [number, number][] = [
  [-1, -1],
  [1, -1],
  [1, 1],
  [-1, 1],
]

type ArchitecturalCanvasProps = {
  onError?: () => void
}

/**
 * Procedural architectural maquette — stacked floor plates, corner pillars,
 * a drafting bounding box and a ground grid — assembled via a GSAP
 * scroll-scrubbed timeline. Settles into a very slow idle spin (desktop
 * only) once fully built and back to static the moment it scrolls out of
 * view or the timeline reverses.
 */
export function ArchitecturalCanvas({ onError }: ArchitecturalCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const onErrorRef = useRef(onError)
  onErrorRef.current = onError

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const isMobile = window.matchMedia("(max-width: 767px)").matches
    const reduced = prefersReducedMotion()

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isMobile,
        alpha: true,
        powerPreference: "low-power",
      })
    } catch {
      onErrorRef.current?.()
      return
    }

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 50)
    camera.position.set(4.2, 3, 5.4)
    camera.lookAt(0, 1, 0)

    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2),
    )
    renderer.domElement.style.cssText =
      "position:absolute;inset:0;width:100%;height:100%;display:block;"
    container.appendChild(renderer.domElement)

    scene.add(new THREE.AmbientLight(PALETTE.cream, 1.1))
    const key = new THREE.DirectionalLight(0xffffff, 0.55)
    key.position.set(3, 5, 4)
    scene.add(key)

    const grid = new THREE.GridHelper(
      10,
      isMobile ? 10 : 20,
      PALETTE.sketch,
      PALETTE.line,
    )
    const gridMat = grid.material as THREE.LineBasicMaterial
    gridMat.transparent = true
    gridMat.opacity = 0
    scene.add(grid)

    const maquete = new THREE.Group()
    scene.add(maquete)

    const floorCount = isMobile ? 2 : 4
    const floorHeight = 0.85
    const baseSize = 1.7
    const topY = floorCount * floorHeight

    const plateMat = new THREE.MeshStandardMaterial({
      color: PALETTE.cream,
      roughness: 1,
      metalness: 0,
      transparent: true,
      opacity: 0.88,
    })
    const pillarMat = new THREE.MeshStandardMaterial({
      color: PALETTE.brown,
      roughness: 0.9,
      metalness: 0,
      transparent: true,
      opacity: 0,
    })
    const nodeMat = new THREE.MeshBasicMaterial({ color: PALETTE.gold })
    const wireMat = new THREE.LineBasicMaterial({
      color: PALETTE.sketch,
      transparent: true,
      opacity: 0,
    })

    const plates: THREE.Mesh[] = []
    const nodes: THREE.Mesh[] = []
    for (let i = 0; i < floorCount; i++) {
      const size = baseSize * (1 - i * 0.07)
      const plate = new THREE.Mesh(
        new THREE.BoxGeometry(size, 0.07, size),
        plateMat,
      )
      plate.position.y = (i + 1) * floorHeight
      plate.scale.y = 0.001
      maquete.add(plate)
      plates.push(plate)

      const half = size / 2
      for (const [sx, sz] of CORNERS) {
        const node = new THREE.Mesh(
          new THREE.SphereGeometry(0.035, 8, 8),
          nodeMat,
        )
        node.position.set(sx * half, plate.position.y, sz * half)
        node.scale.setScalar(0.001)
        maquete.add(node)
        nodes.push(node)
      }
    }

    const pillars: THREE.Mesh[] = []
    const pillarHalf = baseSize / 2
    for (const [sx, sz] of CORNERS) {
      const pillar = new THREE.Mesh(
        new THREE.CylinderGeometry(0.025, 0.025, topY, 8),
        pillarMat,
      )
      pillar.position.set(sx * pillarHalf, topY / 2, sz * pillarHalf)
      pillar.scale.y = 0.001
      maquete.add(pillar)
      pillars.push(pillar)
    }

    const boxGeo = new THREE.BoxGeometry(
      baseSize + 0.4,
      topY + 0.4,
      baseSize + 0.4,
    )
    const edges = new THREE.EdgesGeometry(boxGeo)
    const wireframe = new THREE.LineSegments(edges, wireMat)
    wireframe.position.y = topY / 2 + 0.2
    maquete.add(wireframe)
    boxGeo.dispose()

    // Idle rotation is deliberately a brief, gentle nudge rather than a
    // perpetual spin — a maquette that settles and holds still reads as
    // more considered than one that never stops turning. It only plays
    // once per "reason" (build finishing, scrolling back into view, or a
    // fresh scroll gesture), never continuously.
    const ROTATION_SPEED = 0.00035 // rad/frame at the loop's own ~30fps cap
    const SPIN_DURATION_MS = 3200
    const RENDER_EVERY_N_FRAMES = 2 // caps the spin loop to ~30fps

    let rafId: number | null = null
    let frameCount = 0
    let spinTimeoutId: number | null = null
    let isSpinning = false
    let intersecting = false
    let buildComplete = false
    const allowIdleSpin = !isMobile

    function renderFrame() {
      renderer.render(scene, camera)
    }

    function loop() {
      rafId = requestAnimationFrame(loop)
      frameCount++
      if (frameCount % RENDER_EVERY_N_FRAMES !== 0) return
      maquete.rotation.y += ROTATION_SPEED * RENDER_EVERY_N_FRAMES
      renderFrame()
    }

    function startLoop() {
      if (rafId === null) {
        frameCount = 0
        loop()
      }
    }
    function stopLoop() {
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
        rafId = null
      }
    }

    function cancelSpinTimer() {
      if (spinTimeoutId !== null) {
        window.clearTimeout(spinTimeoutId)
        spinTimeoutId = null
      }
    }

    /** Plays one short rotation burst, then settles back to static. */
    function beginSpinBurst() {
      if (
        !allowIdleSpin ||
        reduced ||
        isSpinning ||
        !intersecting ||
        !buildComplete
      )
        return
      isSpinning = true
      startLoop()
      spinTimeoutId = window.setTimeout(() => {
        isSpinning = false
        spinTimeoutId = null
        stopLoop()
        renderFrame()
      }, SPIN_DURATION_MS)
    }

    function settle() {
      isSpinning = false
      cancelSpinTimer()
      stopLoop()
    }

    let ctx: ReturnType<typeof gsap.context> | null = null

    if (reduced) {
      plates.forEach((p) => (p.scale.y = 1))
      pillars.forEach((p) => (p.scale.y = 1))
      nodes.forEach((n) => n.scale.setScalar(1))
      pillarMat.opacity = 1
      wireMat.opacity = 0.55
      gridMat.opacity = 0.18
      camera.position.set(3.2, 3, 4.6)
      camera.lookAt(0, topY / 2, 0)
      buildComplete = true
      renderFrame()
    } else {
      ctx = gsap.context(() => {
        function handleScrubUpdate() {
          renderFrame()
          const progress = tl.progress()
          if (progress >= 0.995 && !buildComplete) {
            buildComplete = true
            beginSpinBurst()
          } else if (progress < 0.995 && buildComplete) {
            buildComplete = false
            settle()
          }
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            end: "bottom 35%",
            scrub: 0.6,
          },
          onUpdate: handleScrubUpdate,
        })

        tl.to(wireMat, { opacity: 0.55, duration: 0.15 }, 0)
          .to(gridMat, { opacity: 0.18, duration: 0.15 }, 0)
          .to(pillarMat, { opacity: 1, duration: 0.2 }, 0.1)

        plates.forEach((p, i) =>
          tl.to(p.scale, { y: 1, duration: 0.18 }, 0.15 + i * 0.1),
        )
        pillars.forEach((p, i) =>
          tl.to(p.scale, { y: 1, duration: 0.18 }, 0.2 + i * 0.05),
        )
        nodes.forEach((n, i) =>
          tl.to(n.scale, { x: 1, y: 1, z: 1, duration: 0.12 }, 0.4 + i * 0.02),
        )

        tl.to(
          camera.position,
          {
            x: 3.2,
            z: 4.6,
            duration: 0.4,
            onUpdate: () => camera.lookAt(0, topY / 2, 0),
          },
          0.3,
        )
      }, container)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasIntersecting = intersecting
        intersecting = entry.isIntersecting
        if (intersecting) {
          // Re-entering the viewport counts as a fresh reason to nudge —
          // but only if it was actually out of view before, not on the
          // very first observation.
          if (wasIntersecting === false && buildComplete) beginSpinBurst()
          else renderFrame()
        } else {
          settle()
        }
      },
      { threshold: 0.05 },
    )
    observer.observe(container)

    // A fresh scroll gesture while the piece is in view and already
    // settled is treated as "new interaction" — one more short burst,
    // never a restart of continuous spinning.
    function onWindowScroll() {
      if (
        !reduced &&
        allowIdleSpin &&
        intersecting &&
        buildComplete &&
        !isSpinning
      ) {
        beginSpinBurst()
      }
    }
    window.addEventListener("scroll", onWindowScroll, { passive: true })

    function resize() {
      const { clientWidth, clientHeight } = container as HTMLDivElement
      if (clientWidth === 0 || clientHeight === 0) return
      camera.aspect = clientWidth / clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(clientWidth, clientHeight)
      renderFrame()
    }
    resize()
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)

    return () => {
      stopLoop()
      cancelSpinTimer()
      window.removeEventListener("scroll", onWindowScroll)
      observer.disconnect()
      resizeObserver.disconnect()
      ctx?.revert()
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.LineSegments) {
          obj.geometry.dispose()
        }
      })
      plateMat.dispose()
      pillarMat.dispose()
      nodeMat.dispose()
      wireMat.dispose()
      grid.geometry.dispose()
      gridMat.dispose()
      renderer.dispose()
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
    />
  )
}
