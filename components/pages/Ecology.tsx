import { Section, Eyebrow, Title, Body, Callout } from '@/components/page/Blocks'

const THEMES = [
  ['Save Birds', 'ri-bird-line', 'bg-[#E6F6F1] text-emerald'],
  ['Save Livestock', 'ri-bear-smile-line', 'bg-[#FFF3E6] text-[#9A4A00]'],
  ['Save Environment', 'ri-earth-line', 'bg-[#EEF2FF] text-midnight'],
]

export default function Ecology() {
  return (
    <>
      {/* Wide theme strips — the street-play themes, given the space of posters */}
      <Section tone="white">
        <div className="max-w-[760px]">
          <Eyebrow>STREET PLAYS IN THE VILLAGES</Eyebrow>
          <Title className="text-midnight">Teams of twenty, in props and <span className="font-light italic font-brush text-emerald">face paint.</span></Title>
          <Body className="text-black/60">
            Yaaniks visit native Kerala villages, dress up with props and face paints, and perform street plays on themes that
            the village itself lives with.
          </Body>
        </div>

        <div className="mt-10 space-y-4">
          {THEMES.map(([title, icon, tone], i) => (
            <div key={title} className={`${tone} rounded-[24px] px-7 py-8 md:px-10 flex items-center gap-6 md:gap-10`}>
              <i className={`${icon} text-4xl md:text-5xl shrink-0`}></i>
              <h3 className="font-head font-extrabold text-[26px] md:text-[38px] leading-none">{title}</h3>
              <span className="ml-auto font-label font-bold text-[28px] md:text-[40px] opacity-25">{String(i + 1).padStart(2, '0')}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft" bordered>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Eyebrow>IN ASSOCIATION WITH</Eyebrow>
            <Title className="text-midnight">Youth Hostels International &amp; NYC</Title>
            <Body className="text-black/60">
              Conducted with Youth Hostels International and the National Youth Council, Ministry of Youth Affairs.
            </Body>
          </div>
          <Callout tone="emerald">
            <h3 className="font-head font-extrabold text-[24px] md:text-[30px] leading-tight">
              Experiencing the ecology and environment of Kerala from inside its villages — not from a coach window.
            </h3>
          </Callout>
        </div>
      </Section>
    </>
  )
}
