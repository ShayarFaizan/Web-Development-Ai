"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle, ArrowRight } from "lucide-react";

export default function BilaspurWebsiteBlogPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Back Nav */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#dadce0] shadow-sm">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-[#1a73e8] text-sm font-medium hover:underline"
          >
            <ArrowLeft size={16} /> Blog par wapas jao
          </Link>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "Bilaspur mein website banwane ka kharcha (2026)",
                  url: window.location.href,
                });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copy ho gaya!");
              }
            }}
            className="flex items-center gap-2 text-[#5f6368] text-sm hover:text-[#1a73e8] transition-colors cursor-pointer"
          >
            <Share2 size={15} /> Share
          </button>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-linear-to-br from-[#1a73e8] via-[#1557b0] to-[#0d47a1] text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-wrap gap-2 mb-6">
            {["BILASPUR", "WEBSITE COST", "WEB DEVELOPMENT", "2026 GUIDE"].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-bold tracking-widest text-blue-200 hover:text-white cursor-pointer transition-colors"
                >
                  {tag}
                </span>
              )
            )}
          </div>
          <h1 className="text-[32px] md:text-[48px] font-bold leading-tight mb-6 tracking-tight">
            Bilaspur, Chhattisgarh Mein Website Banwane Ka Kharcha Kitna Hai?
            <span className="block text-blue-200 text-[24px] md:text-[32px] font-normal mt-2">
              (2026 Ka Complete Guide)
            </span>
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl leading-relaxed">
            Agar aap Bilaspur, Chhattisgarh mein apna business online lane ki soch rahe hain
            aur aapko samajh nahi aa raha ki website kitne mein banegi — toh yeh
            guide sirf aapke liye hai.
          </p>
          <div className="flex items-center gap-6 mt-10 text-blue-200 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> April 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> 5 min read
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-16 text-[#202124]">

        {/* Opening Bold Hook */}
        <div className="bg-[#fef7e0] border-l-4 border-[#f9ab00] rounded-r-xl p-6 md:p-8 mb-12">
          <p className="text-[20px] md:text-[22px] font-semibold leading-relaxed text-[#202124]">
            💡 Bilaspur aur pure Chhattisgarh mein hazaron local businesses hain — chahe woh 
            <span className="text-[#1a73e8]"> Vyapar Vihar </span> ke wholesalers hon, 
            <span className="text-[#1a73e8]"> Ratanpur </span> ke hotels, ya 
            <span className="text-[#1a73e8]"> Rama Magneto </span> ke pas ke cafes — lekin unme se 95% ke paas abhi tak koi professional website nahi hai. 
            Aur woh log daily customers kho rahe hain sirf isliye kyunki Google pe unka koi wajood nahi. Agar aap bhi isi category mein hain, toh seedha poochh lo — website banwane mein kharcha kya hota hai?
          </p>
        </div>

        {/* Section 1 */}
        <section className="mb-14">
          <h2 className="text-[28px] md:text-[32px] font-bold mb-2 text-[#1a1c1e] flex items-center gap-3">
            <span className="w-10 h-10 bg-[#e8f0fe] rounded-full flex items-center justify-center text-[#1a73e8] text-lg font-bold shrink-0">
              1
            </span>
            Bilaspur aur Chhattisgarh Mein Websites Ke Kharche Ka Breakdown
          </h2>
          <p className="text-[#5f6368] text-sm mb-6 ml-14">
            — Teeno options ko samjho pehle
          </p>

          <p className="text-[17px] leading-relaxed text-[#3c4043] mb-8">
            Bilaspur, CG ya Chhattisgarh ke kisi bhi chhote sheher mein website banwane ke liye
            mainly teen options hote hain. Chaliye seedha baat karte hain:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                label: "Freelancer",
                price: "₹2,000 – ₹8,000",
                desc: "Sasta hai lekin support, quality aur reliability ka risk rehta hai. Zyada taar toot jaate hain.",
                color: "#fce8e6",
                textColor: "#c5221f",
                icon: "👤",
              },
              {
                label: "Local Agency",
                price: "₹10,000 – ₹40,000",
                desc: "Beech ka option — lekin kaafi baar modern tech nahi use karte, slow delivery hoti hai.",
                color: "#fef7e0",
                textColor: "#b05c00",
                icon: "🏢",
              },
              {
                label: "WebDevelopmentAI",
                price: "₹9,999 se shuru",
                desc: "Fast delivery (3-5 din), AI-powered modern design, React/Next.js tech stack — aur bilkul transparent pricing.",
                color: "#e8f0fe",
                textColor: "#1a73e8",
                icon: "🚀",
                highlight: true,
              },
            ].map((opt) => (
              <div
                key={opt.label}
                className={`rounded-2xl p-6 border-2 ${
                  opt.highlight
                    ? "border-[#1a73e8] shadow-lg shadow-blue-100"
                    : "border-transparent"
                }`}
                style={{ backgroundColor: opt.color }}
              >
                <div className="text-3xl mb-3">{opt.icon}</div>
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-1"
                  style={{ color: opt.textColor }}
                >
                  {opt.label}
                </div>
                <div
                  className="text-2xl font-bold mb-3"
                  style={{ color: opt.textColor }}
                >
                  {opt.price}
                </div>
                <p className="text-sm text-[#3c4043] leading-relaxed">
                  {opt.desc}
                </p>
                {opt.highlight && (
                  <span className="inline-block mt-4 text-xs bg-[#1a73e8] text-white px-3 py-1 rounded-full font-semibold">
                    ✓ Recommended
                  </span>
                )}
              </div>
            ))}
          </div>

          <p className="text-[17px] leading-relaxed text-[#3c4043]">
            Sach yeh hai ki{" "}
            <strong>saste mein kaam karna expensive padta hai</strong> — jab
            website baar baar fix karwani padhe ya brand acha nahi lage, toh
            customers bhag jaate hain.
          </p>
        </section>

        {/* Divider */}
        <div className="h-px bg-[#dadce0] my-12" />

        {/* Section 2 */}
        <section className="mb-14">
          <h2 className="text-[28px] md:text-[32px] font-bold mb-2 text-[#1a1c1e] flex items-center gap-3">
            <span className="w-10 h-10 bg-[#e6f4ea] rounded-full flex items-center justify-center text-[#137333] text-lg font-bold shrink-0">
              2
            </span>
            Website Mein Kya Kya Hona Chahiye? (Bilaspur, CG Ke Liye Zaroori Features)
          </h2>
          <p className="text-[#5f6368] text-sm mb-6 ml-14">
            — Sirf design nahi, results chahiye
          </p>

          <p className="text-[17px] leading-relaxed text-[#3c4043] mb-8">
            Bahut log sirf "website chahiye" bolte hain — lekin ek aachi website
            mein yeh hona chahiye jisse aapka business actually grow ho:
          </p>

          <div className="space-y-4">
            {[
              {
                title: "Mobile-First Design",
                desc: "Bilaspur aur CG mein 90% log phone pe surf karte hain. Agar mobile pe acha nahi dikh raha toh customer seedha competitor ke paas jaayega.",
              },
              {
                title: "Google Pe Search Mein Aaye (Local SEO)",
                desc: '"Website banwane wali company Bilaspur" — jaise koi search kare toh aap top mein dikhein. Yeh hum professionally set up karte hain.',
              },
              {
                title: "Fast Loading Speed",
                desc: "Research kehta hai — agar website 3 seconds mein nahi khuli toh 53% users band kar dete hain. Hum 90+ Google Speed Score guarantee karte hain.",
              },
              {
                title: "WhatsApp / Call Button",
                desc: "Bilaspur aur Raipur jaise cities mein direct contact sabse zyada leads laata hai. Ek click mein WhatsApp connect — yeh basic aur powerful feature hai.",
              },
              {
                title: "Professional Look jo Trust badhaye",
                desc: "Pehla impression = trust. Acha design = zyada customers. Hum AI-powered custom design dete hain — koi generic template nahi.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 p-5 rounded-xl bg-[#f8f9fa] hover:bg-[#e8f0fe] transition-colors group"
              >
                <CheckCircle
                  size={22}
                  className="text-[#1a73e8] shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                />
                <div>
                  <h3 className="font-semibold text-[16px] text-[#202124] mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] text-[#5f6368] leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-[#dadce0] my-12" />

        {/* Section 3 */}
        <section className="mb-14">
          <h2 className="text-[28px] md:text-[32px] font-bold mb-2 text-[#1a1c1e] flex items-center gap-3">
            <span className="w-10 h-10 bg-[#fce8e6] rounded-full flex items-center justify-center text-[#c5221f] text-lg font-bold shrink-0">
              3
            </span>
            Bilaspur, Chhattisgarh Mein Sabse Badi Galti Jo Log Karte Hain
          </h2>
          <p className="text-[#5f6368] text-sm mb-6 ml-14">
            — Yeh avoid karo, paise bachao
          </p>

          <p className="text-[17px] leading-relaxed text-[#3c4043] mb-8">
            Humne hazaron businesses ke saath kaam kiya hai aur yeh common
            mistakes bar bar dekhte hain:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {[
              {
                mistake: "❌ Sabse saste ko choose karna",
                fix: "✅ Value-for-money dekho, sirf price nahi",
              },
              {
                mistake: "❌ Portfolio ya case studies nahi dekhna",
                fix: "✅ Pehle agency ka kaam dekho — phir decide karo",
              },
              {
                mistake: "❌ Sirf design pe focus karna",
                fix: "✅ SEO + speed + mobile — teeno equally important hain",
              },
              {
                mistake: "❌ Ek baar banwake bhool jaana",
                fix: "✅ Maintenance + updates zaroor lo — websites evolve karti hain",
              },
            ].map((item) => (
              <div key={item.mistake} className="rounded-xl border border-[#dadce0] overflow-hidden">
                <div className="bg-[#fce8e6] px-5 py-3 text-[14px] font-medium text-[#c5221f]">
                  {item.mistake}
                </div>
                <div className="bg-[#e6f4ea] px-5 py-3 text-[14px] font-medium text-[#137333]">
                  {item.fix}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#f1f3f4] rounded-2xl p-6 md:p-8">
            <p className="text-[17px] text-[#3c4043] leading-relaxed">
              <strong className="text-[#202124]">Real talk:</strong> Bilaspur, Raipur, Bhilai aur pure Chhattisgarh
              mein abhi competition bahut kam hai online. Jo pehle aayega, uski
              digital presence strong hogi. Agar aap aaj nahi kiye, toh kal
              aapka competitor (chahe woh Korba se ho ya Raigarh se) kar lega — aur phir aap peeche rehenge. Yeh race
              pehle se hi shuru ho chuki hai.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-linear-to-br from-[#1a73e8] to-[#0d47a1] rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="text-4xl mb-4">🚀</div>
              <h2 className="text-[28px] md:text-[34px] font-bold mb-4 leading-tight">
                Bilaspur, Chhattisgarh Ka Pehla AI-Powered Website
                <span className="block text-blue-200 font-normal text-[22px] mt-1">
                  aapka business deserve karta hai
                </span>
              </h2>
              <p className="text-blue-100 text-[17px] mb-8 max-w-lg mx-auto leading-relaxed">
                Abhi{" "}
                <strong className="text-white">Free Consultation Book</strong>{" "}
                karo. Hum personally aapke business ko samjhenge aur batayenge
                ki exactly kya chahiye aur kya nahi. Zero pressure, 100% free.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://webdevelopmentai.in/book-appointment"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#1a73e8] font-bold px-8 py-4 rounded-xl text-[16px] hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
                >
                  🎯 Free Consultation Book Karo
                </a>
                <a
                  href="https://wa.me/916264906078"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-xl text-[16px] hover:bg-[#1ebe5d] transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
                >
                  💬 WhatsApp Pe Baat Karo
                </a>
              </div>

              <p className="text-blue-200 text-sm mt-6">
                ⏱️ Sirf ₹9,999 se shuru • 13–21 din delivery • Bilaspur aur Chhattisgarh ke liye
                special offer
              </p>
            </div>
          </div>
        </section>

        {/* Related Articles Carousel (User Requested Style) */}
        <div className="mt-32 pt-20 border-t border-[#dadce0]">
          <div className="text-[13px] font-bold text-[#1a73e8] tracking-[0.3em] uppercase mb-12 text-center">
             More Articles For You
          </div>

          <div className="relative max-w-2xl mx-auto">
             {/* Right Arrow Button (NOW FUNCTIONAL) */}
             <Link 
               href="/blog/kyun-zaroori-hai-website-bilaspur"
               className="absolute top-1/2 -right-10 md:-right-12 -translate-y-1/2 z-10 hidden md:block"
             >
                <div className="w-20 h-20 bg-white border border-[#dadce0] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all cursor-pointer">
                   <ArrowRight className="text-[#202124]" size={32} />
                </div>
             </Link>

             {/* Carousel Window */}
             <div className="overflow-hidden rounded-[32px] bg-[#f8f9fa] border border-[#dadce0] shadow-2xl relative group">
                <div className="p-8 md:p-12 transition-all duration-500 transform">
                   {/* Slide 1 - Part 2 Preview */}
                   <div className="flex flex-col items-center text-center">
                      <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#1a73e8] text-[11px] font-bold tracking-widest uppercase mb-6">
                         Part 2: Why it matters
                      </div>
                      <h3 className="text-[26px] md:text-[32px] font-bold text-[#202124] mb-4 leading-tight">
                        Local Business ke liye website <br /> kyun zaroori hai?
                      </h3>
                      <p className="text-[#5f6368] text-lg mb-10 max-w-md mx-auto">
                        Bilaspur ke local examples (Vyapar Vihar, Telipara) ke saath samjho 
                        ki website kaise business badhati hai.
                      </p>
                      
                      <Link 
                        href="/blog/kyun-zaroori-hai-website-bilaspur"
                        className="bg-[#1a73e8] text-white px-10 py-5 rounded-2xl font-bold text-[17px] hover:shadow-2xl hover:scale-105 active:scale-95 transition-all mb-4"
                      >
                         Ander Jao (Read Full)
                      </Link>
                   </div>
                </div>
             </div>

             {/* Mobile Arrow */}
             <div className="flex justify-center mt-10 md:hidden">
                <Link 
                  href="/blog/kyun-zaroori-hai-website-bilaspur"
                  className="w-16 h-16 bg-white border border-[#dadce0] rounded-full flex items-center justify-center shadow-xl active:scale-90 transition-all"
                >
                   <ArrowRight className="text-[#202124]" size={28} />
                </Link>
             </div>

             {/* Pagination Dots (User Requested Style) */}
             <div className="flex justify-center gap-3 mt-12 mb-10">
                <div className="w-8 h-3 rounded-full bg-[#1a73e8]" />
                {[...Array(5)].map((_, i) => (
                   <div key={i} className="w-3 h-3 rounded-full bg-[#dadce0]" />
                ))}
             </div>
          </div>
        </div>

        {/* Author */}
        <div className="mt-16 pt-8 border-t border-[#dadce0] flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-linear-to-br from-[#1a73e8] to-[#0d47a1] flex items-center justify-center text-white font-bold text-xl shrink-0">
            W
          </div>
          <div>
            <div className="font-semibold text-[#202124]">
              WebDevelopmentAI Team
            </div>
            <div className="text-sm text-[#5f6368]">
              Chhattisgarh ke liye premium AI-powered web development •{" "}
              <a
                href="https://webdevelopmentai.in"
                className="text-[#1a73e8] hover:underline"
              >
                webdevelopmentai.in
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
