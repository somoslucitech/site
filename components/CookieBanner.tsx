'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from '@phosphor-icons/react'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Pequeño delay para no interrumpir el primer impacto visual del Hero
      const timer = setTimeout(() => setShowBanner(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
    // Recargar para activar GA4 si se desea una implementación estricta
    window.location.reload()
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowBanner(false)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:w-[400px] z-[100]"
        >
          <div className="glass-card rounded-[2rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden">
            {/* Decorative background glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00CED1]/5 blur-3xl rounded-full" />
            
            <div className="relative flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#00CED1]/10 flex items-center justify-center text-[#00CED1]">
                  <Cookie size={24} weight="duotone" />
                </div>
                <button 
                  onClick={() => setShowBanner(false)}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                  Configuración de Cookies
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Utilizamos cookies para analizar el tráfico y mejorar tu experiencia. Al aceptar, nos ayudas a optimizar Somos Luci.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 mt-2">
                <button
                  onClick={handleAccept}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[#00CED1] text-white text-sm font-semibold shadow-[0_4px_12px_rgba(0,206,209,0.3)] hover:shadow-[0_6px_20px_rgba(0,206,209,0.4)] transition-all active:scale-95"
                >
                  Aceptar todas
                </button>
                <button
                  onClick={handleDecline}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900 transition-all active:scale-95"
                >
                  Solo esenciales
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
