import { Section, Eyebrow, Title, Body, Callout } from '@/components/page/Blocks'

const ACTIVITIES = [
  ['Decorating the Bhogi', 'Each carriage is dressed to a UNESCO theme by the team that travels in it.', 'ri-paint-brush-line'],
  ['Mana Chandamama Kathalu', 'Short skits staged in the aisle, bringing the timeless Chandamama stories alive inside the train.', 'ri-book-open-line'],
  ['Edupreneurship', 'Need of the hour — fine arts, culture and heritage entrepreneurship building activities.', 'ri-lightbulb-flash-line'],
  ['Creative Talks', 'Open-floor conversations that run as the landscape changes outside the window.', 'ri-chat-voice-line'],
  ['Meet Your Mentors', 'Mentors guide Yaaniks on career opportunities, campus placement procedures and preparation.', 'ri-user-voice-line'],
]

export default function EventsOnTrain() {
  return (
    <>
      {/* Two framing facts, stated large */}
      <Section tone="white">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#F5F7FA] rounded-[28px] p-8 md:p-10 border border-black/5">
            <div className="font-label font-bold text-[52px] md:text-[68px] leading-none text-midnight">15</div>
            <div className="text-[11px] tracking-[0.18em] font-bold text-emerald mt-2">MEMBERS PER TEAM</div>
            <p className="text-[15px] leading-relaxed text-black/60 mt-4">
              Participants are categorised into teams of fifteen. Each team contains representatives and delegates drawn from
              every participating college, so no one travels only with the people they arrived with.
            </p>
          </div>
          <div className="bg-white rounded-[28px] p-8 md:p-10 border border-black/5 shadow-[0_18px_50px_rgba(8,27,51,0.10)]">
            <div className="font-label font-bold text-[52px] md:text-[68px] leading-none text-saffron">1</div>
            <div className="text-[11px] tracking-[0.18em] font-bold text-saffron mt-2">MENTOR PER TEAM</div>
            <p className="text-[15px] leading-relaxed text-black/60 mt-4">
              Mentors come from the corporate field and elite institutions — entrepreneurs, HR managers, developers, project
              managers, technical leads and resource persons with innovative creative backgrounds.
            </p>
          </div>
        </div>
      </Section>

      {/* Activities laid out as a carriage strip */}
      <Section tone="ivory" bordered>
        <Eyebrow>ON-BOARD PROGRAMME</Eyebrow>
        <Title className="text-midnight">Five things happening <span className="font-light italic font-brush text-emerald">between stations.</span></Title>

        <div className="mt-10 relative">
          <div className="hidden lg:block absolute left-0 right-0 top-[38px] h-px bg-black/10"></div>
          <div className="grid lg:grid-cols-5 gap-5">
            {ACTIVITIES.map(([title, text, icon], i) => (
              <div key={title} className="relative">
                <div className="w-[76px] h-[76px] rounded-2xl bg-white border border-black/5 shadow-sm flex items-center justify-center text-2xl text-emerald relative z-10">
                  <i className={icon}></i>
                </div>
                <div className="font-label font-bold text-xs text-black/35 mt-4">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="font-bold text-midnight leading-snug mt-1">{title}</h3>
                <p className="text-sm leading-relaxed text-black/60 mt-2">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="white">
        <Callout>
          <div className="text-[11px] tracking-[0.18em] font-bold text-emerald">TO &amp; FRO JOURNEY</div>
          <h3 className="font-head font-extrabold text-[26px] md:text-[34px] leading-tight text-midnight mt-3 max-w-[820px]">
            The train is not the gap between two places. It is the first venue of the Yaan.
          </h3>
        </Callout>
      </Section>
    </>
  )
}
