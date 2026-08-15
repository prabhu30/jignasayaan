import { Section, Eyebrow, Title, Body, Callout } from '@/components/page/Blocks'

const FORMS = [
  ['Kathakali', 'Kerala', 'The form the festival documents most closely — its artisans, and the love they hold for it.'],
  ['Kuchipudi', 'Andhra Pradesh', 'Brought into the same frame as part of the cross-culture initiative.'],
  ['Bharatanatyam', 'Tamil Nadu', 'Danced to the same dance drama, at the same time, on the same stage.'],
]

export default function KathakaliFestival() {
  return (
    <>
      {/* Three-column comparison — the point of the page is the simultaneity */}
      <Section tone="white">
        <div className="max-w-[820px]">
          <Eyebrow>THE GREAT INDIAN DANCING FESTIVAL</Eyebrow>
          <Title className="text-midnight">
            Three classical forms. One dance drama. <span className="font-light italic font-brush text-emerald">At the same time.</span>
          </Title>
          <Body className="text-black/60">
            As a cross-culture initiative, Bharatanatyam, Kuchipudi and Kathakali dancers perform the same dance drama
            simultaneously — leaving Yaaniks to watch with two eyes and find it very tough to judge among the three.
          </Body>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-0 md:gap-px md:bg-black/10 rounded-[24px] overflow-hidden border border-black/10">
          {FORMS.map(([name, state, text]) => (
            <div key={name} className="bg-white p-7 md:p-8">
              <div className="text-[11px] tracking-[0.18em] font-bold text-emerald">{state.toUpperCase()}</div>
              <h3 className="font-head font-extrabold text-[26px] md:text-[32px] text-midnight mt-2">{name}</h3>
              <p className="text-[15px] leading-relaxed text-black/60 mt-4">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="midnight">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <Eyebrow tone="golden">DOCUMENTATION</Eyebrow>
            <Title>A documentary on the art — <span className="font-light italic font-brush text-golden">and the artisans.</span></Title>
            <Body className="text-white/70">
              Yaaniks document the age-old art and artisans of Kathakali, Kuchipudi, Bharatanatyam and Mohiniattam, surveying
              the lives of Kathakali dancers and the love they hold towards the form.
            </Body>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-[24px] p-8">
            <div className="text-[11px] tracking-[0.18em] font-bold text-white/50">IN ASSOCIATION WITH</div>
            <div className="font-head font-extrabold text-2xl mt-3 leading-snug">
              Indian National Trust for Art and Cultural Heritage
            </div>
            <div className="text-golden font-label font-bold tracking-widest mt-2">INTACH</div>
          </div>
        </div>
      </Section>
    </>
  )
}
