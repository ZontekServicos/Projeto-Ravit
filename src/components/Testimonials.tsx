import { testimonials } from "@/content"
import { Reveal } from "@/components/Reveal"
import { SectionLabel } from "@/components/SectionLabel"
import { Testimonial } from "@/components/Testimonial"

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="mx-auto max-w-[1440px] px-6 py-28 sm:px-12 lg:px-24"
    >
      <SectionLabel>07 — DEPOIMENTOS</SectionLabel>
      <Reveal as="div" className="space-y-8">
        {testimonials.map((testimonial, i) => (
          <Testimonial key={i} {...testimonial} />
        ))}
      </Reveal>
    </section>
  )
}
