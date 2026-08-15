'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

/**
 * Modal state for the whole page. In the original index.html these were three
 * globals (openVideo/openLightbox/openRegister) toggling a `hidden` class and
 * setting document.body.style.overflow; the visible result is unchanged.
 */
type SiteUI = {
  videoOpen: boolean
  openVideo: () => void
  closeVideo: () => void

  lightboxSrc: string | null
  openLightbox: (el: HTMLElement) => void
  closeLightbox: () => void

  registerOpen: boolean
  openRegister: () => void
  closeRegister: () => void
}

const Ctx = createContext<SiteUI | null>(null)

export function useSiteUI() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useSiteUI must be used inside <SiteUIProvider>')
  return ctx
}

export function SiteUIProvider({ children }: { children: React.ReactNode }) {
  const [videoOpen, setVideoOpen] = useState(false)
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const [registerOpen, setRegisterOpen] = useState(false)

  const closeVideo = useCallback(() => setVideoOpen(false), [])
  const closeLightbox = useCallback(() => setLightboxSrc(null), [])
  const closeRegister = useCallback(() => setRegisterOpen(false), [])

  const openLightbox = useCallback((el: HTMLElement) => {
    const img = el.querySelector('img')
    setLightboxSrc(img ? img.src : '')
  }, [])

  const anyOpen = videoOpen || lightboxSrc !== null || registerOpen

  // Matches the original: any open modal locks body scroll, closing restores it.
  useEffect(() => {
    document.body.style.overflow = anyOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [anyOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      closeVideo(); closeLightbox(); closeRegister()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeVideo, closeLightbox, closeRegister])

  const value = useMemo<SiteUI>(() => ({
    videoOpen,
    openVideo: () => setVideoOpen(true),
    closeVideo,
    lightboxSrc,
    openLightbox,
    closeLightbox,
    registerOpen,
    openRegister: () => setRegisterOpen(true),
    closeRegister,
  }), [videoOpen, lightboxSrc, registerOpen, openLightbox, closeVideo, closeLightbox, closeRegister])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}
