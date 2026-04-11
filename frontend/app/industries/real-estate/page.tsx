import React from "react";
import IndustryLayout from "../../components/IndustryLayout";
import { Home } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Real Estate Website Development | Property Listings | Web Development AI",
  description: "High-converting real estate websites with property listings, map search, and lead capture. Best for builders and brokers.",
  keywords: "real estate web developer, property listing website, builder website designer, property portal development, real estate SEO",
};

export default function RealEstatePage() {
  const industry = "Real Estate";
  const title = "Close Property Deals Faster Online";
  const subtitle = "Built for High-Intent Buyers";
  const description = "Property bechna ho ya kiraye pe dena, your website is your best salesperson. We create immersive property portals that convert visitors into site visits.";
  
  const features = [
    "Dynamic Property Listings",
    "Map-Based Property Search",
    "High-Res Image Galleries",
    "Virtual Tour Embeds",
    "EMI Calculator Tools",
    "Automated Lead Capture"
  ];

  const packages = [
    {
      name: "Broker Pro",
      price: "₹12,499",
      features: ["Listing Dashboard", "WhatsApp Lead Flow", "Mobile Menu SEO", "Fast Asset Loading", "Contact Form", "SSL Certificate"],
      badge: "ESSENTIAL",
      color: "border-purple-500 bg-purple-50/30",
      badgeColor: "bg-purple-500",
    },
    {
      name: "Project Showcase",
      price: "₹29,999",
      features: ["3D Model Viewing", "Advanced Map Integration", "Property Filters", "Blog for SEO", "CRM Integration", "Video Backgrounds"],
      badge: "MOST POPULAR",
      color: "border-fuchsia-600 bg-fuchsia-50/30",
      badgeColor: "bg-fuchsia-600",
    },
    {
      name: "Luxury Portal",
      price: "₹54,999",
      features: ["Unlimited Listings", "Multi-Agent System", "Automated Booking", "Premium Typography", "Global SEO Ready", "White-glove Support"],
      badge: "ELITE",
      color: "border-slate-900 bg-slate-50/30",
      badgeColor: "bg-slate-900",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Real Estate Website Development",
    description: "Immersive property listing websites for builders and real estate agents.",
    provider: {
      "@type": "ProfessionalService",
      name: "Web Development AI",
      url: "https://webdevelopmentai.in",
    },
  };

  return (
    <IndustryLayout
      industry={industry}
      title={title}
      subtitle={subtitle}
      description={description}
      features={features}
      packages={packages}
      jsonLd={jsonLd}
      icon={<Home size={24} />}
      industryKeywords={metadata.keywords as string}
    />
  );
}
