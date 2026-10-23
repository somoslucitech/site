import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowUpRight, CheckCircle } from '@phosphor-icons/react/dist/ssr'
import Breadcrumbs, { breadcrumbSchema } from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import PageCta from '@/components/PageCta'
import { KindBadge, ProjectStatus, Screenshot, StackTags } from '@/components/Projects'
import { ORG_ID, PROJECTS, SITE_URL, domain, getProject } from '@/lib/content'

export const dynamicParams = false

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProject(params.slug)
  if (!p) return {}
  const title = `${p.name}: caso de estudio`
  return {
    title,
    description: p.desc,
    alternates: { canonical: `/proyectos/${p.slug}` },
    openGraph: {
      title: `${title} | Somos Luci`,
      description: p.desc,
      url: `/proyectos/${p.slug}`,
      type: 'article',
      images: [{ url: `/proyectos/${p.slug}.webp`, width: 1600, height: 830, alt: `Captura de ${p.name}` }],
    },
    twitter: { card: 'summary_large_image', title: `${title} | Somos Luci`, description: p.desc, images: [`/proyectos/${p.slug}.webp`] },
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug)
  if (!p) notFound()

  const crumbs = [
    { label: 'Inicio', href: '/' },
    { label: 'Proyectos', href: '/proyectos' },
    { label: p.name, href: `/proyectos/${p.slug}` },
  ]
  const others = PROJECTS.filter((o) => o.slug !== p.slug).slice(0, 3)

  return (
    <main className="[overflow-x:clip] bg-white dark:bg-slate-950">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            breadcrumbSchema(crumbs),
            {
              '@type': 'CreativeWork',
              '@id': `${SITE_URL}/proyectos/${p.slug}#caso`,
              name: `${p.name}: caso de estudio`,
              description: p.summary,
              inLanguage: 'es',
              url: `${SITE_URL}/proyectos/${p.slug}`,
              image: `${SITE_URL}/proyectos/${p.slug}.webp`,
              author: { '@id': ORG_ID },
              about: {
                '@type': 'WebApplication',
                name: p.name,
                url: p.url,
                applicationCategory: 'BusinessApplication',
                description: p.desc,
                creator: { '@id': ORG_ID },
              },
            },
          ],
        }}
      />

      {/* Header */}
      <section className="mesh-bg pt-28 lg:pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-14 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <KindBadge kind={p.kind} />
                <ProjectStatus status={p.status} />
              </div>
              <h1 className="text-[40px] md:text-[56px] font-bold tracking-tighter leading-[1.02] text-slate-900 dark:text-white mb-6">
                {p.name}
              </h1>
              <p className="text-[17px] text-slate-600 dark:text-slate-400 leading-relaxed mb-8">{p.summary}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[12px] bg-[#FACC15] text-slate-900 font-semibold text-sm shadow-[0_6px_24px_0_rgba(250,204,21,0.45)] hover:shadow-[0_8px_32px_0_rgba(250,204,21,0.55)] transition-shadow duration-300"
              >
                Visitar {domain(p.url)}
                <ArrowUpRight size={15} weight="bold" />
              </a>
            </div>
            <div className="group">
              <Screenshot p={p} eager sizes="(min-width: 1024px) 680px, 100vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">El reto</h2>
              <p className="text-[16px] text-slate-600 dark:text-slate-400 leading-relaxed">{p.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">Lo que construimos</h2>
              <p className="text-[16px] text-slate-600 dark:text-slate-400 leading-relaxed">{p.solution}</p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-5">Funciones principales</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[15px] text-slate-700 dark:text-slate-300">
                    <CheckCircle size={18} weight="fill" className="text-[#00CED1] flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 h-fit rounded-[2rem] border border-slate-100 dark:border-slate-800 bg-[#F8FAFC] dark:bg-slate-900 p-8 space-y-7">
            <div>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-3">Tipo</h2>
              <p className="text-[15px] font-medium text-slate-900 dark:text-white">
                {p.kind === 'Producto propio' ? 'Producto propio de Somos Luci' : 'Desarrollo para cliente'}
              </p>
            </div>
            <div>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-3">Estado</h2>
              <ProjectStatus status={p.status} />
            </div>
            <div>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-3">Stack</h2>
              <StackTags stack={p.stack} />
            </div>
            <div>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-3">Sitio</h2>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#007C80] dark:text-[#00CED1]"
              >
                {domain(p.url)}
                <ArrowUpRight size={13} weight="bold" />
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Other projects */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Otros proyectos</h2>
            <Link href="/proyectos" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#007C80] dark:text-[#00CED1]">
              Ver todos
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/proyectos/${o.slug}`}
                className="group rounded-[2rem] border border-slate-100 dark:border-slate-800 bg-[#F8FAFC] dark:bg-slate-900 p-5 hover:border-slate-200 dark:hover:border-slate-700 transition-colors"
              >
                <Screenshot p={o} eager={false} sizes="(min-width: 768px) 380px, 100vw" />
                <div className="pt-5 px-1">
                  <KindBadge kind={o.kind} />
                  <h3 className="mt-3 text-lg font-bold tracking-tight text-slate-900 dark:text-white">{o.name}</h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">{o.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="¿Tienes un proyecto parecido?"
        text="Cuéntanos tu idea por WhatsApp o correo. En menos de 48 horas te enviamos una propuesta con alcance, stack, tiempos y presupuesto."
      />
    </main>
  )
}
