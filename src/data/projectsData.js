// ─────────────────────────────────────────────────────────────────────────
// Practice & concept projects — clearly labeled, honestly described.
//
// HONESTY RULES:
//  - Every project carries a `kind` label: 'Concept Project' |
//    'Practice Project' | 'Learning Project'.
//  - No invented clients, budgets, conversions, results, or statistics.
//  - `results` is intentionally omitted; add it only if genuine, documented
//    results exist (none do today).
//  - `tools` only lists tools genuinely used or explored as learning.
//
// Each project's `image` is a placeholder until a real visual is supplied.
// Set `image.src` to e.g. '/images/nesla/projects/project-01.webp' to swap.
// ─────────────────────────────────────────────────────────────────────────

export const projects = [
  {
    slug: 'wayanad-cafe-social-concept',
    title: 'Wayanad Café — Social Content Concept',
    category: 'Social Media Marketing',
    kind: 'Concept Project',
    image: { src: '', alt: 'Concept visual for a café social content plan', label: 'Social content concept' },
    brief:
      'A hypothetical café in Wayanad used as a study case to practice planning a month of social content with a consistent voice.',
    objective:
      'Practice turning a simple brand into a structured, consistent social presence rather than random posts.',
    approach: [
      'Defined a clear audience and tone for the imaginary café.',
      'Planned weekly themes (e.g. mornings, local produce, behind-the-scenes).',
      'Drafted a sample one-month content calendar with formats per platform.',
      'Sketched caption ideas and a consistent visual treatment.',
    ],
    deliverables: [
      'A sample content calendar (concept)',
      'A short content-theme document',
      'Caption and format notes',
    ],
    tools: ['Canva (learning)'],
    lessons: [
      'Consistency beats volume — a clear theme makes a feed feel intentional.',
      'Planning in advance makes posting realistic to sustain.',
    ],
    featured: true,
  },
  {
    slug: 'local-seo-audit-practice',
    title: 'Local SEO Audit Practice',
    category: 'Search Engine Optimization',
    kind: 'Practice Project',
    image: { src: '', alt: 'Illustration of a local SEO audit checklist', label: 'Local SEO audit' },
    brief:
      'A practice exercise auditing on-page and local SEO basics against a checklist, using free resources.',
    objective:
      'Learn to spot common on-page and local SEO issues before trying to fix them.',
    approach: [
      'Reviewed titles, headings, and meta descriptions for clarity.',
      'Checked heading hierarchy and internal links.',
      'Noted local fundamentals: consistent details and useful local content.',
      'Recorded observations in a simple prioritized list.',
    ],
    deliverables: [
      'A sample audit checklist (learning exercise)',
      'A short list of observations and priorities',
    ],
    tools: ['Google Search Console (learning)'],
    lessons: [
      'Most on-page SEO issues come down to clarity, not clever tricks.',
      'A checklist keeps an audit focused and repeatable.',
    ],
    featured: false,
  },
  {
    slug: 'search-campaign-structure-exercise',
    title: 'Search Campaign Structure Exercise',
    category: 'Google Ads',
    kind: 'Learning Project',
    image: { src: '', alt: 'Diagram of a sample Google Ads campaign structure', label: 'Campaign structure' },
    brief:
      'A study exercise planning how a search campaign could be structured around tight, relevant themes.',
    objective:
      'Understand how campaigns and ad groups keep paid search organized and relevant.',
    approach: [
      'Chose a simple product idea to advertise.',
      'Sketched a campaign and several tightly themed ad groups.',
      'Added sample keyword ideas and negative-keyword notes.',
      'Drafted honest headline and description copy.',
    ],
    deliverables: [
      'A sample campaign structure (concept)',
      'Keyword and ad-copy notes',
    ],
    tools: [],
    lessons: [
      'Structure is what keeps paid search manageable as it grows.',
      'Targeting intent matters more than chasing broad keywords.',
    ],
    featured: false,
  },
  {
    slug: 'festival-promotion-graphics',
    title: 'Festival Promotion Graphics',
    category: 'Graphic Design',
    kind: 'Concept Project',
    image: { src: '', alt: 'Concept promotional graphic for a festival', label: 'Festival promotion graphic' },
    brief:
      'A concept set of promotional graphics for an imagined local festival, practicing type, color, and hierarchy.',
    objective:
      'Practice making clear promotional visuals that read well at small social sizes.',
    approach: [
      'Chose a simple palette and a limited set of type styles.',
      'Built a hierarchy: headline, detail, call to action.',
      'Kept spacing generous so the message reads at a glance.',
      'Created a consistent look across a small set of creatives.',
    ],
    deliverables: [
      'A small set of concept promotional graphics',
      'Notes on palette and type choices',
    ],
    tools: ['Canva (learning)'],
    lessons: [
      'Restraint reads as confidence — fewer elements, stronger message.',
      'Hierarchy decides what people notice first.',
    ],
    featured: false,
  },
  {
    slug: 'blog-content-plan-local-brand',
    title: 'Blog Content Plan for a Local Brand',
    category: 'Content Planning',
    kind: 'Concept Project',
    image: { src: '', alt: 'Illustration of an editorial content plan', label: 'Content plan' },
    brief:
      'A concept content plan for a hypothetical local brand, practicing how to turn topics into a useful blog structure.',
    objective:
      'Learn to map topics to audience questions and a sustainable publishing rhythm.',
    approach: [
      'Listed real questions an audience might ask.',
      'Grouped questions into themes and pillar topics.',
      'Sketched a simple publishing order and internal links.',
      'Noted how each piece could support the others.',
    ],
    deliverables: [
      'A sample blog content plan (concept)',
      'A short topic-to-theme mapping',
    ],
    tools: [],
    lessons: [
      'A content plan is really an audience-question map.',
      'Internal links turn isolated posts into a useful whole.',
    ],
    featured: false,
  },
]

// Helpers
export const getProjectBySlug = (slug) =>
  projects.find((p) => p.slug === slug)

export const projectKindLabel = {
  'Concept Project': 'Concept Project',
  'Practice Project': 'Practice Project',
  'Learning Project': 'Learning Project',
}
