import type { ReactNode } from "react"

/** Small uppercase eyebrow used to open every numbered section — "01 — LABEL". */
export function SectionLabel({
  children,
  tone = "gold",
}: {
  children: ReactNode
  tone?: "gold" | "light"
}) {
  return (
    <p
      className={`mb-6 text-[10px] font-semibold tracking-[.22em] uppercase ${
        tone === "gold" ? "text-soft" : "text-paper/70"
      }`}
    >
      {children}
    </p>
  )
}
