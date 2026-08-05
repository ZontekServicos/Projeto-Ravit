import { methodology } from "@/content"
import { AnimatedLine, Reveal } from "@/components/Reveal"
import { SectionLabel } from "@/components/SectionLabel"

export function Methodology() {
  return (
    <section
      id="metodologia"
      className="border-y border-line bg-cream px-5 py-20 sm:px-12 sm:py-28 lg:px-24"
    >
      <div className="mx-auto max-w-[1248px]">
        <SectionLabel>05 — METODOLOGIA</SectionLabel>
        <h2 className="max-w-2xl font-serif text-5xl leading-[.86] tracking-[-.055em] sm:text-6xl">
          Três etapas, <em className="font-normal text-brown">um só método.</em>
        </h2>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-3">
          {methodology.map((step) => (
            <Reveal as="div" key={step.number}>
              <AnimatedLine className="h-px w-full bg-sketch" />
              <span className="mt-6 block font-serif text-4xl text-gold">
                {step.number}
              </span>
              <h3 className="mt-3 font-serif text-2xl tracking-[-.03em]">
                {step.title}
              </h3>
              <p className="mt-3 max-w-xs text-xs leading-6 text-brown">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
