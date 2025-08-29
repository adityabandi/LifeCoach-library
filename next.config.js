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
  basePath: '/LifeCoach-library',
  assetPrefix: '/LifeCoach-library',
  // Disable server-side features for static export
  poweredByHeader: false,
}

module.exports = nextConfig