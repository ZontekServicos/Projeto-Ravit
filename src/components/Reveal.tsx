import type { ElementType, ReactNode } from "react"
import { useLineReveal, useReveal } from "@/hooks/useReveal"

type RevealProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  y?: number
  delay?: number
  /** Selector for children to stagger-reveal individually instead of the container as a whole. */
  targets?: string
}

/** Scroll-triggered fade/lift wrapper. See useReveal for the underlying GSAP behavior. */
export function Reveal({
  children,
  as: Tag = "div",
  className,
  y,
  delay,
  targets,
}: RevealProps) {
  const ref = useReveal<HTMLElement>({ y, delay, targets })
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}

/** A hairline divider that draws itself left-to-right on scroll. */
export function AnimatedLine({ className = "" }: { className?: string }) {
  const ref = useLineReveal<HTMLDivElement>()
  return <div ref={ref} className={className} />
}
