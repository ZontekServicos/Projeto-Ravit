import { RMark } from "@/components/icons"
import { Reveal } from "@/components/Reveal"
import { PrimaryButton } from "@/components/PrimaryButton"

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-28 text-cream sm:px-12 lg:px-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(#d9d0c633_1px,transparent_1px),linear-gradient(90deg,#d9d0c633_1px,transparent_1px)] [background-size:72px_72px]"
      />
      <RMark
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[18%] -right-[6%] h-[130%] w-auto text-cream/[.05]"
      />
      <Reveal
        as="div"
        className="relative mx-auto flex max-w-[1248px] flex-col items-start justify-between gap-10 lg:flex-row lg:items-end"
      >
        <h2 className="max-w-3xl font-serif text-5xl leading-[.84] tracking-[-.06em] sm:text-8xl">
          Da primeira linha ao{" "}
          <em className="font-normal text-gold">projeto completo.</em>
        </h2>
        <PrimaryButton href="#oferta" tone="outline" className="shrink-0">
          QUERO COMEÇAR
        </PrimaryButton>
      </Reveal>
    </section>
  )
}
