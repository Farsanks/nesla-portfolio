import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { navItems, profile } from '../data/portfolioData'
import Button from './Button'
import MobileMenu from './MobileMenu'

// Sticky, transparent-at-top navbar that gains a refined dark treatment on
// scroll. Active link uses a shared Framer Motion layout underline so the
// emerald indicator slides between links smoothly.
export default function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled
            ? 'border-b border-hairline bg-ink-950/80 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-editorial items-center justify-between px-6 sm:h-[4.5rem]"
        >
          {/* Brand */}
          <Link
            to="/"
            className="group flex items-center gap-3"
            aria-label={`${profile.name} — home`}
          >
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-green-line font-display text-sm font-semibold text-emerald transition-colors duration-300 group-hover:border-emerald"
            >
              {profile.monogram}
            </span>
            <span className="font-display text-sm font-semibold tracking-wide text-paper">
              {profile.name.toUpperCase()}
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
              const active =
                item.to === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.to)
              return (
                <li key={item.to} className="relative">
                  <Link
                    to={item.to}
                    className={`relative text-sm transition-colors duration-200 ${
                      active
                        ? 'text-paper'
                        : 'text-muted hover:text-mist'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                  {active ? (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 right-0 h-px bg-emerald"
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  ) : null}
                </li>
              )
            })}
          </ul>

          {/* Right cluster: CTA (desktop) + hamburger (mobile) */}
          <div className="flex items-center gap-4">
            <Button
              to="/contact"
              variant="primary"
              arrow
              className="hidden sm:inline-flex"
            >
              Let&apos;s Connect
            </Button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-hairline text-paper transition-colors hover:border-emerald hover:text-emerald md:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
