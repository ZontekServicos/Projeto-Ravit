import { useEffect, useRef } from "react"
import { DURATION, EASE, gsap, prefersReducedMotion } from "@/lib/motion"

type RevealOptions = {
  y?: number
  delay?: number
  /** Selector, relative to the container, of children to stagger. Omit to animate the container itself. */
  targets?: string
  stagger?: number
}

/**
 * Fades + lifts an element (or its children) into place once it enters the viewport.
 * No-ops to the resting state immediately when prefers-reduced-motion is set.
 */
export function useReveal<T extends HTMLElement>({
  y = 24,
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
      gsap.set(nodes, { opacity: 1, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.set(nodes, { opacity: 0, y })
      gsap.to(nodes, {
        opacity: 1,
        y: 0,
        duration: DURATION,
        delay,
        ease: EASE,
        stagger,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      })
    }, el)

    return () => ctx.revert()
  }, [targets, y, delay, stagger])

  return ref
}

/** Draws a horizontal divider line (scaleX 0 → 1) as it enters the viewport. */
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
          once: true,
        },
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return ref
}
