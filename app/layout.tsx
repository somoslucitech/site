import type { Metadata } from 'next'
import { Outfit, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Somos Luci — Software & Mentoría Premium',
  description:
    'Desarrollamos software a medida y formamos a los profesionales tech del mañana. Mentoría 1:1 personalizada por Google Meet.',
  keywords: [
    'desarrollo de software',
    'mentoría tecnología',
    'programación',
    'Next.js',
    'cursos tech',
    'carrera en tecnología',
  ],
  openGraph: {
    title: 'Somos Luci — Software & Mentoría Premium',
    description: 'Del cero al primer deployment. Con alguien al lado.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${outfit.variable} ${jetbrains.variable}`}>
      <head>
        {/* Anti-flash: sets dark class before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}`,
          }}
        />
      </head>
      <body className="bg-[#F8FAFC] dark:bg-slate-950 text-slate-900 dark:text-white font-sans">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
