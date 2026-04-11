import React from "react";
import IndustryLayout from "../../components/IndustryLayout";
import { GraduationCap } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Education Website Development | School & Coaching Sites | Web Development AI",
  description: "Dynamic websites for schools, colleges, and coaching centers. Features include course management and online admission.",
  keywords: "education website developer, school website design, coaching center portal, online learning site, admission management system",
};

export default function EducationPage() {
  const industry = "Education";
  const title = "Engage Students with Modern Learning Platforms";
  const subtitle = "Future-Ready Institutional Hubs";
  const description = "Knowledge share karna ab digital hai. Hum education institutes ko aise platforms dete hain jahan admission, courses aur student info manage karna ek dum simple ho jaye.";
  
  const features = [
    "Course Catalog & Details",
    "Online Admission Forms",
    "Student/Parent Portals",
    "Event/Notice Management",
    "Video Lesson Hosting",
    "Exam Result Publishing"
  ];

  const packages = [
    {
      name: "Coaching Pro",
      price: "₹11,999",
      features: ["Landing Page Hub", "Course Listing", "WhatsApp Inquiry", "Mobile Optimised", "Contact Support", "SSL Protection"],
      badge: "ACADEMY",
      color: "border-orange-500 bg-orange-50/30",
      badgeColor: "bg-orange-500",
    },
    {
      name: "School Connect",
      price: "₹27,999",
      features: ["Grade/Class Mgmt", "Public Notice Board", "Photo Gallery", "SEO Local Pack", "Monthly Support", "Staff Directory"],
      badge: "MOST POPULAR",
      color: "border-amber-600 bg-amber-50/30",
      badgeColor: "bg-amber-600",
    },
    {
      name: "LMS Enterprise",
      price: "₹59,999",
      features: ["Full Learning System", "Paid Course Checkout", "Student Login Area", "Automated Certificates", "Lifetime Tech Support", "Advanced Analytics"],
      badge: "COMPLETE",
      color: "border-slate-800 bg-slate-50/30",
      badgeColor: "bg-slate-800",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Education Website Development",
    description: "Interactive and informative websites for schools and coaching institutes.",
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
      icon={<GraduationCap size={24} />}
      industryKeywords={metadata.keywords as string}
    />
  );
}
