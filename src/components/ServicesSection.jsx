import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services, serviceStatusLabel } from '../data/servicesData'
import useReducedMotionPreference from '../hooks/useReducedMotionPreference'
import ServiceIcon from './ServiceIcon'

// Services overview — an editorial grid of six learning areas. Cards with a
// dedicated detail page show an "Explore" link; the rest show a learning-focus
// tag. Hover lifts the card and shifts the border to emerald.
export default function ServicesSection() {
  const reduce = useReducedMotionPreference()

  const fade = (i = 0) =>
    reduce
      ? { initial: false, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-60px' },
          transition: { duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section className="border-t border-hairline bg-ink-950 py-20 md:py-28">
      <div className="mx-auto max-w-editorial px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-eyebrow text-emerald">
              05 / What I&apos;m Learning
            </p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight text-paper sm:text-4xl md:text-5xl">
              Digital marketing, learned area by area.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-mist">
            Each area is a learning focus — clearly labeled, never overclaimed.
            Four have their own pages; the rest are part of the bigger picture.
          </p>
        </div>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-[2px] border border-hairline sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const CardTag = s.route ? Link : 'div'
            const cardProps = s.route
              ? { to: s.route, 'aria-label': `Learn more about ${s.title}` }
              : {}
            return (
              <motion.li key={s.slug} {...fade(i)}>
                <CardTag
                  {...cardProps}
                  className={`group flex h-full flex-col p-7 transition-colors duration-300 ${
                    s.route ? 'bg-ink-900 hover:bg-ink-900/70 cursor-pointer' : 'bg-ink-900'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 items-center justify-center rounded-md border border-green-line text-emerald transition-colors duration-300 group-hover:border-emerald"
                    >
                      <ServiceIcon name={s.icon} className="h-5 w-5" />
                    </span>
                    <span className="rounded-full border border-hairline px-3 py-1 font-mono text-[10px] uppercase tracking-eyebrow text-muted">
                      {serviceStatusLabel[s.status]}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-semibold text-paper">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    {s.description}
                  </p>

                  <p className="mt-5 border-t border-hairline pt-4 text-xs text-muted">
                    <span className="text-emerald/80">Focus —</span> {s.outcome}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm">
                    {s.route ? (
                      <span className="inline-flex items-center gap-1 text-emerald transition-colors">
                        Explore
                        <ArrowUpRight
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      </span>
                    ) : (
                      <span className="font-mono text-[11px] uppercase tracking-eyebrow text-muted">
                        Part of the journey
                      </span>
                    )}
                  </div>
                </CardTag>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
