import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { seoData } from '../data/seoData'

// Custom 404 — noindex, semantic, with a clear way back.
export default function NotFound() {
  const meta = seoData['404']
  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        path="/404"
        noindex
      />
      <Navbar />
      <main className="relative flex min-h-[70vh] items-center overflow-hidden bg-ink-950 pt-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(40% 40% at 50% 40%, rgba(0,200,120,0.12), rgba(0,0,0,0) 60%)',
          }}
        />
        <div className="relative mx-auto max-w-editorial px-6 py-20 text-center">
          <p className="font-mono text-xs uppercase tracking-eyebrow text-emerald">
            404
          </p>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-paper sm:text-5xl">
            This page wandered off.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-mist">
            The page you were looking for doesn&apos;t exist or may have moved.
            Let&apos;s get you back on track.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button to="/" variant="primary" arrow>
              Back to home
            </Button>
            <Button to="/services" variant="ghost">
              Browse services
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
