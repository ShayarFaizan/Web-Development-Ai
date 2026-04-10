"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Lightbulb, MapPin, TrendingUp, Users } from "lucide-react";

export default function BilaspurImportanceBlogPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans">
      {/* Top Nav */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e0e0e0]">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/blog/bilaspur-mein-website-banwane-ka-kharcha"
            className="flex items-center gap-2 text-[#1a73e8] text-sm font-semibold hover:bg-blue-50 px-3 py-2 rounded-full transition-all"
          >
            <ArrowLeft size={18} /> Pichla Part (Kharcha)
          </Link>
          <div className="text-[12px] font-bold text-[#5f6368] tracking-widest uppercase bg-[#f1f3f4] px-3 py-1 rounded-full">
            Part 2: Why it matters
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-white border-b border-[#e0e0e0]">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1a73e8] px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-wide uppercase">
            <Lightbulb size={14} /> Bilaspur Business Insights
          </div>
          <h1 className="text-[36px] md:text-[54px] font-extrabold text-[#202124] leading-[1.1] mb-8 tracking-tight">
            Local Business Ke Liye Website <br />
            <span className="text-[#1a73e8]">Kyun Zaroori Hai?</span>
          </h1>
          <p className="text-[20px] text-[#5f6368] max-w-2xl mx-auto leading-relaxed">
            Bilaspur ke asli examples se samjho ki internet pe na hona aapke 
            business ko kaise nuksan pahucha raha hai.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          
          {/* Intro Card */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-xl shadow-blue-900/5 border border-blue-50 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                <MapPin size={200} className="text-[#1a73e8]" />
             </div>
             <p className="text-[22px] md:text-[24px] text-[#3c4043] leading-relaxed relative z-10">
                Maano aap <strong>Vyapar Vihar</strong> mein hain aur aapko ek 
                urgent spare part chahiye apne showroom ke liye. Aap phone nikaalte ho aur search karte ho... 
                <strong> "best industrial parts shop in Bilaspur"</strong>.
             </p>
             <p className="mt-6 text-[18px] text-[#5f6368] leading-relaxed relative z-10">
                Aap kis shop pe jaoge? Uspe jiski sirf dukaan hai, ya uspe jiski 
                professional website hai jisme product list, photos aur 
                <strong> Arpa River </strong> ke paas wala address clear dikh raha hai?
             </p>
          </div>

          <h2 className="text-[32px] font-bold text-[#202124] mt-20 mb-8 border-l-4 border-[#1a73e8] pl-6">
             Bilaspur Specific Examples:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Example 1 */}
            <div className="bg-linear-to-br from-white to-[#f1f8ff] p-8 rounded-[24px] border border-blue-100/50 hover:border-blue-300 transition-all group">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <Users size={24} />
              </div>
              <h3 className="text-[20px] font-bold text-[#202124] mb-3">1. Telipara Ka Purana Business</h3>
              <p className="text-[#5f6368] leading-relaxed text-[16px]">
                Aapki dukaan 20 saal purani hai <strong>Telipara</strong> mein, lekin 
                nayi dukaan jo 1 saal pehle khuli hai, woh online advertising aur website se 
                naye gen-z customers ko kheench rahi hai. Trust old hai, lekin visibility new hai.
              </p>
            </div>

            {/* Example 2 */}
            <div className="bg-linear-to-br from-white to-[#fff9f1] p-8 rounded-[24px] border border-orange-100/50 hover:border-orange-300 transition-all group">
              <div className="w-12 h-12 bg-[#f9ab00] text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-[20px] font-bold text-[#202124] mb-3">2. Rama Magneto Ka Digital Push</h3>
              <p className="text-[#5f6368] leading-relaxed text-[16px]">
                Jab koi <strong>Rama Magneto</strong> ya <strong>36 City Mall</strong> mein bhatak raha hota hai, 
                tab woh Google Maps aur search pe decide karta hai ki lunch kahan karega. Website hone se aapka 
                menu aur mahaul unn tak turant pahuchta hai.
              </p>
            </div>
          </div>

          {/* Key Reasons */}
          <div className="mt-20 space-y-16">
             <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="flex-1">
                   <h3 className="text-[28px] font-bold text-[#202124] mb-4">
                      Bilaspur Ab Digital Ban Raha Hai 🚀
                   </h3>
                   <p className="text-[18px] text-[#5f6368] leading-relaxed">
                      Chhattisgarh ke har sheher—chahe woh Raipur ho ya Korba—wahan customers smart ho rahe hain. 
                      Bilaspur ke log ab physical signboard se zyada search engine pe trust karte hain. 
                      Professional website hone ka matlab hai:
                   </p>
                   <ul className="mt-6 space-y-4">
                      {[
                        "Social Proof & Trust (Customer Reviews)",
                        "24/7 Dukaan Khuli Rehti Hai",
                        "Pure Chhattisgarh mein Branding",
                        "Direct WhatsApp Connect"
                      ].map(item => (
                        <li key={item} className="flex items-center gap-3 text-[17px] text-[#3c4043] font-medium">
                           <div className="w-2 h-2 rounded-full bg-[#1a73e8]" /> {item}
                        </li>
                      ))}
                   </ul>
                </div>
                <div className="w-full md:w-80 bg-[#202124] text-white p-8 rounded-3xl relative">
                   <div className="text-[40px] mb-4">💡</div>
                   <p className="text-[16px] italic leading-relaxed text-gray-300">
                      "Agar aapka business Google pe nahi dikh raha, toh Bilaspur ke 70% consumers ko lagta hai 
                      ki aap exist hi nahi karte ya aapka business serious nahi hai."
                   </p>
                </div>
             </div>
          </div>

          {/* CTA Box */}
          <div className="mt-24 p-1 rounded-[40px] bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-2xl">
            <div className="bg-white rounded-[38px] p-10 md:p-14 text-center">
               <h2 className="text-[32px] md:text-[42px] font-black text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 mb-6 font-sans">
                  Ab Apne Business Ko Online Le Aao
               </h2>
               <p className="text-[19px] text-[#5f6368] mb-12 max-w-xl mx-auto leading-relaxed">
                  WebDevelopmentAI ke saath Bilaspur ka har vyapari ab digital superstar ban sakta hai. 
                  Bahut sasta aur bahut fast.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/book-appointment" className="bg-[#1a73e8] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all">
                     Free Consultation (Free Hai!)
                  </a>
                  <a href="https://wa.me/916264906078" className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all">
                     WhatsApp Karein
                  </a>
               </div>
            </div>
          </div>

        {/* Part Navigation Carousel */}
        <div className="mt-32 pt-20 border-t border-[#dadce0]">
          <div className="text-[13px] font-bold text-[#1a73e8] tracking-[0.3em] uppercase mb-12 text-center">
            Series Mein Aur Padho
          </div>

          <div className="relative max-w-2xl mx-auto pb-10">
            {/* Left Arrow — Part 1 */}
            <Link 
              href="/blog/bilaspur-mein-website-banwane-ka-kharcha"
              className="absolute top-1/2 -left-10 md:-left-12 -translate-y-1/2 z-10 hidden md:block"
            >
               <div className="w-20 h-20 bg-white border border-[#dadce0] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all cursor-pointer">
                  <ArrowLeft className="text-[#202124]" size={32} />
               </div>
            </Link>

            {/* Right Arrow — Part 3 */}
            <Link 
              href="/blog/raipur-bangalore-vs-local-developer"
              className="absolute top-1/2 -right-10 md:-right-12 -translate-y-1/2 z-10 hidden md:block"
            >
               <div className="w-20 h-20 bg-white border border-[#dadce0] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all cursor-pointer">
                  <ArrowRight className="text-[#202124]" size={32} />
               </div>
            </Link>

            {/* Carousel Window — Agla Part 3 Preview */}
            <div className="overflow-hidden rounded-[32px] bg-white border border-[#dadce0] shadow-2xl">
               <div className="p-8 md:p-12">
                  <div className="flex flex-col items-center text-center">
                     <div className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-[11px] font-bold tracking-widest uppercase mb-6">
                        Part 3: Local vs Bahar
                     </div>
                     <h3 className="text-[26px] md:text-[32px] font-bold text-[#202124] mb-4 leading-tight">
                       Raipur ya Bangalore Se Website Banwana <br /> vs Local Developer — Kya Sahi Hai?
                     </h3>
                     <p className="text-[#5f6368] text-lg mb-10 max-w-md mx-auto">
                       Real comparison — paisa, time, support aur local samajh ke basis par. Bilaspur ke examples ke saath.
                     </p>
                     
                     <Link 
                       href="/blog/raipur-bangalore-vs-local-developer"
                       className="bg-orange-500 text-white px-10 py-5 rounded-2xl font-bold text-[17px] hover:shadow-2xl hover:scale-105 active:scale-95 transition-all mb-4"
                     >
                        Agla Part Padho →
                     </Link>
                  </div>
               </div>
            </div>

            {/* Mobile Arrows */}
            <div className="flex justify-center gap-6 mt-10 md:hidden">
               <Link 
                 href="/blog/bilaspur-mein-website-banwane-ka-kharcha"
                 className="w-16 h-16 bg-white border border-[#dadce0] rounded-full flex items-center justify-center shadow-xl active:scale-90 transition-all"
               >
                  <ArrowLeft className="text-[#202124]" size={28} />
               </Link>
               <Link 
                 href="/blog/raipur-bangalore-vs-local-developer"
                 className="w-16 h-16 bg-white border border-[#dadce0] rounded-full flex items-center justify-center shadow-xl active:scale-90 transition-all"
               >
                  <ArrowRight className="text-[#202124]" size={28} />
               </Link>
            </div>

            {/* Pagination Dots — position 2 of 3 */}
            <div className="flex justify-center gap-3 mt-12 mb-4">
               <div className="w-3 h-3 rounded-full bg-[#dadce0]" />
               <div className="w-8 h-3 rounded-full bg-[#1a73e8]" />
               <div className="w-3 h-3 rounded-full bg-[#dadce0]" />
            </div>
          </div>
        </div>

        </div>
      </article>
      
      {/* Footer minimal */}
      <footer className="bg-white py-12 border-t border-[#e0e0e0]">
         <div className="max-w-4xl mx-auto px-6 text-center text-[#5f6368] text-sm">
            © 2026 WebDevelopmentAI • Made with ❤️ for Bilaspur, Chhattisgarh
         </div>
      </footer>
    </div>
  );
}
