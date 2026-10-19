import { motion } from 'framer-motion'
import { Check, ArrowUpRight, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from './SEO'
import Navbar from './Navbar'
import Footer from './Footer'
import Button from './Button'
import { seoData } from '../data/seoData'
import { serviceStatusLabel } from '../data/servicesData'
import useReducedMotionPreference from '../hooks/useReducedMotionPreference'

// Renders a complete service page from a data object in servicePages.
// Includes: header (eyebrow, H1, intro, status), body sections, workflow,
// benefits, optional tools, FAQs (accessible <details> accordions), and
// FAQPage JSON-LD structured data generated from the FAQs.
export default function ServicePageTemplate({ page }) {
  const reduce = useReducedMotionPreference()
  const meta = seoData[page.route]

  const fade = (delay = 0) =>
    reduce
      ? { initial: false, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-80px' },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        }

  // Honest FAQ structured data — only genuine, accurate content.
  const faqJsonLd = page.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: page.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        path={page.route}
        keyword={page.keyword}
        type="article"
        jsonLd={faqJsonLd}
      />
      <Navbar />
      <main>
        {/* Header */}
        <section className="relative overflow-hidden border-b border-hairline bg-ink-950 pt-28 pb-16 md:pt-36 md:pb-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(50% 50% at 80% 20%, rgba(0,200,120,0.12), rgba(0,0,0,0) 60%)',
            }}
          />
          <div className="relative mx-auto max-w-editorial px-6">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-eyebrow text-muted transition-colors hover:text-emerald"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              All services
            </Link>
            <p className="mt-8 font-mono text-xs uppercase tracking-eyebrow text-emerald">
              {page.eyebrow}
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.06] tracking-tight text-paper sm:text-5xl md:text-6xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
              {page.intro}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-green-line px-4 py-1.5 font-mono text-[11px] uppercase tracking-eyebrow text-emerald">
                {serviceStatusLabel[page.status]}
              </span>
              <Button to="/contact" variant="ghost" arrow>
                Discuss this
              </Button>
            </div>
          </div>
        </section>

        {/* Body sections */}
        <section className="bg-ink-950 py-20 md:py-28">
          <div className="mx-auto max-w-editorial px-6">
            <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12">
              <div className="lg:col-span-8">
                {page.sections.map((section, i) => (
                  <motion.div key={i} {...fade(0)} className="mb-12 last:mb-0">
                    <h2 className="font-display text-2xl font-semibold text-paper sm:text-3xl">
                      <span className="mr-3 font-mono text-sm text-emerald/70">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {section.heading}
                    </h2>
                    <div className="mt-5 space-y-4">
                      {section.body.map((block, j) => {
                        if (block.type === 'list') {
                          return (
                            <ul key={j} className="space-y-2.5">
                              {block.items.map((item, k) => (
                                <li key={k} className="flex gap-3 text-mist">
                                  <span
                                    aria-hidden="true"
                                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald"
                                  />
                                  <span className="leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          )
                        }
                        if (block.type === 'callout') {
                          return (
                            <p
                              key={j}
                              className="rounded-[2px] border-l-2 border-emerald bg-deep-emerald/30 p-5 text-mist"
                            >
                              {block.text}
                            </p>
                          )
                        }
                        return (
                          <p key={j} className="leading-relaxed text-mist">
                            {block.text}
                          </p>
                        )
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Sidebar: workflow + benefits + tools */}
              <aside className="lg:col-span-4">
                {page.workflow ? (
                  <div className="rounded-[2px] border border-hairline bg-ink-900 p-6">
                    <p className="font-mono text-[11px] uppercase tracking-eyebrow text-emerald/80">
                      Working method
                    </p>
                    <ol className="mt-5 space-y-5">
                      {page.workflow.map((w) => (
                        <li key={w.step} className="flex gap-4">
                          <span className="font-mono text-sm text-emerald">{w.step}</span>
                          <div>
                            <p className="font-display text-sm font-semibold text-paper">
                              {w.title}
                            </p>
                            <p className="mt-1 text-sm text-muted">{w.description}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                ) : null}

                {page.benefits?.length ? (
                  <div className="mt-6 rounded-[2px] border border-hairline bg-ink-900 p-6">
                    <p className="font-mono text-[11px] uppercase tracking-eyebrow text-emerald/80">
                      Why it matters
                    </p>
                    <ul className="mt-5 space-y-3">
                      {page.benefits.map((b, i) => (
                        <li key={i} className="flex gap-3 text-sm text-mist">
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-emerald"
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {page.tools?.length ? (
                  <div className="mt-6 rounded-[2px] border border-hairline bg-ink-900 p-6">
                    <p className="font-mono text-[11px] uppercase tracking-eyebrow text-emerald/80">
                      Tools I&apos;m learning
                    </p>
                    <ul className="mt-5 space-y-3">
                      {page.tools.map((t) => (
                        <li key={t.name} className="flex items-center justify-between text-sm">
                          <span className="text-paper">{t.name}</span>
                          <span className="font-mono text-[11px] uppercase tracking-eyebrow text-muted">
                            {t.status === 'learning' ? 'Learning' : t.status}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs text-muted">
                      Only tools I am actually using are listed. No mastery is implied.
                    </p>
                  </div>
                ) : null}
              </aside>
            </div>
          </div>
        </section>

        {/* FAQs */}
        {page.faqs?.length ? (
          <section className="border-t border-hairline bg-ink-900 py-20 md:py-28">
            <div className="mx-auto max-w-3xl px-6">
              <p className="font-mono text-xs uppercase tracking-eyebrow text-emerald">
                Frequently asked
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-paper sm:text-4xl">
                Honest answers.
              </h2>
              <div className="mt-10 divide-y divide-hairline border-y border-hairline">
                {page.faqs.map((f, i) => (
                  <details key={i} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                      <span className="font-display text-lg text-paper">{f.q}</span>
                      <span
                        aria-hidden="true"
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-hairline text-emerald transition-transform duration-300 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-mist">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* CTA */}
        <section className="border-t border-hairline bg-ink-950 py-20 md:py-24">
          <div className="mx-auto flex max-w-editorial flex-col items-start gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-eyebrow text-emerald">
                Curious about this?
              </p>
              <h2 className="mt-4 font-display text-2xl font-semibold text-paper sm:text-3xl">
                Let&apos;s talk about {page.title.toLowerCase()}.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button to="/contact" variant="primary" arrow>
                Let&apos;s Connect
              </Button>
              <Button to="/services" variant="ghost">
                All services
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
