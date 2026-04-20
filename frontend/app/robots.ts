import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api/webhooks', '/login', '/register', '/account', '/api/'],
      },
      {
        userAgent: ['GPTBot', 'OAI-SearchBot', 'PerplexityBot', 'Claude-Web'],
        allow: '/',
        disallow: ['/admin', '/api/webhooks', '/login', '/register', '/account', '/api/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      }
    ],
    sitemap: 'https://webdevelopmentai.in/sitemap.xml',
  };
}
