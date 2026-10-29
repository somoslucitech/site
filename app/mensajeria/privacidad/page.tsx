import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage, { EMPRESA } from '@/components/LegalPage'
import { CONTACT_EMAIL } from '@/lib/content'

const PATH = '/mensajeria/privacidad'
const DESCRIPTION =
  'Cómo Somos Luci, C.A. trata los datos personales en Somos Luci Mensajería, su servicio de conexión con la plataforma de WhatsApp Business.'

export const metadata: Metadata = {
  title: 'Política de privacidad · Somos Luci Mensajería',
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { url: PATH, title: 'Política de privacidad · Somos Luci Mensajería', description: DESCRIPTION },
}

export default function MessagingPrivacyPage() {
  return (
    <LegalPage
      eyebrow="Somos Luci Mensajería"
      title="Política de privacidad"
      description={DESCRIPTION}
      path={PATH}
      updated="29 de octubre de 2026"
    >
      <p>
        Esta política explica qué datos personales trata <strong>{EMPRESA.razonSocial}</strong> («Somos Luci»,
        «nosotros») en <strong>Somos Luci Mensajería</strong>, el servicio y la app de Meta con los que las empresas
        clientes conectan su cuenta de WhatsApp Business a nuestro software, y cómo puedes ejercer tus derechos.
      </p>

      <h2>1. Quién es el responsable</h2>
      <p>
        {EMPRESA.razonSocial}, RIF {EMPRESA.rif}, {EMPRESA.registro}.
      </p>
      <p>
        Contacto para privacidad: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> · WhatsApp{' '}
        <a href={EMPRESA.whatsappUrl}>{EMPRESA.whatsapp}</a>.
      </p>

      <h2>2. Qué es Somos Luci Mensajería</h2>
      <p>
        Somos Luci es <strong>proveedor de tecnología (Tech Provider) de Meta</strong>. Con nuestra app, las empresas
        clientes conectan su propia cuenta de WhatsApp Business para enviar y recibir mensajes, usar plantillas y, si lo
        contratan, un asistente automático. El servicio se ofrece dentro de productos de Somos Luci (por ejemplo, Perchero)
        o directamente a empresas.
      </p>

      <h2>3. Rol de cada parte</h2>
      <ul>
        <li>
          La <strong>empresa cliente</strong> es la dueña de su cuenta y de su número de WhatsApp, y es la responsable de
          los datos de sus propios clientes. Somos Luci los trata <strong>por cuenta de ella</strong> y según sus
          instrucciones.
        </li>
        <li>
          Si eres cliente final de una de esas empresas y quieres saber qué hace con tus datos, escríbele primero a ella;
          también puedes escribirnos y te ayudamos.
        </li>
      </ul>

      <h2>4. Qué datos recibimos de la plataforma de WhatsApp</h2>
      <ul>
        <li>Datos de la cuenta de la empresa: identificadores de la cuenta de WhatsApp Business y del número, nombre visible, estado y calidad del número.</li>
        <li>Datos de los contactos: número de teléfono, nombre de perfil de WhatsApp y el contenido de los mensajes (texto, imágenes, audios, documentos y ubicaciones que se envíen).</li>
        <li>Metadatos: fecha y hora, estado de entrega y lectura, y plantillas usadas.</li>
        <li>Datos de inicio de sesión necesarios para conectar la cuenta (tokens de acceso de Meta), que guardamos cifrados.</li>
      </ul>

      <h2>5. Para qué los usamos</h2>
      <ul>
        <li>Mostrar las conversaciones a la empresa cliente y permitirle responder.</li>
        <li>Enviar las notificaciones y plantillas que la empresa configure.</li>
        <li>Si la empresa activa el asistente automático, generar respuestas con la información de su propio negocio (catálogo, precios, horarios).</li>
        <li>Seguridad, prevención de abusos, soporte técnico y cumplimiento de las políticas de Meta.</li>
      </ul>
      <p>
        <strong>No vendemos</strong> estos datos, no los usamos para publicidad propia ni para entrenar modelos de
        inteligencia artificial, y no los compartimos con otras empresas clientes.
      </p>

      <h2>6. Con quién compartimos datos</h2>
      <p>
        Los mensajes viajan por la plataforma de WhatsApp Business de Meta. Además, nos apoyamos en proveedores de
        tecnología (alojamiento, base de datos, envío de correos y, si la empresa activa el asistente automático, un
        servicio de inteligencia artificial) que solo reciben lo necesario para prestar el servicio y no pueden usarlo para
        otros fines. Algunos están fuera de Venezuela, principalmente en los Estados Unidos, por lo que los datos pueden
        transferirse fuera del país. También podemos revelar datos cuando lo exija una autoridad competente conforme a la
        ley.
      </p>

      <h2>7. Cuánto tiempo los guardamos</h2>
      <ul>
        <li>Mensajes y contactos de una empresa cliente: mientras su cuenta esté conectada. Al desconectarla, los borramos en un plazo máximo de 30 días, salvo que la empresa pida exportarlos antes.</li>
        <li>Datos que la ley obliga a conservar (por ejemplo, facturación): el plazo que fije la ley.</li>
      </ul>

      <h2>8. Seguridad</h2>
      <p>
        Usamos conexiones cifradas (HTTPS), tokens guardados cifrados, acceso restringido por roles y autenticación en dos
        pasos para el personal. Ningún sistema es infalible; si ocurre un incidente que afecte tus datos, avisaremos sin
        demora indebida.
      </p>

      <h2>9. Tus derechos</h2>
      <p>
        Conforme al artículo 28 de la Constitución de la República Bolivariana de Venezuela (habeas data) y demás normas
        aplicables, puedes pedir <strong>acceso</strong>, <strong>rectificación</strong>, <strong>actualización</strong> y{' '}
        <strong>eliminación</strong> de tus datos, y oponerte a su uso. Escríbenos a{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>; respondemos en un máximo de 15 días hábiles. Para borrar
        tus datos sigue las <Link href="/mensajeria/eliminar-datos">instrucciones de eliminación de datos</Link>.
      </p>

      <h2>10. Menores de edad</h2>
      <p>
        El servicio está dirigido a empresas. No recopilamos a sabiendas datos de niños, niñas o adolescentes como
        usuarios del servicio; si detectamos alguno, lo eliminamos.
      </p>

      <h2>11. Productos con política propia</h2>
      <p>
        Cuando el servicio se usa dentro de un producto de Somos Luci con política propia, esa política prevalece en lo
        específico. Por ejemplo, <a href="https://perchero.app/privacidad">la política de privacidad de Perchero</a>.
      </p>

      <h2>12. Cambios</h2>
      <p>
        Podemos actualizar esta política. Publicaremos la versión vigente en esta página con su fecha y, si el cambio es
        importante, avisaremos a las empresas clientes por correo.
      </p>
    </LegalPage>
  )
}
