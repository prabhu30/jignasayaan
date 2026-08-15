export default function About() {
  return (
    <section id="about" className="tex tex-temple-green max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-14 md:py-20">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-12 items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 text-emerald font-bold tracking-[0.2em] text-xs"><span className="w-8 h-px bg-emerald"></span> THE MOVEMENT</div>
          <h2 className="mt-4 font-head font-extrabold text-[32px] md:text-[48px] leading-[0.95] text-midnight">This is not a tour.<br /><span className="font-light italic font-brush text-emerald">It’s a Desayatana.</span></h2>
          <p className="mt-5 text-[17px] leading-relaxed text-charcoal/70">Jignasayaan reimagines the ancient Indian tradition of <em>Desatana</em> — learning by travelling — for a modern Bharat. Every kilometre is a classroom. Every meeting, a mirror.</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 border border-black/5 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center"><i className="ri-book-open-line text-xl"></i></div>
              <div className="font-bold mt-3">Experiential Learning</div>
              <div className="text-sm text-black/60 leading-relaxed mt-1">Workshops inside forts, labs inside forests, leadership on moving trains.</div>
            </div>
            <div className="bg-midnight text-white rounded-2xl p-5 shadow-lg">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center"><i className="ri-team-line text-xl"></i></div>
              <div className="font-bold mt-3">South for Bharat</div>
              <div className="text-sm text-white/70 leading-relaxed mt-1">South leads the dialogue. Kerala shows the way. Bharat comes together.</div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
            <span className="px-4 py-2 rounded-full bg-[#FFF3E6] text-[#9A4A00] border border-[#FFD9A8]">● Culture</span>{' '}
            <span className="px-4 py-2 rounded-full bg-[#E6F6F1] text-emerald border border-[#BFE9DE]">● Leadership</span>{' '}
            <span className="px-4 py-2 rounded-full bg-[#EEF2FF] text-midnight border border-[#C7D2FE]">● Service</span>
          </div>
        </div>
        <div className="relative reveal">
          <div className="rounded-[28px] overflow-hidden bg-white p-2 shadow-[0_20px_60px_rgba(8,27,51,0.12)]">
            <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop" alt="Kerala students" className="w-full h-[520px] object-cover rounded-[20px]" />
          </div>
          {/* stat overlay */}
          <div className="absolute -bottom-6 -left-2 md:left-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 max-w-[360px]">
            <img src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=200&auto=format&fit=crop" className="w-14 h-14 rounded-xl object-cover" />
            <div>
              <div className="font-bold leading-none">Kerala Model • Bharat Vision</div>
              <div className="text-xs text-black/60 mt-1">Learn the world’s most celebrated development story — on ground.</div>
              <div className="mt-2 flex gap-1.5"><span className="w-6 h-1.5 rounded-full bg-emerald"></span><span className="w-6 h-1.5 rounded-full bg-saffron"></span><span className="w-6 h-1.5 rounded-full bg-golden"></span></div>
            </div>
          </div>
          <div className="hidden md:block absolute -top-4 -right-4 bg-saffron text-white rounded-2xl px-5 py-3 shadow-lg rotate-1">
            <div className="text-xs tracking-widest font-bold opacity-90">FOUNDED 2019</div>
            <div className="font-label font-bold text-xl leading-none">4 Editions • 12k Alumni</div>
          </div>
        </div>
      </div>
    </section>
  )
}
