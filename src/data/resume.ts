// All content sourced directly from Nitin Kumar's resume.
// Nothing here is invented — figures, dates, and descriptions are transcribed
// (lightly rephrased for web readability) from the source document.
// App icons are the current icons from each app's own Google Play Store listing.

import monumentalIcon from '../assets/apps/monumental.png'
import chsnIcon from '../assets/apps/chsn.png'
import dirtvisionIcon from '../assets/apps/dirtvision.png'
import myoutdoortvIcon from '../assets/apps/myoutdoortv.png'
import foxoneIcon from '../assets/apps/foxone.png'
import heretvIcon from '../assets/apps/heretv.png'
import kanchalankaIcon from '../assets/apps/kanchalanka.jpg'
import mobilecheckIcon from '../assets/apps/mobilecheck.png'
import digitalcareIcon from '../assets/apps/digitalcare.jpg'
import plusodkupIcon from '../assets/apps/plusodkup.png'

export const personal = {
  name: 'Nitin Kumar',
  title: 'Android Developer',
  tagline: 'Android Developer, 7+ years building native apps, SDKs, and OTT streaming platforms',
  summary:
    "Talented Android Developer with over 7+ years of software development experience. Solid understanding of full mobile and software development life cycles, UI, and Agile methodologies. Dedicated to continuously developing, implementing, and adopting new technologies to maximize development efficiency and produce innovative applications.",
  location: 'India',
  phone: '+91 8679972475',
  email: 'vthakur948@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nitin-thakur-b975b493/',
  linkedinLabel: 'linkedin.com/in/nitin-thakur',
  languages: ['English', 'Hindi', 'Punjabi'],
  resumeFile: '/Nitin-Kumar-Android-Developer-Resume.pdf',
}

export type SkillCategory = {
  category: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages & Architecture',
    skills: ['Kotlin', 'Core Java', 'XML', 'MVI', 'MVC', 'MVVM', 'Clean Architecture'],
  },
  {
    category: 'Android & Jetpack',
    skills: [
      'Jetpack Compose',
      'Coroutines',
      'Flow',
      'Deep Linking',
      'Media3 ExoPlayer',
      'Dependency Injection (Hilt)',
      'EventBus',
    ],
  },
  {
    category: 'Networking & Data',
    skills: ['GraphQL', 'REST APIs', 'SSE', 'Retrofit', 'Room DB', 'Realm DB', 'Firebase'],
  },
  {
    category: 'Third-Party Integrations',
    skills: ['OneTrust', 'AppsFlyer', 'Beacon', 'CleverTap', 'TicketMaster', 'Coil'],
  },
  {
    category: 'Tools & Testing',
    skills: ['ADB', 'Gradle', 'Git', 'Unit Testing', 'Firebase Crashlytics', 'Push Notifications'],
  },
]

export type ExperienceEntry = {
  company: string
  role: string
  period: string
  bullets: string[]
}

export const experience: ExperienceEntry[] = [
  {
    company: 'NexGen IOT Solutions',
    role: 'Android Developer',
    period: 'September 2023 — Present',
    bullets: [
      'Developed modules for Android native OTT apps, enhancing streaming features and user experience.',
      'Working on end-to-end Android SDK development for Video Player, Monetization, and Analytics modules used across multiple client applications.',
      'Implemented advanced viewing features, including multiple camera angles and multi-game displays (2-UP, 3-UP, 4-UP), to enrich the fan experience on Single Screen for Monumental Sports Network.',
      'Collaborated with designers, engineers, and product managers to create and refine user experiences, ensuring alignment with project goals and user needs.',
      'Addressed FreshDesk and Jira tickets by performing bug fixes and implementing improvements to maintain app functionality and performance.',
      'Collaborated directly with clients and partner teams to explain SDK architecture, integration steps, and resolve integration issues.',
    ],
  },
  {
    company: 'Veridic Technologies Private Limited & Cellde Innovation Labs Private Limited',
    role: 'Android Developer',
    period: 'February 2019 — September 2023',
    bullets: [
      'R&D on Android hardware test and implementation for Buy Back Solution.',
      'Implementation for data erasure (ADISA Certified).',
      'Worked with Development, Product, and QA teams to ensure timely and cost-effective release project delivery.',
      'Attended daily stand-up meetings, discussing work accomplished and planned.',
      'Deployment of builds on the Google Play Store.',
    ],
  },
]

export type ProjectEntry = {
  name: string
  org: string
  description: string
  link?: string
  linkLabel?: string
  icon?: string
  tags?: string[]
  subApps?: { name: string; description: string; link: string; icon: string }[]
}

export const projects: ProjectEntry[] = [
  {
    name: 'Whitelabel OTT Streaming Platform',
    org: 'NexGen IOT Solutions',
    description:
      'A unified whitelabel app with a single code base, enabling the creation and management of multiple OTT streaming applications. Implemented a modular code base for developing, customizing, and maintaining multiple branded apps from one source, configured a CMS tool to manage app functionality and content dynamically, and integrated configurable branding and localisation for each application.',
    tags: ['Kotlin', 'Media3 ExoPlayer', 'Jetpack Compose', 'CMS Integration', 'Deep Linking'],
    subApps: [
      {
        name: 'Monumental Sports Network',
        description:
          'Live in-market games, original programming, replays, and behind-the-scenes content for Capitals, Wizards, and Mystics fans.',
        link: 'https://play.google.com/store/apps/details?id=com.mse.monumentalnetworks&hl=en_IN',
        icon: monumentalIcon,
      },
      {
        name: 'CHSN',
        description: 'Live Bulls, Blackhawks, and White Sox games, plus highlights and merch.',
        link: 'https://play.google.com/store/apps/details?id=com.chsn&hl=en&gl=US',
        icon: chsnIcon,
      },
      {
        name: 'DIRTVision',
        description:
          'Premier dirt racing broadcast provider with live coverage of Sprint Cars, Late Models, Modifieds, Karts, Micro Sprints, and Midgets.',
        link: 'https://play.google.com/store/apps/details?id=com.appdirtvision&hl=en_IN',
        icon: dirtvisionIcon,
      },
      {
        name: 'MyOutdoorTV',
        description: 'Thousands of hunting and sportsman channels with live streaming capabilities.',
        link: 'https://play.google.com/store/apps/details?id=com.myoutdoortv&hl=en_US',
        icon: myoutdoortvIcon,
      },
      {
        name: 'Fox One',
        description: 'The streaming app for everything FOX — NFL, MLB, FOX series, and live news.',
        link: 'https://play.google.com/store/apps/details?id=com.fox.foxone&hl=en_IN&pli=1',
        icon: foxoneIcon,
      },
      {
        name: 'HereTV',
        description: 'Award-winning LGBTQ movies, series, and documentaries on a subscription basis.',
        link: 'https://play.google.com/store/apps/details?id=com.heremedia.heretv&hl=en&gl=US',
        icon: heretvIcon,
      },
      {
        name: 'KanchaLanka',
        description: "Odisha's premium OTT service offering curated original web series and films in Odia.",
        link: 'https://play.google.com/store/apps/details?id=com.kancha.lanka&hl=en_US',
        icon: kanchalankaIcon,
      },
    ],
  },
  {
    name: 'Warehouse X',
    org: 'Cellde Innovation Labs Private Limited',
    description:
      'A desktop USB-based solution for bulk data diagnostics and erasure of up to 30 mobile devices. Ensured data erasure compliance with ADISA certification, issuing certificates for securely wiped devices, and integrated Warehouse X with the CellDe Warehouse Manager solution and other Warehouse Management Systems for seamless operations.',
    tags: ['Data Erasure', 'ADISA Certified', 'USB Diagnostics', 'ADB'],
  },
  {
    name: 'MobileCheck OneClick',
    org: 'Cellde Innovation Labs Private Limited',
    description:
      'An app to capture and upload images directly from mobile devices to the Retail Web Portal, automatically associating images with transactions.',
    link: 'https://play.google.com/store/apps/details?id=com.digitalcareinspectionimages&hl=en&gl=US',
    linkLabel: 'View on Google Play',
    icon: mobilecheckIcon,
    tags: ['Android', 'Image Capture', 'Retail Integration'],
  },
  {
    name: 'Digital Care',
    org: 'Cellde Innovation Labs Private Limited',
    description: 'Diagnostic and inspection solutions tailored to client specifications for the Digital Care client project.',
    link: 'https://play.google.com/store/apps/details?id=com.digitalcare&hl=en_IN',
    linkLabel: 'View on Google Play',
    icon: digitalcareIcon,
    tags: ['Android', 'Diagnostics'],
  },
  {
    name: 'Plus Odkup',
    org: 'Cellde Innovation Labs Private Limited',
    description: 'Contributed to development of apps for Plus Odkup and ModinoRetail, streamlining retail operations and diagnostics.',
    link: 'https://play.google.com/store/search?q=plus%20odkup&c=apps&hl=en_IN',
    linkLabel: 'View on Google Play',
    icon: plusodkupIcon,
    tags: ['Android', 'Retail Operations'],
  },
]

export type EducationEntry = {
  degree: string
  school: string
  period: string
  detail: string
}

export const education: EducationEntry[] = [
  {
    degree: 'MCA',
    school: 'Lovely Professional University',
    period: '2016 — 2018',
    detail: '7.7 CGPA',
  },
  {
    degree: 'BCA',
    school: 'Govt Post Graduate College, Bilaspur',
    period: '2013 — 2016',
    detail: '63%',
  },
  {
    degree: '12th',
    school: 'Govt Sr Sec School, Ghumarwin',
    period: '2012 — 2013',
    detail: '72%',
  },
  {
    degree: '10th',
    school: 'Govt Sr Sec School, Ghumarwin',
    period: '2010 — 2011',
    detail: '66%',
  },
]
