/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    mdxRs: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  basePath: process.env.NODE_ENV === 'production' ? '/LifeCoach-library' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/LifeCoach-library' : '',
}

module.exports = nextConfig