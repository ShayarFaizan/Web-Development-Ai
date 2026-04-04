import React from "react";
import Link from "next/link";
import { CheckCircle, ShieldCheck } from "lucide-react";

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Website Development Price Chhattisgarh",
    description: "Looking for website development price Chhattisgarh? Get transparent, affordable, and cheap website design Bilaspur starting from ₹9,999.",
  };

  return (
    <div className="bg-[#fafafa] min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-[#1a1a1a] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-6">Website Development Price Chhattisgarh</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Transparent pricing. No hidden costs. Whether you need a <strong className="text-white">cheap website design Bilaspur</strong> or a premium ecommerce application, we have a plan for you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Basic Business Site",
              price: "₹9,999",
              features: [
                "1-Page Landing Page",
                "Mobile Responsive",
                "SEO Basic Setup",
                "WhatsApp Integration",
                "Fast Loading Speed"
              ],
              popular: false
            },
            {
              title: "Professional Website",
              price: "₹24,999",
              features: [
                "Up to 5 Pages",
                "Beautiful UI/UX",
                "Contact Form Integration",
                "Advanced SEO",
                "Blog Section Setup",
                "Fast Next.js Build"
              ],
              popular: true
            },
            {
              title: "Ecommerce Store",
              price: "₹48,999",
              features: [
                "Unlimited Categories",
                "Payment Gateway Integration",
                "Admin Control Panel",
                "Cart and Checkout",
                "Premium Design",
                "6-Months Support"
              ],
              popular: false
            }
          ].map((plan, i) => (
            <div key={i} className={`bg-white rounded-3xl p-8 border ${plan.popular ? 'border-[#e3bc7c] shadow-2xl scale-105 relative z-10' : 'border-gray-200'}`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#e3bc7c] text-black font-bold uppercase tracking-wider text-xs px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
              <div className="text-4xl font-black mb-6 text-[#1a1a1a]">{plan.price}</div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle className="text-[#e3bc7c] w-5 h-5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="https://wa.me/916264906078"
                target="_blank"
                className={`block text-center w-full rounded-xl py-3 font-bold transition-all ${plan.popular ? 'bg-[#1a1a1a] text-[#e3bc7c] hover:bg-black' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
              >
                Choose Plan
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-20 text-center px-6">
        <ShieldCheck className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">100% Satisfaction Guarantee</h2>
        <p className="text-gray-600">
          Our goal is to provide the best <strong className="text-gray-900">website development price Chhattisgarh</strong> can offer. If you are a startup looking for <strong className="text-gray-900">cheap website design Bilaspur</strong>, or a large enterprise needing custom solutions, our pricing reflects quality and transparency.
        </p>
      </div>
    </div>
  );
}
