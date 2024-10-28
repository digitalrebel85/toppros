/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://findanadvisor.online',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api', '/admin']
      }
    ]
  },
  exclude: ['/api/*', '/admin/*', '/404'],
  generateIndexSitemap: false,
  changefreq: 'daily',
  priority: 0.7,
  transform: async (config, path) => {
    // Custom priority for different types of pages
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
      }
    }
    
    if (path.includes('/search')) {
      return null // Exclude search pages from sitemap
    }

    return {
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
    }
  },
}