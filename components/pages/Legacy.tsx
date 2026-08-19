import { Section, Eyebrow, Title, Body } from '@/components/page/Blocks'

/* The seven institutions, in the order the content document lists them. */
const INSTITUTIONS = [
  'IIT Madras',
  'BITS Pilani',
  'IIT BHU, Varanasi',
  'IIST Trivandrum',
  'IIM Ahmedabad',
  'NIFAA Karnal, Haryana',
  'IIM Kozhikode',
]

export default function Legacy() {
  return (
    <>
      <Section tone="white">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>THE JIGNASA YAAN LEGACY · 2014–2026</Eyebrow>
            <Title className="text-midnight">Where the Yaan <span className="font-light italic font-brush text-emerald">has been.</span></Title>
          </div>
          <div className="bg-[#F5F7FA] rounded-2xl px-6 py-4 border border-black/5">
            <div className="font-label font-bold text-2xl text-midnight leading-none">{INSTITUTIONS.length}</div>
            <div className="text-[11px] tracking-widest font-semibold text-black/50 mt-1">INSTITUTIONS</div>
          </div>
        </div>

        <Body className="text-black/60 max-w-[820px]">
          Jignasa Yaan began in January 2014 with a journey to IIT Madras. Since then, the YAAN journey has connected
          students with some of India&apos;s premier institutions and cultural environments.
        </Body>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {INSTITUTIONS.map((inst, i) => (
            <div key={inst} className="bg-white rounded-2xl border border-black/5 p-5 shadow-sm">
              <div className="font-label font-bold text-emerald text-sm">{String(i + 1).padStart(2, '0')}</div>
              <div className="font-bold text-midnight leading-snug mt-2 text-[15px]">{inst}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <div className="grid md:grid-cols-2 gap-5">
          <a
            href="/history-of-jignasa-yaan"
            className="group bg-white rounded-[24px] p-7 md:p-8 border border-black/5 shadow-[0_18px_50px_rgba(8,27,51,0.10)] transition hover:-translate-y-1"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="text-[11px] tracking-[0.18em] font-bold text-emerald">HISTORY OF JIGNASA YAAN</div>
              <i className="ri-arrow-right-up-line text-xl text-black/25 group-hover:text-emerald transition-colors"></i>
            </div>
            <h3 className="font-head font-extrabold text-[22px] md:text-[26px] text-midnight leading-snug mt-3">
              Seven editions, edition by edition.
            </h3>
            <p className="text-[15px] leading-relaxed text-black/60 mt-2">
              Every Yaan from 2014 to 2019 — institution, state, participants and date.
            </p>
          </a>
          <a
            href="/hall-of-fame"
            className="group bg-white rounded-[24px] p-7 md:p-8 border border-black/5 shadow-[0_18px_50px_rgba(8,27,51,0.10)] transition hover:-translate-y-1"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="text-[11px] tracking-[0.18em] font-bold text-saffron">HALL OF FAME</div>
              <i className="ri-arrow-right-up-line text-xl text-black/25 group-hover:text-saffron transition-colors"></i>
            </div>
            <h3 className="font-head font-extrabold text-[22px] md:text-[26px] text-midnight leading-snug mt-3">
              Twenty-seven things the Yaan has done.
            </h3>
            <p className="text-[15px] leading-relaxed text-black/60 mt-2">
              The full record of what the journey has built, campus by campus and craft by craft.
            </p>
          </a>
        </div>
      </Section>
    </>
  )
}
