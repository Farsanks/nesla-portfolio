import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { hero } from '../data/portfolioData'
import useReducedMotionPreference from '../hooks/useReducedMotionPreference'
import Button from './Button'
import Photo from './Photo'

// Editorial, asymmetric hero: large typography on the left, a framed
// editorial portrait on the right with a subtle emerald glow, thin frame,
// and small metadata labels. Reduced-motion-safe staggered entrance.
export default function HeroSection() {
  const reduce = useReducedMotionPreference()

  // Staggered entrance — disabled transforms when reduced motion is on.
  const fade = (delay = 0) =>
    reduce
      ? { initial: false, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        }

  const portraitAnim = reduce
    ? { initial: false, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, scale: 0.98 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
      }

  return (
    <section
      className="relative overflow-hidden bg-ink-950 pt-28 pb-16 sm:pt-32 md:pb-24"
      aria-label="Introduction"
    >
      {/* Background: subtle emerald radial glow + faint grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(60% 50% at 75% 25%, rgba(0,200,120,0.14), rgba(0,0,0,0) 60%), radial-gradient(40% 40% at 10% 90%, rgba(6,77,50,0.30), rgba(0,0,0,0) 70%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-editorial grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:gap-10">
        {/* Left — editorial type */}
        <div className="lg:col-span-7 xl:col-span-7">
          <motion.div {...fade(0)}>
            <p className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-eyebrow text-emerald">
              <span className="h-px w-8 bg-emerald/60" aria-hidden="true" />
              {hero.eyebrow}
            </p>
          </motion.div>

          <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-paper sm:text-6xl lg:text-7xl">
            <motion.span {...fade(0.05)} className="block">
              {hero.headlineLines[0]}
            </motion.span>
            <motion.span {...fade(0.12)} className="block">
              {hero.headlineLines[1]}{' '}
              <span className="text-emerald">—</span>
            </motion.span>
          </h1>

          <motion.p
            {...fade(0.2)}
            className="mt-7 max-w-xl text-base leading-relaxed text-mist sm:text-lg"
          >
            {hero.supporting}
          </motion.p>

          <motion.div
            {...fade(0.28)}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button to={hero.primaryCta.to} variant="primary" arrow>
              {hero.primaryCta.label}
            </Button>
            <Button to={hero.secondaryCta.to} variant="ghost">
              {hero.secondaryCta.label}
            </Button>
          </motion.div>

          {/* Meta labels */}
          <motion.ul
            {...fade(0.36)}
            className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-hairline pt-6"
          >
            {hero.metaLabels.map((label) => (
              <li
                key={label}
                className="font-mono text-[11px] uppercase tracking-eyebrow text-muted"
              >
                {label}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right — editorial portrait frame */}
        <div className="lg:col-span-5 xl:col-span-5">
          <motion.div {...portraitAnim} className="relative mx-auto max-w-md lg:max-w-none">
            {/* Offset emerald frame behind the portrait */}
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 hidden h-full w-full rounded-[2px] border border-green-line sm:block"
            />
            {/* Soft emerald glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[4px] opacity-70 blur-2xl"
              style={{
                backgroundImage:
                  'radial-gradient(60% 60% at 60% 40%, rgba(0,200,120,0.22), rgba(0,0,0,0) 70%)',
              }}
            />
            <Photo
              image={hero.portrait}
              ratio="aspect-[4/5]"
              priority
              className="relative rounded-[2px] border border-hairline"
            />
            {/* Metadata labels around the frame */}
            <div
              aria-hidden="true"
              className="absolute -left-3 top-4 hidden font-mono text-[10px] uppercase tracking-eyebrow text-muted [writing-mode:vertical-rl] sm:block"
            >
              01 — Portrait
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-3 right-0 hidden font-mono text-[10px] uppercase tracking-eyebrow text-muted sm:block"
            >
              Calicut · Kerala
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        {...(reduce
          ? { initial: false, animate: { opacity: 1 } }
          : {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.6, duration: 0.6 },
            })}
        className="relative mx-auto mt-14 flex max-w-editorial items-center gap-3 px-6 text-muted"
      >
        <span className="font-mono text-[10px] uppercase tracking-eyebrow">Scroll</span>
        <motion.span
          aria-hidden="true"
          className="block h-8 w-px bg-gradient-to-b from-emerald/70 to-transparent"
          {...(reduce
            ? {}
            : {
                animate: { scaleY: [0.4, 1, 0.4], transformOrigin: 'top' },
                transition: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
              })}
        />
      </motion.div>
    </section>
  )
}
