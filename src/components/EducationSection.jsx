import { motion } from 'framer-motion'
import { education } from '../data/portfolioData'
import useReducedMotionPreference from '../hooks/useReducedMotionPreference'

// Education & learning — an editorial timeline. No invented dates, grades,
// diplomas, or certifications. Only the supplied facts appear.
export default function EducationSection() {
  const reduce = useReducedMotionPreference()
  const fade = (i = 0) =>
    reduce
      ? { initial: false, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, x: -16 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, margin: '-60px' },
          transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section className="relative overflow-hidden border-t border-hairline bg-ink-950 py-20 md:py-28">
      <div className="mx-auto max-w-editorial px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-eyebrow text-emerald">
            {education.label}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-paper sm:text-4xl md:text-5xl">
            Education & learning.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mist">
            A short, honest record. Certificates will appear here only when
            genuinely earned — none are shown by default.
          </p>
        </div>

        <ol className="mt-12 max-w-2xl border-l border-green-line pl-8">
          {education.items.map((item, i) => (
            <motion.li key={item.title} {...fade(i)} className="relative pb-10 last:pb-0">
              {/* Node */}
              <span
                aria-hidden="true"
                className="absolute -left-[37px] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-emerald bg-ink-900"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
              </span>
              <p className="font-mono text-[11px] uppercase tracking-eyebrow text-emerald/80">
                {item.detail}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-paper">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{item.note}</p>
            </motion.li>
          ))}
        </ol>

        {education.certificates?.length > 0 ? (
          <div className="mt-12">
            <p className="font-mono text-[11px] uppercase tracking-eyebrow text-emerald/80">
              Certificates
            </p>
            {/* Certificate gallery renders only when real certificates exist. */}
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {education.certificates.map((c, i) => (
                <li
                  key={i}
                  className="rounded-[2px] border border-hairline bg-ink-950 p-5"
                >
                  <p className="font-display text-sm font-semibold text-paper">{c.title}</p>
                  <p className="mt-1 text-xs text-muted">{c.issuer}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  )
}
