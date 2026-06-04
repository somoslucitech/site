import Link from 'next/link'
import Image from 'next/image'

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? 'https://www.linkedin.com/company/somos-luci/' },
  { label: 'Instagram', href: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? 'https://www.instagram.com/somos.luci/' },
]

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-[#020617] text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main row */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 md:gap-24">

          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-[0_4px_14px_0_rgba(0,206,209,0.25)]">
                <Image
                  src="/apple-touch-icon.png"
                  alt="Somos Luci Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-slate-900 dark:text-white tracking-tight text-lg">
                Somos <span className="text-[#00CED1]">Luci</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Agencia de desarrollo de software premium y consultoría técnica. 
              Transformamos visiones complejas en productos digitales excepcionales.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 mb-6">
              Navegación
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#00CED1] dark:hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 mb-6">
              Redes
            </p>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#00CED1] dark:hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 dark:border-slate-800/80 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Somos Luci. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[11px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hola@somosluci.com'}`} className="hover:text-[#00CED1] dark:hover:text-white transition-colors">
              {process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hola@somosluci.com'}
            </a>
            <span className="hidden sm:inline opacity-30">|</span>
            <span className="opacity-60">Built with code and coffee</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
