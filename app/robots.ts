import { MetadataRoute } from 'next'

// Environment-aware site URL configuration
function getSiteUrl(): string {
  // Check for environment variable first (for different deployment environments)
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }

  // Production URL for custom domain
  if (process.env.NODE_ENV === 'production') {
    return 'https://lifecoachlibrary.com'
  }

  // Development fallback
  return 'http://localhost:3000'
}

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl()

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/*',
          '/thank-you',
          // Block malicious attack URLs
          '/caf/',
          '/caf/*', 
          '/cgi-bin/',
          '/cgi-bin/*', 
          '/parking.php',
          '/portal.php*',
          '/cc.php*',
          '/fb.php*',
          '*.php*',
          // Block common attack vectors
          '/admin/',
          '/wp-admin/',
          '/wp-content/',
          '/search/',
          '/search/*'
        ],
      }
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}