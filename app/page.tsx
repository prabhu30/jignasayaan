import { SiteUIProvider } from '@/components/SiteUI'
import PageEffects from '@/components/PageEffects'

import TopEyebrow from '@/components/sections/TopEyebrow'
import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Why from '@/components/sections/Why'
import Keralam from '@/components/sections/Keralam'
import Journey from '@/components/sections/Journey'
import Destinations from '@/components/sections/Destinations'
import Experience from '@/components/sections/Experience'
import Parents from '@/components/sections/Parents'
import Gallery from '@/components/sections/Gallery'
import Testimonials from '@/components/sections/Testimonials'
import Faq from '@/components/sections/Faq'
import RegisterCta from '@/components/sections/RegisterCta'
import Footer from '@/components/sections/Footer'
import MobileBar from '@/components/sections/MobileBar'

import VideoModal from '@/components/modals/VideoModal'
import Lightbox from '@/components/modals/Lightbox'
import RegisterModal from '@/components/register/RegisterModal'

/**
 * Everything below the hero is hidden from the UI while the standalone pages are
 * built out. The markup is deliberately left in place and still renders into the
 * DOM tree — flip this single flag to bring the one-pager back exactly as it was.
 */
const SHOW_HOME_SECTIONS = false

// Order matches the original document body exactly — the sticky bar and the three
// modals are last so their stacking context sits above every section.
export default function Page() {
  return (
    <SiteUIProvider>
      <TopEyebrow />
      <Navbar />
      <Hero />

      <div className={SHOW_HOME_SECTIONS ? undefined : 'hidden'}>
        <About />
        <Why />
        <Keralam />
        <Journey />
        <Destinations />
        <Experience />
        <Parents />
        <Gallery />
        <Testimonials />
        <Faq />
        <RegisterCta />
        <Footer />
        {/* Hidden with the sections: four of its five links point at them. */}
        <MobileBar />
      </div>

      <VideoModal />
      <Lightbox />
      <RegisterModal />
      <PageEffects />
    </SiteUIProvider>
  )
}
