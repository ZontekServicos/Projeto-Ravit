import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// Emil Kowalski-style defaults: fast, natural easing, transform/opacity only.
export const EASE = "power3.out"
export const DURATION = 0.7

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
}

export { gsap, ScrollTrigger }
