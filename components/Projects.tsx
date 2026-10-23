'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, type: 'spring', stiffness: 90, damping: 20 },
  }),
}

type Project = {
  slug: string
  name: string
  kind: 'Producto propio' | 'Cliente'
  desc: string
  stack: string[]
  url: string
}

const PROJECTS: Project[] = [
  {
    slug: 'perchero',
    name: 'Perchero',
    kind: 'Producto propio',
    desc: 'Tiendas en línea para importadores de ropa y accesorios: catálogo con tallas y colores, pedidos que llegan listos a WhatsApp y control real del margen de cada venta.',
    stack: ['Node.js', 'Drizzle', 'PostgreSQL', 'Cloudflare for SaaS'],
    url: 'https://perchero.app',
  },
  {
    slug: 'puntofix',
    name: 'PuntoFix',
    kind: 'Producto propio',
    desc: 'Sistema para talleres de reparación: órdenes, diagnósticos, repuestos y caja, con seguimiento del equipo desde el celular del cliente.',
    stack: ['FastAPI', 'React 19', 'PostgreSQL', 'Redis'],
    url: 'https://puntofix.app',
  },
  {
    slug: 'travelsdesk',
    name: 'TravelsDesk',
    kind: 'Producto propio',
    desc: 'El sistema operativo de una agencia de viajes: órdenes, cobranza, emisión, facturación y comisiones de agentes en un solo lugar.',
    stack: ['Next.js 15', 'FastAPI', 'PostgreSQL'],
    url: 'https://travelsdesk.app',
  },
  {
    slug: 'cover2video',
    name: 'cover2video',
    kind: 'Cliente',
    desc: 'Convierte la portada de un álbum y un fragmento del tema en un video de vinilo girando para Reels, TikTok y Shorts, procesado en el navegador.',
    stack: ['Preact', 'WebCodecs', 'Hono', 'Stripe'],
    url: 'https://cover2video.com',
  },
  {
    slug: 'bonchona',
    name: 'Bonchona 107.1 FM',
    kind: 'Cliente',
    desc: 'Sitio de la radio con transmisión en vivo, chat en tiempo real con los oyentes y gestión de cuñas antes de la señal.',
    stack: ['Next.js 15', 'Cloudflare Workers', 'Durable Objects'],
    url: 'https://bonchonaradio.com',
  },
  {
    slug: 'anhellakids',
    name: 'Anhella Kids',
    kind: 'Cliente',
    desc: 'Boutique infantil que vende todos los días: inventario por talla, carrito sin registro, pedidos por WhatsApp y panel de administración.',
    stack: ['Next.js 16', 'Cloudflare D1', 'R2'],
    url: 'https://www.anhellakids.com',
  },
  {
    slug: 'cesaractivo',
    name: 'Cesar Activo',
    kind: 'Cliente',
    desc: 'Plataforma de venta del programa Detox5, con cobros por PayPal, precios en dólares y euros, y casos de éxito.',
    stack: ['Next.js 16', 'Cloudflare Workers', 'PayPal'],
    url: 'https://cesaractivo.com',
  },
]

const domain = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '')

function Screenshot({ p, eager }: { p: Project; eager: boolean }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-200/70 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]">
      <div className="h-8 px-4 flex items-center gap-1.5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80">
        <span className="w-2 h-2 rounded-full bg-red-400/60" />
        <span className="w-2 h-2 rounded-full bg-amber-400/60" />
        <span className="w-2 h-2 rounded-full bg-emerald-400/60" />
        <span className="ml-3 font-mono text-[10px] text-slate-400 truncate">{domain(p.url)}</span>
      </div>
      <div className="relative aspect-[1600/830] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/proyectos/${p.slug}.webp`}
          alt={`Captura de ${p.name}`}
          width={1600}
          height={830}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
    </div>
  )
}

function KindBadge({ kind }: { kind: Project['kind'] }) {
  const own = kind === 'Producto propio'
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase ${
        own
          ? 'bg-[#00CED1]/10 border border-[#00CED1]/20 text-[#00CED1]'
          : 'bg-[#FACC15]/15 border border-[#FACC15]/30 text-amber-600 dark:text-[#FACC15]'
      }`}
    >
      {kind}
    </span>
  )
}

function StackTags({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((tag) => (
        <span
          key={tag}
          className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

export default function Projects() {
  const [featured, ...rest] = PROJECTS

  return (
    <section id="proyectos" className="py-24 bg-white dark:bg-slate-950 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 90, damping: 20 }}
          className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#00CED1] mb-3">
              Proyectos
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white max-w-xl leading-[1.08]">
              En producción.
              <br />
              <span className="text-slate-400 dark:text-slate-500">Con usuarios reales.</span>
            </h2>
          </div>
          <p className="text-[15px] text-slate-500 dark:text-slate-400 leading-relaxed max-w-[40ch]">
            Productos propios y de clientes que construimos de punta a punta y hoy están en línea.
          </p>
        </motion.div>

        {/* Featured */}
        <motion.a
          href={featured.url}
          target="_blank"
          rel="noopener noreferrer"
          custom={0}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="group block mb-5"
        >
          <div className="rounded-[2rem] border border-slate-100 dark:border-slate-800 bg-[#F8FAFC] dark:bg-slate-900 p-5 sm:p-8 hover:border-slate-200 dark:hover:border-slate-700 transition-colors duration-300 overflow-hidden relative grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 items-center">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#00CED1]/5 group-hover:bg-[#00CED1]/10 transition-all duration-500 blur-2xl" />

            <div className="relative">
              <Screenshot p={featured} eager />
            </div>

            <div className="relative">
              <div className="flex items-center justify-between mb-5">
                <KindBadge kind={featured.kind} />
                <ArrowUpRight
                  size={18}
                  weight="bold"
                  className="text-slate-300 dark:text-slate-600 group-hover:text-[#00CED1] transition-colors duration-300"
                />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
                {featured.name}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-[15px] leading-relaxed mb-7">
                {featured.desc}
              </p>
              <div className="mb-7">
                <StackTags stack={featured.stack} />
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00CED1]">
                {domain(featured.url)}
                <ArrowUpRight size={14} weight="bold" />
              </span>
            </div>
          </div>
        </motion.a>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((p, i) => (
            <motion.a
              key={p.slug}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              custom={(i % 3) + 1}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group h-full"
            >
              <div className="h-full rounded-[2rem] border border-slate-100 dark:border-slate-800 bg-[#F8FAFC] dark:bg-slate-900 p-5 hover:border-slate-200 dark:hover:border-slate-700 transition-colors duration-300 flex flex-col">
                <Screenshot p={p} eager={false} />

                <div className="pt-6 px-1 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <KindBadge kind={p.kind} />
                    <ArrowUpRight
                      size={16}
                      weight="bold"
                      className="text-slate-300 dark:text-slate-600 group-hover:text-[#00CED1] transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
                    {p.name}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {p.desc}
                  </p>
                  <div className="mt-auto flex flex-col gap-5">
                    <StackTags stack={p.stack} />
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00CED1]">
                      {domain(p.url)}
                      <ArrowUpRight size={13} weight="bold" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
