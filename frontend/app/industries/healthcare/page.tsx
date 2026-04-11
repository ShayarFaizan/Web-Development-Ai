import React from "react";
import IndustryLayout from "../../components/IndustryLayout";
import { Stethoscope } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Healthcare Website Development | Doctor & Clinic Sites | Web Development AI",
  description: "Professional healthcare websites with appointment booking and patient portals. Trusted by doctors and hospitals.",
  keywords: "healthcare website developer, clinic website design, hospital website developer, doctor profile site, online appointment system",
};

export default function HealthcarePage() {
  const industry = "Healthcare";
  const title = "Modern Digital Presence for Medical Professionals";
  const subtitle = "Patient-Centric Design";
  const description = "Patients are searching for you online. We build fast, secure, and informative websites that help doctors and clinics manage appointments and build trust.";
  
  const features = [
    "Online Appointment Booking",
    "Doctor/Staff Profiles",
    "Patient Feedback Systems",
    "Service & Specialization Lists",
    "Health Blog & Tips Section",
    "Emergency Call Integration"
  ];

  const packages = [
    {
      name: "Clinic Lite",
      price: "₹10,999",
      features: ["One Page Profile", "WhatsApp Booking", "Services List", "Map Integration", "Contact Form", "Basic SEO"],
      badge: "STARTER",
      color: "border-red-500 bg-red-50/30",
      badgeColor: "bg-red-500",
    },
    {
      name: "Hospital Pro",
      price: "₹32,999",
      features: ["Full Booking System", "Patient Dashboard", "Advanced SEO", "Multi-Doctor Support", "Secure Hosting", "Email Notifications"],
      badge: "MOST TRUSTED",
      color: "border-rose-600 bg-rose-50/30",
      badgeColor: "bg-rose-600",
    },
    {
      name: "Health Mart",
      price: "₹69,999",
      features: ["Medicine E-commerce", "Lab Test Booking", "Video Consult Prep", "AI Symptom Checker", "Lifetime Maintenance", "Priority SEO"],
      badge: "FULL STACK",
      color: "border-slate-800 bg-slate-50/30",
      badgeColor: "bg-slate-800",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Healthcare Website Development",
    description: "Secure and patient-friendly websites for clinics and hospitals.",
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
      icon={<Stethoscope size={24} />}
      industryKeywords={metadata.keywords as string}
    />
  );
}
