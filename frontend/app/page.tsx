import HeroSlider from "./components/HeroSlider";
import HeroVideo from "./components/HeroVideo";
import ServicesSection from "./components/ServicesSection";
import ServicesSpotlight from "./components/ServicesSpotlight";
import BannerSlider from "./components/BannerSlider";
import InstagramFeed from "./components/InstagramFeed";
import Footer from "./components/Footer";

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
    priceRange: "₹₹",
    serviceType: [
      "AI Web Development Services in India",
      "Best AI Website Builder for Business",
      "Professional Web Development AI Solutions",
      "Low Cost Web Design with AI",
      "Next.js AI Portfolio Website",
      "Digital Visiting Card with Firebase Backend",
      "Fast Loading React Websites for Startups",
      "Automated Web Development for Small Business",
      "E-commerce Website Development",
      "Freelance Web Developer Services",
      "UI UX Design"
    ],
  };

  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">Top-Rated AI Web Development Agency in India - Professional AI Web Solutions & Services</h1>
      <HeroSlider />
      <HeroVideo />
      <ServicesSection />
      <ServicesSpotlight />
      <BannerSlider />
      <InstagramFeed />
      <Footer />
    </div>
  );
}
