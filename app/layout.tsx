import '../styles/globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Life Coach Library - Free Templates & Resources for Coaches',
    template: '%s | Life Coach Library'
  },
  description: 'Free coaching templates, business guides, and proven methods for life coaches. Download intake forms, session plans, and grow your coaching practice.',
  keywords: ['life coaching', 'coaching templates', 'coaching business', 'coach resources', 'life coach tools'],
  authors: [{ name: 'Life Coach Library Team' }],
  creator: 'Life Coach Library',
  publisher: 'Life Coach Library',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adityabandi.github.io/LifeCoach-library/',
    siteName: 'Life Coach Library',
    title: 'Life Coach Library - Free Templates & Resources for Coaches',
    description: 'Free coaching templates, business guides, and proven methods for life coaches. Download intake forms, session plans, and grow your coaching practice.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="font-sans">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://adityabandi.github.io/LifeCoach-library/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}