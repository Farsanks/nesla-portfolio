import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

// Reusable button / link with two variants and an optional arrow.
//  - variant: 'primary' (emerald fill) | 'ghost' (outline)
//  - to:      internal route → renders a <Link>
//  - href:    external URL → renders an <a>
//  - arrow:   show an animated up-right arrow on hover
// Always renders a real semantic <a>/<Link> — never a clickable <div>.
export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  arrow = false,
  className = '',
  onClick,
  type,
  ...rest
}) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-emerald focus-visible:outline-offset-2'

  const variants = {
    primary:
      'bg-emerald text-ink-950 hover:bg-emerald-bright',
    ghost:
      'border border-hairline text-paper hover:border-emerald hover:text-emerald',
  }

  const content = (
    <>
      <span>{children}</span>
      {arrow ? (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
          aria-hidden="true"
        />
      ) : null}
    </>
  )

  const cls = `${base} ${variants[variant] || variants.primary} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        onClick={onClick}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        target={href?.startsWith('http') ? '_blank' : undefined}
        {...rest}
      >
        {content}
      </a>
    )
  }

  return (
    <button type={type || 'button'} className={cls} onClick={onClick} {...rest}>
      {content}
    </button>
  )
}
