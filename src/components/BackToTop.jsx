import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import useReducedMotionPreference from '../hooks/useReducedMotionPreference'

// Floating "back to top" button. Appears after the user scrolls down, sits
// bottom-right (WhatsApp, when enabled, sits bottom-left so they never
// overlap). Reduced-motion-aware.
export default function BackToTop() {
  const reduce = useReducedMotionPreference()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const anim = reduce
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 8 },
        transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
      }

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          {...anim}
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-hairline bg-ink-900/90 text-emerald backdrop-blur-md transition-colors hover:border-emerald focus-visible:outline-2 focus-visible:outline-emerald focus-visible:outline-offset-2"
        >
          <ArrowUp className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}
