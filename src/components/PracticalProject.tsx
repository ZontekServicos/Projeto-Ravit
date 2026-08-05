import lineartBuilt from "@/imports/project-interior-built.jpeg"
import lineart from "@/imports/project-lineart.jpeg"
import modelBuilt from "@/imports/project-model-built.jpeg"
import modelWireframe from "@/imports/project-model-wireframe.jpeg"
import { Reveal } from "@/components/Reveal"
import { SectionLabel } from "@/components/SectionLabel"

type Comparison = {
  from: string
  fromLabel: string
  to: string
  toLabel: string
  alt: string
}

const comparisons: Comparison[] = [
  {
    from: modelWireframe,
    fromLabel: "Modelagem",
    to: modelBuilt,
    toLabel: "Projeto final",
    alt: "fachada residencial",
  },
  {
    from: lineart,
    fromLabel: "Documentação",
    to: lineartBuilt,
    toLabel: "Projeto final",
    alt: "cozinha e área gourmet",
  },
]

export function PracticalProject() {
  return (
    <section
      id="projeto"
      className="mx-auto max-w-[1440px] border-t border-line px-5 py-20 sm:px-12 sm:py-28 lg:px-24 lg:py-36"
    >
      <SectionLabel>04 — PROJETO PRÁTICO</SectionLabel>
      <h2 className="max-w-2xl font-serif text-5xl leading-[.86] tracking-[-.055em] sm:text-7xl">
        Aprenda <em className="font-normal text-brown">construindo.</em>
      </h2>
      <p className="mt-6 max-w-md text-sm leading-7 text-brown">
        Ao longo do curso, você desenvolve um projeto real, do conceito à
        documentação final — aplicando cada módulo em um fluxo profissional
        único, do modelo no Revit ao projeto construído.
      </p>

      <Reveal
        as="div"
        className="mt-16 grid gap-px sm:grid-cols-2"
        targets="[data-comparison]"
      >
        {comparisons.map((comparison) => (
          <div
            key={comparison.alt}
            data-comparison
            className="grid grid-cols-2 border border-line"
          >
            <figure className="relative aspect-[4/5] overflow-hidden border-r border-line">
              <img
                src={comparison.from}
                alt={`Modelo digital, ${comparison.alt}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover sepia-[.1]"
              />
              <figcaption className="absolute bottom-0 left-0 border-t border-r border-line bg-cream/90 px-3 py-2 text-[9px] font-semibold tracking-[.14em] text-brown uppercase">
                {comparison.fromLabel}
              </figcaption>
            </figure>
            <figure className="relative aspect-[4/5] overflow-hidden">
              <img
                src={comparison.to}
                alt={`Projeto construído, ${comparison.alt}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover sepia-[.1]"
              />
              <figcaption className="absolute bottom-0 left-0 border-t border-r border-line bg-cream/90 px-3 py-2 text-[9px] font-semibold tracking-[.14em] text-brown uppercase">
                {comparison.toLabel}
              </figcaption>
            </figure>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
