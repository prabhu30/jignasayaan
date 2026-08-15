'use client'

export default function Keralam() {
  return (
    <section id="keralam" className="tex tex-ships-teal max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-20">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Kerala */}
        <div className="relative overflow-hidden rounded-[32px] bg-emerald p-7 md:p-10 text-white reveal">
          <div className="absolute -right-10 -top-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -right-16 -bottom-16 w-96 h-96 bg-golden/20 rounded-full blur-3xl"></div>
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white text-emerald px-3 py-1.5 rounded-full text-xs font-extrabold tracking-widest"><i className="ri-leaf-line"></i> THIS TIME FOR KERALAM</div>
            <h3 className="font-head font-extrabold text-[30px] md:text-[42px] leading-[0.95] mt-4">Why Keralam. <br /><span className="font-light italic font-brush text-golden">Why Now.</span></h3>
            <p className="mt-4 text-white/85 leading-relaxed">God’s Own Country is also India’s most powerful development classroom. Literacy, health, harmony, ecology — come see how it was built.</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="bg-white/10 rounded-2xl p-4 backdrop-blur flex gap-3"><i className="ri-water-flash-line text-golden text-xl"></i><div><div className="font-bold">Backwaters & Beyond</div><div className="text-white/75 text-xs mt-1">Alleppey, Kumarakom, Kochi</div></div></div>
              <div className="bg-white/10 rounded-2xl p-4 backdrop-blur flex gap-3"><i className="ri-landscape-line text-golden text-xl"></i><div><div className="font-bold">High Ranges</div><div className="text-white/75 text-xs mt-1">Munnar, Wayanad, Idukki</div></div></div>
              <div className="bg-white/10 rounded-2xl p-4 backdrop-blur flex gap-3"><i className="ri-palette-line text-golden text-xl"></i><div><div className="font-bold">Living Culture</div><div className="text-white/75 text-xs mt-1">Kathakali, Kalaripayattu, Theyyam</div></div></div>
              <div className="bg-white/10 rounded-2xl p-4 backdrop-blur flex gap-3"><i className="ri-seedling-line text-golden text-xl"></i><div><div className="font-bold">Ecology & Ayurveda</div><div className="text-white/75 text-xs mt-1">Spices, forests, healing</div></div></div>
            </div>
            <div className="mt-7 rounded-2xl overflow-hidden bg-white p-2">
              <img src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1000&auto=format&fit=crop" alt="Kerala" className="w-full h-48 object-cover rounded-xl" />
            </div>
          </div>
        </div>
        {/* Bharat */}
        <div id="bharat" className="relative overflow-hidden rounded-[32px] bg-midnight p-7 md:p-10 text-white reveal">
          <div className="absolute inset-0 opacity-20" style={{ "background": "radial-gradient(600px 400px at 80% 20%, #F28C28 0%, transparent 60%), radial-gradient(600px 400px at 20% 90%, #0F8B6F 0%, transparent 60%)" }}></div>
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-saffron text-white px-3 py-1.5 rounded-full text-xs font-extrabold tracking-widest">SOUTH FOR BHARAT • VISION 2047</div>
            <h3 className="font-head font-extrabold text-[30px] md:text-[42px] leading-[0.95] mt-4">South for Bharat. <br /><span className="font-light italic font-brush text-saffron">A Nation Moves.</span></h3>
            <p className="mt-4 text-white/75 leading-relaxed">When South India travels, Bharat listens. This Yaan builds cultural bridges — from Keralam to Kashi, from Munnar to Manipur.</p>
            <div className="mt-6 bg-white text-midnight rounded-2xl p-5 flex gap-4 items-center">
              <div className="w-12 h-12 rounded-xl bg-midnight text-white flex items-center justify-center text-xl"><i className="ri-flag-line"></i></div>
              <div>
                <div className="font-bold">Ek Bharat. Shreshtha Bharat.</div>
                <div className="text-sm text-black/60">Student ambassadors carrying stories of the South to every corner of the nation.</div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl bg-white/10 backdrop-blur p-4 border border-white/10"><div className="font-label font-bold text-xl">12K+</div><div className="text-[11px] tracking-widest font-semibold opacity-70">ALUMNI</div></div>
              <div className="rounded-2xl bg-white/10 backdrop-blur p-4 border border-white/10"><div className="font-label font-bold text-xl">28</div><div className="text-[11px] tracking-widest font-semibold opacity-70">STATES CONNECTED</div></div>
              <div className="rounded-2xl bg-saffron p-4 text-white"><div className="font-label font-bold text-xl">1</div><div className="text-[11px] tracking-widest font-bold">BHARAT</div></div>
            </div>
            <button onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })} className="mt-6 w-full bg-white text-midnight py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-ivory transition">See the Journey Map <i className="ri-arrow-right-line"></i></button>
          </div>
        </div>
      </div>
    </section>
  )
}
