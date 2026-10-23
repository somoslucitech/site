'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'
import { PROJECTS, type Project } from '@/lib/content'

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, type: 'spring', stiffness: 90, damping: 20 },
  }),
}

const domain = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '')

function Screenshot({ p, eager, sizes }: { p: Project; eager: boolean; sizes: string }) {
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
          srcSet={`/proyectos/${p.slug}-800.webp 800w, /proyectos/${p.slug}.webp 1600w`}
          sizes={sizes}
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
          ? 'bg-[#00CED1]/10 border border-[#00CED1]/20 text-[#007C80] dark:text-[#00CED1]'
          : 'bg-[#FACC15]/15 border border-[#FACC15]/30 text-amber-700 dark:text-[#FACC15]'
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
              <span className="text-slate-500 dark:text-slate-500">Con usuarios reales.</span>
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
              <Screenshot p={featured} eager sizes="(min-width: 1024px) 680px, 100vw" />
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
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#007C80] dark:text-[#00CED1]">
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
                <Screenshot p={p} eager={false} sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw" />

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
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#007C80] dark:text-[#00CED1]">
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
