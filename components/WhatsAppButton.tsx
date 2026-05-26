'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WhatsappLogo, X } from '@phosphor-icons/react'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+1234567890'

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)

  const waLink = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent('Hola! Vi su sitio web y me gustaría consultar.')}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="glass-card rounded-2xl px-4 py-3 max-w-[200px] shadow-lg"
          >
            <div className="flex items-start justify-between gap-2 mb-1">
              <p className="text-xs font-semibold text-slate-900 dark:text-white">Chateá con nosotros</p>
              <button
                onClick={() => setShowTooltip(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 flex-shrink-0"
              >
                <X size={11} weight="bold" />
              </button>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              Respondemos en minutos durante horario laboral.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 flex items-center justify-center gap-1.5 w-full px-3 py-1.5 rounded-lg bg-emerald-500 text-white text-xs font-semibold"
            >
              <WhatsappLogo size={12} weight="fill" />
              Abrir WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setShowTooltip((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        aria-label="Contactar por WhatsApp"
        className="relative w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_8px_30px_0_rgba(34,197,94,0.45)] hover:shadow-[0_10px_40px_0_rgba(34,197,94,0.55)] transition-shadow duration-300"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-25" />
        <WhatsappLogo size={26} className="text-white relative z-10" weight="fill" />
      </motion.button>
    </div>
  )
}
