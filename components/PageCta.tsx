import Link from 'next/link'
import { whatsappLink } from '@/lib/content'

export default function PageCta({ title, text }: { title: string; text: string }) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-100 dark:border-slate-800 bg-[#F8FAFC] dark:bg-slate-900 p-8 sm:p-12 md:p-16">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#00CED1]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#FACC15]/10 blur-3xl" />
        <div className="relative max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900 dark:text-white leading-tight mb-4">
            {title}
          </h2>
          <p className="text-[16px] text-slate-500 dark:text-slate-400 leading-relaxed mb-8">{text}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappLink('Hola! Vi su sitio web y quiero consultar sobre el desarrollo de mi proyecto.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-[12px] bg-[#FACC15] text-slate-900 font-semibold text-sm shadow-[0_6px_24px_0_rgba(250,204,21,0.45)] hover:shadow-[0_8px_32px_0_rgba(250,204,21,0.55)] transition-shadow duration-300"
            >
              Escribir por WhatsApp
            </a>
            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-[12px] border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 font-medium text-sm hover:bg-white dark:hover:bg-slate-800 transition-all duration-200"
            >
              Escribir por correo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
