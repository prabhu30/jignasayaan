'use client'

import { useSiteUI } from '@/components/SiteUI'

import { useEffect, useRef, useState } from 'react'

export default function Journey() {
  const { openRegister } = useSiteUI()
  const sectionRef = useRef<HTMLElement>(null)
  // Rendered as 12% to match the server output, then the scroll handler takes over
  // on mount exactly as the original script's initial updateJourney() call did.
  const [progress, setProgress] = useState('12%')

  useEffect(() => {
    const update = () => {
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const total = rect.height - vh * 0.3
      let p = 0
      if (rect.top < vh * 0.6) {
        p = Math.min(100, Math.max(0, ((vh * 0.6 - rect.top) / (total + vh * 0.4)) * 100))
      }
      setProgress((8 + p * 0.84) + '%')
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <section id="journey" ref={sectionRef} className="tex tex-folk-green-alt bg-[#F5F7FA] border-y border-black/5 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-14 md:py-20">
        <div className="text-center max-w-3xl mx-auto reveal">
          <div className="inline-flex items-center gap-2 bg-white border border-black/5 px-4 py-2 rounded-full text-xs font-bold tracking-[0.18em] text-midnight"><i className="ri-train-line text-emerald"></i> INTERACTIVE YAAN MAP</div>
          <h3 className="font-head font-extrabold text-[28px] md:text-[48px] leading-none mt-4 text-midnight">Your scroll is the journey.</h3>
          <p className="mt-3 text-black/60 leading-relaxed">Follow the train from Vijayawada into the heart of Keralam. Each stop unlocks a new layer of learning.</p>
          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-midnight/60"><span className="w-2 h-2 rounded-full bg-emerald animate-pulse"></span> SCROLL TO MOVE THE TRAIN <i className="ri-arrow-down-line"></i></div>
          </div>
        </div>

        <div className="mt-10 relative">
          {/* progress */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-black/10">
            <div id="progressLine" className="absolute top-0 left-0 w-full bg-gradient-to-b from-emerald to-saffron transition-all duration-200" style={{ height: progress }}></div>
          </div>
          {/* train */}
          <div id="train" className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-midnight rounded-2xl items-center justify-center text-white shadow-xl border-4 border-white z-10 transition-all duration-200" style={{ top: progress }}><i className="ri-train-fill text-2xl"></i></div>

          <div className="grid gap-8 relative">
            {/* Station 1 */}
            <div className="journey-card grid md:grid-cols-[1fr_80px_1fr] gap-4 items-center reveal">
              <div className="md:text-right order-2 md:order-1">
                <div className="bg-white rounded-[24px] p-6 shadow-sm border border-black/5 md:ml-auto max-w-[520px]">
                  <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald"><span className="w-6 h-px bg-emerald"></span> STATION 01 — START</div>
                  <h4 className="font-bold text-xl mt-2">Vijayawada — The Departure</h4>
                  <p className="text-sm text-black/60 mt-2 leading-relaxed">Flag-off at dawn. 5000 hearts, one chant — Bharat Mata Ki Jai. Leadership briefing, team formation, and the first journal entry.</p>
                  <div className="mt-3 flex gap-2 text-xs font-semibold"><span className="px-3 py-1 rounded-full bg-[#E6F6F1] text-emerald">Orientation</span><span className="px-3 py-1 rounded-full bg-[#FFF3E6] text-[#9A4A00]">Team Yaans</span></div>
                </div>
              </div>
              <div className="flex md:justify-center order-1 md:order-2"><div className="w-10 h-10 rounded-full bg-emerald text-white flex items-center justify-center font-bold text-sm border-4 border-white shadow">01</div></div>
              <div className="order-3 hidden md:block"><img src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=800&auto=format&fit=crop" className="w-full h-56 object-cover rounded-[20px] shadow-sm" /></div>
            </div>
            {/* Station 2 */}
            <div className="journey-card grid md:grid-cols-[1fr_80px_1fr] gap-4 items-center reveal">
              <div className="hidden md:block"><img src="https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=800&auto=format&fit=crop" className="w-full h-56 object-cover rounded-[20px] shadow-sm" /></div>
              <div className="flex md:justify-center"><div className="w-10 h-10 rounded-full bg-midnight text-white flex items-center justify-center font-bold text-sm border-4 border-white shadow">02</div></div>
              <div>
                <div className="bg-white rounded-[24px] p-6 shadow-sm border border-black/5 max-w-[520px]">
                  <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-saffron"><span className="w-6 h-px bg-saffron"></span> STATION 02 — KNOWLEDGE</div>
                  <h4 className="font-bold text-xl mt-2">Kochi — Knowledge Harbour</h4>
                  <p className="text-sm text-black/60 mt-2 leading-relaxed">Maritime history, startups at Infopark, and the story of spice that connected South to the world.</p>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-[#F5F7FA] rounded-xl p-3"><i className="ri-ship-line text-emerald text-lg"></i><div className="font-semibold mt-1">Port Visit</div></div>
                    <div className="bg-[#F5F7FA] rounded-xl p-3"><i className="ri-cpu-line text-midnight text-lg"></i><div className="font-semibold mt-1">Innovation</div></div>
                    <div className="bg-[#F5F7FA] rounded-xl p-3"><i className="ri-history-line text-saffron text-lg"></i><div className="font-semibold mt-1">Heritage</div></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Station 3 */}
            <div className="journey-card grid md:grid-cols-[1fr_80px_1fr] gap-4 items-center reveal">
              <div className="md:text-right order-2 md:order-1">
                <div className="bg-white rounded-[24px] p-6 shadow-sm border border-black/5 md:ml-auto max-w-[520px]">
                  <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald"><span className="w-6 h-px bg-emerald"></span> STATION 03 — CULTURE</div>
                  <h4 className="font-bold text-xl mt-2">Alleppey & Kumarakom — Culture on Water</h4>
                  <p className="text-sm text-black/60 mt-2 leading-relaxed">Houseboats become classrooms. Kathakali workshops, coir craft, and a night of stories under the stars.</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold"><span className="px-3 py-1 rounded-full bg-emerald text-white">Backwaters</span><span className="px-3 py-1 rounded-full bg-white border border-black/10">Art Forms</span><span className="px-3 py-1 rounded-full bg-white border border-black/10">Village Life</span></div>
                </div>
              </div>
              <div className="flex md:justify-center order-1 md:order-2"><div className="w-10 h-10 rounded-full bg-golden text-midnight flex items-center justify-center font-bold text-sm border-4 border-white shadow">03</div></div>
              <div className="order-3 hidden md:block"><img src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop" className="w-full h-56 object-cover rounded-[20px] shadow-sm" /></div>
            </div>
            {/* Station 4 */}
            <div className="journey-card grid md:grid-cols-[1fr_80px_1fr] gap-4 items-center reveal">
              <div className="hidden md:block"><img src="https://images.unsplash.com/photo-1516331138075-f3adc1e149cd?q=80&w=800&auto=format&fit=crop" className="w-full h-56 object-cover rounded-[20px] shadow-sm" /></div>
              <div className="flex md:justify-center"><div className="w-10 h-10 rounded-full bg-saffron text-white flex items-center justify-center font-bold text-sm border-4 border-white shadow">04</div></div>
              <div>
                <div className="bg-midnight text-white rounded-[24px] p-6 shadow-lg max-w-[520px]">
                  <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-golden"><span className="w-6 h-px bg-golden"></span> STATION 04 — LEADERSHIP</div>
                  <h4 className="font-bold text-xl mt-2">Munnar & Wayanad — Leadership in the Wild</h4>
                  <p className="text-sm text-white/70 mt-2 leading-relaxed">Trekking Western Ghats, sustainable farms, tea trails — where resilience is taught by nature itself.</p>
                  <button onClick={openRegister} className="mt-4 bg-white text-midnight px-5 py-2.5 rounded-full text-sm font-bold hover:bg-ivory transition">Claim Your Seat →</button>
                </div>
              </div>
            </div>
            {/* Station 5 */}
            <div className="journey-card grid md:grid-cols-[1fr_80px_1fr] gap-4 items-center reveal">
              <div className="md:text-right order-2 md:order-1">
                <div className="bg-white rounded-[24px] p-6 shadow-sm border border-black/5 md:ml-auto max-w-[520px]">
                  <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-midnight"><span className="w-6 h-px bg-midnight"></span> STATION 05 — BHARAT INTEGRATION</div>
                  <h4 className="font-bold text-xl mt-2">Trivandrum — South for Bharat Finale</h4>
                  <p className="text-sm text-black/60 mt-2 leading-relaxed">Padmanabhaswamy, ISRO, sunset at Kovalam — and a grand cultural exchange where South presents Bharat to Bharat.</p>
                  <div className="mt-3 text-xs font-semibold text-emerald flex items-center gap-1 justify-start md:justify-end"><i className="ri-check-double-line"></i> Transformation • Certificate • Lifelong Sangha</div>
                </div>
              </div>
              <div className="flex md:justify-center order-1 md:order-2"><div className="w-10 h-10 rounded-full bg-midnight text-white flex items-center justify-center font-bold text-sm border-4 border-white shadow"><i className="ri-flag-fill"></i></div></div>
              <div className="order-3 hidden md:block"><img src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop" className="w-full h-56 object-cover rounded-[20px] shadow-sm" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
