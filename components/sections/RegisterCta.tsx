'use client'

import { useSiteUI } from '@/components/SiteUI'
import { useCountdown } from '@/components/useCountdown'

export default function RegisterCta() {
  const { openRegister, openVideo } = useSiteUI()
  const countdown = useCountdown()

  return (
    <section id="register" className="relative overflow-hidden bg-midnight">
      <div className="absolute inset-0">
        <img src="backgrounds/web/dance-orange.webp" alt="" className="w-full h-full object-cover object-bottom opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/80 to-emerald/30"></div>
      </div>
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-14 md:py-20">
        <div className="bg-white rounded-[28px] p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
          <div>
            <div className="inline-flex items-center gap-2 bg-saffron text-white text-xs font-extrabold tracking-widest px-3 py-1.5 rounded-full">REGISTRATIONS CLOSING SOON • LIMITED COACHES</div>
            <h3 className="font-extrabold text-[28px] md:text-[40px] leading-none mt-4 text-midnight">This is your Yaan. <br /><span className="font-light italic font-brush text-emerald">This is your time for Keralam.</span></h3>
            <p className="mt-3 text-black/60 max-w-[560px] leading-relaxed">South India’s largest student yaan — from Vijayawada to the heart of Kerala and back, with stories you’ll carry for life.</p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold">
              <span className="px-3 py-1.5 rounded-full bg-[#E6F6F1] text-emerald border border-[#BFE9DE]">No Interview • First Come, First Served</span>{' '}
              <span className="px-3 py-1.5 rounded-full bg-[#FFF3E6] text-[#9A4A00] border border-[#FFD9A8]">EMI Available</span>{' '}
              <span className="px-3 py-1.5 rounded-full bg-[#EEF2FF] text-midnight border border-[#C7D2FE]">Group Discounts</span>
            </div>
          </div>
          <div className="bg-midnight text-white rounded-[24px] p-6 w-full lg:w-[380px] shrink-0">
            <div className="text-golden font-bold tracking-widest text-xs">NEXT YAAN DEPARTS IN</div>
            <div id="countdown2" className="font-label font-bold text-3xl mt-2">{countdown}</div>
            <div className="mt-5 space-y-3">
              <button onClick={openRegister} className="w-full bg-saffron hover:bg-[#e07d1f] text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 transition">Secure My Seat — Pay ₹2,000 Advance <i className="ri-arrow-right-line"></i></button>{' '}
              <button onClick={openVideo} className="w-full bg-white/10 hover:bg-white hover:text-midnight text-white py-3 rounded-full font-semibold transition">Download Brochure (PDF)</button>
            </div>
            <div className="mt-4 text-xs text-white/60 text-center">100% Refundable till 15 days before departure • UPI • Cards • Net Banking</div>
          </div>
        </div>
      </div>
    </section>
  )
}
