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
} from '@phosphor-icons/react'
import { useTheme } from '@/components/ThemeProvider'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+1234567890'
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hola@somosluci.com'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const { theme } = useTheme()
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

  const waLink = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent('Hola! Vi su sitio web y quiero consultar sobre sus servicios.')}`

  return (
    <section id="contacto" className="contact-bg py-28 relative overflow-hidden">
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
            Contacto
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white leading-[1.08]">
            Hablemos de tu
            <br />
            <span className="text-slate-400 dark:text-slate-500">próximo proyecto.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 items-start">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 90, damping: 20 }}
            className="space-y-6"
          >
            <div className="rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 p-6">
              <div className="flex items-center gap-3 mb-2">
                <Envelope size={18} className="text-[#00CED1]" weight="duotone" />
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Correo electrónico</p>
              </div>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-[#00CED1] transition-colors duration-200 break-all"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 p-6">
              <div className="flex items-center gap-3 mb-2">
                <WhatsappLogo size={18} className="text-emerald-500" weight="duotone" />
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">WhatsApp directo</p>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                ¿Prefieres charlar antes de agendar? Escríbenos directamente.
              </p>
              <motion.a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 rounded-xl bg-emerald-500 text-white text-sm font-semibold shadow-[0_4px_14px_0_rgba(34,197,94,0.35)] hover:shadow-[0_6px_20px_0_rgba(34,197,94,0.45)] transition-shadow duration-300"
              >
                <WhatsappLogo size={16} weight="fill" />
                Chatear por WhatsApp
              </motion.a>
            </div>

            <div className="rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 p-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-4">
                Tiempo de respuesta
              </p>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">Menos de 2 horas hábiles</span>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 90, damping: 20, delay: 0.1 }}
          >
            <div className="glass-card rounded-[2rem] p-8 lg:p-10">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                    className="flex flex-col items-center justify-center py-16 text-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#00CED1]/10 flex items-center justify-center mb-2">
                      <CheckCircle size={34} className="text-[#00CED1]" weight="fill" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                      Mensaje enviado
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 max-w-[32ch] leading-relaxed">
                      Nos ponemos en contacto dentro de las próximas 2 horas hábiles.
                    </p>
                    <button
                      onClick={() => {
                        setStatus('idle')
                        setForm({ name: '', email: '', topic: '', message: '' })
                        setToken('')
                      }}
                      className="mt-3 text-sm font-medium text-[#00CED1] hover:underline"
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
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
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
                          placeholder="Valentina Rosas"
                          className="px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00CED1]/30 focus:border-[#00CED1] transition-colors"
                        />
                      </div>

                      {/* Email */}
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
                          placeholder="valen@ejemplo.com"
                          className="px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00CED1]/30 focus:border-[#00CED1] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Topic */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Tipo de consulta
                      </label>
                      <div className="relative">
                        <select
                          required
                          value={form.topic}
                          onChange={set('topic')}
                          className="w-full appearance-none px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00CED1]/30 focus:border-[#00CED1] transition-colors pr-9"
                        >
                          <option value="" disabled>Selecciona una opción</option>
                          <option value="dev">Desarrollo de software</option>
                          <option value="consulting">Consultoría tecnológica</option>
                          <option value="mentoring">Mentoría 1:1</option>
                          <option value="other">Otra consulta</option>
                        </select>
                        <CaretDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        <ChatText size={12} className="text-slate-400" />
                        Tu mensaje
                      </label>
                      <textarea
                        required
                        value={form.message}
                        onChange={set('message')}
                        rows={4}
                        placeholder="Cuéntanos sobre tu proyecto o qué quieres aprender..."
                        className="px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00CED1]/30 focus:border-[#00CED1] transition-colors resize-none"
                      />
                    </div>

                    {/* Cloudflare Turnstile */}
                    <div className="flex justify-center">
                      <Turnstile
                        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                        onSuccess={(t) => setToken(t)}
                        onExpire={() => setToken('')}
                        onError={() => setToken('')}
                        options={{
                          theme: theme === 'dark' ? 'dark' : 'light',
                          language: 'es',
                        }}
                      />
                    </div>

                    {/* Error message */}
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

                    <p className="text-[11px] text-slate-400 dark:text-slate-500 text-center">
                      Respondemos en menos de 2 horas hábiles.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
