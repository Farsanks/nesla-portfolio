// Tailwind v3 uses the classic PostCSS pipeline:
//   tailwindcss (scans content for class usage) + autoprefixer (vendor prefixes).
// This is the correct setup for tailwindcss ^3.4.x.
// (Tailwind v4 would instead use the @tailwindcss/vite plugin — not used here.)
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
