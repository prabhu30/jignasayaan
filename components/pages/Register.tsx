import { Section, Eyebrow, Title, Lede, Body, Callout } from '@/components/page/Blocks'

const STEPS = [
  ['REGISTER', 'Submit your basic details through the registration form.'],
  ['INTERACTION', 'After registration, shortlisted Yaaniks may receive a telephone call for an interaction or interview.'],
  ['CONFIRMATION', 'Selected Yaaniks receive confirmation and further instructions through their registered email.'],
  ['ENROLLMENT', 'Complete the required forms, documentation and participation formalities.'],
  ['YAANIK CONFIRMATION', 'Receive your confirmed YAANIK enrollment and journey information.'],
]

const FIELDS = [
  'Name', 'Date of Birth', 'Participant Category', 'College / Institution / Organization',
  'Department / Profession / Designation', 'Email ID', 'Phone Number', 'City', 'State',
]

const INTERESTS = ['Knowledge Exchange', 'Culture', 'Heritage', 'Arts Experience', 'Entrepreneurship', 'Creative Leadership', 'Innovation', 'Life Skills']

export default function Register() {
  return (
    <>
      {/* A true vertical stepper with a connecting rail */}
      <Section tone="white">
        <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-16">
          <div className="lg:sticky lg:top-32 self-start">
            <Eyebrow>BECOME A YAANIK</Eyebrow>
            <Title className="text-midnight">Five steps <span className="font-light italic font-brush text-emerald">to board.</span></Title>
            <Body className="text-black/60">Participation in Jignasa Yaan follows a structured registration and confirmation process.</Body>
          </div>

          <ol className="relative">
            <div className="absolute left-[23px] top-3 bottom-3 w-px bg-gradient-to-b from-emerald via-saffron to-midnight/20"></div>
            {STEPS.map(([title, text], i) => (
              <li key={title} className="relative flex gap-6 pb-10 last:pb-0">
                <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-midnight text-white flex items-center justify-center font-label font-bold border-4 border-white shadow-lg">
                  {i + 1}
                </div>
                <div className="pt-2">
                  <div className="text-[11px] tracking-[0.18em] font-bold text-emerald">STEP {i + 1}</div>
                  <h3 className="font-head font-extrabold text-xl md:text-2xl text-midnight mt-1">{title}</h3>
                  <p className="text-[15px] leading-relaxed text-black/60 mt-2 max-w-[560px]">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Form spec — shown as a spec sheet, not a live form */}
      <Section tone="soft" bordered>
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <Eyebrow>REGISTRATION FORM</Eyebrow>
            <Title className="text-midnight">What we will <span className="font-light italic font-brush text-emerald">ask you.</span></Title>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {FIELDS.map(f => (
                <div key={f} className="bg-white rounded-xl border border-black/5 px-4 py-3.5 text-[15px] text-charcoal/75 flex items-center gap-3">
                  <i className="ri-checkbox-blank-circle-line text-emerald text-xs"></i> {f}
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-black/45">Participant Category: Student / Youth / Corporate Professional / Young Entrepreneur / Doctor</p>
          </div>

          <div>
            <div className="bg-midnight text-white rounded-[28px] p-8 h-full">
              <div className="text-[11px] tracking-[0.18em] font-bold text-golden">AREAS OF INTEREST</div>
              <h3 className="font-head font-extrabold text-2xl mt-3">Tell us what pulls you.</h3>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {INTERESTS.map(t => (
                  <span key={t} className="px-4 py-2 rounded-full text-sm font-semibold bg-white/10 border border-white/10">{t}</span>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-[11px] tracking-[0.18em] font-bold text-white/50">ACKNOWLEDGEMENT</div>
                <p className="text-white/75 leading-relaxed mt-3 text-[15px]">
                  You have successfully registered for Jignasa Yaan. Thank you for your enthusiasm. You shall receive further
                  communication regarding selection and enrollment through your registered phone number and email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="ivory">
        <Callout tone="saffron">
          <div className="md:flex items-center justify-between gap-8">
            <h3 className="font-head font-extrabold text-[28px] md:text-[38px] leading-tight">Your journey begins here.</h3>
            <a href="/#register" className="mt-6 md:mt-0 shrink-0 inline-flex items-center gap-2 bg-white text-saffron px-8 py-4 rounded-full font-bold hover:bg-ivory transition">
              Register Now <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </Callout>
      </Section>
    </>
  )
}
