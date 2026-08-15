import { Section, Eyebrow, Title, Body, Chip, Callout } from '@/components/page/Blocks'

const ELEMENTS = ['Street plays', 'Classical dance forms', 'Festoons', 'Play cards']

export default function IntachHeritageRally() {
  return (
    <>
      {/* Single-statement page: one big idea, then the components of it */}
      <Section tone="white">
        <div className="max-w-[880px]">
          <Eyebrow>A TRIBUTE</Eyebrow>
          <Title className="text-midnight">
            A Grand Heritage &amp; Cult Carnival, carrying the message of Indian glory in the lines and dreams of{' '}
            <span className="font-light italic font-brush text-emerald">Dr. A.P.J. Abdul Kalam.</span>
          </Title>
        </div>

        <div className="mt-12 grid md:grid-cols-4 gap-4">
          {ELEMENTS.map((el, i) => (
            <div key={el} className="rounded-2xl border border-black/10 p-6 hover:border-emerald hover:bg-[#E6F6F1] transition-colors">
              <div className="font-label font-bold text-[28px] text-black/15">{String(i + 1).padStart(2, '0')}</div>
              <div className="font-bold text-midnight mt-2">{el}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft" bordered>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Eyebrow>IN ASSOCIATION WITH</Eyebrow>
            <Title className="text-midnight">UN Youth</Title>
            <Body className="text-black/60">
              The Heritage Rally is conducted in association with UN Youth under the theme{' '}
              <span className="font-semibold text-midnight">Youth for Civic Engagement</span> — placing the carnival inside a
              wider commitment rather than leaving it as a performance.
            </Body>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <Chip tone="emerald">Youth for Civic Engagement</Chip>
              <Chip>INTACH</Chip>
            </div>
          </div>
          <Callout>
            <div className="text-[11px] tracking-[0.18em] font-bold text-golden">HELD WITHIN CAMPUS</div>
            <p className="font-head font-extrabold text-[24px] md:text-[30px] leading-tight mt-3">
              Heritage Rallies have run inside the campuses of IIT Madras, BITS Pilani and IIST Trivandrum.
            </p>
          </Callout>
        </div>
      </Section>
    </>
  )
}
