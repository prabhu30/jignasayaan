'use client'

import { useState } from 'react'

export default function Faq() {
  // Single-open accordion. Clicking the open row closes it, matching the original
  // toggleFaq(), which hid every panel before re-opening the clicked one.
  const [open, setOpen] = useState<number | null>(null)
  const toggleFaq = (i: number) => setOpen(cur => (cur === i ? null : i))

  return (
    <section id="faq" className="tex tex-portraits-teal bg-[#F5F7FA] border-y border-black/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-14 md:py-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
        <div className="reveal">
          <div className="text-emerald font-bold tracking-[0.2em] text-xs">FAQ</div>
          <h3 className="font-extrabold text-[30px] md:text-[40px] leading-none mt-3 text-midnight">Clarity before <br /><span className="font-light italic font-brush">you board.</span></h3>
          <p className="mt-4 text-black/60 leading-relaxed">Everything parents, students and institutions ask — answered with honesty.</p>
          <div className="mt-6 bg-white rounded-2xl p-5 border border-black/5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald text-white flex items-center justify-center"><i className="ri-customer-service-line text-xl"></i></div>
            <div><div className="font-bold">Need human help?</div><div className="text-sm text-black/60">Call +91 90000 11223 • 9AM–9PM</div></div>
          </div>
        </div>
        <div className="space-y-3 reveal">
          <div className="faq bg-white rounded-2xl border border-black/5 overflow-hidden">
            <button className="w-full flex justify-between items-center p-5 font-semibold text-left" onClick={() => toggleFaq(0)}>Who can join Jignasayaan? <i className={(open === 0 ? 'ri-subtract-line' : 'ri-add-line') + ' text-xl transition'}></i></button>
            <div className={'px-5 pb-5 text-sm text-black/60 leading-relaxed' + (open === 0 ? '' : ' hidden')}>Students from Intermediate, Degree, and PG — individually or via institutions. Age 16–26. No prior travel experience needed. Medical fitness declaration required.</div>
          </div>
          <div className="faq bg-white rounded-2xl border border-black/5 overflow-hidden">
            <button className="w-full flex justify-between items-center p-5 font-semibold text-left" onClick={() => toggleFaq(1)}>What is included in the fee? <i className={(open === 1 ? 'ri-subtract-line' : 'ri-add-line') + ' text-xl transition'}></i></button>
            <div className={'px-5 pb-5 text-sm text-black/60 leading-relaxed' + (open === 1 ? '' : ' hidden')}>Train travel, accommodation (3/4 sharing), pure veg food, entry tickets, workshops, medical support, insurance, kit, certificate, and 24/7 coordination. Personal shopping excluded.</div>
          </div>
          <div className="faq bg-white rounded-2xl border border-black/5 overflow-hidden">
            <button className="w-full flex justify-between items-center p-5 font-semibold text-left" onClick={() => toggleFaq(2)}>How is safety ensured, especially for girls? <i className={(open === 2 ? 'ri-subtract-line' : 'ri-add-line') + ' text-xl transition'}></i></button>
            <div className={'px-5 pb-5 text-sm text-black/60 leading-relaxed' + (open === 2 ? '' : ' hidden')}>Separate coaches & floors, women volunteers & coordinators, verified stays, 24/7 control room, GPS, doctor on board, and daily parent updates. Safety is non-negotiable.</div>
          </div>
          <div className="faq bg-white rounded-2xl border border-black/5 overflow-hidden">
            <button className="w-full flex justify-between items-center p-5 font-semibold text-left" onClick={() => toggleFaq(3)}>Do I get a certificate? <i className={(open === 3 ? 'ri-subtract-line' : 'ri-add-line') + ' text-xl transition'}></i></button>
            <div className={'px-5 pb-5 text-sm text-black/60 leading-relaxed' + (open === 3 ? '' : ' hidden')}>Yes — National Integration & Leadership certificate jointly with partner institutions, plus credits for institutional records and alumni network access.</div>
          </div>
          <div className="faq bg-white rounded-2xl border border-black/5 overflow-hidden">
            <button className="w-full flex justify-between items-center p-5 font-semibold text-left" onClick={() => toggleFaq(4)}>How to register as a college? <i className={(open === 4 ? 'ri-subtract-line' : 'ri-add-line') + ' text-xl transition'}></i></button>
            <div className={'px-5 pb-5 text-sm text-black/60 leading-relaxed' + (open === 4 ? '' : ' hidden')}>Click “Join Expedition” → Institution Details → Upload student list (Excel). Our team verifies and opens your school dashboard in 24 hours.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
