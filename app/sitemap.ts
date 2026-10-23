import { MetadataRoute } from 'next'
import { PROJECTS, SERVICES, SITE_URL } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: SITE_URL, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/proyectos`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/nosotros`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
    ...SERVICES.map((s) => ({
      url: `${SITE_URL}/servicios/${s.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...PROJECTS.map((p) => ({
      url: `${SITE_URL}/proyectos/${p.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
