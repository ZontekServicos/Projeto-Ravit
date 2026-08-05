import { lazy, Suspense, useEffect, useRef, useState } from "react"
import { BlueprintFallback } from "@/components/three/BlueprintFallback"
import { CanvasErrorBoundary } from "@/components/three/CanvasErrorBoundary"

const ArchitecturalCanvas = lazy(() =>
  import("@/components/three/ArchitecturalCanvas").then((m) => ({
    default: m.ArchitecturalCanvas,
  })),
)

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas")
    return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"))
  } catch {
    return false
  }
}

/**
 * Public entry point for the architectural maquette. Purely decorative
 * (aria-hidden throughout), so it never carries information the rest of
 * the page doesn't already state in real HTML. The Three.js chunk is only
 * fetched once ~15% of this section is genuinely visible — a fast CTA
 * click right after landing never triggers the download. No positive
 * rootMargin here: on common desktop viewport heights the Hero is
 * shorter than the viewport, so this section's top edge already peeks
 * into view on first paint — any lead-in margin (e.g. 300px) or even a
 * bare 0px/threshold-0 check would fire immediately, defeating the
 * point. Requiring a real visible fraction means it only fires once the
 * visitor has actually scrolled toward it. WebGL-unavailable visitors
 * never fetch it at all — everyone gets the same static blueprint
 * illustration used as the Suspense/error fallback too.
 */
export function ArchitecturalScene() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [webglOk] = useState(supportsWebGL)
  const [failed, setFailed] = useState(false)
  const [nearViewport, setNearViewport] = useState(false)

  useEffect(() => {
    if (!webglOk) return
    const el = wrapperRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearViewport(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [webglOk])

  if (!webglOk || failed) {
    return <BlueprintFallback />
  }

  return (
    <div ref={wrapperRef} className="absolute inset-0">
      <CanvasErrorBoundary fallback={<BlueprintFallback />}>
        {nearViewport ? (
          <Suspense fallback={<BlueprintFallback />}>
            <ArchitecturalCanvas onError={() => setFailed(true)} />
          </Suspense>
        ) : (
          <BlueprintFallback />
        )}
      </CanvasErrorBoundary>
    </div>
  )
}
