import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import { keywords } from '../config/keywords'
import { seoData } from '../data/seoData'
import { site } from '../config/site'
import { socialLinks, profile } from '../data/portfolioData'
import useReducedMotionPreference from '../hooks/useReducedMotionPreference'

export default function Contact() {
  const reduce = useReducedMotionPreference()
  const meta = seoData['/contact']
  const visibleSocial = socialLinks.filter((s) => s.url)

  const fade = (delay = 0) =>
    reduce
      ? { initial: false, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        path="/contact"
        keyword={keywords['/contact']}
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
                'radial-gradient(45% 45% at 20% 20%, rgba(6,77,50,0.45), rgba(0,0,0,0) 60%), radial-gradient(40% 40% at 85% 80%, rgba(0,200,120,0.10), rgba(0,0,0,0) 60%)',
            }}
          />
          <div className="relative mx-auto max-w-editorial px-6">
            <motion.p {...fade(0)} className="font-mono text-xs uppercase tracking-eyebrow text-emerald">
              Contact
            </motion.p>
            <motion.h1
              {...fade(0)}
              className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.06] tracking-tight text-paper sm:text-5xl md:text-6xl"
            >
              Have an idea worth exploring?
            </motion.h1>
            <motion.p
              {...fade(0)}
              className="mt-6 max-w-2xl text-base leading-relaxed text-mist sm:text-lg"
            >
              I’m a digital marketing student, open to conversations, questions,
              and small collaborations where it makes sense. No promises of
              services I’m not ready to offer — just an honest exchange.
            </motion.p>
          </div>
        </section>

        {/* Body */}
        <section className="bg-ink-950 py-20 md:py-28">
          <div className="mx-auto max-w-editorial px-6">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left — info */}
              <motion.div {...fade(0)} className="lg:col-span-5">
                <p className="font-mono text-xs uppercase tracking-eyebrow text-emerald">
                  Reach out
                </p>
                <h2 className="mt-4 font-display text-2xl font-semibold text-paper sm:text-3xl">
                  A few honest ways to connect.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-mist">
                  Contact details appear here once they’re confirmed. Until then,
                  the form is the simplest way to start a conversation — I read
                  every message.
                </p>

                {site.contact.email ? (
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="mt-8 inline-flex items-center gap-3 rounded-full border border-green-line px-5 py-3 text-sm text-paper transition-colors hover:border-emerald"
                  >
                    <Mail className="h-4 w-4 text-emerald" strokeWidth={2} aria-hidden="true" />
                    {site.contact.email}
                  </a>
                ) : (
                  <p className="mt-8 rounded-[2px] border-l-2 border-emerald bg-deep-emerald/30 p-4 text-sm text-mist">
                    <span className="text-paper">Email isn’t published yet.</span>{' '}
                    It will appear here once confirmed — no fake address is shown.
                  </p>
                )}

                {visibleSocial.length > 0 ? (
                  <div className="mt-8">
                    <p className="font-mono text-[11px] uppercase tracking-eyebrow text-muted">
                      Elsewhere
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                      {visibleSocial.map((s) => (
                        <li key={s.label}>
                          <a
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[11px] uppercase tracking-eyebrow text-muted transition-colors hover:text-emerald"
                          >
                            {s.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <p className="mt-10 font-mono text-[11px] uppercase tracking-eyebrow text-muted">
                  {profile.name} · {profile.role} · {profile.institute}, Calicut
                </p>
              </motion.div>

              {/* Right — form */}
              <motion.div
                {...fade(0.06)}
                className="lg:col-span-7"
              >
                <div className="rounded-[2px] border border-hairline bg-ink-900 p-6 sm:p-8">
                  <ContactForm />
                </div>
                <p className="mt-4 text-xs text-muted">
                  The form is a front-end demo with no email service connected.
                  It validates your input and never fakes a successful send.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
