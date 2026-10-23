import type { Metadata } from 'next'
import { Outfit, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { GoogleAnalytics } from '@next/third-parties/google'
import CookieBanner from '@/components/CookieBanner'
import { CONTACT_EMAIL, FAQS, PROJECTS, SITE_URL, SOCIAL_LINKS, WHATSAPP_NUMBER } from '@/lib/content'
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

const TITLE = 'Somos Luci - Desarrollo de Software & Consultoría en Venezuela'
const DESCRIPTION =
  'Agencia de desarrollo de software en Valencia, Venezuela. Construimos MVPs, aplicaciones web y sistemas a medida con Next.js, con 7 productos en producción.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/' },
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
    description: 'De la idea al código en semanas, desde Venezuela para el mundo. Mira los productos que ya tenemos en producción.',
    type: 'website',
    url: '/',
    siteName: 'Somos Luci',
    locale: 'es_VE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Somos Luci - Software & Consultoría Premium',
    description: 'De la idea al código en semanas, desde Venezuela para el mundo.',
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

const ORG_ID = `${SITE_URL}/#organization`

const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': ORG_ID,
      name: 'Somos Luci',
      url: SITE_URL,
      logo: `${SITE_URL}/android-chrome-512x512.png`,
      image: `${SITE_URL}/opengraph-image.png`,
      email: CONTACT_EMAIL,
      telephone: `+${WHATSAPP_NUMBER.replace(/\D/g, '')}`,
      priceRange: '$$',
      sameAs: SOCIAL_LINKS.map((l) => l.href),
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Valencia',
        addressRegion: 'Carabobo',
        addressCountry: 'VE',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 10.162,
        longitude: -68.0077,
      },
      areaServed: ['VE', 'US', 'Latinoamérica'],
      knowsAbout: ['Desarrollo de software a medida', 'MVP', 'Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Cloudflare Workers', 'Consultoría tecnológica'],
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
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Somos Luci',
      inLanguage: 'es',
      publisher: { '@id': ORG_ID },
    },
    {
      '@type': 'ItemList',
      '@id': `${SITE_URL}/#proyectos`,
      name: 'Proyectos de Somos Luci en producción',
      itemListElement: PROJECTS.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'WebApplication',
          name: p.name,
          url: p.url,
          description: p.desc,
          applicationCategory: 'BusinessApplication',
          image: `${SITE_URL}/proyectos/${p.slug}.webp`,
          creator: { '@id': ORG_ID },
        },
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#preguntas`,
      mainEntity: FAQS.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
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
            __html: JSON.stringify(JSON_LD),
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
