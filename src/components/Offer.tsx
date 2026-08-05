import { Reveal } from "@/components/Reveal"
import { PrimaryButton } from "@/components/PrimaryButton"
import { SectionLabel } from "@/components/SectionLabel"

const details: [label: string, value: string][] = [
  ["Curso completo", "06 módulos"],
  ["Acesso às aulas", "Online"],
  ["Materiais complementares", "A confirmar"],
  ["Certificado", "Disponível"],
]

// CTA aponta para #inicio como placeholder — substituir pelo link de
// checkout (Hotmart ou equivalente) assim que estiver disponível.
export function Offer() {
  return (
    <section
      id="oferta"
      className="border-y border-line bg-cream px-5 py-20 sm:px-12 sm:py-24 lg:px-24"
    >
      <div className="mx-auto grid max-w-[1248px] gap-12 lg:grid-cols-2">
        <div>
          <SectionLabel>09 — MATRÍCULAS</SectionLabel>
          <h2 className="font-serif text-5xl leading-[.84] tracking-[-.06em] sm:text-7xl">
            Seu próximo projeto <em className="font-normal">começa aqui.</em>
          </h2>
        </div>
        <Reveal as="div" className="border-t border-sketch pt-6">
          <div className="space-y-4 text-sm">
            {details.map(([label, value]) => (
              <p key={label} className="flex justify-between gap-5">
                <span>{label}</span>
                <span>{value}</span>
              </p>
            ))}
          </div>
          <div className="mt-12 flex items-end justify-between border-t border-sketch pt-6">
            <span className="text-[10px] font-semibold tracking-[.14em] text-brown uppercase">
              Investimento
            </span>
            <span className="font-serif text-3xl text-gold italic">
              a definir
            </span>
          </div>
          <PrimaryButton href="#inicio" full className="mt-8">
            COMEÇAR AGORA
          </PrimaryButton>
        </Reveal>
      </div>
    </section>
  )
}
