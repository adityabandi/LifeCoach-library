import '../styles/globals.css'
import { Metadata, Viewport } from 'next'

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

export const metadata: Metadata = {
  title: {
    default: 'Life Coach Library - Free Templates & Resources for Coaches',
    template: '%s | Life Coach Library'
  },
  description: 'Free coaching templates, business guides, and proven methods for life coaches. Access intake forms, session plans, and grow your coaching practice.',
  keywords: ['life coaching', 'coaching templates', 'coaching business', 'coach resources', 'life coach tools'],
  authors: [{ name: 'Life Coach Library Team' }],
  creator: 'Life Coach Library',
  publisher: 'Life Coach Library',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: getSiteUrl(),
    siteName: 'Life Coach Library',
    title: 'Life Coach Library - Free Templates & Resources for Coaches',
    description: 'Free coaching templates, business guides, and proven methods for life coaches. Access intake forms, session plans, and grow your coaching practice.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Life Coach Library - Free Templates & Resources for Coaches',
    description: 'Free coaching templates, business guides, and proven methods for life coaches.',
    creator: '@lifecoachlibrary',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token_here',
  },
  formatDetection: {
    telephone: false,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#2d9e75',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const siteUrl = getSiteUrl()

  return (
    <html lang="en" className="font-sans">
      <head>
        {/* Enhanced favicon support */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />

        {/* Environment-aware canonical URL */}
        <link rel="canonical" href={siteUrl} />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />

        {/* Mobile optimization meta tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Life Coach Library" />

        {/* Open Graph images for social sharing */}
        <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />

        {/* Twitter Card images */}
        <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}