import { Reveal } from "@/components/Reveal"
import { SectionLabel } from "@/components/SectionLabel"

// TODO(cliente): confirmar nome, formação e foto da professora antes do
// lançamento. A legenda abaixo é intencionalmente genérica até então.
export function Instructor() {
  return (
    <section
      id="professora"
      className="border-y border-line bg-brown px-6 py-24 text-cream sm:px-12 lg:px-24"
    >
      <div className="mx-auto grid max-w-[1248px] gap-12 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <SectionLabel tone="light">06 — SOBRE A PROFESSORA</SectionLabel>
        </div>
        <Reveal as="div" className="lg:col-span-8">
          <p className="font-serif text-4xl leading-[.94] tracking-[-.045em] sm:text-6xl">
            "Ensinar Revit é ensinar a enxergar o projeto como um sistema — sem
            perder a delicadeza da arquitetura."
          </p>
          <div className="mt-12 flex items-center gap-5 border-t border-cream/30 pt-5">
            <span aria-hidden="true" className="h-9 w-9 border border-gold" />
            <p className="text-[10px] leading-5 tracking-[.12em] text-paper uppercase">
              Professora especialista em arquitetura e BIM
              <br />
              Uma experiência pensada para a prática profissional.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
