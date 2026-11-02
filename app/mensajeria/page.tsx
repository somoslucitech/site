import type { Metadata } from 'next'
import Link from 'next/link'
import { BellRinging, CalendarCheck, ChatCircleDots, CheckCircle } from '@phosphor-icons/react/dist/ssr'
import Breadcrumbs, { breadcrumbSchema } from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import { EMPRESA } from '@/components/LegalPage'
import { CONTACT_EMAIL, ORG_ID, SITE_URL } from '@/lib/content'

const PATH = '/mensajeria'
const DESCRIPTION =
  'Somos Luci Mensajería conecta la cuenta de WhatsApp Business de tu empresa a un asistente que responde consultas, agenda citas y envía avisos a tus clientes. Tu número sigue siendo tuyo.'

export const metadata: Metadata = {
  title: 'Somos Luci Mensajería · Asistente de WhatsApp para empresas',
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { url: PATH, title: 'Somos Luci Mensajería | Somos Luci', description: DESCRIPTION },
}

const crumbs = [
  { label: 'Inicio', href: '/' },
  { label: 'Somos Luci Mensajería', href: PATH },
]

const FUNCIONES = [
  {
    icon: ChatCircleDots,
    title: 'Responde consultas',
    desc: 'Un asistente contesta a tus clientes por WhatsApp con la información real de tu negocio: productos, precios, disponibilidad, horarios y formas de pago. Si no sabe algo, pasa la conversación a una persona.',
  },
  {
    icon: CalendarCheck,
    title: 'Agenda citas',
    desc: 'Tus clientes piden su cita por WhatsApp y el asistente la registra según tu disponibilidad, la confirma y la recuerda antes de la fecha.',
  },
  {
    icon: BellRinging,
    title: 'Envía avisos',
    desc: 'Confirmaciones de pedido, avisos de envío, recordatorios de pago y novedades, con plantillas aprobadas por WhatsApp y solo a clientes que te escribieron o aceptaron recibirlos.',
  },
]

const PASOS = [
  'Desde la plataforma de Somos Luci (o desde Perchero, si tienes una tienda) tocas «Conectar mi WhatsApp» e inicias sesión con tu cuenta de Meta.',
  'Eliges tu cuenta y tu número de WhatsApp Business y autorizas a Somos Luci Mensajería a operarlo en tu nombre. Si ya usas la app WhatsApp Business, puedes seguir usándola en el teléfono.',
  'Configuras qué responde el asistente, tus horarios, tus citas y tus avisos. Desde el panel ves todas las conversaciones y puedes responder tú cuando quieras.',
]

const GARANTIAS = [
  'Tu cuenta y tu número de WhatsApp siguen siendo tuyos.',
  'Los mensajes los pagas directamente a Meta, con tu propia tarjeta, según sus tarifas.',
  'Los datos de cada empresa están separados: solo se usan para prestarte el servicio, no se venden ni se comparten con otras empresas.',
  'Puedes desconectar tu cuenta en cualquier momento, desde nuestra plataforma o desde la configuración de tu negocio en Meta.',
]

export default function MessagingPage() {
  return (
    <main className="[overflow-x:clip] bg-white dark:bg-slate-950">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            breadcrumbSchema(crumbs),
            {
              '@type': 'Service',
              '@id': `${SITE_URL}${PATH}#servicio`,
              name: 'Somos Luci Mensajería',
              serviceType: 'Asistente y mensajería de WhatsApp Business para empresas',
              description: DESCRIPTION,
              url: `${SITE_URL}${PATH}`,
              provider: { '@id': ORG_ID },
              areaServed: 'VE',
              inLanguage: 'es',
            },
          ],
        }}
      />

      {/* Header */}
      <section className="mesh-bg pt-28 lg:pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#00CED1] mb-4">Somos Luci Mensajería</p>
            <h1 className="text-[38px] md:text-[56px] font-bold tracking-tighter leading-[1.04] text-slate-900 dark:text-white mb-6">
              Tu WhatsApp atiende,
              <br />
              <span className="text-[#00CED1]">agenda y avisa.</span>
            </h1>
            <p className="text-[17px] md:text-[18px] text-slate-600 dark:text-slate-400 leading-relaxed">
              Conectamos la cuenta de WhatsApp Business de tu empresa a un asistente que responde a tus clientes, agenda
              sus citas y les envía avisos, sobre la plataforma oficial de WhatsApp Business de Meta. Somos Luci es
              proveedor de tecnología de Meta.
            </p>
          </div>
        </div>
      </section>

      {/* Qué hace */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900 dark:text-white mb-8">Qué hace por tu negocio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {FUNCIONES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-[2rem] border border-slate-100 dark:border-slate-800 bg-[#F8FAFC] dark:bg-slate-900 p-7">
                <Icon size={28} weight="duotone" className="text-[#00CED1] mb-4" />
                <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900 dark:text-white leading-tight">Cómo funciona</h2>
          <ol className="space-y-5">
            {PASOS.map((paso, i) => (
              <li key={i} className="flex items-start gap-4 text-[16px] text-slate-600 dark:text-slate-400 leading-relaxed">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00CED1]/10 text-[#007C80] dark:text-[#00CED1] font-bold text-sm flex items-center justify-center">
                  {i + 1}
                </span>
                {paso}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Garantías + quién lo presta */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="rounded-[2rem] border border-slate-100 dark:border-slate-800 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">Tu cuenta, tus datos</h2>
            <ul className="space-y-3.5">
              {GARANTIAS.map((g) => (
                <li key={g} className="flex items-start gap-3 text-[15px] text-slate-700 dark:text-slate-300">
                  <CheckCircle size={20} weight="fill" className="text-[#00CED1] flex-shrink-0 mt-0.5" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-slate-100 dark:border-slate-800 bg-[#F8FAFC] dark:bg-slate-900 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">Quién presta el servicio</h2>
            <div className="space-y-3 text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                <strong className="text-slate-800 dark:text-slate-200">{EMPRESA.razonSocial}</strong>, RIF {EMPRESA.rif}, empresa
                venezolana de desarrollo de software con sede en Valencia, estado Carabobo.
              </p>
              <p>
                Lo usan las tiendas en línea de{' '}
                <a href="https://perchero.app" className="text-[#007C80] dark:text-[#00CED1] font-medium underline underline-offset-2">
                  Perchero
                </a>
                , nuestra plataforma de comercio electrónico, y otras empresas que atienden a sus clientes por WhatsApp.
              </p>
              <p>
                Contacto: <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#007C80] dark:text-[#00CED1] font-medium underline underline-offset-2">{CONTACT_EMAIL}</a> ·
                WhatsApp <a href={EMPRESA.whatsappUrl} className="text-[#007C80] dark:text-[#00CED1] font-medium underline underline-offset-2">{EMPRESA.whatsapp}</a>
              </p>
              <p className="pt-2 flex flex-wrap gap-x-5 gap-y-2">
                <Link href="/mensajeria/privacidad" className="text-[#007C80] dark:text-[#00CED1] font-semibold">
                  Política de privacidad
                </Link>
                <Link href="/mensajeria/eliminar-datos" className="text-[#007C80] dark:text-[#00CED1] font-semibold">
                  Eliminación de datos
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-100 dark:border-slate-800 bg-[#F8FAFC] dark:bg-slate-900 p-8 sm:p-12 md:p-16">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#00CED1]/10 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900 dark:text-white leading-tight mb-4">
              ¿Quieres conectar el WhatsApp de tu empresa?
            </h2>
            <p className="text-[16px] text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
              Escríbenos y te contamos cómo funcionaría para tu negocio, qué cuesta y cuánto tarda en estar listo.
            </p>
            <a
              href={`${EMPRESA.whatsappUrl}?text=${encodeURIComponent('Hola, quiero información sobre Somos Luci Mensajería.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-[12px] bg-[#FACC15] text-slate-900 font-semibold text-sm shadow-[0_6px_24px_0_rgba(250,204,21,0.45)] hover:shadow-[0_8px_32px_0_rgba(250,204,21,0.55)] transition-shadow duration-300"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
