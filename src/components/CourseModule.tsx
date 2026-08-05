import { Arrow } from "@/components/icons"
import type { CourseModule as CourseModuleData } from "@/content"

export function CourseModule({ number, title, description }: CourseModuleData) {
  return (
    <article className="group border-b border-sketch py-7 md:odd:border-r md:odd:pr-10 md:even:pl-10">
      <div className="flex justify-between">
        <span className="font-serif text-3xl text-gold">{number}</span>
        <Arrow />
      </div>
      <h3 className="mt-12 font-serif text-3xl tracking-[-.04em]">{title}</h3>
      <p className="mt-3 max-w-sm text-xs leading-6 text-brown">
        {description}
      </p>
    </article>
  )
}
