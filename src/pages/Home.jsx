import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { brandStory, profile } from '../data/portfolioData'
import { keywords } from '../config/keywords'
import { seoData } from '../data/seoData'
import { site } from '../config/site'
import useReducedMotionPreference from '../hooks/useReducedMotionPreference'

// Honest Person structured data — no invented address, reviews, or
// certifications. `url` is omitted until a real domain is set.
function personJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    description: `${profile.name} is a ${profile.role.toLowerCase()} at ${profile.institute}, Calicut, focusing on ${profile.focusArea}.`,
    alumniOf: `${profile.institute}, Calicut, Kerala`,
    knowsAbout: [
      'Digital Marketing',
      'SEO',
      'Social Media Marketing',
      'Content Planning',
      'Graphic Design',
    ],
  }
  if (!site.siteUrl.includes('example.com')) data.url = site.siteUrl
  return data
}

// A short editorial "ethos" strip that gives the homepage substance beyond
// the hero, using honest brand-story themes (no invented anecdotes).
function EthosSection() {
  const reduce = useReducedMotionPreference()
  const fade = (i = 0) =>
    reduce
      ? { initial: false, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 14 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-80px' },
          transition: { duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section className="relative border-t border-hairline bg-ink-950 py-20 md:py-28">
      <div className="mx-auto max-w-editorial px-6">
        <SectionHeading
          eyebrow={brandStory.label}
          title={brandStory.heading}
          intro="The themes behind the portfolio — a learning mindset, not a finished résumé."
        />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-[2px] border border-hairline sm:grid-cols-2 lg:grid-cols-3">
          {brandStory.points.map((point, i) => (
            <motion.li
              key={point}
              {...fade(i)}
              className="group relative bg-ink-900 p-7 transition-colors duration-300 hover:bg-ink-900/60"
            >
              <span
                aria-hidden="true"
                className="font-mono text-[11px] uppercase tracking-eyebrow text-emerald/70"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="mt-4 font-display text-lg leading-snug text-paper">
                {point}
              </p>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-0 bg-emerald transition-all duration-500 group-hover:w-full"
              />
            </motion.li>
          ))}
        </ul>

        <div className="mt-14 flex flex-wrap items-center gap-4">
          <Button to="/about" variant="primary" arrow>
            Read the full story
          </Button>
          <Button to="/projects" variant="ghost">
            See practice work
          </Button>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const meta = seoData['/']
  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        path="/"
        keyword={keywords['/']}
        jsonLd={personJsonLd()}
      />
      <Navbar />
      <main>
        <HeroSection />
        <EthosSection />
      </main>
      <Footer />
    </>
  )
}
