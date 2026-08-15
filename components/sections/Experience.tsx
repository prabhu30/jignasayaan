export default function Experience() {
  return (
    <section id="experience" className="tex tex-dark tex-dance-pink bg-midnight text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]" style={{ "backgroundImage": "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-14 md:py-20 relative">
        <div className="flex flex-wrap items-end justify-between gap-6 reveal">
          <div>
            <div className="text-golden font-bold tracking-[0.2em] text-xs">STUDENT LIFE</div>
            <h3 className="font-head font-extrabold text-[28px] md:text-[44px] leading-none mt-3">Life on the Yaan. <br /><span className="font-light italic font-brush text-white/80">Friends for a lifetime.</span></h3>
          </div>
          <p className="max-w-[520px] text-white/60 text-[15px] leading-relaxed">From 4 AM chai to midnight reflections — every hour is designed for growth, joy, and belonging.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[220px]">
          <div className="md:col-span-7 relative rounded-[24px] overflow-hidden group reveal">
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
            <div className="absolute bottom-0 p-6">
              <div className="inline-flex items-center gap-2 bg-saffron text-white text-xs font-bold px-3 py-1 rounded-full">TRAIN LIFE</div>
              <h4 className="font-bold text-xl mt-3">A Moving Campus. 16 Coaches. 1 Family.</h4>
              <p className="text-sm text-white/80 mt-1 max-w-[520px]">Games, jamming, adda, and peer learning. Birthdays at 80 kmph.</p>
            </div>
          </div>
          <div className="md:col-span-5 bg-white text-midnight rounded-[24px] p-7 flex flex-col justify-between reveal">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald text-white flex items-center justify-center"><i className="ri-sun-line text-xl"></i></div>
              <h4 className="font-bold text-lg mt-4">A Day in the Yaan</h4>
              <div className="mt-3 space-y-2.5 text-sm">
                <div className="flex justify-between border-b border-black/5 pb-2"><span className="text-black/60">05:30</span><span className="font-semibold">Yoga & Sunrise Reflection</span></div>
                <div className="flex justify-between border-b border-black/5 pb-2"><span className="text-black/60">08:00</span><span className="font-semibold">Learning Site Visit</span></div>
                <div className="flex justify-between border-b border-black/5 pb-2"><span className="text-black/60">13:00</span><span className="font-semibold">Local Thali & Stories</span></div>
                <div className="flex justify-between border-b border-black/5 pb-2"><span className="text-black/60">18:00</span><span className="font-semibold">Cultural Exchange</span></div>
                <div className="flex justify-between"><span className="text-black/60">21:30</span><span className="font-semibold">Bonfire & Journal</span></div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs font-bold text-emerald"><i className="ri-check-line"></i> Structured • Safe • Joyful</div>
          </div>
          <div className="md:col-span-5 bg-emerald rounded-[24px] p-7 text-white flex flex-col justify-between reveal">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center"><i className="ri-team-line text-xl"></i></div>
              <h4 className="font-bold text-lg mt-4">Friendships Across Bharat</h4>
              <p className="text-sm text-white/80 mt-2 leading-relaxed">Telugu, Malayalam, Hindi, Tamil — you’ll speak in smiles first, languages later.</p>
            </div>
            <div className="flex -space-x-3 mt-6">
              <img src="https://i.pravatar.cc/100?img=15" className="w-10 h-10 rounded-full border-2 border-emerald object-cover" />{' '}
              <img src="https://i.pravatar.cc/100?img=32" className="w-10 h-10 rounded-full border-2 border-emerald object-cover" />{' '}
              <img src="https://i.pravatar.cc/100?img=28" className="w-10 h-10 rounded-full border-2 border-emerald object-cover" />
              <div className="w-10 h-10 rounded-full bg-midnight border-2 border-emerald flex items-center justify-center text-xs font-bold">+5k</div>
            </div>
          </div>
          <div className="md:col-span-4 relative rounded-[24px] overflow-hidden group reveal">
            <img src="https://images.unsplash.com/photo-1511635001-e5a24843664f?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 p-5">
              <div className="bg-white text-midnight text-xs font-bold px-3 py-1 rounded-full inline-flex">WORKSHOPS</div>
              <div className="font-bold mt-2">Leadership Labs, Theatre, Design Thinking</div>
            </div>
          </div>
          <div className="md:col-span-3 bg-golden rounded-[24px] p-7 text-midnight flex flex-col justify-between reveal">
            <div>
              <div className="w-10 h-10 rounded-xl bg-midnight text-golden flex items-center justify-center"><i className="ri-award-line text-xl"></i></div>
              <h4 className="font-bold text-lg mt-4">Certificates that Matter</h4>
              <p className="text-sm text-midnight/70 mt-2">National integration certificate, leadership credits, and alumni network.</p>
            </div>
            <div className="text-3xl font-label font-bold mt-4">12k+ Alumni</div>
          </div>
        </div>

        {/* Safety */}
        <div className="mt-12 bg-white rounded-[28px] p-6 md:p-8 text-midnight reveal">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h4 className="font-extrabold text-xl flex items-center gap-2"><span className="w-2 h-6 bg-emerald rounded-full"></span> Safety is the First Chapter</h4>
            <span className="text-xs font-bold tracking-widest bg-emerald text-white px-3 py-1.5 rounded-full">24/7 CONTROL ROOM</span>
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 text-center">
            <div className="bg-[#F5F7FA] rounded-2xl p-4"><div className="w-10 h-10 mx-auto rounded-xl bg-white flex items-center justify-center text-emerald"><i className="ri-customer-service-2-line text-xl"></i></div><div className="text-xs font-bold mt-2">Control Room</div><div className="text-[11px] text-black/50">24/7 Helpline</div></div>
            <div className="bg-[#F5F7FA] rounded-2xl p-4"><div className="w-10 h-10 mx-auto rounded-xl bg-white flex items-center justify-center text-emerald"><i className="ri-heart-pulse-line text-xl"></i></div><div className="text-xs font-bold mt-2">Doctors</div><div className="text-[11px] text-black/50">On Board</div></div>
            <div className="bg-[#F5F7FA] rounded-2xl p-4"><div className="w-10 h-10 mx-auto rounded-xl bg-white flex items-center justify-center text-emerald"><i className="ri-team-line text-xl"></i></div><div className="text-xs font-bold mt-2">Volunteers</div><div className="text-[11px] text-black/50">1 : 15 Ratio</div></div>
            <div className="bg-[#F5F7FA] rounded-2xl p-4"><div className="w-10 h-10 mx-auto rounded-xl bg-white flex items-center justify-center text-emerald"><i className="ri-map-pin-range-line text-xl"></i></div><div className="text-xs font-bold mt-2">GPS Tracking</div><div className="text-[11px] text-black/50">Live Location</div></div>
            <div className="bg-[#F5F7FA] rounded-2xl p-4"><div className="w-10 h-10 mx-auto rounded-xl bg-white flex items-center justify-center text-emerald"><i className="ri-hotel-line text-xl"></i></div><div className="text-xs font-bold mt-2">Stays</div><div className="text-[11px] text-black/50">Verified</div></div>
            <div className="bg-[#F5F7FA] rounded-2xl p-4"><div className="w-10 h-10 mx-auto rounded-xl bg-white flex items-center justify-center text-emerald"><i className="ri-message-3-line text-xl"></i></div><div className="text-xs font-bold mt-2">Parents</div><div className="text-[11px] text-black/50">Daily Updates</div></div>
            <div className="bg-[#F5F7FA] rounded-2xl p-4"><div className="w-10 h-10 mx-auto rounded-xl bg-white flex items-center justify-center text-emerald"><i className="ri-shield-check-line text-xl"></i></div><div className="text-xs font-bold mt-2">Insurance</div><div className="text-[11px] text-black/50">Covered</div></div>
            <div className="bg-[#F5F7FA] rounded-2xl p-4"><div className="w-10 h-10 mx-auto rounded-xl bg-white flex items-center justify-center text-emerald"><i className="ri-restaurant-line text-xl"></i></div><div className="text-xs font-bold mt-2">Food</div><div className="text-[11px] text-black/50">Hygienic • Veg</div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
