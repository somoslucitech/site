import Link from 'next/link'
import Image from 'next/image'

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? 'https://linkedin.com/company/somosluci' },
  { label: 'Instagram', href: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? 'https://instagram.com/somosluci' },
  { label: 'Twitter / X', href: process.env.NEXT_PUBLIC_TWITTER_URL ?? 'https://x.com/somosluci' },
]

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Formación', href: '#formacion' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main row */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-10 md:gap-20">

          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-8 h-8 rounded-[10px] overflow-hidden shadow-[0_4px_14px_0_rgba(0,206,209,0.3)]">
                <Image
                  src="/apple-touch-icon.png"
                  alt="Somos Luci Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-semibold text-white tracking-tight text-[15px]">
                Somos <span className="text-[#00CED1]">Luci</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Software premium y mentoría tech personalizada.
              Desde Latinoamérica para el mundo.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-600 mb-4">
              Navegación
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-600 mb-4">
              Redes
            </p>
            <ul className="space-y-2.5">
              {SOCIAL_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Somos Luci. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hola@somosluci.com'}`} className="hover:text-slate-400 transition-colors">
              {process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hola@somosluci.com'}
            </a>
            <span className="text-slate-700">·</span>
            <span>Hecho con código y café.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
