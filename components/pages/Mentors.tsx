import { Section, Eyebrow, Title, Body } from '@/components/page/Blocks'

const CATEGORIES = [
  ['CORPORATE PROFESSIONALS', 'Insights into careers, corporate life, industry expectations, campus placements and professional skills.', 'ri-briefcase-line'],
  ['ENTREPRENEURS', 'Interact with people who have transformed ideas into organisations — innovation, risk, leadership, failure and opportunity.', 'ri-rocket-line'],
  ['GOVERNMENT OFFICERS', 'Understand public administration, governance, social development and public service.', 'ri-government-line'],
  ['SCIENTISTS & ACADEMICIANS', 'Learn directly from people engaged in research, science, technology and higher education.', 'ri-flask-line'],
  ['ARTISTS & CULTURAL PRACTITIONERS', 'The knowledge carried by classical artists, folk artists, musicians, dancers, theatre practitioners and craftspeople.', 'ri-palette-line'],
  ['STUDENT LEADERS', 'Learn from the students who create and manage activities at premier institutions.', 'ri-user-star-line'],
]

const COMPANIES = ['TCS', 'Infosys', 'Wipro', 'Microsoft', 'CRISIL', 'Verizon', 'Tata Motors', 'Volvo Eicher', 'AMW', 'Redpine Signals']

const STUDENT_LEADERSHIP = ['Student clubs', 'Activity councils', 'Festival management', 'Leadership structures', 'Volunteer systems', 'Campus initiatives']

/** Alternating full-width rows, each category given its own band. */
export default function Mentors() {
  return (
    <>
      <Section tone="white">
        <div className="max-w-[760px]">
          <Eyebrow>MEET THE PEOPLE WHO INSPIRE</Eyebrow>
          <Title className="text-midnight">A major part of the Yaan is <span className="font-light italic font-brush text-emerald">who you meet.</span></Title>
          <Body className="text-black/60">
            A major part of the Jignasa Yaan experience is interaction with people who have knowledge, experience and
            stories to share.
          </Body>
        </div>

        <div className="mt-12 space-y-3">
          {CATEGORIES.map(([title, text, icon], i) => (
            <div key={title} className={`rounded-[24px] p-7 md:p-9 grid md:grid-cols-[auto_1fr] gap-6 md:gap-9 items-center ${i % 2 ? 'bg-white border border-black/5 shadow-[0_18px_50px_rgba(8,27,51,0.10)]' : 'bg-[#F5F7FA] border border-black/5'}`}>
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0 ${i % 2 ? 'bg-emerald/10 text-emerald' : 'bg-white text-emerald border border-black/5'}`}>
                <i className={icon}></i>
              </div>
              <div>
                <h3 className="font-head font-extrabold text-[20px] md:text-[26px] text-midnight">{title}</h3>
                <p className="text-[15px] md:text-base leading-relaxed mt-2 max-w-[820px] text-black/60">{text}</p>

                {i === 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {COMPANIES.map(c => (
                      <span key={c} className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-midnight border border-black/5">{c}</span>
                    ))}
                  </div>
                )}
                {i === 5 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {STUDENT_LEADERSHIP.map(c => (
                      <span key={c} className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-midnight border border-black/5">{c}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-black/45 max-w-[820px]">
          Historical YAAN interactions included professionals associated with organisations such as these.
        </p>
      </Section>
    </>
  )
}
