'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const moreRef = useRef<HTMLDivElement>(null)

  // Click anywhere outside the More panel (or Escape) closes it, as in the original.
  useEffect(() => {
    if (!moreOpen) return
    const onDocClick = (e: MouseEvent) => {
      if (!moreRef.current?.contains(e.target as Node)) setMoreOpen(false)
    }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMoreOpen(false) }
    document.addEventListener('click', onDocClick)
    window.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onDocClick)
      window.removeEventListener('keydown', onKey)
    }
  }, [moreOpen])

  return (
    <nav id="navbar" className="sticky top-0 z-40 border-b border-black/[0.06] glass">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 h-20 md:h-24 lg:h-28 flex items-center justify-between">
        <a  href="/#home" className="flex items-center gap-3">
          <div className="w-12 h-12 lg:w-14 lg:h-14 bg-midnight rounded-xl flex items-center justify-center text-white font-head font-bold text-[15px] leading-none">J<span className="text-golden">Y</span></div>
          <div className="leading-none">
            <div className="flex items-baseline gap-1.5 text-midnight">
              <span className="font-brushield font-bold text-[30px] lg:text-[33px] leading-none">Jignasa</span>{' '}
              <span className="font-gotham font-black text-[23px] lg:text-[25px] tracking-[0.01em] leading-none relative -top-[2px]">Yaan</span>
            </div>
            <div className="text-[10px] tracking-[0.22em] font-semibold text-emerald mt-1.5">THE MODERN DESAYATANA</div>
          </div>
        </a>
        {/* One right-hand cluster (links + icons + More), same grouping as youngintach.org — not
             split apart by justify-between, so every piece sits on one shared baseline */}
        <div className="hidden lg:flex items-center gap-7">
          <div className="flex items-center gap-7 yi-nav-link">
            <Link href="/home" className="text-[#e78004] hover:opacity-70 transition">Home</Link>{' '}
            <Link href="/about" className="text-[#0098b2] hover:opacity-70 transition">About JIGNASA YAAN</Link>{' '}
            <Link href="/register" className="text-[#739f16] hover:opacity-70 transition">Register</Link>
          </div>
          <div className="h-6 w-px bg-black/10"></div>
          <div className="flex items-center gap-2.5">
            <a  href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-85 transition"><i className="ri-facebook-fill text-base"></i></a>{' '}
            <a  href="https://www.instagram.com/jignasa_artverse/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full text-white flex items-center justify-center hover:opacity-85 transition" style={{ "background": "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" }}><i className="ri-instagram-line text-base"></i></a>
          </div>
          <div className="h-6 w-px bg-black/10"></div>
          {/* More — hamburger dropdown holding every other tab, nested submenus grouped by theme */}
          <div className="relative" ref={moreRef}>
            <button id="moreBtn" onClick={() => setMoreOpen(o => !o)} className="yi-more-link flex items-center gap-2 text-midnight hover:text-emerald transition" aria-haspopup="true" aria-expanded={moreOpen}>
              <i className="ri-menu-line text-lg"></i> MORE
            </button>
            <div id="morePanel" onClick={(e) => { if ((e.target as HTMLElement).closest('a')) setMoreOpen(false) }} className={(moreOpen ? '' : 'hidden ') + 'absolute right-0 top-[calc(100%+22px)] w-[92vw] max-w-[960px] bg-white rounded-2xl border border-black/5 shadow-2xl p-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-8'}>
              <div>
                <h5 className="text-xs font-extrabold tracking-widest text-[#0098b2]">THE RECORD</h5>
                <ul className="mt-3 space-y-2.5 text-sm">
                  <li><Link href="/the-jignasa-yaan-legacy" className="hover:text-emerald transition">The Jignasa Yaan Legacy</Link></li>
                  <li><Link href="/history-of-jignasa-yaan" className="hover:text-emerald transition">History of Jignasa Yaan</Link></li>
                  <li><Link href="/hall-of-fame" className="hover:text-emerald transition">Hall of Fame</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="text-xs font-extrabold tracking-widest text-[#ae3432]">YAAN DETAILS</h5>
                <ul className="mt-3 space-y-2.5 text-sm">
                  <li><Link href="/events-on-train" className="hover:text-emerald transition">Events on Train</Link></li>
                  <li><Link href="/events-off-train" className="hover:text-emerald transition">Events off Train</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="text-xs font-extrabold tracking-widest text-[#ba175b]">PROGRAM</h5>
                <ul className="mt-3 space-y-2.5 text-sm">
                  <li><Link href="/specific-features" className="hover:text-emerald transition">Specific Features</Link></li>
                  <li><Link href="/faqs" className="hover:text-emerald transition">FAQs</Link></li>
                  <li><Link href="/contact-us" className="hover:text-emerald transition">Contact Us</Link></li>
                  <li><Link href="/come-back-different" className="hover:text-emerald transition">Come Back Different</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="text-xs font-extrabold tracking-widest text-midnight">COMMUNITY</h5>
                <ul className="mt-3 space-y-2.5 text-sm">
                  <li><Link href="/sponsors-and-associate-institutes" className="hover:text-emerald transition">Sponsors & Associate Institutes</Link></li>
                  <li><Link href="/participant-colleges" className="hover:text-emerald transition">Participant Colleges</Link></li>
                  <li><Link href="/mentors" className="hover:text-emerald transition">Mentors</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button id="menuBtn" onClick={() => setMenuOpen(o => !o)} className="lg:hidden w-10 h-10 rounded-full border border-black/10 flex items-center justify-center"><i className="ri-menu-line text-xl"></i></button>
      </div>
      {/* Mobile Menu */}
      <div id="mobileMenu" onClick={(e) => { if ((e.target as HTMLElement).closest('a')) setMenuOpen(false) }} className={(menuOpen ? '' : 'hidden ') + 'lg:hidden border-t border-black/5 bg-white max-h-[calc(100vh-80px)] md:max-h-[calc(100vh-96px)] overflow-y-auto'}>
        <div className="px-4 py-6 space-y-2 text-sm">
          <Link href="/home" className="block py-3 px-4 bg-[#FFF3E6] rounded-xl font-bold text-[#e78004]">Home</Link>{' '}
          <Link href="/about" className="block py-3 px-4 bg-[#E6F6FA] rounded-xl font-bold text-[#0098b2]">About JIGNASA YAAN</Link>{' '}
          <Link href="/register" className="block py-3 px-4 bg-[#F2F7E6] rounded-xl font-bold text-[#739f16]">Register</Link>

          <details className="bg-[#F5F7FA] rounded-xl">
            <summary className="py-3 px-4 font-bold cursor-pointer list-none flex items-center justify-between text-[#0098b2]">The Record <i className="ri-arrow-down-s-line"></i></summary>
            <div className="px-4 pb-3 space-y-1 text-black/70 font-medium">
              <Link href="/the-jignasa-yaan-legacy" className="block py-2">The Jignasa Yaan Legacy</Link>{' '}
              <Link href="/history-of-jignasa-yaan" className="block py-2">History of Jignasa Yaan</Link>{' '}
              <Link href="/hall-of-fame" className="block py-2">Hall of Fame</Link>
            </div>
          </details>

          <details className="bg-[#F5F7FA] rounded-xl">
            <summary className="py-3 px-4 font-bold cursor-pointer list-none flex items-center justify-between text-[#ae3432]">Yaan Details <i className="ri-arrow-down-s-line"></i></summary>
            <div className="px-4 pb-3 space-y-1 text-black/70 font-medium">
              <Link href="/events-on-train" className="block py-2">Events on Train</Link>{' '}
              <Link href="/events-off-train" className="block py-2">Events off Train</Link>
            </div>
          </details>

          <Link href="/specific-features" className="block py-3 px-4 bg-[#F5F7FA] rounded-xl font-medium">Specific Features</Link>{' '}
          <Link href="/contact-us" className="block py-3 px-4 bg-[#F5F7FA] rounded-xl font-medium">Contact Us</Link>{' '}
          <Link href="/faqs" className="block py-3 px-4 bg-[#F5F7FA] rounded-xl font-medium">FAQs</Link>{' '}
          <Link href="/come-back-different" className="block py-3 px-4 bg-[#F5F7FA] rounded-xl font-medium">Come Back Different</Link>{' '}
          <Link href="/sponsors-and-associate-institutes" className="block py-3 px-4 bg-[#F5F7FA] rounded-xl font-medium">Sponsors & Associate Institutes</Link>{' '}
          <Link href="/participant-colleges" className="block py-3 px-4 bg-[#F5F7FA] rounded-xl font-medium">Participant Colleges</Link>{' '}
          <Link href="/mentors" className="block py-3 px-4 bg-[#F5F7FA] rounded-xl font-medium">Mentors</Link>

          <div className="flex items-center gap-3 pt-2">
            <a  href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center"><i className="ri-facebook-fill text-base"></i></a>{' '}
            <a  href="https://www.instagram.com/jignasa_artverse/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full text-white flex items-center justify-center" style={{ "background": "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" }}><i className="ri-instagram-line text-base"></i></a>
          </div>
        </div>
      </div>
    </nav>
  )
}
