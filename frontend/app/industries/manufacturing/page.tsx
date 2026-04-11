import React from "react";
import IndustryLayout from "../../components/IndustryLayout";
import { Factory } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Manufacturing Website Development | B2B Portal | Web Development AI",
  description: "Specialize in manufacturing website development. Show off your factory, machinery, and generate B2B leads with premium Next.js websites.",
  keywords: "manufacturing website developer, factory website development, B2B portal developer, industrial website designer, website for manufacturers",
};

export default function ManufacturingPage() {
  const industry = "Manufacturing";
  const title = "Powering Industrial Growth with Digital Solutions";
  const subtitle = "Why Manufacturers Choose Us";
  const description = "Hum aapki manufacturing unit ko ek digital identity dete hain. From machinery catalogs to lead generation forms, we build sites that speak authority.";
  
  const features = [
    "Interactive Product Catalogs",
    "Request for Quote (RFQ) Systems",
    "Factory Virtual Tour Integration",
    "B2B Lead Generation Funnels",
    "Certification & Quality Showcase",
    "Dealer/Distributor Hubs"
  ];

  const packages = [
    {
      name: "Industrial Lite",
      price: "₹14,999",
      features: ["Up to 10 Products", "Dynamic Lead Forms", "Basic SEO", "Mobile Responsive", "Contact Support", "SSL Security"],
      badge: "STARTUP",
      color: "border-blue-500 bg-blue-50/30",
      badgeColor: "bg-blue-500",
    },
    {
      name: "B2B Pro",
      price: "₹34,999",
      features: ["Unlimited Products", "Advanced RFQ System", "Technical SEO", "Process Animations", "Admin Dashboard", "WhatsApp API Setup"],
      badge: "RECOMMENDED",
      color: "border-indigo-600 bg-indigo-50/30",
      badgeColor: "bg-indigo-600",
    },
    {
      name: "Enterprise Hub",
      price: "₹59,999",
      features: ["Custom ERP Mini", "Dealer Portal", "Multi-language Site", "Premium 3D UI", "1 Year Maintenance", "Global SEO"],
      badge: "ENTERPRISE",
      color: "border-slate-800 bg-slate-50/30",
      badgeColor: "bg-slate-800",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Manufacturing Website Development",
    description: "Expert website development for manufacturing industries and factories.",
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
      icon={<Factory size={24} />}
      industryKeywords={metadata.keywords as string}
    />
  );
}
