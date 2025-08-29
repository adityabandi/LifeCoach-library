import { MetadataRoute } from 'next'

// Environment-aware site URL configuration
function getSiteUrl(): string {
  // Check for environment variable first (for different deployment environments)
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }

  // Fallback to GitHub Pages URL
  if (process.env.NODE_ENV === 'production') {
    return 'https://adityabandi.github.io/LifeCoach-library'
  }

  // Development fallback
  return 'http://localhost:3000'
}

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl()

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/search', '/tag/*', '/thank-you', '/api/*'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}