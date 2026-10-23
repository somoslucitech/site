// Shared site content: rendered by the page sections and reused in the JSON-LD of app/layout.tsx

export const SITE_URL = 'https://somosluci.com'
export const CONTACT_EMAIL = 'developers@somosluci.com'
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+1234567890'
export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? 'https://www.linkedin.com/company/somos-luci/' },
  { label: 'Instagram', href: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? 'https://www.instagram.com/somos.luci/' },
]

export type Project = {
  slug: string
  name: string
  kind: 'Producto propio' | 'Cliente'
  desc: string
  stack: string[]
  url: string
}

export const PROJECTS: Project[] = [
  {
    slug: 'perchero',
    name: 'Perchero',
    kind: 'Producto propio',
    desc: 'Tiendas en línea para importadores de ropa y accesorios: catálogo con tallas y colores, pedidos que llegan listos a WhatsApp y control real del margen de cada venta.',
    stack: ['Node.js', 'Drizzle', 'PostgreSQL', 'Cloudflare for SaaS'],
    url: 'https://perchero.app',
  },
  {
    slug: 'puntofix',
    name: 'PuntoFix',
    kind: 'Producto propio',
    desc: 'Sistema para talleres de reparación: órdenes, diagnósticos, repuestos y caja, con seguimiento del equipo desde el celular del cliente.',
    stack: ['FastAPI', 'React 19', 'PostgreSQL', 'Redis'],
    url: 'https://puntofix.app',
  },
  {
    slug: 'travelsdesk',
    name: 'TravelsDesk',
    kind: 'Producto propio',
    desc: 'El sistema operativo de una agencia de viajes: órdenes, cobranza, emisión, facturación y comisiones de agentes en un solo lugar.',
    stack: ['Next.js 15', 'FastAPI', 'PostgreSQL'],
    url: 'https://travelsdesk.app',
  },
  {
    slug: 'cover2video',
    name: 'cover2video',
    kind: 'Cliente',
    desc: 'Convierte la portada de un álbum y un fragmento del tema en un video de vinilo girando para Reels, TikTok y Shorts, procesado en el navegador.',
    stack: ['Preact', 'WebCodecs', 'Hono', 'Stripe'],
    url: 'https://cover2video.com',
  },
  {
    slug: 'bonchona',
    name: 'Bonchona 107.1 FM',
    kind: 'Cliente',
    desc: 'Sitio de la radio con transmisión en vivo, chat en tiempo real con los oyentes y gestión de cuñas antes de la señal.',
    stack: ['Next.js 15', 'Cloudflare Workers', 'Durable Objects'],
    url: 'https://bonchonaradio.com',
  },
  {
    slug: 'anhellakids',
    name: 'Anhella Kids',
    kind: 'Cliente',
    desc: 'Boutique infantil que vende todos los días: inventario por talla, carrito sin registro, pedidos por WhatsApp y panel de administración.',
    stack: ['Next.js 16', 'Cloudflare D1', 'R2'],
    url: 'https://www.anhellakids.com',
  },
  {
    slug: 'cesaractivo',
    name: 'Cesar Activo',
    kind: 'Cliente',
    desc: 'Plataforma de venta del programa Detox5, con cobros por PayPal, precios en dólares y euros, y casos de éxito.',
    stack: ['Next.js 16', 'Cloudflare Workers', 'PayPal'],
    url: 'https://cesaractivo.com',
  },
]

export const FAQS: { q: string; a: string }[] = [
  {
    q: '¿Qué es Somos Luci?',
    a: 'Somos Luci es una agencia de desarrollo de software con base en Valencia, Venezuela. Construimos MVPs, aplicaciones web y sistemas a medida para startups y empresas, y ofrecemos consultoría técnica (CTO as a Service). Hoy tenemos 7 productos en producción, tanto propios como de clientes.',
  },
  {
    q: '¿Cuánto cuesta desarrollar un software o un MVP?',
    a: 'Depende del alcance. Después de que nos cuentas tu idea por WhatsApp o correo, en menos de 48 horas te enviamos una propuesta con el alcance, el stack, los tiempos y un presupuesto detallado, sin compromiso.',
  },
  {
    q: '¿Cuánto tiempo tarda el desarrollo?',
    a: 'Trabajamos en sprints de 7 días: cada semana recibes un avance funcional que puedes probar. El tiempo total depende del alcance y queda definido en la propuesta antes de empezar.',
  },
  {
    q: '¿Con qué tecnologías trabajan?',
    a: 'Principalmente Next.js, React y TypeScript en el frontend; Node.js y Python (FastAPI) en el backend; PostgreSQL y Redis como bases de datos; y despliegue en Cloudflare, AWS o DigitalOcean. Para apps móviles usamos Flutter y React Native.',
  },
  {
    q: '¿Trabajan con clientes fuera de Venezuela?',
    a: 'Sí. Trabajamos de forma remota desde Valencia para clientes en Venezuela y en el exterior, por ejemplo en Estados Unidos. La comunicación es por WhatsApp, correo y videollamada cuando hace falta.',
  },
  {
    q: '¿Qué pasa después del lanzamiento?',
    a: 'No desaparecemos al publicar. Incluimos soporte post-lanzamiento y podemos seguir con mantenimiento, monitoreo y nuevas funciones según lo que necesite tu producto.',
  },
  {
    q: '¿Cómo empiezo un proyecto con Somos Luci?',
    a: `Escríbenos por WhatsApp o a ${CONTACT_EMAIL} contándonos tu idea. Respondemos en menos de 2 horas hábiles y, con lo que conversemos, preparamos la propuesta.`,
  },
]
