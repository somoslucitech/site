'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
  ChatCircleText,
  GearSix,
  Code,
  RocketLaunch,
  ArrowRight,
} from '@phosphor-icons/react'

const PROCESS_STEPS = [
  {
    id: 0,
    title: 'Primer contacto',
    desc: 'Nos escribes por WhatsApp o correo y nos cuentas tu idea. Te hacemos las preguntas clave para entender tu visión, identificar cuellos de botella técnicos y definir el MVP que tu mercado necesita.',
    icon: ChatCircleText,
    alt: 'Conversación de descubrimiento',
    tip: {
      text: "Objetivo: Alinear arquitectura con KPIs de negocio.",
      tech: "Canal: WhatsApp / Correo",
      pos: "top-4 left-4"
    }
  },
  {
    id: 1,
    title: 'Propuesta & Stack',
    desc: 'Diseñamos una arquitectura técnica escalable con las tecnologías más modernas (Next.js, Node, AWS). Recibes un presupuesto honesto, tiempos realistas y una cláusula de confidencialidad total en menos de 48h.',
    icon: GearSix,
    alt: 'Documento de propuesta técnica',
    tip: {
      text: "Definimos un stack que escale de 0 a 1M de usuarios.",
      tech: "Tools: Notion / PDF",
      pos: "bottom-12 right-4"
    }
  },
  {
    id: 2,
    title: 'Sprints de Código',
    desc: 'Transformamos ideas en software de alto rendimiento. Trabajamos con metodología Agile, entregando módulos funcionales cada 7 días para que puedas probar, validar y pivotar en tiempo real.',
    icon: Code,
    alt: 'Código fuente en desarrollo',
    tip: {
      text: "Código limpio, testeado y listo para producción.",
      tech: "Stack: TypeScript / PostgreSQL",
      pos: "top-12 right-6"
    }
  },
  {
    id: 3,
    title: 'Lanzamiento',
    desc: 'Hacemos el deploy de tu producto en infraestructura cloud de última generación. Pero no nos vamos: incluimos soporte post-lanzamiento y optimización continua para asegurar un crecimiento sin fricción.',
    icon: RocketLaunch,
    alt: 'Producto en producción',
    tip: {
      text: "Deploy automatizado y monitorización 24/7.",
      tech: "Infra: Vercel / AWS / Docker",
      pos: "bottom-8 left-8"
    }
  },
]

/* ── Visual Skeletons with Standardized Window Frame ────────────────── */

function TipBubble({ text, tech, pos }: { text: string, tech: string, pos: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
      className={`absolute ${pos} z-30 max-w-[200px] pointer-events-none`}
    >
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-[#00CED1]/30 p-3 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
        <p className="text-[11px] font-bold text-slate-900 dark:text-white leading-tight mb-1">{text}</p>
        <p className="text-[9px] font-mono text-[#00CED1] uppercase tracking-wider">{tech}</p>
      </div>
      {/* Connector line or dot */}
      <div className="w-2 h-2 rounded-full bg-[#00CED1] absolute -bottom-1 left-4 shadow-[0_0_8px_#00CED1]" />
    </motion.div>
  )
}

function Window({ children, title, icon: Icon, activeTip }: { children: React.ReactNode, title: string, icon: any, activeTip?: any }) {
  return (
    <div className="w-full h-full flex flex-col bg-white dark:bg-[#0B1120] overflow-hidden shadow-[0_20px_70px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_70px_-10px_rgba(0,0,0,0.6)] border border-slate-200/60 dark:border-slate-800/60 rounded-[2rem]">
      {/* Window Top Bar */}
      <div className="h-12 border-b border-slate-100 dark:border-slate-800/80 px-6 flex items-center bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md">
        <div className="flex gap-2 w-20">
          <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/30" />
          <div className="w-3 h-3 rounded-full bg-amber-400/20 border border-amber-400/30" />
          <div className="w-3 h-3 rounded-full bg-emerald-400/20 border border-emerald-400/30" />
        </div>
        <div className="flex-1 flex justify-center items-center gap-2.5">
          <div className="w-5 h-5 rounded-md bg-[#00CED1]/10 flex items-center justify-center">
            <Icon size={12} weight="duotone" className="text-[#00CED1]" />
          </div>
          <span className="text-[11px] font-bold font-mono text-slate-500 dark:text-slate-400 uppercase tracking-[0.15em]">{title}</span>
        </div>
        <div className="w-20" />
      </div>
      {/* Window Content */}
      <div className="flex-1 relative overflow-hidden bg-[#F8FAFC] dark:bg-slate-950">
        {activeTip && <TipBubble {...activeTip} />}
        {children}
      </div>
    </div>
  )
}

function ChatSkeleton({ tip }: { tip: any }) {
  return (
    <Window title="Primer contacto" icon={ChatCircleText} activeTip={tip}>
      <div className="w-full h-full p-6 flex flex-col gap-4 justify-end">
        {[
          { me: false, w: 'w-3/5' },
          { me: true, w: 'w-2/5' },
          { me: false, w: 'w-4/5' },
          { me: true, w: 'w-1/2' },
        ].map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.18 }}
            className={`flex ${b.me ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`${b.w} rounded-2xl px-4 py-3 space-y-2 ${
                b.me
                  ? 'bg-[#00CED1]/15 border border-[#00CED1]/25 rounded-br-md'
                  : 'bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm rounded-bl-md'
              }`}
            >
              <div className={`h-2 rounded-full ${b.me ? 'bg-[#00CED1]/40' : 'bg-slate-200 dark:bg-slate-700'}`} />
              <div className={`h-2 w-2/3 rounded-full ${b.me ? 'bg-[#00CED1]/25' : 'bg-slate-100 dark:bg-slate-800'}`} />
            </div>
          </motion.div>
        ))}
        <div className="mt-2 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-3 px-4">
          <div className="h-2 flex-1 bg-slate-100 dark:bg-slate-800 rounded-full" />
          <div className="w-8 h-8 rounded-xl bg-[#00CED1] shadow-[0_4px_12px_rgba(0,206,209,0.35)]" />
        </div>
      </div>
    </Window>
  )
}

function PDFSkeleton({ tip }: { tip: any }) {
  return (
    <Window title="Technical_Proposal.pdf" icon={GearSix} activeTip={tip}>
      <div className="w-full h-full p-8 bg-white dark:bg-slate-900 flex flex-col gap-8">
        <div className="space-y-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="h-6 w-1/2 bg-slate-900 dark:bg-white rounded-lg shadow-sm" />
          <div className="h-3 w-1/4 bg-[#00CED1]/20 dark:bg-[#00CED1]/10 rounded-full border border-[#00CED1]/20" />
        </div>
        <div className="space-y-6">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="w-6 h-6 rounded-lg bg-[#00CED1] shadow-[0_4px_12px_rgba(0,206,209,0.3)] flex items-center justify-center transition-transform group-hover:scale-110">
                <div className="w-2.5 h-1.5 border-b-2 border-r-2 border-white -rotate-45 mb-0.5" />
              </div>
              <div className="h-3 flex-1 bg-slate-100 dark:bg-slate-800 rounded-full" />
            </div>
          ))}
        </div>
        <div className="mt-6 p-6 rounded-2xl bg-[#F8FAFC] dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex flex-col gap-3">
          <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full" />
          <div className="h-2 w-4/5 bg-slate-200 dark:bg-slate-800 rounded-full" />
          <div className="mt-4 flex items-center justify-between">
             <div className="w-24 h-8 bg-slate-200 dark:bg-slate-800 rounded-lg opacity-40" />
             <div className="w-24 h-8 bg-[#00CED1]/10 border border-[#00CED1]/20 rounded-lg" />
          </div>
        </div>
      </div>
    </Window>
  )
}

function CodeSkeleton({ tip }: { tip: any }) {
  return (
    <Window title="mvp_development.ts" icon={Code} activeTip={tip}>
      <div className="w-full h-full bg-[#0B0E14] flex flex-col font-mono text-[11px] p-6">
        <div className="flex gap-4 mb-6">
           <div className="px-3 py-1 rounded-md bg-[#00CED1]/10 border border-[#00CED1]/20 text-[#00CED1] text-[10px]">development.active</div>
           <div className="px-3 py-1 rounded-md bg-white/5 text-slate-500 text-[10px]">branch: main</div>
        </div>
        {[
          { color: 'text-purple-400', t: 'import { orchestrate } from "@luci/core"' },
          { color: 'text-blue-400', t: 'export async function buildMVP() {' },
          { color: 'text-slate-500', t: '  // 1. Scalable infrastructure' },
          { color: 'text-emerald-400', t: '  const stack = await luci.deploy(Config)' },
          { color: 'text-[#00CED1]', t: '  return { status: "Ready to Scale" }' },
          { color: 'text-blue-400', t: '}' },
        ].map((line, i) => (
          <div key={i} className="flex gap-6 mb-2.5 items-center group">
            <span className="text-slate-800 dark:text-slate-800 w-4 select-none group-hover:text-slate-600 transition-colors">{i+1}</span>
            <motion.span 
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12 }}
              className={`${line.color} font-medium tracking-tight`}
            >
              {line.t}
            </motion.span>
          </div>
        ))}
        <motion.div 
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-[3px] h-4 bg-[#00CED1] ml-10 mt-1 shadow-[0_0_10px_rgba(0,206,209,0.5)]"
        />
      </div>
    </Window>
  )
}

function WebSkeleton({ tip }: { tip: any }) {
  return (
    <Window title="somosluci.com" icon={RocketLaunch} activeTip={tip}>
      <div className="w-full h-full bg-white dark:bg-slate-950 flex flex-col p-6 gap-6 relative">
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#00CED1]/10 blur-[80px] rounded-full" />
        
        <div className="flex justify-between items-center relative z-10">
           <div className="w-20 h-4 bg-slate-900 dark:bg-white rounded-md shadow-sm" />
           <div className="flex gap-3">
              <div className="w-10 h-2 bg-slate-100 dark:bg-slate-800 rounded-full" />
              <div className="w-10 h-2 bg-[#00CED1]/40 rounded-full" />
           </div>
        </div>

        <div className="space-y-4 relative z-10 pt-4">
           <div className="h-10 w-4/5 bg-slate-900 dark:bg-white rounded-xl shadow-sm" />
           <div className="h-3 w-3/5 bg-slate-200 dark:bg-slate-800 rounded-full" />
           <div className="h-10 w-32 bg-[#00CED1] rounded-2xl shadow-[0_8px_25px_-5px_rgba(0,206,209,0.4)]" />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4 relative z-10">
          {[0, 1].map((i) => (
            <div key={i} className="h-28 rounded-[1.5rem] border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 p-4 shadow-sm group hover:border-[#00CED1]/30 transition-colors">
               <div className="w-8 h-8 rounded-xl bg-[#00CED1]/10 mb-3" />
               <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full mb-2" />
               <div className="h-2 w-2/3 bg-slate-100 dark:bg-slate-800 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </Window>
  )
}

export default function Process() {
  const [activeStep, setActiveStep] = useState(0)
  const [stepProgress, setStepProgress] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  // Use a single effect to manage the whole sequence without restarts
  useEffect(() => {
    if (!isInView || !isAutoPlaying) return

    let currentStep = activeStep
    let currentProgress = stepProgress

    const durationPerStep = 3000 // 3 seconds to fill the line between dots
    const intervalTime = 30 // Update every 30ms
    const increment = (100 / durationPerStep) * intervalTime

    const timer = setInterval(() => {
      // If we've reached the last step's icon, we stop here
      if (currentStep >= PROCESS_STEPS.length - 1) {
        clearInterval(timer)
        setIsAutoPlaying(false)
        setStepProgress(0)
        return
      }

      currentProgress += increment

      if (currentProgress >= 100) {
        // Increment step and reset local progress
        currentStep += 1
        currentProgress = 0
        
        // Final boundary check
        if (currentStep >= PROCESS_STEPS.length - 1) {
          setActiveStep(PROCESS_STEPS.length - 1)
          setStepProgress(0)
          setIsAutoPlaying(false)
          clearInterval(timer)
          return
        }
        
        setActiveStep(currentStep)
      }
      
      setStepProgress(currentProgress)
    }, intervalTime)

    return () => clearInterval(timer)
  }, [isInView, isAutoPlaying]) // activeStep removed from deps to prevent logic loops

  // Width is based on the current step plus the current segment's progress
  // Divided by 3 (total segments between 4 dots)
  const totalBarWidth = ((activeStep + stepProgress / 100) / (PROCESS_STEPS.length - 1)) * 100

  const handleStepClick = (index: number) => {
    setIsAutoPlaying(false)
    setActiveStep(index)
    setStepProgress(0)
  }

  // Safe data access
  const currentStepData = PROCESS_STEPS[Math.min(activeStep, PROCESS_STEPS.length - 1)]

  return (
    <section id="proceso" className="py-24 bg-white dark:bg-slate-950 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white leading-tight">
            Un proceso <span className="text-slate-400 dark:text-slate-500">sin fricción.</span>
          </h2>
        </div>

        <div className="hidden md:block">
          <div className="relative mb-32 max-w-4xl mx-auto">
            {/* Progress Track (Relative to icons) */}
            <div className="absolute top-[24px] left-[24px] right-[24px] h-[2px]">
               {/* Background Line */}
               <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800" />
               
               {/* Active Progress Line */}
               <motion.div 
                 className="absolute inset-y-0 left-0 bg-[#00CED1] origin-left z-10"
                 animate={{ width: `${Math.min(totalBarWidth, 100)}%` }}
                 transition={{ ease: "linear", duration: 0.1 }}
               />
            </div>
            
            <div className="relative flex justify-between">
              {PROCESS_STEPS.map((step, idx) => {
                const isCurrent = activeStep === idx
                const isPast = activeStep > idx || (!isAutoPlaying && activeStep === PROCESS_STEPS.length - 1 && idx === PROCESS_STEPS.length - 1)
                
                return (
                  <div key={step.id} className="relative flex flex-col items-center">
                    <button
                      onClick={() => handleStepClick(idx)}
                      className={`relative z-20 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 bg-white dark:bg-slate-950 ${
                        isCurrent || isPast
                          ? 'border-[#00CED1] shadow-[0_0_15px_rgba(0,206,209,0.25)]' 
                          : 'border-slate-200 dark:border-slate-800'
                      }`}
                    >
                      <step.icon 
                        size={20} 
                        weight={isCurrent || isPast ? 'fill' : 'regular'} 
                        className={isCurrent || isPast ? 'text-[#00CED1]' : 'text-slate-400'} 
                      />
                    </button>
                    
                    <div className="absolute top-16 w-32 text-center">
                      <span className={`text-sm font-bold tracking-tight transition-colors duration-300 block ${
                        isCurrent ? 'text-slate-900 dark:text-white' : 'text-slate-400'
                      }`}>
                        {step.title}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[420px] max-w-6xl mx-auto">
            <div className="space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-[#00CED1]/10 text-[11px] font-bold text-[#00CED1] uppercase tracking-widest mb-6">
                    Etapa 0{activeStep + 1}
                  </span>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-5 leading-tight">
                    {currentStepData.title}
                  </h3>
                  <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-[45ch]">
                    {currentStepData.desc}
                  </p>
                  <div className="pt-8">
                    <a
                      href="#contacto"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#00CED1] group"
                    >
                      Cuéntanos tu proyecto
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative glass-card rounded-[2.5rem] border border-slate-200 dark:border-slate-800 aspect-[4/3] shadow-2xl overflow-hidden bg-slate-50 dark:bg-slate-900/50"
                >
                   {activeStep === 0 && <ChatSkeleton tip={currentStepData.tip} />}
                   {activeStep === 1 && <PDFSkeleton tip={currentStepData.tip} />}
                   {activeStep === 2 && <CodeSkeleton tip={currentStepData.tip} />}
                   {activeStep === 3 && <WebSkeleton tip={currentStepData.tip} />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-12 relative pt-4">
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-slate-200 dark:bg-slate-800" />
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.id} className="relative pl-16">
              <div className="absolute left-0 top-0 w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center z-10 shadow-sm">
                <step.icon size={22} weight="duotone" className="text-[#00CED1]" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-[#00CED1] uppercase tracking-[0.2em]">Etapa 0{i+1}</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

