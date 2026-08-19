import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import Navbar from '@/components/sections/Navbar'
import TopEyebrow from '@/components/sections/TopEyebrow'
import PageCredits from '@/components/PageCredits'
import { PageHero } from '@/components/page/Blocks'
import { PAGE_CONTENT, PAGE_KICKER } from '@/components/pages/registry'
import { ALL_PAGES, getPage } from '@/lib/pages'

// Only the slugs in ALL_PAGES exist; anything else 404s rather than rendering an empty shell.
export const dynamicParams = false

export function generateStaticParams() {
  return ALL_PAGES.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = getPage(slug)
  if (!page) return {}
  return {
    title: `${page.label} — Jignasayaan`,
    description: page.tagline,
  }
}

export default async function SitePageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = getPage(slug)
  if (!page) notFound()

  const Content = PAGE_CONTENT[page.slug]

  return (
    <>
      {/*
        The artwork is the background of the whole page, not a banner above it.
        A fixed layer is used rather than `background-attachment: fixed`, which iOS
        Safari ignores. The scrim is light — enough to hold text legible without
        washing the artwork out; section surfaces above are translucent.
      */}
      <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none">
        <img
          src={`/backgrounds/web/${page.background}`}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/42"></div>
      </div>

      <div className="relative z-10">
        <TopEyebrow />
        <Navbar />
        <PageHero page={page} kicker={PAGE_KICKER[page.slug]} />
        {Content ? (
          <main>
            <Content />
          </main>
        ) : (
          // No content section exists for this page in the content document yet.
          <main>
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28 text-center">
              <p className="text-charcoal/60 text-[15px]">Details for this page are being prepared.</p>
            </div>
          </main>
        )}
        <PageCredits />
      </div>
    </>
  )
}
