import type { AnchorHTMLAttributes, ReactNode } from "react"
import { Arrow } from "@/components/icons"

const TONES = {
  caramel: "bg-gold text-cream hover:bg-soft",
  dark: "bg-ink text-cream hover:bg-brown",
  outline: "border border-gold text-cream hover:bg-gold hover:text-ink",
} as const

type PrimaryButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  tone?: keyof typeof TONES
  arrow?: boolean
  full?: boolean
}

/** Solid CTA button. Anchor-based so it can point straight at the Hotmart checkout URL once available. */
export function PrimaryButton({
  children,
  tone = "caramel",
  arrow = true,
  full = false,
  className = "",
  ...anchorProps
}: PrimaryButtonProps) {
  return (
    <a
      {...anchorProps}
      className={`focus-ring inline-flex items-center justify-between gap-6 px-6 py-4 text-[11px] font-semibold tracking-[.08em] transition-colors duration-150 ${TONES[tone]} ${
        full ? "w-full" : ""
      } ${className}`}
    >
      {children}
      {arrow && <Arrow />}
    </a>
  )
}
