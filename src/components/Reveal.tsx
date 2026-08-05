import type { ElementType, ReactNode } from "react"
import { useClipReveal, useLineReveal, useReveal } from "@/hooks/useReveal"

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

/** Heading wipe: clip-path sweeps top-to-bottom instead of fading. Use sparingly, on section titles. */
export function RevealTitle({
  children,
  as: Tag = "h2",
  className,
  delay,
}: {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: number
}) {
  const ref = useClipReveal<HTMLElement>({ direction: "down", delay })
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}

/** Image wipe: clip-path sweeps left-to-right. Use on photography, not text. */
export function RevealImage({
  children,
  as: Tag = "figure",
  className,
  delay,
}: {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: number
}) {
  const ref = useClipReveal<HTMLElement>({ direction: "right", delay })
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
