import { bonusItems } from "@/content"
import { Reveal, RevealTitle } from "@/components/Reveal"
import { SectionLabel } from "@/components/SectionLabel"

// TODO(cliente): confirmar bônus reais do curso antes do lançamento.
export function Bonus() {
  return (
    <section
      id="bonus"
      className="mx-auto max-w-[1440px] border-t border-line px-5 py-20 sm:px-12 sm:py-28 lg:px-24"
    >
      <SectionLabel>08 — BÔNUS</SectionLabel>
      <RevealTitle className="max-w-2xl font-serif text-5xl leading-[.86] tracking-[-.055em] sm:text-6xl">
        Vantagens <em className="font-normal text-gold">exclusivas.</em>
      </RevealTitle>
      <Reveal
        as="div"
        className="mt-14 grid gap-px border-t border-sketch sm:grid-cols-2"
        targets="[data-bonus]"
        x={-24}
        y={0}
      >
        {bonusItems.map((item, i) => (
          <div
            key={i}
            data-bonus
            className="flex items-center gap-4 border-b border-dashed border-sketch py-6 sm:odd:border-r sm:odd:pr-8"
          >
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
              aria-hidden="true"
            />
            <span className="text-sm text-soft italic">{item.title}</span>
          </div>
        ))}
      </Reveal>
      <p className="mt-4 text-[10px] tracking-[.08em] text-soft uppercase">
        Lista de bônus será confirmada em breve.
      </p>
    </section>
  )
}
