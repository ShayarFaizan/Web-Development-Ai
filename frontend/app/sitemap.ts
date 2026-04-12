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

  // New Service Hubs & Blog routes
  const blogRoutes = [
    '/blog',
    '/services/raipur',
    '/services/ecommerce',
    '/services/business',
    '/services/marketing',
    '/more-services',
    '/services/education',
    '/services/manufacturing',
    '/industries/education',
    '/industries/healthcare',
    '/industries/manufacturing',
    '/industries/real-estate',
    '/industries/wholesale',
    '/ecommerce-website-bilaspur',
    '/blog/affordable-website-developer-raipur',
    '/blog/ai-se-website-banana-bilaspur',
    '/blog/ai-powered-vs-normal-website-differences',
    '/blog/ai-chatbot-business-raipur',
    '/blog/ai-vs-normal-website-raipur',
    '/blog/bakery-website-development-raipur',
    '/blog/bilaspur-mein-website-banwane-ka-kharcha',
    '/blog/business-website-raipur',
    '/blog/chhattisgarh-ke-liye-best-website-type',
    '/blog/chhattisgarh-local-business-website-guide',
    '/blog/ecommerce-website-development-raipur',
    '/blog/google-pe-website-kaise-aaye-bilaspur',
    '/blog/google-rank-bilaspur-business',
    '/blog/kyun-zaroori-hai-website-bilaspur',
    '/blog/kyun-fail-hota-hai-business-without-website',
    '/blog/online-store-kaise-banwayein-chhattisgarh',
    '/blog/ca-accountant-professional-website-guide',
    '/blog/salon-beauty-parlor-website-guide-bilaspur',
    '/blog/landing-page-kya-hota-hai-hindi-guide',
    '/blog/mp-gst-registration-website-benefits',
    '/blog/indore-photography-business-website-guide',
    '/blog/website-maintenance-importance-hindi-guide',
    '/blog/manufacturing-website-development-raipur',
    '/blog/nextjs-vs-wordpress-raipur',
    '/blog/raipur-bangalore-vs-local-developer',
    '/blog/raipur-vs-local-developer-bilaspur',
    '/blog/resiliencesoft-softwebian-alternative',
    '/blog/responsive-website-design-raipur',
    '/blog/restaurant-website-raipur',
    '/blog/sasti-website-raipur',
    '/blog/school-website-design-raipur',
    '/blog/seo-friendly-website-raipur',
    '/blog/small-business-website-raipur',
    '/blog/top-5-web-development-companies-raipur',
    '/blog/top-5-web-development-companies-raipur-honest-comparison',
    '/blog/website-banane-ka-kharcha-bilaspur-2026',
    '/blog/website-banane-ka-kharcha-raipur-2026',
    '/blog/website-cost-raipur',
    '/blog/website-development-cost-raipur',
    '/blog/website-ke-fayde-local-business',
    '/blog/why-website-important-raipur-business',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...planRoutes, ...blogRoutes];
}
