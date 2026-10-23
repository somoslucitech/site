import Hero from '@/components/Hero'
import TechMarquee from '@/components/TechMarquee'
import Projects from '@/components/Projects'
import Process from '@/components/Process'
import Services from '@/components/Services'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import JsonLd from '@/components/JsonLd'
import { FAQS, PROJECTS, SITE_URL } from '@/lib/content'

// Only the home page shows the projects list and this FAQ, so their schema lives here
const HOME_JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ItemList',
      '@id': `${SITE_URL}/#proyectos`,
      name: 'Proyectos de Somos Luci',
      itemListElement: PROJECTS.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}/proyectos/${p.slug}`,
        name: p.name,
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#preguntas`,
      mainEntity: FAQS.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
}

export default function Home() {
  return (
    <main className="[overflow-x:clip]">
      <JsonLd data={HOME_JSON_LD} />
      <Hero />
      <TechMarquee />
      <Projects />
      <Process />
      <Services />
      <FAQ />
      <Contact />
    </main>
  )
}
