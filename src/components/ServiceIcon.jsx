import {
  Search,
  Share2,
  Target,
  Palette,
  CalendarClock,
  Compass,
} from 'lucide-react'

// Maps the icon name strings stored in servicesData.js to Lucide components,
// so data stays serializable and components stay simple.
const map = { Search, Share2, Target, Palette, CalendarClock, Compass }

export default function ServiceIcon({ name, className }) {
  const Icon = map[name] || Search
  return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />
}
