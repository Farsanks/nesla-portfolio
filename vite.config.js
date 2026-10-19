import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Lightweight Vite config.
// - manualChunks keeps the vendor bundle split (react / motion / icons)
//   so route-level code stays small.
// - No heavy plugins; the site is intentionally dependency-light.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: false,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
          icons: ['lucide-react'],
        },
      },
    },
  },
})
