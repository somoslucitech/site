'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Turnstile } from '@marsidev/react-turnstile'
import {
  PaperPlaneTilt,
  WhatsappLogo,
  CheckCircle,
  Envelope,
  User,
  ChatText,
  CaretDown,
  Warning,
  ChatCircleText,
  Handshake,
} from '@phosphor-icons/react'
import { useTheme } from '@/components/ThemeProvider'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+1234567890'
const CONTACT_EMAIL = 'developers@somosluci.com'

type Status = 'idle' | 'sending' | 'success' | 'error'

/* ── Email form ────────────────────────────────────────────── */
function EmailForm({ theme }: { theme: string }) {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [form, setForm] = useState({ name: '', email: '', topic: '', message: '' })
  const [token, setToken] = useState('')

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!token) return
    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, token }),
      })
      const data = await res.json()
      if (!res.ok) {
        setErrorMsg(data.error ?? 'Error al enviar. Intenta de nuevo.')
        setStatus('error')
        return
      }
      setStatus('success')
    } catch {
      setErrorMsg('Error de red. Revisa tu conexión e intenta de nuevo.')
      setStatus('error')
    }
  }

  return (
    <div>
      <div className="flex items-center gap-3 pb-5 mb-6 border-b border-slate-100 dark:border-slate-800">
        <div className="w-9 h-9 rounded-xl bg-[#00CED1]/10 flex items-center justify-center">
          <Envelope size={16} className="text-[#00CED1]" weight="duotone" />
        </div>
        <div>
          <p className="text-sm font-bold text-slate-900 dark:text-white">Enviar un mensaje</p>
          <p className="text-[11px] text-slate-400 dark:text-slate-500">Te respondemos en menos de 2 horas hábiles</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="flex flex-col items-center justify-center py-8 text-center gap-4"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#00CED1]/10 flex items-center justify-center mb-1">
              <CheckCircle size={30} className="text-[#00CED1]" weight="fill" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Mensaje enviado</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-[32ch] leading-relaxed">
              Te respondemos dentro de las próximas 2 horas hábiles.
            </p>
            <button
              type="button"
              onClick={() => {
                setForm({ name: '', email: '', topic: '', message: '' })
                setToken('')
                setStatus('idle')
              }}
              className="mt-2 text-sm font-medium text-[#00CED1] hover:underline"
            >
              Enviar otro mensaje
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <User size={12} className="text-slate-400" />
                  Nombre completo
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={set('name')}
                  placeholder="Carlos Rodríguez"
                  className="px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00CED1]/30 focus:border-[#00CED1] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Envelope size={12} className="text-slate-400" />
                  Correo electrónico
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={set('email')}
                  placeholder="carlos@ejemplo.com"
                  className="px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00CED1]/30 focus:border-[#00CED1] transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Tipo de proyecto</label>
              <div className="relative">
                <select
                  required
                  value={form.topic}
                  onChange={set('topic')}
                  className="w-full appearance-none px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00CED1]/30 focus:border-[#00CED1] transition-colors pr-9"
                >
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="mvp">MVP / Producto nuevo</option>
                  <option value="webapp">Aplicación web</option>
                  <option value="consulting">Consultoría técnica</option>
                  <option value="other">Otra consulta</option>
                </select>
                <CaretDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <ChatText size={12} className="text-slate-400" />
                Cuéntanos tu idea
              </label>
              <textarea
                required
                value={form.message}
                onChange={set('message')}
                rows={4}
                placeholder="Cuéntanos qué quieres construir, el problema que resuelve y cualquier detalle relevante..."
                className="px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00CED1]/30 focus:border-[#00CED1] transition-colors resize-none"
              />
            </div>

            <div className="flex justify-center">
              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                onSuccess={(t) => setToken(t)}
                onExpire={() => setToken('')}
                onError={() => setToken('')}
                options={{ theme: theme === 'dark' ? 'dark' : 'light', language: 'es' }}
              />
            </div>

            <AnimatePresence>
              {status === 'error' && errorMsg && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800/30"
                >
                  <Warning size={15} weight="fill" className="text-red-500 flex-shrink-0" />
                  <p className="text-xs text-red-600 dark:text-red-400">{errorMsg}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              type="submit"
              disabled={status === 'sending' || !token}
              whileHover={{ scale: status === 'idle' && token ? 1.01 : 1, y: status === 'idle' && token ? -1 : 0 }}
              whileTap={{ scale: 0.97 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-[12px] bg-[#00CED1] text-white font-semibold text-sm shadow-[0_6px_24px_0_rgba(0,206,209,0.35)] hover:shadow-[0_8px_32px_0_rgba(0,206,209,0.45)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar mensaje
                  <PaperPlaneTilt size={15} weight="fill" />
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ── Main section ──────────────────────────────────────────── */
export default function Contact() {
  const { theme } = useTheme()

  const waLink = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent('Hola! Vi su sitio web y quiero consultar sobre el desarrollo de mi proyecto.')}`

  return (
    <>
      <section id="contacto" className="contact-bg py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side: Content & Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 90, damping: 20 }}
              className="space-y-10"
            >
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00CED1] mb-4">Empecemos</p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white leading-tight mb-6">
                  Hablemos de tu proyecto.
                  <br />
                  <span className="text-slate-400 dark:text-slate-500">Por WhatsApp o correo.</span>
                </h2>
                <p className="text-lg text-slate-500 dark:text-slate-400 max-w-[45ch] leading-relaxed">
                  Cuéntanos tu visión. Evaluamos juntos la viabilidad técnica y trazamos el roadmap para construir tu producto en tiempo récord.
                </p>
              </div>

              {/* High-impact Info Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-[1.5rem] bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 group hover:border-[#00CED1]/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#00CED1]/10 flex items-center justify-center mb-4">
                    <ChatCircleText size={20} className="text-[#00CED1]" weight="duotone" />
                  </div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">Directo al punto</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Sin relleno. Tu idea y cómo la construimos.</p>
                </div>
                <div className="p-5 rounded-[1.5rem] bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 group hover:border-[#00CED1]/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#00CED1]/10 flex items-center justify-center mb-4">
                    <Handshake size={20} className="text-[#00CED1]" weight="duotone" />
                  </div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">Propuesta en 48h</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Alcance, stack, tiempos y presupuesto honesto.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-emerald-500 text-white font-bold text-sm shadow-[0_10px_25px_-5px_rgba(34,197,94,0.4)]"
                >
                  <WhatsappLogo size={20} weight="fill" />
                  WhatsApp
                </motion.a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-700 dark:text-slate-200 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
                >
                  <Envelope size={20} weight="duotone" className="text-[#00CED1] flex-shrink-0" />
                  {CONTACT_EMAIL}
                </a>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Disponibles ahora</span>
              </div>
            </motion.div>

            {/* Right side: Email form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 90, damping: 20, delay: 0.1 }}
            >
              <div className="relative glass-card rounded-[2.5rem] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_32px_80px_-10px_rgba(0,0,0,0.5)] border border-slate-200 dark:border-slate-800 overflow-hidden bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#00CED1]/5 blur-[80px] rounded-full" />
                <div className="relative z-10">
                  <EmailForm theme={theme} />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}
