import { motion } from 'framer-motion'
import { about, profile } from '../data/portfolioData'
import useReducedMotionPreference from '../hooks/useReducedMotionPreference'
import Photo from './Photo'
import SectionHeading from './SectionHeading'

// About section — deliberately different from the hero.
// Composition B (offset portrait): portrait on the LEFT with an offset
// emerald frame behind one edge and an understated vertical label; the
// story + info panel sit on the right. This avoids repeating the hero's
// "type-left / portrait-right" arrangement.
export default function AboutSection() {
  const reduce = useReducedMotionPreference()

  const fade = (delay = 0) =>
    reduce
      ? { initial: false, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-80px' },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section className="relative overflow-hidden border-t border-hairline bg-ink-950 py-20 md:py-28">
      <div className="mx-auto max-w-editorial px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left — offset portrait (Composition B) */}
          <motion.div {...fade(0)} className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Offset emerald frame behind the top-left edge */}
              <div
                aria-hidden="true"
                className="absolute -left-3 -top-3 hidden h-full w-full rounded-[2px] border border-green-line sm:block"
              />
              {/* Soft glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-6 -z-10 opacity-60 blur-2xl"
                style={{
                  backgroundImage:
                    'radial-gradient(60% 60% at 40% 40%, rgba(6,77,50,0.40), rgba(0,0,0,0) 70%)',
                }}
              />
              <Photo
                image={about.portrait}
                ratio="aspect-[4/5]"
                className="relative rounded-[2px] border border-hairline"
              />
              {/* Vertical understated label */}
              <div
                aria-hidden="true"
                className="absolute -right-3 top-6 hidden font-mono text-[10px] uppercase tracking-eyebrow text-muted [writing-mode:vertical-rl] sm:block"
              >
                {profile.instituteLocation}
              </div>
            </div>
          </motion.div>

          {/* Right — story + info panel + traits */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow={about.label}
              title={about.heading}
            />

            <div className="mt-7 space-y-5 text-base leading-relaxed text-mist sm:text-[1.05rem]">
              {about.paragraphs.map((p, i) => (
                <motion.p key={i} {...fade(0.05 * i)}>
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Info panel — editorial grid card */}
            <motion.dl
              {...fade(0.1)}
              className="mt-10 grid grid-cols-1 overflow-hidden rounded-[2px] border border-hairline sm:grid-cols-2"
            >
              {about.infoPanel.map((item, i) => (
                <div
                  key={item.label}
                  className="border-b border-hairline p-5 sm:[&:nth-child(odd)]:border-r"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-eyebrow text-emerald/80">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-sm text-paper">{item.value}</dd>
                </div>
              ))}
            </motion.dl>

            {/* Traits */}
            <motion.div {...fade(0.12)} className="mt-8">
              <p className="font-mono text-[11px] uppercase tracking-eyebrow text-muted">
                What I bring
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {about.traits.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-hairline px-4 py-1.5 text-xs text-mist transition-colors hover:border-emerald hover:text-emerald"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
