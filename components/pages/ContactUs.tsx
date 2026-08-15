import { Section, Eyebrow, Title, Body } from '@/components/page/Blocks'

const AUDIENCES = [
  ['STUDENTS', 'For knowledge exchange, experiential learning and participation in the Jignasa Yaan journey.', 'ri-graduation-cap-line'],
  ['YOUTH', 'For experiencing culture, heritage, arts, innovation, leadership and life skills.', 'ri-user-smile-line'],
  ['CORPORATE PROFESSIONALS', 'For knowledge exchange, creative leadership, innovation and professional engagement.', 'ri-briefcase-line'],
  ['YOUNG ENTREPRENEURS', 'For entrepreneurship, innovation, creative leadership and knowledge exchange opportunities.', 'ri-rocket-line'],
  ['DOCTORS', 'For knowledge exchange, cultural experiences, leadership, innovation and life skills.', 'ri-stethoscope-line'],
]

export default function ContactUs() {
  return (
    <>
      <Section tone="white">
        <div className="max-w-[760px]">
          <Eyebrow>CONNECT WITH JIGNASA</Eyebrow>
          <Title className="text-midnight">Who are you <span className="font-light italic font-brush text-emerald">coming as?</span></Title>
          <Body className="text-black/60">
            Interested in becoming a YAANIK? Want to experience the wider world through knowledge exchange, culture, heritage,
            arts, entrepreneurship, creative leadership, innovation and life skills? We would love to hear from you.
          </Body>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {AUDIENCES.map(([title, text, icon], i) => (
            <div key={title} className={`rounded-2xl p-6 border ${i === 0 ? 'bg-midnight text-white border-transparent lg:row-span-2 flex flex-col justify-between' : 'bg-[#F5F7FA] border-black/5'}`}>
              <div>
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl ${i === 0 ? 'bg-white/10 text-golden' : 'bg-white text-emerald border border-black/5'}`}>
                  <i className={icon}></i>
                </div>
                <h3 className={`font-head font-extrabold mt-4 ${i === 0 ? 'text-2xl' : 'text-lg text-midnight'}`}>{title}</h3>
                <p className={`text-sm leading-relaxed mt-2 ${i === 0 ? 'text-white/70' : 'text-black/60'}`}>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft" bordered>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Eyebrow>CONTACT</Eyebrow>
            <Title className="text-midnight">Jignasa Yaan</Title>
          </div>
          <div className="bg-white rounded-[24px] border border-black/5 divide-y divide-black/5">
            <a href="https://www.jignasa.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 hover:bg-[#F5F7FA] transition-colors">
              <i className="ri-global-line text-2xl text-emerald"></i>
              <div>
                <div className="text-[11px] tracking-widest font-bold text-black/40">WEBSITE</div>
                <div className="font-bold text-midnight">www.jignasa.org</div>
              </div>
              <i className="ri-arrow-right-up-line ml-auto text-black/25"></i>
            </a>
            <div className="flex items-center gap-4 p-6">
              <i className="ri-mail-line text-2xl text-emerald"></i>
              <div>
                <div className="text-[11px] tracking-widest font-bold text-black/40">EMAIL</div>
                <div className="font-bold text-midnight/40 italic">Official email to be published</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6">
              <i className="ri-phone-line text-2xl text-emerald"></i>
              <div>
                <div className="text-[11px] tracking-widest font-bold text-black/40">PHONE</div>
                <div className="font-bold text-midnight/40 italic">Official contact number to be published</div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
