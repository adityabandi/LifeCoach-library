import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/search', '/tag/*', '/thank-you', '/api/*'],
    },
    sitemap: 'https://lifecoachlibrary.com/sitemap.xml',
  }
}