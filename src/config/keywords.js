// ─────────────────────────────────────────────────────────────────────────
// Per-page primary keyword map (Section 16 of the brief).
// One primary keyword per page. Blog articles each carry their own keyword
// inside src/data/blogData.js (added in a later phase).
//
// Location note: keywords target Wayanad, but Nesla's residence is unconfirmed.
// Keywords may appear in titles/meta/content as a focus area without falsely
// claiming a physical address. Visible copy uses honest framing
// (e.g. "aspiring", "becoming", "focus area").
// ─────────────────────────────────────────────────────────────────────────

export const keywords = {
  '/': 'Freelance Digital Marketer in Wayanad',
  '/about': 'Digital Marketer in Wayanad',
  '/services': 'Digital Marketing Services in Wayanad',
  '/seo': 'SEO Expert in Wayanad',
  '/social-media-marketing': 'Social Media Manager in Wayanad',
  '/google-ads': 'Google Ads Specialist in Wayanad',
  '/graphic-design': 'Freelance Graphic Designer in Wayanad',
  '/blog': 'Digital Marketing Blog',
  '/contact': 'Contact Digital Marketer in Wayanad',
}

// Helper for pages that aren't in the core map.
export const keywordFor = (path) => keywords[path] || null
