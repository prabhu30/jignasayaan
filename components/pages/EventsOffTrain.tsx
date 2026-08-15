import Link from 'next/link'
import { Section, Eyebrow, Title, Body } from '@/components/page/Blocks'

/** Hub page: the full off-train programme, with the five activities that have
 *  their own pages linking through and the rest detailed inline. */
const PROGRAMME: { n: string; title: string; text: string; href?: string; partner?: string }[] = [
  { n: '01', title: 'Events at Thiruvananthapuram', text: 'Yaaniks participate in events across the curated destination premises for the duration of the permitted stay.' },
  { n: '02', title: 'A Grand Heritage & Cult Carnival', text: 'A tribute to Dr. APJ Abdul Kalam — street plays, classical dance forms, festoons and play cards carrying the message of Indian glory.', href: '/intach-heritage-rally', partner: 'UN Youth' },
  { n: '03', title: 'Human Development Index Survey', text: "Surveying native Kerala villages on the UN's Human Development Index — habits, habitat, lifestyle, etiquette, ethos, ethics and economics. Reports are sent to UN DSDO and the Prime Minister's Office.", partner: 'UN Youth' },
  { n: '04', title: 'The Great Indian Dancing Festival', text: 'Documenting the age-old art and artisans of Kathakali, Kuchipudi, Bharatanatyam and Mohiniattam.', href: '/kathakali-festival', partner: 'INTACH' },
  { n: '05', title: 'Crafting Kerala', text: 'Studying the age-old traditional handicrafts of Kerala and enterprising them on a global note.', href: '/crafting-kerala' },
  { n: '06', title: 'Grand Puppetry Festival', text: 'Puppetry shows with famous and ancient puppetry artists of Andhra Pradesh, Telangana and Tamil Nadu — helping budding creative leaders form an enduring affection for Indian art and artists.' },
  { n: '07', title: "Ecology @ India's Own Country", text: 'Village visits with props, face paints and street plays in teams of twenty — Save Birds, Save Livestock, Save Environment.', href: '/ecology-at-gods-own-country', partner: 'Youth Hostels International · NYC' },
  { n: '08', title: 'Kalaripayattu Experience', text: 'An immersive encounter with Kerala’s ancient martial art — discipline, technique, movement and the heritage carried by its traditional practitioners.' },
  { n: '09', title: 'Case Study: Anantha Padmanabha Swamy Temple', text: 'Studying the mysteries, history and heritage of the world-famous temple at Trivandrum.', href: '/case-study-anantha-padmanabha-swamy-temple' },
]

export default function EventsOffTrain() {
  return (
    <>
      <Section tone="white">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
          <div className="max-w-[720px]">
            <Eyebrow>OFF-TRAIN PROGRAMME</Eyebrow>
            <Title className="text-midnight">Nine ways the destination <span className="font-light italic font-brush text-emerald">becomes the classroom.</span></Title>
          </div>
          <div className="bg-midnight text-white rounded-2xl px-6 py-5 shrink-0">
            <div className="text-[11px] tracking-[0.18em] font-bold text-golden">DATES OF THE YAAN</div>
            <div className="font-label font-bold text-xl mt-1">Dec 08 – Dec 15, 2026</div>
            <div className="text-white/60 text-sm mt-1">Thiruvananthapuram, Kerala</div>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {PROGRAMME.map(item => {
            const inner = (
              <>
                <div className="flex items-start justify-between gap-3">
                  <span className="font-label font-bold text-[13px] text-emerald">{item.n}</span>
                  {item.href && <i className="ri-arrow-right-up-line text-xl text-black/25 group-hover:text-emerald transition-colors"></i>}
                </div>
                <h3 className="font-bold text-midnight leading-snug mt-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-black/60 mt-2">{item.text}</p>
                {item.partner && (
                  <div className="mt-4 pt-3 border-t border-black/5 text-[11px] tracking-widest font-bold text-black/40">
                    WITH {item.partner.toUpperCase()}
                  </div>
                )}
              </>
            )
            const base = 'block bg-[#F5F7FA] rounded-2xl p-6 border border-black/5 h-full'
            return item.href ? (
              <Link key={item.n} href={item.href} className={`${base} group hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all`}>{inner}</Link>
            ) : (
              <div key={item.n} className={base}>{inner}</div>
            )
          })}
        </div>
      </Section>

      <Section tone="midnight">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
          <div>
            <Eyebrow tone="golden">EVALUATION</Eyebrow>
            <Title>Every Yaanik is <span className="font-light italic font-brush text-golden">reviewed.</span></Title>
          </div>
          <div className="text-white/75">
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
