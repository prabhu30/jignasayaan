'use client'

import { useSiteUI } from '@/components/SiteUI'

export default function TopEyebrow() {
  const { openRegister } = useSiteUI()

  return (
    <div className="w-full bg-midnight text-ivory text-[11px] tracking-[0.18em] font-semibold py-2.5 px-4 md:px-6 lg:px-8 flex justify-between items-center relative z-50">
      <div className="flex items-center gap-3">
        <span className="hidden md:inline-flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald rounded-full animate-pulse"></span> EXPEDITION 2026 — REGISTRATIONS OPEN</span>{' '}
        <span className="md:hidden flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald rounded-full animate-pulse"></span> 2026 REGISTRATIONS OPEN</span>
      </div>
      <div className="hidden md:flex items-center gap-7 font-label font-normal tracking-[0.01em] text-[12.5px] opacity-85">
        <span className="flex items-center gap-2"><i className="ri-phone-line text-[14px] opacity-80"></i> +91 90000 11223</span>{' '}
        <span className="flex items-center gap-2"><i className="ri-mail-line text-[14px] opacity-80"></i> yaan@jignasayaan.in</span>{' '}
        <a href="https://www.instagram.com/jignasa_artverse/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-100 hover:text-golden transition"><i className="ri-instagram-line text-[14px] opacity-80"></i> @jignasa_artverse</a>
      </div>
      <a  href="#" onClick={(e) => { e.preventDefault(); openRegister() }} className="bg-saffron text-white px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest hover:bg-[#e07d1f] transition">APPLY NOW →</a>
    </div>
  )
}
