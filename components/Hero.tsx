'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Code, RocketLaunch, Sparkle } from '@phosphor-icons/react'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 90, damping: 20 },
  },
}

const cardEntry = (delay: number) => ({
  hidden: { opacity: 0, y: 24, scale: 0.93 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay, type: 'spring', stiffness: 90, damping: 20 },
  },
})

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden mesh-bg">
      <div className="absolute inset-0 -z-10 opacity-[0.022] dot-grid" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 pt-32 lg:pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-[56%_44%] items-center gap-16 lg:gap-0">

          {/* ── Left column ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-[580px]"
          >
            {/* Badge */}
            <motion.div variants={item} className="mb-7">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00CED1]/10 border border-[#00CED1]/20 text-[#00CED1] text-xs font-semibold tracking-widest uppercase">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00CED1] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00CED1]" />
                </span>
                Software & Consultoría Premium
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="text-[52px] md:text-[60px] lg:text-[68px] font-bold tracking-tighter leading-[1.02] text-slate-900 dark:text-white mb-6"
            >
              Software que escala 
              <br />
              <span className="text-[#00CED1]">en tiempo récord.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={item}
              className="text-[17px] text-slate-500 dark:text-slate-400 leading-relaxed max-w-[52ch] mb-9"
            >
              Construimos productos digitales de alto rendimiento y asesoramos a empresas en su roadmap tecnológico. Sin burocracia, solo código excepcional.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[12px] bg-[#FACC15] text-slate-900 font-semibold text-sm shadow-[0_6px_24px_0_rgba(250,204,21,0.45)] hover:shadow-[0_8px_32px_0_rgba(250,204,21,0.55)] transition-shadow duration-300"
              >
                Iniciar mi proyecto
                <ArrowRight size={15} weight="bold" />
              </motion.a>
              <motion.a
                href="#proceso"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[12px] border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 font-medium text-sm hover:border-slate-300 dark:hover:border-slate-600 hover:bg-white dark:hover:bg-slate-800 transition-all duration-200"
              >
                Ver cómo funciona
              </motion.a>
            </motion.div>

            {/* Trust line */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              {[
                'Primera llamada gratis',
                'Entrega en sprints',
                'Soporte post-lanzamiento',
              ].map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-[13px] text-slate-400 dark:text-slate-500">
                  <CheckCircle size={13} weight="fill" className="text-[#00CED1] flex-shrink-0" />
                  {t}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right column: floating cards ── */}
          <div className="relative h-[560px] hidden lg:block">

            {/* Card A — terminal (Shifted Up/Right) */}
            <motion.div
              variants={cardEntry(0.7)}
              initial="hidden"
              animate="visible"
              className="absolute top-2 right-0 w-56"
            >
              <div className="glass-card rounded-2xl p-4 animate-float-a">
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-auto font-mono text-[10px] text-slate-400">proyecto.ts</span>
                </div>
                <pre className="font-mono text-[10px] text-slate-600 dark:text-slate-300 leading-[1.7]">{`const app = await build({
  idea: "tu visión",
  stack: "Next.js 14",
  deadline: "6 semanas",
})

// ✓ Deployed to prod`}</pre>
              </div>
            </motion.div>

            {/* Card B — proyectos (Shifted Left) */}
            <motion.div
              variants={cardEntry(0.85)}
              initial="hidden"
              animate="visible"
              className="absolute top-[230px] -left-8 w-44"
            >
              <div className="glass-card rounded-2xl p-4 animate-float-b">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-[#00CED1]/10 flex items-center justify-center">
                    <RocketLaunch size={14} className="text-[#00CED1]" weight="fill" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Proyectos</span>
                </div>
                <p className="text-[32px] font-bold text-slate-900 dark:text-white tracking-tighter leading-none">
                  10<span className="text-[#00CED1] text-2xl">+</span>
                </p>
                <p className="text-[11px] text-[#00CED1] font-medium mt-1">entregados en producción</p>
              </div>
            </motion.div>

            {/* Card C — satisfacción (Shifted Down/Right) */}
            <motion.div
              variants={cardEntry(1.0)}
              initial="hidden"
              animate="visible"
              className="absolute top-[420px] right-4 w-40"
            >
              <div className="glass-card rounded-2xl p-4 animate-float-c">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-[#FACC15]/15 flex items-center justify-center">
                    <Sparkle size={14} className="text-amber-500" weight="fill" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Satisfacción</span>
                </div>
                <p className="text-[28px] font-bold text-slate-900 dark:text-white tracking-tighter leading-none">
                  99.9<span className="text-sm font-semibold text-[#00CED1]">%</span>
                </p>
              </div>
            </motion.div>

            {/* Card D — primera llamada (Shifted Up/Left) */}
            <motion.div
              variants={cardEntry(1.15)}
              initial="hidden"
              animate="visible"
              className="absolute top-[70px] left-12 w-44"
            >
              <div className="glass-card rounded-2xl p-3.5 animate-float-d">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#00CED1]/10 flex items-center justify-center flex-shrink-0">
                    <Code size={14} className="text-[#00CED1]" weight="bold" />
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-slate-800 dark:text-slate-100 leading-tight">Llamada inicial</p>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">30 min · Sin costo</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping_slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">Slots disponibles</span>
                </div>
              </div>
            </motion.div>

            {/* Card E — Central Logo (Enlarged & Centered) */}
            <motion.div
              variants={cardEntry(0.9)}
              initial="hidden"
              animate="visible"
              className="absolute top-[180px] left-[130px] z-20"
            >
              <div className="glass-card rounded-[2.5rem] p-8 animate-float-a flex flex-col items-center gap-4 group shadow-[0_12px_48px_0_rgba(0,206,209,0.25)] border-[#00CED1]/20">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-2xl group-hover:scale-110 transition-transform duration-700">
                  <Image
                    src="/apple-touch-icon.png"
                    alt="Somos Luci Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[20px] font-bold text-slate-900 dark:text-white tracking-tighter">
                    Somos <span className="text-[#00CED1]">Luci</span>
                  </span>
                  <div className="h-[2px] w-8 bg-[#00CED1] mt-2 rounded-full opacity-50" />
                </div>
              </div>
            </motion.div>

            {/* Decorative glow blob */}
            <div
              className="absolute inset-0 -z-10 rounded-3xl opacity-30"
              style={{
                background:
                  'radial-gradient(ellipse at 60% 40%, rgba(0,206,209,0.2) 0%, transparent 70%)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#F8FAFC] dark:from-slate-950 via-[#F8FAFC]/70 dark:via-slate-950/70 to-transparent pointer-events-none" />
    </section>
  )
}
