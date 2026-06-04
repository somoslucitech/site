import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TechMarquee from '@/components/TechMarquee'
import Process from '@/components/Process'
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
      <Process />
      <Services />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
