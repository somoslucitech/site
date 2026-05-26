'use client'

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
    <div className="relative py-5 overflow-hidden border-y border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F8FAFC] dark:from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F8FAFC] dark:from-slate-950 to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap animate-marquee">
        {TECHS.map((tech, i) => (
          <span
            key={i}
            className="inline-flex items-center mx-6 text-sm font-medium text-slate-400 dark:text-slate-500 tracking-wide"
          >
            <span className="mr-6 w-1 h-1 rounded-full bg-[#00CED1]/40 inline-block" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
