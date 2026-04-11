import React from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight, MessageCircle } from "lucide-react";

interface IndustryLayoutProps {
  industry: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  packages: {
    name: string;
    price: string;
    features: string[];
    badge: string;
    color: string;
    badgeColor: string;
  }[];
  jsonLd: any;
  icon: React.ReactNode;
  industryKeywords: string;
}

const IndustryLayout: React.FC<IndustryLayoutProps> = ({
  industry,
  title,
  subtitle,
  description,
  features,
  packages,
  jsonLd,
  icon,
}) => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#e8f0fe] selection:text-[#1a73e8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <div className="bg-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-[#e8f0fe] text-[#1a73e8] rounded-2xl flex items-center justify-center">
              {React.isValidElement(icon) 
                ? React.cloneElement(icon as React.ReactElement<any>, { size: 32 }) 
                : icon}
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-medium text-[#202124] leading-[1.15] mb-6 tracking-tight">
            {title}
          </h1>
          <p className="text-xl text-[#5f6368] leading-relaxed max-w-2xl mx-auto mb-12">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`https://wa.me/916264906078?text=Hi%2C%20mujhe%20${industry}%20sector%20ke%20liye%20website%20banwani%20hai`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#1a73e8] hover:bg-[#1b66c9] text-white font-medium rounded-full transition-all shadow-sm hover:shadow-md"
            >
              Discuss with experts
            </a>
            <Link
              href="/portfolio"
              className="px-8 py-3.5 text-[#1a73e8] font-medium border border-gray-200 hover:bg-gray-50 rounded-full transition-all"
            >
              View our portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="bg-[#f8f9fa] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-medium text-[#202124] mb-4">{subtitle}</h2>
            <p className="text-[#5f6368] text-lg">Every feature is designed to scale your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 flex flex-col gap-4">
                <div className="w-8 h-8 rounded-full bg-[#e6f4ea] flex items-center justify-center text-[#188038]">
                  <CheckCircle size={18} />
                </div>
                <p className="text-lg text-[#202124] font-medium">{feature}</p>
                <p className="text-sm text-[#5f6368] leading-relaxed">
                  Optimized for performance and user retention in the {industry} sector.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-[#202124] mb-4">
              Simple pricing
            </h2>
            <p className="text-[#5f6368] text-lg">Choose the perfect plan for your {industry} project.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <div key={i} className="flex flex-col p-10 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow bg-white">
                <div className="mb-8">
                  <span className="text-[12px] font-bold text-[#1a73e8] uppercase tracking-wider">{pkg.badge}</span>
                  <h3 className="text-2xl font-medium text-[#202124] mt-2">{pkg.name}</h3>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-medium text-[#202124]">{pkg.price}</span>
                  <span className="text-[#5f6368] text-sm ml-2">fixed cost</span>
                </div>
                <ul className="space-y-4 mb-10 flex-1 border-t border-gray-100 pt-8">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-[14px] text-[#3c4043]">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
                      <span className="leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/916264906078?text=Hi%2C%20mujhe%20${industry}%20ke%20liye%20${pkg.name}%20plan%20chahiye`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 border border-[#1a73e8] text-[#1a73e8] hover:bg-[#e8f0fe] font-medium rounded-lg transition-all"
                >
                  Choose plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#f8f9fa] border-t border-gray-200 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-medium text-[#202124] mb-8 leading-tight">
            Get started with Google Cloud powered performance
          </h2>
          <p className="text-lg text-[#5f6368] mb-12 max-w-xl mx-auto leading-relaxed">
            Join hundreds of local businesses in Raipur and Bilaspur who trust our clean, fast, and modern web solutions.
          </p>
          <a
            href="https://wa.me/916264906078"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#1a73e8] text-white font-medium rounded-full text-lg shadow-sm hover:shadow-md transition-all"
          >
            Contact us <ArrowRight size={20} />
          </a>
          <p className="mt-6 text-sm text-[#5f6368]">No hidden fees. Delivery in 14-21 days.</p>
        </div>
      </div>
    </div>
  );
};

export default IndustryLayout;
