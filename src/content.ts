// Centralized copy/data for the landing page. Anything without confirmed
// client data is marked `placeholder: true` and rendered accordingly —
// see components/Testimonial.tsx, PracticalProject.tsx and Bonus.tsx.

export const navLinks: [label: string, id: string][] = [
  ["Sobre", "sobre"],
  ["Conteúdo", "conteudo"],
  ["Para quem é", "para-quem"],
  ["Metodologia", "metodologia"],
  ["Professora", "professora"],
  ["Depoimentos", "depoimentos"],
  ["FAQ", "faq"],
]

export type CourseModule = {
  number: string
  title: string
  description: string
}

export const modules: CourseModule[] = [
  {
    number: "01",
    title: "Fundamentos e interface",
    description:
      "Domine a lógica do Revit e organize seu ambiente de trabalho.",
  },
  {
    number: "02",
    title: "Modelagem arquitetônica",
    description: "Do primeiro traço aos elementos que compõem um projeto real.",
  },
  {
    number: "03",
    title: "Famílias e componentes",
    description:
      "Crie elementos inteligentes para trabalhar com mais agilidade.",
  },
  {
    number: "04",
    title: "Documentação do projeto",
    description: "Vistas, pranchas, tabelas e tudo o que comunica sua ideia.",
  },
  {
    number: "05",
    title: "Detalhamento",
    description: "Eleve o nível técnico e a leitura do seu projeto.",
  },
  {
    number: "06",
    title: "Projeto completo",
    description: "Aplique o método em um fluxo profissional do início ao fim.",
  },
]

export const audience: string[] = [
  "Estudantes de arquitetura",
  "Arquitetos iniciantes",
  "Designers de interiores",
  "Profissionais migrando para BIM",
  "Quem quer ganhar produtividade",
]

export type MethodologyStep = {
  number: string
  title: string
  description: string
}

export const methodology: MethodologyStep[] = [
  {
    number: "01",
    title: "Entenda",
    description:
      "Compreenda a lógica do Revit e como ele organiza informação, não apenas geometria.",
  },
  {
    number: "02",
    title: "Modele",
    description:
      "Construa o projeto com elementos inteligentes, do primeiro traço à estrutura completa.",
  },
  {
    number: "03",
    title: "Projete",
    description:
      "Transforme o modelo em documentação clara, pronta para comunicar e sustentar decisões.",
  },
]

export type Testimonial = {
  quote: string
  name: string
  role: string
  placeholder?: boolean
}

// TODO(cliente): substituir pelo primeiro depoimento real de aluno antes do lançamento.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Espaço reservado para o depoimento de um aluno — a ser adicionado após as primeiras turmas.",
    name: "",
    role: "",
    placeholder: true,
  },
]

export type FaqEntry = {
  question: string
  answer: string
}

export const faqs: FaqEntry[] = [
  {
    question: "Preciso ter conhecimento prévio em Revit?",
    answer:
      "Não. O curso começa pelos fundamentos e evolui para o desenvolvimento de um projeto completo.",
  },
  {
    question: "Por quanto tempo terei acesso às aulas?",
    answer:
      "O acesso é online e você poderá estudar no seu ritmo, revendo as aulas sempre que precisar.",
  },
  {
    question: "Recebo certificado?",
    answer:
      "Sim. Ao concluir o percurso, você poderá emitir o seu certificado de participação.",
  },
  {
    question: "Qual versão do Revit é necessária?",
    answer:
      "As aulas são estruturadas para que os conceitos e o fluxo de trabalho sejam aplicáveis às versões atuais do software.",
  },
  {
    question: "Preciso de um computador potente para acompanhar o curso?",
    answer:
      "O Revit é um software exigente. Recomenda-se um computador com Windows, processador e placa de vídeo compatíveis com os requisitos oficiais da Autodesk.",
  },
]

export type BonusItem = {
  title: string
  placeholder: true
}

// TODO(cliente): confirmar itens de bônus reais antes do lançamento.
export const bonusItems: BonusItem[] = [
  { title: "Bônus a definir", placeholder: true },
  { title: "Bônus a definir", placeholder: true },
]
