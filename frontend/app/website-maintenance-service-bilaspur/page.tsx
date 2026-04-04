import React from "react";
import Link from "next/link";
import { Wrench, ShieldCheck, ArrowRight } from "lucide-react";

export default function MaintenanceServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website Maintenance Service Bilaspur",
    description: "Keep your website secure and updated with the best website maintenance service Bilaspur.",
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-blue-200">
            <Wrench size={16} />
            Secure & Fast Updates
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            Reliable <span className="text-blue-600">Website Maintenance Service</span> Bilaspur
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Don't let your website break down. Our <strong className="text-gray-900">website maintenance service Bilaspur</strong> offers regular backups, security updates, and performance tuning.
          </p>
          <a
            href="https://wa.me/916264906078"
            target="_blank"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg"
          >
            Start Maintenance Plan <ArrowRight size={18} />
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-[#1a1a1a] rounded-3xl p-10 text-white text-center">
          <ShieldCheck className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Peace of Mind Packages</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            From content updates to server monitoring, we handle all technical aspects so you can focus on your business. 
          </p>
          <div className="flex justify-center flex-wrap gap-4">
               {["Monthly Backups", "Security Scans", "Speed Optimization", "Content Updates"].map(t =>(
                   <span key={t} className="bg-white/10 px-4 py-2 rounded-full font-medium">{t}</span>
               ))}
          </div>
        </div>
      </div>
    </div>
  );
}
