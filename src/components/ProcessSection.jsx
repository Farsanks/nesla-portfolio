import { motion } from 'framer-motion'
import { process } from '../data/portfolioData'
import useReducedMotionPreference from '../hooks/useReducedMotionPreference'

// A proposed working method — presented honestly as a process I'm developing,
// not a track record of client wins.
export default function ProcessSection() {
  const reduce = useReducedMotionPreference()
  const fade = (i = 0) =>
    reduce
      ? { initial: false, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-60px' },
          transition: { duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section className="border-t border-hairline bg-ink-950 py-20 md:py-28">
      <div className="mx-auto max-w-editorial px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-eyebrow text-emerald">
            {process.label}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-paper sm:text-4xl md:text-5xl">
            How I approach a project.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mist">{process.intro}</p>
        </div>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-[2px] border border-hairline sm:grid-cols-2 lg:grid-cols-3">
          {process.steps.map((step, i) => (
            <motion.li
              key={step.step}
              {...fade(i)}
              className="group relative bg-ink-900 p-7 transition-colors duration-300 hover:bg-ink-900/70"
            >
              <span className="font-display text-4xl font-semibold text-emerald/30 transition-colors duration-300 group-hover:text-emerald/60">
                {step.step}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-paper">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-0 bg-emerald transition-all duration-500 group-hover:w-full"
              />
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
