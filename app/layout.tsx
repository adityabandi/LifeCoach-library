import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

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
    url: 'https://lifecoachlibrary.com',
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
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://lifecoachlibrary.com" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}