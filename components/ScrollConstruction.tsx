'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckCircle,
  GearSix,
  RocketLaunch,
  LockSimple,
  ArrowRight,
} from '@phosphor-icons/react'

const steps = [
  {
    num: '01',
    label: 'Llamada de descubrimiento',
    desc: 'Agenda una videollamada gratuita de 30 minutos. Cuéntanos tu idea y definimos juntos qué necesitas construir.',
  },
  {
    num: '02',
    label: 'Propuesta técnica',
    desc: 'En 48h recibes una propuesta con alcance, tecnologías, tiempos, presupuesto y cláusula de confidencialidad. Sin letra chica.',
  },
  {
    num: '03',
    label: 'Desarrollo iterativo',
    desc: 'Construimos con sprints cortos de 1–2 semanas. Revisas el avance, ajustamos y seguimos.',
  },
  {
    num: '04',
    label: 'Lanzamiento a producción',
    desc: 'Deploy, documentación completa y soporte post-lanzamiento incluido. Tu producto, listo para el mundo.',
  },
]

const URL_LABELS = ['descubrimiento', 'propuesta.pdf', 'localhost:3000', 'tusitio.com']

/* ── Phase 0: Wireframe skeleton ─────────────────────────── */
function Phase0() {
  return (
    <motion.div
      key="p0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="h-full flex flex-col"
    >
      <div className="flex items-center gap-3 px-5 py-3.5 border-b border-slate-100 dark:border-slate-700/60">
        <div className="h-3.5 w-14 rounded-full bg-slate-200 dark:bg-slate-700" />
        <div className="ml-auto flex gap-2.5">
          <div className="h-2.5 w-10 rounded-full bg-slate-200 dark:bg-slate-700" />
          <div className="h-2.5 w-10 rounded-full bg-slate-200 dark:bg-slate-700" />
          <div className="h-2.5 w-10 rounded-full bg-slate-200 dark:bg-slate-700" />
        </div>
      </div>
      <div className="px-6 py-7 space-y-3 flex-1">
        <div className="h-5 w-[72%] rounded-lg bg-slate-200 dark:bg-slate-700" />
        <div className="h-5 w-[55%] rounded-lg bg-slate-200 dark:bg-slate-700" />
        <div className="h-3.5 w-full rounded-lg bg-slate-100 dark:bg-slate-800 mt-4" />
        <div className="h-3.5 w-[88%] rounded-lg bg-slate-100 dark:bg-slate-800" />
        <div className="h-3.5 w-[76%] rounded-lg bg-slate-100 dark:bg-slate-800" />
        <div className="h-9 w-32 rounded-xl bg-slate-200 dark:bg-slate-700 mt-3" />
      </div>
      <div className="px-6 pb-5 grid grid-cols-3 gap-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-16 rounded-xl bg-slate-100 dark:bg-slate-800/60" />
        ))}
      </div>
      <div className="absolute bottom-4 right-5">
        <span className="text-[11px] font-mono text-slate-300 dark:text-slate-600">wireframe_v1.fig</span>
      </div>
    </motion.div>
  )
}

/* ── Phase 1: Propuesta técnica ──────────────────────────── */
const STACK = ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind', 'AWS']

function Phase1() {
  return (
    <motion.div
      key="p1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="h-full flex flex-col px-6 py-5 gap-4"
    >
      <div className="flex items-center gap-2 mb-1">
        <div className="w-6 h-6 rounded-md bg-[#00CED1]/15 flex items-center justify-center">
          <GearSix size={13} weight="duotone" className="text-[#00CED1]" />
        </div>
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wide">propuesta_tecnica.md</span>
      </div>

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Stack seleccionado</p>
        <div className="flex flex-wrap gap-1.5">
          {STACK.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08, type: 'spring', stiffness: 200, damping: 20 }}
              className="px-2.5 py-1 rounded-lg bg-[#00CED1]/10 border border-[#00CED1]/20 text-[11px] font-semibold text-[#00CED1]"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Alcance</p>
        <div className="space-y-1.5">
          {['Autenticación y usuarios', 'Dashboard principal', 'API REST + base de datos', 'Deploy en la nube'].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.09, type: 'spring', stiffness: 200, damping: 22 }}
              className="flex items-center gap-2"
            >
              <CheckCircle size={12} weight="fill" className="text-[#00CED1] flex-shrink-0" />
              <span className="text-xs text-slate-600 dark:text-slate-300">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Tiempo estimado</p>
        <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-700/60 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '65%' }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
            className="h-full rounded-full bg-gradient-to-r from-[#00CED1] to-[#00B5B8]"
          />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[10px] text-slate-400 dark:text-slate-500">Semana 1</span>
          <span className="text-[10px] font-semibold text-[#00CED1]">6 semanas</span>
        </div>
      </div>

      <div className="mt-auto flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/30">
        <LockSimple size={11} weight="fill" className="text-amber-500 flex-shrink-0" />
        <span className="text-[10px] text-amber-700 dark:text-amber-400 font-medium">Incluye cláusula de confidencialidad</span>
      </div>
    </motion.div>
  )
}

/* ── Phase 2: Código siendo escrito ──────────────────────── */
const CODE_LINES = [
  { txt: "import { NextResponse } from 'next/server'", color: 'text-violet-400' },
  { txt: "import { db } from '@/lib/database'", color: 'text-violet-400' },
  { txt: '', color: '' },
  { txt: 'export async function GET(req: Request) {', color: 'text-sky-300' },
  { txt: '  const { userId } = await auth(req)', color: 'text-slate-300' },
  { txt: '  const data = await db.user.findMany()', color: 'text-slate-300' },
  { txt: '', color: '' },
  { txt: '  return NextResponse.json({ data })', color: 'text-emerald-400' },
  { txt: '}', color: 'text-sky-300' },
]

const SPRINTS = [
  { label: 'Sprint 1 — Auth & DB', done: true },
  { label: 'Sprint 2 — Dashboard', done: true },
  { label: 'Sprint 3 — API', active: true },
]

function Phase2() {
  return (
    <motion.div
      key="p2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="h-full flex flex-col"
    >
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-700/60 bg-slate-800/80">
        <div className="w-4 h-4 rounded-sm bg-slate-600/60 flex items-center justify-center">
          <span className="text-[8px] text-slate-400 font-mono">TS</span>
        </div>
        <span className="text-[11px] font-mono text-slate-400">api/users/route.ts</span>
        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-400" />
      </div>

      <div className="flex-1 bg-slate-900 px-4 py-4 font-mono overflow-hidden">
        {CODE_LINES.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.12, duration: 0.2 }}
            className="flex items-start"
          >
            <span className="w-5 text-[10px] text-slate-600 select-none mr-3 pt-[1px]">{line.txt ? i + 1 : ''}</span>
            <span className={`text-[11px] leading-[1.7] ${line.color || 'text-transparent'}`}>
              {line.txt || ' '}
            </span>
          </motion.div>
        ))}
        {/* CSS-only blinking cursor — avoids Framer Motion easing bugs */}
        <span className="inline-block w-[7px] h-[14px] bg-[#00CED1] ml-8 align-middle animate-[cursor-blink_1s_ease-in-out_infinite]" />
      </div>

      <div className="border-t border-slate-100 dark:border-slate-700/60 bg-white dark:bg-slate-800/40 px-4 py-3">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Progreso</p>
        <div className="space-y-1.5">
          {SPRINTS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.15 }}
              className="flex items-center gap-2"
            >
              {s.done ? (
                <CheckCircle size={11} weight="fill" className="text-emerald-500 flex-shrink-0" />
              ) : (
                <span className="relative flex h-[11px] w-[11px] flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00CED1] opacity-60" />
                  <span className="relative inline-flex rounded-full h-[11px] w-[11px] border-2 border-[#00CED1]" />
                </span>
              )}
              <span className={`text-[10px] font-medium ${s.done ? 'text-slate-400 line-through' : 'text-slate-700 dark:text-slate-200'}`}>
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

/* ── Phase 3: Producto en producción ─────────────────────── */
function Phase3() {
  return (
    <motion.div
      key="p3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="h-full flex flex-col"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15, type: 'spring', stiffness: 200, damping: 22 }}
        className="flex items-center justify-center gap-2 py-2 bg-emerald-500 text-white"
      >
        <RocketLaunch size={13} weight="fill" />
        <span className="text-xs font-semibold tracking-wide">Deployed successfully</span>
        <CheckCircle size={13} weight="fill" />
      </motion.div>

      <div className="flex items-center gap-4 px-5 py-3 border-b border-slate-100 dark:border-slate-700/60">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-md bg-[#00CED1]" />
          <span className="text-[12px] font-bold text-slate-800 dark:text-white">TuMarca</span>
        </div>
        <div className="ml-auto flex gap-4">
          {['Inicio', 'Servicios', 'Contacto'].map((l) => (
            <span key={l} className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{l}</span>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 120, damping: 20 }}
        className="px-6 py-6 flex-1"
      >
        <p className="text-[10px] font-semibold uppercase tracking-widest text-[#00CED1] mb-2">Disponible ahora</p>
        <h3 className="text-[22px] font-bold tracking-tighter text-slate-900 dark:text-white leading-tight mb-2">
          Tu producto,<br />
          <span className="text-[#00CED1]">en producción.</span>
        </h3>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed mb-4 max-w-[28ch]">
          Listo para tus usuarios. Con documentación, soporte y código limpio.
        </p>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FACC15] text-slate-900 text-[11px] font-bold shadow-[0_4px_14px_0_rgba(250,204,21,0.4)]"
        >
          Explorar
          <ArrowRight size={11} weight="bold" />
        </motion.div>
      </motion.div>

      <div className="border-t border-slate-100 dark:border-slate-700/60 grid grid-cols-3 divide-x divide-slate-100 dark:divide-slate-700/60">
        {[
          { val: '99.9%', label: 'Uptime' },
          { val: '< 1s', label: 'Carga' },
          { val: '100', label: 'Lighthouse' },
        ].map(({ val, label }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
            className="py-3 flex flex-col items-center"
          >
            <span className="text-[13px] font-bold text-[#00CED1]">{val}</span>
            <span className="text-[9px] text-slate-400 dark:text-slate-500">{label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

/* ── Main component ───────────────────────────────────────── */
export default function ScrollConstruction() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activePhase, setActivePhase] = useState(-1)

  useEffect(() => {
    const section = containerRef.current
    if (!section) return

    const update = () => {
      const rect = section.getBoundingClientRect()
      const scrollable = section.offsetHeight - window.innerHeight
      if (scrollable <= 0) return
      // progress 0→1 as the section scrolls from entrance to exit
      const progress = Math.max(0, Math.min(1, -rect.top / scrollable))

      let phase = -1
      if (progress > 0.04 && progress < 0.28) phase = 0
      else if (progress >= 0.28 && progress < 0.52) phase = 1
      else if (progress >= 0.52 && progress < 0.76) phase = 2
      else if (progress >= 0.76) phase = 3

      setActivePhase((prev) => (prev !== phase ? phase : prev))
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  const urlLabel = activePhase >= 0 ? URL_LABELS[activePhase] : 'nueva-idea'

  return (
    <section id="proceso" ref={containerRef} className="relative h-[230vh] bg-white dark:bg-slate-950">
      <div className="sticky top-0 h-screen flex items-center justify-center px-6 py-12 overflow-hidden">
        <div className="mx-auto w-full max-w-5xl grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          {/* ── Left: steps ─────────────────────────────── */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#00CED1] mb-3">El proceso</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white leading-[1.08]">
                De la llamada
                <br />
                <span className="text-slate-400 dark:text-slate-500">al producto.</span>
              </h2>
            </div>

            <div className="relative flex flex-col gap-6">
              <div className="absolute bottom-0 left-[23px] top-0 w-[2px] bg-slate-100 dark:bg-slate-800" />

              {steps.map((step, i) => {
                const isActive = activePhase >= i
                return (
                  <div key={step.num} className="relative flex items-start gap-5">
                    <motion.div
                      animate={isActive
                        ? { borderColor: '#00CED1', backgroundColor: '#00CED1', color: '#fff', boxShadow: '0 4px 14px 0 rgba(0,206,209,0.4)' }
                        : { borderColor: '#E2E8F0', backgroundColor: '#F8FAFC', color: '#94A3B8', boxShadow: 'none' }
                      }
                      transition={{ duration: 0.4, type: 'spring', stiffness: 120, damping: 20 }}
                      className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 font-bold font-mono text-sm"
                    >
                      {step.num}
                    </motion.div>

                    <div className="flex flex-col pt-2 min-h-[48px]">
                      <motion.h3
                        animate={{ color: isActive ? '#00CED1' : '#94A3B8' }}
                        transition={{ duration: 0.4 }}
                        className="text-base font-bold tracking-tight leading-snug"
                      >
                        {step.label}
                      </motion.h3>
                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-[34ch] overflow-hidden"
                          >
                            {step.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                )
              })}
            </div>

            <a
              href="#contacto"
              className="w-fit inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] bg-[#FACC15] text-slate-900 text-sm font-semibold shadow-[0_4px_14px_0_rgba(250,204,21,0.4)] hover:shadow-[0_6px_20px_0_rgba(250,204,21,0.55)] transition-shadow duration-300"
            >
              Empezar con una llamada
            </a>
          </div>

          {/* ── Right: browser mockup ────────────────────── */}
          <div className="relative hidden lg:block">
            <div
              className="absolute inset-0 -z-10 rounded-3xl opacity-40 blur-3xl transition-colors duration-700"
              style={{
                background: activePhase === 3
                  ? 'radial-gradient(ellipse at 50% 50%, rgba(52,211,153,0.3) 0%, transparent 70%)'
                  : 'radial-gradient(ellipse at 50% 50%, rgba(0,206,209,0.2) 0%, transparent 70%)',
              }}
            />

            <div className="rounded-2xl border border-slate-200 dark:border-slate-700/80 overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.4)]">
              {/* Chrome bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700/80">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <div className="flex-1 mx-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600/60">
                  <LockSimple size={10} className="text-slate-400 flex-shrink-0" weight="fill" />
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={urlLabel}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate"
                    >
                      {urlLabel}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>

              {/* Screen */}
              <div className="relative h-[380px] bg-white dark:bg-slate-900 overflow-hidden">
                <AnimatePresence mode="wait">
                  {activePhase < 0 && (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex flex-col items-center justify-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-2xl bg-[#00CED1]/10 flex items-center justify-center">
                        <GearSix size={20} className="text-[#00CED1]/50" weight="duotone" />
                      </div>
                      <p className="text-xs text-slate-300 dark:text-slate-600 font-mono">Esperando...</p>
                    </motion.div>
                  )}
                  {activePhase === 0 && <Phase0 />}
                  {activePhase === 1 && <Phase1 />}
                  {activePhase === 2 && <Phase2 />}
                  {activePhase === 3 && <Phase3 />}
                </AnimatePresence>
              </div>
            </div>

            {/* Phase label pill */}
            <AnimatePresence>
              {activePhase >= 0 && (
                <motion.div
                  key={activePhase}
                  initial={{ opacity: 0, y: 8, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.92 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 22 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md"
                >
                  <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 whitespace-nowrap">
                    {steps[activePhase]?.label}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
