'use client'

import { useEffect } from 'react'

/**
 * Cross-cutting DOM effects kept as document-level listeners, exactly as in the
 * original page: reveal-on-scroll, the magnetic button nudge, and smooth
 * scrolling for in-page anchors. These read the DOM rather than component state
 * because they apply to elements spread across every section — the same reason
 * a scroll-animation library would.
 */
export default function PageEffects() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const cleanups: Array<() => void> = []
    document.querySelectorAll<HTMLElement>('.magnetic').forEach(btn => {
      const move = (e: MouseEvent) => {
        const r = btn.getBoundingClientRect()
        const x = e.clientX - r.left - r.width / 2
        const y = e.clientY - r.top - r.height / 2
        btn.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`
      }
      const leave = () => { btn.style.transform = '' }
      btn.addEventListener('mousemove', move)
      btn.addEventListener('mouseleave', leave)
      cleanups.push(() => {
        btn.removeEventListener('mousemove', move)
        btn.removeEventListener('mouseleave', leave)
      })
    })
    return () => cleanups.forEach(fn => fn())
  }, [])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)
        ?.closest?.('a[href^="#"], a[href^="/#"]') as HTMLAnchorElement | null
      if (!anchor) return
      const href = anchor.getAttribute('href') || ''
      // Section links are written as "/#about" so they also resolve from a More page.
      // On the home page itself, intercept them and keep the original smooth scroll.
      const id = href.startsWith('/#') ? href.slice(1) : href
      if (!id.startsWith('#') || id.length <= 1) return
      if (href.startsWith('/#') && window.location.pathname !== '/') return
      const target = document.querySelector(id)
      if (!target) return
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}
