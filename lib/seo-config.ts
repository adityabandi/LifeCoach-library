import { DefaultSeoProps } from 'next-seo'

const defaultSEO: DefaultSeoProps = {
  title: 'Life Coach Library - Complete Resources for Life Coaches',
  description: 'Comprehensive collection of templates, workflows, guides, and growth strategies for life coaches. Boost your coaching practice with proven tools and methods.',
  canonical: 'https://lifecoachlibrary.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lifecoachlibrary.com',
    siteName: 'Life Coach Library',
    title: 'Life Coach Library - Complete Resources for Life Coaches',
    description: 'Comprehensive collection of templates, workflows, guides, and growth strategies for life coaches.',
    images: [
      {
        url: 'https://lifecoachlibrary.com/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Life Coach Library',
      },
    ],
  },
  twitter: {
    handle: '@lifecoachlibrary',
    site: '@lifecoachlibrary',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'robots',
      content: 'index,follow',
    },
    {
      name: 'googlebot',
      content: 'index,follow',
    },
  ],
}

export default defaultSEO