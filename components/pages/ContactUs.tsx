import { Section, Eyebrow, Title, Body, Callout } from '@/components/page/Blocks'

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
            <div key={title} className={`rounded-2xl p-6 border ${i === 0 ? 'bg-white border-black/5 shadow-[0_18px_50px_rgba(8,27,51,0.10)] lg:row-span-2 flex flex-col justify-between' : 'bg-[#F5F7FA] border-black/5'}`}>
              <div>
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl ${i === 0 ? 'bg-emerald/10 text-emerald' : 'bg-white text-emerald border border-black/5'}`}>
                  <i className={icon}></i>
                </div>
                <h3 className={`font-head font-extrabold text-midnight mt-4 ${i === 0 ? 'text-2xl' : 'text-lg'}`}>{title}</h3>
                <p className="text-sm leading-relaxed mt-2 text-black/60">{text}</p>
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
            <a href="mailto:yaan@jignasayaan.in" className="flex items-center gap-4 p-6 hover:bg-[#F5F7FA] transition-colors">
              <i className="ri-mail-line text-2xl text-emerald"></i>
              <div>
                <div className="text-[11px] tracking-widest font-bold text-black/40">EMAIL</div>
                <div className="font-bold text-midnight">yaan@jignasayaan.in</div>
              </div>
              <i className="ri-arrow-right-up-line ml-auto text-black/25"></i>
            </a>
            <a href="tel:+919000011223" className="flex items-center gap-4 p-6 hover:bg-[#F5F7FA] transition-colors">
              <i className="ri-phone-line text-2xl text-emerald"></i>
              <div>
                <div className="text-[11px] tracking-widest font-bold text-black/40">PHONE</div>
                <div className="font-bold text-midnight">+91 90000 11223</div>
              </div>
              <i className="ri-arrow-right-up-line ml-auto text-black/25"></i>
            </a>
          </div>
        </div>
      </Section>

      <Section tone="ivory">
        <Callout tone="emerald">
          <div className="md:flex items-center justify-between gap-8">
            <div>
              <h3 className="font-head font-extrabold text-[28px] md:text-[38px] leading-tight">
                We would love to hear from you.
              </h3>
              <p className="mt-3 text-white/85 max-w-[560px] leading-relaxed">
                Write to us at yaan@jignasayaan.in or call +91 90000 11223 — or start your journey straight away by
                registering as a Yaanik.
              </p>
            </div>
            <div className="mt-6 md:mt-0 shrink-0 flex flex-wrap gap-3">
              <a
                href="mailto:yaan@jignasayaan.in"
                className="inline-flex items-center gap-2 bg-white text-emerald px-8 py-4 rounded-full font-bold hover:bg-ivory transition"
              >
                Get in Touch <i className="ri-mail-line"></i>
              </a>
              <a
                href="/register"
                className="inline-flex items-center gap-2 border border-white/40 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition"
              >
                Register
              </a>
            </div>
          </div>
        </Callout>
      </Section>
    </>
  )
}
