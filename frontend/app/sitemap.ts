import { MetadataRoute } from 'next';
import { serviceCards } from '@/lib/servicesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://webdevelopmentai.in';

  // Static routes
  const staticRoutes = [
    '',
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

  return [...staticRoutes, ...planRoutes];
}
