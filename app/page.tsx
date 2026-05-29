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
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <TechMarquee />
      <ScrollConstruction />
      <Services />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
