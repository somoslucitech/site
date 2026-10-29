import type { ReactNode } from 'react'
import Breadcrumbs, { breadcrumbSchema } from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import { ORG_ID, SITE_URL } from '@/lib/content'

// Datos legales de la empresa, compartidos por las páginas legales
export const EMPRESA = {
  razonSocial: 'Somos Luci, C.A.',
  rif: 'J-50890546-6',
  registro:
    'inscrita en el Registro Mercantil Primero del Estado Carabobo el 21 de octubre de 2026, bajo el N.° 21, Tomo 243-A, expediente N.° 314-82446',
  whatsapp: '+58 422 7765777',
  whatsappUrl: 'https://wa.me/584227765777',
}

type Props = {
  eyebrow?: string
  title: string
  description: string
  path: string
  updated: string
  children: ReactNode
}

// Encabezado, migas y cuerpo de texto legal con la estética del sitio
export default function LegalPage({ eyebrow = 'Legal', title, description, path, updated, children }: Props) {
  const crumbs = [
    { label: 'Inicio', href: '/' },
    { label: title, href: path },
  ]
  return (
    <main className="[overflow-x:clip] bg-white dark:bg-slate-950">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            breadcrumbSchema(crumbs),
            {
              '@type': 'WebPage',
              '@id': `${SITE_URL}${path}#pagina`,
              url: `${SITE_URL}${path}`,
              name: title,
              description,
              inLanguage: 'es',
              publisher: { '@id': ORG_ID },
            },
          ],
        }}
      />

      <section className="mesh-bg pt-28 lg:pt-36 pb-12">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <p className="text-xs font-semibold tracking-widest uppercase text-[#00CED1] mb-4">{eyebrow}</p>
          <h1 className="text-[34px] md:text-[48px] font-bold tracking-tighter leading-[1.05] text-slate-900 dark:text-white mb-4">
            {title}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Última actualización: {updated}</p>
        </div>
      </section>

      <article
        className="max-w-3xl mx-auto px-6 lg:px-8 pb-24 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400
          [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-slate-900 [&_h2]:dark:text-white [&_h2]:mt-12 [&_h2]:mb-4
          [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-slate-800 [&_h3]:dark:text-slate-200 [&_h3]:mt-6 [&_h3]:mb-2
          [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_li]:mb-1.5
          [&_a]:text-[#007C80] [&_a]:dark:text-[#00CED1] [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-2
          [&_strong]:text-slate-800 [&_strong]:dark:text-slate-200
          [&_table]:w-full [&_table]:text-sm [&_table]:mb-6 [&_th]:text-left [&_th]:font-semibold [&_th]:text-slate-800 [&_th]:dark:text-slate-200
          [&_th]:border-b [&_th]:border-slate-200 [&_th]:dark:border-slate-700 [&_th]:py-2 [&_th]:pr-4
          [&_td]:border-b [&_td]:border-slate-100 [&_td]:dark:border-slate-800 [&_td]:py-2 [&_td]:pr-4 [&_td]:align-top"
      >
        {children}
      </article>
    </main>
  )
}
