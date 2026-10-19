import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { navItems, profile, socialLinks } from '../data/portfolioData'
import useReducedMotionPreference from '../hooks/useReducedMotionPreference'
import Button from './Button'

// Full-screen mobile menu. Locks body scroll while open, closes on Escape
// and on link selection, and moves focus to the close button on open for
// keyboard accessibility.
export default function MobileMenu({ open, onClose }) {
  const reduce = useReducedMotionPreference()
  const closeRef = useRef(null)

  // Lock background scroll while the menu is open.
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      // Move focus into the menu for keyboard users.
      requestAnimationFrame(() => closeRef.current?.focus())
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [open])

  // Close on Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const container = reduce
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
      }

  const list = reduce
    ? { initial: false, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 0.05 },
      }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[60] flex flex-col bg-ink-950 md:hidden"
          {...container}
        >
          {/* Top bar mirrors the navbar height with a close button */}
          <div className="flex h-16 items-center justify-between border-b border-hairline px-6 sm:h-[4.5rem]">
            <span className="font-display text-sm font-semibold tracking-wide text-paper">
              {profile.name.toUpperCase()}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-hairline text-paper transition-colors hover:border-emerald hover:text-emerald"
            >
              <X className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </button>
          </div>

          {/* Links */}
          <motion.ul
            {...list}
            className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-8"
          >
            {navItems.map((item, i) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={onClose}
                  className="block border-b border-hairline py-4 font-display text-2xl font-medium text-paper transition-colors hover:text-emerald"
                >
                  <span className="mr-3 font-mono text-xs text-emerald/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </motion.ul>

          {/* Footer cluster: CTA + social */}
          <div className="border-t border-hairline px-6 py-6">
            <Button to="/contact" variant="primary" arrow className="w-full" onClick={onClose}>
              Let&apos;s Connect
            </Button>
            <div className="mt-4 flex flex-wrap gap-4">
              {socialLinks
                .filter((s) => s.url)
                .map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-eyebrow text-muted transition-colors hover:text-emerald"
                  >
                    {s.label}
                  </a>
                ))}
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
