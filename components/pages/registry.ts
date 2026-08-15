import type { ComponentType } from 'react'

import Home from '@/components/pages/Home'
import About from '@/components/pages/About'
import Register from '@/components/pages/Register'
import EventsOnTrain from '@/components/pages/EventsOnTrain'
import EventsOffTrain from '@/components/pages/EventsOffTrain'
import IntachHeritageRally from '@/components/pages/IntachHeritageRally'
import CaseStudyTemple from '@/components/pages/CaseStudyTemple'
import CraftingKerala from '@/components/pages/CraftingKerala'
import Ecology from '@/components/pages/Ecology'
import KathakaliFestival from '@/components/pages/KathakaliFestival'
import SpecificFeatures from '@/components/pages/SpecificFeatures'
import Faqs from '@/components/pages/Faqs'
import ContactUs from '@/components/pages/ContactUs'
import Sponsors from '@/components/pages/Sponsors'
import ParticipantColleges from '@/components/pages/ParticipantColleges'
import Mentors from '@/components/pages/Mentors'

/**
 * slug -> page body. A slug with no entry renders the artwork and credits alone,
 * which is currently true only of /participation-in-dhanak-15: the content
 * document has no section for it.
 */
export const PAGE_CONTENT: Record<string, ComponentType> = {
  'home': Home,
  'about': About,
  'register': Register,
  'events-on-train': EventsOnTrain,
  'events-off-train-at-iist-campus': EventsOffTrain,
  'intach-heritage-rally': IntachHeritageRally,
  'case-study-anantha-padmanabha-swamy-temple': CaseStudyTemple,
  'crafting-kerala': CraftingKerala,
  'ecology-at-gods-own-country': Ecology,
  'kathakali-festival': KathakaliFestival,
  'specific-features': SpecificFeatures,
  'faqs': Faqs,
  'contact-us': ContactUs,
  'sponsors-and-associate-institutes': Sponsors,
  'participant-colleges': ParticipantColleges,
  'mentors': Mentors,
}

/** Kicker shown above the page title in the hero. */
export const PAGE_KICKER: Record<string, string> = {
  'home': 'JIGNASA YAAN',
  'about': 'ABOUT',
  'register': 'REGISTER',
  'events-on-train': 'YAAN DETAILS',
  'events-off-train-at-iist-campus': 'YAAN DETAILS',
  'participation-in-dhanak-15': 'YAAN DETAILS',
  'intach-heritage-rally': 'YAAN DETAILS',
  'case-study-anantha-padmanabha-swamy-temple': 'YAAN DETAILS',
  'crafting-kerala': 'YAAN DETAILS',
  'ecology-at-gods-own-country': 'YAAN DETAILS',
  'kathakali-festival': 'YAAN DETAILS',
  'specific-features': 'PROGRAM',
  'faqs': 'PROGRAM',
  'contact-us': 'PROGRAM',
  'sponsors-and-associate-institutes': 'COMMUNITY',
  'participant-colleges': 'COMMUNITY',
  'mentors': 'COMMUNITY',
}
