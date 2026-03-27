import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/api/webhooks', '/login', '/register', '/account', '/api/'],
    },
    sitemap: 'https://webdevelopmentai.in/sitemap.xml',
  };
}
