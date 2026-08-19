import type { ComponentType } from 'react'

import Home from '@/components/pages/Home'
import About from '@/components/pages/About'
import Register from '@/components/pages/Register'
import Legacy from '@/components/pages/Legacy'
import HistoryOfTheYaan from '@/components/pages/HistoryOfTheYaan'
import HallOfFame from '@/components/pages/HallOfFame'
import EventsOnTrain from '@/components/pages/EventsOnTrain'
import EventsOffTrain from '@/components/pages/EventsOffTrain'
import SpecificFeatures from '@/components/pages/SpecificFeatures'
import Faqs from '@/components/pages/Faqs'
import ContactUs from '@/components/pages/ContactUs'
import ComeBackDifferent from '@/components/pages/ComeBackDifferent'
import Sponsors from '@/components/pages/Sponsors'
import ParticipantColleges from '@/components/pages/ParticipantColleges'
import Mentors from '@/components/pages/Mentors'

/**
 * slug -> page body. A slug with no entry renders the artwork and credits alone;
 * every slug in ALL_PAGES currently has one.
 */
export const PAGE_CONTENT: Record<string, ComponentType> = {
  'home': Home,
  'about': About,
  'register': Register,
  'the-jignasa-yaan-legacy': Legacy,
  'history-of-jignasa-yaan': HistoryOfTheYaan,
  'hall-of-fame': HallOfFame,
  'events-on-train': EventsOnTrain,
  'events-off-train': EventsOffTrain,
  'specific-features': SpecificFeatures,
  'faqs': Faqs,
  'contact-us': ContactUs,
  'come-back-different': ComeBackDifferent,
  'sponsors-and-associate-institutes': Sponsors,
  'participant-colleges': ParticipantColleges,
  'mentors': Mentors,
}

/** Kicker shown above the page title in the hero. */
export const PAGE_KICKER: Record<string, string> = {
  'home': 'JIGNASA YAAN',
  'about': 'ABOUT',
  'register': 'REGISTER',
  'the-jignasa-yaan-legacy': 'THE RECORD',
  'history-of-jignasa-yaan': 'THE RECORD',
  'hall-of-fame': 'THE RECORD',
  'events-on-train': 'YAAN DETAILS',
  'events-off-train': 'YAAN DETAILS',
  'specific-features': 'PROGRAM',
  'faqs': 'PROGRAM',
  'contact-us': 'PROGRAM',
  'come-back-different': 'PROGRAM',
  'sponsors-and-associate-institutes': 'COMMUNITY',
  'participant-colleges': 'COMMUNITY',
  'mentors': 'COMMUNITY',
}
