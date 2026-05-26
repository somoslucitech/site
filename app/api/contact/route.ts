import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const TOPIC_LABELS: Record<string, string> = {
  dev: 'Desarrollo de software',
  consulting: 'Consultoría tecnológica',
  mentoring: 'Mentoría 1:1',
  other: 'Otra consulta',
}

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: token,
      remoteip: ip,
    }),
  })
  const data = await res.json()
  return data.success === true
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, topic, message, token } = await req.json()

    if (!name || !email || !topic || !message || !token) {
      return NextResponse.json({ error: 'Faltan campos requeridos.' }, { status: 400 })
    }

    const ip =
      req.headers.get('CF-Connecting-IP') ??
      req.headers.get('x-forwarded-for') ??
      ''

    const valid = await verifyTurnstile(token, ip)
    if (!valid) {
      return NextResponse.json({ error: 'Verificación de seguridad fallida.' }, { status: 400 })
    }

    const topicLabel = TOPIC_LABELS[topic] ?? topic

    const { error } = await resend.emails.send({
      from: `Somos Luci <${process.env.FROM_EMAIL ?? 'onboarding@resend.dev'}>`,
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `[Contacto] ${topicLabel} — ${name}`,
      html: `
        <div style="font-family:ui-sans-serif,system-ui,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#ffffff;">
          <div style="background:linear-gradient(135deg,#00CED1,#00B5B8);border-radius:16px;padding:28px 32px;margin-bottom:28px;">
            <h1 style="color:white;margin:0;font-size:20px;font-weight:700;letter-spacing:-0.02em;">
              Nuevo mensaje de contacto
            </h1>
            <p style="color:rgba(255,255,255,0.75);margin:6px 0 0;font-size:13px;">
              somosluci.com — formulario web
            </p>
          </div>

          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;font-size:12px;color:#94a3b8;text-transform:uppercase;letter-spacing:0.05em;width:120px;">Nombre</td>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;font-size:14px;color:#0f172a;font-weight:600;">${name}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;font-size:12px;color:#94a3b8;text-transform:uppercase;letter-spacing:0.05em;">Correo</td>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;font-size:14px;">
                <a href="mailto:${email}" style="color:#00CED1;text-decoration:none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;font-size:12px;color:#94a3b8;text-transform:uppercase;letter-spacing:0.05em;">Consulta</td>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;font-size:14px;color:#0f172a;">${topicLabel}</td>
            </tr>
          </table>

          <div style="background:#f8fafc;border-radius:12px;padding:20px 24px;margin-bottom:28px;">
            <p style="font-size:12px;color:#94a3b8;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 10px;">Mensaje</p>
            <p style="font-size:14px;color:#0f172a;line-height:1.7;margin:0;white-space:pre-wrap;">${message}</p>
          </div>

          <p style="font-size:12px;color:#94a3b8;text-align:center;margin:0;">
            Responde directamente a este email para contactar a <strong>${name}</strong>.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Error al enviar el mensaje.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 })
  }
}
