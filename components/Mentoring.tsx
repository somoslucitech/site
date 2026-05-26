'use client'

import { motion } from 'framer-motion'
import {
  VideoCamera,
  CheckCircle,
  ArrowRight,
  CalendarBlank,
  Clock,
  Star,
  User,
} from '@phosphor-icons/react'

const BENEFITS = [
  {
    icon: VideoCamera,
    title: 'Sesiones en vivo por Google Meet',
    desc: 'Cada mentoría es una videollamada 1:1 en tiempo real. Sin grabaciones genéricas.',
  },
  {
    icon: User,
    title: 'Completamente personalizada',
    desc: 'Nos adaptamos a tu nivel, tus objetivos y el tiempo que tienes disponible.',
  },
  {
    icon: Clock,
    title: 'A tu ritmo',
    desc: 'Una sesión por semana o la frecuencia que mejor se ajuste a tu agenda.',
  },
  {
    icon: Star,
    title: 'Material de apoyo incluido',
    desc: 'Recursos, ejercicios y referencias curadas para cada tema que trabajamos.',
  },
]

const PROFILES = [
  { label: 'Quiero entrar al mundo tech', color: 'bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 border-sky-100 dark:border-sky-900/50' },
  { label: 'Soy dev y quiero crecer', color: 'bg-[#00CED1]/8 text-[#00CED1] border-[#00CED1]/15' },
  { label: 'Necesito orientación de carrera', color: 'bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 border-violet-100 dark:border-violet-900/50' },
  { label: 'Quiero aprender a programar', color: 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-900/50' },
]

export default function Mentoring() {
  return (
    <section
      id="formacion"
      className="mentoring-bg py-28 relative overflow-hidden"
    >
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
            Formación & Mentoría
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white max-w-xl leading-[1.08]">
            Tu guía en tech,
            <br />
            <span className="text-slate-400 dark:text-slate-500">a tu ritmo.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 90, damping: 20 }}
          >
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">Ideal para quienes...</p>
            <div className="flex flex-wrap gap-2 mb-10">
              {PROFILES.map((p) => (
                <span
                  key={p.label}
                  className={`px-3 py-1.5 rounded-full border text-xs font-semibold ${p.color}`}
                >
                  {p.label}
                </span>
              ))}
            </div>

            <div className="space-y-6 mb-10">
              {BENEFITS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[#00CED1]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={17} className="text-[#00CED1]" weight="duotone" />
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-slate-900 dark:text-white mb-0.5">{title}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.a
              href="#formacion"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[12px] bg-[#FACC15] text-slate-900 font-semibold text-sm shadow-[0_6px_24px_0_rgba(250,204,21,0.4)] hover:shadow-[0_8px_32px_0_rgba(250,204,21,0.5)] transition-shadow duration-300"
            >
              Reservar mi mentoría
              <ArrowRight size={15} weight="bold" />
            </motion.a>
          </motion.div>

          {/* Right — Calendly block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 90, damping: 20, delay: 0.1 }}
          >
            <div className="glass-card rounded-[2rem] p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#00CED1] flex items-center justify-center shadow-[0_4px_14px_0_rgba(0,206,209,0.35)]">
                  <CalendarBlank size={18} className="text-white" weight="bold" />
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-slate-900 dark:text-white">Agendá tu sesión</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">Mentoría 1:1 por Google Meet</p>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 overflow-hidden mb-6">
                <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-700/50 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Elegí un horario</span>
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">30 min · Gratis</span>
                </div>

                {/*
                  REEMPLAZÁ este bloque por tu embed real de Calendly:
                  <div
                    className="calendly-inline-widget"
                    data-url={process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/TU-USUARIO/mentoria-30min'}
                    style={{ minWidth: '320px', height: '700px' }}
                  />
                  <script src="https://assets.calendly.com/assets/external/widget.js" async />
                */}
                <div className="p-6 flex flex-col items-center justify-center text-center gap-3 min-h-[280px]">
                  <div className="w-14 h-14 rounded-2xl bg-[#00CED1]/10 flex items-center justify-center mb-2">
                    <CalendarBlank size={28} className="text-[#00CED1]" weight="duotone" />
                  </div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Calendario de Calendly
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 max-w-[28ch] leading-relaxed">
                    Aquí se incrustará tu calendario de Calendly para agendar directamente.
                  </p>
                  <a
                    href={process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#00CED1] text-white text-xs font-semibold hover:bg-[#00B5B8] transition-colors"
                  >
                    Ver disponibilidad
                    <ArrowRight size={12} weight="bold" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: '30 min', sub: 'Sesión inicial' },
                  { label: 'Google', sub: 'Meet incluido' },
                  { label: 'Gratis', sub: 'Primera vez' },
                ].map((b) => (
                  <div
                    key={b.label}
                    className="rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 px-3 py-2.5 text-center"
                  >
                    <p className="text-sm font-bold text-slate-900 dark:text-white">{b.label}</p>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">{b.sub}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-start gap-2 p-3.5 rounded-xl bg-[#00CED1]/6 border border-[#00CED1]/12">
                <CheckCircle size={14} weight="fill" className="text-[#00CED1] flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Recibirás un link de Google Meet por correo al confirmar la sesión.
                  Sin tarjeta de crédito requerida.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
