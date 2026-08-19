import { Section, Eyebrow, Title, Body, Callout } from '@/components/page/Blocks'

const WHY = [
  ['ri-compass-3-line', 'Travel with Purpose', "Experience India's premier educational institutions."],
  ['ri-team-line', 'Learn Through Interaction', 'Meet students, mentors, top corporate professionals, celebrities, influencers, top bureaucrats, young political leaders, foreign ambassadors and global leaders.'],
  ['ri-ancient-gate-line', "Discover India's Glorious Heritage & Culture", 'Ancient monuments and temples, heritage sites, scintillating traditions, artistic crafts, classical & folk arts, living culture & vibrant nature.'],
  ['ri-user-star-line', 'Develop Leadership', 'Work in teams, create, communicate and take responsibility.'],
  ['ri-heart-3-line', 'Build Lifelong Memories', 'Experience and bag memories that stay with — and happily haunt — you for a lifetime.'],
]

export default function About() {
  return (
    <>
      {/* WHY — one tall lead card beside a stack of four */}
      <Section tone="white">
        <Eyebrow>WHY JIGNASA YAAN</Eyebrow>
        <Title className="text-midnight">Five reasons students <span className="font-light italic font-brush text-emerald">board the Yaan.</span></Title>
        <div className="mt-10 grid lg:grid-cols-[1.05fr_1fr] gap-6">
          <div className="bg-white rounded-[28px] p-8 md:p-10 border border-black/5 shadow-[0_18px_50px_rgba(8,27,51,0.10)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald/10 text-emerald flex items-center justify-center text-2xl"><i className={WHY[0][0]}></i></div>
              <h3 className="font-bold text-2xl text-midnight mt-6">{WHY[0][1]}</h3>
              <p className="text-black/60 leading-relaxed mt-3 text-[17px]">{WHY[0][2]}</p>
            </div>
            <div className="mt-10 pt-6 border-t border-black/10 text-[13px] tracking-widest font-semibold text-emerald">01 — 05</div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {WHY.slice(1).map(([icon, title, text]) => (
              <div key={title} className="bg-[#F5F7FA] rounded-2xl p-6 border border-black/5">
                <div className="w-10 h-10 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center text-xl"><i className={icon}></i></div>
                <h3 className="font-bold mt-4 text-midnight leading-snug">{title}</h3>
                <p className="text-sm text-black/60 leading-relaxed mt-2">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Modern Desayatana — editorial column with a pulled statement */}
      <Section tone="paper">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
          <div>
            <Eyebrow>THE MODERN DESAYATANA</Eyebrow>
            <Title className="text-midnight">Jignasa Yaan is a <span className="font-light italic font-brush text-emerald">Modern Desayatana.</span></Title>
          </div>
          <div className="text-charcoal/75">
            <Body className="text-[17px] md:text-[18px]">Previously in medieval days, Desayatana was undertaken by princes and businessmen after education, before entering into professional life.</Body>
            <Body>On travelling the world with a specific purpose — meeting different kinds of people from different cultures, experiencing different climatic, geographical, historical and societal situations — the Yaaniks gain a valuable experience and glimpse of the world and its people.</Body>
            <div className="my-8 border-l-2 border-emerald pl-6">
              <p className="font-head font-bold text-midnight text-[20px] md:text-[24px] leading-snug">
                With such a knowledge-filled glimpse, the person on completion of Desayatana is ready to lead his professional life with wisdom and vision — and to live life with satisfaction and happiness in the different situations and circumstances life presents.
              </p>
            </div>
            <Body>To revive that fascinating ancient pedagogical tool, JIGNASA conducts the Modern Desayatana under the name Jignasa Yaan — helping Yaaniks experience activity and interaction based learning and knowledge.</Body>
            <Body>The participants of Jignasa Yaan, termed YAANIKs, experience activity based learning through a creative and inspiration-filled encounter with the places and people of Indian arts, villages, culture, heritage, environment and social responsibility, as part of their Knowledge Journey.</Body>
          </div>
        </div>
      </Section>

      {/* The three record sections now live as their own pages */}
      <Section tone="ivory" bordered>
        <div className="max-w-[760px]">
          <Eyebrow>THE RECORD</Eyebrow>
          <Title className="text-midnight">Twelve years, <span className="font-light italic font-brush text-emerald">on the record.</span></Title>
          <Body className="text-black/60">
            Where the Yaan has been, every edition it has run, and everything it has built along the way.
          </Body>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[
            ['/the-jignasa-yaan-legacy', 'THE JIGNASA YAAN LEGACY', 'Seven premier institutions', 'IIT Madras in 2014 through to IIM Kozhikode — and the cultural environments around each.'],
            ['/history-of-jignasa-yaan', 'HISTORY OF JIGNASA YAAN', 'Seven editions, 1,692 Yaaniks', 'Every Yaan edition by institution, state, participant count and date.'],
            ['/hall-of-fame', 'HALL OF FAME', 'Twenty-seven achievements', 'The full record of what the Knowledge Journey has built since 2014.'],
          ].map(([href, kicker, title, text]) => (
            <a
              key={href}
              href={href}
              className="group bg-white rounded-[24px] p-7 border border-black/5 shadow-[0_18px_50px_rgba(8,27,51,0.10)] transition hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="text-[11px] tracking-[0.18em] font-bold text-emerald">{kicker}</div>
                <i className="ri-arrow-right-up-line text-xl text-black/25 group-hover:text-emerald transition-colors"></i>
              </div>
              <h3 className="font-head font-extrabold text-[21px] text-midnight leading-snug mt-3">{title}</h3>
              <p className="text-[15px] leading-relaxed text-black/60 mt-2">{text}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section tone="ivory">
        <Callout tone="emerald">
          <div className="md:flex items-center justify-between gap-8">
            <div>
              <h3 className="font-head font-extrabold text-[28px] md:text-[38px] leading-tight">Become a Yaanik.</h3>
              <p className="mt-3 text-white/85 max-w-[560px] leading-relaxed">A YAANIK is more than a participant. A YAANIK is a student who chooses to explore, interact, create, learn and lead.</p>
            </div>
            <a href="/register" className="mt-6 md:mt-0 shrink-0 inline-flex items-center gap-2 bg-white text-emerald px-8 py-4 rounded-full font-bold hover:bg-ivory transition">
              Register Now <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </Callout>
      </Section>
    </>
  )
}
