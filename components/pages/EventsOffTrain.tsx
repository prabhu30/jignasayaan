import { Section, Eyebrow, Title, Lede, Body } from '@/components/page/Blocks'

/**
 * The whole off-train programme on one page. Items 02, 04, 05, 07 and 09 each had a
 * page of their own until the content document was revised to list them as points of
 * this section, so their detail is carried here as `points` rather than behind a link.
 */
const PROGRAMME: {
  n: string
  title: string
  text: string
  points?: string[]
  partner?: string
}[] = [
  {
    n: '01',
    title: 'Events at Thiruvananthapuram',
    text: 'Yaaniks are engaged to participate in events at Thiruvananthapuram, Kerala, across the curated destination premises for the duration of the permitted stay.',
  },
  {
    n: '02',
    title: 'A Grand Heritage & Cult Carnival',
    text: 'A tribute to Dr. APJ Abdul Kalam, with Yaaniks carrying the message of Indian glory and spirit in the lines and dreams of Dr. Kalam. The Heritage Rally runs under the theme Youth for Civic Engagement.',
    points: ['Street plays', 'Classical dance forms', 'Festoons', 'Play cards'],
    partner: 'UN Youth',
  },
  {
    n: '03',
    title: 'Human Development Index Survey',
    text: "Surveying native villages of Kerala on the UN's Human Development Index, experiencing rural Kerala first hand. The survey reports are sent to UN DSDO and the Prime Minister's Office, New Delhi.",
    points: ['Habits', 'Habitat', 'Lifestyle', 'Etiquette', 'Ethos', 'Ethics', 'Economics'],
    partner: 'UN Youth',
  },
  {
    n: '04',
    title: 'The Great Indian Dancing Festival',
    text: 'Documenting the age-old art and artisans of India’s classical forms and preparing a documentary on them, surveying the life of Kathakali dancers and the love they hold towards the dance. As a cross-culture initiative, Bharatanatyam, Kuchipudi and Kathakali dancers perform the same dance drama at once — leaving the Yaaniks to judge between three great traditions at a single glance.',
    points: ['Kathakali', 'Kuchipudi', 'Bharatanatyam', 'Mohiniattam'],
    partner: 'INTACH',
  },
  {
    n: '05',
    title: 'Crafting Kerala',
    text: 'Studying the age-old traditional handicrafts and arts of Kerala and enterprising them on a global note — case studying, learning and interacting with the craftsmen and artisans behind the work.',
    points: ['Their creative pursuits', 'Means of marketing their matchless work', 'Support from government enterprises and NGOs'],
  },
  {
    n: '06',
    title: 'Grand Puppetry Festival',
    text: 'Puppetry shows with the famous and ancient puppetry artists of Andhra Pradesh, Telangana and Tamil Nadu, helping budding creative leaders form an enticing bond with Indian art and the artists for whom art is not just a part but the heart of their life.',
  },
  {
    n: '07',
    title: "Ecology @ India's Own Country",
    text: 'Experiencing the ecology and environment of Kerala through visits to native villages, with Yaaniks in props and face paints performing street plays in teams of twenty.',
    points: ['Save Birds', 'Save Livestock', 'Save Environment'],
    partner: 'Youth Hostels International · NYC, Ministry of Youth Affairs',
  },
  {
    n: '08',
    title: 'Kalaripayattu Experience',
    text: 'Witnessing and participating in an immersive encounter with Kerala’s ancient martial art tradition, interacting with traditional practitioners along the way.',
    points: ['Discipline', 'Techniques', 'Movements', 'Cultural significance', 'Heritage'],
  },
  {
    n: '09',
    title: 'Case Study on Anantha Padmanabha Swamy Temple',
    text: 'Studying the world-famous temple at Trivandrum by visiting the museum and learning from resource persons, filling in the innovative questionnaire each Yaanik carries.',
    points: ['Mysteries', 'History', 'Heritage'],
  },
]

export default function EventsOffTrain() {
  return (
    <>
      <Section tone="white">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
          <div className="max-w-[760px]">
            <Eyebrow>OFF-TRAIN PROGRAMME</Eyebrow>
            <Title className="text-midnight">Nine ways the destination <span className="font-light italic font-brush text-emerald">becomes the classroom.</span></Title>
            <Lede className="text-charcoal/70">
              Yaaniks participate in educational, cultural, heritage and experiential activities through their Knowledge
              Journey in Thiruvananthapuram — promoting knowledge exchange, culture, heritage, arts experience,
              entrepreneurship, creative leadership, innovation and life skills.
            </Lede>
          </div>
          <div className="bg-midnight text-white rounded-2xl px-6 py-5 shrink-0">
            <div className="text-[11px] tracking-[0.18em] font-bold text-golden">DATES OF THE YAAN</div>
            <div className="font-label font-bold text-xl mt-1">Dec 08 – Dec 15, 2026</div>
            <div className="text-white/60 text-sm mt-1">Thiruvananthapuram, Kerala</div>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {PROGRAMME.map(item => (
            <div key={item.n} className="bg-[#F5F7FA] rounded-2xl p-6 md:p-7 border border-black/5 flex flex-col">
              <span className="font-label font-bold text-[13px] text-emerald">{item.n}</span>
              <h3 className="font-head font-extrabold text-[19px] md:text-[21px] text-midnight leading-snug mt-3">{item.title}</h3>
              <p className="text-[15px] leading-relaxed text-black/60 mt-3">{item.text}</p>
              {item.points && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.points.map(p => (
                    <li key={p} className="px-3 py-1.5 rounded-full text-[13px] font-semibold bg-white text-midnight border border-black/5">
                      {p}
                    </li>
                  ))}
                </ul>
              )}
              {item.partner && (
                <div className="mt-auto pt-4 text-[11px] tracking-widest font-bold text-black/40">
                  <span className="block border-t border-black/5 pt-3">WITH {item.partner.toUpperCase()}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
          <div>
            <Eyebrow>EVALUATION</Eyebrow>
            <Title className="text-midnight">Every Yaanik is <span className="font-light italic font-brush text-emerald">reviewed.</span></Title>
          </div>
          <div className="text-charcoal/75">
            <Body>
              Yaaniks are evaluated on their participation by their allocated mentors and awarded a Yaan Knowledge Quotient
              (YKQ) in CGPA terms — assessing inquiry, initiative, innovation, crisis management, behaviour, operations,
              teamwork, team building, creativity and leadership through the YAANIK Excellency Evaluation Sheet (YEES).
            </Body>
          </div>
        </div>
      </Section>
    </>
  )
}
