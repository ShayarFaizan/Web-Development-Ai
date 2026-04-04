import HeroSlider from "./components/HeroSlider";
import HeroVideo from "./components/HeroVideo";
import ServicesSection from "./components/ServicesSection";
import ServicesSpotlight from "./components/ServicesSpotlight";
import BannerSlider from "./components/BannerSlider";
import InstagramFeed from "./components/InstagramFeed";
import Footer from "./components/Footer";
import HindiSEOSection from "./components/HindiSEOSection";
import { Suspense } from "react";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Web Development AI",
    image: "https://webdevelopmentai.in/assets/logo.png",
    description:
      "Bilaspur ka best website developer. \u20b99,999 se shuru. Affordable website development, ecommerce website, landing page, aur Next.js business sites. Website banwana ho to abhi contact karo.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bilaspur",
      addressRegion: "Chhattisgarh",
      addressCountry: "IN",
    },
    telephone: "+91 62649 06078",
    url: "https://webdevelopmentai.in",
    priceRange: "\u20b99,999 – \u20b95,00,000",
    serviceType: [
      "Website Developer in Bilaspur",
      "Web Development Company Bilaspur",
      "Ecommerce Website Developer Bilaspur",
      "Affordable Website Development Bilaspur",
      "Freelance Web Developer Bilaspur",
      "Next.js Developer Bilaspur Chhattisgarh",
      "Business Website Bilaspur Chhattisgarh",
      "Website Designer Bilaspur",
      "Web Designer Near Me Bilaspur",
      "Website Banane Wala Bilaspur",
      "Landing Page Development Bilaspur",
      "Website Maintenance Service Bilaspur",
      "Portfolio Website Developer Bilaspur",
    ],
  };

  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">Website Developer in Bilaspur Chhattisgarh | Affordable Web Development Company | Ecommerce, Landing Page, Business Website — webdevelopmentai.in. Website banwana ho to call karo ₹9,999 se shuru.</h1>
      <h2 className="sr-only">Website Designer Bilaspur | Web Designer Near Me Bilaspur</h2>
      <HeroSlider />
      <HeroVideo />
      <ServicesSection />
      <Suspense fallback={<div className="h-20 w-full" />}>
        <ServicesSpotlight />
      </Suspense>
      <HindiSEOSection />
      <BannerSlider />
      <InstagramFeed />
      <Footer />
    </div>
  );
}
