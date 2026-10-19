// ─────────────────────────────────────────────────────────────────────────
// Per-route SEO metadata (title + meta description).
// Titles are unique per route and use honest framing around the keyword
// ("aspiring" / "becoming" / "focus area") so nothing overclaims expertise
// or a confirmed location. Titles use the focus area (Wayanad) without
// stating a residence or business address.
// ─────────────────────────────────────────────────────────────────────────

export const seoData = {
  '/': {
    title: 'Nesla Fathima — Aspiring Freelance Digital Marketer in Wayanad',
    description:
      'Nesla Fathima is a digital marketing student at Catalyst Academy, Calicut, and an aspiring freelance digital marketer focusing on Wayanad, Kerala — exploring SEO, social media, content, and creative digital growth.',
  },
  '/about': {
    title: 'About Nesla Fathima — Aspiring Digital Marketer in Wayanad',
    description:
      'The person behind the journey: Nesla Fathima, a Plus Two graduate and digital marketing student at Catalyst Academy, Calicut, with a focus on Wayanad, Kerala. Curiosity, creativity, and a learning mindset.',
  },
  '/services': {
    title: 'Digital Marketing Services in Wayanad — Nesla Fathima',
    description:
      'Areas Nesla Fathima is learning and developing — SEO, social media marketing, Google Ads, graphic design, content planning, and digital marketing strategy, with a focus on Wayanad, Kerala.',
  },
  '/seo': {
    title: 'Becoming an SEO Expert in Wayanad — Nesla Fathima',
    description:
      'Nesla Fathima is studying SEO fundamentals — keyword research, search intent, on-page SEO, internal linking, technical and local SEO — with a focus on Wayanad, Kerala. A learning journey, not a claimed expertise.',
  },
  '/social-media-marketing': {
    title: 'Becoming a Social Media Manager in Wayanad — Nesla Fathima',
    description:
      'Nesla Fathima is learning social media marketing — strategy, audience research, content planning, calendars, brand consistency, and engagement — with a focus on Wayanad, Kerala.',
  },
  '/google-ads': {
    title: 'Becoming a Google Ads Specialist in Wayanad — Nesla Fathima',
    description:
      'Nesla Fathima is learning Google Ads fundamentals — campaign structure, keyword targeting, ad copy, budgets, and conversion tracking — with a focus on Wayanad, Kerala. No invented results.',
  },
  '/graphic-design': {
    title: 'Learning to Be a Freelance Graphic Designer in Wayanad — Nesla Fathima',
    description:
      'Nesla Fathima is developing graphic design skills for marketing — social media graphics, typography, color, visual hierarchy, and brand consistency — with a focus on Wayanad, Kerala.',
  },
  '/learning': {
    title: 'Learning Journey — Digital Marketing Student | Nesla Fathima',
    description:
      'Skills in progress, education, and the process Nesla Fathima is developing as a digital marketing student at Catalyst Academy, Calicut, with a focus on Wayanad, Kerala.',
  },
  '/projects': {
    title: 'Practice Projects — Nesla Fathima | Digital Marketing Student',
    description:
      'Clearly labeled practice and concept projects by Nesla Fathima — SEO exercises, social media concepts, and design drafts created while learning digital marketing.',
  },
  '/blog': {
    title: 'Digital Marketing Blog — Nesla Fathima',
    description:
      'Sample articles on digital marketing fundamentals — SEO, search intent, social media planning, local SEO, and Google Ads — written as learning notes by Nesla Fathima.',
  },
  '/contact': {
    title: 'Contact Nesla Fathima — Aspiring Digital Marketer in Wayanad',
    description:
      'Get in touch with Nesla Fathima, a digital marketing student focusing on Wayanad, Kerala. Contact details appear once confirmed; until then, use the form or social links.',
  },
  '404': {
    title: 'Page Not Found — Nesla Fathima',
    description: 'The page you were looking for does not exist.',
    noindex: true,
  },
}

// Default OG image (placeholder until a real share image is supplied).
export const defaultOgImage = '/og-image.svg'
