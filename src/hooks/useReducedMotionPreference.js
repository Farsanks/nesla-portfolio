import { useReducedMotion } from 'framer-motion'

// Thin wrapper around Framer Motion's reduced-motion detection.
// The app also sets <MotionConfig reducedMotion="user"> globally, so
// transforms are disabled automatically for users who prefer reduced motion.
// Use this hook when a component needs to branch on the preference directly
// (e.g. to swap a multi-step entrance for a simple fade).
export default function useReducedMotionPreference() {
  return useReducedMotion() || false
}
