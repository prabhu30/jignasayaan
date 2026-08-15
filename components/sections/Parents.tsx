'use client'

import { useSiteUI } from '@/components/SiteUI'

import { useState } from 'react'

type Tab = 'parent' | 'school' | 'sponsor'

export default function Parents() {
  const { openRegister } = useSiteUI()
  const [tab, setTab] = useState<Tab>('parent')

  // Note: the original switchTab() never touched font weight, so the Parent tab keeps
  // font-bold and the other two keep font-semibold whichever is active. Preserved.
  const tabClass = (key: Tab, weight: string, hover: string) =>
    'tab-btn px-6 py-2.5 rounded-xl text-sm ' + weight + hover +
    (tab === key ? ' active bg-midnight text-white' : ' text-black/60')
  const panelClass = (key: Tab, rest: string) =>
    'tab-panel ' + (tab === key ? '' : 'hidden ') + rest

  const switchTab = (key: Tab) => setTab(key)

  return (
    <section id="parents" className="tex tex-deities-teal max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-14 md:py-20">
      <div className="bg-white rounded-[28px] border border-black/5 shadow-sm overflow-hidden reveal">
        <div className="flex flex-wrap gap-2 p-2 bg-[#F5F7FA] m-2 rounded-2xl w-fit">
          <button onClick={() => switchTab('parent')} id="tab-parent" className={tabClass('parent', 'font-bold', '')}>Parent Zone</button>{' '}
          <button onClick={() => switchTab('school')} id="tab-school" className={tabClass('school', 'font-semibold', ' hover:text-midnight')}>School Dashboard</button>{' '}
          <button onClick={() => switchTab('sponsor')} id="tab-sponsor" className={tabClass('sponsor', 'font-semibold', ' hover:text-midnight')}>Sponsors & CSR</button>
        </div>

        {/* Parent */}
        <div id="panel-parent" className={panelClass('parent', 'p-6 md:p-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start')}>
          <div>
            <div className="inline-flex items-center gap-2 text-emerald font-bold tracking-widest text-xs"><span className="w-8 h-px bg-emerald"></span> FOR PARENTS</div>
            <h3 className="font-extrabold text-[28px] md:text-[34px] leading-none mt-3 text-midnight">Your child is safe. <span className="font-light italic font-brush text-emerald">And seen.</span></h3>
            <p className="mt-3 text-black/60 leading-relaxed">Daily updates, live tracking, accommodation photos, food menu, and a direct helpline. We parent with you.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              <div className="bg-[#F5F7FA] rounded-2xl p-4 flex gap-3"><i className="ri-live-line text-emerald text-xl"></i><div><div className="font-bold text-sm">Live Journey Tracking</div><div className="text-xs text-black/60">See the train move, every hour.</div></div></div>
              <div className="bg-[#F5F7FA] rounded-2xl p-4 flex gap-3"><i className="ri-image-line text-emerald text-xl"></i><div><div className="font-bold text-sm">Daily Photo Updates</div><div className="text-xs text-black/60">Private gallery for your ward.</div></div></div>
              <div className="bg-[#F5F7FA] rounded-2xl p-4 flex gap-3"><i className="ri-phone-find-line text-emerald text-xl"></i><div><div className="font-bold text-sm">24/7 Parent Helpline</div><div className="text-xs text-black/60">Control room + coordinator</div></div></div>
              <div className="bg-[#F5F7FA] rounded-2xl p-4 flex gap-3"><i className="ri-restaurant-2-line text-emerald text-xl"></i><div><div className="font-bold text-sm">Food & Stay Details</div><div className="text-xs text-black/60">Menu, hygiene, room photos</div></div></div>
            </div>
            <div className="mt-6 flex gap-3">
              <button onClick={openRegister} className="bg-midnight text-white px-6 py-3 rounded-full font-bold text-sm">Talk to Coordinator</button>{' '}
              <a  href="#faq" className="px-6 py-3 rounded-full border border-black/10 font-semibold text-sm hover:bg-black hover:text-white transition">Parent FAQs</a>
            </div>
          </div>
          <div className="bg-[#F5F7FA] rounded-[24px] p-4 shadow-inner">
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="font-bold">Parent Dashboard — Preview</div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald text-white">LIVE</span>
              </div>
              <div className="mt-4 rounded-xl overflow-hidden border border-black/5">
                <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop" className="w-full h-44 object-cover" />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-[#E6F6F1] rounded-xl py-3"><div className="font-bold text-emerald">Day 3</div><div className="text-black/60">Munnar</div></div>
                <div className="bg-[#FFF3E6] rounded-xl py-3"><div className="font-bold text-saffron">18:42</div><div className="text-black/60">Last Update</div></div>
                <div className="bg-midnight text-white rounded-xl py-3"><div className="font-bold">Safe ✓</div><div className="opacity-70">Status</div></div>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center gap-2"><span className="w-2 h-2 bg-emerald rounded-full"></span> Breakfast done — 08:10 AM</div>
                <div className="flex items-center gap-2"><span className="w-2 h-2 bg-emerald rounded-full"></span> Reached Tea Museum — 10:30 AM</div>
                <div className="flex items-center gap-2"><span className="w-2 h-2 bg-saffron rounded-full animate-pulse"></span> Now: Trekking — Live Photos Coming</div>
              </div>
            </div>
          </div>
        </div>

        {/* School */}
        <div id="panel-school" className={panelClass('school', 'p-6 md:p-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start')}>
          <div>
            <div className="inline-flex items-center gap-2 text-midnight font-bold tracking-widest text-xs"><span className="w-8 h-px bg-midnight"></span> FOR INSTITUTIONS</div>
            <h3 className="font-extrabold text-[28px] md:text-[34px] leading-none mt-3 text-midnight">One dashboard. <span className="font-light italic font-brush">Every student.</span></h3>
            <p className="mt-3 text-black/60 leading-relaxed">Institution login to manage students, payments, certificates, attendance and reports — with dedicated relationship manager.</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex gap-3"><span className="w-7 h-7 rounded-full bg-emerald text-white flex items-center justify-center"><i className="ri-group-line"></i></span> Bulk student management & Excel import</li>
              <li className="flex gap-3"><span className="w-7 h-7 rounded-full bg-midnight text-white flex items-center justify-center"><i className="ri-secure-payment-line"></i></span> Secure Razorpay payments & instant receipts</li>
              <li className="flex gap-3"><span className="w-7 h-7 rounded-full bg-saffron text-white flex items-center justify-center"><i className="ri-file-paper-line"></i></span> Auto-generated certificates & analytics</li>
            </ul>
            <button onClick={openRegister} className="mt-6 bg-midnight text-white px-6 py-3 rounded-full font-bold text-sm">Request Institution Login</button>
          </div>
          <div className="bg-midnight rounded-[24px] p-6 text-white">
            <div className="flex items-center justify-between"><div className="font-bold">School Dashboard</div><span className="text-xs bg-white text-midnight px-3 py-1 rounded-full font-bold">DEMO</span></div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="bg-white/10 rounded-xl py-4"><div className="font-label font-bold text-xl">42</div><div className="text-xs opacity-70">STUDENTS</div></div>
              <div className="bg-white/10 rounded-xl py-4"><div className="font-label font-bold text-xl">38</div><div className="text-xs opacity-70">PAID</div></div>
              <div className="bg-emerald rounded-xl py-4"><div className="font-label font-bold text-xl">4</div><div className="text-xs">PENDING</div></div>
            </div>
            <div className="mt-4 bg-white text-midnight rounded-xl p-4">
              <div className="text-xs font-bold tracking-widest opacity-60">RECENT PAYMENTS</div>
              <div className="mt-2 space-y-2 text-sm">
                <div className="flex justify-between"><span>Ananya S. — BSC</span><span className="font-bold text-emerald">Paid ✓</span></div>
                <div className="flex justify-between"><span>Rahul K. — BCOM</span><span className="font-bold text-emerald">Paid ✓</span></div>
                <div className="flex justify-between"><span>Meera J. — BA</span><span className="font-bold text-saffron">Pending</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Sponsor */}
        <div id="panel-sponsor" className={panelClass('sponsor', 'p-6 md:p-10')}>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-saffron font-bold tracking-widest text-xs"><span className="w-8 h-px bg-saffron"></span> PARTNERS & SPONSORS</div>
              <h3 className="font-extrabold text-[28px] md:text-[34px] leading-none mt-3 text-midnight">Your brand. <span className="font-light italic font-brush text-saffron">A national stage.</span></h3>
              <p className="mt-3 text-black/60 leading-relaxed">Associate with South India’s largest student movement. CSR-aligned, media-rich, youth-trusted.</p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="bg-[#F5F7FA] rounded-2xl p-4"><div className="font-label font-bold text-lg">2M+</div><div className="text-xs font-bold tracking-widest opacity-60">REACH</div></div>
                <div className="bg-[#F5F7FA] rounded-2xl p-4"><div className="font-label font-bold text-lg">500+</div><div className="text-xs font-bold tracking-widest opacity-60">MEDIA MENTIONS</div></div>
                <div className="bg-midnight text-white rounded-2xl p-4"><div className="font-label font-bold text-lg">28</div><div className="text-xs font-bold tracking-widest">STATES</div></div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold">
                <span className="px-3 py-1.5 rounded-full bg-white border border-black/10">Title Sponsor</span>{' '}
                <span className="px-3 py-1.5 rounded-full bg-white border border-black/10">Co-Powered By</span>{' '}
                <span className="px-3 py-1.5 rounded-full bg-white border border-black/10">Ecology Partner</span>{' '}
                <span className="px-3 py-1.5 rounded-full bg-white border border-black/10">Knowledge Partner</span>
              </div>
            </div>
            <div className="bg-[#F5F7FA] rounded-[24px] p-6">
              <div className="font-bold">Brand Visibility</div>
              <div className="mt-4 flex flex-wrap gap-3 opacity-60 grayscale">
                <div className="bg-white px-6 py-3 rounded-xl font-extrabold tracking-widest text-sm">TITAN</div>
                <div className="bg-white px-6 py-3 rounded-xl font-extrabold tracking-widest text-sm">INFOSYS</div>
                <div className="bg-white px-6 py-3 rounded-xl font-extrabold tracking-widest text-sm">BYJU’S</div>
                <div className="bg-white px-6 py-3 rounded-xl font-extrabold tracking-widest text-sm">KSRTC</div>
                <div className="bg-white px-6 py-3 rounded-xl font-extrabold tracking-widest text-sm">KERALA TOURISM</div>
              </div>
              <button className="mt-6 w-full bg-saffron text-white py-3 rounded-full font-bold hover:bg-[#e07d1f] transition">Download Sponsorship Deck →</button>
              <div className="text-xs text-center text-black/50 mt-2">CSR Eligible • 80G Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
