'use client'

import { motion } from 'framer-motion'
import { Plus } from '@phosphor-icons/react'
import { FAQS } from '@/lib/content'

export default function FAQ() {
  return (
    <section id="preguntas" className="py-24 bg-white dark:bg-slate-950 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 90, damping: 20 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#00CED1] mb-3">
            Preguntas frecuentes
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white leading-[1.08]">
            Lo que suelen
            <br />
            <span className="text-slate-500 dark:text-slate-500">preguntarnos.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 90, damping: 20, delay: 0.1 }}
          className="divide-y divide-slate-100 dark:divide-slate-800 border-y border-slate-100 dark:border-slate-800"
        >
          {FAQS.map(({ q, a }) => (
            <details key={q} className="group py-5">
              <summary className="flex items-center justify-between gap-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <h3 className="text-[17px] md:text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
                  {q}
                </h3>
                <span className="w-8 h-8 shrink-0 rounded-full bg-[#00CED1]/10 flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
                  <Plus size={14} weight="bold" className="text-[#007C80] dark:text-[#00CED1]" />
                </span>
              </summary>
              <p className="mt-3 pr-14 text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed">{a}</p>
            </details>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
