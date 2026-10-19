import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutSection from '../components/AboutSection'
import PhotoGallery from '../components/PhotoGallery'
import Button from '../components/Button'
import { keywords } from '../config/keywords'
import { seoData } from '../data/seoData'
import useReducedMotionPreference from '../hooks/useReducedMotionPreference'

// Composition D (typographic moment): a full-width, dark statement panel
// with emerald emphasis. Used in place of a photo "visual moment" while
// genuine photographs are pending — keeps the page intentional, not empty.
function VisualMoment() {
  const reduce = useReducedMotionPreference()
  const fade = reduce
    ? { initial: false, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-80px' },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      }

  return (
    <section className="relative overflow-hidden border-y border-hairline">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(80% 120% at 15% 0%, rgba(6,77,50,0.55), rgba(5,7,6,0) 60%), radial-gradient(60% 80% at 100% 100%, rgba(0,200,120,0.10), rgba(5,7,6,0) 60%)',
        }}
      />
      <div className="relative mx-auto max-w-editorial px-6 py-24 md:py-32">
        <motion.p {...fade} className="font-mono text-xs uppercase tracking-eyebrow text-emerald">
          A note to self
        </motion.p>
        <motion.blockquote
          {...fade}
          className="mt-6 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-paper sm:text-4xl md:text-5xl"
        >
          “I treat learning as the work.
          <span className="text-emerald"> Everything here is part of that process —</span>
          honest, clearly labeled, and improving as I go.”
        </motion.blockquote>
        <motion.p {...fade} className="mt-8 max-w-xl text-mist">
          Not a finished résumé. A developing point of view — shared openly while it grows.
        </motion.p>
      </div>
    </section>
  )
}

export default function About() {
  const meta = seoData['/about']
  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        path="/about"
        keyword={keywords['/about']}
      />
      <Navbar />
      <main>
        <AboutSection />
        <VisualMoment />
        <PhotoGallery />

        {/* Closing CTA */}
        <section className="border-t border-hairline bg-ink-950 py-20 md:py-24">
          <div className="mx-auto flex max-w-editorial flex-col items-start gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-eyebrow text-emerald">
                Next
              </p>
              <h2 className="mt-4 font-display text-2xl font-semibold text-paper sm:text-3xl">
                See what I&apos;m learning — and how I approach it.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button to="/services" variant="primary" arrow>
                Explore services
              </Button>
              <Button to="/learning" variant="ghost">
                My learning journey
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
