import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import BackToTop from './components/BackToTop'
// Home is eager so the landing paints fast; everything else is code-split
// and loaded on demand. Rollup hoists shared modules (Navbar, Footer, data)
// into common chunks, so lazy routes stay small.
import Home from './pages/Home.jsx'

const About = lazy(() => import('./pages/About.jsx'))
const Services = lazy(() => import('./pages/Services.jsx'))
const SeoService = lazy(() => import('./pages/SeoService.jsx'))
const SocialMediaMarketing = lazy(() => import('./pages/SocialMediaMarketing.jsx'))
const GoogleAds = lazy(() => import('./pages/GoogleAds.jsx'))
const GraphicDesign = lazy(() => import('./pages/GraphicDesign.jsx'))
const Learning = lazy(() => import('./pages/Learning.jsx'))
const Projects = lazy(() => import('./pages/Projects.jsx'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail.jsx'))
const Blog = lazy(() => import('./pages/Blog.jsx'))
const BlogPost = lazy(() => import('./pages/BlogPost.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

// Minimal, theme-matched loading state — avoids a white flash while a
// lazy route chunk loads.
function PageFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink-950">
      <span
        aria-hidden="true"
        className="h-2 w-2 animate-pulse rounded-full bg-emerald"
      />
      <span className="sr-only">Loading…</span>
    </div>
  )
}

// Full route map. Every route is a real, art-directed implementation.
// Project and blog detail pages use dynamic slugs. A wildcard renders the
// custom 404. WhatsAppButton + BackToTop are global, conditionally rendered.
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/seo" element={<SeoService />} />
          <Route
            path="/social-media-marketing"
            element={<SocialMediaMarketing />}
          />
          <Route path="/google-ads" element={<GoogleAds />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <WhatsAppButton />
      <BackToTop />
    </>
  )
}
