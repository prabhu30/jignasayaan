import { Section, Eyebrow, Title, Body, Callout } from '@/components/page/Blocks'

const METHOD = [
  ['Visit the museum', 'The study begins on site, not in a briefing room.', 'ri-building-line'],
  ['Learn from resource persons', 'Historians and custodians answer directly.', 'ri-user-voice-line'],
  ['Fill the questionnaire', 'Each Yaanik carries an innovative questionnaire to complete from what they find.', 'ri-file-list-3-line'],
]

export default function CaseStudyTemple() {
  return (
    <>
      {/* Question-led editorial */}
      <Section tone="white">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16">
          <div>
            <Eyebrow>THE CASE STUDY</Eyebrow>
            <Title className="text-midnight">Mysteries, history and heritage — <span className="font-light italic font-brush text-emerald">investigated.</span></Title>
          </div>
          <div>
            <Body className="text-[17px] md:text-[18px] text-charcoal/75 mt-0">
              Yaaniks study the world-famous Anantha Padmanabha Swamy Temple at Trivandrum — not as visitors moving past a
              monument, but as a group with a question sheet in hand and people to ask.
            </Body>
            <div className="mt-8 space-y-4">
              {METHOD.map(([title, text, icon], i) => (
                <div key={title} className="flex gap-5 bg-[#F5F7FA] rounded-2xl p-5 border border-black/5">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-midnight text-white flex items-center justify-center text-xl"><i className={icon}></i></div>
                  <div>
                    <div className="font-bold text-midnight">{title}</div>
                    <div className="text-sm text-black/60 leading-relaxed mt-1">{text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="ivory">
        <Callout tone="emerald">
          <h3 className="font-head font-extrabold text-[26px] md:text-[34px] leading-tight max-w-[820px]">
            The answers are not handed out. They are found, and written down by the Yaanik who found them.
          </h3>
        </Callout>
      </Section>
    </>
  )
}
