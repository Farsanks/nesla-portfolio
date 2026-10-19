// ─────────────────────────────────────────────────────────────────────────
// Blog articles — data-driven, each with its OWN unique primary keyword.
//
// HONESTY: every article is `status: 'sample'` — clearly labeled as sample
// learning content until reviewed and approved. No fabricated research,
// statistics, quotations, or case studies. Content is original, written
// as learning notes in plain English.
//
// Body block types used by BlogPost.jsx:
//   { type: 'p', text }       → paragraph
//   { type: 'h2', text }       → section heading
//   { type: 'list', items }   → bullet list
//   { type: 'callout', text } → highlighted note
// ─────────────────────────────────────────────────────────────────────────

export const blogCategories = [
  'Fundamentals',
  'SEO',
  'Local SEO',
  'Social Media',
  'Paid Ads',
]

export const articles = [
  {
    slug: 'digital-marketing-basics-for-beginners',
    title: 'Digital Marketing Basics for Beginners',
    keyword: 'Digital Marketing Basics for Beginners',
    metaTitle: 'Digital Marketing Basics for Beginners — Nesla Fathima',
    metaDescription:
      'A beginner-friendly introduction to digital marketing — what it is, the main channels, and how they fit together. Sample learning notes by Nesla Fathima.',
    category: 'Fundamentals',
    excerpt:
      'A simple, honest starting point: what digital marketing actually is, the main channels, and how they fit into one bigger picture.',
    author: 'Nesla Fathima',
    publishedAt: '2026-10-18',
    updatedAt: '2026-10-18',
    readingTime: 5,
    status: 'sample',
    featured: true,
    body: [
      { type: 'p', text: 'Digital marketing can feel like a wall of jargon. This is a simple starting point — what it is, the main channels, and how they fit together. I wrote these notes as a learner, not an expert.' },
      { type: 'h2', text: 'What digital marketing actually is' },
      { type: 'p', text: 'At its core, digital marketing is reaching people online with something useful, in a way that matches a goal — awareness, trust, or action. The channels are different shapes, but the goal is the same: connect the right message to the right people.' },
      { type: 'h2', text: 'The main channels' },
      { type: 'list', items: [
        'SEO — helping content get found through search',
        'Social media — building presence and conversation',
        'Paid ads — reaching people through targeted placements',
        'Content — useful material that earns attention',
        'Email — direct, ongoing contact with interested people',
      ] },
      { type: 'h2', text: 'How they fit together' },
      { type: 'p', text: 'No single channel does everything. A search brings someone in, content keeps them, social keeps the relationship warm, and email deepens it. The skill is choosing where to start and how the pieces connect.' },
      { type: 'callout', text: 'This article is sample learning content, clearly labeled as such. It’s not professional advice or a proven strategy.' },
    ],
    relatedSlugs: ['seo-fundamentals-beginners-guide', 'social-media-content-planning-basics'],
  },

  {
    slug: 'seo-fundamentals-beginners-guide',
    title: 'SEO Fundamentals: A Beginner’s Guide',
    keyword: 'SEO Fundamentals for Beginners',
    metaTitle: 'SEO Fundamentals for Beginners — Nesla Fathima',
    metaDescription:
      'A beginner’s guide to SEO fundamentals — keywords, intent, on-page basics, and how search engines discover content. Sample learning notes by Nesla Fathima.',
    category: 'SEO',
    excerpt:
      'What SEO is, how search engines discover content, and the fundamentals worth learning first — without the hype.',
    author: 'Nesla Fathima',
    publishedAt: '2026-10-18',
    updatedAt: '2026-10-18',
    readingTime: 6,
    status: 'sample',
    featured: false,
    body: [
      { type: 'p', text: 'SEO is often sold as a mystery. It isn’t. It’s a set of clear fundamentals — and learning them in order makes the rest much easier.' },
      { type: 'h2', text: 'How search engines work' },
      { type: 'p', text: 'Search engines do three things: crawl pages, store what they find, and rank results for a query. SEO is the practice of making content easy to crawl, useful to read, and relevant to rank.' },
      { type: 'h2', text: 'The fundamentals worth learning first' },
      { type: 'list', items: [
        'Keywords — the words people actually search',
        'Search intent — what someone wants from a query',
        'On-page SEO — titles, headings, and structure',
        'Internal links — how pages connect',
        'Technical basics — speed, mobile, crawlability',
      ] },
      { type: 'h2', text: 'What SEO is not' },
      { type: 'p', text: 'It isn’t tricking search engines or stuffing keywords. It’s making useful content findable. Anything that chases shortcuts tends to undo itself.' },
      { type: 'callout', text: 'These are learning notes, not a guarantee of rankings. SEO outcomes always depend on context and effort.' },
    ],
    relatedSlugs: ['search-intent-explained-simply', 'local-seo-fundamentals-small-businesses'],
  },

  {
    slug: 'search-intent-explained-simply',
    title: 'Search Intent Explained Simply',
    keyword: 'Search Intent Explained',
    metaTitle: 'Search Intent Explained Simply — Nesla Fathima',
    metaDescription:
      'A simple explanation of search intent — informational, navigational, commercial, and transactional — and why matching content to intent matters. Sample notes by Nesla Fathima.',
    category: 'SEO',
    excerpt:
      'Why two people searching similar words might want completely different things — and how to match content to what they actually need.',
    author: 'Nesla Fathima',
    publishedAt: '2026-10-18',
    updatedAt: '2026-10-18',
    readingTime: 4,
    status: 'sample',
    featured: false,
    body: [
      { type: 'p', text: 'Search intent is the “why” behind a search. Two similar queries can want entirely different things, and matching content to intent matters more than matching keywords.' },
      { type: 'h2', text: 'The four common intents' },
      { type: 'list', items: [
        'Informational — “how does X work”',
        'Navigational — a specific brand or page',
        'Commercial — comparing options before a choice',
        'Transactional — ready to take an action',
      ] },
      { type: 'h2', text: 'Why it matters' },
      { type: 'p', text: 'Selling hard to someone who wants to learn feels wrong and performs poorly. Matching the content to the intent is what makes it useful — and useful content tends to earn trust.' },
      { type: 'callout', text: 'Reading intent is a skill I’m still developing; these notes describe the concept, not a proven playbook.' },
    ],
    relatedSlugs: ['seo-fundamentals-beginners-guide', 'digital-marketing-basics-for-beginners'],
  },

  {
    slug: 'social-media-content-planning-basics',
    title: 'Social Media Content Planning Basics',
    keyword: 'Social Media Content Planning',
    metaTitle: 'Social Media Content Planning Basics — Nesla Fathima',
    metaDescription:
      'The basics of social media content planning — themes, formats, calendars, and consistency. Sample learning notes by Nesla Fathima.',
    category: 'Social Media',
    excerpt:
      'Planning beats random posting. Here’s a simple way to think about themes, formats, and a realistic calendar.',
    author: 'Nesla Fathima',
    publishedAt: '2026-10-18',
    updatedAt: '2026-10-18',
    readingTime: 5,
    status: 'sample',
    featured: false,
    body: [
      { type: 'p', text: 'Random posting rarely builds anything. A little planning turns social media from a chore into a consistent, intentional practice.' },
      { type: 'h2', text: 'Start with themes, not posts' },
      { type: 'p', text: 'Themes give a feed a reason to exist — education, behind-the-scenes, community, gentle promotion. Posts become easier to make once themes are set.' },
      { type: 'h2', text: 'Match formats to platforms' },
      { type: 'list', items: [
        'Short, punchy text for feeds that move fast',
        'Visuals where scroll speed is high',
        'Longer notes where depth is valued',
      ] },
      { type: 'h2', text: 'A realistic calendar' },
      { type: 'p', text: 'A calendar isn’t about volume; it’s about rhythm. A sustainable plan you can keep is better than an ambitious one you can’t.' },
      { type: 'callout', text: 'These are sample planning notes, not a managed campaign for a real account.' },
    ],
    relatedSlugs: ['digital-marketing-basics-for-beginners', 'local-seo-fundamentals-small-businesses'],
  },

  {
    slug: 'local-seo-fundamentals-small-businesses',
    title: 'Local SEO Fundamentals for Small Businesses',
    keyword: 'Local SEO Fundamentals',
    metaTitle: 'Local SEO Fundamentals for Small Businesses — Nesla Fathima',
    metaDescription:
      'Local SEO fundamentals for small businesses — consistent details, local content, and map presence. Sample learning notes by Nesla Fathima.',
    category: 'Local SEO',
    excerpt:
      'How nearby customers find a small business online — the local SEO fundamentals that matter most, honestly explained.',
    author: 'Nesla Fathima',
    publishedAt: '2026-10-18',
    updatedAt: '2026-10-18',
    readingTime: 5,
    status: 'sample',
    featured: false,
    body: [
      { type: 'p', text: 'For a small business, being found by nearby people is often the whole point. Local SEO is about making that easier — honestly, without inventing a fake location.' },
      { type: 'h2', text: 'The fundamentals' },
      { type: 'list', items: [
        'Consistent name, address, and phone everywhere they appear',
        'A clear, useful local page or section on the site',
        'Genuine map and directory presence',
        'Local content that actually helps nearby readers',
      ] },
      { type: 'h2', text: 'What to avoid' },
      { type: 'p', text: 'Don’t invent a second address to target another area, and don’t stuff location keywords unnaturally. Local SEO works best when the details are real and consistent.' },
      { type: 'callout', text: 'I’m learning these fundamentals with a focus on Wayanad, Kerala. No fake business address is implied.' },
    ],
    relatedSlugs: ['seo-fundamentals-beginners-guide', 'google-ads-basics-beginners-overview'],
  },

  {
    slug: 'google-ads-basics-beginners-overview',
    title: 'Google Ads Basics: A Beginner’s Overview',
    keyword: 'Google Ads Basics for Beginners',
    metaTitle: 'Google Ads Basics for Beginners — Nesla Fathima',
    metaDescription:
      'A beginner’s overview of Google Ads — how search ads work, campaign structure, and what to learn first. Sample learning notes by Nesla Fathima.',
    category: 'Paid Ads',
    excerpt:
      'How Google Ads works, the structure that keeps it manageable, and what a beginner should learn first — with no promises of results.',
    author: 'Nesla Fathima',
    publishedAt: '2026-10-18',
    updatedAt: '2026-10-18',
    readingTime: 6,
    status: 'sample',
    featured: false,
    body: [
      { type: 'p', text: 'Paid search can feel overwhelming. The basics, though, are straightforward — and learning the structure first prevents most of the confusion.' },
      { type: 'h2', text: 'How search ads work' },
      { type: 'p', text: 'Ads appear when someone searches a relevant term. What shows up depends on a mix of bid, relevance, and the quality of the match between the ad and the query.' },
      { type: 'h2', text: 'Structure matters most' },
      { type: 'list', items: [
        'Campaigns — organized by goal',
        'Ad groups — tight, themed sets of keywords',
        'Keywords — matched to what people search',
        'Negative keywords — what to avoid',
      ] },
      { type: 'h2', text: 'What to learn first' },
      { type: 'p', text: 'Before budgets and optimization, learn structure and intent. Most beginner mistakes come from disorganized campaigns, not from bid levels.' },
      { type: 'callout', text: 'This is a learning overview. I claim no certifications, no campaign results, and no guaranteed return on ad spend.' },
    ],
    relatedSlugs: ['digital-marketing-basics-for-beginners', 'local-seo-fundamentals-small-businesses'],
  },
]

// Helpers
export const getArticleBySlug = (slug) =>
  articles.find((a) => a.slug === slug)

export const getRelatedArticles = (article) =>
  (article?.relatedSlugs || [])
    .map((s) => getArticleBySlug(s))
    .filter(Boolean)
