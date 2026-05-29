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
  title: 'Somos Luci — Software & Consultoría Premium',
  description:
    'Desarrollamos software a medida con un enfoque ágil y consultoría tecnológica de alto nivel. De la idea al código en semanas, no meses.',
  keywords: [
    'desarrollo de software',
    'agencia de software',
    'consultoría tecnológica',
    'programación',
    'Next.js',
    'TypeScript',
    'MVP',
  ],
  openGraph: {
    title: 'Somos Luci — Software & Consultoría Premium',
    description: 'De la idea al código en semanas, no meses.',
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
                addressCountry: 'ES',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 0,
                longitude: 0,
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
                'Agencia de desarrollo de software boutique especializada en MVPs, aplicaciones web modernas y consultoría tecnológica de alto nivel.',
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
>
  )
}
