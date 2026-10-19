import { MessageCircle } from 'lucide-react'
import { site } from '../config/site'

// Floating WhatsApp button. Renders ONLY when a real number is configured in
// site.contact.whatsapp — so the site never publishes a fake number.
// Positioned bottom-left so it never overlaps the BackToTop button (bottom-right).
export default function WhatsAppButton() {
  const number = site.contact.whatsapp
  if (!number) return null

  const digits = number.replace(/[^\d]/g, '')
  const href = `https://wa.me/${digits}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-emerald text-ink-950 shadow-emerald transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-emerald focus-visible:outline-offset-2"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
    </a>
  )
}
