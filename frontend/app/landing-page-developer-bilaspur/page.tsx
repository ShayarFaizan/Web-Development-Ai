import React from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight, Monitor, Rss } from "lucide-react";

export default function LandingPageService() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Landing Page Developer Bilaspur",
    provider: {
      "@type": "ProfessionalService",
      name: "Web Development AI",
      url: "https://webdevelopmentai.in",
    },
    description: "Get a high-converting landing page from the top landing page developer Bilaspur. Starts at ₹9,999.",
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-purple-200">
            <Monitor size={16} />
            High-Converting Landing Pages
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            Bilaspur's Premier <span className="text-purple-600">Landing Page Developer</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Turn your ad clicks into customers. As your verified <strong className="text-gray-900">landing page developer Bilaspur</strong>, we design blazing fast, lead-generating landing pages.
          </p>
          <a
            href="https://wa.me/916264906078"
            target="_blank"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg"
          >
            Get Your Landing Page <ArrowRight size={18} />
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Why Our Landing Pages Convert</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Blazing Fast 1-second load times",
            "Mobile-first optimized designs",
            "Clear, engaging Call-To-Actions",
            "A/B Testing Ready",
            "Lead Capture Forms",
            "Google Analytics & Pixel Setup"
          ].map((feat, i) => (
             <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <CheckCircle className="text-purple-500 shrink-0 w-6 h-6" />
               <span className="font-semibold text-gray-800">{feat}</span>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
