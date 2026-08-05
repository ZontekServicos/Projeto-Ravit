const footerLinks: [label: string, href: string][] = [
  ["Instagram", "#inicio"],
  ["Privacidade", "#inicio"],
  ["Termos", "#inicio"],
]

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-8 text-paper sm:px-12 lg:px-24">
      <div className="mx-auto flex max-w-[1248px] flex-wrap justify-between gap-6 border-t border-paper/25 pt-6 text-[9px] font-medium tracking-[.12em] uppercase">
        <span>© 2026 Curso Revit</span>
        <div className="flex gap-5">
          {footerLinks.map(([label, href]) => (
            <a key={label} href={href} className="focus-ring">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
