import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Photo from '../components/Photo'
import Button from '../components/Button'
import { getProjectBySlug, projects } from '../data/projectsData'
import useReducedMotionPreference from '../hooks/useReducedMotionPreference'
import NotFound from './NotFound'

// Full case-study page for a single practice project. Honest by design:
// no results, no fabricated clients — only the stated brief, objective,
// approach, deliverables, tools, and lessons.
export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  // Unknown slug → 404 (its own SEO/Navbar/Footer).
  if (!project) return <NotFound />

  const reduce = useReducedMotionPreference()
  const fade = (delay = 0) =>
    reduce
      ? { initial: false, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        }

  const currentIndex = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(currentIndex + 1) % projects.length]

  const title = `${project.title} — Nesla Fathima`
  const description = project.brief

  return (
    <>
      <SEO
        title={title}
        description={description}
        path={`/projects/${project.slug}`}
        type="article"
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
                'radial-gradient(50% 50% at 80% 15%, rgba(0,200,120,0.12), rgba(0,0,0,0) 60%)',
            }}
          />
          <div className="relative mx-auto max-w-editorial px-6">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-eyebrow text-muted transition-colors hover:text-emerald"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              All projects
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-line px-3 py-1 font-mono text-[10px] uppercase tracking-eyebrow text-emerald">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald" aria-hidden="true" />
                {project.kind}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-eyebrow text-muted">
                {project.category}
              </span>
            </div>
            <h1 className="mt-6 max-w-3xl font-display text-3xl font-semibold leading-[1.08] tracking-tight text-paper sm:text-4xl md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
              {project.brief}
            </p>
          </div>
        </section>

        {/* Large visual */}
        <section className="bg-ink-950 py-12 md:py-16">
          <div className="mx-auto max-w-editorial px-6">
            <motion.div {...fade(0)} className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 -z-10 opacity-40 blur-2xl"
                style={{
                  backgroundImage:
                    'radial-gradient(60% 60% at 50% 40%, rgba(0,200,120,0.18), rgba(0,0,0,0) 70%)',
                }}
              />
              <Photo
                image={project.image}
                ratio="aspect-[16/9]"
                className="rounded-[2px] border border-hairline"
              />
            </motion.div>
          </div>
        </section>

        {/* Case-study body */}
        <section className="bg-ink-950 pb-20 md:pb-28">
          <div className="mx-auto max-w-editorial px-6">
            <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                {/* Objective */}
                <div>
                  <h2 className="font-mono text-[11px] uppercase tracking-eyebrow text-emerald/80">
                    Objective
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-paper">
                    {project.objective}
                  </p>
                </div>

                {/* Approach */}
                <div className="mt-12">
                  <h2 className="font-mono text-[11px] uppercase tracking-eyebrow text-emerald/80">
                    Approach
                  </h2>
                  <ol className="mt-5 space-y-5">
                    {project.approach.map((step, i) => (
                      <motion.li key={i} {...fade(i * 0.04)} className="flex gap-4">
                        <span className="font-mono text-sm text-emerald">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <p className="leading-relaxed text-mist">{step}</p>
                      </motion.li>
                    ))}
                  </ol>
                </div>

                {/* Lessons */}
                <div className="mt-12">
                  <h2 className="font-mono text-[11px] uppercase tracking-eyebrow text-emerald/80">
                    Lessons learned
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {project.lessons.map((l, i) => (
                      <li key={i} className="flex gap-3 text-mist">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-emerald"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                        <span className="leading-relaxed">{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-5">
                <div className="rounded-[2px] border border-hairline bg-ink-900 p-6">
                  <h2 className="font-mono text-[11px] uppercase tracking-eyebrow text-emerald/80">
                    Deliverables
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {project.deliverables.map((d, i) => (
                      <li key={i} className="flex gap-3 text-sm text-mist">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald"
                        />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.tools.length > 0 ? (
                  <div className="mt-6 rounded-[2px] border border-hairline bg-ink-900 p-6">
                    <h2 className="font-mono text-[11px] uppercase tracking-eyebrow text-emerald/80">
                      Tools explored
                    </h2>
                    <ul className="mt-5 space-y-2">
                      {project.tools.map((t, i) => (
                        <li key={i} className="text-sm text-paper">{t}</li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs text-muted">
                      Listed only as learning. No mastery is implied.
                    </p>
                  </div>
                ) : (
                  <div className="mt-6 rounded-[2px] border border-hairline bg-ink-900 p-6">
                    <h2 className="font-mono text-[11px] uppercase tracking-eyebrow text-emerald/80">
                      Tools explored
                    </h2>
                    <p className="mt-4 text-sm text-muted">
                      Concept only — no professional tools used.
                    </p>
                  </div>
                )}

                {/* Honest notice */}
                <p className="mt-6 rounded-[2px] border-l-2 border-emerald bg-deep-emerald/30 p-5 text-sm text-mist">
                  This is a {project.kind.toLowerCase()} created while
                  learning. No client, results, or revenue are claimed.
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* Next + CTA */}
        <section className="border-t border-hairline bg-ink-900 py-20 md:py-24">
          <div className="mx-auto max-w-editorial px-6">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <p className="font-mono text-xs uppercase tracking-eyebrow text-emerald">
                  Next project
                </p>
                <Link
                  to={`/projects/${next.slug}`}
                  className="group mt-4 inline-flex items-center gap-2 font-display text-2xl font-semibold text-paper transition-colors hover:text-emerald sm:text-3xl"
                >
                  {next.title}
                  <ArrowUpRight
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </Link>
                <p className="mt-2 text-sm text-muted">{next.category}</p>
              </div>
              <div className="md:justify-self-end">
                <Button to="/contact" variant="primary" arrow>
                  Let&apos;s Connect
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
