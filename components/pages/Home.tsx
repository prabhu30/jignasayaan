import { Section, Eyebrow, Title, Body, Callout } from '@/components/page/Blocks'

const SHIFTS = [
  ['Classroom learning', 'Real-world learning'],
  ['Familiar surroundings', 'New cultures'],
  ['Observation', 'Participation'],
  ['Students', 'YAANIKs'],
]

export default function Home() {
  return (
    <>
      <Section tone="white">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#F5F7FA] rounded-2xl p-7 border border-black/5">
            <div className="w-11 h-11 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center text-xl"><i className="ri-team-line"></i></div>
            <div className="text-[11px] tracking-widest font-semibold text-black/45 mt-4">THEME</div>
            <div className="font-head font-extrabold text-2xl text-midnight mt-1">South for Bharat</div>
          </div>
          <div className="bg-midnight text-white rounded-2xl p-7">
            <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-xl"><i className="ri-leaf-line"></i></div>
            <div className="text-[11px] tracking-widest font-semibold text-white/50 mt-4">TAGLINE</div>
            <div className="font-head font-extrabold text-2xl mt-1">This Time for Keralam</div>
          </div>
        </div>
      </Section>

      <Section tone="ivory" bordered>
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16">
          <div>
            <Eyebrow>A KNOWLEDGE JOURNEY</Eyebrow>
            <Title className="text-midnight">Beyond <span className="font-light italic font-brush text-emerald">classrooms.</span></Title>
          </div>
          <div>
            <Body className="text-[17px] md:text-[18px] text-charcoal/75 mt-0">
              Jignasa Yaan is a Knowledge Journey designed to help students, youth, corporate professionals, young
              entrepreneurs and doctors experience the wider world through Knowledge Exchange, Culture, Heritage, Arts
              Experience, Entrepreneurship, Creative Leadership, Innovation and Life Skills.
            </Body>
            <Body className="text-charcoal/70">
              Yaaniks from different colleges, universities, corporate companies and elite institutions across states travel
              together to premier educational institutions, campus festivals, heritage destinations, cultural spaces and
              diversified communities.
            </Body>
          </div>
        </div>
      </Section>

      {/* The transformation, as a ledger of shifts */}
      <Section tone="midnight">
        <div className="max-w-[820px]">
          <Eyebrow tone="golden">NOT MERELY A JOURNEY</Eyebrow>
          <Title>
            This is a journey from knowledge to <span className="font-light italic font-brush text-golden">wisdom</span>, in the lap of societal exposure.
          </Title>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SHIFTS.map(([from, to]) => (
            <div key={from} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-white/45 text-sm line-through decoration-white/25">{from}</div>
              <div className="flex items-center gap-2 mt-3">
                <i className="ri-arrow-down-line text-golden"></i>
                <span className="font-head font-extrabold text-xl">{to}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <Callout tone="emerald">
          <div className="md:flex items-center justify-between gap-8">
            <h3 className="font-head font-extrabold text-[26px] md:text-[36px] leading-tight max-w-[720px]">
              Don&apos;t just travel. Experience. Don&apos;t just return — come back as a different person.
            </h3>
            <a href="/register" className="mt-6 md:mt-0 shrink-0 inline-flex items-center gap-2 bg-white text-emerald px-8 py-4 rounded-full font-bold hover:bg-ivory transition">
              Become a Yaanik <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </Callout>
      </Section>
    </>
  )
}
