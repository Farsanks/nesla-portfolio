# Nesla Fathima — Emerald Editorial Portfolio

A premium, editorial-style personal portfolio for **Nesla Fathima**, a digital
marketing student at Catalyst Academy, Calicut. Built with React + Vite +
Tailwind CSS + Framer Motion + React Router — JavaScript only, no TypeScript.

> **Truthfulness is a feature.** This site intentionally contains **no invented
> experience, clients, results, testimonials, awards, certifications, or
> contact details.** Anything not yet confirmed is a clearly-labeled placeholder
> marked `TODO(owner)`, and the UI hides it rather than publishing a fake value.

---

## Quick start

Requirements: **Node.js 18+** (developed on Node 22) and npm.

```bash
npm install      # install dependencies
npm run dev      # dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the production build at http://localhost:4173
```

---

## Tech stack

React 18 · Vite 5 · Tailwind CSS 3 (PostCSS) · Framer Motion · Lucide React ·
React Router 6 · React Helmet Async · Fontsource (self-hosted fonts).
**No TypeScript**, per project requirements. **No backend** — it is a static
single-page app.

---

## Project structure

```
nesla-portfolio/
├─ index.html              # HTML shell + fallback meta for crawlers
├─ vite.config.js          # Vite config + vendor chunk splitting
├─ tailwind.config.js      # Emerald Editorial design tokens
├─ postcss.config.js       # Tailwind v3 PostCSS pipeline
├─ vercel.json             # SPA rewrite + asset caching (Vercel)
├─ netlify.toml            # SPA redirect + headers (Netlify)
├─ public/
│  ├─ favicon.svg
│  ├─ og-image.svg         # social share image (placeholder)
│  ├─ robots.txt           # UPDATE sitemap URL before deploy
│  ├─ sitemap.xml          # UPDATE domain before deploy
│  └─ images/nesla/        # ← genuine photos go here
│     ├─ hero/  portraits/  gallery/  projects/  social/
├─ src/
│  ├─ main.jsx             # entry (Router + HelmetProvider + MotionConfig)
│  ├─ App.jsx             # routes (Home eager; others lazy/code-split)
│  ├─ config/
│  │  ├─ site.js          # ★ domain, contact placeholders, brand
│  │  └─ keywords.js      # ★ per-page primary keyword map
│  ├─ data/
│  │  ├─ portfolioData.js # ★ identity, hero, about, skills, process, nav,
│  │  │                    #   education, social links, images
│  │  ├─ servicesData.js  # ★ service cards + full service-page content
│  │  ├─ projectsData.js  # ★ labeled practice/concept projects
│  │  ├─ blogData.js       # ★ articles (each with its own keyword)
│  │  └─ seoData.js        # ★ per-route titles + descriptions
│  ├─ components/          # Navbar, MobileMenu, Footer, Button, SEO, Photo,
│  │                       # SectionHeading, ServiceIcon, ServicePageTemplate,
│  │                       # Hero/About/PhotoGallery/Services/Skills/Education/
│  │                       # Process/Projects/ContactForm/WhatsApp/BackToTop
│  ├─ pages/               # Home, About, Services, SeoService,
│  │                       # SocialMediaMarketing, GoogleAds, GraphicDesign,
│  │                       # Learning, Projects, ProjectDetail, Blog, BlogPost,
│  │                       # Contact, NotFound
│  ├─ hooks/useReducedMotionPreference.js
│  └─ styles/index.css     # Tailwind layers + global base
```

★ = the files you edit to update content. You should rarely need to touch
components.

---

## Updating personal details

Most content lives in **`src/data/portfolioData.js`** and **`src/config/site.js`**.

| What | Where |
|------|-------|
| Name, education, institute, focus area | `portfolioData.js` → `profile` |
| Hero headline, subheading, CTAs | `portfolioData.js` → `hero` |
| About copy, info panel, traits | `portfolioData.js` → `about` |
| Skills + learning status | `portfolioData.js` → `skills` |
| Process steps | `portfolioData.js` → `process` |
| Education timeline | `portfolioData.js` → `education` |
| Navigation items | `portfolioData.js` → `navItems` |
| Social links | `portfolioData.js` → `socialLinks` |
| Production domain | `src/config/site.js` → `siteUrl` |

### ⚠️ Verify the Wayanad location before publishing

The target market is **Wayanad, Kerala**, but whether Nesla *lives* there is
**unconfirmed**. Current copy phrases this as a *focus area* ("focus area:
Wayanad") and SEO titles use honest framing ("Aspiring", "Becoming a …").

- If confirmed she lives in Wayanad → it is safe to say "Based in Wayanad".
- If not confirmed → keep the current neutral "focus area" phrasing.

Search the codebase for `TODO(owner)` and `Wayanad` to review every occurrence.
**Do not** create a fake business address, Google Business Profile, or
`LocalBusiness` structured data.

---

## Adding / replacing photographs

Genuine photos are the heart of this design. Until they arrive, every photo
slot shows an elegant, clearly-labeled **placeholder** (never a fake portrait).

1. Put files in `public/images/nesla/<hero | portraits | gallery | projects>/`.
   Prefer **WebP** or **AVIF**.
2. Set the `src` field in the relevant image config (in `portfolioData.js`):

```js
export const images = {
  hero:    { src: '/images/nesla/hero/nesla-hero.webp', alt: 'Portrait of Nesla Fathima', label: 'Nesla Fathima' },
  about:   { src: '/images/nesla/about/nesla-about.webp', alt: '…', label: 'Nesla Fathima' },
  portraits: [ { src: '/images/nesla/portraits/nesla-portrait-01.webp', alt: '…', label: 'Nesla Fathima' } ],
  gallery:   [ /* at least 2 real images → the gallery section appears automatically */ ],
  projects:  [ /* referenced from projectsData.js image fields */ ],
}
```

That's it — the `Photo` component swaps the placeholder for the real `<img>`
automatically. The hero image loads eagerly (good LCP); all others lazy-load.

**Write meaningful `alt` text for real photos.** Leave `alt` empty only for
purely decorative images.

---

## Adding a project

Edit **`src/data/projectsData.js`**. Every project **must** carry an honest
`kind` label: `'Concept Project'` | `'Practice Project'` | `'Learning Project'`.

```js
{
  slug: 'unique-url-slug',
  title: 'Project title',
  category: 'Social Media Marketing',
  kind: 'Concept Project',
  image: { src: '', alt: '…', label: '…' }, // src empty → placeholder
  brief: 'One-line summary.',
  objective: 'What the exercise practiced.',
  approach: ['Step…', 'Step…'],
  deliverables: ['…', '…'],
  tools: ['Canva (learning)'], // only tools genuinely used; [] if none
  lessons: ['…', '…'],
  featured: false,
}
```

Add the new slug to `public/sitemap.xml`. **Do not add a `results` field**
unless genuine, documented results exist — none do today. If `projects` is
empty, the listing shows a tasteful empty state.

---

## Adding a service

1. Add a card to **`src/data/servicesData.js` → `services`** (icon, status,
   description, outcome, route). Set `route: null` if it has no detail page.
2. For a detail page, add an entry to **`servicePages`** keyed by its route
   (`/seo`, `/social-media-marketing`, `/google-ads`, `/graphic-design`):
   `keyword`, `eyebrow`, `title`, `intro`, `sections`, `workflow`, `benefits`,
   `faqs` (and optional `tools`).
3. Create a page component in `src/pages/` that returns
   `<ServicePageTemplate page={servicePages['/route']} />` (copy
   `SeoService.jsx` as a template) and add the route in `src/App.jsx`.
4. Add the page's primary keyword to **`src/config/keywords.js`** and a title
   + description to **`src/data/seoData.js`**.
5. Add the URL to `public/sitemap.xml`.

Body block types for `sections[].body`: `{ type: 'p', text }`,
`{ type: 'list', items: [...] }`, `{ type: 'callout', text }`.

**Status labels (keep them honest):** `learning` → "Learning Focus"
(default). Use `developing` or `available` only when the owner confirms.
Never promise guaranteed rankings, leads, sales, or ROAS.

---

## Adding a blog article

Add an object to the `articles` array in **`src/data/blogData.js`**:

```js
{
  slug: 'unique-url-slug',
  title: 'Article title',
  keyword: 'A unique primary keyword for THIS article', // each = own keyword
  metaTitle: 'Title — Nesla Fathima',
  metaDescription: '150–160 char description',
  category: 'SEO',
  excerpt: 'Short summary for the listing card.',
  author: 'Nesla Fathima',
  publishedAt: 'YYYY-MM-DD',
  updatedAt: 'YYYY-MM-DD',
  readingTime: 5,
  status: 'sample', // 'sample' until reviewed/approved
  featured: false,
  body: [
    { type: 'p', text: '…' },
    { type: 'h2', text: '…' },
    { type: 'list', items: ['…', '…'] },
    { type: 'callout', text: '…' },
  ],
  relatedSlugs: ['other-slug', 'another-slug'],
}
```

Add the slug to `public/sitemap.xml`. Article structured data (JSON-LD
`BlogPosting`) is generated automatically. Articles are labeled **Sample**
while `status === 'sample'`. **Do not** fabricate research, statistics, or
quotations.

---

## Updating keywords

Edit **`src/config/keywords.js`** for page-level keywords, and the per-article
`keyword` in `blogData.js`. The current map:

| Route | Primary keyword |
|------|-----------------|
| `/` | Freelance Digital Marketer in Wayanad |
| `/about` | Digital Marketer in Wayanad |
| `/services` | Digital Marketing Services in Wayanad |
| `/seo` | SEO Expert in Wayanad |
| `/social-media-marketing` | Social Media Manager in Wayanad |
| `/google-ads` | Google Ads Specialist in Wayanad |
| `/graphic-design` | Freelance Graphic Designer in Wayanad |
| `/blog` | Digital Marketing Blog |
| `/contact` | Contact Digital Marketer in Wayanad |
| `/blog/:slug` | (unique per article — see blogData.js) |

Use keywords naturally in titles, descriptions, H1s, and opening content —
never stuff them or write awkward sentences. Honest framing ("aspiring",
"becoming a", "focus area") keeps the keywords usable without overclaiming.

---

## Configuring contact links

All contact details are placeholders in **`src/config/site.js` → `site.contact`**:

```js
contact: {
  email: '',     // TODO(owner): real email
  phone: '',     // TODO(owner): international format, e.g. +91XXXXXXXXXX
  whatsapp: '',  // TODO(owner): same format as phone if WhatsApp is enabled
}
```

The UI fails **safe** — empty values are hidden, never published as fakes:

- **Email button** (Contact page) appears only when `email` is set.
- **WhatsApp floating button** renders only when `whatsapp` is set.
- **Social links** (`portfolioData.js` → `socialLinks`) render only when their
  `url` is non-empty.

### The contact form is a front-end demo

`src/components/ContactForm.jsx` validates input and gives honest feedback,
but **no message is actually delivered** — there is no backend. To enable real
delivery:

1. Choose a service: **Formspree**, **Resend**, **EmailJS**, or your own API.
2. Replace the form's `onSubmit` handling with a real `fetch` to that service.
3. **Never** put API keys in front-end source. Use a serverless function or a
   form service that accepts a public form ID.

If `site.contact.email` is set, the form offers a real `mailto:` link as a
genuine fallback. Otherwise it clearly tells the visitor delivery is not
configured yet — it never fakes a successful send.

---

## SEO architecture

- **Per-page metadata** via `src/components/SEO.jsx` (React Helmet Async):
  title, description, canonical, Open Graph, Twitter card, robots.
- **Primary keyword map** in `src/config/keywords.js` — one keyword per page.
- **Blog articles** each carry their own `keyword`.
- **Structured data** (JSON-LD): `Person` (home), `FAQPage` (service pages),
  `BlogPosting` (blog posts). No `LocalBusiness` schema (no confirmed address).
- **`robots.txt`** and a static **`sitemap.xml`** in `public/`.
- **Custom 404** (`NotFound.jsx`) with `noindex`.
- **Fallback meta** in `index.html` for crawlers that don't run JS.

### ⚠️ SPA + SEO caveat (read before deploy)

This is a **client-rendered single-page app**. Per-page titles, descriptions,
and content are injected by JavaScript. `index.html` carries **fallback**
metadata (the homepage's) which crawlers that don't execute JS see for every
route. The metadata + sitemap + structured data make the site *crawlable* but
do **not** guarantee indexing or ranking — content quality decides the rest.

For best-in-class SEO, **prerender** routes to static HTML at build time
before going live. Options: `vite-plugin-prerender` / `vite-plugin-ssg`,
Vercel's edge-side prerendering, or a build step that crawls routes with a
headless browser. This is a recommended **future enhancement**, not yet
implemented.

---

## Accessibility

- Semantic HTML, one `<h1>` per page, logical heading hierarchy.
- Keyboard-navigable mobile menu (focus on open, `Escape` to close,
  scroll-lock while open, closes on navigation).
- Visible emerald focus rings (`:focus-visible`).
- Accessible forms: labeled fields, `aria-invalid`, `role="alert"` errors,
  honeypot spam field.
- `prefers-reduced-motion` respected globally (Framer Motion `MotionConfig`
  plus a CSS short-circuit).
- Color is never the sole carrier of information.
- FAQ uses native `<details>` accordions (no JS, keyboard-friendly).

Full WCAG validation requires manual testing with assistive technology.

---

## Performance

- **Route-level code splitting** — Home is eager; all other routes are
  lazy-loaded chunks. Shared modules (Navbar, Footer, data files) are hoisted
  into common chunks by Rollup.
- **Vendor splitting** — `react`, `motion`, `icons` chunks.
- **Self-hosted fonts** via Fontsource, latin subset only.
- Minimal JS — no heavy animation payloads beyond Framer Motion; no 3D, no
  background video. No layout-shifting images.
- The hero image loads eagerly (good LCP); all other images lazy-load.

> Scores: this site is built to perform well, but **Lighthouse numbers must be
> measured against the deployed URL** — they are not claimed here.

---

## Deployment

The project builds to a static `dist/` folder, suitable for **Vercel** or
**Netlify**. SPA rewrites are preconfigured (`vercel.json`, `netlify.toml`) so
deep links like `/seo` or `/blog/:slug` work on direct access.

### Before you deploy — checklist

1. **Set the production domain** in `src/config/site.js` → `siteUrl`
   (replace `https://example.com`).
2. **Update `public/robots.txt`** → `Sitemap:` line with the real domain.
3. **Update `public/sitemap.xml`** → every `<loc>` with the real domain.
4. **Update `index.html`** fallback `canonical` and `og:url` to the real domain.
5. **Configure contact** (`site.contact.email`, `whatsapp`, `phone`).
6. **Configure social links** in `portfolioData.js` → `socialLinks`.
7. **Verify the Wayanad location** phrasing (see above).
8. **Add genuine photographs** to `public/images/nesla/` and set their `src`.
9. **Review blog articles** and flip `status: 'sample'` → published once
   approved (remove the `Sample` badge by changing `status`).
10. Run `npm run build` — it must succeed with no errors.
11. **(Recommended)** Set up prerendering for SEO (see SPA caveat above).

### Vercel

- Import the repo; framework auto-detected as Vite.
- Build command: `npm run build` · Output dir: `dist`.
- `vercel.json` handles SPA rewrites + asset caching.
- Add your custom domain in **Project → Settings → Domains**, then update
  `siteUrl`, `robots.txt`, and `sitemap.xml` to that domain.

### Netlify

- `netlify.toml` is preconfigured (build, publish, SPA redirect, headers).
- Add your custom domain in **Site → Domain settings**, then update
  `siteUrl`, `robots.txt`, and `sitemap.xml`.

**Do not expose any credentials or API keys in the repo.** Use the host's
environment variables for any serverless functions.

---

## License & content

Code is original project scaffolding. All personal content belongs to
Nesla Fathima. Blog articles are original, clearly labeled **sample** content
pending review. No stock photos are used as portraits of Nesla.
