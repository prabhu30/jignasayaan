'use client'

import { useSiteUI } from '@/components/SiteUI'
import { useCountdown } from '@/components/useCountdown'

export default function Hero() {
  const { openRegister, openVideo } = useSiteUI()
  const countdown = useCountdown()

  return (
    <section id="home" className="relative overflow-hidden bg-midnight">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2000&auto=format&fit=crop" alt="Kerala Backwaters" className="w-full h-full object-cover opacity-90 parallax-img scale-[1.04]" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/20 via-midnight/30 to-midnight/85"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/60 via-transparent to-transparent"></div>
        {/* grain */}
        <div className="absolute inset-0 opacity-[0.07]" style={{ "backgroundImage": "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
      </div>

      {/* floating info */}
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-10 md:pt-14 pb-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-end min-h-[78vh]">
          {/* Left Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 glass-dark rounded-full px-4 py-2 text-ivory/90 text-xs tracking-widest font-semibold mb-6">
              <span className="w-2 h-2 bg-emerald rounded-full animate-pulse shadow-[0_0_10px_rgba(15,139,111,0.8)]"></span>{' '}
              SOUTH INDIA'S LARGEST STUDENT YAAN • 10TH EDITION
              {' '}<span className="hidden md:inline-flex ml-2 bg-white text-midnight px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-widest">SOUTH FOR BHARAT</span>
            </div>

            <h1 className="font-gotham font-black leading-[0.95] tracking-[-0.02em] text-white">
              <span className="block text-[14px] md:text-[18px] tracking-[0.24em] font-semibold opacity-90 mb-3">Jignasayaan</span>{' '}
              <span className="block text-[38px] md:text-[60px] lg:text-[68px]">The Modern</span>{' '}
              <span className="block text-[34px] md:text-[53px] lg:text-[60px] leading-[1.05] font-brush">Desayatana.</span>
            </h1>

            <div className="mt-6 max-w-[620px]">
              <p className="text-[18px] md:text-[22px] leading-relaxed text-white font-light">This Time for <span className="font-semibold text-golden">Keralam.</span> An expedition where South discovers Bharat — through <span className="underline decoration-emerald decoration-2 underline-offset-4">culture, leadership & transformation.</span></p>
              <p className="mt-3 text-white/70 text-sm md:text-[15px] leading-relaxed max-w-[560px]">Not tourism. Not an event. A national experiential learning movement connecting 5000+ students to the soul of Bharat — starting from the heart of Kerala.</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={openRegister} className="bg-saffron hover:bg-[#e67a12] text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide shadow-xl shadow-saffron/25 flex items-center gap-2 transition magnetic"><i className="ri-compass-3-line text-lg"></i> Join the Expedition</button>
            </div>

            {/* trust bar */}
            <div className="mt-10 grid grid-cols-2 gap-4 max-w-[560px]">
              <div className="glass-dark rounded-2xl p-4">
                <div className="text-golden font-label font-bold text-2xl leading-none">1080+</div>
                <div className="text-white/70 text-[11px] tracking-widest font-semibold mt-1">YAANIKS ONBOARD</div>
              </div>
              <div className="glass-dark rounded-2xl p-4">
                <div className="text-emerald font-label font-bold text-2xl leading-none">100+</div>
                <div className="text-white/70 text-[11px] tracking-widest font-semibold mt-1">INSTITUTIONS</div>
              </div>
            </div>

            {/* Theme + tagline — same card treatment as the About section's pair.
                A small label sits above each value so "Theme"/"Tagline" reads as the
                caption rather than competing with the value for the bold line. */}
            <div className="mt-4 grid sm:grid-cols-2 gap-4 max-w-[560px]">
              <div className="bg-white rounded-2xl p-5 border border-black/5 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center"><i className="ri-team-line text-xl"></i></div>
                <div className="text-[11px] tracking-widest font-semibold text-black/45 mt-3">THEME</div>
                <div className="font-bold text-midnight leading-snug mt-0.5">South for Bharat</div>
              </div>
              <div className="bg-midnight text-white rounded-2xl p-5 shadow-lg">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center"><i className="ri-leaf-line text-xl"></i></div>
                <div className="text-[11px] tracking-widest font-semibold text-white/50 mt-3">TAGLINE</div>
                <div className="font-bold leading-snug mt-0.5">This Time for Keralam</div>
              </div>
            </div>
          </div>

          {/* Right Card Stack */}
          <div className="relative z-10 lg:pb-2">
            <div className="bg-white rounded-[28px] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)] max-w-[480px] ml-auto">
              <div className="rounded-[20px] overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop" alt="Train journey" className="w-full h-[420px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="bg-emerald text-white text-[11px] font-extrabold tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> LIVE EXPEDITION</span>{' '}
                  <span className="bg-white/90 backdrop-blur text-midnight text-[11px] font-bold px-3 py-1.5 rounded-full">AMARAVATI → TRIVANDRUM</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass rounded-2xl p-4 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] tracking-widest font-bold text-midnight/60">NEXT DEPARTURE</div>
                      <div id="countdown" className="font-label font-bold text-midnight text-lg leading-none mt-1">{countdown}</div>
                    </div>
                    <button onClick={openRegister} className="bg-midnight text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black transition"><i className="ri-arrow-right-line text-xl"></i></button>
                  </div>
                </div>
                {/* play */}
                <button onClick={openVideo} className="absolute inset-0 m-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition"><i className="ri-play-fill text-3xl text-midnight ml-1"></i></button>
              </div>
              <div className="px-2 pt-4 pb-2 flex items-center justify-between">
                <div className="flex -space-x-2">
                  <img src="https://i.pravatar.cc/100?img=33" className="w-8 h-8 rounded-full border-2 border-white object-cover" />{' '}
                  <img src="https://i.pravatar.cc/100?img=12" className="w-8 h-8 rounded-full border-2 border-white object-cover" />{' '}
                  <img src="https://i.pravatar.cc/100?img=45" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <div className="w-8 h-8 rounded-full bg-midnight text-white border-2 border-white flex items-center justify-center text-[11px] font-bold">+2k</div>
                </div>
                <div className="text-xs font-semibold text-midnight/70 flex items-center gap-1.5"><i className="ri-star-fill text-golden"></i> 4.9/5 from 3,284 students</div>
              </div>
            </div>
            {/* floating badge */}
            <div className="hidden lg:flex absolute -left-6 bottom-10 bg-golden text-midnight rounded-2xl px-5 py-4 shadow-xl items-center gap-3 rotate-[-1.5deg]">
              <div className="w-10 h-10 bg-midnight text-golden rounded-xl flex items-center justify-center"><i className="ri-award-line text-xl"></i></div>
              <div className="leading-tight">
                <div className="font-extrabold text-sm tracking-wide">National Integration</div>
                <div className="text-xs font-medium opacity-70">Ministry Recognised Movement</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom marquee */}
      <div className="relative border-y border-white/10 bg-midnight/70 backdrop-blur overflow-hidden">
        <div className="flex items-center gap-6 py-3 marquee text-white/90 text-xs tracking-[0.28em] font-bold">
          <span>EXPLORE • EXPERIENCE • EVOLVE •</span><span> EXPLORE • EXPERIENCE • EVOLVE •</span><span> EXPLORE • EXPERIENCE • EVOLVE •</span><span> EXPLORE • EXPERIENCE • EVOLVE •</span><span> EXPLORE • EXPERIENCE • EVOLVE •</span><span> EXPLORE • EXPERIENCE • EVOLVE •</span><span> EXPLORE • EXPERIENCE • EVOLVE •</span><span> EXPLORE • EXPERIENCE • EVOLVE •</span>
        </div>
      </div>
    </section>
  )
}
