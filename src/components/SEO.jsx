import { Helmet } from 'react-helmet-async'
import { site } from '../config/site'
import { defaultOgImage } from '../data/seoData'

// Centralized per-page metadata. Renders canonical, Open Graph, Twitter,
// and optional JSON-LD structured data. Call once per page.
//
// Props:
//  - title:       page <title> (unique per route)
//  - description: meta description (unique per route)
//  - path:        route path, e.g. '/seo' (used to build canonical + og:url)
//  - keyword:     primary keyword (optional, kept as a meta hint only)
//  - image:       OG image path (defaults to the placeholder og-image.svg)
//  - type:        og:type ('website' | 'article')
//  - noindex:     boolean — hide from search engines (404, in-progress)
//  - jsonLd:      structured-data object (only genuine, accurate data)
export default function SEO({
  title,
  description,
  path = '/',
  keyword,
  image,
  type = 'website',
  noindex = false,
  jsonLd,
}) {
  const base = site.siteUrl.replace(/\/$/, '')
  const canonical = `${base}${path === '/' ? '/' : path}`
  const ogImage = image || defaultOgImage
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${base}${ogImage}`

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keyword ? <meta name="keywords" content={keyword} /> : null}
      <link rel="canonical" href={canonical} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content={site.brand.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  )
}
