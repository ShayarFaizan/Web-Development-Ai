import HeroSlider from "./components/HeroSlider";
import HeroVideo from "./components/HeroVideo";
import ServicesSection from "./components/ServicesSection";
import ServicesSpotlight from "./components/ServicesSpotlight";
import IndustriesSection from "./components/IndustriesSection";
import GoogleReviewOffer from "./components/GoogleReviewOffer";
import BannerSlider from "./components/BannerSlider";
import InstagramFeed from "./components/InstagramFeed";
import Footer from "./components/Footer";
import HindiSEOSection from "./components/HindiSEOSection";
import GlobalLocations from "./components/GlobalLocations";
import Testimonials from "./components/Testimonials";
import { Suspense } from "react";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Web Development AI",
    image: "https://webdevelopmentai.in/assets/logo.png",
    description:
      "Best website developer in Bilaspur, Raipur, Indore, Bhopal, Nagpur, Chhattisgarh, Madhya Pradesh, and Maharashtra. ₹9,999 se shuru. Affordable website development, ecommerce website, landing page, aur Next.js business sites. CG, MP aur Maharashtra mein website banwana ho to abhi contact karo.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bilaspur",
      addressRegion: "Chhattisgarh",
      addressCountry: "IN",
    },
    telephone: "+91 62649 06078",
    url: "https://webdevelopmentai.in",
    priceRange: "₹9,999 – ₹5,00,000",
    serviceType: [
      "Website Developer in Bilaspur",
      "Website Developer in Raipur",
      "Website Developer in Indore",
      "Website Developer in Bhopal",
      "Website Developer in Nagpur",
      "Web Development Company Chhattisgarh",
      "Web Development Company Madhya Pradesh",
      "Web Development Company Maharashtra",
      "Website Developer Chhattisgarh",
      "Website Developer Madhya Pradesh",
      "Website Developer Maharashtra",
      "Ecommerce Website Developer Raipur",
      "Ecommerce Website Developer Indore",
      "Ecommerce Website Developer Nagpur",
      "Affordable Website Development Bhopal",
      "Freelance Web Developer Madhya Pradesh",
      "Next.js Developer Indore",
      "Business Website Developer Bhopal",
      "Business Website Developer Nagpur",
      "Website Designer Madhya Pradesh",
      "Website Designer Maharashtra",
      "Web Designer Near Me Indore",
      "Website Banane Wala Madhya Pradesh",
      "Landing Page Development Bhopal",
      "Website Maintenance Service Madhya Pradesh",
      "Portfolio Website Developer Indore",
    ],
  };

  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">
        Website Developer in Bilaspur, Raipur, Indore, Bhopal, Nagpur, Chhattisgarh, Madhya Pradesh & Maharashtra | Affordable Web Development
        Company | Ecommerce, Landing Page, Business Website —
        webdevelopmentai.in. CG, MP aur Maharashtra mein website banwana ho to call karo ₹9,999 se shuru.
      </h1>
      <h2 className="sr-only">
        Website Designer Nagpur | Website Designer Indore | Website Designer Bhopal | Website Designer Raipur | Website Designer Bilaspur | Web Designer Near Me Maharashtra
      </h2>
      <HeroSlider />
      <HeroVideo />
      <ServicesSection />
      <Suspense fallback={<div className="h-20 w-full" />}>
        <ServicesSpotlight />
      </Suspense>
      <IndustriesSection />
      <GoogleReviewOffer />
      <HindiSEOSection />
      <GlobalLocations />
      <Testimonials />
      <BannerSlider />
      <InstagramFeed />
      <Footer />
    </div>
  );
}
