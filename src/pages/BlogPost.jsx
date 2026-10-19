import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { getArticleBySlug, getRelatedArticles } from '../data/blogData'
import { site } from '../config/site'
import useReducedMotionPreference from '../hooks/useReducedMotionPreference'
import NotFound from './NotFound'

function formatDate(d) {
  try {
    return new Date(d).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return d
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)

  // Unknown slug → 404.
  if (!article) return <NotFound />

  const reduce = useReducedMotionPreference()
  const related = getRelatedArticles(article)

  const fade = (delay = 0) =>
    reduce
      ? { initial: false, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-60px' },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        }

  // Honest BlogPosting structured data. No fabricated image unless supplied.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.metaDescription,
    author: { '@type': 'Person', name: article.author },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    keywords: article.keyword,
    articleSection: article.category,
  }
  if (!site.siteUrl.includes('example.com')) jsonLd.url = `${site.siteUrl.replace(/\/$/, '')}/blog/${article.slug}`

  return (
    <>
      <SEO
        title={article.metaTitle}
        description={article.metaDescription}
        path={`/blog/${article.slug}`}
        keyword={article.keyword}
        type="article"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        {/* Header */}
        <section className="relative overflow-hidden border-b border-hairline bg-ink-950 pt-28 pb-12 md:pt-36 md:pb-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(45% 45% at 80% 20%, rgba(0,200,120,0.12), rgba(0,0,0,0) 60%)',
            }}
          />
          <div className="relative mx-auto max-w-3xl px-6">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-eyebrow text-muted transition-colors hover:text-emerald"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              All notes
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-eyebrow text-emerald/80">
                {article.category}
              </span>
              {article.status === 'sample' ? (
                <span className="inline-flex items-center gap-2 rounded-full border border-green-line px-3 py-1 font-mono text-[10px] uppercase tracking-eyebrow text-emerald">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald" aria-hidden="true" />Sample
                </span>
              ) : null}
            </div>
            <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-paper sm:text-4xl md:text-5xl">
              {article.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-mist">{article.excerpt}</p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-eyebrow text-muted">
              By {article.author} · {formatDate(article.publishedAt)} · {article.readingTime} min read
              {article.updatedAt !== article.publishedAt
                ? ` · updated ${formatDate(article.updatedAt)}`
                : ''}
            </p>
          </div>
        </section>

        {/* Body */}
        <section className="bg-ink-950 py-16 md:py-24">
          <article className="mx-auto max-w-3xl px-6">
            {article.body.map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <motion.h2
                    key={i}
                    {...fade(0)}
                    className="mt-12 font-display text-2xl font-semibold text-paper first:mt-0 sm:text-3xl"
                  >
                    {block.text}
                  </motion.h2>
                )
              }
              if (block.type === 'list') {
                return (
                  <motion.ul key={i} {...fade(0)} className="mt-6 space-y-3">
                    {block.items.map((item, k) => (
                      <li key={k} className="flex gap-3 text-mist">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald"
                        />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </motion.ul>
                )
              }
              if (block.type === 'callout') {
                return (
                  <motion.p
                    key={i}
                    {...fade(0)}
                    className="mt-8 rounded-[2px] border-l-2 border-emerald bg-deep-emerald/30 p-5 text-mist"
                  >
                    {block.text}
                  </motion.p>
                )
              }
              return (
                <motion.p key={i} {...fade(0)} className="mt-6 text-lg leading-relaxed text-mist">
                  {block.text}
                </motion.p>
              )
            })}
          </article>
        </section>

        {/* Related */}
        {related.length > 0 ? (
          <section className="border-t border-hairline bg-ink-900 py-20 md:py-24">
            <div className="mx-auto max-w-editorial px-6">
              <p className="font-mono text-xs uppercase tracking-eyebrow text-emerald">
                Keep reading
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to={`/blog/${r.slug}`}
                      className="group flex h-full flex-col rounded-[2px] border border-hairline bg-ink-950 p-6 transition-colors duration-300 hover:border-emerald"
                    >
                      <span className="font-mono text-[11px] uppercase tracking-eyebrow text-emerald/80">
                        {r.category}
                      </span>
                      <span className="mt-4 font-display text-lg font-semibold text-paper">
                        {r.title}
                      </span>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm text-emerald">
                        Read
                        <ArrowUpRight
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        {/* CTA */}
        <section className="border-t border-hairline bg-ink-950 py-20 md:py-24">
          <div className="mx-auto flex max-w-editorial flex-col items-start gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-eyebrow text-emerald">
                Want to talk it through?
              </p>
              <h2 className="mt-4 font-display text-2xl font-semibold text-paper sm:text-3xl">
                These notes are part of the same learning journey.
              </h2>
            </div>
            <Button to="/contact" variant="primary" arrow>
              Let&apos;s Connect
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
