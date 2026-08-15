import { Section, Eyebrow, Title, Body } from '@/components/page/Blocks'

const FEATURES = [
  ['EDUCATION ON WHEELS', 'The journey itself becomes an educational environment.', 'ri-train-line'],
  ['PREMIER INSTITUTION EXPOSURE', 'Experience the environment of institutions such as IITs, IIMs, IIST, NITs and BITS through carefully designed journeys.', 'ri-building-4-line'],
  ['CROSS-CULTURE INTERACTION', 'Meet students from different states, colleges and cultural backgrounds.', 'ri-global-line'],
  ['HERITAGE LEARNING', "Explore India's monuments, traditions, arts and living heritage.", 'ri-ancient-pavilion-line'],
  ['ACTIVITY-BASED LEARNING', 'Students learn by doing.', 'ri-hand-heart-line'],
  ['CREATIVE EXPRESSION', 'Art, theatre, music, dance, storytelling and visual creativity become part of the learning journey.', 'ri-palette-line'],
  ['MENTOR INTERACTION', 'Meet people from industry, government, academia, entrepreneurship and the arts.', 'ri-user-voice-line'],
  ['LEADERSHIP DEVELOPMENT', 'Students work together, take responsibility and develop leadership abilities.', 'ri-user-star-line'],
  ['SOCIAL & ENVIRONMENTAL UNDERSTANDING', "Village studies, ecology and community interaction broaden students' understanding of society.", 'ri-seedling-line'],
  ['LIFELONG MEMORIES', 'The most powerful lessons are often the ones students remember for life.', 'ri-heart-3-line'],
]

/** Zigzag ledger: number on alternating sides, full-bleed rules between rows. */
export default function SpecificFeatures() {
  return (
    <Section tone="white">
      <div className="max-w-[760px]">
        <Eyebrow>WHY JIGNASA YAAN IS DIFFERENT</Eyebrow>
        <Title className="text-midnight">Ten things a tour <span className="font-light italic font-brush text-emerald">cannot give you.</span></Title>
      </div>

      <div className="mt-12 border-t border-black/10">
        {FEATURES.map(([title, text, icon], i) => {
          const flip = i % 2 === 1
          return (
            <div key={title} className="border-b border-black/10 group">
              <div className={`py-8 md:py-10 grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-start ${flip ? 'md:[direction:rtl]' : ''}`}>
                <div className="[direction:ltr] font-label font-bold text-[40px] md:text-[64px] leading-none text-black/10 group-hover:text-emerald/25 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className={`[direction:ltr] ${flip ? 'md:text-right' : ''}`}>
                  <h3 className="font-head font-extrabold text-[22px] md:text-[30px] leading-tight text-midnight">{title}</h3>
                  <p className={`mt-3 text-[15px] md:text-base leading-relaxed text-black/60 max-w-[620px] ${flip ? 'md:ml-auto' : ''}`}>{text}</p>
                </div>
                <div className="[direction:ltr] hidden md:flex w-14 h-14 rounded-2xl bg-[#F5F7FA] text-midnight items-center justify-center text-2xl group-hover:bg-midnight group-hover:text-white transition-colors">
                  <i className={icon}></i>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
