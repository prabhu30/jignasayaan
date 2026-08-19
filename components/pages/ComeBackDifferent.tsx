import { Section, Eyebrow, Title, Body } from '@/components/page/Blocks'

/**
 * The closing statement of the content document, given a page of its own.
 * It is four couplets: a thing the Yaan is *not*, then the thing it is. The layout
 * exists to make that turn readable — the refusal set small and grey, the answer set
 * as large as the page allows, so the eye lands on the second half every time.
 */
const COUPLETS: { not: string; is: string; accent: string }[] = [
  { not: "Don't just travel.", is: 'Experience.', accent: 'text-emerald' },
  { not: "Don't just see.", is: 'Understand.', accent: 'text-saffron' },
  { not: "Don't just learn.", is: 'Participate.', accent: 'text-emerald' },
]

export default function ComeBackDifferent() {
  return (
    <>
      <Section tone="white">
        <div className="max-w-[760px]">
          <Eyebrow>THE FINAL WORD</Eyebrow>
          <Title className="text-midnight">
            Four things the Yaan asks of <span className="font-light italic font-brush text-emerald">every Yaanik.</span>
          </Title>
          <Body className="text-black/60">
            Every Jignasa Yaan closes on the same idea — that a journey is only worth taking if the person who returns is
            not quite the person who left.
          </Body>
        </div>

        <div className="mt-12 border-t border-black/10">
          {COUPLETS.map(({ not: refusal, is, accent }) => (
            <div key={is} className="border-b border-black/10 py-9 md:py-12">
              <p className="font-label text-[12px] md:text-[13px] tracking-[0.22em] font-bold text-black/35 uppercase">
                {refusal}
              </p>
              <h2 className={`font-head font-extrabold text-[52px] md:text-[92px] leading-[0.92] tracking-[-0.025em] mt-3 ${accent}`}>
                {is}
              </h2>
            </div>
          ))}

          {/* The fourth turn is a sentence rather than a word, so it gets its own scale. */}
          <div className="border-b border-black/10 py-9 md:py-12">
            <p className="font-label text-[12px] md:text-[13px] tracking-[0.22em] font-bold text-black/35 uppercase">
              Don&apos;t just return.
            </p>
            <h2 className="font-head font-extrabold text-[38px] md:text-[68px] leading-[0.98] tracking-[-0.02em] text-midnight mt-3 max-w-[1000px]">
              Come back as a{' '}
              <span className="font-light italic font-brush text-saffron">different person.</span>
            </h2>
          </div>
        </div>
      </Section>

      {/* The sign-off, exactly as the document ends */}
      <Section tone="paper">
        <div className="text-center max-w-[860px] mx-auto">
          <h2 className="font-head font-extrabold text-[38px] md:text-[64px] leading-[0.98] tracking-[-0.02em] text-midnight">
            Jignasa Yaan
          </h2>
          <div className="mt-4 inline-flex items-center gap-3 text-emerald font-bold tracking-[0.24em] text-[11px] md:text-xs">
            <span className="w-8 h-px bg-emerald"></span>
            THE MODERN DESAYATANA
            <span className="w-8 h-px bg-emerald"></span>
          </div>
          <p className="mt-7 font-head font-bold text-[22px] md:text-[30px] leading-snug text-charcoal/75">
            Where the Journey Becomes the Classroom.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="/register"
              className="inline-flex items-center gap-2 rounded-full bg-midnight px-8 py-4 font-bold text-white transition hover:bg-emerald"
            >
              Become a Yaanik <i className="ri-arrow-right-line"></i>
            </a>
            <a
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 px-8 py-4 font-bold text-midnight transition hover:bg-[#F5F7FA]"
            >
              Read the story
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
