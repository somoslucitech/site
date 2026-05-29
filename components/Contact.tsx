'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Turnstile } from '@marsidev/react-turnstile'
import { InlineWidget } from 'react-calendly'
import {
  PaperPlaneTilt,
  WhatsappLogo,
  CheckCircle,
  Envelope,
  User,
  ChatText,
  CaretDown,
  Warning,
  CalendarBlank,
  VideoCamera,
  Clock,
  Handshake,
  X,
} from '@phosphor-icons/react'
import { useTheme } from '@/components/ThemeProvider'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+1234567890'
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'sales@somosluci.com'

type Status = 'idle' | 'sending' | 'success' | 'error'

/* ── Email form modal ──────────────────────────────────────── */
function EmailModal({ onClose, theme }: { onClose: () => void; theme: string }) {
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
    /* Backdrop */
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-6"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative z-10 w-full max-w-lg bg-white dark:bg-slate-900 rounded-[2rem] shadow-[0_32px_80px_-10px_rgba(0,0,0,0.3)] overflow-hidden"
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-8 pt-7 pb-5 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#00CED1]/10 flex items-center justify-center">
              <Envelope size={16} className="text-[#00CED1]" weight="duotone" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">Enviar un mensaje</p>
              <p className="text-[11px] text-slate-400 dark:text-slate-500">Te respondemos en menos de 2 horas hábiles</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X size={16} weight="bold" />
          </button>
        </div>

        {/* Modal body */}
        <div className="px-8 pb-8 pt-6">
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
                  onClick={onClose}
                  className="mt-2 text-sm font-medium text-[#00CED1] hover:underline"
                >
                  Cerrar
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
      </motion.div>
    </motion.div>
  )
}

/* ── Main section ──────────────────────────────────────────── */
export default function Contact() {
  const { theme } = useTheme()
  const [showModal, setShowModal] = useState(false)

  const waLink = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent('Hola! Vi su sitio web y quiero consultar sobre el desarrollo de mi proyecto.')}`

  return (
    <>
      <section id="contacto" className="contact-bg pt-10 pb-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 90, damping: 20 }}
            className="mb-16"
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[#00CED1] mb-3">Empecemos</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white leading-[1.08]">
              Agenda tu llamada.
              <br />
              <span className="text-slate-400 dark:text-slate-500">30 minutos. Sin costo.</span>
            </h2>
            <p className="mt-5 text-[16px] text-slate-500 dark:text-slate-400 max-w-[52ch] leading-relaxed">
              Cuéntanos tu idea o problemática. Evaluamos juntos si tiene sentido
              construirla y cómo hacerlo. Sin compromisos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.7fr] gap-10 items-start">

            {/* Left — info cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 90, damping: 20 }}
              className="space-y-4"
            >
              {/* What to expect */}
              <div className="rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 p-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-5">
                  Qué pasa en la llamada
                </p>
                <div className="space-y-4">
                  {[
                    { icon: VideoCamera, label: 'Videollamada por Google Meet', sub: 'Te enviamos el link al confirmar.' },
                    { icon: Clock, label: '30 minutos, sin relleno', sub: 'Directo al punto: tu idea y cómo construirla.' },
                    { icon: Handshake, label: 'Propuesta en 48 horas', sub: 'Alcance, tecnología, tiempos y presupuesto.' },
                  ].map(({ icon: Icon, label, sub }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#00CED1]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={15} className="text-[#00CED1]" weight="duotone" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{label}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response time */}
              <div className="rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 p-5 flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">Respondemos en menos de 2 horas hábiles</span>
              </div>

              {/* WhatsApp */}
              <motion.a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 w-full px-5 py-4 rounded-2xl bg-emerald-500 text-white font-semibold text-sm shadow-[0_4px_14px_0_rgba(34,197,94,0.35)] hover:shadow-[0_6px_20px_0_rgba(34,197,94,0.45)] transition-shadow duration-300"
              >
                <WhatsappLogo size={20} weight="fill" className="flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm leading-tight">Chatear por WhatsApp</p>
                  <p className="text-[11px] text-emerald-100 mt-0.5">¿Prefieres escribirnos primero? Con gusto.</p>
                </div>
              </motion.a>

              {/* Email form trigger */}
              <button
                onClick={() => setShowModal(true)}
                className="w-full flex items-center gap-3 px-5 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 text-sm font-medium hover:border-slate-300 dark:hover:border-slate-600 hover:text-slate-900 dark:hover:text-white transition-all duration-200"
              >
                <Envelope size={18} weight="duotone" className="text-[#00CED1] flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold text-sm leading-tight text-slate-700 dark:text-slate-300">Enviar mensaje por correo</p>
                  <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">{CONTACT_EMAIL}</p>
                </div>
              </button>
            </motion.div>

            {/* Right — Calendly + WhatsApp + email trigger */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 90, damping: 20, delay: 0.1 }}
              className="space-y-4"
            >
              {/* Calendly card */}
              <div className="glass-card rounded-[2rem] p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#00CED1] flex items-center justify-center shadow-[0_4px_14px_0_rgba(0,206,209,0.35)]">
                    <CalendarBlank size={18} className="text-white" weight="bold" />
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-slate-900 dark:text-white">Elige un horario</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">Llamada de descubrimiento · 30 min · Gratis</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 overflow-hidden mb-5">
                  <div className="min-h-[480px]">
                    <InlineWidget
                      url={process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/somosluci/mentoria-30min'}
                      styles={{ height: '480px', width: '100%' }}
                      pageSettings={{
                        backgroundColor: 'ffffff',
                        hideEventTypeDetails: true,
                        hideLandingPageDetails: true,
                        primaryColor: '00ced1',
                        textColor: '0f172a',
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-start gap-2 p-3.5 rounded-xl bg-[#00CED1]/6 border border-[#00CED1]/12">
                  <CheckCircle size={14} weight="fill" className="text-[#00CED1] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Recibirás un link de Google Meet por correo al confirmar.
                    Sin tarjeta de crédito ni compromiso.
                  </p>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Email modal */}
      <AnimatePresence>
        {showModal && (
          <EmailModal onClose={() => setShowModal(false)} theme={theme} />
        )}
      </AnimatePresence>
    </>
  )
}
