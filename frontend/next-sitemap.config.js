/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://webdevelopmentai.in',
  generateRobotsTxt: true,
  // Exclude protected routes
  exclude: ['/account', '/orders', '/login', '/register'],
  generateIndexSitemap: false,
}
