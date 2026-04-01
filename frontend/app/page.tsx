import HeroSlider from "./components/HeroSlider";
import HeroVideo from "./components/HeroVideo";
import ServicesSection from "./components/ServicesSection";
import ServicesSpotlight from "./components/ServicesSpotlight";
import BannerSlider from "./components/BannerSlider";
import InstagramFeed from "./components/InstagramFeed";
import Footer from "./components/Footer";
import { Suspense } from "react";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Web Development AI",
    image: "https://webdevelopmentai.in/assets/logo.png",
    description:
      "Get a professional website with 1-second load time. Specialized in Next.js and AI solutions for India. Top-rated AI Web Development Agency.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "India",
    },
    telephone: "+91 62649 06078",
    url: "https://webdevelopmentai.in",
    priceRange: "₹₹ - ₹₹₹₹",
    serviceType: [
      "Premium Custom Next.js Web Development",
      "Professional React Developer for Startups",
      "High-Performance eCommerce Website Design India",
      "AI Integrated Enterprise Web Solutions",
      "Scalable Server-Side Rendered (SSR) Applications",
      "Corporate Digital Portfolio & Branding",
      "Premium Business Web Design Agency",
      "Firebase Backend & Full Stack Expert Services"
    ],
  };

  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">Premium Custom Next.js Web Development & Professional React Developer in India. Hire experts for high-performance eCommerce and AI integrated web solutions.</h1>
      <HeroSlider />
      <HeroVideo />
      <ServicesSection />
      <Suspense fallback={<div className="h-20 w-full" />}>
        <ServicesSpotlight />
      </Suspense>
      <BannerSlider />
      <InstagramFeed />
      <Footer />
    </div>
  );
}
