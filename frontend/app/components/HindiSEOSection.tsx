import React from "react";
import Link from "next/link";
import { ArrowRight, Globe, TrendingUp, Users } from "lucide-react";

export default function HindiSEOSection() {
  return (
    <section className="w-full bg-[#f8f9fa] py-20 lg:py-24 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 text-[#202124]">
          {/* Content Left */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm font-semibold text-orange-700">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
              Local Business Experts
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-gray-900">
              Kya aap <span className="text-orange-600">website banane wala Bilaspur</span> mein dhundh rahe hain?
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Business ko aage badhana hai to ek professional website bohot zaroori hai. Hamari team aapko ek <strong className="text-gray-900 font-bold decoration-orange-500/30">affordable website developer Bilaspur</strong> service deti hai, jisse aapka business directly Google par rank kare.
            </p>
            
            <ul className="space-y-4 pt-2">
              {[
                "13-21 din mein apki website live.",
                "Mobile aur SEO friendly design.",
                "E-commerce, landing page aur business websites."
              ].map((text, i) => (
                <li key={i} className="flex items-start text-gray-700 font-semibold">
                  <div className="mt-1 mr-3 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <Link
                href="https://wa.me/916264906078"
                target="_blank"
                className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-orange-700 shadow-md hover:shadow-lg"
              >
                <span>Hire Web Developer Bilaspur</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Cards Right */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-orange-200 hover:shadow-xl shadow-sm">
              <div className="mb-4 inline-flex rounded-lg bg-blue-50 p-3 text-blue-600 border border-blue-100">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Online Presence</h3>
              <p className="text-sm text-gray-600 font-medium">Bilaspur mein har customer ko aapki services easily online mil sakti hain.</p>
            </div>
            
            <div className="rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-orange-200 hover:shadow-xl shadow-sm mt-0 sm:mt-8">
              <div className="mb-4 inline-flex rounded-lg bg-green-50 p-3 text-green-600 border border-green-100">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Sales Growth</h3>
              <p className="text-sm text-gray-600 font-medium">Website ke through direct inquiries aur sales generate karein organically.</p>
            </div>
            
            <div className="sm:col-span-2 rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-orange-200 hover:shadow-xl shadow-sm">
              <div className="flex items-center gap-4">
                <div className="inline-flex rounded-lg bg-orange-50 p-3 text-orange-600 border border-orange-100">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Best Web Developer Bilaspur</h3>
                  <p className="text-sm text-gray-600 font-medium">Review our success stories and join 50+ local businesses.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
