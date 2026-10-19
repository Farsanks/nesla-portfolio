// ─────────────────────────────────────────────────────────────────────────
// Central portfolio data. This is the single source of truth for identity,
// hero, about, skills, process, education, navigation, social links, and the
// image configuration. The owner edits THIS file (and the other files in
// src/data/) to update the site — components should rarely need editing.
//
// HONESTY RULES (do not violate):
//  - Nesla is a STUDENT. Do not invent experience, clients, results,
//    testimonials, awards, certifications, or confirmed contact details.
//  - Items needing confirmation are left empty / null and the UI hides them.
//  - Skills default to status 'learning' unless genuinely practiced/verified.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Nesla Fathima',
  monogram: 'NF',
  role: 'Digital Marketing Student',
  age: 18,
  education: 'Plus Two (+2) completed',
  currentLearning: 'Digital Marketing',
  institute: 'Catalyst Academy',
  instituteLocation: 'Calicut, Kerala, India',
  // Focus area for SEO targeting. Her residence is NOT confirmed.
  // TODO(owner): confirm residence. If not in Wayanad, keep "focus area"
  // framing in copy rather than stating "based in Wayanad".
  focusArea: 'Wayanad, Kerala',
  locationConfirmed: false,
  tagline: 'Curiosity into creativity. Ideas into digital growth.',
}

// ── Centralized image configuration ───────────────────────────────────────
// Set `src` to a path under /images/nesla/... once a genuine photo exists.
// Leave `src` empty to render an elegant placeholder (see Photo.jsx).
// Recommended filenames (use WebP/AVIF):
//   /images/nesla/hero/nesla-hero.webp
//   /images/nesla/portraits/nesla-portrait-01.webp ... -02.webp
//   /images/nesla/gallery/nesla-gallery-01.webp ...
//   /images/nesla/projects/project-01.webp ...
export const images = {
  hero: {
    src: '/images/nesla/hero/nesla-hero.jpg',
    alt: 'Editorial portrait of Nesla Fathima',
    label: 'Nesla Fathima',
  },
  about: {
    src: '/images/nesla/portraits/nesla-about.jpg',
    alt: 'Portrait of Nesla Fathima',
    label: 'Nesla Fathima',
  },
  portraits: [
    { src: '', alt: 'Nesla Fathima — portrait', label: 'Nesla Fathima' },
  ],
  gallery: [
    { src: '/images/nesla/gallery/nesla-gallery-01.jpg', alt: 'Nesla Fathima — gallery portrait', label: 'Nesla Fathima' },
    { src: '', alt: 'Gallery image of Nesla Fathima', label: 'Nesla Fathima' },
    { src: '', alt: 'Gallery image of Nesla Fathima', label: 'Nesla Fathima' },
  ],
  projects: [
    { src: '', alt: 'Project visual', label: 'Practice project visual' },
  ],
}

// ── Hero ──────────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: 'Digital Marketing · Creative Journey',
  // Art-directed, honest headline (no overclaimed expertise).
  headlineLines: ['Curiosity into creativity.', 'Ideas into digital growth.'],
  supporting:
    "I'm Nesla Fathima, a digital marketing student at Catalyst Academy, Calicut, exploring how strategy, content, SEO, and social media turn curiosity into digital growth.",
  primaryCta: { label: 'Explore My Journey', to: '/about' },
  secondaryCta: { label: "Let's Connect", to: '/contact' },
  // Availability is NOT confirmed → leave null so no "available for work"
  // badge is published. TODO(owner): set to a short string only if confirmed.
  availability: null,
  metaLabels: ['Digital Marketing', 'SEO', 'Content', 'Social Media'],
  portrait: images.hero,
}

// ── About ─────────────────────────────────────────────────────────────────
export const about = {
  label: '01 / The Person Behind the Journey',
  heading: 'A curious learner, studying the craft of digital growth.',
  // Warm, natural, honest. No invented backstory or achievements.
  paragraphs: [
    "I'm Nesla Fathima, an 18-year-old from Kerala with a curiosity for how brands are discovered online. I've completed my Plus Two and I'm now studying digital marketing at Catalyst Academy in Calicut, where I'm learning the foundations of strategy, content, search, and social media.",
    "I'm drawn to the space where creativity meets clarity — shaping ideas so they reach the right people. Right now I'm building my understanding of how digital marketing actually works: researching audiences, planning content, and learning to think strategically rather than just tactically.",
    "I treat learning as the work. Everything here is part of that process — honest, clearly labeled, and improving as I go. I'm not presenting finished expertise; I'm sharing the journey of developing it.",
  ],
  infoPanel: [
    { label: 'Name', value: 'Nesla Fathima' },
    { label: 'Education', value: 'Plus Two (+2) completed' },
    { label: 'Currently learning', value: 'Digital Marketing' },
    { label: 'Institute', value: 'Catalyst Academy, Calicut' },
    { label: 'Focus area', value: 'Wayanad, Kerala' },
    { label: 'Location', value: 'To be confirmed' },
  ],
  traits: [
    'Curious',
    'Creative',
    'Detail-oriented',
    'Strategic thinker',
    'Always learning',
  ],
  portrait: images.about,
}

// ── Skills & learning journey ─────────────────────────────────────────────
// status values: 'learning' | 'practiced' | 'completed' | 'demonstrated'
// Default to 'learning' until something is genuinely practiced/verified.
// No arbitrary percentages. Tool proficiency is NOT claimed.
export const skills = [
  { name: 'SEO Fundamentals', status: 'learning' },
  { name: 'Social Media Marketing', status: 'learning' },
  { name: 'Paid Advertising Fundamentals', status: 'learning' },
  { name: 'Content Planning', status: 'learning' },
  { name: 'Graphic Design', status: 'learning' },
  { name: 'Marketing Analytics', status: 'learning' },
  { name: 'Digital Strategy', status: 'learning' },
]

export const skillStatusLabel = {
  learning: 'Currently Learning',
  practiced: 'Practiced',
  completed: 'Completed Course',
  demonstrated: 'Demonstrated in Project',
}

// ── Education & learning ───────────────────────────────────────────────────
// No invented course dates, grades, diplomas, or certifications.
export const education = {
  label: '02 / Education & Learning',
  items: [
    {
      title: 'Plus Two (+2)',
      detail: 'Completed',
      note: 'Pre-university education',
    },
    {
      title: 'Digital Marketing',
      detail: 'Student',
      note: 'Catalyst Academy, Calicut, Kerala',
    },
  ],
  // TODO(owner): if genuine certificates are supplied later, add them to a
  // certificates array and render a certificate gallery. Do not fabricate.
  certificates: [],
}

// ── Process (a proposed working method — not proven client results) ───────
export const process = {
  label: '03 / How I Approach a Project',
  intro:
    "A working method I'm developing as I learn — a way to think clearly before producing anything. It's a proposed process, not a track record of client wins.",
  steps: [
    {
      step: '01',
      title: 'Understand',
      description:
        'Start with the business, the audience, and the objective. Clarity here shapes everything that follows.',
    },
    {
      step: '02',
      title: 'Research',
      description:
        'Study the audience, search intent, and the relevant opportunities. Let evidence guide the direction.',
    },
    {
      step: '03',
      title: 'Plan',
      description:
        'Shape a focused, realistic approach before any content is made. Prioritise what matters.',
    },
    {
      step: '04',
      title: 'Create',
      description:
        'Develop appropriate content or creative concepts that fit the goal and the audience.',
    },
    {
      step: '05',
      title: 'Review',
      description:
        'Step back, evaluate the work, and identify what could be clearer, sharper, or simpler.',
    },
    {
      step: '06',
      title: 'Learn & Improve',
      description:
        'Refine based on feedback and whatever evidence is available. Treat each project as a lesson.',
    },
  ],
}

// ── Personal brand story (themes, not invented anecdotes) ────────────────
export const brandStory = {
  label: 'The Person Behind the Portfolio',
  heading: 'Learning through curiosity.',
  points: [
    'Learning through curiosity, one project at a time.',
    'Exploring the relationship between creativity and technology.',
    'Understanding how people discover brands online.',
    'Developing a visual and strategic perspective.',
    'Building practical digital marketing skills.',
    'Improving through practice and feedback.',
  ],
}

// ── Navigation ────────────────────────────────────────────────────────────
export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Learning', to: '/learning' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

// ── Social links (leave url empty to hide) ────────────────────────────────
// TODO(owner): add real profile URLs when supplied. Do not invent URLs.
export const socialLinks = [
  { label: 'Instagram', url: '' },
  { label: 'LinkedIn', url: '' },
  { label: 'Facebook', url: '' },
]

// ── Footer ────────────────────────────────────────────────────────────────
export const footerStatement =
  'Digital marketing student exploring how strategy, content, and creativity grow ideas online.'
