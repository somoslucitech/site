// Shared site content: rendered by the page sections and reused in the JSON-LD and sitemap

export const SITE_URL = 'https://somosluci.com'
export const CONTACT_EMAIL = 'developers@somosluci.com'
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+1234567890'
export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? 'https://www.linkedin.com/company/somos-luci/' },
  { label: 'Instagram', href: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? 'https://www.instagram.com/somos.luci/' },
]
export const ORG_ID = `${SITE_URL}/#organization`

export const domain = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '')

export const whatsappLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`

/* ── Projects ─────────────────────────────────────────────── */

export type Project = {
  slug: string
  name: string
  kind: 'Producto propio' | 'Cliente'
  desc: string
  stack: string[]
  url: string
  // Case study page
  status: string
  summary: string
  challenge: string
  solution: string
  features: string[]
}

export const PROJECTS: Project[] = [
  {
    slug: 'perchero',
    name: 'Perchero',
    kind: 'Producto propio',
    desc: 'Tiendas en línea para importadores de ropa y accesorios: catálogo con tallas y colores, pedidos que llegan listos a WhatsApp y control real del margen de cada venta.',
    stack: ['Node.js', 'Drizzle', 'PostgreSQL', 'Cloudflare for SaaS'],
    url: 'https://perchero.app',
    status: 'Listo para lanzamiento',
    summary:
      'Perchero es un SaaS para pequeños importadores de ropa y accesorios: cada negocio tiene su propia tienda en línea con inventario por talla y color, pedidos que llegan listos a WhatsApp y un control real de gastos y margen. Lo diseñamos y construimos de punta a punta como producto propio.',
    challenge:
      'Los importadores pequeños venden por Instagram y WhatsApp con el inventario en la cabeza o en una hoja de cálculo. Las plataformas de tiendas genéricas cobran comisión por venta y no responden la pregunta que más importa: cuánto se gana de verdad después de los gastos.',
    solution:
      'Una plataforma multi-tienda donde cada negocio tiene su subdominio con su marca, catálogo con variantes y stock, y un pedido que llega ordenado a WhatsApp. El módulo de gastos y margen muestra la ganancia real de cada venta. El modelo es una suscripción mensual, sin comisión por venta. Perchero nació de Anhella Kids, una tienda que construimos antes, y la generaliza para cualquier negocio.',
    features: [
      'Tienda con marca propia en un subdominio (mitienda.perchero.app)',
      'Inventario por talla y color',
      'Pedidos que llegan listos a WhatsApp',
      'Control de gastos y margen por venta',
      'Cupones de descuento y apartados con abono',
      'Equipo por roles y acceso con huella (WebAuthn)',
    ],
  },
  {
    slug: 'puntofix',
    name: 'PuntoFix',
    kind: 'Producto propio',
    desc: 'Sistema para talleres de reparación: órdenes, diagnósticos, repuestos y caja, con seguimiento del equipo desde el celular del cliente.',
    stack: ['FastAPI', 'React 19', 'PostgreSQL', 'Redis'],
    url: 'https://puntofix.app',
    status: 'En etapa de lanzamiento',
    summary:
      'PuntoFix es un SaaS para talleres de reparación de celulares y computadoras: órdenes de servicio, diagnósticos, repuestos, caja y sucursales en un solo sistema, con una página de seguimiento donde el cliente ve el estado de su equipo desde el celular.',
    challenge:
      'En muchos talleres las órdenes viven en papel o en chats, los clientes llaman para preguntar si su equipo está listo y la caja de cada sucursal se cuadra a mano al final del día.',
    solution:
      'Un sistema multi-taller con un flujo de órdenes de principio a fin: recepción con etiqueta y código QR, diagnóstico y presupuesto, solicitudes de repuestos y entrega. El cliente recibe avisos por correo (con respaldo por SMS) y sigue su orden en una página pública. La caja tiene apertura, arqueo por moneda, movimientos manuales e historial.',
    features: [
      'Órdenes de servicio con etiqueta y código QR imprimible',
      'Seguimiento público con diagnóstico y presupuesto',
      'Avisos al cliente por correo con respaldo por SMS',
      'Caja con arqueo por moneda e historial',
      'Sucursales y roles: dueño, gerente, técnico y vendedor',
      'Requisiciones de repuestos',
    ],
  },
  {
    slug: 'travelsdesk',
    name: 'TravelsDesk',
    kind: 'Producto propio',
    desc: 'El sistema operativo de una agencia de viajes: órdenes, cobranza, emisión, facturación y comisiones de agentes en un solo lugar.',
    stack: ['Next.js 15', 'FastAPI', 'PostgreSQL'],
    url: 'https://travelsdesk.app',
    status: 'En producción',
    summary:
      'TravelsDesk es un SaaS para agencias de viajes que centraliza órdenes, cobranza, emisión, facturación y comisiones de los asesores. Nació como un sistema a medida para una agencia venezolana, que hoy lo usa en producción, y lo convertimos en una plataforma para varias agencias.',
    challenge:
      'En una agencia, cada venta pasa por el asesor, contabilidad, emisión y facturación. Con hojas de cálculo y mensajes se pierde la trazabilidad, los pagos se reportan dos veces y las comisiones terminan en discusiones.',
    solution:
      'Un flujo de orden con aprobaciones por rol: el asesor crea y negocia la orden y reporta los pagos, contabilidad los aprueba, emisión actualiza el costo y facturación emite el documento al cerrar la venta. Cada paso queda registrado con quién lo hizo. Las comisiones se calculan con reglas fijadas al crear la orden y un libro auxiliar en partida doble cuadra al centavo contra cada módulo.',
    features: [
      'Flujo de órdenes con aprobaciones por rol',
      'Cobranza y cuentas por cobrar',
      'Emisión y facturación',
      'Comisiones de asesores con pago mensual',
      'Libro auxiliar en partida doble',
      'Historial completo de quién hizo qué',
    ],
  },
  {
    slug: 'cover2video',
    name: 'cover2video',
    kind: 'Cliente',
    desc: 'Convierte la portada de un álbum y un fragmento del tema en un video de vinilo girando para Reels, TikTok y Shorts, procesado en el navegador.',
    stack: ['Preact', 'WebCodecs', 'Hono', 'Stripe'],
    url: 'https://cover2video.com',
    status: 'En producción',
    summary:
      'cover2video convierte la portada de un álbum y un fragmento de audio en un video de un vinilo girando, con ecualizador reactivo, título y artista, listo para Reels, TikTok, Shorts y YouTube. Todo el video se genera en el navegador del usuario, sin subir archivos a un servidor.',
    challenge:
      'Generar un MP4 de calidad dentro del navegador, rápido incluso en un teléfono y sin depender de ffmpeg ni de un servidor de render, con cuentas y suscripciones para monetizar la herramienta.',
    solution:
      'La animación se dibuja con Canvas 2D y Web Audio, y el video se codifica en el dispositivo con WebCodecs y Mediabunny (H.264 + AAC). En pruebas, 30 segundos de video se generan en 9 a 15 segundos. Soporta formatos 9:16, 1:1 y 16:9, en inglés y español, con cuentas de Google y suscripción con Stripe sobre Cloudflare Workers y D1.',
    features: [
      'Render de video 100 % en el navegador',
      'Formatos 9:16, 1:1 y 16:9',
      'Ecualizador reactivo al audio',
      'Compartir directo a redes desde el teléfono',
      'Cuentas con Google y suscripción con Stripe',
      'Interfaz en inglés y español',
    ],
  },
  {
    slug: 'bonchona',
    name: 'Bonchona 107.1 FM',
    kind: 'Cliente',
    desc: 'Sitio de la radio con transmisión en vivo, chat en tiempo real con los oyentes y gestión de cuñas antes de la señal.',
    stack: ['Next.js 15', 'Cloudflare Workers', 'Durable Objects'],
    url: 'https://bonchonaradio.com',
    status: 'En producción',
    summary:
      'El sitio de Bonchona 107.1 FM, una radio de Valencia, Venezuela: reproductor en vivo con la canción que suena y los oyentes conectados, panel de administración con cuñas antes de la señal y estadísticas, y un chat en tiempo real con los oyentes.',
    challenge:
      'Una radio necesita que su señal se escuche sin fricción en la web, mostrar qué está sonando, medir su audiencia y conversar con sus oyentes, con un sitio rápido, seguro y fácil de mantener.',
    solution:
      'Un sitio en Next.js sobre Cloudflare Workers con reproductor propio, cuñas configurables desde el panel y estadísticas. El chat en vivo corre en Durable Objects, protegido con Turnstile, modo lento y moderadores. El panel usa inicio de sesión con Google.',
    features: [
      'Reproductor en vivo con canción actual y oyentes',
      'Cuñas antes de la señal configurables',
      'Chat en tiempo real con moderación',
      'Panel de administración con estadísticas',
      'Inicio de sesión con Google',
    ],
  },
  {
    slug: 'anhellakids',
    name: 'Anhella Kids',
    kind: 'Cliente',
    desc: 'Boutique infantil que vende todos los días: inventario por talla, carrito sin registro, pedidos por WhatsApp y panel de administración.',
    stack: ['Next.js 16', 'Cloudflare D1', 'R2'],
    url: 'https://www.anhellakids.com',
    status: 'En producción y vendiendo',
    summary:
      'Anhella Kids es la tienda en línea de una boutique de ropa infantil en Venezuela: catálogo con inventario por talla, carrito sin registro, pedidos confirmados por WhatsApp y un panel de administración con un resumen diario de ventas por correo.',
    challenge:
      'Vender ropa importada por Instagram y WhatsApp sin un catálogo ordenado ni control del inventario por talla, y con clientas que prefieren cerrar la compra conversando.',
    solution:
      'Un catálogo rápido con inventario por talla y un carrito que no pide registro: el pedido llega armado a WhatsApp para confirmarlo con la clienta. El panel con inicio de sesión de Google permite gestionar productos y pedidos, y cada día llega un corte por correo. Corre en Cloudflare Workers con D1 y R2. Este proyecto fue la base de Perchero.',
    features: [
      'Catálogo con inventario por talla',
      'Carrito sin registro',
      'Pedidos confirmados por WhatsApp',
      'Panel de administración con Google',
      'Corte diario de ventas por correo',
    ],
  },
  {
    slug: 'cesaractivo',
    name: 'Cesar Activo',
    kind: 'Cliente',
    desc: 'Plataforma de venta del programa Detox5, con cobros por PayPal, precios en dólares y euros, y casos de éxito.',
    stack: ['Next.js 16', 'Cloudflare Workers', 'PayPal'],
    url: 'https://cesaractivo.com',
    status: 'En producción',
    summary:
      'Cesar Activo es la plataforma de venta de Detox5, un programa de bienestar de 7 días: página de ventas con casos de éxito, cobro con PayPal en dólares o euros, pagos locales confirmados desde un panel y correos automáticos al confirmar cada compra.',
    challenge:
      'Vender un programa en línea a un público de varios países, aceptando PayPal y métodos de pago locales, sin perder el control de qué compras están confirmadas.',
    solution:
      'Un sitio en Next.js 16 sobre Cloudflare Workers con cobro por PayPal y confirmación por webhook. Los pagos locales se confirman a mano desde el panel, donde también se cambian los precios y se reflejan al instante. Al confirmarse un pago, la compradora recibe su correo de bienvenida y el coach un aviso.',
    features: [
      'Página de ventas con casos de éxito',
      'Cobro con PayPal en dólares o euros',
      'Pagos locales confirmados desde el panel',
      'Correos automáticos al confirmar la compra',
      'Precios editables al instante',
      'SEO técnico y medición con consentimiento de cookies',
    ],
  },
]

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug)

/* ── Process ──────────────────────────────────────────────── */

export const PROCESS_STEPS = [
  {
    title: 'Primer contacto',
    desc: 'Nos escribes por WhatsApp o correo y nos cuentas tu idea. Te hacemos las preguntas clave para entender tu visión, identificar cuellos de botella técnicos y definir el MVP que tu mercado necesita.',
  },
  {
    title: 'Propuesta & Stack',
    desc: 'Diseñamos una arquitectura técnica escalable con las tecnologías más modernas (Next.js, Node, AWS). Recibes un presupuesto honesto, tiempos realistas y una cláusula de confidencialidad total en menos de 48h.',
  },
  {
    title: 'Sprints de Código',
    desc: 'Transformamos ideas en software de alto rendimiento. Trabajamos con metodología Agile, entregando módulos funcionales cada 7 días para que puedas probar, validar y pivotar en tiempo real.',
  },
  {
    title: 'Lanzamiento',
    desc: 'Hacemos el deploy de tu producto en infraestructura cloud de última generación. Pero no nos vamos: incluimos soporte post-lanzamiento y optimización continua para asegurar un crecimiento sin fricción.',
  },
]

/* ── Services ─────────────────────────────────────────────── */

export type Service = {
  slug: string
  title: string
  h1: string
  metaDescription: string
  summary: string
  forWho: string[]
  includes: string[]
  relatedProjects: string[]
  faqs: { q: string; a: string }[]
}

export const SERVICES: Service[] = [
  {
    slug: 'desarrollo-de-mvp',
    title: 'Desarrollo de MVP',
    h1: 'Desarrollo de MVP para startups y emprendedores',
    metaDescription:
      'Construimos el MVP de tu producto en sprints de 7 días, con Next.js, TypeScript y una nube escalable. Propuesta en 48 horas. Desde Valencia, Venezuela.',
    summary:
      'Construimos el MVP de tu producto en sprints de 7 días: definimos contigo el alcance mínimo que valida tu idea, lo desarrollamos con Next.js, TypeScript y una nube escalable, y lo dejamos en producción listo para recibir usuarios y pagos.',
    forWho: [
      'Emprendedores con una idea que quieren validar con usuarios reales',
      'Startups que necesitan lanzar antes de levantar capital',
      'Empresas que quieren probar una nueva línea de negocio digital',
    ],
    includes: [
      'Definición del alcance mínimo y del roadmap',
      'Diseño de la interfaz orientado a conversión',
      'Desarrollo frontend y backend',
      'Cuentas de usuario, pagos y correos automáticos',
      'Despliegue en la nube, dominio y analítica',
      'Soporte después del lanzamiento',
    ],
    relatedProjects: ['cover2video', 'perchero', 'puntofix'],
    faqs: [
      {
        q: '¿Qué es un MVP?',
        a: 'Un MVP (producto mínimo viable) es la versión más pequeña de tu producto que ya resuelve el problema principal y que puedes poner frente a usuarios reales. Sirve para validar la idea y aprender antes de invertir en todo lo demás.',
      },
      {
        q: '¿Cuánto tarda desarrollar un MVP?',
        a: 'Depende del alcance. Trabajamos en sprints de 7 días con avances funcionales cada semana, y el plazo total queda definido en la propuesta que te enviamos en menos de 48 horas.',
      },
      {
        q: '¿Puedo seguir creciendo el producto después del MVP?',
        a: 'Sí. Lo construimos con una arquitectura pensada para escalar, así que las siguientes versiones se montan sobre la misma base en lugar de empezar de cero.',
      },
      {
        q: '¿Qué necesito para empezar?',
        a: 'Solo tu idea y el problema que quieres resolver. Escríbenos por WhatsApp o correo y con esa conversación preparamos la propuesta.',
      },
    ],
  },
  {
    slug: 'desarrollo-de-software-a-medida',
    title: 'Software y apps web a medida',
    h1: 'Desarrollo de software y aplicaciones web a medida',
    metaDescription:
      'Sistemas a medida para empresas: flujos con roles, pagos, integraciones con WhatsApp y SaaS multi-empresa. Desarrollo de software en Valencia, Venezuela.',
    summary:
      'Desarrollamos sistemas y aplicaciones web a la medida de cómo trabaja tu empresa: flujos con aprobaciones por rol, pagos, integraciones con WhatsApp y correo, paneles y reportes. Si tu sistema puede servir a otras empresas, lo construimos desde el inicio como un SaaS.',
    forWho: [
      'Empresas que llevan procesos clave en hojas de cálculo y mensajes',
      'Negocios que necesitan un sistema propio: agencias, talleres, tiendas, radios',
      'Empresas que quieren convertir su sistema interno en un producto para otros',
    ],
    includes: [
      'Levantamiento de procesos y reglas del negocio',
      'Sistemas multiusuario con roles y permisos',
      'Pagos e integraciones con WhatsApp, correo y otros servicios',
      'Paneles, reportes y trazabilidad de cada operación',
      'Arquitectura multi-empresa (SaaS) cuando hace falta',
      'Migración de datos y mantenimiento',
    ],
    relatedProjects: ['travelsdesk', 'anhellakids', 'cesaractivo', 'bonchona'],
    faqs: [
      {
        q: '¿Por qué un sistema a medida y no uno genérico?',
        a: 'Cuando tu operación tiene reglas propias, un sistema genérico te obliga a adaptarte a él. Uno a medida sigue tu flujo real, con los roles, aprobaciones y reportes que tu equipo ya usa.',
      },
      {
        q: '¿Pueden integrar el sistema con WhatsApp o pasarelas de pago?',
        a: 'Sí. Hemos integrado pedidos por WhatsApp, PayPal, Stripe, correos automáticos y otros servicios en proyectos que hoy están en producción.',
      },
      {
        q: '¿Qué pasa si después quiero vender el sistema a otras empresas?',
        a: 'Lo podemos construir desde el inicio como multi-empresa (SaaS), como hicimos con TravelsDesk, que nació como sistema de una agencia y hoy es una plataforma para varias.',
      },
    ],
  },
  {
    slug: 'cto-as-a-service',
    title: 'CTO as a Service',
    h1: 'CTO as a Service y consultoría técnica',
    metaDescription:
      'Consultoría técnica para startups y empresas: auditoría de código, arquitectura, selección de stack y roadmap de escalabilidad. CTO as a Service desde Venezuela.',
    summary:
      'Te acompañamos como el área técnica que tu empresa todavía no tiene: auditamos tu código y tu infraestructura, elegimos contigo el stack, definimos el roadmap de escalabilidad y revisamos el trabajo de tu equipo o de tus proveedores.',
    forWho: [
      'Fundadores no técnicos que necesitan tomar decisiones de tecnología',
      'Equipos pequeños de desarrollo sin un líder técnico',
      'Empresas que contratan desarrollo externo y quieren control de calidad',
    ],
    includes: [
      'Auditoría de código y de seguridad',
      'Revisión de arquitectura e infraestructura en la nube',
      'Selección de stack y de proveedores',
      'Roadmap técnico de escalabilidad',
      'Buenas prácticas de despliegue, monitoreo y respaldo',
      'Acompañamiento en decisiones técnicas críticas',
    ],
    relatedProjects: ['travelsdesk', 'puntofix'],
    faqs: [
      {
        q: '¿Qué es CTO as a Service?',
        a: 'Es tener un responsable técnico de nivel senior sin contratarlo a tiempo completo: alguien que toma o valida las decisiones de tecnología, revisa la calidad y alinea el desarrollo con los objetivos del negocio.',
      },
      {
        q: '¿Revisan código hecho por otros proveedores?',
        a: 'Sí. Auditamos el código y la infraestructura, te entregamos los hallazgos ordenados por prioridad y te ayudamos a decidir qué corregir primero.',
      },
      {
        q: '¿Con qué infraestructura trabajan?',
        a: 'Cloudflare (Workers, D1, R2), DigitalOcean, AWS, Docker y Kubernetes, con PostgreSQL y Redis como bases de datos principales.',
      },
    ],
  },
]

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug)

/* ── About ────────────────────────────────────────────────── */

export const ABOUT = {
  intro:
    'Somos Luci es un estudio de desarrollo de software con base en Valencia, Carabobo, Venezuela. Construimos productos digitales de punta a punta, desde la idea hasta producción, para startups y empresas de Venezuela y del exterior, y también desarrollamos nuestros propios SaaS.',
  story:
    'Empezamos construyendo sistemas a medida para negocios cercanos y descubrimos que muchos de esos problemas se repetían en otras empresas. Por eso hoy combinamos dos cosas: desarrollo para clientes y productos propios como Perchero, PuntoFix y TravelsDesk. Construir y operar nuestros propios productos nos obliga a cuidar lo mismo que cuidamos en los de nuestros clientes: rendimiento, seguridad y costos.',
  experience:
    'El equipo suma más de 10 años de experiencia en desarrollo de software, bases de datos, infraestructura en la nube y liderazgo técnico.',
  principles: [
    { title: 'Propuesta honesta', desc: 'Alcance, stack, tiempos y presupuesto claros en menos de 48 horas, sin letra pequeña.' },
    { title: 'Avances cada semana', desc: 'Sprints de 7 días con entregas funcionales que puedes probar desde el primer mes.' },
    { title: 'Código pensado para crecer', desc: 'Arquitecturas que escalan, con despliegue automatizado, monitoreo y documentación.' },
    { title: 'Nos quedamos después', desc: 'Soporte post-lanzamiento y mejoras continuas: muchos de nuestros proyectos siguen creciendo con nosotros.' },
  ],
  strengths: [
    'SaaS multi-empresa con roles y permisos',
    'Pagos e integraciones (WhatsApp, PayPal, Stripe, correo)',
    'Infraestructura en Cloudflare, DigitalOcean y Kubernetes',
    'Rendimiento web y SEO técnico',
    'Procesamiento de video y audio en el navegador',
    'Tiempo real: chat y transmisiones en vivo',
  ],
}

/* ── FAQ (home) ───────────────────────────────────────────── */

export const FAQS: { q: string; a: string }[] = [
  {
    q: '¿Qué es Somos Luci?',
    a: 'Somos Luci es una agencia de desarrollo de software con base en Valencia, Venezuela. Construimos MVPs, aplicaciones web y sistemas a medida para startups y empresas, y ofrecemos consultoría técnica (CTO as a Service). Hoy tenemos 7 productos en línea, tanto propios como de clientes.',
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
