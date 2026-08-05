import { audience } from "@/content"
import { Arrow } from "@/components/icons"
import { Reveal, RevealTitle } from "@/components/Reveal"
import { SectionLabel } from "@/components/SectionLabel"

export function Audience() {
  return (
    <section
      id="para-quem"
      className="border-y border-line bg-cream px-5 py-20 sm:px-12 sm:py-24 lg:px-24"
    >
      <div className="mx-auto max-w-[1248px]">
        <SectionLabel>02 — PARA QUEM É</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-2">
          <RevealTitle className="font-serif text-5xl leading-[.86] tracking-[-.055em] sm:text-6xl">
            Para quem quer transformar conhecimento{" "}
            <em className="font-normal">em projeto.</em>
          </RevealTitle>
          <Reveal
            as="div"
            className="grid border-t border-sketch"
            targets="[data-audience-item]"
            x={-28}
            y={0}
          >
            {audience.map((item, i) => (
              <div
                key={item}
                data-audience-item
                className="group flex items-center justify-between border-b border-line py-5 transition-colors duration-200 hover:border-brown"
              >
                <span className="font-serif text-2xl text-brown">0{i + 1}</span>
                <span className="w-3/4 text-sm transition-transform duration-200 group-hover:translate-x-1">
                  {item}
                </span>
                <Arrow className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
