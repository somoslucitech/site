import type { Metadata } from 'next'
import { Outfit, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { GoogleAnalytics } from '@next/third-parties/google'
import CookieBanner from '@/components/CookieBanner'
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
  title: 'Somos Luci - Software Premium & Consultoría en Venezuela',
  description:
    'Agencia de desarrollo de software en Valencia, Venezuela. Especialistas en MVPs, aplicaciones web con Next.js y consultoría tecnológica de alto nivel.',
  keywords: [
    'desarrollo de software venezuela',
    'agencia de software valencia',
    'desarrollo de aplicaciones venezuela',
    'consultoría tecnológica',
    'Next.js',
    'TypeScript',
    'MVP startups',
    'programación a medida',
  ],
  openGraph: {
    title: 'Somos Luci - Software & Consultoría Premium',
    description: 'De la idea al código en semanas, desde Venezuela para el mundo.',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Somos Luci',
              image: 'https://somosluci.com/apple-touch-icon.png',
              '@id': 'https://somosluci.com',
              url: 'https://somosluci.com',
              telephone: '',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Valencia',
                addressRegion: 'Carabobo',
                addressCountry: 'VE',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 10.1620,
                longitude: -68.0077,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Servicios de Desarrollo y Consultoría',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Desarrollo de MVPs & Apps',
                      description: 'Construcción de aplicaciones web escalables en semanas.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'CTO as a Service',
                      description: 'Consultoría técnica estratégica y auditorías de código.',
                    },
                  },
                ],
              },
              description:
                'Agencia de desarrollo de software boutique en Valencia, Venezuela, especializada en MVPs, aplicaciones web modernas y consultoría tecnológica de alto nivel.',
            }),
          }}
        />
      </head>
      <body className="bg-[#F8FAFC] dark:bg-slate-950 text-slate-900 dark:text-white font-sans">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <CookieBanner />
        <GoogleAnalytics gaId="G-2KXC6JL45P" />
      </body>
    </html>
  )
}
