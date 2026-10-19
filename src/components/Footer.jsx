import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import {
  footerStatement,
  navItems,
  profile,
  socialLinks,
} from '../data/portfolioData'
import { site } from '../config/site'

// Premium footer consistent with the editorial system. Social links only
// render when a real URL is supplied; the year is generated dynamically.
export default function Footer() {
  const year = new Date().getFullYear()
  const visibleSocial = socialLinks.filter((s) => s.url)

  return (
    <footer className="border-t border-hairline bg-ink-900">
      <div className="mx-auto max-w-editorial px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand statement */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3" aria-label={`${profile.name} — home`}>
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-green-line font-display text-base font-semibold text-emerald"
              >
                {profile.monogram}
              </span>
              <span className="font-display text-base font-semibold tracking-wide text-paper">
                {profile.name}
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist">
              {footerStatement}
            </p>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-eyebrow text-muted">
              {profile.role} · {profile.institute}, Calicut
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer" className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-eyebrow text-muted">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-mist transition-colors hover:text-emerald"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact CTA + social */}
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-eyebrow text-muted">
              Let&apos;s talk
            </p>
            <Link
              to="/contact"
              className="group mt-4 inline-flex items-center gap-2 font-display text-2xl font-semibold text-paper transition-colors hover:text-emerald"
            >
              Have an idea worth exploring?
              <ArrowUpRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>

            {visibleSocial.length > 0 ? (
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                {visibleSocial.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] uppercase tracking-eyebrow text-muted transition-colors hover:text-emerald"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Emerald Editorial · Built with React, Vite &amp; Tailwind
          </p>
        </div>

        {/* Placeholder domain notice — remove once the real domain is set */}
        {site.siteUrl.includes('example.com') ? (
          <p className="mt-4 font-mono text-[10px] uppercase tracking-eyebrow text-muted/70">
            TODO(owner): set the production domain in src/config/site.js before launch.
          </p>
        ) : null}
      </div>
    </footer>
  )
}
