import { Section, Eyebrow, Title, Body } from '@/components/page/Blocks'

const STATES: { name: string; tone: string; colleges: string[] }[] = [
  {
    name: 'ANDHRA PRADESH', tone: 'bg-[#FFF3E6] text-[#9A4A00]',
    colleges: ['KL University', 'Vignan University', 'VR Siddhartha Engineering College', 'VVIT University', "Vignan's LARA",
      'Godavari Institute of Engineering & Technology', 'Madanapalle Institute of Technology', "St. Mary's Women's Engineering College",
      'SRK Institute of Technology', 'PVP Siddhartha Institute of Technology', 'NRI Medical College', 'Guntur Engineering College',
      'Kallam Haranadha Reddy Institute of Technology', 'Amrita Sai', 'Usha Rama', 'Loyola Engineering College', 'Prakasam Engineering College'],
  },
  {
    name: 'TELANGANA', tone: 'bg-[#E6F6F1] text-emerald',
    colleges: ['JNTU Hyderabad', 'GITAM University Hyderabad', 'Gokaraju Rangaraju College', 'Lakshya Engineering College, Khammam'],
  },
  {
    name: 'TAMIL NADU', tone: 'bg-[#EEF2FF] text-midnight',
    colleges: ['SRM University, Chennai', 'Coimbatore Institute of Technology', 'PSG College, Coimbatore', 'Amrita University, Coimbatore'],
  },
]

const TOTAL = STATES.reduce((n, s) => n + s.colleges.length, 0)

/** Column-per-state roster with a closing full-bleed statement. */
export default function ParticipantColleges() {
  return (
    <>
      <Section tone="white">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[640px]">
            <Eyebrow>THE YAANIK COMMUNITY</Eyebrow>
            <Title className="text-midnight">Students from <span className="font-light italic font-brush text-emerald">{TOTAL} colleges.</span></Title>
          </div>
          <div className="flex gap-3">
            <div className="bg-[#F5F7FA] rounded-2xl px-6 py-4 border border-black/5">
              <div className="font-label font-bold text-2xl text-midnight leading-none">{TOTAL}</div>
              <div className="text-[11px] tracking-widest font-semibold text-black/50 mt-1">COLLEGES</div>
            </div>
            <div className="bg-[#F5F7FA] rounded-2xl px-6 py-4 border border-black/5">
              <div className="font-label font-bold text-2xl text-emerald leading-none">{STATES.length}</div>
              <div className="text-[11px] tracking-widest font-semibold text-black/50 mt-1">STATES</div>
            </div>
          </div>
        </div>

        <Body className="text-black/60 max-w-[820px]">
          Jignasa Yaan has brought together students from colleges across South India in its previous Yaan editions. The
          Yaanik community has represented diverse colleges and institutions, bringing together participants from different
          academic backgrounds, cultures and regions as part of the Jignasa Yaan journey.
        </Body>

        <div className="mt-10 grid lg:grid-cols-3 gap-6 items-start">
          {STATES.map(state => (
            <div key={state.name} className="rounded-[24px] border border-black/5 overflow-hidden">
              <div className={`${state.tone} px-6 py-4 flex items-baseline justify-between`}>
                <h3 className="font-head font-extrabold text-lg tracking-wide">{state.name}</h3>
                <span className="font-label font-bold text-sm opacity-60">{state.colleges.length}</span>
              </div>
              <ul className="bg-white divide-y divide-black/5">
                {state.colleges.map(c => (
                  <li key={c} className="px-6 py-3.5 text-[15px] text-charcoal/75 leading-snug">{c}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-white/95 backdrop-blur-sm text-charcoal">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24 text-center">
          <h2 className="font-head font-extrabold text-[30px] md:text-[56px] leading-[1.02] tracking-[-0.02em] text-midnight">
            Many colleges. Many cultures. <span className="font-light italic font-brush text-emerald">One Yaan.</span>
          </h2>
        </div>
      </section>
    </>
  )
}
