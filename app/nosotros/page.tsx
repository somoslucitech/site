import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from '@phosphor-icons/react/dist/ssr'
import Breadcrumbs, { breadcrumbSchema } from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import PageCta from '@/components/PageCta'
import { ABOUT, ORG_ID, PROJECTS, SERVICES, SITE_URL } from '@/lib/content'

const crumbs = [
  { label: 'Inicio', href: '/' },
  { label: 'Quiénes somos', href: '/nosotros' },
]

const DESCRIPTION =
  'Somos Luci es un estudio de desarrollo de software en Valencia, Venezuela. Construimos productos digitales de punta a punta para clientes y desarrollamos nuestros propios SaaS.'

export const metadata: Metadata = {
  title: 'Quiénes somos',
  description: DESCRIPTION,
  alternates: { canonical: '/nosotros' },
  openGraph: { url: '/nosotros', title: 'Quiénes somos | Somos Luci', description: DESCRIPTION },
}

const ownCount = PROJECTS.filter((p) => p.kind === 'Producto propio').length
const STATS = [
  { value: String(PROJECTS.length), label: 'productos en línea' },
  { value: String(ownCount), label: 'SaaS propios' },
  { value: '7 días', label: 'por sprint' },
  { value: '48 h', label: 'para tu propuesta' },
]

export default function AboutPage() {
  return (
    <main className="[overflow-x:clip] bg-white dark:bg-slate-950">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            breadcrumbSchema(crumbs),
            {
              '@type': 'AboutPage',
              '@id': `${SITE_URL}/nosotros#pagina`,
              url: `${SITE_URL}/nosotros`,
              name: 'Quiénes somos',
              description: DESCRIPTION,
              inLanguage: 'es',
              about: { '@id': ORG_ID },
            },
          ],
        }}
      />

      {/* Header */}
      <section className="mesh-bg pt-28 lg:pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#00CED1] mb-4">Quiénes somos</p>
            <h1 className="text-[38px] md:text-[56px] font-bold tracking-tighter leading-[1.04] text-slate-900 dark:text-white mb-6">
              Construimos software
              <br />
              <span className="text-[#00CED1]">y lo hacemos crecer.</span>
            </h1>
            <p className="text-[17px] md:text-[18px] text-slate-600 dark:text-slate-400 leading-relaxed">{ABOUT.intro}</p>
          </div>

          <dl className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="glass-card rounded-2xl p-6">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block text-[32px] font-bold tracking-tighter text-slate-900 dark:text-white leading-none">{s.value}</span>
                  <span className="mt-2 block text-sm text-slate-500 dark:text-slate-400">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900 dark:text-white leading-tight">
            Nuestra historia
          </h2>
          <div className="space-y-5 text-[16px] text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>{ABOUT.story}</p>
            <p>{ABOUT.experience}</p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900 dark:text-white mb-8">Cómo trabajamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ABOUT.principles.map((p) => (
              <div key={p.title} className="rounded-[2rem] border border-slate-100 dark:border-slate-800 bg-[#F8FAFC] dark:bg-slate-900 p-7">
                <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white mb-2">{p.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths + links */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="rounded-[2rem] border border-slate-100 dark:border-slate-800 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">En qué somos fuertes</h2>
            <ul className="space-y-3.5">
              {ABOUT.strengths.map((s) => (
                <li key={s} className="flex items-start gap-3 text-[15px] text-slate-700 dark:text-slate-300">
                  <CheckCircle size={20} weight="fill" className="text-[#00CED1] flex-shrink-0 mt-0.5" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-slate-100 dark:border-slate-800 bg-[#F8FAFC] dark:bg-slate-900 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">Servicios</h2>
            <ul className="space-y-4 mb-8">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#007C80] dark:text-[#00CED1]"
                  >
                    {s.title}
                    <ArrowRight size={14} weight="bold" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-[12px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium text-sm hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
            >
              Ver todos los proyectos
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      <PageCta
        title="¿Trabajamos juntos?"
        text="Cuéntanos tu idea por WhatsApp o correo. Respondemos en menos de 2 horas hábiles y en 48 horas tienes una propuesta."
      />
    </main>
  )
}
