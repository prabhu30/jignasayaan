import { Section, Eyebrow, Title, Body } from '@/components/page/Blocks'

const FAQS: [string, string][] = [
  ['What is Jignasa Yaan?', 'Jignasa Yaan is a Knowledge Journey that combines travel, experiential learning, cultural interaction, heritage, arts, leadership and student networking.'],
  ['What is a YAANIK?', 'A YAANIK is a student participant of Jignasa Yaan.'],
  ['Is Jignasa Yaan a tourism trip?', 'No. It is an educational and experiential Knowledge Journey.'],
  ['Who can participate?', 'Students who meet the eligibility requirements of the particular YAAN edition can participate.'],
  ['What happens on the train?', 'Students participate in mentoring, cultural activities, creative activities, cross-college interaction, skits, poster making and other learning experiences.'],
  ['What happens at the destination?', 'Students participate in campus festivals, heritage activities, case studies, cultural experiences, environmental learning and institutional interactions.'],
  ['Will students visit premier institutions?', 'The destination varies by YAAN edition. Historically Jignasa Yaan has travelled to IIT Madras, BITS Pilani, IIT BHU, IIST and programs connected with IIM Ahmedabad.'],
  ['Is there a selection process?', 'The historical YAAN model included registration, telephonic interaction, selection and confirmation.'],
  ['Will students receive certificates?', 'Jignasa Yaan has historically provided YAANIK certificates recognising participation and creative leadership development.'],
  ['What should students gain from the YAAN?', 'Students are expected to develop broader perspectives, cultural awareness, communication, teamwork, leadership, creativity, social understanding and life skills.'],
  ['Why is it called the Modern Desayatana?', 'Because it revives the idea of a purposeful journey undertaken to understand the wider world before entering professional life.'],
]

/** Native <details> accordion — no client JS needed for a content page. */
export default function Faqs() {
  return (
    <Section tone="soft">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
        <div className="lg:sticky lg:top-32 self-start">
          <Eyebrow>FAQ</Eyebrow>
          <Title className="text-midnight">Clarity before <span className="font-light italic font-brush text-emerald">you board.</span></Title>
          <Body className="text-black/60">Everything students, parents and institutions ask — answered plainly.</Body>
          <div className="mt-6 bg-white rounded-2xl p-5 border border-black/5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald text-white flex items-center justify-center shrink-0"><i className="ri-customer-service-line text-xl"></i></div>
            <div>
              <div className="font-bold text-midnight">Need human help?</div>
              <div className="text-sm text-black/60">Reach us through the Contact page.</div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {FAQS.map(([q, a], i) => (
            <details key={q} className="group bg-white rounded-2xl border border-black/5 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="cursor-pointer list-none p-5 flex items-start justify-between gap-4 font-semibold text-midnight">
                <span className="flex gap-4">
                  <span className="font-label font-bold text-[13px] text-emerald pt-0.5">{String(i + 1).padStart(2, '0')}</span>
                  {q}
                </span>
                <i className="ri-add-line text-xl shrink-0 transition-transform group-open:rotate-45"></i>
              </summary>
              <div className="px-5 pb-5 pl-[52px] text-[15px] leading-relaxed text-black/60">{a}</div>
            </details>
          ))}
        </div>
      </div>
    </Section>
  )
}
