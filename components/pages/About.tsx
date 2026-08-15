import { Section, Eyebrow, Title, Lede, Body, Callout } from '@/components/page/Blocks'

const WHY = [
  ['ri-compass-3-line', 'Travel with Purpose', "Experience India's premier educational institutions."],
  ['ri-team-line', 'Learn Through Interaction', 'Meet students, mentors, top corporate professionals, celebrities, influencers, top bureaucrats, young political leaders, foreign ambassadors and global leaders.'],
  ['ri-ancient-gate-line', "Discover India's Glorious Heritage & Culture", 'Ancient monuments and temples, heritage sites, scintillating traditions, artistic crafts, classical & folk arts, living culture & vibrant nature.'],
  ['ri-user-star-line', 'Develop Leadership', 'Work in teams, create, communicate and take responsibility.'],
  ['ri-heart-3-line', 'Build Lifelong Memories', 'Experience and bag memories that stay with — and happily haunt — you for a lifetime.'],
]

const EDITIONS = [
  ['First', 'IIT Madras', 'Tamil Nadu', '120', 'Jan 2014'],
  ['Second', 'BITS Pilani', 'Rajasthan', '160', 'Oct 2014'],
  ['Third', 'IIT BHU, Varanasi', 'Uttar Pradesh', '110', 'Feb 2015'],
  ['Fourth', 'IIST Trivandrum', 'Kerala', '436', 'Oct 2015'],
  ['Fifth', 'IIM Ahmedabad', 'Gujarat', '216', 'Jan 2017'],
  ['Sixth', 'NIFAA Karnal', 'Haryana', '300', 'Dec 2017'],
  ['Seventh', 'IIM Kozhikode', 'Kerala', '350', 'Jan 2019'],
]

const HALL_OF_FAME = [
  'Pioneering the concept of inter-collegiate Knowledge Journeys connecting young minds with premier institutions across India.',
  'Exposure to the academic and innovation ecosystem of IIT Madras.',
  'Experiential learning and institutional interaction at BITS Pilani.',
  'Knowledge exchange and cultural exploration at IIT BHU, Varanasi.',
  'Academic, technological and cultural exposure at IIST Trivandrum.',
  'Leadership, entrepreneurship and management exposure at IIM Ahmedabad.',
  'Creative and cultural engagement through NIFAA Karnal.',
  'Knowledge and leadership experiences at IIM Kozhikode.',
  'Heritage Rally experiences conducted within the campuses of IIT Madras, BITS Pilani and IIST Trivandrum.',
  'Bringing the timeless stories of Chandamama alive through performances inside train bhogis.',
  'Turning long-distance train travel into an immersive Education on Wheels experience.',
  'Creating opportunities for interaction between Yaaniks and diverse student communities.',
  'Learning beyond classrooms through heritage, environment, arts, culture and social studies.',
  'Inspiring Yaaniks through Creative Talks and conversations with accomplished personalities.',
  'Connecting Yaaniks with experienced professionals through Meet Your Mentors sessions.',
  'Introducing the spirit of Edupreneurship by connecting creativity, heritage and arts with entrepreneurial thinking.',
  "Exploring India's traditional arts, crafts, performing traditions and living heritage.",
  "Bringing different classical art traditions together as a celebration of India's cultural diversity.",
  'Taking Yaaniks into villages to understand traditional lifestyles, livelihoods, values and local knowledge.',
  'Creating environmental awareness through activities focused on ecology, conservation and social responsibility.',
  "Celebrating India's traditional puppetry and indigenous performing arts.",
  'Nurturing communication, collaboration, creativity, leadership, initiative and problem-solving.',
  'Recognising individual growth through the Yaan Knowledge Quotient (YKQ) and YAANIK Excellence Evaluation Sheet (YEES).',
  'Building a diverse and growing Yaanik Community united by knowledge, culture and exploration.',
  'Creating journeys that turn travel into learning, destinations into classrooms and experiences into lifelong memories.',
]

export default function About() {
  return (
    <>
      {/* WHY — one tall lead card beside a stack of four */}
      <Section tone="white">
        <Eyebrow>WHY JIGNASA YAAN</Eyebrow>
        <Title className="text-midnight">Five reasons students <span className="font-light italic font-brush text-emerald">board the Yaan.</span></Title>
        <div className="mt-10 grid lg:grid-cols-[1.05fr_1fr] gap-6">
          <div className="bg-midnight text-white rounded-[28px] p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl"><i className={WHY[0][0]}></i></div>
              <h3 className="font-bold text-2xl mt-6">{WHY[0][1]}</h3>
              <p className="text-white/70 leading-relaxed mt-3 text-[17px]">{WHY[0][2]}</p>
            </div>
            <div className="mt-10 pt-6 border-t border-white/10 text-[13px] tracking-widest font-semibold text-golden">01 — 05</div>
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
      <Section tone="midnight">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
          <div>
            <Eyebrow tone="golden">THE MODERN DESAYATANA</Eyebrow>
            <Title>Jignasa Yaan is a <span className="font-light italic font-brush text-golden">Modern Desayatana.</span></Title>
          </div>
          <div className="text-white/75">
            <Body className="text-[17px] md:text-[18px]">Previously in medieval days, Desayatana was undertaken by princes and businessmen after education, before entering into professional life.</Body>
            <Body>On travelling the world with a specific purpose — meeting different kinds of people from different cultures, experiencing different climatic, geographical, historical and societal situations — the Yaaniks gain a valuable experience and glimpse of the world and its people.</Body>
            <div className="my-8 border-l-2 border-golden pl-6">
              <p className="font-head font-bold text-white text-[20px] md:text-[24px] leading-snug">
                With such knowledge-filled glimpse, the person on completion of Desayatana is ready to lead his professional life with wisdom and vision.
              </p>
            </div>
            <Body>To revive that fascinating ancient pedagogical tool, JIGNASA conducts the Modern Desayatana under the name Jignasa Yaan — helping Yaaniks experience activity and interaction based learning.</Body>
          </div>
        </div>
      </Section>

      {/* Legacy — institutions as a rail */}
      <Section tone="ivory" bordered>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>THE LEGACY · 2014–2026</Eyebrow>
            <Title className="text-midnight">Where the Yaan <span className="font-light italic font-brush text-emerald">has been.</span></Title>
          </div>
          <p className="max-w-[460px] text-black/60 leading-relaxed">Jignasa Yaan began in January 2014 with a journey to IIT Madras. Since then it has connected students with some of India&apos;s premier institutions.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {['IIT Madras', 'BITS Pilani', 'IIT BHU, Varanasi', 'IIST Trivandrum', 'IIM Ahmedabad', 'NIFAA Karnal', 'IIM Kozhikode'].map((inst, i) => (
            <div key={inst} className="bg-white rounded-2xl border border-black/5 p-5 shadow-sm">
              <div className="font-label font-bold text-emerald text-sm">{String(i + 1).padStart(2, '0')}</div>
              <div className="font-bold text-midnight leading-snug mt-2 text-[15px]">{inst}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* History table */}
      <Section tone="soft">
        <Eyebrow>HISTORY OF JIGNASA YAAN</Eyebrow>
        <Title className="text-midnight">Seven editions, <span className="font-light italic font-brush text-emerald">1,692 Yaaniks.</span></Title>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-black/5 bg-white">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-midnight text-white text-[11px] tracking-widest font-bold">
                {['YAAN NO.', 'INSTITUTION', 'STATE', 'PARTICIPANTS', 'DATE'].map(h => (
                  <th key={h} className="px-5 py-4 font-bold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {EDITIONS.map(row => (
                <tr key={row[0]} className="border-t border-black/5">
                  <td className="px-5 py-4 font-bold text-midnight">{row[0]}</td>
                  <td className="px-5 py-4">{row[1]}</td>
                  <td className="px-5 py-4 text-black/60">{row[2]}</td>
                  <td className="px-5 py-4 font-label font-bold text-emerald">{row[3]}</td>
                  <td className="px-5 py-4 text-black/60">{row[4]}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-midnight bg-[#F5F7FA] font-bold text-midnight">
                <td className="px-5 py-4">TOTAL</td>
                <td className="px-5 py-4">7 Yaan Editions</td>
                <td className="px-5 py-4">6 States</td>
                <td className="px-5 py-4 font-label">1,692</td>
                <td className="px-5 py-4">2014–2019</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* Hall of fame — dense two-column ledger */}
      <Section tone="white" bordered>
        <Eyebrow>HALL OF FAME</Eyebrow>
        <Title className="text-midnight">What the Yaan <span className="font-light italic font-brush text-emerald">has done.</span></Title>
        <ol className="mt-8 grid md:grid-cols-2 gap-x-10 gap-y-0">
          {HALL_OF_FAME.map((item, i) => (
            <li key={i} className="flex gap-4 py-4 border-b border-black/5">
              <span className="shrink-0 font-label font-bold text-[13px] text-emerald pt-0.5 w-7">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-[15px] leading-relaxed text-charcoal/75">{item}</span>
            </li>
          ))}
        </ol>
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
