type FaqItemProps = {
  id: string
  question: string
  answer: string
  open: boolean
  onToggle: () => void
}

export function FaqItem({
  id,
  question,
  answer,
  open,
  onToggle,
}: FaqItemProps) {
  const panelId = `${id}-panel`

  return (
    <div className="border-b border-sketch">
      <button
        id={id}
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="focus-ring group flex w-full items-center justify-between py-5 text-left text-sm font-medium"
      >
        <span className="transition-colors duration-200 group-hover:text-brown">
          {question}
        </span>
        <span
          className={`ml-6 text-xl font-light transition-transform duration-200 ${
            open ? "rotate-45" : "rotate-0"
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      {open && (
        <p
          id={panelId}
          role="region"
          aria-labelledby={id}
          className="faq-in max-w-2xl pb-6 text-sm leading-7 text-brown"
        >
          {answer}
        </p>
      )}
    </div>
  )
}
