import { useState } from "react"
import { faqs } from "@/content"
import { FaqItem } from "@/components/FaqItem"
import { SectionLabel } from "@/components/SectionLabel"

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto max-w-[1000px] px-6 py-28 sm:px-12">
      <SectionLabel>10 — FAQ</SectionLabel>
      <h2 className="mb-12 font-serif text-5xl tracking-[-.05em]">
        Dúvidas, <em className="font-normal">esclarecidas.</em>
      </h2>
      <div className="border-t border-sketch">
        {faqs.map((faq, i) => (
          <FaqItem
            key={faq.question}
            id={`faq-${i}`}
            question={faq.question}
            answer={faq.answer}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  )
}
