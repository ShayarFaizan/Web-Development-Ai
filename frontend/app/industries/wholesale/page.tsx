import React from "react";
import IndustryLayout from "../../components/IndustryLayout";
import { ShoppingBag } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Wholesale & Distribution Website Development | Web Development AI",
  description: "Scale your wholesale business with digital catalogs and bulk ordering systems. Best websites for distributors and wholesalers.",
  keywords: "wholesale website developer, distribution website, bulk order system, wholesale ecommerce, reseller portal",
};

export default function WholesalePage() {
  const industry = "Wholesale";
  const title = "Digitize Your Distribution Network";
  const subtitle = "Optimized for Bulk Sales";
  const description = "Wholesale business mein inventory aur orders manage karna tough hota hai. Hamare specialized systems aapke bulk deals ko automate karte hain.";
  
  const features = [
    "Bulk Order Management",
    "Tiered Pricing Displays",
    "Inventory Sync Alerts",
    "Reseller Login Portals",
    "PDF Catalog Downloads",
    "GST Automated Invoicing"
  ];

  const packages = [
    {
      name: "Wholesale Starter",
      price: "₹19,999",
      features: ["Digital Catalog", "WhatsApp Inquiry", "Basic Inventory", "Mobile App Preview", "Fast Loading", "SEO Optimized"],
      badge: "LITE",
      color: "border-green-500 bg-green-50/30",
      badgeColor: "bg-green-500",
    },
    {
      name: "Distributor Pro",
      price: "₹39,999",
      features: ["Dealer Dashboard", "Bulk Pricing Rules", "Order Tracking", "Payment Gateway", "WhatsApp Updates", "Ad Campaign Setup"],
      badge: "POPULAR",
      color: "border-emerald-600 bg-emerald-50/30",
      badgeColor: "bg-emerald-600",
    },
    {
      name: "Multi-State Mart",
      price: "₹74,999",
      features: ["Full ERP Integration", "Automated Logistics", "Multi-vendor Support", "AI Sales Insights", "Lifetime Support", "Priority Server"],
      badge: "SCALABLE",
      color: "border-slate-800 bg-slate-50/30",
      badgeColor: "bg-slate-800",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Wholesale Website Development",
    description: "Digital solutions for wholesalers and distributors to automate orders.",
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
      icon={<ShoppingBag size={24} />}
      industryKeywords={metadata.keywords as string}
    />
  );
}
