import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { articles } from '../data/blogData'
import { keywords } from '../config/keywords'
import { seoData } from '../data/seoData'
import useReducedMotionPreference from '../hooks/useReducedMotionPreference'

function formatDate(d) {
  try {
    return new Date(d).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  } catch {
    return d
  }
}

export default function Blog() {
  const reduce = useReducedMotionPreference()
  const meta = seoData['/blog']

  const fade = (delay = 0) =>
    reduce
      ? { initial: false, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-60px' },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        }

  const featured = articles.find((a) => a.featured) || articles[0]
  const rest = articles.filter((a) => a.slug !== featured.slug)

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        path="/blog"
        keyword={keywords['/blog']}
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
                'radial-gradient(45% 45% at 85% 20%, rgba(0,200,120,0.12), rgba(0,0,0,0) 60%)',
            }}
          />
          <div className="relative mx-auto max-w-editorial px-6">
            <motion.p
              {...fade(0)}
              className="font-mono text-xs uppercase tracking-eyebrow text-emerald"
            >
              08 / Notes
            </motion.p>
            <motion.h1
              {...fade(0)}
              className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.06] tracking-tight text-paper sm:text-5xl md:text-6xl"
            >
              Learning notes, written in public.
            </motion.h1>
            <motion.p
              {...fade(0)}
              className="mt-6 max-w-2xl text-base leading-relaxed text-mist sm:text-lg"
            >
              Sample articles on digital marketing fundamentals — each with its
              own focus. Clearly labeled as sample content until reviewed.
            </motion.p>
          </div>
        </section>

        {/* Featured */}
        <section className="border-b border-hairline bg-ink-950 py-16 md:py-20">
          <div className="mx-auto max-w-editorial px-6">
            <motion.div {...fade(0)}>
              <Link
                to={`/blog/${featured.slug}`}
                className="group grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12"
                aria-label={`Read: ${featured.title}`}
              >
                <div className="lg:col-span-7">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-[2px] border border-hairline transition-colors duration-300 group-hover:border-emerald"
                       style={{ backgroundImage: 'radial-gradient(60% 60% at 40% 40%, rgba(6,77,50,0.45), rgba(0,0,0,0) 70%)' }}>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                      <span className="font-mono text-[10px] uppercase tracking-eyebrow text-emerald/80">
                        Featured · {featured.category}
                      </span>
                      <span className="mt-4 font-display text-2xl font-semibold text-paper sm:text-3xl">
                        {featured.title}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  {featured.status === 'sample' ? (
                    <span className="inline-flex items-center gap-2 rounded-full border border-green-line px-3 py-1 font-mono text-[10px] uppercase tracking-eyebrow text-emerald">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald" aria-hidden="true" />Sample
                    </span>
                  ) : null}
                  <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-paper sm:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-mist">
                    {featured.excerpt}
                  </p>
                  <p className="mt-6 font-mono text-[11px] uppercase tracking-eyebrow text-muted">
                    {formatDate(featured.publishedAt)} · {featured.readingTime} min read
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm text-emerald">
                    Read article
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Grid */}
        <section className="bg-ink-950 py-20 md:py-28">
          <div className="mx-auto max-w-editorial px-6">
            <ul className="grid gap-px overflow-hidden rounded-[2px] border border-hairline sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((a, i) => (
                <motion.li key={a.slug} {...fade(i * 0.04)}>
                  <Link
                    to={`/blog/${a.slug}`}
                    className="group flex h-full flex-col bg-ink-900 p-7 transition-colors duration-300 hover:bg-ink-900/70"
                    aria-label={`Read: ${a.title}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-eyebrow text-emerald/80">
                        {a.category}
                      </span>
                      {a.status === 'sample' ? (
                        <span className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">
                          Sample
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-paper">
                      {a.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mist">{a.excerpt}</p>
                    <p className="mt-6 border-t border-hairline pt-4 font-mono text-[11px] uppercase tracking-eyebrow text-muted">
                      {formatDate(a.publishedAt)} · {a.readingTime} min read
                    </p>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
