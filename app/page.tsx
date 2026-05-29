import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TechMarquee from '@/components/TechMarquee'
import ScrollConstruction from '@/components/ScrollConstruction'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="[overflow-x:clip]">
      <Navbar />
      <Hero />
      <TechMarquee />
      <ScrollConstruction />
      <Services />
      {/* Gradient bridge — evita el corte brusco de blanco a slate-100 */}
      <div className="h-20 bg-gradient-to-b from-white to-[#F1F5F9] dark:from-slate-950 dark:to-slate-900 pointer-events-none" />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
