import { modules } from "@/content"
import { CourseModule } from "@/components/CourseModule"
import { Reveal, RevealTitle } from "@/components/Reveal"
import { SectionLabel } from "@/components/SectionLabel"

export function Curriculum() {
  return (
    <section
      id="conteudo"
      className="mx-auto max-w-[1440px] px-5 py-20 sm:px-12 sm:py-28 lg:px-24 lg:py-36"
    >
      <SectionLabel>03 — O QUE VOCÊ VAI APRENDER</SectionLabel>
      <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <RevealTitle className="max-w-2xl font-serif text-5xl leading-[.86] tracking-[-.055em] sm:text-7xl">
          Um método para levar ideias{" "}
          <em className="font-normal">até a obra.</em>
        </RevealTitle>
        <p className="max-w-xs text-sm leading-7 text-brown">
          Seis módulos conectados por um mesmo objetivo: dar clareza ao seu
          processo de projeto.
        </p>
      </div>
      <Reveal
        as="div"
        className="grid border-t border-sketch md:grid-cols-2"
        targets="article"
        y={18}
      >
        {modules.map((module) => (
          <CourseModule key={module.number} {...module} />
        ))}
      </Reveal>
    </section>
  )
}
