'use client'

import { motion } from 'framer-motion'
import {
  Browser,
  ChartBar,
  ArrowUpRight,
  CheckCircle,
  Shapes,
  GitBranch,
  Database,
  CloudArrowUp,
} from '@phosphor-icons/react'

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, type: 'spring', stiffness: 90, damping: 20 },
  }),
}

const TECH_TAGS = ['Next.js', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS']

export default function Services() {
  return (
    <section id="servicios" className="py-28 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 90, damping: 20 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#00CED1] mb-3">
            Nuestras especialidades
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white max-w-xl leading-[1.08]">
            Ingeniería de software.
            <br />
            <span className="text-slate-400 dark:text-slate-500">Con rigor técnico.</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">

          {/* Card A — Desarrollo Web (2/3) */}
          <motion.div
            custom={0}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-2 group"
          >
            <div className="h-full rounded-[2rem] border border-slate-100 dark:border-slate-800 bg-[#F8FAFC] dark:bg-slate-900 p-8 hover:border-slate-200 dark:hover:border-slate-700 transition-colors duration-300 overflow-hidden relative">
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[#00CED1]/5 group-hover:bg-[#00CED1]/10 transition-all duration-500 blur-2xl" />

              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-[#00CED1]/10 flex items-center justify-center">
                    <Browser size={22} className="text-[#00CED1]" weight="duotone" />
                  </div>
                  <a
                    href="#contacto"
                    className="flex items-center gap-1 text-xs font-semibold text-[#00CED1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Empezar proyecto
                    <ArrowUpRight size={13} weight="bold" />
                  </a>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
                  Desarrollo de MVPs & Apps
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-[15px] leading-relaxed mb-7 max-w-[50ch]">
                  Construimos aplicaciones web modernas y escalables diseñadas para traccionar. 
                  Enfocados en performance, seguridad y una experiencia de usuario impecable.
                </p>

                <ul className="space-y-2.5 mb-8">
                  {[
                    'Arquitectura robusta en Next.js & TypeScript',
                    'Diseño UI/UX orientado a conversión',
                    'Infraestructura escalable y segura',
                    'Entregas funcionales cada 7 días',
                  ].map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle size={14} weight="fill" className="text-[#00CED1] flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {TECH_TAGS.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card B — Consultoría (1/3) */}
          <motion.div
            custom={1}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group"
          >
            <div className="h-full rounded-[2rem] border border-slate-100 dark:border-slate-800 bg-[#F8FAFC] dark:bg-slate-900 p-8 hover:border-slate-200 dark:hover:border-slate-700 transition-colors duration-300 relative overflow-hidden flex flex-col">
              <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-[#FACC15]/8 group-hover:bg-[#FACC15]/15 transition-all duration-500 blur-2xl" />

              <div className="w-11 h-11 rounded-xl bg-[#FACC15]/15 flex items-center justify-center mb-6">
                <ChartBar size={22} className="text-amber-500" weight="duotone" />
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
                CTO as a Service
                <br />
                & Consultoría
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-[15px] leading-relaxed mb-7 flex-1">
                Acompañamos tus decisiones técnicas críticas, auditamos tu stack y definimos roadmaps de escalabilidad.
              </p>

              <ul className="space-y-2.5 mt-auto">
                {[
                  'Auditoría de código y seguridad',
                  'Estrategia técnica para startups',
                  'Selección de stack y optimización',
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle size={14} weight="fill" className="text-amber-400 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Tech icons strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 90, damping: 20, delay: 0.2 }}
          className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { icon: Shapes, label: 'Diseño de sistemas', color: 'bg-violet-50 dark:bg-violet-950/40', text: 'text-violet-500' },
            { icon: GitBranch, label: 'Control de versiones', color: 'bg-slate-50 dark:bg-slate-800', text: 'text-slate-500 dark:text-slate-400' },
            { icon: Database, label: 'Bases de datos', color: 'bg-sky-50 dark:bg-sky-950/40', text: 'text-sky-500' },
            { icon: CloudArrowUp, label: 'Deploy en la nube', color: 'bg-emerald-50 dark:bg-emerald-950/40', text: 'text-emerald-500' },
          ].map(({ icon: Icon, label, color, text }) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 flex items-center gap-3"
            >
              <div className={`w-9 h-9 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
                <Icon size={18} className={text} weight="duotone" />
              </div>
              <span className="text-[13px] font-medium text-slate-700 dark:text-slate-300">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
