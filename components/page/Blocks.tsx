import type { ReactNode } from 'react'
import type { SitePage } from '@/lib/pages'

/* Shared building blocks for the standalone pages. Each page composes these
   differently — the point is that no two pages read the same. */

const WRAP = 'max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16'

type Tone = 'ivory' | 'white' | 'soft' | 'midnight' | 'emerald'

/* The artwork is the page background (see the fixed layer in app/[slug]/page.tsx),
   so section surfaces are translucent rather than opaque — content sits on the
   artwork instead of covering it. `ivory` is fully clear. */
const TONE: Record<Tone, string> = {
  ivory: 'bg-transparent text-charcoal',
  white: 'bg-white/80 backdrop-blur-[3px] text-charcoal',
  soft: 'bg-white/62 backdrop-blur-[3px] text-charcoal',
  midnight: 'bg-midnight/90 backdrop-blur-sm text-white',
  emerald: 'bg-emerald/92 text-white',
}

export function Section({
  tone = 'ivory', children, className = '', bordered = false,
}: { tone?: Tone; children: ReactNode; className?: string; bordered?: boolean }) {
  return (
    <section className={`${TONE[tone]} ${bordered ? 'border-y border-black/10' : ''} ${className}`}>
      <div className={`${WRAP} py-14 md:py-20`}>{children}</div>
    </section>
  )
}

export function Eyebrow({ children, tone = 'emerald' }: { children: ReactNode; tone?: 'emerald' | 'golden' | 'white' }) {
  const c = tone === 'golden' ? 'text-golden' : tone === 'white' ? 'text-white/70' : 'text-emerald'
  return (
    <div className={`inline-flex items-center gap-2 font-bold tracking-[0.2em] text-xs ${c}`}>
      <span className={`w-8 h-px ${tone === 'golden' ? 'bg-golden' : tone === 'white' ? 'bg-white/40' : 'bg-emerald'}`}></span>
      {children}
    </div>
  )
}

export function Title({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`font-head font-extrabold text-[28px] md:text-[42px] leading-[0.98] tracking-[-0.01em] mt-4 ${className}`}>
      {children}
    </h2>
  )
}

export function Lede({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`mt-5 text-[17px] md:text-[19px] leading-relaxed ${className}`}>{children}</p>
}

export function Body({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`mt-4 text-[15px] md:text-base leading-relaxed ${className}`}>{children}</p>
}

/* ---------------------------------------------------------------- hero */

/** Three hero treatments so the top of each page differs, not just the body. */
export type HeroVariant = 'overlay' | 'band' | 'split'

export function PageHero({ page, kicker }: { page: SitePage; kicker?: string }) {
  // The artwork already fills the page behind this, so the hero only sets the title.
  // The three variants vary the treatment, not the image.
  if (page.hero === 'band') {
    return (
      <header className="relative">
        <div className={`${WRAP} pt-16 pb-10 md:pt-24 md:pb-14`}>
          <div className="bg-white/75 backdrop-blur-[3px] rounded-[28px] px-7 py-9 md:px-12 md:py-12 max-w-[900px] border border-white/60 shadow-[0_20px_60px_rgba(8,27,51,0.12)]">
            {kicker && <Eyebrow>{kicker}</Eyebrow>}
            <h1 className="font-head font-extrabold text-[34px] md:text-[56px] leading-[0.95] tracking-[-0.02em] text-midnight mt-4">
              {page.label}
            </h1>
            {page.tagline && <p className="mt-4 text-[17px] md:text-[19px] leading-relaxed text-charcoal/70">{page.tagline}</p>}
          </div>
        </div>
      </header>
    )
  }

  if (page.hero === 'split') {
    return (
      <header className="relative">
        <div className={`${WRAP} pt-16 pb-10 md:pt-24 md:pb-14`}>
          <div className="grid lg:grid-cols-2">
            <div className="bg-midnight/90 backdrop-blur-sm text-white rounded-[28px] px-7 py-10 md:px-12 md:py-14 shadow-[0_20px_60px_rgba(8,27,51,0.28)]">
              {kicker && <Eyebrow tone="golden">{kicker}</Eyebrow>}
              <h1 className="font-head font-extrabold text-[32px] md:text-[52px] leading-[0.95] tracking-[-0.02em] mt-4">
                {page.label}
              </h1>
              {page.tagline && <p className="mt-4 text-[16px] md:text-[18px] leading-relaxed text-white/75">{page.tagline}</p>}
            </div>
          </div>
        </div>
      </header>
    )
  }

  // overlay — title straight on the artwork, held legible by a soft gradient only
  return (
    <header className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-midnight/35 to-transparent"></div>
      <div className={`${WRAP} relative pt-20 pb-14 md:pt-28 md:pb-20`}>
        {kicker && <Eyebrow tone="golden">{kicker}</Eyebrow>}
        <h1 className="font-head font-extrabold text-[34px] md:text-[58px] leading-[0.95] tracking-[-0.02em] text-white mt-3 drop-shadow-[0_2px_12px_rgba(8,27,51,0.5)]">
          {page.label}
        </h1>
        {page.tagline && <p className="mt-3 text-[16px] md:text-[19px] leading-relaxed text-white/90 max-w-[760px] drop-shadow-[0_1px_8px_rgba(8,27,51,0.5)]">{page.tagline}</p>}
      </div>
    </header>
  )
}

/* ---------------------------------------------------------------- pieces */

export function NumberedItem({ n, title, children, tone = 'light' }:
  { n: string; title: string; children?: ReactNode; tone?: 'light' | 'dark' }) {
  const dark = tone === 'dark'
  return (
    <div className={`flex gap-5 ${dark ? '' : ''}`}>
      <div className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-label font-bold
        ${dark ? 'bg-white/10 text-golden' : 'bg-midnight text-white'}`}>{n}</div>
      <div className="pt-1">
        <h3 className={`font-bold text-lg ${dark ? 'text-white' : 'text-midnight'}`}>{title}</h3>
        {children && <div className={`text-[15px] leading-relaxed mt-1.5 ${dark ? 'text-white/70' : 'text-black/60'}`}>{children}</div>}
      </div>
    </div>
  )
}

export function Chip({ children, tone = 'light' }: { children: ReactNode; tone?: 'light' | 'dark' | 'emerald' }) {
  const c = tone === 'dark'
    ? 'bg-white/10 text-white border-white/10'
    : tone === 'emerald'
      ? 'bg-[#E6F6F1] text-emerald border-[#BFE9DE]'
      : 'bg-white text-midnight border-black/5'
  return <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${c}`}>{children}</span>
}

export function Callout({ children, tone = 'midnight' }: { children: ReactNode; tone?: 'midnight' | 'emerald' | 'saffron' }) {
  const c = tone === 'emerald' ? 'bg-emerald text-white' : tone === 'saffron' ? 'bg-saffron text-white' : 'bg-midnight text-white'
  return (
    <div className={`${c} rounded-[28px] p-7 md:p-10 relative overflow-hidden`}>
      <div className="absolute -right-12 -top-12 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="relative">{children}</div>
    </div>
  )
}

export { WRAP }
