import type { Metadata } from 'next'
import Breadcrumbs, { breadcrumbSchema } from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import PageCta from '@/components/PageCta'
import Projects from '@/components/Projects'

const crumbs = [
  { label: 'Inicio', href: '/' },
  { label: 'Proyectos', href: '/proyectos' },
]

export const metadata: Metadata = {
  title: 'Proyectos y casos de estudio',
  description:
    'Productos propios y de clientes que construimos de punta a punta: SaaS, tiendas en línea, plataformas de venta y herramientas web. Mira el reto, la solución y el stack de cada uno.',
  alternates: { canonical: '/proyectos' },
  openGraph: { url: '/proyectos', title: 'Proyectos y casos de estudio | Somos Luci' },
}

export default function ProjectsPage() {
  return (
    <main className="[overflow-x:clip] bg-white dark:bg-slate-950 pt-20">
      <JsonLd data={{ '@context': 'https://schema.org', ...breadcrumbSchema(crumbs) }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 -mb-16">
        <Breadcrumbs items={crumbs} />
      </div>
      <Projects asPage />
      <PageCta
        title="¿Quieres que tu proyecto sea el próximo?"
        text="Cuéntanos tu idea por WhatsApp o correo. En menos de 48 horas te enviamos una propuesta con alcance, stack, tiempos y presupuesto."
      />
    </main>
  )
}
