/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://webdevelopmentai.in',
  generateRobotsTxt: true,
  // Exclude protected and transactional routes
  exclude: ['/account', '/orders', '/login', '/register', '/cart', '/wishlist', '/admin', '/order-success'],
  generateIndexSitemap: false,
}
