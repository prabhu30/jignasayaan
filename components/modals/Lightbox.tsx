'use client'

import { useSiteUI } from '@/components/SiteUI'

export default function Lightbox() {
  const { lightboxSrc, closeLightbox } = useSiteUI()

  return (
    <div id="lightbox" className={'fixed inset-0 z-[60]' + (lightboxSrc !== null ? '' : ' hidden')}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur" onClick={closeLightbox}></div>
      <div className="relative max-w-4xl mx-auto mt-[5vh] p-4">
        {/* The original shipped src="" here, which makes the browser re-request the page
            itself as an image. Omitting the attribute while closed avoids that; the img is
            inside a display:none container until a lightbox opens, so nothing moves. */}
        <img id="lightboxImg" src={lightboxSrc || undefined} className="w-full max-h-[80vh] object-contain rounded-2xl bg-white" />{' '}
        <button onClick={closeLightbox} className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center"><i className="ri-close-line text-xl"></i></button>
      </div>
    </div>
  )
}
