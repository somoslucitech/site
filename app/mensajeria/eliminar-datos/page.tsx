import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage, { EMPRESA } from '@/components/LegalPage'
import { CONTACT_EMAIL } from '@/lib/content'

const PATH = '/mensajeria/eliminar-datos'
const DESCRIPTION =
  'Cómo pedir a Somos Luci, C.A. que elimine tus datos del servicio Somos Luci Mensajería, conectado a la plataforma de WhatsApp Business.'

const ASUNTO = encodeURIComponent('Eliminar mis datos')

export const metadata: Metadata = {
  title: 'Eliminación de datos · Somos Luci Mensajería',
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { url: PATH, title: 'Eliminación de datos · Somos Luci Mensajería', description: DESCRIPTION },
}

export default function DataDeletionPage() {
  return (
    <LegalPage eyebrow="Somos Luci Mensajería" title="Eliminación de datos" description={DESCRIPTION} path={PATH} updated="29 de octubre de 2026">
      <p>
        Puedes pedir en cualquier momento que {EMPRESA.razonSocial} elimine tus datos personales. Estas instrucciones
        aplican a la app <strong>Somos Luci Mensajería</strong> de Meta.
      </p>

      <h2>Si eres una empresa que conectó su WhatsApp</h2>
      <ol>
        <li>
          Desconecta la cuenta desde el panel del producto que usas, o quita el acceso en Meta: <strong>Configuración del
          negocio → Integraciones → Integraciones conectadas</strong> (o, desde tu perfil de Facebook,{' '}
          <strong>Configuración → Integraciones comerciales</strong>) y elimina «Somos Luci Mensajería».
        </li>
        <li>
          Escríbenos a <a href={`mailto:${CONTACT_EMAIL}?subject=${ASUNTO}`}>{CONTACT_EMAIL}</a> con el asunto «Eliminar
          mis datos», el nombre de la empresa y el número de WhatsApp conectado. Si quieres una copia de tus
          conversaciones, pídela en el mismo correo.
        </li>
        <li>
          Borramos la cuenta, los tokens de acceso, los contactos y los mensajes en un plazo máximo de <strong>30
          días</strong> y te confirmamos por correo con un número de solicitud.
        </li>
      </ol>

      <h2>Si escribiste a una empresa que usa nuestro servicio</h2>
      <p>
        La empresa a la que le escribiste es la dueña de esa conversación. Pídele a ella que borre tus datos; también
        puedes escribirnos a <a href={`mailto:${CONTACT_EMAIL}?subject=${ASUNTO}`}>{CONTACT_EMAIL}</a> o por WhatsApp al{' '}
        <a href={EMPRESA.whatsappUrl}>{EMPRESA.whatsapp}</a> indicando tu número y el nombre de la empresa, y gestionamos
        la eliminación con ella.
      </p>

      <h2>Qué no podemos borrar de inmediato</h2>
      <p>
        Los datos que la ley nos obliga a conservar, como los de facturación, se guardan solo por el plazo legal y luego se
        eliminan. Más detalles en nuestra <Link href="/mensajeria/privacidad">política de privacidad</Link>.
      </p>
    </LegalPage>
  )
}
