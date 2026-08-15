'use client'

import { useSiteUI } from '@/components/SiteUI'

export default function VideoModal() {
  const { videoOpen, closeVideo } = useSiteUI()

  return (
    <div id="videoModal" className={'fixed inset-0 z-[60]' + (videoOpen ? '' : ' hidden')}>
      <div className="absolute inset-0 bg-midnight/80 backdrop-blur-md" onClick={closeVideo}></div>
      <div className="relative max-w-4xl mx-auto mt-[6vh] p-4">
        <div className="bg-black rounded-[24px] overflow-hidden shadow-2xl">
          <div className="flex justify-between items-center p-4 text-white">
            <div className="font-bold">Jignasayaan — The Film (1:42)</div>
            <button onClick={closeVideo} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition"><i className="ri-close-line text-xl"></i></button>
          </div>
          <div className="aspect-video bg-black flex items-center justify-center relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" />{' '}
            <button className="absolute w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl"><i className="ri-play-fill text-4xl ml-1 text-midnight"></i></button>
            <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold">Demo — Replace with Vimeo/YouTube embed</div>
          </div>
        </div>
      </div>
    </div>
  )
}
