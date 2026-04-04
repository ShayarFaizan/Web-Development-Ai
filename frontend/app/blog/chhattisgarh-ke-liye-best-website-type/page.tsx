"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, MapPin, Zap, ShoppingCart, Layout, Globe, Star, AlertCircle } from "lucide-react";

export default function WebsiteTypeGuidePage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans">

      {/* Top Nav */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e0e0e0]">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/blog/ai-se-website-banana-bilaspur"
            className="flex items-center gap-2 text-[#1a73e8] text-sm font-semibold hover:bg-blue-50 px-3 py-2 rounded-full transition-all"
          >
            <ArrowLeft size={18} /> Pichla Part
          </Link>
          <div className="text-[12px] font-bold text-[#5f6368] tracking-widest uppercase bg-[#f1f3f4] px-3 py-1 rounded-full">
            Part 5: Website Type Guide
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-white border-b border-[#e0e0e0]">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-600 px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-wide uppercase">
            <Layout size={14} /> Chhattisgarh Business Decision Guide
          </div>
          <h1 className="text-[36px] md:text-[52px] font-extrabold text-[#202124] leading-[1.1] mb-8 tracking-tight">
            Chhattisgarh Ke Small Businesses Ke Liye <br />
            <span className="text-violet-600">Best Website Type Kaun Sa Hai?</span>
          </h1>
          <p className="text-[20px] text-[#5f6368] max-w-2xl mx-auto leading-relaxed">
            Static, Dynamic ya E-commerce — teeno mein se apne business ke liye sahi option choose karo. 
            Galat choice = paisa aur time dono waste.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm text-[#5f6368]">
            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-violet-500" /> Bilaspur & Chhattisgarh</span>
            <span className="w-1 h-1 rounded-full bg-[#dadce0]" />
            <span>April 2026</span>
            <span className="w-1 h-1 rounded-full bg-[#dadce0]" />
            <span>10 min read</span>
          </div>

          {/* Quick Decision Banner */}
          <div className="mt-10 bg-violet-50 border border-violet-200 rounded-2xl p-5 max-w-lg mx-auto">
            <p className="text-[15px] text-violet-700 font-semibold">
              ⚡ Jaldi jaanna chahte ho? Neeche scroll karo "Quick Decision Table" tak — 
              woh ek jhatak mein sab clear kar dega.
            </p>
          </div>
        </div>
      </div>

      {/* Main Article */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">

          {/* Opener */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-xl shadow-violet-900/5 border border-violet-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-[0.04] pointer-events-none">
              <Globe size={200} className="text-violet-500" />
            </div>
            <p className="text-[20px] md:text-[24px] text-[#202124] font-semibold leading-relaxed mb-6">
              Ek Raipur ki kirana shop owner ne ₹40,000 mein e-commerce website banwayi — sirf 12 orders aaye 6 mahine mein. Ek Bilaspur coaching institute ne ₹8,000 ki simple static website banwayi — 200+ enquiries aayin 3 mahine mein.
            </p>
            <p className="text-[18px] text-[#5f6368] leading-relaxed">
              Fark kya tha? <strong className="text-[#202124]">Sahi website type ka selection.</strong> Yeh blog aapko exact clarity dega ki aapke business ke liye — restaurant ho, boutique ho, clinic ho ya retail shop — kaun sa website type actually kaam aayega.
            </p>
          </div>

          {/* Section 1: Types Explained */}
          <div>
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#202124] mb-4 leading-tight">
              📚 Pehle Samjho — Teen Types Kya Hote Hain?
            </h2>
            <p className="text-[17px] text-[#5f6368] mb-8 leading-relaxed">
              Technical jargon hatao — simple language mein yeh samjho:
            </p>

            <div className="grid grid-cols-1 gap-6">

              {/* Static */}
              <div className="bg-white rounded-[24px] p-6 md:p-8 border border-[#e0e0e0] shadow-sm">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Layout size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold text-[#202124]">Static Website</h3>
                    <p className="text-[14px] text-[#5f6368]">Sabse simple, sabse fast, sabse sasta</p>
                  </div>
                </div>
                <p className="text-[16px] text-[#3c4043] leading-relaxed mb-5">
                  Static website matlab — <strong>ek fixed digital visiting card / brochure.</strong> Content hamesha same rehta hai jab tak aap manually change na karo. Koi login panel nahi, koi database nahi — sirf clean, fast pages.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-[12px] font-bold text-blue-600 uppercase tracking-wide mb-3">Isme Milta Hai</div>
                    {["Home page + About + Services", "Contact form (WhatsApp/email)", "Google Maps integration", "Photo gallery", "Testimonials section"].map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-[14px] text-[#3c4043]">
                        <CheckCircle size={14} className="text-green-500 shrink-0" /> {f}
                      </div>
                    ))}
                  </div>
                  <div className="bg-blue-50 rounded-2xl p-4">
                    <div className="text-[12px] font-bold text-blue-600 uppercase tracking-wide mb-3">Quick Stats</div>
                    <div className="space-y-2 text-[14px]">
                      <div className="flex justify-between"><span className="text-[#5f6368]">Price</span><span className="font-bold text-[#202124]">₹9,999 – ₹22,999</span></div>
                      <div className="flex justify-between"><span className="text-[#5f6368]">Delivery</span><span className="font-bold text-[#202124]">13–21 din</span></div>
                      <div className="flex justify-between"><span className="text-[#5f6368]">Maintenance</span><span className="font-bold text-green-600">Almost nil</span></div>
                      <div className="flex justify-between"><span className="text-[#5f6368]">Page Speed</span><span className="font-bold text-[#202124]">⚡ Blazing fast</span></div>
                      <div className="flex justify-between"><span className="text-[#5f6368]">SEO Score</span><span className="font-bold text-green-600">90–100</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic */}
              <div className="bg-white rounded-[24px] p-6 md:p-8 border border-[#e0e0e0] shadow-sm">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 bg-violet-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Zap size={24} className="text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold text-[#202124]">Dynamic Website</h3>
                    <p className="text-[14px] text-[#5f6368]">Admin panel, user interaction, live content</p>
                  </div>
                </div>
                <p className="text-[16px] text-[#3c4043] leading-relaxed mb-5">
                  Dynamic website matlab — <strong>ek living, breathing website jisme content change hota rehta hai.</strong> Aapko ek admin panel milta hai jahan se aap khud blog likhein, services update karein, appointments manage karein — bina developer ki zaroorat ke.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-[12px] font-bold text-violet-600 uppercase tracking-wide mb-3">Isme Milta Hai</div>
                    {["CMS / Admin Panel (khud update karo)", "Blog & news section", "User registration / booking", "Contact requests database", "FAQ management", "SEO-optimized page structure"].map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-[14px] text-[#3c4043]">
                        <CheckCircle size={14} className="text-green-500 shrink-0" /> {f}
                      </div>
                    ))}
                  </div>
                  <div className="bg-violet-50 rounded-2xl p-4">
                    <div className="text-[12px] font-bold text-violet-600 uppercase tracking-wide mb-3">Quick Stats</div>
                    <div className="space-y-2 text-[14px]">
                      <div className="flex justify-between"><span className="text-[#5f6368]">Price</span><span className="font-bold text-[#202124]">₹27,999 – ₹42,999</span></div>
                      <div className="flex justify-between"><span className="text-[#5f6368]">Delivery</span><span className="font-bold text-[#202124]">10–20 din</span></div>
                      <div className="flex justify-between"><span className="text-[#5f6368]">Maintenance</span><span className="font-bold text-yellow-600">Monthly updates</span></div>
                      <div className="flex justify-between"><span className="text-[#5f6368]">Page Speed</span><span className="font-bold text-[#202124]">Fast (SSR)</span></div>
                      <div className="flex justify-between"><span className="text-[#5f6368]">SEO Score</span><span className="font-bold text-[#202124]">80–95</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ecommerce */}
              <div className="bg-white rounded-[24px] p-6 md:p-8 border border-[#e0e0e0] shadow-sm">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
                    <ShoppingCart size={24} className="text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold text-[#202124]">E-commerce Website</h3>
                    <p className="text-[14px] text-[#5f6368]">Online selling, payment gateway, product catalog</p>
                  </div>
                </div>
                <p className="text-[16px] text-[#3c4043] leading-relaxed mb-5">
                  E-commerce matlab — <strong>aapka poora store online aa jaata hai.</strong> Customer browse karo, cart mein daalo, payment karo — sab website pe. Sabse complex, sabse mehenga, lekin agar aap actually online sell karna chahte ho toh yahi chahiye.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-[12px] font-bold text-emerald-600 uppercase tracking-wide mb-3">Isme Milta Hai</div>
                    {["Product catalog (photos, price, stock)", "Shopping cart + checkout", "Payment gateway (UPI, card, COD)", "Order management system", "Customer accounts", "Delivery tracking integration"].map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-[14px] text-[#3c4043]">
                        <CheckCircle size={14} className="text-green-500 shrink-0" /> {f}
                      </div>
                    ))}
                  </div>
                  <div className="bg-emerald-50 rounded-2xl p-4">
                    <div className="text-[12px] font-bold text-emerald-600 uppercase tracking-wide mb-3">Quick Stats</div>
                    <div className="space-y-2 text-[14px]">
                      <div className="flex justify-between"><span className="text-[#5f6368]">Price</span><span className="font-bold text-[#202124]">₹51,999</span></div>
                      <div className="flex justify-between"><span className="text-[#5f6368]">Delivery</span><span className="font-bold text-[#202124]">15–20 din</span></div>
                      <div className="flex justify-between"><span className="text-[#5f6368]">Maintenance</span><span className="font-bold text-red-500">High — ongoing</span></div>
                      <div className="flex justify-between"><span className="text-[#5f6368]">Page Speed</span><span className="font-bold text-[#202124]">90+ (Next.js)</span></div>
                      <div className="flex justify-between"><span className="text-[#5f6368]">SEO Score</span><span className="font-bold text-[#202124]">85–95</span></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Quick Decision Table */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 border-2 border-violet-200 shadow-xl" id="quick-decision">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center">
                <Star size={20} className="text-violet-600" />
              </div>
              <h2 className="text-[26px] md:text-[32px] font-bold text-[#202124]">
                ⚡ Quick Decision Table
              </h2>
            </div>
            <p className="text-[16px] text-[#5f6368] mb-8 leading-relaxed">
              Apna business type dhundo — aur seedha pata karo kya chahiye:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-[#e0e0e0]">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="bg-[#f8f9fa]">
                    <th className="text-left p-4 font-bold text-[#202124] border-b border-[#e0e0e0]">Business Type</th>
                    <th className="text-center p-4 font-bold text-blue-600 border-b border-[#e0e0e0]">Static</th>
                    <th className="text-center p-4 font-bold text-violet-600 border-b border-[#e0e0e0]">Dynamic</th>
                    <th className="text-center p-4 font-bold text-emerald-600 border-b border-[#e0e0e0]">E-comm</th>
                    <th className="text-left p-4 font-bold text-[#202124] border-b border-[#e0e0e0]">Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { biz: "Restaurant / Dhaba", s: "✅", d: "⚠️", e: "❌", rec: "Static — menu + location + WhatsApp button kaafi hai", recColor: "text-blue-600" },
                    { biz: "Boutique / Kapde ki dukaan", s: "✅", d: "⚠️", e: "⚠️", rec: "Static ya basic Dynamic — photos + enquiry form best", recColor: "text-blue-600" },
                    { biz: "Coaching Institute", s: "✅", d: "✅", e: "❌", rec: "Dynamic — admissions, courses, results update hote rahein", recColor: "text-violet-600" },
                    { biz: "Doctor / Clinic", s: "✅", d: "✅", e: "❌", rec: "Static mostly — appointment form ke saath", recColor: "text-blue-600" },
                    { biz: "CA / Advocate / Consultant", s: "✅", d: "⚠️", e: "❌", rec: "Static — professional credibility + contact", recColor: "text-blue-600" },
                    { biz: "Real Estate / Property", s: "❌", d: "✅", e: "❌", rec: "Dynamic — listings update karte rehna padta hai", recColor: "text-violet-600" },
                    { biz: "Pharmacy / Medical Store", s: "✅", d: "⚠️", e: "❌", rec: "Static — online order mat banana abhi, WhatsApp se manage karo", recColor: "text-blue-600" },
                    { biz: "Handicraft / Chhattisgarhi Products", s: "⚠️", d: "⚠️", e: "✅", rec: "E-commerce — agar genuinely ship karna hai nationally", recColor: "text-emerald-600" },
                    { biz: "Kirana / Grocery", s: "✅", d: "❌", e: "❌", rec: "Static — digital visiting card, local SEO ke liye kaafi", recColor: "text-blue-600" },
                    { biz: "Event / Wedding Planner", s: "✅", d: "✅", e: "❌", rec: "Dynamic — portfolio + inquiry form + blog best hai", recColor: "text-violet-600" },
                    { biz: "Gym / Fitness Studio", s: "✅", d: "⚠️", e: "❌", rec: "Static — timings, plans, location + WhatsApp", recColor: "text-blue-600" },
                    { biz: "Online-Only Shop (D2C)", s: "❌", d: "❌", e: "✅", rec: "E-commerce — yahan e-comm sach mein zaroor hai", recColor: "text-emerald-600" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}>
                      <td className="p-4 font-semibold text-[#202124] border-b border-[#f0f0f0]">{row.biz}</td>
                      <td className="p-4 text-center border-b border-[#f0f0f0] text-lg">{row.s}</td>
                      <td className="p-4 text-center border-b border-[#f0f0f0] text-lg">{row.d}</td>
                      <td className="p-4 text-center border-b border-[#f0f0f0] text-lg">{row.e}</td>
                      <td className={`p-4 text-[13px] font-medium border-b border-[#f0f0f0] ${row.recColor}`}>{row.rec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex flex-wrap gap-4 text-[13px] text-[#5f6368]">
              <span>✅ = Best choice</span>
              <span>⚠️ = Depends on situation</span>
              <span>❌ = Avoid / overkill</span>
            </div>
          </div>

          {/* Section 3: Common Mistakes */}
          <div>
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#202124] mb-8 leading-tight">
              ⚠️ 5 Galtiyan Jo Chhattisgarh Ke Businesses Karte Hain
            </h2>
            <div className="space-y-4">
              {[
                {
                  mistake: "E-commerce banwaya jab sirf local delivery thi",
                  detail: "Ek Korba ki mithai shop ne ₹60,000 ka e-commerce site banwaya. Problem: unka order sirf Korba city mein tha, WhatsApp pe aata tha — website par ek bhi nahi aaya. Simple static site + WhatsApp link se kaam hota.",
                  icon: "🛒",
                  color: "red",
                },
                {
                  mistake: "Dynamic site banayi jab static kaafi thi",
                  detail: "Ek Raipur doctor ne ₹35,000 mein WordPress site banayi, admin panel seekhne mein 2 mahine nikle. Aaj bhi sirf appointment form use hoti hai — jo ek static site mein ₹5,000 mein hoti.",
                  icon: "⚙️",
                  color: "orange",
                },
                {
                  mistake: "Mobile-first design ignore kiya",
                  detail: "Chhattisgarh mein 85%+ internet users mobile se browse karte hain. Agar aapki site mobile par sahi nahi dikhti — aapne 85% customers already lose kar diye.",
                  icon: "📱",
                  color: "blue",
                },
                {
                  mistake: "Local SEO without plan ke banwayi site",
                  detail: '"Website hai" kaafi nahi. Site Google par search mein aana chahiye — "restaurant near me Bilaspur", "boutique Vyapar Vihar" — yeh searches target kiye bina site ka koi fayda nahi.',
                  icon: "🔍",
                  color: "violet",
                },
                {
                  mistake: "Sabse sasta developer dhundha, quality se compromise kiya",
                  detail: "₹2,000 mein website banayi, 6 mahine baad band ho gayi ya slow thi. Reputation cost + double paisa dena pada rebanwane ke liye. Sahi investment ek baar karo.",
                  icon: "💸",
                  color: "red",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-[20px] p-6 border border-[#e0e0e0] shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl shrink-0">{item.icon}</div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle size={16} className="text-red-500 shrink-0" />
                        <h3 className="font-bold text-[#202124] text-[17px]">Galti #{i + 1}: {item.mistake}</h3>
                      </div>
                      <p className="text-[15px] text-[#5f6368] leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Budget Reality Check */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 border border-[#e0e0e0] shadow-sm">
            <h2 className="text-[26px] md:text-[32px] font-bold text-[#202124] mb-4 leading-tight">
              💰 WebDevelopmentAI Ke Real Prices
            </h2>
            <p className="text-[17px] text-[#5f6368] mb-2 leading-relaxed">
              Yeh sirf estimate nahi hain — yeh hamari website ke actual prices hain jo aap <a href="/" className="text-[#1a73e8] font-semibold underline">webdevelopmentai.in</a> par dekh sakte ho:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {[
                {
                  type: "Starter",
                  badge: "Most Popular",
                  items: [
                    { name: "Digital Visiting Card (Landing Page)", price: "₹9,999", orig: "₹14,999", delivery: "13–21 din", off: "33%" },
                    { name: "Basic Static Site (6 Pages)", price: "₹22,999", orig: "₹31,999", delivery: "13–21 din", off: "28%" },
                    { name: "Service Landing Page", price: "₹21,999", orig: "₹36,999", delivery: "4–6 din", off: "40%" },
                  ],
                  for: "Clinic, kirana, petrol pump, beauty parlour, gym",
                  color: "blue",
                },
                {
                  type: "Growth",
                  badge: "Best ROI",
                  items: [
                    { name: "Standard Business (11 Pages)", price: "₹27,999", orig: "₹36,999", delivery: "10–27 din", off: "25%" },
                    { name: "Dynamic Website + Admin Panel", price: "₹42,999", orig: "₹89,999", delivery: "15–20 din", off: "52%" },
                  ],
                  for: "Coaching, real estate, restaurant chain, events",
                  color: "violet",
                },
                {
                  type: "Scale",
                  badge: "Full Online Store",
                  items: [
                    { name: "Ecommerce Website (Full Store)", price: "₹51,999", orig: "₹69,999", delivery: "15–20 din", off: "26%" },
                    { name: "Sales Landing Page (Ads)", price: "₹19,999", orig: "₹24,999", delivery: "5–7 din", off: "20%" },
                  ],
                  for: "Online sellers, D2C brands, ad campaigns",
                  color: "emerald",
                },
              ].map((tier, i) => {
                const colors: Record<string, { bg: string; text: string; badge: string; pill: string }> = {
                  blue: { bg: "bg-blue-50", text: "text-blue-700", badge: "bg-blue-100 text-blue-800", pill: "bg-blue-600 text-white" },
                  violet: { bg: "bg-violet-50", text: "text-violet-700", badge: "bg-violet-100 text-violet-800", pill: "bg-violet-600 text-white" },
                  emerald: { bg: "bg-emerald-50", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-800", pill: "bg-emerald-600 text-white" },
                };
                const c2 = colors[tier.color];
                return (
                  <div key={i} className={`rounded-[24px] p-5 ${c2.bg} flex flex-col gap-4`}>
                    <div className="flex items-center justify-between">
                      <div className={`text-[11px] font-black tracking-widest uppercase px-3 py-1 rounded-full ${c2.badge}`}>{tier.badge}</div>
                      <div className={`text-[11px] font-bold px-2 py-1 rounded-full ${c2.pill}`}>{tier.type}</div>
                    </div>
                    <div className="space-y-3">
                      {tier.items.map((item, j) => (
                        <div key={j} className="bg-white rounded-xl p-3 border border-white/80">
                          <div className={`text-[13px] font-semibold ${c2.text} mb-1 leading-snug`}>{item.name}</div>
                          <div className="flex items-baseline gap-2 flex-wrap">
                            <span className="text-[18px] font-extrabold text-[#202124]">{item.price}</span>
                            <span className="text-[12px] text-[#9aa0a6] line-through">{item.orig}</span>
                            <span className="text-[11px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full">{item.off} OFF</span>
                          </div>
                          <div className="text-[11px] text-[#5f6368] mt-1">⏱ Delivery: {item.delivery}</div>
                        </div>
                      ))}
                    </div>
                    <div className="text-[13px] font-medium text-[#5f6368]">👉 Best for: <span className={`font-semibold ${c2.text}`}>{tier.for}</span></div>
                  </div>
                );
              })}
            </div>

            {/* Why Us — Differentiation Block */}
            <div className="bg-linear-to-br from-[#f8f9fa] to-white rounded-[24px] p-6 border border-[#e0e0e0]">
              <div className="text-[14px] font-bold text-[#202124] mb-4 uppercase tracking-wide">🏆 Hamse Kyon Karwao? — 6 Solid Reasons</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { icon: "⚡", point: "13–21 Din Delivery", detail: "AI-powered workflow se — baaki agencies ko 30+ din lagte hain" },
                  { icon: "🔍", point: "SEO-First Build", detail: "Har page 90+ Google score ke saath deliver hoti hai — rank guaranteed hoga" },
                  { icon: "📍", point: "Bilaspur Local Expert", detail: "Chhattisgarh ke local keywords, mohalle ke names, local trust — woh jaante hain hum" },
                  { icon: "💬", point: "WhatsApp Support", detail: "Sirf email nahi — direct WhatsApp par baat karo delivery tak" },
                  { icon: "💰", point: "One-Time Payment", detail: "Koi hidden monthly fees nahi — ek baar pay karo, website lifetime tumhari" },
                  { icon: "🛡️", point: "Free Support After Launch", detail: "1–6 months free support milta hai pakage ke hisaab se — koi extra charge nahi" },
                ].map((r, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-2xl shrink-0">{r.icon}</span>
                    <div>
                      <div className="font-bold text-[#202124] text-[14px]">{r.point}</div>
                      <div className="text-[12px] text-[#5f6368] leading-relaxed">{r.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="/" className="flex-1 bg-[#1a73e8] text-white text-center px-6 py-3 rounded-xl font-bold text-[14px] hover:scale-105 transition-all">Sare Packages Dekho →</a>
                <a href="https://wa.me/916264906078?text=Website%20ke%20bare%20mein%20baat%20karni%20hai" className="flex-1 bg-[#25D366] text-white text-center px-6 py-3 rounded-xl font-bold text-[14px] hover:scale-105 transition-all">WhatsApp Par Poochho</a>
              </div>
            </div>
          </div>

          {/* Section 5: Local Context */}
          <div>
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#202124] mb-8 leading-tight">
              🏙️ Chhattisgarh Ke Businesses Ke Liye Special Considerations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  icon: "📶",
                  title: "Internet Speed Reality",
                  desc: "Bilaspur, Korba, Raigarh ke kaafi areas mein 4G speed average hai. Heavy e-commerce sites load nahi hoti. Static sites har jagah blazing fast kaam karti hain.",
                },
                {
                  icon: "📱",
                  title: "UPI First Market",
                  desc: "Chhattisgarh mein PhonePe/GPay se payment common hai. E-commerce site banao toh UPI integration must hai — credit card secondary hai.",
                },
                {
                  icon: "🗣️",
                  title: "Language & Trust",
                  desc: "Local audience Hindi mein zyada comfortable hai. Roman Hindi ya devnagari content Google par better rank karta hai for local searches.",
                },
                {
                  icon: "📍",
                  title: "Google My Business First",
                  desc: '"Restaurant near me Bilaspur" search karo — Google Maps results pehle aate hain. Website se pehle Google My Business setup karo — free hai aur instant result deta hai.',
                },
                {
                  icon: "🎉",
                  title: "Festival-Driven Business",
                  desc: "Navratri, Diwali, Teej — Chhattisgarh mein seasonal spikes aate hain. Dynamic/Static site par offers quickly update karne ki capability must hai.",
                },
                {
                  icon: "🤝",
                  title: "Word-of-Mouth Still King",
                  desc: "Bilaspur/Korba mein referral se business aata hai. Website ka kaam hai — jab koi naam Google kare toh professional impression milein. Credibility tool hai yeh.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-[20px] p-5 border border-[#e0e0e0] shadow-sm flex items-start gap-4">
                  <div className="text-3xl shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-[#202124] mb-1">{item.title}</h3>
                    <p className="text-[14px] text-[#5f6368] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final Recommendation */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 border-2 border-[#1a73e8]/20 shadow-sm">
            <h2 className="text-[26px] md:text-[32px] font-bold text-[#202124] mb-6 leading-tight">
              🎯 Hamari Final Recommendation
            </h2>
            <div className="space-y-4">
              {[
                { condition: "Agar aap Chhattisgarh mein ek local business ho — restaurant, boutique, clinic, gym, salon", answer: "Static website se shuru karo. ₹5,000–₹10,000 mein done. 90%+ SEO score. Mobile-ready. Isse better ROI nahi milega.", color: "blue" },
                { condition: "Agar aapke regular updates hain — course fees, class timings, new listings, blog content", answer: "Dynamic website lo. Admin panel se khud update karo. ₹15,000–₹25,000 ki range sahi hai.", color: "violet" },
                { condition: "Agar aap genuinely nationwide ya online products sell karna chahte ho", answer: "Tabhi e-commerce mein invest karo. Lekin pehle Instagram/WhatsApp pe 50+ orders ka proof chahiye ki demand hai.", color: "emerald" },
              ].map((rec, i) => {
                const colorMap: Record<string, string> = {
                  blue: "bg-blue-50 border-blue-200",
                  violet: "bg-violet-50 border-violet-200",
                  emerald: "bg-emerald-50 border-emerald-200",
                };
                const textMap: Record<string, string> = {
                  blue: "text-blue-700",
                  violet: "text-violet-700",
                  emerald: "text-emerald-700",
                };
                return (
                  <div key={i} className={`rounded-2xl p-5 border ${colorMap[rec.color]}`}>
                    <p className="text-[14px] text-[#5f6368] mb-2 font-medium">Agar: {rec.condition}</p>
                    <p className={`text-[15px] font-semibold ${textMap[rec.color]}`}>✅ {rec.answer}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <section className="bg-gradient-to-br from-[#0a0a1a] to-[#1a0a3a] rounded-[32px] p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-4 left-4 w-40 h-40 border border-violet-400 rounded-full" />
              <div className="absolute bottom-4 right-4 w-64 h-64 border border-violet-400 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-violet-400 rounded-full" />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-violet-500/20 text-violet-400 px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-wide uppercase">
                <MapPin size={12} /> Bilaspur, Chhattisgarh
              </div>
              <h2 className="text-[28px] md:text-[40px] font-extrabold text-white mb-6 leading-tight">
                Abhi Decide Karo — <br />
                <span className="text-violet-400">Free Mein Sahi Choice Jaano</span>
              </h2>
              <p className="text-white/70 text-[18px] mb-4 max-w-lg mx-auto leading-relaxed">
                Hum aapke business ko 5 minute mein samajhenge aur batayenge — static, dynamic ya ecommerce mein se exactly kya chahiye. <strong className="text-white">Koi charge nahi.</strong>
              </p>
              <p className="text-white/50 text-[15px] mb-10">
                Yeh call genuinely free hai — hum sales pitch nahi dete jab tak aap nahi poochte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/book-appointment" className="bg-violet-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all hover:bg-violet-400">
                  Free Consultation Book Karo
                </a>
                <a href="https://wa.me/916264906078?text=Mujhe%20website%20type%20guide%20chahiye%20mere%20business%20ke%20liye" className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all">
                  WhatsApp Pe Seedha Poochho
                </a>
              </div>
            </div>
          </section>

          <div className="mt-32 pt-20 border-t border-[#dadce0]">
            <div className="text-[13px] font-bold text-[#1a73e8] tracking-[0.3em] uppercase mb-12 text-center">
              Series Mein Aur Padho
            </div>

            <div className="relative max-w-2xl mx-auto pb-10">
              {/* Left Arrow — Part 4 */}
              <Link
                href="/blog/ai-se-website-banana-bilaspur"
                className="absolute top-1/2 -left-10 md:-left-12 -translate-y-1/2 z-10 hidden md:block"
              >
                <div className="w-20 h-20 bg-white border border-[#dadce0] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all cursor-pointer">
                  <ArrowLeft className="text-[#202124]" size={32} />
                </div>
              </Link>

              {/* Right Arrow — Part 6 */}
              <Link
                href="/blog/chhattisgarh-local-business-website-guide"
                className="absolute top-1/2 -right-10 md:-right-12 -translate-y-1/2 z-10 hidden md:block"
              >
                <div className="w-20 h-20 bg-white border border-[#dadce0] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all cursor-pointer">
                  <ArrowRight className="text-[#202124]" size={32} />
                </div>
              </Link>

              {/* Carousel Window — Part 6 Preview */}
              <div className="overflow-hidden rounded-[32px] bg-white border border-[#dadce0] shadow-2xl">
                <div className="p-8 md:p-12">
                  <div className="flex flex-col items-center text-center">
                    <div className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-[11px] font-bold tracking-widest uppercase mb-6">
                      Part 6: Niche Deep-Dive
                    </div>
                    <h3 className="text-[26px] md:text-[32px] font-bold text-[#202124] mb-4 leading-tight">
                      Petrol Pump, Kirana, Clinic — <br /> Chhattisgarh Ki Perfect Website
                    </h3>
                    <p className="text-[#5f6368] text-lg mb-10 max-w-md mx-auto">
                      Competitor research ke saath — kya hai, kya nahi hai Chhattisgarh mein. Zero competition niches.
                    </p>
                    <Link
                      href="/blog/chhattisgarh-local-business-website-guide"
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
                  href="/blog/ai-se-website-banana-bilaspur"
                  className="w-16 h-16 bg-white border border-[#dadce0] rounded-full flex items-center justify-center shadow-xl active:scale-90 transition-all"
                >
                  <ArrowLeft className="text-[#202124]" size={28} />
                </Link>
                <Link
                  href="/blog/chhattisgarh-local-business-website-guide"
                  className="w-16 h-16 bg-white border border-[#dadce0] rounded-full flex items-center justify-center shadow-xl active:scale-90 transition-all"
                >
                  <ArrowRight className="text-[#202124]" size={28} />
                </Link>
              </div>

              {/* Pagination Dots — position 5 of 6 */}
              <div className="flex justify-center gap-3 mt-12 mb-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-3 h-3 rounded-full bg-[#dadce0]" />
                ))}
                <div className="w-8 h-3 rounded-full bg-violet-500" />
                <div className="w-3 h-3 rounded-full bg-[#dadce0]" />
              </div>
            </div>
          </div>

        </div>
      </article>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-[#e0e0e0]">
        <div className="max-w-4xl mx-auto px-6 text-center text-[#5f6368] text-sm">
          © 2026 WebDevelopmentAI • Web Development Experts for Bilaspur & Chhattisgarh
        </div>
      </footer>

    </div>
  );
}
