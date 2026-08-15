'use client'

import { useRef, useState } from 'react'

export default function Testimonials() {
  const indexRef = useRef(0)
  const [transform, setTransform] = useState<string | undefined>(undefined)

  // Ported from slideTest(). Cards-per-view is read at click time, exactly as the
  // original did, so the clamp always reflects the current breakpoint.
  const slideTest = (dir: number) => {
    const total = 4
    const perView = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1
    const max = total - perView
    const next = Math.max(0, Math.min(max, indexRef.current + dir))
    indexRef.current = next
    setTransform(`translateX(-${next * (100 / perView)}%)`)
  }

  return (
    <section className="tex tex-folk-green max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-14 md:py-20">
      <div className="flex flex-wrap items-center justify-between gap-4 reveal">
        <h3 className="font-extrabold text-[24px] md:text-[32px] text-midnight">What families <span className="font-light italic font-brush">say.</span></h3>
        <div className="flex items-center gap-2">
          <button onClick={() => slideTest(-1)} className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-midnight hover:text-white transition"><i className="ri-arrow-left-line"></i></button>{' '}
          <button onClick={() => slideTest(1)} className="w-10 h-10 rounded-full bg-midnight text-white flex items-center justify-center hover:bg-black transition"><i className="ri-arrow-right-line"></i></button>
        </div>
      </div>
      <div className="mt-8 relative overflow-hidden">
        <div id="testWrap" className="flex transition-transform duration-500 will-change-transform" style={transform ? { transform } : undefined}>
          <div className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] p-3">
            <div className="bg-[#F5F7FA] rounded-[24px] p-7 h-full">
              <div className="flex gap-1 text-golden"><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i></div>
              <p className="mt-3 text-[15px] leading-relaxed">“As a mother, safety was my worry. Daily photos, live location, and the coordinator’s calls made me feel my son was with family.”</p>
              <div className="mt-5 flex items-center gap-3"><img src="https://i.pravatar.cc/100?img=5" className="w-10 h-10 rounded-full object-cover" /><div><div className="font-bold text-sm">Sunitha R.</div><div className="text-xs text-black/60">Parent, Guntur • 2024</div></div></div>
            </div>
          </div>
          <div className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] p-3">
            <div className="bg-white border border-black/5 rounded-[24px] p-7 h-full shadow-sm">
              <div className="flex gap-1 text-golden"><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i></div>
              <p className="mt-3 text-[15px] leading-relaxed">“Our college sent 42 students. The discipline, learning design, and post-Yaan projects were exceptional. We’ll send 100 next year.”</p>
              <div className="mt-5 flex items-center gap-3"><img src="https://i.pravatar.cc/100?img=11" className="w-10 h-10 rounded-full object-cover" /><div><div className="font-bold text-sm">Dr. K. Suresh</div><div className="text-xs text-black/60">Principal, KBN College</div></div></div>
            </div>
          </div>
          <div className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] p-3">
            <div className="bg-emerald text-white rounded-[24px] p-7 h-full">
              <div className="flex gap-1 text-golden"><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i></div>
              <p className="mt-3 text-[15px] leading-relaxed">“I never thought Kerala’s paddy fields could teach me leadership. Yaan changed how I see India — and myself.”</p>
              <div className="mt-5 flex items-center gap-3"><img src="https://i.pravatar.cc/100?img=19" className="w-10 h-10 rounded-full object-cover" /><div><div className="font-bold text-sm">Harsha Vardhan</div><div className="text-xs opacity-80">Student, B.Tech • 2023</div></div></div>
            </div>
          </div>
          <div className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] p-3">
            <div className="bg-saffron text-white rounded-[24px] p-7 h-full">
              <div className="flex gap-1 text-white"><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i></div>
              <p className="mt-3 text-[15px] leading-relaxed">“Sponsoring Yaan gave our brand authentic youth love. The ROI on goodwill is unmatched.”</p>
              <div className="mt-5 flex items-center gap-3"><img src="https://i.pravatar.cc/100?img=8" className="w-10 h-10 rounded-full object-cover" /><div><div className="font-bold text-sm">Sponsor, CSR Head</div><div className="text-xs opacity-80">Leading FMCG</div></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
