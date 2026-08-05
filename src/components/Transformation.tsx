import architectureImage from "@/imports/transformation-architecture.jpeg"
import { Reveal, RevealImage, RevealTitle } from "@/components/Reveal"
import { SectionLabel } from "@/components/SectionLabel"

export function Transformation() {
  return (
    <section
      id="sobre"
      className="mx-auto max-w-[1440px] border-t border-line px-5 py-20 sm:px-12 sm:py-28 lg:px-24 lg:py-40"
    >
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <SectionLabel>01 — A TRANSFORMAÇÃO</SectionLabel>
        </div>
        <div className="lg:col-span-8">
          <RevealTitle className="max-w-4xl font-serif text-[clamp(2.6rem,6vw,6.4rem)] leading-[.9] tracking-[-.05em] sm:leading-[.84] sm:tracking-[-.06em]">
            Não basta conhecer as ferramentas.
            <br />
            <em className="font-normal text-brown">
              Você precisa saber projetar.
            </em>
          </RevealTitle>
          <Reveal
            as="div"
            className="mt-14 grid gap-8 border-t border-sketch pt-6 sm:grid-cols-2"
            targets="p"
          >
            <p className="text-sm leading-7 text-brown">
              Mais do que comandos isolados, você aprende uma forma clara de
              transformar decisões em projeto: com precisão, intenção e
              repertório técnico.
            </p>
            <p className="text-sm leading-7 text-brown">
              Um percurso para ganhar autonomia, organizar processos e
              apresentar ideias que sustentam sua visão profissional.
            </p>
          </Reveal>
        </div>
      </div>

      <RevealImage className="relative mt-16 aspect-[16/9] overflow-hidden sm:mt-24 lg:mx-24">
        <img
          src={architectureImage}
          alt="Fachada de arquitetura contemporânea, referência do padrão de projeto do curso"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover sepia-[.12] transition-transform duration-500 hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-ink/10 mix-blend-multiply"
        />
      </RevealImage>
    </section>
  )
}
