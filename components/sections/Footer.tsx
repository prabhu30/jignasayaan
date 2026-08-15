'use client'

import { useSiteUI } from '@/components/SiteUI'

export default function Footer() {
  const { openRegister } = useSiteUI()

  return (
    <footer id="contact" className="tex tex-dark tex-procession-teal bg-[#060F1F] text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-12 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-midnight font-bold">JY</div>
              <div className="leading-none">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-brushield font-bold text-[27px] leading-none">Jignasa</span>{' '}
                  <span className="font-gotham font-black text-[21px] tracking-[0.01em] leading-none relative -top-[2px]">Yaan</span>
                </div>
                <div className="text-[10px] tracking-[0.22em] font-semibold text-golden mt-1">THE MODERN DESAYATANA</div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-[420px]">A national experiential learning movement by Jignasa. Connecting South to Bharat through education, culture, and transformation. This Time for Keralam.</p>
            <div className="mt-6 flex gap-3">
              <a  href="#" onClick={(e) => e.preventDefault()} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-midnight transition"><i className="ri-instagram-line"></i></a>{' '}
              <a  href="#" onClick={(e) => e.preventDefault()} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-midnight transition"><i className="ri-youtube-line"></i></a>{' '}
              <a  href="#" onClick={(e) => e.preventDefault()} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-midnight transition"><i className="ri-linkedin-line"></i></a>{' '}
              <a  href="#" onClick={(e) => e.preventDefault()} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-midnight transition"><i className="ri-twitter-x-line"></i></a>
            </div>
          </div>
          <div>
            <div className="font-bold text-sm tracking-widest">EXPLORE</div>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              <li><a  href="#journey" className="hover:text-white">Journey Map</a></li>
              <li><a  href="#destinations" className="hover:text-white">Destinations</a></li>
              <li><a  href="#experience" className="hover:text-white">Student Experience</a></li>
              <li><a  href="#gallery" className="hover:text-white">Gallery</a></li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-sm tracking-widest">SUPPORT</div>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              <li><a  href="#parents" className="hover:text-white">Parent Zone</a></li>
              <li><a  href="#faq" className="hover:text-white">FAQs</a></li>
              <li><a  href="#" onClick={(e) => { e.preventDefault(); openRegister() }} className="hover:text-white">Register</a></li>
              <li><a  href="#contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-sm tracking-widest">CONTACT</div>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex gap-2"><i className="ri-map-pin-line text-golden mt-0.5"></i> Jignasa Office, Vijayawada, AP — 520001</li>
              <li className="flex gap-2"><i className="ri-phone-line text-golden mt-0.5"></i> +91 90000 11223</li>
              <li className="flex gap-2"><i className="ri-mail-line text-golden mt-0.5"></i> yaan@jignasayaan.in</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 justify-between items-center text-xs text-white/50">
          <div>© 2026 Jignasayaan • Jignasa • South for Bharat. Made with ♥ in Vijayawada & Kochi.</div>
          <div className="flex gap-4"><a  href="#" onClick={(e) => e.preventDefault()} className="hover:text-white">Privacy</a><a  href="#" onClick={(e) => e.preventDefault()} className="hover:text-white">Terms</a><a  href="#" onClick={(e) => e.preventDefault()} className="hover:text-white">Refund Policy</a></div>
        </div>
      </div>
    </footer>
  )
}
