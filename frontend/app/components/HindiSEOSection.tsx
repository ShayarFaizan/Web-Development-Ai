import React from "react";
import Link from "next/link";
import { ArrowRight, Search, Globe, TrendingUp, CheckCircle } from "lucide-react";

export default function HindiSEOSection() {
  return (
    <section className="w-full bg-white py-20 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          
          {/* Main Content Column */}
          <div className="lg:w-2/3 space-y-8">
            <div className="space-y-4">
              <h2 className="text-[32px] md:text-[48px] font-medium text-[#202124] leading-tight tracking-tight">
                Kya aap apne business ke liye ek <br className="hidden md:block" />
                <span className="text-[#1a73e8]">professional website</span> banwana chahte hain?
              </h2>
              <p className="text-xl text-[#5f6368] leading-relaxed max-w-2xl">
                Chahe aap 🌏 <strong className="text-[#202124]">India, USA, Europe, ya Australia</strong> mein hon—hamari team aapko ek world-class website development service deti hai, jisse aapka business directly Google search results par rank kare.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 pt-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#1a73e8]">
                  <Globe className="w-6 h-6" />
                  <h3 className="text-lg font-bold">Global Presence</h3>
                </div>
                <p className="text-[#5f6368] text-sm leading-relaxed">
                  Hum world-wide services dete hain, taki aapka business kisi bhi country mein successfully grow kare.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#34a853]">
                  <TrendingUp className="w-6 h-6" />
                  <h3 className="text-lg font-bold">Smart SEO Rank</h3>
                </div>
                <p className="text-[#5f6368] text-sm leading-relaxed">
                  Apni website ko Google Search Console mein top par laaiye aur organically global sales generate karein.
                </p>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap gap-4">
              <Link
                href="https://wa.me/916264906078"
                target="_blank"
                className="px-8 py-3.5 bg-[#1a73e8] hover:bg-[#185abc] text-white rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                Hire Expert Developer <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-3.5 bg-white hover:bg-gray-50 text-[#1a73e8] border border-gray-200 rounded-full font-bold text-sm transition-all flex items-center gap-2"
              >
                View Case Studies
              </Link>
            </div>
          </div>

          {/* Side Info Column (Google Style Card) */}
          <div className="lg:w-1/3 w-full">
            <div className="p-8 rounded-3xl border border-gray-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] space-y-6">
              <h4 className="text-xl font-bold text-[#202124]">Features at a glance</h4>
              
              <ul className="space-y-5">
                {[
                  { title: "Standard Quality", text: "Global standards ke premium designs." },
                  { title: "Lightning Fast", text: "High-speed and low bounce rate." },
                  { title: "SEO Optimized", text: "100% crawlable search friendly code." },
                  { title: "Trusted Delivery", text: "Used by 50+ international businesses." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle className="w-5 h-5 text-[#34a853] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-bold text-sm text-[#202124]">{item.title}</p>
                      <p className="text-xs text-[#5f6368]">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 mt-4 flex items-center gap-3">
                 <Search className="w-5 h-5 text-gray-400" />
                 <p className="text-xs text-gray-500 italic">"Best Global Web Agency"</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
