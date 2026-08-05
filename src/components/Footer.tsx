const footerLinks: [label: string, href: string][] = [
  ["Instagram", "#inicio"],
  ["Privacidade", "#inicio"],
  ["Termos", "#inicio"],
]

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-4 text-paper sm:px-12 lg:px-24">
      <div className="mx-auto flex max-w-[1248px] flex-wrap items-center justify-between gap-x-6 border-t border-paper/25 pt-2 text-[9px] font-medium tracking-[.12em] uppercase">
        <span>© 2026 Curso Revit</span>
        <div className="flex flex-wrap">
          {footerLinks.map(([label, href]) => (
            <a key={label} href={href} className="focus-ring px-3 py-3.5">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
