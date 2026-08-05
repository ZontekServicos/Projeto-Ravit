import type { Testimonial as TestimonialData } from "@/content"

export function Testimonial({
  quote,
  name,
  role,
  placeholder,
}: TestimonialData) {
  if (placeholder) {
    return (
      <div className="max-w-5xl border border-dashed border-sketch px-6 py-10 sm:px-10 sm:py-14">
        <p className="font-serif text-2xl leading-tight text-soft italic sm:text-3xl">
          {quote}
        </p>
      </div>
    )
  }

  return (
    <figure>
      <blockquote className="max-w-5xl font-serif text-[clamp(3rem,5.8vw,6rem)] leading-[.87] tracking-[-.06em]">
        "{quote}"
      </blockquote>
      <figcaption className="mt-12 border-t border-sketch pt-5 text-[10px] font-semibold tracking-[.12em] text-brown uppercase">
        {name} · {role}
      </figcaption>
    </figure>
  )
}
