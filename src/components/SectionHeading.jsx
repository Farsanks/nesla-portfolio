import { motion } from 'framer-motion'
import useReducedMotionPreference from '../hooks/useReducedMotionPreference'

// Reusable editorial section heading: small uppercase eyebrow + large
// display headline + optional intro paragraph. Subtle, reduced-motion-safe
// entrance animation.
//
// Props:
//  - eyebrow:  small label, e.g. '01 / The Person Behind the Journey'
//  - title:    heading text (can include <span> for emerald emphasis)
//  - intro:    optional supporting paragraph
//  - as:       heading level ('h1' | 'h2' | 'h3'), default 'h2'
//  - align:    'left' | 'center'
//  - id:       optional id for anchor navigation
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  as = 'h2',
  align = 'left',
  id,
  className = '',
}) {
  const reduce = useReducedMotionPreference()
  const Tag = as
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left'

  const reveal = (delay = 0) =>
    reduce
      ? { initial: false, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-80px' },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <div className={`max-w-2xl ${alignCls} ${className}`}>
      {eyebrow ? (
        <motion.p
          {...reveal(0)}
          className="font-mono text-xs uppercase tracking-eyebrow text-emerald"
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.div {...reveal(0.06)}>
        <Tag
          id={id}
          className="mt-4 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-paper sm:text-4xl md:text-5xl"
        >
          {title}
        </Tag>
      </motion.div>
      {intro ? (
        <motion.p
          {...reveal(0.12)}
          className="mt-5 text-base leading-relaxed text-mist sm:text-lg"
        >
          {intro}
        </motion.p>
      ) : null}
    </div>
  )
}
