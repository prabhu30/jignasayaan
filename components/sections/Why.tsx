export default function Why() {
  return (
    <section id="why" className="tex tex-folk-orange bg-white border-y border-black/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-14 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="reveal">
            <div className="text-emerald font-bold tracking-[0.2em] text-xs">WHY JIGNASAYAAN</div>
            <h3 className="font-head font-extrabold text-[28px] md:text-[42px] leading-none mt-3 text-midnight">Why thousands <span className="font-light italic font-brush">choose the Yaan.</span></h3>
          </div>
          <p className="max-w-[520px] text-black/60 text-[15px] leading-relaxed reveal">More than a journey. A rite of passage. Designed with educators, cultural practitioners, and nation-builders.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="group bg-[#F5F7FA] rounded-[28px] p-7 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all border border-transparent hover:border-black/5 reveal">
            <div className="w-12 h-12 rounded-2xl bg-midnight text-white flex items-center justify-center text-xl"><i className="ri-lightbulb-flash-line"></i></div>
            <h4 className="font-bold text-lg mt-5">Learning Beyond Classrooms</h4>
            <p className="text-sm leading-relaxed text-black/60 mt-2">From ISRO to spice farms, from temples to startups — you learn where history was made.</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex gap-2"><i className="ri-check-line text-emerald mt-0.5"></i> 40+ curated learning sites</li>
              <li className="flex gap-2"><i className="ri-check-line text-emerald mt-0.5"></i> Mentors from across Bharat</li>
              <li className="flex gap-2"><i className="ri-check-line text-emerald mt-0.5"></i> Certificate + Credits</li>
            </ul>
          </div>
          <div className="group bg-emerald text-white rounded-[28px] p-7 hover:shadow-xl hover:-translate-y-1 transition-all reveal">
            <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center text-xl"><i className="ri-compass-discover-line"></i></div>
            <h4 className="font-bold text-lg mt-5">Kerala Like Never Before</h4>
            <p className="text-sm leading-relaxed text-white/80 mt-2">Backwaters to high-ranges, art forms to Ayurveda — an immersive cultural immersion.</p>
            <div className="mt-5 grid grid-cols-3 gap-2 text-center">
              <div className="bg-white/10 rounded-xl py-3"><div className="font-label font-bold">14</div><div className="text-[10px] tracking-widest">DISTRICTS</div></div>
              <div className="bg-white/10 rounded-xl py-3"><div className="font-label font-bold">7</div><div className="text-[10px] tracking-widest">NIGHTS</div></div>
              <div className="bg-white/10 rounded-xl py-3"><div className="font-label font-bold">∞</div><div className="text-[10px] tracking-widest">STORIES</div></div>
            </div>
          </div>
          <div className="group bg-[#FFF8EC] rounded-[28px] p-7 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all border border-[#FFE3B3]/60 reveal">
            <div className="w-12 h-12 rounded-2xl bg-saffron text-white flex items-center justify-center text-xl"><i className="ri-shield-star-line"></i></div>
            <h4 className="font-bold text-lg mt-5">Safe. Structured. Transformative.</h4>
            <p className="text-sm leading-relaxed text-black/60 mt-2">24/7 control room, medical team, GPS tracking, 1:15 mentor ratio.</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
              <span className="px-3 py-1.5 rounded-full bg-white border border-black/5">GPS Tracking</span>{' '}
              <span className="px-3 py-1.5 rounded-full bg-white border border-black/5">Doctor On Board</span>{' '}
              <span className="px-3 py-1.5 rounded-full bg-white border border-black/5">Verified Stays</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
