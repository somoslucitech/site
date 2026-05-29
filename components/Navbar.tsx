'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { List, X, Sun, Moon } from '@phosphor-icons/react'
import { useTheme } from '@/components/ThemeProvider'

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

function DarkModeToggle() {
  const { theme, toggle, mounted } = useTheme()
  const isDark = theme === 'dark'

  if (!mounted) {
    return (
      <div
        className="rounded-full bg-slate-200 dark:bg-slate-700"
        style={{ width: 52, height: 28 }}
      />
    )
  }

  return (
    <motion.button
      onClick={toggle}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      whileTap={{ scale: 0.93 }}
      className={`relative flex items-center rounded-full p-[3px] transition-all duration-500 focus:outline-none ${
        isDark
          ? 'bg-slate-800 shadow-[0_0_0_1px_rgba(0,206,209,0.3),0_0_16px_0_rgba(0,206,209,0.12)]'
          : 'bg-[#FACC15] shadow-[0_2px_14px_0_rgba(250,204,21,0.6)]'
      }`}
      style={{ width: 52, height: 28 }}
    >
      {/* Background hint — Sun (visible in dark, hinting "go light") */}
      <Sun
        size={11}
        weight="fill"
        className={`absolute left-[7px] top-1/2 -translate-y-1/2 transition-all duration-400 pointer-events-none ${
          isDark ? 'opacity-50 text-amber-400' : 'opacity-0'
        }`}
      />

      {/* Background hint — Moon (visible in light, hinting "go dark") */}
      <Moon
        size={11}
        weight="fill"
        className={`absolute right-[7px] top-1/2 -translate-y-1/2 transition-all duration-400 pointer-events-none ${
          isDark ? 'opacity-0' : 'opacity-25 text-slate-700'
        }`}
      />

      {/* Sliding knob */}
      <motion.div
        animate={{ x: isDark ? 24 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 38 }}
        className={`relative z-10 w-[22px] h-[22px] rounded-full flex items-center justify-center shadow-md ${
          isDark ? 'bg-slate-950' : 'bg-white'
        }`}
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.span
              key="moon"
              initial={{ scale: 0, rotate: -90, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: 90, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20, duration: 0.18 }}
              className="flex items-center justify-center"
            >
              <Moon size={12} weight="fill" className="text-[#00CED1]" />
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ scale: 0, rotate: 90, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: -90, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20, duration: 0.18 }}
              className="flex items-center justify-center"
            >
              <Sun size={12} weight="fill" className="text-amber-500" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-[12px] overflow-hidden shadow-[0_4px_16px_0_rgba(0,206,209,0.45)] group-hover:shadow-[0_6px_24px_0_rgba(0,206,209,0.6)] transition-shadow duration-300">
              <Image
                src="/apple-touch-icon.png"
                alt="Somos Luci Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-bold text-slate-900 dark:text-white tracking-tight text-[18px]">
              Somos <span className="text-[#00CED1]">Luci</span>
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-[#00CED1] group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop right: toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <DarkModeToggle />
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="px-4 py-2 rounded-[10px] bg-[#FACC15] text-slate-900 text-sm font-semibold shadow-[0_4px_14px_0_rgba(250,204,21,0.4)] hover:shadow-[0_6px_20px_0_rgba(250,204,21,0.55)] transition-shadow duration-300"
            >
              Agendar llamada
            </motion.a>
          </div>

          {/* Mobile right: toggle + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <DarkModeToggle />
            <button
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800"
          >
            <div className="px-6 pb-5 pt-2 flex flex-col gap-0.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="py-3 text-sm font-medium text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 last:border-0"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="#contacto"
                className="mt-4 px-4 py-3 rounded-[10px] bg-[#FACC15] text-slate-900 text-sm font-semibold text-center"
                onClick={() => setMenuOpen(false)}
              >
                Agendar llamada
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
