'use client'

import { useSiteUI } from '@/components/SiteUI'

export default function Gallery() {
  const { openLightbox, openRegister, openVideo } = useSiteUI()

  return (
    <section id="gallery" className="tex tex-deities-pink bg-white border-y border-black/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-14 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="reveal">
            <div className="text-emerald font-bold tracking-[0.2em] text-xs">GALLERY</div>
            <h3 className="font-head font-extrabold text-[28px] md:text-[42px] leading-none mt-3 text-midnight">Moments that <span className="font-light italic font-brush">stay forever.</span></h3>
          </div>
          <div className="flex gap-2 reveal">
            <button onClick={openVideo} className="bg-midnight text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2"><i className="ri-movie-2-line"></i> Watch Reels</button>{' '}
            <button className="px-5 py-2.5 rounded-full border border-black/10 text-sm font-semibold">View Albums</button>
          </div>
        </div>

        <div className="mt-8 masonry">
          <div className="break-inside-avoid mb-4 rounded-[20px] overflow-hidden relative group cursor-pointer" onClick={(e) => openLightbox(e.currentTarget)}>
            <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop" className="w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold">Munnar Sunrise • 2024</div>
          </div>
          <div className="break-inside-avoid mb-4 rounded-[20px] overflow-hidden relative group cursor-pointer" onClick={(e) => openLightbox(e.currentTarget)}>
            <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop" className="w-full object-cover" />
            <div className="absolute bottom-3 left-3 bg-emerald text-white px-3 py-1 rounded-full text-xs font-bold">Kochi • Cultural Night</div>
          </div>
          <div className="break-inside-avoid mb-4 rounded-[20px] overflow-hidden relative group cursor-pointer" onClick={(e) => openLightbox(e.currentTarget)}>
            <img src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop" className="w-full object-cover" />
            <div className="absolute bottom-3 left-3 bg-midnight text-white px-3 py-1 rounded-full text-xs font-bold">Alleppey • Backwaters</div>
          </div>
          <div className="break-inside-avoid mb-4 rounded-[20px] overflow-hidden relative group cursor-pointer" onClick={(e) => openLightbox(e.currentTarget)}>
            <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop" className="w-full h-[360px] object-cover" />
            <div className="absolute inset-0 flex items-center justify-center"><span className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl"><i className="ri-play-fill text-2xl ml-1"></i></span></div>
            <div className="absolute bottom-3 left-3 bg-saffron text-white px-3 py-1 rounded-full text-xs font-bold">Drone Film • 4K</div>
          </div>
          <div className="break-inside-avoid mb-4 rounded-[20px] overflow-hidden relative group cursor-pointer" onClick={(e) => openLightbox(e.currentTarget)}>
            <img src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop" className="w-full object-cover" />
            <div className="absolute bottom-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs font-bold">Wayanad • Tribal Visit</div>
          </div>
          <div className="break-inside-avoid mb-4 rounded-[20px] overflow-hidden bg-midnight text-white p-6 flex flex-col justify-center">
            <div className="text-golden font-bold tracking-widest text-xs">STUDENT STORY</div>
            <p className="font-brush italic text-[22px] leading-tight mt-2">“I boarded as a student. I returned as a storyteller for my state.”</p>
            <div className="mt-4 flex items-center gap-3"><img src="https://i.pravatar.cc/100?img=26" className="w-9 h-9 rounded-full object-cover" /><div><div className="font-bold text-sm">Aparna, Vijayawada</div><div className="text-xs opacity-70">Yaan ’23 • Now Volunteer</div></div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
