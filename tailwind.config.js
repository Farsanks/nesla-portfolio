/** @type {import('tailwindcss').Config} */
// Emerald Editorial design tokens.
// Black + forest-green dominate; emerald is selective emphasis.
// Adjust contrast/tones as the design develops.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Backgrounds (black-first)
        ink: {
          950: '#050706', // primary background
          900: '#0A100D', // secondary background
        },
        forest: '#10251A', // forest green
        'deep-emerald': '#064D32', // deep emerald
        emerald: {
          DEFAULT: '#00C878', // primary emerald
          bright: '#39FF9C', // bright accent
        },
        // Text
        paper: '#FFFFFF',
        mist: '#D0D8D2', // secondary text
        muted: '#8D9991', // muted text
      },
      borderColor: {
        hairline: 'rgba(255,255,255,0.10)',
        'green-line': 'rgba(0,200,120,0.30)',
      },
      fontFamily: {
        // Self-hosted via Fontsource (see main.jsx)
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', '"SF Mono"', 'Menlo', 'Consolas', 'monospace'],
      },
      maxWidth: {
        editorial: '78rem',
      },
      letterSpacing: {
        eyebrow: '0.28em',
      },
      boxShadow: {
        emerald: '0 0 60px -12px rgba(0, 200, 120, 0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease forwards',
      },
    },
  },
  plugins: [],
}
