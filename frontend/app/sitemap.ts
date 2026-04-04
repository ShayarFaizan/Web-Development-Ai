import { MetadataRoute } from 'next';
import { serviceCards } from '@/lib/servicesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://webdevelopmentai.in';

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/portfolio',
    '/plans',
    '/cart',
    '/login',
    '/register',
    '/account',
    '/orders',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic service plan routes
  const planRoutes = serviceCards.map((card) => ({
    url: `${baseUrl}/plans/${card.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Blog routes — high-intent Bilaspur keyword pages
  const blogRoutes = [
    '/blog',
    '/blog/bilaspur-mein-website-banwane-ka-kharcha',
    '/blog/ai-se-website-banana-bilaspur',
    '/blog/raipur-bangalore-vs-local-developer',
    '/blog/chhattisgarh-ke-liye-best-website-type',
    '/blog/chhattisgarh-local-business-website-guide',
    '/blog/kyun-zaroori-hai-website-bilaspur',
    '/ecommerce-website-bilaspur',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...planRoutes, ...blogRoutes];
}
