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
        className="focus-ring flex w-full items-center justify-between py-5 text-left text-sm font-medium"
      >
        <span>{question}</span>
        <span className="ml-6 text-xl font-light" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p
          id={panelId}
          role="region"
          aria-labelledby={id}
          className="max-w-2xl pb-6 text-sm leading-7 text-brown"
        >
          {answer}
        </p>
      )}
    </div>
  )
}
