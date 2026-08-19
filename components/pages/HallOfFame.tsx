import { Section, Eyebrow, Title, Body } from '@/components/page/Blocks'

/**
 * All twenty-seven entries, in the content document's order and wording. The three
 * Heritage Rally lines are separate entries there — one per campus — and are kept
 * separate here rather than collapsed into one.
 */
const HALL_OF_FAME = [
  'Pioneering the concept of inter-collegiate Knowledge Journeys connecting young minds with premier institutions across India.',
  'Exposure to the academic and innovation ecosystem of IIT Madras.',
  'Experiential learning and institutional interaction at BITS Pilani.',
  'Knowledge exchange and cultural exploration at IIT BHU, Varanasi.',
  'Academic, technological and cultural exposure at IIST Trivandrum.',
  'Leadership, entrepreneurship and management exposure at IIM Ahmedabad.',
  'Creative and cultural engagement through NIFAA Karnal.',
  'Knowledge and leadership experiences at IIM Kozhikode.',
  'Heritage Rally experiences conducted within the campus of IIT Madras.',
  'Heritage Rally experiences conducted within the campus of BITS Pilani.',
  'Heritage Rally experiences conducted within the campus of IIST Trivandrum.',
  'Bringing the timeless stories of Chandamama alive through performances inside train bhogis.',
  'Turning long-distance train travel into an immersive Education on Wheels experience.',
  'Creating opportunities for interaction between Yaaniks and diverse student communities from premier institutions.',
  'Learning beyond classrooms through heritage, environment, arts, culture and social studies.',
  'Inspiring Yaaniks through Creative Talks and conversations with accomplished personalities.',
  'Connecting Yaaniks with experienced professionals through Meet Your Mentors sessions.',
  'Introducing the spirit of Edupreneurship by connecting creativity, heritage, arts and culture with entrepreneurial thinking.',
  "Exploring India's traditional arts, crafts, performing traditions and living heritage through direct experiences.",
  "Bringing different classical art traditions together as a celebration of India's cultural diversity.",
  'Taking Yaaniks into villages and communities to understand traditional lifestyles, livelihoods, values and local knowledge.',
  'Creating environmental awareness through experiential activities focused on ecology, conservation and social responsibility.',
  "Celebrating India's traditional puppetry and indigenous performing arts by connecting Yaaniks with artists and practitioners.",
  'Nurturing communication, collaboration, creativity, leadership, initiative and problem-solving through real-world experiences.',
  'Recognising individual participation and growth through the Yaan Knowledge Quotient (YKQ) and YAANIK Excellence Evaluation Sheet (YEES).',
  'Building a diverse and growing Yaanik Community united by knowledge, culture, creativity, exploration and shared experiences.',
  'Creating journeys that transform travel into learning, destinations into classrooms and experiences into lifelong memories.',
]

export default function HallOfFame() {
  return (
    <Section tone="white">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[640px]">
          <Eyebrow>HALL OF FAME</Eyebrow>
          <Title className="text-midnight">What the Yaan <span className="font-light italic font-brush text-emerald">has done.</span></Title>
        </div>
        <div className="bg-[#F5F7FA] rounded-2xl px-6 py-4 border border-black/5">
          <div className="font-label font-bold text-2xl text-emerald leading-none">{HALL_OF_FAME.length}</div>
          <div className="text-[11px] tracking-widest font-semibold text-black/50 mt-1">ENTRIES</div>
        </div>
      </div>

      <Body className="text-black/60 max-w-[820px]">
        The full record of what seven editions of the Knowledge Journey have built — campus by campus, craft by craft.
      </Body>

      <ol className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-0">
        {HALL_OF_FAME.map((item, i) => (
          <li key={i} className="flex gap-4 py-4 border-b border-black/5">
            <span className="shrink-0 font-label font-bold text-[13px] text-emerald pt-0.5 w-7">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="text-[15px] leading-relaxed text-charcoal/75">{item}</span>
          </li>
        ))}
      </ol>
    </Section>
  )
}
