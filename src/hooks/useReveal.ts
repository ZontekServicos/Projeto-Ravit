import { useEffect, useRef } from "react"
import { DURATION, EASE, gsap, prefersReducedMotion } from "@/lib/motion"

type RevealOptions = {
  y?: number
  /** Lateral offset (px). Negative slides in from the left, positive from the right. 0 by default — opt in per section. */
  x?: number
  delay?: number
  /** Selector, relative to the container, of children to stagger. Omit to animate the container itself. */
  targets?: string
  stagger?: number
}

/**
 * Fades + lifts (and optionally slides laterally) an element — or its
 * children — into place as it enters the viewport, and reverses the same
 * movement back out if the user scrolls back past it. Mirrors the
 * architectural maquette's own build/un-build behavior on scroll-back.
 * No-ops to the resting state immediately when prefers-reduced-motion is set.
 */
export function useReveal<T extends HTMLElement>({
  y = 24,
  x = 0,
  delay = 0,
  targets,
  stagger = 0.08,
}: RevealOptions = {}) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const nodes = targets
      ? Array.from(el.querySelectorAll<HTMLElement>(targets))
      : [el]
    if (nodes.length === 0) return

    if (prefersReducedMotion()) {
      gsap.set(nodes, { opacity: 1, x: 0, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.set(nodes, { opacity: 0, x, y })
      gsap.to(nodes, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: DURATION,
        delay,
        ease: EASE,
        stagger,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      })
    }, el)

    return () => ctx.revert()
  }, [targets, x, y, delay, stagger])

  return ref
}

type ClipDirection = "down" | "right"

const CLIP_START: Record<ClipDirection, string> = {
  down: "inset(0% 0 100% 0)",
  right: "inset(0 100% 0% 0)",
}
const CLIP_OPEN = "inset(0 0 0 0)"

/**
 * Wipes an element into view via clip-path instead of opacity — a mask
 * reveal, distinct from useReveal's fade/lift. "down" sweeps a heading in
 * top-to-bottom; "right" wipes an image in left-to-right. Reverses the
 * wipe if the user scrolls back past the trigger point.
 */
type ClipRevealOptions = {
  direction?: ClipDirection
  delay?: number
}

export function useClipReveal<T extends HTMLElement>({
  direction = "down",
  delay = 0,
}: ClipRevealOptions = {}) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion()) {
      gsap.set(el, { clipPath: CLIP_OPEN })
      return
    }

    const ctx = gsap.context(() => {
      gsap.set(el, { clipPath: CLIP_START[direction] })
      gsap.to(el, {
        clipPath: CLIP_OPEN,
        duration: 0.9,
        delay,
        ease: EASE,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      })
    }, el)

    return () => ctx.revert()
  }, [direction, delay])

  return ref
}

/**
 * Draws a horizontal divider line (scaleX 0 → 1) as it enters the
 * viewport, and un-draws it if the user scrolls back past it.
 */
export function useLineReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion()) {
      gsap.set(el, { scaleX: 1 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.set(el, { scaleX: 0, transformOrigin: "left center" })
      gsap.to(el, {
        scaleX: 1,
        duration: 0.9,
        ease: EASE,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return ref
}
