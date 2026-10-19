import { ImageOff } from 'lucide-react'

// A centralized, placeholder-aware photo component.
//
// Pass an image config object: { src, alt, label }.
//  - If `src` is empty (no genuine photo yet), an elegant, clearly-identifiable
//    placeholder frame is rendered. It never looks like a real portrait,
//    so the site stays honest while photos are pending.
//  - If `src` is set (e.g. '/images/nesla/hero/nesla-hero.webp'), a real
//    <img> is rendered with sensible loading/decoding defaults.
//
// Replacing a placeholder with a real photo is a one-line change in
// src/data/portfolioData.js — no component edits needed.
//
// Props:
//  - image:   { src, alt, label }
//  - ratio:   Tailwind aspect class, e.g. 'aspect-[4/5]' (default 'aspect-[4/5]')
//  - priority: set true for the LCP hero image (eager load, fetchpriority high)
//  - className: extra classes for the outer frame
export default function Photo({
  image,
  ratio = 'aspect-[4/5]',
  priority = false,
  className = '',
}) {
  const src = image?.src
  const alt = image?.alt || ''
  const label = image?.label || 'Nesla Fathima'

  if (src) {
    return (
      <div className={`relative overflow-hidden ${ratio} ${className}`}>
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          // `fetchpriority` is a string attribute; React warns if not
          // camelCased, so use the canonical prop name.
          fetchpriority={priority ? 'high' : 'auto'}
          className="h-full w-full object-cover"
        />
      </div>
    )
  }

  // Honest placeholder frame — never impersonates a real portrait.
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${ratio} ${className}`}
      role="img"
      aria-label={`Placeholder photograph of ${label} — photo pending`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-ink-900"
        style={{
          backgroundImage:
            'radial-gradient(120% 80% at 50% 0%, rgba(0,200,120,0.16), rgba(0,0,0,0) 60%)',
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage:
          'linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
      }} />
      <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
        <ImageOff className="h-6 w-6 text-emerald/70" strokeWidth={1.5} aria-hidden="true" />
        <p className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">
          Photo pending
        </p>
        <p className="font-display text-sm text-mist">{label}</p>
      </div>
    </div>
  )
}
