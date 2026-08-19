import { Section, Eyebrow, Title, Body, Callout } from '@/components/page/Blocks'

const ORGS: [string, string][] = [
  ['Indian National Trust for Art and Cultural Heritage', 'INTACH'],
  ['Ministry of Culture, Government of India', ''],
  ['United Nations Youth / Division for Social Policy and Development', ''],
  ['Department of Culture, Government of Kerala', ''],
  ['Department of Tourism, Government of Kerala', ''],
  ['Indian Institute of Space Science and Technology', 'IIST'],
  ['Indian Institute of Technology Madras', 'IIT-M'],
  ['Indian Institute of Technology — Banaras Hindu University', 'IIT-BHU'],
  ['Birla Institute of Technology & Science — BITS Pilani', 'BITS'],
  ['Indian Institute of Management Ahmedabad', 'IIM-A'],
  ['Indian Railway Catering and Tourism Corporation', 'IRCTC'],
  ['Dhagam', ''],
  ['Margi Kathakali Theatre', ''],
]

/** Directory layout: a numbered register rather than a card grid. */
export default function Sponsors() {
  return (
    <>
      <Section tone="white">
        <div className="max-w-[760px]">
          <Eyebrow>OUR INSTITUTIONAL ECOSYSTEM</Eyebrow>
          <Title className="text-midnight">Built across education, government, culture and <span className="font-light italic font-brush text-emerald">heritage.</span></Title>
          <Body className="text-black/60">
            Jignasa Yaan has built relationships and associations across education, government, culture, heritage and student
            communities.
          </Body>
        </div>

        <div className="mt-12">
          <div className="text-[11px] tracking-[0.18em] font-bold text-black/40 pb-3 border-b-2 border-midnight">
            ASSOCIATED INSTITUTIONS &amp; ORGANISATIONS · {ORGS.length}
          </div>
          {ORGS.map(([name, abbr], i) => (
            <div key={name} className="group flex items-baseline gap-5 md:gap-8 py-5 border-b border-black/10 hover:bg-[#F5F7FA] transition-colors">
              <span className="font-label font-bold text-[13px] text-emerald w-8 shrink-0">{String(i + 1).padStart(2, '0')}</span>
              <span className="font-head font-bold text-[18px] md:text-[24px] text-midnight leading-snug flex-1">{name}</span>
              {abbr && <span className="hidden sm:block font-label font-bold text-sm text-black/35 tracking-widest shrink-0">{abbr}</span>}
            </div>
          ))}
        </div>
      </Section>

      <Section tone="ivory">
        <Callout>
          <div className="md:flex items-center justify-between gap-8">
            <div className="max-w-[680px]">
              <div className="text-[11px] tracking-[0.18em] font-bold text-emerald">PARTNERSHIP</div>
              <h3 className="font-head font-extrabold text-[26px] md:text-[34px] leading-tight text-midnight mt-3">
                JIGNASA welcomes organisations that believe in education, youth development, culture, heritage, arts,
                leadership, innovation and social responsibility.
              </h3>
            </div>
            <a href="/contact-us" className="mt-6 md:mt-0 shrink-0 inline-flex items-center gap-2 bg-midnight text-white px-8 py-4 rounded-full font-bold hover:bg-emerald transition">
              Partner with Jignasa <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </Callout>
      </Section>
    </>
  )
}
