import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServicesSection from '../components/ServicesSection'
import Button from '../components/Button'
import { keywords } from '../config/keywords'
import { seoData } from '../data/seoData'
import useReducedMotionPreference from '../hooks/useReducedMotionPreference'

function ServicesHeader() {
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
            'radial-gradient(50% 50% at 15% 20%, rgba(6,77,50,0.45), rgba(0,0,0,0) 60%), radial-gradient(40% 40% at 90% 80%, rgba(0,200,120,0.10), rgba(0,0,0,0) 60%)',
        }}
      />
      <div className="relative mx-auto max-w-editorial px-6">
        <motion.p {...fade} className="font-mono text-xs uppercase tracking-eyebrow text-emerald">
          05 / Services
        </motion.p>
        <motion.h1
          {...fade}
          className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.06] tracking-tight text-paper sm:text-5xl md:text-6xl"
        >
          Digital marketing services in Wayanad — in progress.
        </motion.h1>
        <motion.p
          {...fade}
          className="mt-6 max-w-2xl text-base leading-relaxed text-mist sm:text-lg"
        >
          The areas I am studying and developing as a digital marketing student —
          SEO, social media, Google Ads, graphic design, content, and strategy.
          Each is a learning focus, clearly labeled, with no invented results.
        </motion.p>
      </div>
    </section>
  )
}

export default function Services() {
  const meta = seoData['/services']
  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        path="/services"
        keyword={keywords['/services']}
      />
      <Navbar />
      <main>
        <ServicesHeader />
        <ServicesSection />

        {/* Closing CTA */}
        <section className="border-t border-hairline bg-ink-950 py-20 md:py-24">
          <div className="mx-auto flex max-w-editorial flex-col items-start gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-eyebrow text-emerald">
                Want the detail?
              </p>
              <h2 className="mt-4 font-display text-2xl font-semibold text-paper sm:text-3xl">
                Each focus area has its own honest page.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button to="/projects" variant="primary" arrow>
                See practice work
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
