'use client'

import { useSiteUI } from '@/components/SiteUI'

export default function MobileBar() {
  const { openRegister } = useSiteUI()

  return (
    <div className="lg:hidden fixed bottom-4 inset-x-4 z-30 glass rounded-full px-2 py-2 flex justify-between items-center shadow-xl border border-black/5">
      <a  href="#journey" className="flex flex-col items-center px-4 py-1 text-midnight"><i className="ri-route-line text-lg"></i><span className="text-[10px] font-bold tracking-widest">JOURNEY</span></a>{' '}
      <a  href="#destinations" className="flex flex-col items-center px-4 py-1 text-black/60"><i className="ri-map-line text-lg"></i><span className="text-[10px] font-semibold">PLACES</span></a>{' '}
      <button onClick={openRegister} className="bg-saffron text-white px-6 py-3 rounded-full font-bold text-sm shadow">JOIN NOW</button>{' '}
      <a  href="#gallery" className="flex flex-col items-center px-4 py-1 text-black/60"><i className="ri-gallery-line text-lg"></i><span className="text-[10px] font-semibold">GALLERY</span></a>{' '}
      <a  href="#faq" className="flex flex-col items-center px-4 py-1 text-black/60"><i className="ri-question-line text-lg"></i><span className="text-[10px] font-semibold">HELP</span></a>
    </div>
  )
}
