import { Arrow } from "@/components/icons"
import type { CourseModule as CourseModuleData } from "@/content"

export function CourseModule({ number, title, description }: CourseModuleData) {
  return (
    <article className="group border-b border-sketch py-7 transition-colors duration-200 hover:border-brown md:odd:border-r md:odd:pr-10 md:even:pl-10">
      <div className="flex justify-between">
        <span className="font-serif text-3xl text-gold">{number}</span>
        <Arrow className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
      <h3 className="mt-12 font-serif text-3xl tracking-[-.04em] transition-colors duration-200 group-hover:text-brown">
        {title}
      </h3>
      <p className="mt-3 max-w-sm text-xs leading-6 text-brown">
        {description}
      </p>
    </article>
  )
}
