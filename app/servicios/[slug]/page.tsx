import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle, Plus, UserCircle } from '@phosphor-icons/react/dist/ssr'
import Breadcrumbs, { breadcrumbSchema } from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import PageCta from '@/components/PageCta'
import { KindBadge, Screenshot } from '@/components/Projects'
import { ORG_ID, PROCESS_STEPS, SERVICES, SITE_URL, getProject, getService, whatsappLink, type Project } from '@/lib/content'

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService(params.slug)
  if (!s) return {}
  return {
    title: s.h1,
    description: s.metaDescription,
    alternates: { canonical: `/servicios/${s.slug}` },
    openGraph: { title: `${s.h1} | Somos Luci`, description: s.metaDescription, url: `/servicios/${s.slug}` },
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = getService(params.slug)
  if (!s) notFound()

  const crumbs = [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/#servicios' },
    { label: s.title, href: `/servicios/${s.slug}` },
  ]
  const related = s.relatedProjects.map(getProject).filter((p): p is Project => p !== undefined)
  const otherServices = SERVICES.filter((o) => o.slug !== s.slug)

  return (
    <main className="[overflow-x:clip] bg-white dark:bg-slate-950">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            breadcrumbSchema(crumbs),
            {
              '@type': 'Service',
              '@id': `${SITE_URL}/servicios/${s.slug}#servicio`,
              name: s.title,
              serviceType: s.title,
              description: s.summary,
              url: `${SITE_URL}/servicios/${s.slug}`,
              provider: { '@id': ORG_ID },
              areaServed: ['VE', 'US', 'Latinoamérica'],
              availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${SITE_URL}/#contacto` },
            },
            {
              '@type': 'FAQPage',
              mainEntity: s.faqs.map(({ q, a }) => ({
                '@type': 'Question',
                name: q,
                acceptedAnswer: { '@type': 'Answer', text: a },
              })),
            },
          ],
        }}
      />

      {/* Header */}
      <section className="mesh-bg pt-28 lg:pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#00CED1] mb-4">Servicio</p>
            <h1 className="text-[38px] md:text-[56px] font-bold tracking-tighter leading-[1.04] text-slate-900 dark:text-white mb-6">
              {s.h1}
            </h1>
            <p className="text-[17px] md:text-[18px] text-slate-600 dark:text-slate-400 leading-relaxed mb-9">{s.summary}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappLink(`Hola! Me interesa el servicio de ${s.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[12px] bg-[#FACC15] text-slate-900 font-semibold text-sm shadow-[0_6px_24px_0_rgba(250,204,21,0.45)] hover:shadow-[0_8px_32px_0_rgba(250,204,21,0.55)] transition-shadow duration-300"
              >
                Hablemos por WhatsApp
                <ArrowRight size={15} weight="bold" />
              </a>
              <Link
                href="/proyectos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[12px] border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 font-medium text-sm hover:bg-white dark:hover:bg-slate-800 transition-all duration-200"
              >
                Ver proyectos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For who + includes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="rounded-[2rem] border border-slate-100 dark:border-slate-800 bg-[#F8FAFC] dark:bg-slate-900 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">¿Para quién es?</h2>
            <ul className="space-y-4">
              {s.forWho.map((w) => (
                <li key={w} className="flex items-start gap-3 text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed">
                  <UserCircle size={20} weight="duotone" className="text-[#00CED1] flex-shrink-0 mt-0.5" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-slate-100 dark:border-slate-800 bg-[#F8FAFC] dark:bg-slate-900 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">Qué incluye</h2>
            <ul className="space-y-4">
              {s.includes.map((i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed">
                  <CheckCircle size={20} weight="fill" className="text-[#00CED1] flex-shrink-0 mt-0.5" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">Cómo trabajamos</h2>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS_STEPS.map((step, i) => (
              <li key={step.title} className="rounded-[2rem] border border-slate-100 dark:border-slate-800 p-7">
                <span className="text-[10px] font-mono font-bold text-[#007C80] dark:text-[#00CED1] uppercase tracking-[0.2em]">
                  Etapa 0{i + 1}
                </span>
                <h3 className="mt-3 text-lg font-bold tracking-tight text-slate-900 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">Proyectos relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/proyectos/${p.slug}`}
                  className="group rounded-[2rem] border border-slate-100 dark:border-slate-800 bg-[#F8FAFC] dark:bg-slate-900 p-5 hover:border-slate-200 dark:hover:border-slate-700 transition-colors"
                >
                  <Screenshot p={p} eager={false} sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw" />
                  <div className="pt-5 px-1">
                    <KindBadge kind={p.kind} />
                    <h3 className="mt-3 text-lg font-bold tracking-tight text-slate-900 dark:text-white">{p.name}</h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">{p.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">Preguntas frecuentes</h2>
          <div className="divide-y divide-slate-100 dark:divide-slate-800 border-y border-slate-100 dark:border-slate-800">
            {s.faqs.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex items-center justify-between gap-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="text-[17px] font-semibold tracking-tight text-slate-900 dark:text-white">{q}</h3>
                  <span className="w-8 h-8 shrink-0 rounded-full bg-[#00CED1]/10 flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
                    <Plus size={14} weight="bold" className="text-[#007C80] dark:text-[#00CED1]" />
                  </span>
                </summary>
                <p className="mt-3 pr-14 text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>

          <div className="mt-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-4">Otros servicios</p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {otherServices.map((o) => (
                <Link
                  key={o.slug}
                  href={`/servicios/${o.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#007C80] dark:text-[#00CED1]"
                >
                  {o.title}
                  <ArrowRight size={14} weight="bold" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageCta
        title={`Hablemos de tu proyecto`}
        text="Cuéntanos qué necesitas por WhatsApp o correo. En menos de 48 horas te enviamos una propuesta con alcance, stack, tiempos y presupuesto."
      />
    </main>
  )
}
