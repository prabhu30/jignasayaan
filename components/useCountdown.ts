'use client'

import { useEffect, useState } from 'react'

export const DEPARTURE = new Date('2026-12-20T06:00:00+05:30').getTime()

/**
 * The original markup shipped this literal and let a setInterval overwrite it a
 * tick later. Keeping it as the initial state means server and client render the
 * same string, so there is no hydration mismatch and no visible flash.
 */
const INITIAL = '42D : 08H : 21M : 09S'

function format(now: number) {
  const diff = Math.max(0, DEPARTURE - now)
  const d = Math.floor(diff / 86400000)
  const h = Math.floor((diff % 86400000) / 3600000)
  const m = Math.floor((diff % 3600000) / 60000)
  const s = Math.floor((diff % 60000) / 1000)
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${pad(d)}D : ${pad(h)}H : ${pad(m)}M : ${pad(s)}S`
}

export function useCountdown() {
  const [value, setValue] = useState(INITIAL)

  useEffect(() => {
    const tick = () => setValue(format(Date.now()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return value
}
