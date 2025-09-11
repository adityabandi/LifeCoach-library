/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://lifecoachlibrary.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://lifecoachlibrary.com/sitemap.xml',
    ],
  },
}