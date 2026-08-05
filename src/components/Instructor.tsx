import portrait from "@/imports/instructor-portrait.jpeg"
import { Reveal, RevealImage } from "@/components/Reveal"
import { SectionLabel } from "@/components/SectionLabel"

// TODO(cliente): confirmar nome, formação e foto definitiva da professora
// antes do lançamento. A legenda abaixo é intencionalmente genérica até
// então. A foto usada é recortada da arte de marca original — vale
// substituir por um retrato dedicado quando disponível.
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
        <div className="grid grid-cols-[96px_1fr] gap-6 sm:grid-cols-[160px_1fr] sm:gap-10 lg:col-span-9 lg:gap-14">
          <RevealImage className="relative aspect-[1/3.1] overflow-hidden">
            <img
              src={portrait}
              alt="Professora do Curso Revit"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-right sepia-[.1]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-ink/10 mix-blend-multiply"
            />
          </RevealImage>
          <Reveal as="div">
            <p className="font-serif text-2xl leading-[1.05] tracking-[-.03em] sm:text-4xl sm:leading-[.94] sm:tracking-[-.045em] lg:text-6xl">
              "Ensinar Revit é ensinar a enxergar o projeto como um sistema —
              sem perder a delicadeza da arquitetura."
            </p>
            <div className="mt-12 border-t border-cream/30 pt-5">
              <p className="text-[10px] leading-5 tracking-[.12em] text-paper uppercase">
                Professora especialista em arquitetura e BIM
                <br />
                Uma experiência pensada para a prática profissional.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
