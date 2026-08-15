'use client'

import { useEffect, useRef, useState } from 'react'

type Target = {
  key: string
  label: string
  icon: string
  className?: string
  style?: React.CSSProperties
  href: (url: string, title: string) => string
}

// Stack order matches the reference: Facebook, X, Email, LinkedIn — with Instagram added.
const TARGETS: Target[] = [
  {
    key: 'facebook',
    label: 'Share on Facebook',
    icon: 'ri-facebook-fill',
    className: 'bg-[#4267B2]',
    href: url => `https://www.facebook.com/sharer/sharer.php?u=${url}`,
  },
  {
    key: 'x',
    label: 'Share on X',
    icon: 'ri-twitter-x-fill',
    className: 'bg-black',
    href: (url, title) => `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
  },
  {
    key: 'email',
    label: 'Share by email',
    icon: 'ri-mail-fill',
    className: 'bg-[#7D7D7D]',
    href: (url, title) => `mailto:?subject=${title}&body=${url}`,
  },
  {
    key: 'linkedin',
    label: 'Share on LinkedIn',
    icon: 'ri-linkedin-fill',
    className: 'bg-[#2867B2]',
    href: url => `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
  },
  {
    // Instagram has no web share intent — it cannot receive a URL from a browser. This
    // opens the Jignasa Artverse profile instead, matching the navbar's Instagram link.
    key: 'instagram',
    label: 'Jignasa Artverse on Instagram',
    icon: 'ri-instagram-line',
    style: { background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' },
    href: () => 'https://www.instagram.com/jignasa_artverse/',
  },
]

export default function ShareWidget() {
  const [open, setOpen] = useState(false)
  // Resolved after mount so server and client render the same initial markup.
  const [page, setPage] = useState({ url: '', title: '' })
  const rootRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    setPage({
      url: encodeURIComponent(window.location.href),
      title: encodeURIComponent(document.title),
    })
  }, [])

  useEffect(() => {
    if (!open) return
    const onDocClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('click', onDocClick)
    window.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onDocClick)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    // <span> rather than <div> throughout: this renders inside the credit <p>, and
    // a <div> there is invalid nesting — the browser closes the <p> early, which
    // makes the server and client trees disagree and breaks hydration.
    <span ref={rootRef} className="relative inline-flex flex-col items-center">
      {/* Options stack upward from the trigger, as in the reference. */}
      <span
        className={
          'absolute bottom-full mb-2 z-20 flex flex-col gap-1 transition-all duration-200 ' +
          (open
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-1 pointer-events-none')
        }
      >
        {TARGETS.map(t => (
          <a
            key={t.key}
            href={page.url ? t.href(page.url, page.title) : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.label}
            title={t.label}
            tabIndex={open ? 0 : -1}
            style={t.style}
            className={
              'w-14 h-11 rounded-lg flex items-center justify-center text-white text-xl ' +
              'shadow-sm hover:opacity-90 transition ' + (t.className ?? '')
            }
          >
            <i className={t.icon}></i>
          </a>
        ))}
      </span>

      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-label={open ? 'Hide share options' : 'Show share options'}
        /* Sized to sit inline with the credit sentence without disturbing its line box. */
        className="w-9 h-9 rounded-full flex items-center justify-center text-emerald text-xl hover:bg-emerald/10 transition"
      >
        <i className="ri-share-fill"></i>
      </button>
    </span>
  )
}
