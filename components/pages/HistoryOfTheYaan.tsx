import { Section, Eyebrow, Title, Body } from '@/components/page/Blocks'

/* The HISTORY OF Jignasa Yaan table, row for row as the content document gives it. */
const EDITIONS = [
  ['First', 'IIT Madras', 'Tamil Nadu', '120', 'Jan 2014'],
  ['Second', 'BITS Pilani', 'Rajasthan', '160', 'Oct 2014'],
  ['Third', 'IIT BHU, Varanasi', 'Uttar Pradesh', '110', 'Feb 2015'],
  ['Fourth', 'IIST Trivandrum', 'Kerala', '436', 'Oct 2015'],
  ['Fifth', 'IIM Ahmedabad', 'Gujarat', '216', 'Jan 2017'],
  ['Sixth', 'NIFAA Karnal', 'Haryana', '300', 'Dec 2017'],
  ['Seventh', 'IIM Kozhikode', 'Kerala', '350', 'Jan 2019'],
]

const HEADERS = ['YAAN NO.', 'INSTITUTION', 'STATE', 'PARTICIPANTS', 'DATE']

export default function HistoryOfTheYaan() {
  return (
    <>
      <Section tone="white">
        <div className="max-w-[760px]">
          <Eyebrow>HISTORY OF JIGNASA YAAN</Eyebrow>
          <Title className="text-midnight">Seven editions, <span className="font-light italic font-brush text-emerald">1,692 Yaaniks.</span></Title>
          <Body className="text-black/60">
            Every Jignasa Yaan run so far, from the first journey to IIT Madras in January 2014 to IIM Kozhikode in
            January 2019.
          </Body>
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-black/5 bg-white">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <caption className="sr-only">Jignasa Yaan editions from 2014 to 2019</caption>
            <thead>
              <tr className="bg-midnight text-white text-[11px] tracking-widest font-bold">
                {HEADERS.map(h => (
                  <th key={h} scope="col" className="px-5 py-4 font-bold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {EDITIONS.map(row => (
                <tr key={row[0]} className="border-t border-black/5">
                  <th scope="row" className="px-5 py-4 font-bold text-midnight text-left">{row[0]}</th>
                  <td className="px-5 py-4">{row[1]}</td>
                  <td className="px-5 py-4 text-black/60">{row[2]}</td>
                  <td className="px-5 py-4 font-label font-bold text-emerald">{row[3]}</td>
                  <td className="px-5 py-4 text-black/60">{row[4]}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-midnight bg-[#F5F7FA] font-bold text-midnight">
                <th scope="row" className="px-5 py-4 text-left">TOTAL</th>
                <td className="px-5 py-4">7 Yaan Editions</td>
                <td className="px-5 py-4">6 States</td>
                <td className="px-5 py-4 font-label">1,692 Participants</td>
                <td className="px-5 py-4">2014–2019</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* The document's own summing-up of the table above */}
      <Section tone="paper">
        <div className="text-center max-w-[820px] mx-auto">
          <div className="font-label font-extrabold text-[56px] md:text-[92px] leading-none text-emerald">1,692+</div>
          <h2 className="font-head font-extrabold text-[26px] md:text-[36px] tracking-[-0.01em] text-midnight mt-2">
            YAANIKS
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {['7 Yaan Editions', '6 States', '7 Leading Institutions'].map(stat => (
              <span key={stat} className="px-5 py-2.5 rounded-full text-sm font-bold bg-white text-midnight border border-black/5">
                {stat}
              </span>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
