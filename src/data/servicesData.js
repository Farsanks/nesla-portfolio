import { keywords } from '../config/keywords'

// ─────────────────────────────────────────────────────────────────────────
// Services data — overview cards + full per-service page content.
// HONESTY: every item is a learning focus unless the owner confirms it's
// genuinely available. No invented results, certifications, or clients.
// Status map: 'learning' → "Learning Focus" (default).
// ─────────────────────────────────────────────────────────────────────────

export const serviceStatusLabel = {
  learning: 'Learning Focus',
  developing: 'Developing Skill',
  available: 'Available Service',
}

// Overview cards shown on /services. Four have dedicated detail pages;
// Content Planning and Digital Strategy are shown as learning focuses
// without a detail route (per the brief's required service-page list).
export const services = [
  {
    slug: 'seo',
    title: 'Search Engine Optimization',
    icon: 'Search',
    status: 'learning',
    description:
      'Helping useful content get found by the right people — keywords, intent, on-page, technical and local fundamentals.',
    outcome: 'A clearer structure that connects content to real search demand.',
    route: '/seo',
    keyword: keywords['/seo'],
  },
  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    icon: 'Share2',
    status: 'learning',
    description:
      'Strategy, audience research, content planning, calendars, and engagement for organic social growth.',
    outcome: 'A consistent, intentional social presence rather than random posts.',
    route: '/social-media-marketing',
    keyword: keywords['/social-media-marketing'],
  },
  {
    slug: 'google-ads',
    title: 'Google Ads',
    icon: 'Target',
    status: 'learning',
    description:
      'Search advertising fundamentals — campaign structure, keyword targeting, ad copy, budgets, and tracking.',
    outcome: 'An understanding of how paid search works and how to plan it responsibly.',
    route: '/google-ads',
    keyword: keywords['/google-ads'],
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    icon: 'Palette',
    status: 'learning',
    description:
      'Marketing visuals — social graphics, typography, color, and visual hierarchy that keep a brand consistent.',
    outcome: 'Clean, on-brand creatives that communicate clearly.',
    route: '/graphic-design',
    keyword: keywords['/graphic-design'],
  },
  {
    slug: 'content-planning',
    title: 'Content Planning',
    icon: 'CalendarClock',
    status: 'learning',
    description:
      'Turning topics into a realistic plan — what to make, for whom, and in what order.',
    outcome: 'A content approach that maps to audience and goals.',
    route: null,
    keyword: null,
  },
  {
    slug: 'digital-strategy',
    title: 'Digital Marketing Strategy',
    icon: 'Compass',
    status: 'learning',
    description:
      'Bringing channels together into a focused, realistic direction instead of isolated tactics.',
    outcome: 'A simple strategic view that ties effort to purpose.',
    route: null,
    keyword: null,
  },
]

// ── Per-service detail pages ──────────────────────────────────────────────
// Body block types used by ServicePageTemplate:
//   { type: 'p', text }       → paragraph
//   { type: 'list', items }   → bullet list
//   { type: 'callout', text } → highlighted note
export const servicePages = {
  '/seo': {
    slug: 'seo',
    route: '/seo',
    keyword: keywords['/seo'],
    status: 'learning',
    eyebrow: 'Service · Learning Focus',
    title: 'Becoming an SEO expert in Wayanad.',
    intro:
      "I'm Nesla Fathima, a digital marketing student learning how search engines discover, rank, and surface content. This page maps what I'm studying in SEO — from keywords and intent to on-page, technical, and local fundamentals — with a focus on Wayanad, Kerala. It's a learning focus, not a claim of expertise or guaranteed rankings.",
    sections: [
      {
        heading: 'What SEO actually is',
        body: [
          { type: 'p', text: 'Search engine optimization is the practice of helping useful content get found by the right people. It is part technical, part editorial, and part strategic — and it shifts as search engines change how they read pages.' },
        ],
      },
      {
        heading: 'Keyword research fundamentals',
        body: [
          { type: 'p', text: 'Keywords are the bridge between what people search and what a page offers. I am learning to look at real search queries, estimate demand, and prioritize topics that match a business’s audience.' },
          { type: 'list', items: [
            'Start with the topics a business actually talks about',
            'Expand with related queries people genuinely search',
            'Note which terms show learning or buying intent',
            'Prioritise topics worth a page of their own',
          ] },
        ],
      },
      {
        heading: 'Search intent',
        body: [
          { type: 'p', text: 'Every query has an intent — to learn, to compare, to buy, or to find a specific site. Matching content to intent matters more than repeating a keyword. I am learning to read intent before planning content.' },
        ],
      },
      {
        heading: 'On-page SEO',
        body: [
          { type: 'list', items: [
            'A clear, descriptive title and meta description',
            'One logical H1 and a sensible heading hierarchy',
            'Descriptive URLs and useful internal links',
            'Alt text that meaningfully describes images',
          ] },
        ],
      },
      {
        heading: 'Content optimization',
        body: [
          { type: 'p', text: 'Good on-page SEO rests on content that is genuinely useful. I am learning to write for people first — clear structure, relevant detail, plain language — and then refine for search, never the other way around.' },
        ],
      },
      {
        heading: 'Internal linking',
        body: [
          { type: 'p', text: 'Links within a site help readers and search engines find related pages. I am learning to link contextually and descriptively, not randomly or just for keywords.' },
        ],
      },
      {
        heading: 'Technical SEO fundamentals',
        body: [
          { type: 'list', items: [
            'Fast, mobile-friendly pages',
            'Clean, crawlable URLs',
            'A logical site structure',
            'HTTPS and no major crawl errors',
          ] },
        ],
      },
      {
        heading: 'Local SEO fundamentals',
        body: [
          { type: 'p', text: 'For a focus area like Wayanad, local SEO helps nearby people find a business. I am learning about consistent name, address, and phone details, local pages, and map presence — without implying a real office or address that does not exist.' },
        ],
      },
      {
        heading: 'Search performance measurement',
        body: [
          { type: 'p', text: 'I am learning what to watch — which pages get found, which queries bring visitors, and what to improve — using free tools like Google Search Console, without promising specific rankings.' },
        ],
      },
      {
        heading: 'Learning and practice approach',
        body: [
          { type: 'callout', text: 'I treat SEO as something learned by doing: small exercises, honest observations, and iteration. This page documents what I am studying — not results I claim to have delivered.' },
        ],
      },
    ],
    workflow: [
      { step: '01', title: 'Audit', description: 'Survey what content exists and what is missing.' },
      { step: '02', title: 'Research', description: 'Find relevant queries and the intent behind them.' },
      { step: '03', title: 'Plan', description: 'Choose topics and map them to real pages.' },
      { step: '04', title: 'Optimize', description: 'Apply on-page and technical fundamentals.' },
      { step: '05', title: 'Measure', description: 'Watch what gets found, then iterate.' },
    ],
    benefits: [
      'Help useful content reach the people searching for it',
      'Build a clearer structure that helps readers and crawlers',
      'Connect a business to local search demand in its area',
      'Lay a foundation that compounds with consistent work',
      'Replace guesswork with evidence from real query data',
    ],
    faqs: [
      { q: 'Can you guarantee first-page rankings?', a: 'No. No one can honestly guarantee rankings, and I am still learning the fundamentals. I do not claim proven results.' },
      { q: 'Do you offer SEO as a paid service?', a: 'Not yet — this is a learning focus. I would collaborate only if and when I am genuinely ready, and I would say so clearly.' },
      { q: 'Is this focused on Wayanad?', a: 'The fundamentals apply anywhere; the local-SEO angle focuses on Wayanad, Kerala as my study area. No fake address or office is implied.' },
      { q: 'What tools are you learning with?', a: 'Free tools such as Google Search Console while I build understanding. I do not claim to have mastered paid platforms.' },
    ],
  },

  '/social-media-marketing': {
    slug: 'social-media-marketing',
    route: '/social-media-marketing',
    keyword: keywords['/social-media-marketing'],
    status: 'learning',
    eyebrow: 'Service · Learning Focus',
    title: 'Becoming a social media manager in Wayanad.',
    intro:
      "I'm Nesla Fathima, a digital marketing student learning how social media works as a deliberate practice — not just posting, but planning. This page outlines what I'm studying in social media marketing, with a focus on Wayanad, Kerala. It is a learning focus; I have not managed real business accounts unless clearly stated.",
    sections: [
      {
        heading: 'Social media strategy fundamentals',
        body: [
          { type: 'p', text: 'Social media works best when it serves a goal. I am learning to start with purpose — awareness, engagement, or trust — before thinking about posts or platforms.' },
        ],
      },
      {
        heading: 'Audience research',
        body: [
          { type: 'p', text: 'Good social content speaks to specific people. I am learning to ask who the audience is, where they spend time, and what they care about, instead of guessing.' },
        ],
      },
      {
        heading: 'Content planning',
        body: [
          { type: 'list', items: [
            'Match formats to the platform and the message',
            'Plan themes rather than random one-offs',
            'Balance value, story, and gentle promotion',
            'Keep a consistent voice across posts',
          ] },
        ],
      },
      {
        heading: 'Content calendar creation',
        body: [
          { type: 'p', text: 'A calendar turns intentions into a rhythm. I am learning to plan content in advance so posting stays consistent and intentional, not reactive.' },
        ],
      },
      {
        heading: 'Creative direction',
        body: [
          { type: 'p', text: 'Direction is what makes a feed feel like one brand rather than many. I am learning to think about composition, tone, and pacing as a single visual idea.' },
        ],
      },
      {
        heading: 'Brand consistency',
        body: [
          { type: 'p', text: 'Consistency builds recognition. I am learning to keep colors, type, and voice aligned across posts so the brand stays recognizable.' },
        ],
      },
      {
        heading: 'Engagement',
        body: [
          { type: 'p', text: 'Social media is a two-way channel. I am learning that replies, conversations, and genuine interaction matter as much as the posts themselves.' },
        ],
      },
      {
        heading: 'Organic growth concepts',
        body: [
          { type: 'p', text: 'I am learning how organic reach works and its limits — quality, consistency, and relevance over time, with no promise of virality.' },
        ],
      },
      {
        heading: 'Content performance analysis',
        body: [
          { type: 'p', text: 'I am learning to read basic engagement metrics — what gets saved, shared, or ignored — and use that to adjust, not to chase vanity numbers.' },
        ],
      },
      {
        heading: 'Learning and practice approach',
        body: [
          { type: 'callout', text: 'This is a learning focus. Any sample content I create is clearly labeled as practice or concept work, not live campaigns for real clients.' },
        ],
      },
    ],
    workflow: [
      { step: '01', title: 'Listen', description: 'Understand the audience and the platform context.' },
      { step: '02', title: 'Plan', description: 'Set themes, formats, and a posting rhythm.' },
      { step: '03', title: 'Create', description: 'Develop on-brand content for each slot.' },
      { step: '04', title: 'Schedule', description: 'Publish consistently with a calendar.' },
      { step: '05', title: 'Engage', description: 'Respond and interact, don’t just broadcast.' },
      { step: '06', title: 'Review', description: 'Read engagement data and adjust.' },
    ],
    benefits: [
      'A consistent, intentional presence instead of random posts',
      'Content tied to audience interests and a clear goal',
      'A recognizable look and voice across platforms',
      'A rhythm that makes posting sustainable',
      'Decisions guided by engagement, not guesswork',
    ],
    faqs: [
      { q: 'Have you managed real business accounts?', a: 'Not unless explicitly stated. What I share here is a learning focus; any sample content is clearly labeled as practice.' },
      { q: 'Which platforms do you focus on?', a: 'The fundamentals are platform-agnostic. I am learning the principles that apply across Instagram, Facebook, and similar channels.' },
      { q: 'Can you grow a following quickly?', a: 'I do not promise fast growth or virality. I am learning organic, consistent approaches, not shortcuts.' },
      { q: 'Do you offer this as a paid service?', a: 'Not yet. I would say so clearly when and if I am genuinely ready to take on real accounts.' },
    ],
  },

  '/google-ads': {
    slug: 'google-ads',
    route: '/google-ads',
    keyword: keywords['/google-ads'],
    status: 'learning',
    eyebrow: 'Service · Learning Focus',
    title: 'Becoming a Google Ads specialist in Wayanad.',
    intro:
      "I'm Nesla Fathima, a digital marketing student learning how paid search works. This page outlines what I'm studying in Google Ads — campaign structure, keyword targeting, ad copy, budgets, and tracking — with a focus on Wayanad, Kerala. It is a learning focus. I hold no invented certifications and claim no campaign results.",
    sections: [
      {
        heading: 'Search advertising fundamentals',
        body: [
          { type: 'p', text: 'Search ads appear when people look for something specific. I am learning how bidding, relevance, and intent combine to decide what gets shown.' },
        ],
      },
      {
        heading: 'Campaign structure',
        body: [
          { type: 'list', items: [
            'Group campaigns by clear goals',
            'Organize ad groups around tight themes',
            'Keep keywords relevant to their ad group',
            'Avoid mixing unrelated topics in one campaign',
          ] },
        ],
      },
      {
        heading: 'Keyword targeting',
        body: [
          { type: 'p', text: 'I am learning the difference between broad, phrase, and exact matching, and how negative keywords keep ads from showing on the wrong searches.' },
        ],
      },
      {
        heading: 'Ad copy',
        body: [
          { type: 'p', text: 'Good ad copy speaks to the searcher’s intent and earns the click. I am learning to write headlines and descriptions that are clear, honest, and relevant.' },
        ],
      },
      {
        heading: 'Audience and intent',
        body: [
          { type: 'p', text: 'Search intent shapes everything. I am learning to target people based on what they are actually trying to do, not just on who they are.' },
        ],
      },
      {
        heading: 'Budget planning',
        body: [
          { type: 'p', text: 'I am learning to plan a budget responsibly — start small, watch what happens, and scale only with reason, not hope.' },
        ],
      },
      {
        heading: 'Conversion tracking fundamentals',
        body: [
          { type: 'p', text: 'Clicks mean little without knowing what they lead to. I am learning the basics of tracking meaningful actions, not just traffic.' },
        ],
      },
      {
        heading: 'Performance measurement',
        body: [
          { type: 'p', text: 'I am learning which metrics matter — cost, click-through rate, conversions — and which are noise. I do not promise return on ad spend.' },
        ],
      },
      {
        heading: 'Responsible optimization',
        body: [
          { type: 'callout', text: 'Optimization means making careful, evidence-based changes — not chasing short-term wins. I am learning to adjust responsibly and to be honest about uncertainty.' },
        ],
      },
    ],
    workflow: [
      { step: '01', title: 'Define', description: 'Set a clear goal and a sensible budget.' },
      { step: '02', title: 'Structure', description: 'Build campaigns and ad groups around themes.' },
      { step: '03', title: 'Target', description: 'Choose keywords and intent carefully.' },
      { step: '04', title: 'Write', description: 'Draft honest, relevant ad copy.' },
      { step: '05', title: 'Track', description: 'Set up conversion tracking from the start.' },
      { step: '06', title: 'Optimize', description: 'Review data and adjust responsibly.' },
    ],
    benefits: [
      'Understand how paid search actually works',
      'Structure campaigns so they stay manageable',
      'Target by intent instead of guessing',
      'Plan budgets that start small and scale with reason',
      'Measure what matters, not just clicks',
    ],
    faqs: [
      { q: 'Are you Google Ads certified?', a: 'No. I do not claim any certification. This is a learning focus, and I will note any genuine certification only if and when I earn one.' },
      { q: 'Can you guarantee leads or sales?', a: 'No. Paid advertising carries uncertainty; I never promise leads, sales, or a specific return on ad spend.' },
      { q: 'Have you run real campaigns?', a: 'Only clearly labeled practice or learning exercises, not live client campaigns, unless explicitly stated.' },
      { q: 'Will you manage my ad budget?', a: 'Not at this stage. I am learning the fundamentals; I would say so clearly if and when I am genuinely ready.' },
    ],
  },

  '/graphic-design': {
    slug: 'graphic-design',
    route: '/graphic-design',
    keyword: keywords['/graphic-design'],
    status: 'learning',
    eyebrow: 'Service · Learning Focus',
    title: 'Learning to be a freelance graphic designer in Wayanad.',
    intro:
      "I'm Nesla Fathima, a digital marketing student developing my visual side. This page outlines what I'm practicing in graphic design for marketing — social graphics, typography, color, and hierarchy — with a focus on Wayanad, Kerala. It is a learning focus; I do not claim professional design clients.",
    sections: [
      {
        heading: 'Social media graphics',
        body: [
          { type: 'p', text: 'Most of my design practice starts on social, where visuals have to work small and fast. I am learning to make graphics that read clearly at a glance.' },
        ],
      },
      {
        heading: 'Promotional creatives',
        body: [
          { type: 'p', text: 'Promotional design has a job — to communicate an offer clearly. I am learning to balance attention with honesty, not hype.' },
        ],
      },
      {
        heading: 'Typography',
        body: [
          { type: 'list', items: [
            'Choose readable type at small sizes',
            'Keep a clear hierarchy between headline and detail',
            'Limit type styles to keep things calm',
            'Let spacing do as much work as the words',
          ] },
        ],
      },
      {
        heading: 'Color selection',
        body: [
          { type: 'p', text: 'Color sets mood and recognition. I am learning to choose palettes deliberately and to keep contrast high enough to read.' },
        ],
      },
      {
        heading: 'Visual hierarchy',
        body: [
          { type: 'p', text: 'Hierarchy tells the eye where to look first. I am learning to direct attention using size, weight, and spacing rather than clutter.' },
        ],
      },
      {
        heading: 'Brand consistency',
        body: [
          { type: 'p', text: 'Consistent design builds trust. I am learning to keep colors, type, and layout aligned across a set of creatives.' },
        ],
      },
      {
        heading: 'Marketing communication',
        body: [
          { type: 'p', text: 'Design for marketing is communication first. I am learning to make sure a visual says what it needs to before making it look good.' },
        ],
      },
      {
        heading: 'Creative process',
        body: [
          { type: 'callout', text: 'I sketch, simplify, and refine. My practice work is clearly labeled as learning or concept design, not professional client deliverables.' },
        ],
      },
    ],
    // Only tools actually being learned are listed. Do not imply mastery.
    tools: [
      { name: 'Canva', status: 'learning' },
    ],
    workflow: [
      { step: '01', title: 'Brief', description: 'Understand the message and the audience.' },
      { step: '02', title: 'Sketch', description: 'Try rough layouts before opening any tool.' },
      { step: '03', title: 'Design', description: 'Build the visual with type, color, and space.' },
      { step: '04', title: 'Refine', description: 'Simplify hierarchy and improve clarity.' },
      { step: '05', title: 'Review', description: 'Check it reads at the size it will be used.' },
    ],
    benefits: [
      'Clear, on-brand visuals that communicate quickly',
      'A thoughtful use of type, color, and space',
      'Graphics that work at small social sizes',
      'Consistency across a set of creatives',
      'Design that serves the message, not just the look',
    ],
    faqs: [
      { q: 'Have you done professional design work?', a: 'Not unless clearly stated. My design work here is a learning focus; samples are labeled as practice or concept work.' },
      { q: 'Which tools do you use?', a: 'I am currently learning Canva. I do not claim to have mastered Photoshop, Illustrator, or other professional tools.' },
      { q: 'Can you design my brand identity?', a: 'As practice, I can explore concepts — clearly labeled as learning work, not a professional engagement.' },
      { q: 'Do you offer design as a paid service?', a: 'Not yet. I would say so clearly when and if I am genuinely ready.' },
    ],
  },
}
