import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://somosluci.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Añade aquí más rutas si el sitio crece, ej: /servicios, /contacto
  ]
}
