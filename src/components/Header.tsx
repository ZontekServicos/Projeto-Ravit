import { useEffect, useState } from "react"
import { navLinks } from "@/content"
import { PrimaryButton } from "@/components/PrimaryButton"
import { RMark } from "@/components/icons"

/** True once the page has scrolled past a small threshold — used to tighten the sticky header. */
function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [threshold])

  return scrolled
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled()

  return (
    <header
      className={`sticky top-0 z-30 border-b bg-paper/95 backdrop-blur transition-shadow duration-200 ${
        scrolled
          ? "border-line shadow-[0_1px_0_rgba(74,55,40,.06)]"
          : "border-line/80"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1400px] items-center justify-between px-5 transition-[height] duration-200 lg:px-10 ${
          scrolled ? "h-[64px]" : "h-[76px]"
        }`}
      >
        <a
          href="#inicio"
          className="focus-ring flex items-center gap-3"
          aria-label="Curso Revit, início"
        >
          <RMark className="h-10 w-10 text-brown" />
          <span className="hidden text-[10px] font-semibold tracking-[.18em] text-brown sm:block">
            CURSO REVIT
          </span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-6 text-[11px] font-medium text-brown xl:flex"
        >
          {navLinks.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="focus-ring transition-colors hover:text-gold"
            >
              {label}
            </a>
          ))}
        </nav>

        <PrimaryButton
          href="#oferta"
          tone="dark"
          arrow
          className="hidden sm:inline-flex"
        >
          CONHECER O CURSO
        </PrimaryButton>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="focus-ring grid h-11 w-11 place-items-center border border-sketch text-ink xl:hidden"
        >
          <span className="text-lg leading-none" aria-hidden="true">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Navegação móvel"
          className="border-t border-line bg-cream px-5 py-3 xl:hidden"
        >
          <div className="mx-auto grid max-w-[1400px] grid-cols-2">
            <a
              onClick={() => setMenuOpen(false)}
              href="#oferta"
              className="focus-ring col-span-2 border-b border-line py-4 text-[11px] font-semibold tracking-[.1em] text-brown"
            >
              CONHECER O CURSO →
            </a>
            {navLinks.map(([label, id]) => (
              <a
                key={id}
                onClick={() => setMenuOpen(false)}
                href={`#${id}`}
                className="focus-ring border-b border-line py-3 text-[11px] text-brown odd:border-r odd:pr-3 even:pl-3"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
