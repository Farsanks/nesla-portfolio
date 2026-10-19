import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectsSection from '../components/ProjectsSection'
import Button from '../components/Button'
import { seoData } from '../data/seoData'
import useReducedMotionPreference from '../hooks/useReducedMotionPreference'

function ProjectsHeader() {
  const reduce = useReducedMotionPreference()
  const fade = reduce
    ? { initial: false, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      }
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-ink-950 pt-28 pb-16 md:pt-36 md:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(45% 45% at 80% 25%, rgba(0,200,120,0.12), rgba(0,0,0,0) 60%), radial-gradient(40% 40% at 10% 90%, rgba(6,77,50,0.35), rgba(0,0,0,0) 60%)',
        }}
      />
      <div className="relative mx-auto max-w-editorial px-6">
        <motion.p {...fade} className="font-mono text-xs uppercase tracking-eyebrow text-emerald">
          07 / Projects
        </motion.p>
        <motion.h1
          {...fade}
          className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.06] tracking-tight text-paper sm:text-5xl md:text-6xl"
        >
          Practice projects — honest, labeled, in progress.
        </motion.h1>
        <motion.p
          {...fade}
          className="mt-6 max-w-2xl text-base leading-relaxed text-mist sm:text-lg"
        >
          Concept, practice, and learning exercises that show how I’m
          developing. No invented clients or results — just the work itself.
        </motion.p>
      </div>
    </section>
  )
}

export default function Projects() {
  const meta = seoData['/projects']
  return (
    <>
      <SEO title={meta.title} description={meta.description} path="/projects" />
      <Navbar />
      <main>
        <ProjectsHeader />
        <ProjectsSection />

        <section className="border-t border-hairline bg-ink-950 py-20 md:py-24">
          <div className="mx-auto flex max-w-editorial flex-col items-start gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-eyebrow text-emerald">
                Curious how these were made?
              </p>
              <h2 className="mt-4 font-display text-2xl font-semibold text-paper sm:text-3xl">
                Each project opens into a full case study.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button to="/learning" variant="primary" arrow>
                See the learning behind them
              </Button>
              <Button to="/contact" variant="ghost">
                Let&apos;s Connect
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
