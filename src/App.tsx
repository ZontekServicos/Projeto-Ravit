import { Audience } from "@/components/Audience"
import { Bonus } from "@/components/Bonus"
import { Curriculum } from "@/components/Curriculum"
import { CtaBanner } from "@/components/CtaBanner"
import { Faq } from "@/components/Faq"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Instructor } from "@/components/Instructor"
import { Methodology } from "@/components/Methodology"
import { Offer } from "@/components/Offer"
import { PracticalProject } from "@/components/PracticalProject"
import { StickyMobileCta } from "@/components/StickyMobileCta"
import { Testimonials } from "@/components/Testimonials"
import { Transformation } from "@/components/Transformation"

export default function App() {
  return (
    <main className="overflow-x-hidden bg-paper pb-20 font-sans text-ink md:pb-0">
      <Header />
      <Hero />
      <Transformation />
      <Audience />
      <Curriculum />
      <PracticalProject />
      <Methodology />
      <Instructor />
      <Testimonials />
      <Bonus />
      <Offer />
      <Faq />
      <CtaBanner />
      <StickyMobileCta />
      <Footer />
    </main>
  )
}
