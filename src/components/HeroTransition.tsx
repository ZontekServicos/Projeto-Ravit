import { RMark } from "@/components/icons"
import { ArchitecturalScene } from "@/components/three/ArchitecturalScene"

/**
 * Connective tissue between Hero and Transformação: continues the Hero's
 * dot grid, carries the second of the three deliberate "R" appearances,
 * and hosts the one 3D moment on the page — an architectural maquette
 * that assembles itself as this section scrolls through view.
 */
export function HeroTransition() {
  return (
    <section
      aria-hidden="true"
      className="relative h-[56vh] overflow-hidden border-b border-line/70 bg-paper sm:h-[62vh] lg:h-[72vh]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(#c8beb433_1px,transparent_1px),linear-gradient(90deg,#c8beb433_1px,transparent_1px)] [background-size:58px_58px]" />
      <RMark className="pointer-events-none absolute -right-[8%] top-1/2 h-[85%] w-auto -translate-y-1/2 text-brown/[.06] sm:h-[95%]" />
      <ArchitecturalScene />
      <span className="absolute bottom-5 left-5 border border-sketch/70 px-3 py-2 text-[9px] tracking-[.18em] text-brown uppercase sm:bottom-8 sm:left-10">
        Modelo · 3D
      </span>
    </section>
  )
}
