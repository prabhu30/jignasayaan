'use client'

import { useId, useState } from 'react'

/* The ten fields, the five category options and the eight interests are exactly the
   REGISTRATION FORM list in reference/JIGNASA_YAAN_Complete_Website_Content.md §3. */

const CATEGORIES = ['Student', 'Youth', 'Corporate Professional', 'Young Entrepreneur', 'Doctor']

const INTERESTS = [
  'Knowledge Exchange', 'Culture', 'Heritage', 'Arts Experience',
  'Entrepreneurship', 'Creative Leadership', 'Innovation', 'Life Skills',
]

type Values = {
  name: string
  dob: string
  category: string
  institution: string
  designation: string
  email: string
  phone: string
  city: string
  state: string
  interests: string[]
}

const EMPTY: Values = {
  name: '', dob: '', category: '', institution: '', designation: '',
  email: '', phone: '', city: '', state: '', interests: [],
}

type Errors = Partial<Record<keyof Values, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/** Field order here is also the focus order used when a submit fails. */
const ORDER: (keyof Values)[] = [
  'name', 'dob', 'category', 'institution', 'designation',
  'email', 'phone', 'city', 'state', 'interests',
]

function validate(v: Values): Errors {
  const e: Errors = {}

  if (v.name.trim().length < 2) e.name = 'Enter your full name.'

  if (!v.dob) {
    e.dob = 'Enter your date of birth.'
  } else {
    const dob = new Date(`${v.dob}T00:00:00`)
    if (Number.isNaN(dob.getTime())) e.dob = 'Enter a valid date.'
    else if (dob > new Date()) e.dob = 'Date of birth cannot be in the future.'
  }

  if (!v.category) e.category = 'Choose a participant category.'
  if (!v.institution.trim()) e.institution = 'Enter your college, institution or organization.'
  if (!v.designation.trim()) e.designation = 'Enter your department, profession or designation.'

  if (!v.email.trim()) e.email = 'Enter your email ID.'
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Enter a valid email ID.'

  const digits = v.phone.replace(/\D/g, '')
  if (!v.phone.trim()) e.phone = 'Enter your phone number.'
  else if (digits.length < 10 || digits.length > 15) e.phone = 'Enter a phone number with 10 to 15 digits.'

  if (!v.city.trim()) e.city = 'Enter your city.'
  if (!v.state.trim()) e.state = 'Enter your state.'
  if (v.interests.length === 0) e.interests = 'Pick at least one area of interest.'

  return e
}

const INPUT =
  'mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-charcoal ' +
  'outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald/20'

const LABEL = 'block text-[13px] font-bold tracking-wide text-midnight'

export default function RegistrationForm() {
  const uid = useId()
  const [values, setValues] = useState<Values>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState<Values | null>(null)

  const fieldId = (k: keyof Values) => `${uid}-${k}`

  const set = (k: keyof Values, val: string) => {
    setValues(prev => ({ ...prev, [k]: val }))
    // Clear a field's error as soon as it is edited; re-checked on submit.
    setErrors(prev => (prev[k] ? { ...prev, [k]: undefined } : prev))
  }

  const toggleInterest = (interest: string) => {
    setValues(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest],
    }))
    setErrors(prev => (prev.interests ? { ...prev, interests: undefined } : prev))
  }

  /**
   * MOCK SUBMIT — no data leaves the browser. When the backend lands, this is the only
   * function that changes: POST `values` to the registrations endpoint, keep the
   * pending/`submitting` state while it is in flight, and drive the acknowledgement
   * below off the server's response instead of off local state.
   */
  const submit = async (e: React.FormEvent) => {
    e.preventDefault()

    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      const first = ORDER.find(k => found[k])
      if (first) document.getElementById(fieldId(first))?.focus()
      return
    }

    setSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 900)) // stands in for the network
    setSubmitting(false)
    setSubmitted(values)
  }

  const reset = () => {
    setValues(EMPTY)
    setErrors({})
    setSubmitted(null)
  }

  /* ------------------------------------------------------- acknowledgement */

  if (submitted) {
    return (
      <div
        role="status"
        className="bg-white rounded-[28px] border border-black/5 shadow-[0_18px_50px_rgba(8,27,51,0.10)] p-8 md:p-10"
      >
        <div className="w-14 h-14 rounded-2xl bg-emerald/10 text-emerald flex items-center justify-center text-3xl">
          <i className="ri-check-line"></i>
        </div>
        <div className="text-[11px] tracking-[0.18em] font-bold text-emerald mt-6">REGISTRATION ACKNOWLEDGEMENT</div>
        <h3 className="font-head font-extrabold text-[26px] md:text-[32px] leading-tight text-midnight mt-3">
          You have successfully registered for Jignasa Yaan.
        </h3>
        <p className="text-charcoal/70 leading-relaxed mt-4 text-[16px] max-w-[620px]">
          Thank you for your enthusiasm. You shall receive further communication regarding the selection and enrollment
          process through your registered phone number and email.
        </p>

        <dl className="mt-8 pt-6 border-t border-black/10 grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {[
            ['Name', submitted.name],
            ['Participant Category', submitted.category],
            ['College / Institution / Organization', submitted.institution],
            ['Email ID', submitted.email],
            ['Phone Number', submitted.phone],
            ['City & State', `${submitted.city}, ${submitted.state}`],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="text-[11px] tracking-[0.14em] font-bold text-black/45">{label.toUpperCase()}</dt>
              <dd className="text-[15px] text-midnight font-semibold mt-1 break-words">{value}</dd>
            </div>
          ))}
          <div className="sm:col-span-2">
            <dt className="text-[11px] tracking-[0.14em] font-bold text-black/45">AREAS OF INTEREST</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {submitted.interests.map(i => (
                <span key={i} className="px-3 py-1.5 rounded-full text-[13px] font-semibold bg-[#F5F7FA] text-midnight border border-black/5">
                  {i}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3 text-sm font-bold text-midnight hover:bg-[#F5F7FA] transition"
        >
          <i className="ri-arrow-left-line"></i> Register another Yaanik
        </button>
      </div>
    )
  }

  /* ---------------------------------------------------------------- form */

  const errorFor = (k: keyof Values) =>
    errors[k] ? (
      <p id={`${fieldId(k)}-error`} className="mt-1.5 text-[13px] font-semibold text-[#ae3432]">
        {errors[k]}
      </p>
    ) : null

  const a11y = (k: keyof Values) => ({
    id: fieldId(k),
    'aria-invalid': errors[k] ? true : undefined,
    'aria-describedby': errors[k] ? `${fieldId(k)}-error` : undefined,
  })

  const border = (k: keyof Values) => (errors[k] ? 'border-[#ae3432]' : 'border-black/10')

  return (
    <form
      onSubmit={submit}
      noValidate
      className="bg-white rounded-[28px] border border-black/5 shadow-[0_18px_50px_rgba(8,27,51,0.10)] p-7 md:p-9"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor={fieldId('name')} className={LABEL}>Name</label>
          <input
            {...a11y('name')}
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={e => set('name', e.target.value)}
            placeholder="Your full name"
            className={`${INPUT} ${border('name')}`}
          />
          {errorFor('name')}
        </div>

        <div>
          <label htmlFor={fieldId('dob')} className={LABEL}>Date of Birth</label>
          <input
            {...a11y('dob')}
            type="date"
            autoComplete="bday"
            value={values.dob}
            onChange={e => set('dob', e.target.value)}
            className={`${INPUT} ${border('dob')}`}
          />
          {errorFor('dob')}
        </div>

        <div className="md:col-span-2">
          <label htmlFor={fieldId('category')} className={LABEL}>Participant Category</label>
          <select
            {...a11y('category')}
            value={values.category}
            onChange={e => set('category', e.target.value)}
            className={`${INPUT} ${border('category')} ${values.category ? '' : 'text-black/40'}`}
          >
            <option value="">Select a category</option>
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          {errorFor('category')}
        </div>

        <div>
          <label htmlFor={fieldId('institution')} className={LABEL}>College / Institution / Organization</label>
          <input
            {...a11y('institution')}
            type="text"
            autoComplete="organization"
            value={values.institution}
            onChange={e => set('institution', e.target.value)}
            placeholder="Where you study or work"
            className={`${INPUT} ${border('institution')}`}
          />
          {errorFor('institution')}
        </div>

        <div>
          <label htmlFor={fieldId('designation')} className={LABEL}>Department / Profession / Designation</label>
          <input
            {...a11y('designation')}
            type="text"
            autoComplete="organization-title"
            value={values.designation}
            onChange={e => set('designation', e.target.value)}
            placeholder="What you study or do"
            className={`${INPUT} ${border('designation')}`}
          />
          {errorFor('designation')}
        </div>

        <div>
          <label htmlFor={fieldId('email')} className={LABEL}>Email ID</label>
          <input
            {...a11y('email')}
            type="email"
            inputMode="email"
            autoComplete="email"
            value={values.email}
            onChange={e => set('email', e.target.value)}
            placeholder="you@example.com"
            className={`${INPUT} ${border('email')}`}
          />
          {errorFor('email')}
        </div>

        <div>
          <label htmlFor={fieldId('phone')} className={LABEL}>Phone Number</label>
          <input
            {...a11y('phone')}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={e => set('phone', e.target.value)}
            placeholder="+91 98765 43210"
            className={`${INPUT} ${border('phone')}`}
          />
          {errorFor('phone')}
        </div>

        <div>
          <label htmlFor={fieldId('city')} className={LABEL}>City</label>
          <input
            {...a11y('city')}
            type="text"
            autoComplete="address-level2"
            value={values.city}
            onChange={e => set('city', e.target.value)}
            placeholder="Your city"
            className={`${INPUT} ${border('city')}`}
          />
          {errorFor('city')}
        </div>

        <div>
          <label htmlFor={fieldId('state')} className={LABEL}>State</label>
          <input
            {...a11y('state')}
            type="text"
            autoComplete="address-level1"
            value={values.state}
            onChange={e => set('state', e.target.value)}
            placeholder="Your state"
            className={`${INPUT} ${border('state')}`}
          />
          {errorFor('state')}
        </div>
      </div>

      {/* Areas of Interest — a checkbox group styled as chips, so it stays keyboard
          operable and announces its selected state to assistive technology. */}
      <fieldset className="mt-7 pt-7 border-t border-black/10">
        <legend className={LABEL} id={fieldId('interests')} tabIndex={-1}>
          Areas of Interest
        </legend>
        <p className="text-[13px] text-black/50 mt-1">Choose everything that pulls you — at least one.</p>
        <div
          className="mt-4 flex flex-wrap gap-2.5"
          aria-describedby={errors.interests ? `${fieldId('interests')}-error` : undefined}
        >
          {INTERESTS.map(interest => {
            const on = values.interests.includes(interest)
            return (
              <label
                key={interest}
                className={
                  'cursor-pointer select-none px-4 py-2.5 rounded-full text-sm font-semibold border transition ' +
                  'focus-within:ring-2 focus-within:ring-emerald/30 ' +
                  (on
                    ? 'bg-emerald text-white border-emerald'
                    : 'bg-[#F5F7FA] text-midnight border-black/5 hover:border-emerald/40')
                }
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={on}
                  onChange={() => toggleInterest(interest)}
                />
                {on && <i className="ri-check-line mr-1.5 -ml-0.5"></i>}
                {interest}
              </label>
            )
          })}
        </div>
        {errors.interests && (
          <p id={`${fieldId('interests')}-error`} className="mt-3 text-[13px] font-semibold text-[#ae3432]">
            {errors.interests}
          </p>
        )}
      </fieldset>

      <div className="mt-8 pt-7 border-t border-black/10 flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center gap-2 rounded-full bg-midnight px-8 py-4 font-bold text-white transition hover:bg-emerald disabled:opacity-60 disabled:hover:bg-midnight"
        >
          {submitting ? (
            <><i className="ri-loader-4-line animate-spin"></i> Submitting…</>
          ) : (
            <>Register Now <i className="ri-arrow-right-line"></i></>
          )}
        </button>
        <p className="text-[13px] text-black/50 max-w-[380px]">
          Shortlisted Yaaniks may receive a telephone call for an interaction before confirmation.
        </p>
      </div>
    </form>
  )
}
