import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Target } from "lucide-react";

export default function ChhattisgarhServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website Development Company Chhattisgarh",
    provider: {
      "@type": "ProfessionalService",
      name: "Web Development AI",
      url: "https://webdevelopmentai.in",
    },
    description: "Ranked as the top website development company Chhattisgarh. We build websites that power local businesses.",
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-orange-200">
            <MapPin size={16} />
            Serving All of Chhattisgarh
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            Leading <span className="text-orange-600">Website Development Company</span> Chhattisgarh
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From Raipur to Bilaspur, we help businesses establish a powerful online presence. Trust the premier <strong className="text-gray-900">website development company Chhattisgarh</strong> to scale your brand.
          </p>
          <a
            href="https://wa.me/916264906078"
            target="_blank"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg"
          >
            Start Your Project <ArrowRight size={18} />
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Local Expertise, Global Standards</h2>
            <p className="text-gray-600 mb-6 font-medium leading-relaxed">
              We understand the local market dynamics. A website is not just a digital brochure; it is your 24/7 salesperson. Our solutions are tailored for the unique needs of Chhattisgarh businesses.
            </p>
            <ul className="space-y-3">
              {[
                  "Understanding of regional business needs",
                  "Fast communication & local support",
                  "SEO optimized for local searches",
                  "Affordable pricing suited for the state economy"
              ].map((feat, i) =>(
                <li key={i} className="flex items-center gap-3 text-gray-800 font-semibold">
                  <Target className="text-orange-500 w-5 h-5 shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-200 rounded-3xl h-64 md:h-full flex items-center justify-center p-10">
               <span className="text-4xl font-black text-gray-400">CHHATTISGARH PROUD</span>
          </div>
        </div>
      </div>
    </div>
  );
}
