/**
 * Every standalone page: the three colour-coded navbar entries, plus the pages behind
 * the navbar's "More" panel.
 *
 * `slug` is derived from `label` (lowercased, & -> and, @ -> at, punctuation dropped),
 * so the URL path always reads as the link text does.
 *
 * `background` is a file in public/backgrounds/web/. There are 12 artworks and 17 pages,
 * so some repeat; nothing else depends on these values, so reassign freely.
 */
export type PageGroup = 'MAIN' | 'YAAN DETAILS' | 'PROGRAM' | 'COMMUNITY'

export type SitePage = {
  slug: string
  label: string
  group: PageGroup
  background: string
  /** Colour of this page's navbar link, where it has one. */
  linkColour?: string
  /** Hero treatment, varied across pages so the tops do not all look alike. */
  hero: 'overlay' | 'band' | 'split'
  /** One-line standfirst under the page title. */
  tagline?: string
}

/**
 * The three colour-coded navbar links.
 *
 * Colour rule: a page must not sit on a background of its own link colour. Backgrounds
 * are named by dominant colour, which makes the constraint checkable — see the assertion
 * in assertLinkColoursDiffer() below, which fails the build if this is ever violated.
 *   Home     #e78004 orange -> dance-pink   (pink)
 *   About    #0098b2 teal   -> folk-orange  (orange)
 *   Register #739f16 green  -> ships-teal   (teal)
 */
export const NAV_PAGES: SitePage[] = [
  { slug: 'home', label: 'Home', group: 'MAIN', background: 'dance-pink.webp', linkColour: 'orange', hero: 'overlay', tagline: 'South India\'s Largest Education on Wheels.' },
  { slug: 'about', label: 'About JIGNASA YAAN', group: 'MAIN', background: 'folk-orange.webp', linkColour: 'teal', hero: 'split', tagline: 'A journey from knowledge to wisdom, in the lap of societal exposure.' },
  { slug: 'register', label: 'Register', group: 'MAIN', background: 'ships-teal.webp', linkColour: 'green', hero: 'band', tagline: 'Your journey begins here.' },
]

export const MORE_PAGES: SitePage[] = [
  // YAAN DETAILS
  { slug: 'events-on-train', label: 'Events on Train', group: 'YAAN DETAILS', background: 'ships-teal.webp', hero: 'split', tagline: 'The carriage becomes the classroom — teams, mentors and five activities in motion.' },
  { slug: 'events-off-train-at-iist-campus', label: 'Events off Train — @ IIST Campus', group: 'YAAN DETAILS', background: 'temple-green.webp', hero: 'overlay', tagline: 'Eight days in Thiruvananthapuram, out in the field.' },
  { slug: 'participation-in-dhanak-15', label: 'Participation in Dhanak 15', group: 'YAAN DETAILS', background: 'dance-orange.webp', hero: 'band' },
  { slug: 'intach-heritage-rally', label: 'INTACH Heritage Rally', group: 'YAAN DETAILS', background: 'procession-teal.webp', hero: 'overlay', tagline: 'A Grand Heritage & Cult Carnival, in tribute to Dr. APJ Abdul Kalam.' },
  { slug: 'case-study-anantha-padmanabha-swamy-temple', label: 'Case Study: Anantha Padmanabha Swamy Temple', group: 'YAAN DETAILS', background: 'temple-orange.webp', hero: 'split', tagline: 'Mysteries, history and heritage — investigated, not toured.' },
  { slug: 'crafting-kerala', label: 'Crafting Kerala', group: 'YAAN DETAILS', background: 'folk-orange.webp', hero: 'band', tagline: 'The age-old handicrafts of Kerala, studied and enterprised on a global note.' },
  { slug: 'ecology-at-gods-own-country', label: "Ecology @ God's Own Country", group: 'YAAN DETAILS', background: 'folk-green.webp', hero: 'overlay', tagline: 'Experiencing Kerala\'s ecology from inside its villages.' },
  { slug: 'kathakali-festival', label: 'Kathakali Festival', group: 'YAAN DETAILS', background: 'dance-pink.webp', hero: 'split', tagline: 'The Great Indian Dancing Festival — three classical forms, one dance drama.' },

  // PROGRAM
  { slug: 'specific-features', label: 'Specific Features', group: 'PROGRAM', background: 'folk-green-alt.webp', hero: 'band', tagline: 'Ten reasons the Yaan is not a trip.' },
  // portraits-teal is what the home page's own #faq section uses (tex-portraits-teal),
  // so the standalone page carries the same artwork.
  { slug: 'faqs', label: 'FAQs', group: 'PROGRAM', background: 'portraits-teal.webp', hero: 'band', tagline: 'Everything students, parents and institutions ask.' },
  { slug: 'contact-us', label: 'Contact Us', group: 'PROGRAM', background: 'deities-teal.webp', hero: 'split', tagline: 'Interested in becoming a YAANIK? We would love to hear from you.' },

  // COMMUNITY
  { slug: 'sponsors-and-associate-institutes', label: 'Sponsors & Associate Institutes', group: 'COMMUNITY', background: 'deities-pink.webp', hero: 'overlay', tagline: 'Our institutional ecosystem across education, government, culture and heritage.' },
  { slug: 'participant-colleges', label: 'Participant Colleges', group: 'COMMUNITY', background: 'portraits-teal.webp', hero: 'band', tagline: 'Many colleges. Many cultures. One Yaan.' },
  { slug: 'mentors', label: 'Mentors', group: 'COMMUNITY', background: 'procession-teal.webp', hero: 'split', tagline: 'Meet the people who inspire.' },
]

export const ALL_PAGES: SitePage[] = [...NAV_PAGES, ...MORE_PAGES]

/** Guards the colour rule at build time rather than by eye. */
function assertLinkColoursDiffer() {
  for (const page of ALL_PAGES) {
    if (page.linkColour && page.background.includes(page.linkColour)) {
      throw new Error(
        `Background "${page.background}" matches the ${page.linkColour} link colour for /${page.slug}. ` +
        `Pick an artwork of a different colour.`
      )
    }
  }
}
assertLinkColoursDiffer()

export function getPage(slug: string): SitePage | undefined {
  return ALL_PAGES.find(p => p.slug === slug)
}
