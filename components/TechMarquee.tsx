'use client'

import { Star } from '@phosphor-icons/react'

const BASE_TECHS = [
  'Next.js', 'TypeScript', 'React', 'Vue', 'Flutter', 'React Native',
  'Node.js', 'Python', 'Django', 'FastAPI', 'PostgreSQL', 'Redis',
  'Docker', 'Kubernetes', 'DevOps', 'CI/CD', 'GitHub', 'Vercel', 'AWS',
  'Figma', 'Blockchain', 'Smart Contracts', 'OpenZeppelin', 'GraphQL', 'REST APIs',
  'Tailwind CSS', 'Prisma', 'Supabase', 'WordPress',
  'Claude AI', 'Gemini', 'ChatGPT', 'n8n', 'Zapier',
  'Cloudflare', 'DigitalOcean', 'Namecheap',
]

const TECHS = [...BASE_TECHS, ...BASE_TECHS]

export default function TechMarquee() {
  return (
    <div className="relative py-1 overflow-hidden border-y border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F8FAFC] dark:from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F8FAFC] dark:from-slate-950 to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap animate-marquee">
        {TECHS.map((tech, i) => (
          <span
            key={i}
            className="inline-flex items-center mx-6 text-sm font-medium text-slate-500 dark:text-slate-500 tracking-wide"
          >
            <Star 
              size={14} 
              weight="fill" 
              className="mr-6 text-[#00CED1] dark:text-[#FACC15] drop-shadow-[0_0_8px_rgba(0,206,209,0.3)] dark:drop-shadow-[0_0_8px_rgba(250,204,21,0.3)]" 
            />
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
