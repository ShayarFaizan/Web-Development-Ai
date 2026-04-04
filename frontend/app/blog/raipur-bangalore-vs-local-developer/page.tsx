"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, MapPin, Shield, Clock, Phone, Star, TrendingUp } from "lucide-react";

export default function LocalVsOutsideDeveloperPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans">

      {/* Top Nav */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e0e0e0]">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/blog/kyun-zaroori-hai-website-bilaspur"
            className="flex items-center gap-2 text-[#1a73e8] text-sm font-semibold hover:bg-blue-50 px-3 py-2 rounded-full transition-all"
          >
            <ArrowLeft size={18} /> Pichla Part
          </Link>
          <div className="text-[12px] font-bold text-[#5f6368] tracking-widest uppercase bg-[#f1f3f4] px-3 py-1 rounded-full">
            Part 3: Local vs Bahar
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-white border-b border-[#e0e0e0]">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-wide uppercase">
            <Shield size={14} /> Bilaspur Business Trust Guide
          </div>
          <h1 className="text-[36px] md:text-[54px] font-extrabold text-[#202124] leading-[1.1] mb-8 tracking-tight">
            Raipur ya Bangalore Se Website Banwana{" "}
            <br />
            <span className="text-orange-500">vs Local Developer</span>{" "}
            — Kya Sahi Hai?
          </h1>
          <p className="text-[20px] text-[#5f6368] max-w-2xl mx-auto leading-relaxed">
            Bilaspur ke business owners ke liye real comparison — paisa, time, support aur local samajh ke basis par.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm text-[#5f6368]">
            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-orange-500" /> Bilaspur, Chhattisgarh</span>
            <span className="w-1 h-1 rounded-full bg-[#dadce0]" />
            <span>April 2026</span>
            <span className="w-1 h-1 rounded-full bg-[#dadce0]" />
            <span>8 min read</span>
          </div>
        </div>
      </div>

      {/* Main Article */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">

          {/* Opening Hook */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-xl shadow-orange-900/5 border border-orange-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
              <Shield size={200} className="text-orange-500" />
            </div>
            <p className="text-[20px] md:text-[24px] text-[#202124] font-semibold leading-relaxed mb-6">
              Aapne Google par search kiya "website banana hai" — aur results mein aaye Raipur ki agencies, Bangalore ke freelancers, aur ek-do Bilaspur ke numbers.
            </p>
            <p className="text-[18px] text-[#5f6368] leading-relaxed">
              Ab confusion yeh hai: <strong className="text-[#202124]">kisse kaam karwayein?</strong> Bahar wale zyada professional lagte hain, lekin local developer ko seedha phone kar sakte ho. Iss blog mein hum dono ko <em>honestly</em> compare karenge — taaki aap sahi decision le sakein.
            </p>
          </div>

          {/* Section 1: The Real Comparison Table */}
          <div>
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#202124] mb-8 leading-tight">
              🔍 Factor-by-Factor Comparison
            </h2>
            <div className="grid grid-cols-1 gap-6">

              {/* Factor 1 - Communication */}
              <div className="bg-white rounded-[24px] p-6 md:p-8 border border-[#e0e0e0] shadow-sm">
                <h3 className="text-[20px] font-bold text-[#202124] mb-6 flex items-center gap-3">
                  <Phone size={22} className="text-[#1a73e8]" />
                  Communication & Samajh
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
                    <div className="font-bold text-green-700 text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
                      <CheckCircle size={16} /> Local Bilaspur Developer
                    </div>
                    <ul className="space-y-2 text-[15px] text-[#3c4043]">
                      <li>✅ Same language mein baat — Hindi/Chhattisgarhi</li>
                      <li>✅ Office visit karke requirements explain kar sakte ho</li>
                      <li>✅ "Vyapar Vihar wale logo ke liye kya kaam karta hai" — yeh samjhega</li>
                      <li>✅ WhatsApp par seedha update milta hai</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
                    <div className="font-bold text-red-700 text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
                      <XCircle size={16} /> Bangalore / Raipur Agency
                    </div>
                    <ul className="space-y-2 text-[15px] text-[#3c4043]">
                      <li>❌ Email threads, formal communication</li>
                      <li>❌ Meetings Zoom/Google Meet par — timing issue hoti hai</li>
                      <li>❌ Bilaspur local market ka context nahi hota</li>
                      <li>❌ "Ticket raise karo" — jab urgent problem ho</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Factor 2 - Pricing */}
              <div className="bg-white rounded-[24px] p-6 md:p-8 border border-[#e0e0e0] shadow-sm">
                <h3 className="text-[20px] font-bold text-[#202124] mb-6 flex items-center gap-3">
                  <TrendingUp size={22} className="text-[#1a73e8]" />
                  Pricing & Value
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#f1f3f4] rounded-2xl p-5 text-center">
                    <div className="text-[13px] font-bold text-[#5f6368] uppercase tracking-wide mb-2">Local Bilaspur</div>
                    <div className="text-[32px] font-extrabold text-green-600">₹6K–25K</div>
                    <div className="text-[13px] text-[#5f6368] mt-1">Basic to premium site</div>
                    <div className="text-[13px] text-green-600 font-semibold mt-3">✅ Negotiable, face-to-face</div>
                  </div>
                  <div className="bg-[#f1f3f4] rounded-2xl p-5 text-center">
                    <div className="text-[13px] font-bold text-[#5f6368] uppercase tracking-wide mb-2">Raipur Agency</div>
                    <div className="text-[32px] font-extrabold text-yellow-600">₹20K–80K</div>
                    <div className="text-[13px] text-[#5f6368] mt-1">Depends on package</div>
                    <div className="text-[13px] text-yellow-600 font-semibold mt-3">⚠️ Hidden charges common</div>
                  </div>
                  <div className="bg-[#f1f3f4] rounded-2xl p-5 text-center">
                    <div className="text-[13px] font-bold text-[#5f6368] uppercase tracking-wide mb-2">Bangalore Agency</div>
                    <div className="text-[32px] font-extrabold text-red-500">₹50K–3L+</div>
                    <div className="text-[13px] text-[#5f6368] mt-1">Enterprise-level pricing</div>
                    <div className="text-[13px] text-red-500 font-semibold mt-3">❌ Overkill for local biz</div>
                  </div>
                </div>
                <p className="mt-6 text-[15px] text-[#5f6368] bg-yellow-50 rounded-2xl p-4 border border-yellow-100">
                  💡 <strong>Reality check:</strong> Bilaspur mein ek restaurant ya boutique ke liye ₹6,000–₹15,000 ki website kaafi hoti hai. Zyada paisa dene ka matlab zyada results nahin hota — especially jab local audience target karni ho.
                </p>
              </div>

              {/* Factor 3 - Speed */}
              <div className="bg-white rounded-[24px] p-6 md:p-8 border border-[#e0e0e0] shadow-sm">
                <h3 className="text-[20px] font-bold text-[#202124] mb-6 flex items-center gap-3">
                  <Clock size={22} className="text-[#1a73e8]" />
                  Speed & Delivery Time
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
                    <div className="font-bold text-green-700 text-sm uppercase tracking-wide mb-3">Local Developer</div>
                    <ul className="space-y-2 text-[15px] text-[#3c4043]">
                      <li>✅ <strong>3–7 din</strong> mein basic site ready</li>
                      <li>✅ Changes same day implement ho jaate hain</li>
                      <li>✅ Festival ya event ke liye urgent delivery possible</li>
                      <li>✅ "Kal tak chahiye" — yeh samajh aata hai locally</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                    <div className="font-bold text-orange-700 text-sm uppercase tracking-wide mb-3">Bahar ki Agency</div>
                    <ul className="space-y-2 text-[15px] text-[#3c4043]">
                      <li>⚠️ <strong>4–12 hafte</strong> normal timeline</li>
                      <li>⚠️ Revisions ke liye formal request process</li>
                      <li>⚠️ Aksar milestones miss hote hain</li>
                      <li>⚠️ Project manager alag hota hai — directly developer nahi</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Factor 4 - After Support */}
              <div className="bg-white rounded-[24px] p-6 md:p-8 border border-[#e0e0e0] shadow-sm">
                <h3 className="text-[20px] font-bold text-[#202124] mb-6 flex items-center gap-3">
                  <Star size={22} className="text-[#1a73e8]" />
                  After-Sales Support
                </h3>
                <p className="text-[17px] text-[#5f6368] mb-6 leading-relaxed">
                  Yeh sabse important factor hai jo log ignore karte hain. Website ban gayi — uske baad kya?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
                    <div className="font-bold text-green-700 mb-3 flex items-center gap-2"><CheckCircle size={16} /> Local Developer</div>
                    <ul className="space-y-2 text-[15px] text-[#3c4043]">
                      <li>✅ Ek call par aa jaata hai</li>
                      <li>✅ Festival offers update karne mein help</li>
                      <li>✅ Logo, photo, content update — seedha baat</li>
                      <li>✅ Kabhi problem aayi — Civili Lines ya Gol Bazaar aa gaya</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
                    <div className="font-bold text-red-700 mb-3 flex items-center gap-2"><XCircle size={16} /> Bahari Agency</div>
                    <ul className="space-y-2 text-[15px] text-[#3c4043]">
                      <li>❌ Maintenance plan alag se lena padta hai</li>
                      <li>❌ Ticket system — 48-72 hr response time</li>
                      <li>❌ Developer team aksar badal jaati hai</li>
                      <li>❌ Agency band ho jaaye — aap akele</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Real Bilaspur Stories */}
          <div>
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#202124] mb-8 leading-tight">
              🏙️ Bilaspur Ke Real Examples
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-[24px] p-6 md:p-8 border border-[#e0e0e0] shadow-sm relative overflow-hidden">
                <div className="absolute top-4 right-4 text-5xl opacity-10">🍽️</div>
                <div className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-600 text-[11px] font-bold tracking-widest uppercase mb-4">
                  Case Study 1
                </div>
                <h3 className="text-[20px] font-bold text-[#202124] mb-3">Telipara Ka Dhaba — Bangalore Agency Experiment</h3>
                <p className="text-[16px] text-[#5f6368] leading-relaxed mb-4">
                  Ek popular Telipara restaurant ne Bangalore ki ek agency ko ₹75,000 mein website order ki. 3 mahine baad website mili — lekin usme menu galat tha, Chhattisgarhi dishes ka naam wrong tha, aur Google Maps integration kaam nahi kar raha tha. Changes ke liye 2 aur hafte wait karna pada.
                </p>
                <div className="bg-red-50 rounded-xl p-4 text-[14px] text-red-700">
                  <strong>Nuksaan:</strong> ₹75,000 + 5 mahine ka time + frustrated customers jo menu samajh nahi sake.
                </div>
              </div>

              <div className="bg-white rounded-[24px] p-6 md:p-8 border border-[#e0e0e0] shadow-sm relative overflow-hidden">
                <div className="absolute top-4 right-4 text-5xl opacity-10">👗</div>
                <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-600 text-[11px] font-bold tracking-widest uppercase mb-4">
                  Case Study 2
                </div>
                <h3 className="text-[20px] font-bold text-[#202124] mb-3">Vyapar Vihar Ki Boutique — Local Developer Se Sahi Kaam</h3>
                <p className="text-[16px] text-[#5f6368] leading-relaxed mb-4">
                  Isi area ki ek ladies boutique ne ₹9,500 mein local developer se website banwayi. 5 din mein ready, Teej/Navratri collection ek call par update hoti hai, aur local Google search mein 1st page par aa gayi under 3 mahine.
                </p>
                <div className="bg-green-50 rounded-xl p-4 text-[14px] text-green-700">
                  <strong>Result:</strong> ₹9,500 investment, monthly 40-50 new customers online se, local trust build.
                </div>
              </div>

              <div className="bg-white rounded-[24px] p-6 md:p-8 border border-[#e0e0e0] shadow-sm relative overflow-hidden">
                <div className="absolute top-4 right-4 text-5xl opacity-10">🏥</div>
                <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-[11px] font-bold tracking-widest uppercase mb-4">
                  Case Study 3
                </div>
                <h3 className="text-[20px] font-bold text-[#202124] mb-3">Ratanpur Road Clinic — Raipur Agency Se Mixed Results</h3>
                <p className="text-[16px] text-[#5f6368] leading-relaxed mb-4">
                  Ek doctor sahab ne Raipur agency se ₹35,000 mein website banwayi. Design accha tha, lekin local SEO kisi ne nahi kiya. Bilaspur mein "doctor near me" search karne par website page 4 par thi. Local developer ne uske baad ₹5,000 mein local SEO fix kiya — phir 1st page par aayi.
                </p>
                <div className="bg-yellow-50 rounded-xl p-4 text-[14px] text-yellow-700">
                  <strong>Sabak:</strong> Design alag hai, local SEO alag skill hai. Local developer dono jaanta hai yahan ka context.
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: When Bahar Developer Makes Sense */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 border border-[#e0e0e0] shadow-sm">
            <h2 className="text-[26px] md:text-[32px] font-bold text-[#202124] mb-6 leading-tight">
              ⚖️ Bahar Developer Kab Sahi Hota Hai?
            </h2>
            <p className="text-[17px] text-[#5f6368] mb-6 leading-relaxed">
              Hum honest rahenge — kuch situations mein bahar ki agency sach mein better option hoti hai:
            </p>
            <ul className="space-y-4">
              {[
                { icon: "🌐", text: "Agar aapko complex e-commerce platform chahiye — 500+ products, payment gateway integration, inventory system." },
                { icon: "🏢", text: "Agar aap Bilaspur se bahar national ya international market target kar rahe ho." },
                { icon: "💰", text: "Agar budget ₹50,000+ hai aur aapko enterprise-grade security aur performance chahiye." },
                { icon: "🔧", text: "Agar aapko custom software ya mobile app bhi chahiye saath mein." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 bg-[#f8f9fa] rounded-2xl p-4">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <span className="text-[16px] text-[#3c4043] leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[16px] text-[#5f6368] bg-blue-50 rounded-2xl p-4 border border-blue-100">
              📌 <strong>90% Bilaspur businesses ke liye</strong> — restaurant, boutique, clinic, CA firm, coaching institute — local developer best fit hai. Bahari agency tab socho jab business genuinely scale ho raha ho nationally.
            </p>
          </div>

          {/* Quick Decision Checklist */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 border border-[#e0e0e0] shadow-sm">
            <h2 className="text-[26px] md:text-[32px] font-bold text-[#202124] mb-6 leading-tight">
              ✅ Decision Karne Se Pehle Yeh Poochho
            </h2>
            <div className="space-y-3">
              {[
                "Kya main unse directly phone par baat kar sakta hoon?",
                "Kya unhe Bilaspur ka local market pata hai?",
                "Kya voh mere office aa sakte hain agar zaroorat ho?",
                "Kya reference (referral) hai koi local business ka?",
                "Website ke baad maintenance aur updates kaise honge?",
                "Hidden charges kya hain — hosting, domain, updates?",
              ].map((q, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-[#f8f9fa] rounded-xl">
                  <CheckCircle size={18} className="text-green-500 mt-0.5 shrink-0" />
                  <span className="text-[16px] text-[#3c4043]">{q}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-[#202124] to-[#1a1a2e] rounded-[32px] p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-8 left-8 w-32 h-32 border-2 border-white rounded-full" />
              <div className="absolute bottom-8 right-8 w-48 h-48 border-2 border-white rounded-full" />
            </div>
            <div className="relative z-10">
              <div className="inline-block px-4 py-1 rounded-full bg-orange-500/20 text-orange-400 text-[11px] font-bold tracking-widest uppercase mb-6">
                Bilaspur Ka Apna Developer
              </div>
              <h2 className="text-[28px] md:text-[40px] font-extrabold text-white mb-6 leading-tight">
                Local Samajh, Professional Kaam — <br />
                <span className="text-orange-400">Bilaspur Mein Hi</span>
              </h2>
              <p className="text-white/70 text-[18px] mb-10 max-w-lg mx-auto leading-relaxed">
                Hum Bilaspur-based hain. Aapki language samajhte hain, aapka market samajhte hain — aur seedha baat karte hain. Free consultation mein aaj hi poochho.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/book-appointment" className="bg-orange-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all hover:bg-orange-400">
                  Free Consultation (Bilaspur Mein!)
                </a>
                <a href="https://wa.me/916264906078" className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all">
                  WhatsApp Karein Abhi
                </a>
              </div>
            </div>
          </section>

          {/* Next / Prev Navigation Carousel */}
          <div className="mt-32 pt-20 border-t border-[#dadce0]">
            <div className="text-[13px] font-bold text-[#1a73e8] tracking-[0.3em] uppercase mb-12 text-center">
              Series Mein Aur Padho
            </div>

            <div className="relative max-w-2xl mx-auto pb-10">
              {/* Left Arrow — Part 2 */}
              <Link
                href="/blog/kyun-zaroori-hai-website-bilaspur"
                className="absolute top-1/2 -left-10 md:-left-12 -translate-y-1/2 z-10 hidden md:block"
              >
                <div className="w-20 h-20 bg-white border border-[#dadce0] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all cursor-pointer">
                  <ArrowLeft className="text-[#202124]" size={32} />
                </div>
              </Link>

              {/* Right Arrow — Part 4 */}
              <Link
                href="/blog/ai-se-website-banana-bilaspur"
                className="absolute top-1/2 -right-10 md:-right-12 -translate-y-1/2 z-10 hidden md:block"
              >
                <div className="w-20 h-20 bg-white border border-[#dadce0] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all cursor-pointer">
                  <ArrowRight className="text-[#202124]" size={32} />
                </div>
              </Link>

              {/* Carousel Window — Part 4 Preview */}
              <div className="overflow-hidden rounded-[32px] bg-white border border-[#dadce0] shadow-2xl">
                <div className="p-8 md:p-12">
                  <div className="flex flex-col items-center text-center">
                    <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 text-[11px] font-bold tracking-widest uppercase mb-6">
                      Part 4: Hamara AI Tarika
                    </div>
                    <h3 className="text-[26px] md:text-[32px] font-bold text-[#202124] mb-4 leading-tight">
                      AI se Website Banana — <br /> Kam Time Mein, Better Results
                    </h3>
                    <p className="text-[#5f6368] text-lg mb-10 max-w-md mx-auto">
                      Bilaspur ka pehla AI-powered web development studio — kaise karta hai hamara system alag kaam.
                    </p>
                    <Link
                      href="/blog/ai-se-website-banana-bilaspur"
                      className="bg-emerald-500 text-white px-10 py-5 rounded-2xl font-bold text-[17px] hover:shadow-2xl hover:scale-105 active:scale-95 transition-all mb-4"
                    >
                      Agla Part Padho →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile Arrows */}
              <div className="flex justify-center gap-6 mt-10 md:hidden">
                <Link
                  href="/blog/kyun-zaroori-hai-website-bilaspur"
                  className="w-16 h-16 bg-white border border-[#dadce0] rounded-full flex items-center justify-center shadow-xl active:scale-90 transition-all"
                >
                  <ArrowLeft className="text-[#202124]" size={28} />
                </Link>
                <Link
                  href="/blog/ai-se-website-banana-bilaspur"
                  className="w-16 h-16 bg-white border border-[#dadce0] rounded-full flex items-center justify-center shadow-xl active:scale-90 transition-all"
                >
                  <ArrowRight className="text-[#202124]" size={28} />
                </Link>
              </div>

              {/* Pagination Dots — position 3 of 4 */}
              <div className="flex justify-center gap-3 mt-12 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#dadce0]" />
                <div className="w-3 h-3 rounded-full bg-[#dadce0]" />
                <div className="w-8 h-3 rounded-full bg-orange-500" />
                <div className="w-3 h-3 rounded-full bg-[#dadce0]" />
              </div>
            </div>
          </div>

        </div>
      </article>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-[#e0e0e0]">
        <div className="max-w-4xl mx-auto px-6 text-center text-[#5f6368] text-sm">
          © 2026 WebDevelopmentAI • Made with ❤️ for Bilaspur, Chhattisgarh
        </div>
      </footer>

    </div>
  );
}
