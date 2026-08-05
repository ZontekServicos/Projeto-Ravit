import { useEffect, useRef } from "react"
import heroImage from "@/imports/hero-architecture.jpeg"
import { DURATION, EASE, gsap, prefersReducedMotion } from "@/lib/motion"
import { PrimaryButton } from "@/components/PrimaryButton"
import { SecondaryButton } from "@/components/SecondaryButton"
import { SectionLabel } from "@/components/SectionLabel"

const indicators: [title: string, sub: string][] = [
  ["Do básico", "ao avançado"],
  ["Projetos", "reais"],
  ["Aulas práticas", "e objetivas"],
]

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const imageRef = useRef<HTMLDivElement | null>(null)
  const wipeRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const reduced = prefersReducedMotion()
    const blocks = section.querySelectorAll<HTMLElement>("[data-hero-reveal]")

    if (reduced) {
      gsap.set(blocks, { opacity: 1, y: 0 })
      gsap.set(wipeRef.current, { scaleX: 0 })
      return
    }

    const ctx = gsap.context(
      () => {
        gsap.set(blocks, { opacity: 0, y: 22 })
        gsap.set(imageRef.current, { opacity: 0 })
        gsap.set(wipeRef.current, {
          scaleX: 1,
          transformOrigin: "right center",
        })

        const tl = gsap.timeline({ defaults: { ease: EASE } })
        tl.to(wipeRef.current, {
          scaleX: 0,
          duration: 0.9,
          ease: "power4.inOut",
        })
          .to(imageRef.current, { opacity: 1, duration: 0.5 }, "-=0.4")
          .to(
            blocks,
            { opacity: 1, y: 0, duration: DURATION, stagger: 0.09 },
            "-=0.7",
          )

        // Extremely light parallax — image drifts a few px slower than scroll.
        if (imageRef.current) {
          gsap.to(imageRef.current, {
            yPercent: 6,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          })
        }
      },
      section,
    )

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative mx-auto grid grid-cols-1 border-b border-x-0 border-line/70 lg:max-w-[1440px] lg:grid-cols-12 lg:border-x lg:border-b-0"
    >
      <div className="relative order-2 flex flex-col justify-center px-5 py-12 sm:px-12 sm:py-16 lg:order-1 lg:col-span-7 lg:px-16 xl:px-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(#c8beb433_1px,transparent_1px),linear-gradient(90deg,#c8beb433_1px,transparent_1px)] [background-size:58px_58px]"
        />
        <div className="relative max-w-xl">
          <div data-hero-reveal>
            <SectionLabel>
              CURSO REVIT · DO BÁSICO AO PROJETO COMPLETO
            </SectionLabel>
          </div>
          <h1
            data-hero-reveal
            className="font-serif text-[clamp(3.1rem,15vw,7.3rem)] leading-[.85] tracking-[-.05em] text-ink sm:text-[clamp(4rem,7.4vw,7.3rem)] sm:leading-[.77] sm:tracking-[-.065em]"
          >
            Domine o Revit.
            <br />
            <em className="font-normal">Projete com confiança.</em>
          </h1>
          <p
            data-hero-reveal
            className="mt-7 max-w-md text-sm leading-7 text-brown sm:mt-10"
          >
            Do básico ao projeto completo, um passo a passo prático para
            transformar suas ideias em projetos reais.
          </p>
          <div
            data-hero-reveal
            className="mt-8 flex flex-col items-stretch gap-4 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <PrimaryButton href="#oferta">QUERO DOMINAR O REVIT</PrimaryButton>
            <SecondaryButton href="#conteudo">CONHECER O CURSO</SecondaryButton>
          </div>
        </div>
        <div
          data-hero-reveal
          className="relative mt-12 grid max-w-xl grid-cols-3 border-t border-sketch pt-5 text-[9px] font-semibold leading-4 tracking-[.08em] text-brown uppercase sm:mt-16"
        >
          {indicators.map(([title, sub], i) => (
            <span
              key={title}
              className={i > 0 ? "border-l border-sketch pl-4" : ""}
            >
              {title}
              <br />
              {sub}
            </span>
          ))}
        </div>
      </div>

      <div className="relative order-1 aspect-[4/5] min-h-0 overflow-hidden border-b border-line bg-sketch/30 sm:aspect-[2/3] lg:order-2 lg:aspect-auto lg:col-span-5 lg:border-b-0 lg:border-l">
        <div ref={imageRef} className="absolute inset-0">
          <img
            src={heroImage}
            alt="Fachada de arquitetura contemporânea em tons quentes, ao entardecer"
            width={1400}
            height={1050}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-center sepia-[.15]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-brown/10 mix-blend-multiply"
          />
          <span className="absolute bottom-4 left-5 border border-cream/70 px-3 py-2 text-[9px] tracking-[.18em] text-cream sm:bottom-6 sm:left-6">
            ESTUDO · 01
          </span>
        </div>
        <div
          ref={wipeRef}
          aria-hidden="true"
          className="absolute inset-0 z-10 bg-ink"
        />
      </div>
    </section>
  )
}
