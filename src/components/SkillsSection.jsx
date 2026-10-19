import { motion } from 'framer-motion'
import { skills, skillStatusLabel } from '../data/portfolioData'
import useReducedMotionPreference from '../hooks/useReducedMotionPreference'

// Skills as a learning map — status labels only, never arbitrary percentages
// or tool proficiency claims. Each status has a small color indicator.
const statusDot = {
  learning: 'bg-emerald',
  practiced: 'bg-emerald-bright',
  completed: 'bg-paper',
  demonstrated: 'bg-emerald-bright',
}

export default function SkillsSection({ eyebrow = '06 / Skills & Learning', heading }) {
  const reduce = useReducedMotionPreference()
  const fade = (i = 0) =>
    reduce
      ? { initial: false, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-60px' },
          transition: { duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section className="border-t border-hairline bg-ink-950 py-20 md:py-28">
      <div className="mx-auto max-w-editorial px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-eyebrow text-emerald">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-paper sm:text-4xl md:text-5xl">
            {heading || 'What I’m learning, honestly.'}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mist">
            A map of what I’m developing — each area carries a status so nothing
            is mistaken for finished expertise. No invented proficiency, no
            arbitrary percentages.
          </p>
        </div>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-[2px] border border-hairline sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <motion.li
              key={s.name}
              {...fade(i)}
              className="group bg-ink-900 p-6 transition-colors duration-300 hover:bg-ink-900/70"
            >
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className={`h-2 w-2 rounded-full ${statusDot[s.status] || statusDot.learning}`}
                />
                <span className="font-mono text-[11px] uppercase tracking-eyebrow text-emerald/80">
                  {skillStatusLabel[s.status]}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-paper">
                {s.name}
              </h3>
            </motion.li>
          ))}
        </ul>

        <p className="mt-6 font-mono text-[11px] uppercase tracking-eyebrow text-muted">
          Statuses update as I learn — currently all areas are in progress.
        </p>
      </div>
    </section>
  )
}
