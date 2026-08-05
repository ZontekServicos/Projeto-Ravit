import { PrimaryButton } from "@/components/PrimaryButton"

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden">
      <PrimaryButton
        href="#oferta"
        full
        className="shadow-[0_-8px_24px_rgba(74,55,40,.16)]"
      >
        QUERO DOMINAR O REVIT
      </PrimaryButton>
    </div>
  )
}
