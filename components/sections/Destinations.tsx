'use client'

import { useSiteUI } from '@/components/SiteUI'

import { useState } from 'react'

export default function Destinations() {
  const { openRegister } = useSiteUI()
  const [filter, setFilter] = useState('all')

  // The original toggled classes on the buttons and set card.style.display directly;
  // the resulting class sets and inline styles are reproduced exactly here.
  const btnClass = (key: string, weight: string) =>
    'filter-btn px-5 py-2 rounded-full text-sm ' + weight +
    (filter === key ? ' active bg-midnight text-white' : ' text-black/60 hover:text-midnight')
  const cardStyle = (cat: string) =>
    (filter === 'all' || cat.includes(filter)) ? undefined : { display: 'none' }

  return (
    <section id="destinations" className="tex tex-temple-orange max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-14 md:py-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="reveal">
          <div className="text-emerald font-bold tracking-[0.2em] text-xs">DESTINATIONS</div>
          <h3 className="font-head font-extrabold text-[28px] md:text-[42px] leading-none mt-3 text-midnight">Learn where <span className="font-light italic font-brush">legends lived.</span></h3>
        </div>
        <div className="flex items-center gap-2 bg-[#F5F7FA] p-1.5 rounded-full reveal">
          <button data-filter="all" onClick={() => setFilter('all')} className={btnClass('all', 'font-bold')}>All</button>{' '}
          <button data-filter="nature" onClick={() => setFilter('nature')} className={btnClass('nature', 'font-semibold')}>Nature</button>{' '}
          <button data-filter="culture" onClick={() => setFilter('culture')} className={btnClass('culture', 'font-semibold')}>Culture</button>{' '}
          <button data-filter="innovation" onClick={() => setFilter('innovation')} className={btnClass('innovation', 'font-semibold')}>Innovation</button>
        </div>
      </div>

      <div id="destinationGrid" className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <article data-cat="nature" style={cardStyle('nature')} className="group bg-white rounded-[24px] overflow-hidden border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
          <div className="relative h-56 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5"><i className="ri-landscape-line text-emerald"></i> MUNNAR • 1600M</div>
            <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
              <span className="bg-emerald text-white text-xs font-bold px-3 py-1 rounded-full">NATURE</span>{' '}
              <span className="bg-midnight text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1"><i className="ri-map-pin-line"></i> Idukki</span>
            </div>
          </div>
          <div className="p-6">
            <h4 className="font-bold text-lg leading-tight">Tea Trails & Western Ghats Trek</h4>
            <p className="text-sm text-black/60 mt-2 leading-relaxed">Walk through endless tea gardens, learn sustainable farming, and trek the cloud forests.</p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-[#F5F7FA] rounded-xl p-2.5"><div className="font-bold">Ecology</div><div className="text-black/50">Learning</div></div>
              <div className="bg-[#F5F7FA] rounded-xl p-2.5"><div className="font-bold">Trek</div><div className="text-black/50">Leadership</div></div>
              <div className="bg-[#F5F7FA] rounded-xl p-2.5"><div className="font-bold">3.5/5</div><div className="text-black/50">Difficulty</div></div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-xs font-semibold text-emerald flex items-center gap-1"><i className="ri-links-line"></i> Linked to Bharat: Darjeeling</div>
              <button onClick={openRegister} className="w-9 h-9 rounded-full bg-midnight text-white flex items-center justify-center hover:bg-black transition"><i className="ri-arrow-right-line"></i></button>
            </div>
          </div>
        </article>
        {/* Card 2 */}
        <article data-cat="culture" style={cardStyle('culture')} className="group bg-white rounded-[24px] overflow-hidden border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
          <div className="relative h-56 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold">ALLEPPEY • BACKWATERS</div>
            <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
              <span className="bg-saffron text-white text-xs font-bold px-3 py-1 rounded-full">CULTURE</span>{' '}
              <span className="bg-midnight text-white text-xs font-semibold px-3 py-1 rounded-full">Alappuzha</span>
            </div>
          </div>
          <div className="p-6">
            <h4 className="font-bold text-lg leading-tight">Living on Water — Houseboat Classroom</h4>
            <p className="text-sm text-black/60 mt-2 leading-relaxed">Coir making, village life, and a night where folk songs become your textbook.</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold"><span className="px-3 py-1 rounded-full bg-[#FFF3E6] border border-[#FFD9A8]">Kathakali</span><span className="px-3 py-1 rounded-full bg-[#E6F6F1] border border-[#BFE9DE]">Coir Craft</span><span className="px-3 py-1 rounded-full bg-[#EEF2FF] border border-[#C7D2FE]">Cuisine</span></div>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-xs font-semibold text-emerald">1 Night • All Meals • Folk Night</div>
              <button onClick={openRegister} className="w-9 h-9 rounded-full bg-midnight text-white flex items-center justify-center"><i className="ri-arrow-right-line"></i></button>
            </div>
          </div>
        </article>
        {/* Card 3 */}
        <article data-cat="innovation" style={cardStyle('innovation')} className="group bg-white rounded-[24px] overflow-hidden border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
          <div className="relative h-56 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold">KOCHI • HARBOUR CITY</div>
            <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
              <span className="bg-midnight text-white text-xs font-bold px-3 py-1 rounded-full">INNOVATION</span>{' '}
              <span className="bg-white text-midnight text-xs font-semibold px-3 py-1 rounded-full">Ernakulam</span>
            </div>
          </div>
          <div className="p-6">
            <h4 className="font-bold text-lg leading-tight">Where Spice Met The World</h4>
            <p className="text-sm text-black/60 mt-2 leading-relaxed">Fort Kochi, Infopark startups, and the maritime story that shaped global trade.</p>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="bg-[#F5F7FA] rounded-xl p-3 flex items-center gap-2"><i className="ri-cpu-line text-midnight text-lg"></i><div><div className="font-bold">Infopark</div><div className="text-black/50">Startup Meet</div></div></div>
              <div className="bg-[#F5F7FA] rounded-xl p-3 flex items-center gap-2"><i className="ri-anchor-line text-emerald text-lg"></i><div><div className="font-bold">Maritime</div><div className="text-black/50">Port Walk</div></div></div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-xs font-semibold text-emerald">Map • Highlights • Learning Outcomes →</div>
              <button onClick={openRegister} className="w-9 h-9 rounded-full bg-midnight text-white flex items-center justify-center"><i className="ri-arrow-right-line"></i></button>
            </div>
          </div>
        </article>
        {/* Card 4 */}
        <article data-cat="culture" style={cardStyle('culture')} className="group bg-white rounded-[24px] overflow-hidden border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
          <div className="relative h-56 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold">WAYANAD • TRIBAL HERITAGE</div>
            <div className="absolute bottom-3 left-3"><span className="bg-emerald text-white text-xs font-bold px-3 py-1 rounded-full">NATURE • CULTURE</span></div>
          </div>
          <div className="p-6">
            <h4 className="font-bold text-lg leading-tight">Forests, Tribes & Sustainability</h4>
            <p className="text-sm text-black/60 mt-2 leading-relaxed">Edakkal caves, tribal hamlets, and lessons in living with the forest, not off it.</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs font-bold tracking-widest text-midnight/60">QUICK FACTS • 3 CAVES • 2 TRIBES</span>{' '}
              <button onClick={openRegister} className="w-9 h-9 rounded-full bg-midnight text-white flex items-center justify-center"><i className="ri-arrow-right-line"></i></button>
            </div>
          </div>
        </article>
        {/* Card 5 */}
        <article data-cat="innovation" style={cardStyle('innovation')} className="group bg-white rounded-[24px] overflow-hidden border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
          <div className="relative h-56 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold">TRIVANDRUM • CAPITAL</div>
            <div className="absolute bottom-3 left-3"><span className="bg-midnight text-white text-xs font-bold px-3 py-1 rounded-full">LEADERSHIP • SPACE</span></div>
          </div>
          <div className="p-6">
            <h4 className="font-bold text-lg leading-tight">From Padmanabha to PSLV</h4>
            <p className="text-sm text-black/60 mt-2 leading-relaxed">Temple architecture to ISRO’s launch legacy — where devotion meets discovery.</p>
            <div className="mt-4 flex gap-2 text-xs font-semibold"><span className="px-3 py-1.5 rounded-full bg-midnight text-white">ISRO Visit*</span><span className="px-3 py-1.5 rounded-full bg-white border border-black/10">Temple</span><span className="px-3 py-1.5 rounded-full bg-white border border-black/10">Beach</span></div>
          </div>
        </article>
        {/* Card 6 */}
        <article data-cat="nature" style={cardStyle('nature')} className="group bg-white rounded-[24px] overflow-hidden border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
          <div className="relative h-56 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold">THEKKADY • PERIYAR</div>
            <div className="absolute bottom-3 left-3"><span className="bg-golden text-midnight text-xs font-bold px-3 py-1 rounded-full">WILDLIFE • YOGA</span></div>
          </div>
          <div className="p-6">
            <h4 className="font-bold text-lg leading-tight">Periyar at Sunrise — Stillness as Strength</h4>
            <p className="text-sm text-black/60 mt-2 leading-relaxed">Bamboo rafting, meditation, and understanding human–wildlife harmony.</p>
            <div className="mt-4 text-xs font-semibold text-black/60">Learning Outcome: Ecology, Mindfulness, Teamwork</div>
            <button onClick={openRegister} className="mt-3 w-full bg-[#F5F7FA] py-2.5 rounded-full font-bold text-sm hover:bg-midnight hover:text-white transition">Know More</button>
          </div>
        </article>
      </div>
    </section>
  )
}
