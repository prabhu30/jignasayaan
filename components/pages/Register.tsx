import { Section, Eyebrow, Title, Body, Callout } from '@/components/page/Blocks'
import RegistrationForm from '@/components/register/RegistrationForm'

const STEPS = [
  ['REGISTER', 'Submit your basic details through the registration form.'],
  ['INTERACTION', 'After registration, shortlisted Yaaniks may receive a telephone call for an interaction or interview.'],
  ['CONFIRMATION', 'Selected Yaaniks receive confirmation and further instructions through their registered email.'],
  ['ENROLLMENT', 'Complete the required forms, documentation and participation formalities.'],
  ['YAANIK CONFIRMATION', 'Receive your confirmed YAANIK enrollment and journey information.'],
]

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
            <a
              href="#registration-form"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-midnight px-7 py-3.5 text-sm font-bold text-white transition hover:bg-emerald"
            >
              Register Now <i className="ri-arrow-down-line"></i>
            </a>
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

      {/* Step 1, made actionable — the live form rather than a description of one */}
      <Section tone="soft" bordered id="registration-form">
        <div className="max-w-[820px]">
          <Eyebrow>REGISTRATION FORM</Eyebrow>
          <Title className="text-midnight">Tell us <span className="font-light italic font-brush text-emerald">who you are.</span></Title>
          <Body className="text-black/60">
            Ten details are all it takes to start. Everything marked below is needed for us to reach you about selection
            and enrollment.
          </Body>
        </div>

        <div className="mt-10 max-w-[980px]">
          <RegistrationForm />
        </div>
      </Section>

      <Section tone="ivory">
        <Callout tone="saffron">
          <div className="md:flex items-center justify-between gap-8">
            <h3 className="font-head font-extrabold text-[28px] md:text-[38px] leading-tight">Your journey begins here.</h3>
            <a href="#registration-form" className="mt-6 md:mt-0 shrink-0 inline-flex items-center gap-2 bg-white text-saffron px-8 py-4 rounded-full font-bold hover:bg-ivory transition">
              Register Now <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </Callout>
      </Section>
    </>
  )
}
