import { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  canonicalUrl?: string
  ogImage?: string
  noindex?: boolean
}

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

export function generateSEO({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage,
  noindex = false,
}: SEOProps): Metadata {
  const siteUrl = getSiteUrl()
  const fullTitle = `${title} | Life Coach Library`

  // Ensure canonical URL includes the full path
  const finalCanonicalUrl = canonicalUrl || siteUrl

  return {
    title: fullTitle,
    description,
    keywords: ['life coaching', 'coaching templates', 'coaching business', 'personality assessment', 'coaching tools', ...keywords],
    openGraph: {
      title: fullTitle,
      description,
      url: finalCanonicalUrl,
      siteName: 'Life Coach Library',
      ...(ogImage && { images: [{ url: ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}` }] }),
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      ...(ogImage && { images: [ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`] }),
    },
    alternates: {
      canonical: finalCanonicalUrl,
    },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    // Add additional metadata for better SEO
    authors: [{ name: 'Life Coach Library' }],
    creator: 'Life Coach Library',
    publisher: 'Life Coach Library',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  }
}

export function generateArticleSchema(article: {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  author: string
  url: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Life Coach Library',
      logo: {
        '@type': 'ImageObject',
        url: 'https://adityabandi.github.io/LifeCoach-library/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
    image: article.image,
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }
}