import type { AnchorHTMLAttributes, ReactNode } from "react"

type SecondaryButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  tone?: "brown" | "light"
}

const TONES = {
  brown: "border-brown text-brown",
  light: "border-cream/60 text-cream",
} as const

/** Understated text-link CTA, used alongside a PrimaryButton for the secondary action. */
export function SecondaryButton({
  children,
  tone = "brown",
  className = "",
  ...anchorProps
}: SecondaryButtonProps) {
  return (
    <a
      {...anchorProps}
      className={`focus-ring inline-flex items-center border-b py-3.5 text-[11px] font-semibold tracking-[.08em] transition-opacity duration-150 hover:opacity-70 ${TONES[tone]} ${className}`}
    >
      {children}
    </a>
  )
}
