'use client'

import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'

interface ProcessStep {
  num: string
  label: string
  desc: string
}

const steps: ProcessStep[] = [
  { num: '01', label: 'Llamada de descubrimiento', desc: 'Agendás una videollamada gratuita de 30 minutos. Nos contás tu idea y definimos juntos qué necesitás construir.' },
  { num: '02', label: 'Propuesta técnica', desc: 'En 48h recibís una propuesta con alcance, tecnologías, tiempos, presupuesto y cláusula de confidencialidad. Sin letra chica.' },
  { num: '03', label: 'Desarrollo iterativo', desc: 'Construimos con sprints cortos de 1–2 semanas. Revisás el avance, ajustamos y seguimos.' },
  { num: '04', label: 'Lanzamiento a producción', desc: 'Deploy, documentación completa y soporte post-lanzamiento incluido. Tu producto, listo para el mundo.' },
]

interface BlockData {
  id: number
  row: number
  col: number
  phase: number
  localIndex: number
}

const gridCols = 6
const gridRows = 5
const totalBlocks = gridCols * gridRows

const blocksData: BlockData[] = Array.from({ length: totalBlocks }).map((_, i) => {
  const row = Math.floor(i / gridCols)
  const col = i % gridCols
  let phase = 0

  if (row === 4 || (row === 3 && col >= 4)) phase = 0
  else if (row === 3 || (row === 2 && col >= 3)) phase = 1
  else if (row === 2 || (row === 1 && col >= 2)) phase = 2
  else phase = 3

  return { id: i, row, col, phase, localIndex: 0 }
})

blocksData.forEach((block) => {
  const siblings = blocksData.filter((b) => b.phase === block.phase)
  siblings.sort((a, c) => {
    if (a.row !== c.row) return c.row - a.row
    return a.col - c.col
  })
  block.localIndex = siblings.findIndex((s) => s.id === block.id)
})

const blockVariants = {
  empty: {
    backgroundColor: '#F1F5F9',
    borderColor: '#E2E8F0',
    scale: 1,
  },
  filled: (customLocalIndex: number) => ({
    backgroundColor: '#00CED1',
    borderColor: '#00CED1',
    scale: [1, 1.15, 1],
    transition: {
      delay: customLocalIndex * 0.05,
      type: 'spring',
      bounce: 0.5,
      duration: 0.5,
    },
  }),
}

export default function ScrollConstruction() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activePhase, setActivePhase] = useState(-1)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    let phase = -1
    if (latest >= 0.05 && latest < 0.25) phase = 0
    else if (latest >= 0.25 && latest < 0.5) phase = 1
    else if (latest >= 0.5 && latest < 0.75) phase = 2
    else if (latest >= 0.75) phase = 3

    if (phase !== activePhase) setActivePhase(phase)
  })

  const glowScale = useTransform(scrollYProgress, [0.85, 0.9, 0.95, 1], [0.8, 0.8, 1.4, 1.4])
  const glowOpacity = useTransform(scrollYProgress, [0.85, 0.9, 0.95, 1], [0, 0, 0.6, 0])

  return (
    <section id="proceso" ref={containerRef} className="relative h-[250vh] bg-white dark:bg-slate-950">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden px-6 py-12">
        <div className="mx-auto w-full max-w-5xl grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12 items-center">

          {/* Left — process text */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#00CED1] mb-3">
                El proceso
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white leading-[1.08]">
                De la llamada
                <br />
                <span className="text-slate-400 dark:text-slate-500">al producto.</span>
              </h2>
            </div>

            <div className="relative flex flex-col gap-8">
              <div className="absolute bottom-0 left-[23px] top-0 w-[2px] bg-slate-200 dark:bg-slate-800" />

              {steps.map((step, i) => {
                const isActive = activePhase >= i
                return (
                  <div key={step.num} className="relative flex items-start gap-6">
                    <div
                      className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 font-bold font-mono text-sm transition-all duration-500 ${
                        isActive
                          ? 'border-[#00CED1] bg-[#00CED1] text-white shadow-[0_4px_14px_0_rgba(0,206,209,0.4)]'
                          : 'border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-400'
                      }`}
                    >
                      {step.num}
                    </div>

                    <div className="flex flex-col pt-2">
                      <h3
                        className={`text-lg font-bold tracking-tight transition-colors duration-500 ${
                          isActive ? 'text-[#00CED1]' : 'text-slate-500 dark:text-slate-500'
                        }`}
                      >
                        {step.label}
                      </h3>
                      <p
                        className={`mt-2 max-w-sm text-sm leading-relaxed transition-all duration-500 md:text-base ${
                          isActive ? 'opacity-100 text-slate-600 dark:text-slate-300' : 'opacity-0 text-slate-400'
                        }`}
                      >
                        {step.desc}
                      </p>
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

          {/* Right — construction grid */}
          <div className="relative flex items-center justify-center">
            <motion.div
              style={{
                scale: glowScale,
                opacity: glowOpacity,
                background: 'radial-gradient(circle at center, rgba(0,206,209,0.4) 0%, transparent 65%)',
                boxShadow: '0 0 80px 20px rgba(0,206,209,0.2)',
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            />

            <div className="relative z-10 grid grid-cols-6 gap-[4px]">
              {blocksData.map((block) => (
                <motion.div
                  key={block.id}
                  custom={block.localIndex}
                  variants={blockVariants}
                  initial="empty"
                  animate={activePhase >= block.phase ? 'filled' : 'empty'}
                  className="h-8 w-8 rounded-lg border-2 md:h-10 md:w-10 dark:border-slate-700"
                  style={activePhase < block.phase ? { backgroundColor: 'var(--block-empty, #F1F5F9)' } : {}}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
