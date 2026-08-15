import { Section, Eyebrow, Title, Body } from '@/components/page/Blocks'

const STUDY = [
  ['Case studying', 'The craft is treated as a subject, with a method.'],
  ['Learning', 'Technique observed at the bench, from the person who knows it.'],
  ['Interacting', 'Conversation with craftsmen and artisans about their creative pursuits.'],
]

const ENQUIRY = [
  ['Creative pursuit', 'What goes into making such beautiful handicrafts.', 'ri-hand-heart-line'],
  ['Means of marketing', 'How matchless work reaches a buyer.', 'ri-store-2-line'],
  ['Support received', 'What government enterprises and NGOs provide on economical frontiers.', 'ri-government-line'],
]

/** Split page: a dark statement rail on the left, the enquiry stacked on the right. */
export default function CraftingKerala() {
  return (
    <>
      <Section tone="white">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div className="bg-midnight text-white rounded-[28px] p-8 md:p-12 flex flex-col justify-between">
            <div>
              <Eyebrow tone="golden">THE BRIEF</Eyebrow>
              <h2 className="font-head font-extrabold text-[28px] md:text-[40px] leading-[1.02] mt-5">
                Study the age-old crafts of Kerala — then enterprise them on a{' '}
                <span className="font-light italic font-brush text-golden">global note.</span>
              </h2>
            </div>
            <div className="mt-10 space-y-3">
              {STUDY.map(([t, d], i) => (
                <div key={t} className="flex gap-4 border-t border-white/10 pt-3">
                  <span className="font-label font-bold text-golden text-sm w-6 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <div className="font-bold">{t}</div>
                    <div className="text-white/60 text-sm mt-0.5">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <Eyebrow>WHAT YAANIKS ASK</Eyebrow>
              <Title className="text-midnight">Three questions <span className="font-light italic font-brush text-emerald">per artisan.</span></Title>
            </div>
            {ENQUIRY.map(([title, text, icon]) => (
              <div key={title} className="bg-[#F5F7FA] rounded-2xl p-6 border border-black/5 flex gap-5">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-white text-emerald flex items-center justify-center text-2xl border border-black/5"><i className={icon}></i></div>
                <div>
                  <h3 className="font-bold text-midnight">{title}</h3>
                  <p className="text-[15px] text-black/60 leading-relaxed mt-1.5">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
