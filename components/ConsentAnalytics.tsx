'use client'

import { useEffect, useState } from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'

export const CONSENT_EVENT = 'cookie-consent-accepted'

// GA4 loads only after the visitor accepts cookies (now or on a previous visit)
export default function ConsentAnalytics({ gaId }: { gaId: string }) {
  const [allowed, setAllowed] = useState(false)

  useEffect(() => {
    try {
      if (localStorage.getItem('cookie-consent') === 'accepted') setAllowed(true)
    } catch {}
    const onAccept = () => setAllowed(true)
    window.addEventListener(CONSENT_EVENT, onAccept)
    return () => window.removeEventListener(CONSENT_EVENT, onAccept)
  }, [])

  return allowed ? <GoogleAnalytics gaId={gaId} /> : null
}
