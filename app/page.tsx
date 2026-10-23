import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TechMarquee from '@/components/TechMarquee'
import Projects from '@/components/Projects'
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
      <Projects />
      <Process />
      <Services />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
