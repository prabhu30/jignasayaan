'use client'

import { useRef, useState } from 'react'
import { useSiteUI } from '@/components/SiteUI'

const TOTAL_STEPS = 8

/** Everything steps 6-8 display. Client-generated today; server-issued once the
 *  gateway is live, because the user returns from it on a fresh page load. */
type Registration = { yaanId: string }

export default function RegisterModal() {
  const { registerOpen, closeRegister } = useSiteUI()
  const formRef = useRef<HTMLFormElement>(null)
  const [step, setStep] = useState(1)
  const [registration, setRegistration] = useState<Registration>({ yaanId: 'KLM-4829' })

  /**
   * Step 5 -> 6 is the payment boundary. Today it just mints an id locally, which is
   * what the original markup mocked. When Razorpay/Cashfree goes in, this is the only
   * function that changes shape: POST the form to create a pending registration, hand
   * off to the gateway, and let steps 6-8 render from the confirmed record on return —
   * they cannot stay local state, because the redirect back is a fresh page load.
   */
  const completePayment = () => {
    const data = Object.fromEntries(new FormData(formRef.current!).entries())
    void data // TODO(payment): send to /api/registrations
    setRegistration({ yaanId: 'KLM-' + Math.floor(1000 + Math.random() * 9000) })
  }

  const nextStep = () => {
    // Native validation on the visible step only, as the original did.
    const active = formRef.current?.querySelector<HTMLElement>(`.reg-step[data-step="${step}"]`)
    const required = active?.querySelectorAll<HTMLInputElement>('[required]') ?? []
    for (const field of Array.from(required)) {
      const empty = field.type === 'checkbox' ? !field.checked : !field.value
      if (empty) { field.reportValidity?.(); return }
    }
    if (step === 5) completePayment()
    if (step < TOTAL_STEPS) setStep(step + 1)
  }

  const prevStep = () => { if (step > 1) setStep(step - 1) }

  const stepClass = (n: number) => 'reg-step' + (n === step ? '' : ' hidden')

  return (
    <div id="registerModal" className={'fixed inset-0 z-[70]' + (registerOpen ? '' : ' hidden')}>
      <div className="absolute inset-0 bg-midnight/60 backdrop-blur-md" onClick={closeRegister}></div>
      <div className="relative max-w-[720px] mx-auto mt-[3vh] md:mt-[6vh] p-4">
        <div className="bg-white rounded-[28px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.35)] max-h-[92vh] overflow-y-auto custom-scrollbar">
          <div className="sticky top-0 bg-white z-10 p-6 border-b border-black/5">
            <div className="flex justify-between items-start gap-4">
              <div>
                <div className="text-emerald font-bold tracking-widest text-xs">REGISTRATION • 8 STEPS</div>
                <h4 className="font-extrabold text-xl text-midnight mt-1">Join the Expedition</h4>
                <p className="text-sm text-black/60">Secure your seat in 2 minutes. Pay advance to confirm.</p>
              </div>
              <button onClick={closeRegister} className="w-9 h-9 rounded-full bg-[#F5F7FA] flex items-center justify-center hover:bg-black hover:text-white transition"><i className="ri-close-line text-xl"></i></button>
            </div>
            <div className="mt-5">
              <div className="flex justify-between text-[11px] font-bold tracking-widest text-black/40"><span>PROGRESS</span><span id="stepLabel">{`STEP ${step} OF ${TOTAL_STEPS}`}</span></div>
              <div className="mt-2 h-2 bg-[#F5F7FA] rounded-full overflow-hidden"><div id="stepBar" className="h-full bg-emerald transition-all" style={{ width: (step / TOTAL_STEPS * 100) + '%' }}></div></div>
              <div className="mt-3 flex gap-1.5">
                {Array.from({ length: TOTAL_STEPS }, (_, i) => (
                  <div key={i} className={'step-dot w-8 h-1.5 rounded-full ' + (i < step ? 'bg-emerald' : 'bg-black/10')}></div>
                ))}
              </div>
            </div>
          </div>

          <form id="regForm" ref={formRef} className="p-6 space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Step 1 */}
            <div className={stepClass(1)} data-step="1">
              <h5 className="font-bold text-midnight">1 — Personal Info</h5>
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <label className="text-sm font-semibold">Full Name<input required name="name" placeholder="e.g. Ananya Sharma" className="mt-1 w-full border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald bg-white" /></label>{' '}
                <label className="text-sm font-semibold">Phone<input required name="phone" placeholder="+91 9xxxx xxxxx" className="mt-1 w-full border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald" /></label>{' '}
                <label className="text-sm font-semibold">Email<input required type="email" name="email" placeholder="you@college.edu" className="mt-1 w-full border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald" /></label>{' '}
                <label className="text-sm font-semibold">Gender<select name="gender" className="mt-1 w-full border border-black/10 rounded-xl px-4 py-3 bg-white"><option>Female</option><option>Male</option><option>Other</option><option>Prefer not to say</option></select></label>
              </div>
            </div>
            {/* Step 2 */}
            <div className={stepClass(2)} data-step="2">
              <h5 className="font-bold text-midnight">2 — Institution Details</h5>
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <label className="text-sm font-semibold">Institution Name<input required name="institution" placeholder="KBN College, Vijayawada" className="mt-1 w-full border border-black/10 rounded-xl px-4 py-3" /></label>{' '}
                <label className="text-sm font-semibold">Course & Year<input required name="course" placeholder="B.Sc 2nd Year" className="mt-1 w-full border border-black/10 rounded-xl px-4 py-3" /></label>{' '}
                <label className="text-sm font-semibold">City<input name="city" placeholder="Vijayawada" className="mt-1 w-full border border-black/10 rounded-xl px-4 py-3" /></label>{' '}
                <label className="text-sm font-semibold">ID Number (College)<input name="idnum" placeholder="Optional" className="mt-1 w-full border border-black/10 rounded-xl px-4 py-3" /></label>
              </div>
            </div>
            {/* Step 3 */}
            <div className={stepClass(3)} data-step="3">
              <h5 className="font-bold text-midnight">3 — Emergency Contact</h5>
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <label className="text-sm font-semibold">Contact Name<input required name="emer_name" placeholder="Parent / Guardian" className="mt-1 w-full border border-black/10 rounded-xl px-4 py-3" /></label>{' '}
                <label className="text-sm font-semibold">Relation<select name="emer_rel" className="mt-1 w-full border border-black/10 rounded-xl px-4 py-3 bg-white"><option>Parent</option><option>Guardian</option><option>Sibling</option><option>Other</option></select></label>{' '}
                <label className="text-sm font-semibold">Phone<input required name="emer_phone" placeholder="+91 ..." className="mt-1 w-full border border-black/10 rounded-xl px-4 py-3" /></label>{' '}
                <label className="text-sm font-semibold">Alternate Phone<input name="emer_alt" placeholder="Optional" className="mt-1 w-full border border-black/10 rounded-xl px-4 py-3" /></label>
              </div>
            </div>
            {/* Step 4 */}
            <div className={stepClass(4)} data-step="4">
              <h5 className="font-bold text-midnight">4 — Medical Declaration</h5>
              <div className="mt-4 grid gap-4">
                <label className="text-sm font-semibold">Any medical conditions? <textarea name="medical" rows={3} placeholder="Allergies, asthma, medication — or write 'None'" className="mt-1 w-full border border-black/10 rounded-xl px-4 py-3"></textarea></label>{' '}
                <label className="flex gap-3 text-sm"><input type="checkbox" required className="mt-1" /> <span>I confirm I am medically fit to travel and will carry prescribed medicines. I have read the safety guidelines.</span></label>
              </div>
            </div>
            {/* Step 5 */}
            <div className={stepClass(5)} data-step="5">
              <h5 className="font-bold text-midnight">5 — Payment</h5>
              <div className="mt-4 bg-[#F5F7FA] rounded-2xl p-5">
                <div className="flex justify-between items-center"><span className="font-bold">Advance to Confirm</span><span className="font-label font-bold text-xl text-emerald">₹2,000</span></div>
                <div className="text-xs text-black/60 mt-1">Balance payable in 2 instalments. 100% refundable till 15 days before departure.</div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-bold">
                  <div className="bg-white rounded-xl py-3 border border-black/5">UPI</div><div className="bg-white rounded-xl py-3 border border-black/5">Cards</div><div className="bg-white rounded-xl py-3 border border-black/5">Net Banking</div>
                </div>
                <label className="flex gap-2 text-xs mt-4"><input type="checkbox" required /> I agree to Terms, Refund Policy and Code of Conduct.</label>
              </div>
            </div>
            {/* Step 6 */}
            <div className={stepClass(6)} data-step="6">
              <h5 className="font-bold text-midnight">6 — Confirmation</h5>
              <div className="mt-4 bg-emerald text-white rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-white text-emerald rounded-full flex items-center justify-center mx-auto text-3xl"><i className="ri-check-line"></i></div>
                <div className="font-extrabold text-xl mt-3">You’re In. Welcome aboard!</div>
                <div className="text-sm opacity-90 mt-1">Your application is confirmed. Check email & WhatsApp for next steps.</div>
                <div className="mt-4 bg-white text-midnight rounded-xl p-3 text-sm font-mono">YAAN2026-<span id="yaanId">{registration.yaanId}</span></div>
              </div>
            </div>
            {/* Step 7 */}
            <div className={stepClass(7)} data-step="7">
              <h5 className="font-bold text-midnight">7 — Student Dashboard</h5>
              <div className="mt-4 bg-white border border-black/5 rounded-2xl p-5">
                <div className="font-bold">Your Dashboard is Ready</div>
                <div className="mt-3 grid grid-cols-3 gap-3 text-center text-xs">
                  <div className="bg-[#F5F7FA] rounded-xl p-3"><div className="font-bold">Kit</div><div className="text-black/60">T-shirt • Cap • Journal</div></div>
                  <div className="bg-[#F5F7FA] rounded-xl p-3"><div className="font-bold">Group</div><div className="text-black/60">WhatsApp Added</div></div>
                  <div className="bg-emerald text-white rounded-xl p-3"><div className="font-bold">Status</div><div>Confirmed ✓</div></div>
                </div>
                <div className="mt-4 text-sm text-black/60">Login at <span className="font-semibold text-midnight">dashboard.jignasayaan.in</span> with your phone number.</div>
              </div>
            </div>
            {/* Step 8 */}
            <div className={stepClass(8)} data-step="8">
              <h5 className="font-bold text-midnight">8 — Journey Access Pass</h5>
              <div className="mt-4 bg-midnight text-white rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald/20 rounded-full blur-2xl"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-golden tracking-widest text-xs font-bold">JIGNASAYAAN • ACCESS PASS</div>
                    <div className="font-extrabold text-xl mt-1">VIJAYAWADA → KERALA</div>
                    <div className="text-sm opacity-70">This Time for Keralam • South for Bharat</div>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-midnight font-bold">JY</div>
                </div>
                <div className="mt-6 flex gap-4 items-center">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=JIGNASAYAAN2026" className="w-20 h-20 rounded-xl bg-white p-1" />
                  <div className="text-xs leading-relaxed opacity-80">Show this pass at boarding. Carry valid college ID & medical kit. <br /><span className="font-bold text-golden">Departure: Vijayawada Jn • 06:00 AM</span></div>
                </div>
                <button onClick={closeRegister} className="mt-6 w-full bg-white text-midnight py-3 rounded-full font-bold">Done — See You on the Yaan!</button>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button id="prevBtn" type="button" onClick={prevStep} className={(step === 1 ? 'hidden ' : '') + 'flex-1 border border-black/10 py-3 rounded-full font-bold hover:bg-black hover:text-white transition'}>Back</button>{' '}
              <button id="nextBtn" type="button" onClick={nextStep} className={(step === TOTAL_STEPS ? 'hidden ' : '') + 'flex-1 bg-midnight text-white py-3 rounded-full font-bold hover:bg-black transition flex items-center justify-center gap-2'}>{step === 5
              ? <>Pay ₹2,000 &amp; Continue <i className="ri-lock-2-line"></i></>
              : <>Continue <i className="ri-arrow-right-line"></i></>}</button>
            </div>
            <div className="text-center text-xs text-black/40">Need help? WhatsApp +91 90000 11223</div>
          </form>
        </div>
      </div>
    </div>
  )
}
