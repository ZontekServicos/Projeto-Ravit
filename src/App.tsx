import { useState } from "react";
import heroImage from "@/imports/WhatsApp_Image_2026-06-27_at_17.07.04.jpeg";
import logoImage from "@/imports/WhatsApp_Image_2026-06-27_at_17.00.42.jpeg";
import mobileVisual from "@/imports/image-1.png";
import mobileIntro from "@/imports/image-2.png";

const modules = [
  ["01", "Fundamentos e interface", "Domine a lógica do Revit e organize seu ambiente de trabalho."],
  ["02", "Modelagem arquitetônica", "Do primeiro traço aos elementos que compõem um projeto real."],
  ["03", "Famílias e componentes", "Crie elementos inteligentes para trabalhar com mais agilidade."],
  ["04", "Documentação do projeto", "Vistas, pranchas, tabelas e tudo o que comunica sua ideia."],
  ["05", "Detalhamento", "Eleve o nível técnico e a leitura do seu projeto."],
  ["06", "Projeto completo", "Aplique o método em um fluxo profissional do início ao fim."],
];
const audience = ["Estudantes de arquitetura", "Arquitetos iniciantes", "Designers de interiores", "Profissionais migrando para BIM", "Quem quer ganhar produtividade"];
const faqs = [
  ["Preciso ter conhecimento prévio em Revit?", "Não. O curso começa pelos fundamentos e evolui para o desenvolvimento de um projeto completo."],
  ["Por quanto tempo terei acesso às aulas?", "O acesso é online e você poderá estudar no seu ritmo, revendo as aulas sempre que precisar."],
  ["Recebo certificado?", "Sim. Ao concluir o percurso, você poderá emitir o seu certificado de participação."],
  ["Qual versão do Revit é necessária?", "As aulas são estruturadas para que os conceitos e o fluxo de trabalho sejam aplicáveis às versões atuais do software."],
];
function Arrow() { return <span aria-hidden="true" className="text-lg leading-none">↗</span>; }
function SectionLabel({ children }: { children: React.ReactNode }) { return <p className="mb-6 text-[10px] font-semibold tracking-[.22em] text-[#9E7D5E] uppercase">{children}</p>; }

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [["Sobre", "sobre"], ["Conteúdo", "conteudo"], ["Para quem é", "para-quem"], ["Professora", "professora"], ["Depoimentos", "depoimentos"], ["FAQ", "faq"]];
  return (
    <main className="overflow-hidden bg-[#EFE9E2] pb-20 font-sans text-[#4A3728] md:pb-0">
      <header className="sticky top-0 z-30 border-b border-[#d9d0c6]/80 bg-[#efe9e2]/95 backdrop-blur">
        <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-5 lg:px-10">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Curso Revit, início">
            <span className="h-10 w-10 overflow-hidden rounded-full border border-[#d9d0c6] bg-[#faf7f4]"><img src={logoImage} alt="Logo Curso Revit" className="h-full w-full scale-105 object-contain p-0.5" /></span>
            <span className="hidden text-[10px] font-semibold tracking-[.18em] text-[#7D5E42] sm:block">CURSO REVIT</span>
          </a>
          <nav className="hidden items-center gap-6 text-[11px] font-medium text-[#7d5e42] xl:flex">
            {navLinks.map(([label,id]) => <a key={id} href={`#${id}`} className="transition-colors hover:text-[#B89060]">{label}</a>)}
          </nav>
          <a href="#oferta" className="hidden items-center gap-3 bg-[#4A3728] px-4 py-3 text-[10px] font-semibold tracking-[.08em] text-[#FAF7F4] transition hover:bg-[#7D5E42] sm:inline-flex">CONHECER O CURSO <Arrow /></a>
          <button type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menu" className="grid h-10 w-10 place-items-center border border-[#C8BEB4] text-[#4A3728] xl:hidden"><span className="text-lg leading-none">{menuOpen ? "×" : "☰"}</span></button>
        </div>
        {menuOpen && <nav className="border-t border-[#D9D0C6] bg-[#FAF7F4] px-5 py-3 xl:hidden"><div className="mx-auto grid max-w-[1400px] grid-cols-2"><a onClick={() => setMenuOpen(false)} href="#oferta" className="col-span-2 border-b border-[#D9D0C6] py-4 text-[11px] font-semibold tracking-[.1em] text-[#7D5E42]">CONHECER O CURSO →</a>{navLinks.map(([label, id]) => <a key={id} onClick={() => setMenuOpen(false)} href={`#${id}`} className="border-b border-[#D9D0C6] py-3 text-[11px] text-[#7D5E42] odd:border-r odd:pr-3 even:pl-3">{label}</a>)}</div></nav>}
      </header>

      <section id="inicio" className="border-b border-[#d9d0c6] bg-[#EFE9E2] lg:hidden">
        <img src={mobileVisual} alt="Identidade do Curso Revit com professora em ambiente arquitetônico" className="block h-auto w-full" />
        <img src={mobileIntro} alt="Apresentação: Domine o Revit, projete com confiança" className="block h-auto w-full border-t border-[#d9d0c6]" />
      </section>

      <section id="inicio-desktop" className="relative mx-auto hidden min-h-0 max-w-[1440px] grid-cols-1 border-x border-[#d9d0c6]/70 lg:grid lg:grid-cols-12">
        <div className="relative order-2 flex flex-col justify-center px-5 py-12 sm:px-12 sm:py-16 lg:order-1 lg:col-span-7 lg:px-16 xl:px-24">
          <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(#c8beb433_1px,transparent_1px),linear-gradient(90deg,#c8beb433_1px,transparent_1px)] [background-size:58px_58px]" />
          <div className="relative max-w-xl">
            <SectionLabel>CURSO REVIT · DO BÁSICO AO PROJETO COMPLETO</SectionLabel>
            <h1 className="font-serif text-[clamp(3.45rem,16vw,7.3rem)] leading-[.8] sm:text-[clamp(4rem,7.4vw,7.3rem)] sm:leading-[.77] tracking-[-.065em] text-[#4A3728]">Domine o Revit.<br /><em className="font-normal">Projete com confiança.</em></h1>
            <p className="mt-7 max-w-md sm:mt-10 text-sm leading-7 text-[#7D5E42]">Do básico ao projeto completo, um passo a passo prático para transformar suas ideias em projetos reais.</p>
            <div className="mt-8 flex flex-col items-stretch gap-4 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center"><a href="#oferta" className="inline-flex items-center justify-between gap-6 bg-[#B89060] px-6 py-4 text-[11px] font-semibold tracking-[.08em] text-[#FAF7F4] transition hover:bg-[#9E7D5E]">QUERO DOMINAR O REVIT <Arrow /></a><a href="#conteudo" className="border-b border-[#7D5E42] pb-1 text-[11px] font-semibold tracking-[.08em] text-[#7D5E42]">CONHECER O CURSO</a></div>
          </div>
          <div className="relative mt-12 grid max-w-xl grid-cols-3 sm:mt-16 border-t border-[#C8BEB4] pt-5 text-[9px] font-semibold leading-4 tracking-[.08em] text-[#7D5E42] uppercase"><span>Do básico<br />ao avançado</span><span className="border-l border-[#C8BEB4] pl-4">Projetos<br />reais</span><span className="border-l border-[#C8BEB4] pl-4">Aulas práticas<br />e objetivas</span></div>
        </div>
        <div className="relative order-1 aspect-[2/3] min-h-0 overflow-hidden border-b border-[#d9d0c6] bg-[#e7ddd2] lg:order-2 lg:aspect-auto lg:col-span-5 lg:border-b-0 lg:border-l">
          <img src={heroImage} alt="Professora do Curso Revit em ambiente arquitetônico" className="absolute inset-0 h-full w-full object-contain object-top sepia-[.15] lg:object-cover lg:object-[56%_center]" />
          <div className="absolute inset-0 bg-[#7d5e42]/10 mix-blend-multiply" />
          <span className="absolute bottom-4 left-5 sm:bottom-6 sm:left-6 border border-[#faf7f4]/70 px-3 py-2 text-[9px] tracking-[.18em] text-[#faf7f4]">ESTUDO · 01</span>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-[1440px] border-t border-[#d9d0c6] px-5 py-20 sm:px-12 sm:py-28 lg:px-24 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-12"><div className="lg:col-span-3"><SectionLabel>01 — A TRANSFORMAÇÃO</SectionLabel></div><div className="lg:col-span-8"><h2 className="max-w-4xl font-serif text-[clamp(3.2rem,6vw,6.4rem)] leading-[.84] tracking-[-.06em]">Não basta conhecer as ferramentas.<br /><em className="font-normal text-[#7D5E42]">Você precisa saber projetar.</em></h2><div className="mt-14 grid gap-8 border-t border-[#C8BEB4] pt-6 sm:grid-cols-2"><p className="text-sm leading-7 text-[#7D5E42]">Mais do que comandos isolados, você aprende uma forma clara de transformar decisões em projeto: com precisão, intenção e repertório técnico.</p><p className="text-sm leading-7 text-[#7D5E42]">Um percurso para ganhar autonomia, organizar processos e apresentar ideias que sustentam sua visão profissional.</p></div></div></div>
      </section>

      <section id="para-quem" className="border-y border-[#d9d0c6] bg-[#FAF7F4] px-5 py-20 sm:px-12 sm:py-24 lg:px-24"><div className="mx-auto max-w-[1248px]"><SectionLabel>02 — PARA QUEM É</SectionLabel><div className="grid gap-10 lg:grid-cols-2"><h2 className="font-serif text-5xl leading-[.86] tracking-[-.055em] sm:text-6xl">Para quem quer transformar conhecimento <em className="font-normal">em projeto.</em></h2><div className="grid border-t border-[#C8BEB4]">{audience.map((item,i)=><div key={item} className="flex items-center justify-between border-b border-[#D9D0C6] py-5"><span className="font-serif text-2xl text-[#7D5E42]">0{i+1}</span><span className="w-3/4 text-sm">{item}</span><Arrow /></div>)}</div></div></div></section>

      <section id="conteudo" className="mx-auto max-w-[1440px] px-5 py-20 sm:px-12 sm:py-28 lg:px-24 lg:py-36"><SectionLabel>03 — O QUE VOCÊ VAI APRENDER</SectionLabel><div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><h2 className="max-w-2xl font-serif text-5xl leading-[.86] tracking-[-.055em] sm:text-7xl">Um método para levar ideias <em className="font-normal">até a obra.</em></h2><p className="max-w-xs text-sm leading-7 text-[#7D5E42]">Seis módulos conectados por um mesmo objetivo: dar clareza ao seu processo de projeto.</p></div><div className="grid border-t border-[#C8BEB4] md:grid-cols-2">{modules.map(([number,title,desc])=><article key={number} className="group border-b border-[#C8BEB4] py-7 md:odd:border-r md:odd:pr-10 md:even:pl-10"><div className="flex justify-between"><span className="font-serif text-3xl text-[#B89060]">{number}</span><Arrow /></div><h3 className="mt-12 font-serif text-3xl tracking-[-.04em]">{title}</h3><p className="mt-3 max-w-sm text-xs leading-6 text-[#7D5E42]">{desc}</p></article>)}</div></section>

      <section id="professora" className="border-y border-[#d9d0c6] bg-[#7D5E42] px-6 py-24 text-[#FAF7F4] sm:px-12 lg:px-24"><div className="mx-auto grid max-w-[1248px] gap-12 lg:grid-cols-12"><div className="lg:col-span-3"><SectionLabel>04 — SOBRE A PROFESSORA</SectionLabel></div><div className="lg:col-span-8"><p className="font-serif text-4xl leading-[.94] tracking-[-.045em] sm:text-6xl">“Ensinar Revit é ensinar a enxergar o projeto como um sistema — sem perder a delicadeza da arquitetura.”</p><div className="mt-12 flex items-center gap-5 border-t border-[#FAF7F4]/30 pt-5"><span className="h-9 w-9 border border-[#B89060]" /><p className="text-[10px] leading-5 tracking-[.12em] text-[#EFE9E2] uppercase">Professora especialista em arquitetura e BIM<br />Uma experiência pensada para a prática profissional.</p></div></div></div></section>

      <section id="depoimentos" className="mx-auto max-w-[1440px] px-6 py-28 sm:px-12 lg:px-24"><SectionLabel>05 — DEPOIMENTOS</SectionLabel><blockquote className="max-w-5xl font-serif text-[clamp(3rem,5.8vw,6rem)] leading-[.87] tracking-[-.06em]">“O curso organizou o que parecia complexo. Hoje consigo conduzir um projeto com <em className="font-normal text-[#7D5E42]">muito mais segurança.</em>”</blockquote><div className="mt-12 border-t border-[#C8BEB4] pt-5 text-[10px] font-semibold tracking-[.12em] text-[#7D5E42] uppercase">Marina Alves · Arquiteta</div></section>

      <section id="oferta" className="border-y border-[#D9D0C6] bg-[#FAF7F4] px-5 py-20 sm:px-12 sm:py-24 lg:px-24"><div className="mx-auto grid max-w-[1248px] gap-12 lg:grid-cols-2"><div><SectionLabel>06 — MATRÍCULAS</SectionLabel><h2 className="font-serif text-5xl leading-[.84] tracking-[-.06em] sm:text-7xl">Seu próximo projeto <em className="font-normal">começa aqui.</em></h2></div><div className="border-t border-[#C8BEB4] pt-6"><div className="space-y-4 text-sm"><p className="flex justify-between gap-5"><span>Curso completo</span><span>06 módulos</span></p><p className="flex justify-between gap-5"><span>Acesso às aulas</span><span>Online</span></p><p className="flex justify-between gap-5"><span>Materiais complementares</span><span>Inclusos</span></p><p className="flex justify-between gap-5"><span>Certificado</span><span>Disponível</span></p></div><div className="mt-12 flex items-end justify-between border-t border-[#C8BEB4] pt-6"><span className="text-[10px] font-semibold tracking-[.14em] text-[#7D5E42] uppercase">Investimento</span><span className="font-serif text-3xl italic text-[#B89060]">a definir</span></div><a href="#inicio" className="mt-8 flex w-full items-center justify-between bg-[#B89060] px-6 py-5 text-[11px] font-semibold tracking-[.1em] text-white">COMEÇAR AGORA <Arrow /></a></div></div></section>

      <section id="faq" className="mx-auto max-w-[1000px] px-6 py-28 sm:px-12"><SectionLabel>07 — FAQ</SectionLabel><h2 className="mb-12 font-serif text-5xl tracking-[-.05em]">Dúvidas, <em className="font-normal">esclarecidas.</em></h2><div className="border-t border-[#C8BEB4]">{faqs.map(([question,answer],i)=><div key={question} className="border-b border-[#C8BEB4]"><button onClick={()=>setOpenFaq(openFaq===i?null:i)} className="flex w-full items-center justify-between py-5 text-left text-sm font-medium"><span>{question}</span><span className="ml-6 text-xl font-light">{openFaq===i?"−":"+"}</span></button>{openFaq===i&&<p className="max-w-2xl pb-6 text-sm leading-7 text-[#7D5E42]">{answer}</p>}</div>)}</div></section>

      <section className="relative overflow-hidden bg-[#4A3728] px-6 py-28 text-[#FAF7F4] sm:px-12 lg:px-24"><div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(#d9d0c633_1px,transparent_1px),linear-gradient(90deg,#d9d0c633_1px,transparent_1px)] [background-size:72px_72px]" /><div className="relative mx-auto flex max-w-[1248px] flex-col items-start justify-between gap-10 lg:flex-row lg:items-end"><h2 className="max-w-3xl font-serif text-5xl leading-[.84] tracking-[-.06em] sm:text-8xl">Da primeira linha ao <em className="font-normal text-[#B89060]">projeto completo.</em></h2><a href="#oferta" className="shrink-0 border border-[#B89060] px-6 py-4 text-[11px] font-semibold tracking-[.1em] text-[#FAF7F4]">QUERO COMEÇAR <Arrow /></a></div></section>
      <a href="#oferta" className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between bg-[#B89060] px-5 py-4 text-[11px] font-semibold tracking-[.11em] text-[#FAF7F4] shadow-[0_-8px_24px_rgba(74,55,40,.16)] md:hidden">QUERO DOMINAR O REVIT <Arrow /></a>
      <footer className="bg-[#4A3728] px-5 py-8 text-[#EFE9E2] sm:px-12 lg:px-24 sm:px-12 lg:px-24"><div className="mx-auto flex max-w-[1248px] flex-wrap justify-between gap-6 border-t border-[#EFE9E2]/25 pt-6 text-[9px] font-medium tracking-[.12em] uppercase"><span>© 2026 Curso Revit</span><div className="flex gap-5"><a href="#inicio">Instagram</a><a href="#inicio">Privacidade</a><a href="#inicio">Termos</a></div></div></footer>
    </main>
  );
}
