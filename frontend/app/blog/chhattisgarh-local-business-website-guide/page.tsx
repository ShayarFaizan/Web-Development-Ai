"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft, CheckCircle, MapPin, AlertTriangle, XCircle,
  TrendingUp, Search, Smartphone, Star, Zap, Globe
} from "lucide-react";

const NICHES = [
  {
    id: "petrol-pump",
    emoji: "⛽",
    title: "Petrol Pump",
    color: "amber",
    colorClass: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", badge: "bg-amber-100 text-amber-700", dot: "bg-amber-500" },
    competitorStatus: "ZERO — koi individual petrol pump website Chhattisgarh mein nahi",
    competitorDetail: "Hamare research mein HPCL, IOCL aur Jio-BP ki directories mein sirf naam/address listed hai. Gumber Petroleum Vyapar Vihar, Amrit Fuels Ring Road — inme se kisi ka bhi apna website nahi. Yeh aapka mauka hai.",
    searchKeywords: ["petrol pump near me Bilaspur", "24 hour petrol pump Korba", "diesel pump Raipur road Bilaspur", "petrol pump services Chhattisgarh"],
    mustHave: [
      { feature: "Live Fuel Price Display", why: "Log Google par pehle price check karte hain phir pump dhundh te hain. Agar aapki site par latest price dikh raha hai — aap already aage ho." },
      { feature: "Services Listed Clearly", why: "Tyre inflation, air check, engine oil top-up, car wash — yeh sab clearly list karo. 80% customers sirf petrol nahi, extra services bhi chahte hain." },
      { feature: "Timing + 24-Hour Badge", why: "\"24 ghante khula hai\" ya \"Subah 6 baje se\" — yeh directly Google search mein dikha jaa sakta hai schema markup se." },
      { feature: "Google Maps Embedded", why: "\"Raipur Road se 2km\" — yeh koi nahi samjhega. Map directly site par dikhna chahiye, click karte hi navigation shuru ho." },
      { feature: "WhatsApp Bulk Order Link", why: "Fleet owners, transport companies — yeh WhatsApp par seedha bulk diesel order karte hain. Ek button se unhe target karo." },
      { feature: "Emergency Contact Prominent", why: "Raat ko fuel khatam ho gaya — us waqt koi bhi website tab nahi scrollega. Emergency number bold aur visible hona chahiye." },
    ],
    skipThis: ["E-commerce (online payment for fuel — legal issue in India)", "Blog/News section (unnecessary)", "Multiple pages"],
    seoGoldMine: "Bilaspur mein 'petrol pump near me' search hoti hai thousands of times monthly — ZERO local websites compete for this keyword. First mover advantage.",
    blueprint: "1 page, mobile-first. Price table at top. Services with icons. Map embed. 2 CTAs — Call Now + WhatsApp.",
    budget: "₹9,999",
    deliveryDays: "13–21 din",
  },
  {
    id: "kirana-store",
    emoji: "🛒",
    title: "Kirana Store",
    color: "green",
    colorClass: { bg: "bg-green-50", border: "border-green-200", text: "text-green-700", badge: "bg-green-100 text-green-700", dot: "bg-green-500" },
    competitorStatus: "NEAR ZERO — sirf Justdial listings hain, koi proper website nahi",
    competitorDetail: "Chhattisgarh ke kirana stores ka Justdial par naam hai — lekin address, stock, delivery aur WhatsApp ka koi integration nahi. Ek bhi kirana store website Google search mein kisi area-specific keyword par rank nahi karti. Yeh ek completely open market hai.",
    searchKeywords: ["kirana store home delivery Bilaspur", "grocery near me Telipara", "fair price shop Vyapar Vihar", "ration shop Bilaspur"],
    mustHave: [
      { feature: "WhatsApp Order Button — #1 Priority", why: "Kirana mein online payment se zyada WhatsApp order common hai. 'Message karke order do, 1 ghante mein delivery' — yeh concept already chalta hai, website se professionalize karo." },
      { feature: "Daily/Weekly Offers Section", why: "Dahi, tel, aata — in par daily rates change hote hain. Ek simple update section se customers baar baar site par aayenge." },
      { feature: "Home Delivery Area Map", why: "'Hum Vyapar Vihar se 3km tak deliver karte hain' — yeh clearly batao. Map se customer khud dekh sakta hai." },
      { feature: "Category List — Not Full Catalog", why: "Full online store mat banao. Sirf categories: Grocery, Dairy, Staples, Personal Care. Order WhatsApp se. Isse manage karna aasaan hai." },
      { feature: "Testimonials from Mohalle Wale", why: "5 neighbors ki photos aur reviews — yeh conversion rate 3x increase karta hai local markets mein." },
      { feature: "Festival Special Section", why: "Navratri mein farali items, Diwali mein dry fruits — seasonal banners se footfall aur orders badhte hain." },
    ],
    skipThis: ["Full e-commerce platform (manage karna mushkil aur unnecessary)", "Payment gateway (UPI directly via WhatsApp better hai)", "Blog section"],
    seoGoldMine: "\"Kirana home delivery [area name] Bilaspur\" — Google par koi nahi hai. First kirana store jo yahan rank karega, woh is area ka default choice banega.",
    blueprint: "1-2 page. WhatsApp order button at very top. Category grid. Delivery area. Weekly offers. Customer reviews.",
    budget: "₹9,999",
    deliveryDays: "13–21 din",
  },
  {
    id: "clinic",
    emoji: "🏥",
    title: "Clinic / Doctor",
    color: "blue",
    colorClass: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", badge: "bg-blue-100 text-blue-700", dot: "bg-blue-500" },
    competitorStatus: "LOW — Practo listings hain but individual clinic sites nahi",
    competitorDetail: "Research mein paya: Raipur ke kuch doctors par Practo profile hai, lekin Bilaspur, Korba, Jagdalpur ke clinics ka 90%+ koi proper website nahi. Jo hain woh 2015-era outdated HTML sites hain — mobile par toot jaati hain. Yeh ek massive gap hai.",
    searchKeywords: ["doctor near me Bilaspur", "general physician Vyapar Vihar", "skin clinic Raipur", "child specialist Korba", "clinic timing Bilaspur"],
    mustHave: [
      { feature: "Doctor Profile — Credentials Clearly Listed", why: "MBBS, MD, 15 years experience — yeh trust building ka fastest tarika hai. Photo bhi daalo — local market mein face recognition kaam karta hai." },
      { feature: "OPD Timing Table", why: "\"Online timing check kar ke aao\" — yeh patients khud karte hain. Timing clearly visible honi chahiye. Real-time 'Available/Busy today' optional bonus." },
      { feature: "Specializations Page", why: "'Diabetes specialist Bilaspur' — yeh search term sirf ek doctor ki website se rank ho sakta hai because competition zero hai." },
      { feature: "Appointment Booking — WhatsApp First", why: "Practo integrate karne ki zaroorat nahi. WhatsApp se appointment — 'Dr. X se kal 11 baje milna hai' — yeh already area mein chalta hai. Website se professionalize karo." },
      { feature: "Emergency Number — Above the Fold", why: "Medical emergency mein patient ya family ka pehla action — Google search, then call. Emergency number first screen par hona must hai." },
      { feature: "Location — Landmark Based", why: "'Vyapar Vihar ke peeche, Bank of India ke samne' — GPS address se easier. Map embed + landmark description dono." },
    ],
    skipThis: ["Online prescription system (legal complexity)", "Lab report portal (too complex to start with)", "Multiple doctor profiles (ek clinic, ek page)"],
    seoGoldMine: "\"[Specialization] doctor Bilaspur\" — practically zero competition. One optimized page = #1 rank within 30–60 days in most cases.",
    blueprint: "2–3 pages. Home with timing + emergency. Doctor profile page. Specializations. WhatsApp appointment CTA everywhere.",
    budget: "₹21,999",
    deliveryDays: "4–6 din",
  },
  {
    id: "pharmacy",
    emoji: "💊",
    title: "Medical Store / Pharmacy",
    color: "red",
    colorClass: { bg: "bg-red-50", border: "border-red-200", text: "text-red-700", badge: "bg-red-100 text-red-700", dot: "bg-red-500" },
    competitorStatus: "ZERO dedicated websites — sirf Justdial mein naam",
    competitorDetail: "Chhattisgarh mein koi bhi local medical store ka apna website nahi. PharmEasy/1mg jaisi national apps hain, lekin local pharmacy ki koi presence nahi. Ek bhi 'medical store Bilaspur' search result mein individual pharmacy website nahi aati.",
    searchKeywords: ["medical store near me Bilaspur", "24 hour pharmacy Korba", "medicine home delivery Raipur", "generic medicine shop Chhattisgarh"],
    mustHave: [
      { feature: "24/7 Status Badge", why: "Raat ko medicine ki zaroorat padti hai — '24 ghante khula' badge Google listing mein dikhta hai aur direct trust signal hai." },
      { feature: "Home Delivery via WhatsApp", why: "Prescription photo WhatsApp par bhejo, medicine ghar aa jaye — yeh model Chhattisgarh mein work karta hai. Website se formalize karo." },
      { feature: "Generic Medicine Availability", why: "Jan Aushadhi, generic brands — yeh mention karo. 60% patients yehi dhundh te hain, inse unhe bata do ki aapke paas milti hai." },
      { feature: "Prescription Upload Section", why: "Simple WhatsApp number hi kaafi hai prescription send karne ke liye — but website par yeh clearly explain karo process." },
      { feature: "Nearby Clinic Tie-up Mention", why: "'Dr. X ke patients ko priority delivery' — yeh referral trust signal hai jo physical aur digital dono mein kaam karta hai." },
    ],
    skipThis: ["Online medicine catalog with pricing (regulatory issues)", "Full payment gateway for medicines", "Subscription pharmacy model (too complex)"],
    seoGoldMine: "\"24 hour medical store Bilaspur\" — literally koi nahi hai Google par. Ek optimized site = instant top rank.",
    blueprint: "1 page. 24hr status top. WhatsApp delivery CTA. Generic medicine highlight. Timing. Location.",
    budget: "₹9,999",
    deliveryDays: "13–21 din",
  },
  {
    id: "auto-repair",
    emoji: "🔧",
    title: "Auto Repair / Garage",
    color: "slate",
    colorClass: { bg: "bg-slate-50", border: "border-slate-200", text: "text-slate-700", badge: "bg-slate-100 text-slate-700", dot: "bg-slate-500" },
    competitorStatus: "ZERO — completely blank market in Chhattisgarh",
    competitorDetail: "Auto repair shops, car service centers, two-wheeler workshops — Chhattisgarh mein kisi ka bhi dedicated website nahi. Google par 'car repair Bilaspur' search karo — sirf JustDial results aate hain. Yeh ek 100% open niche hai.",
    searchKeywords: ["car repair near me Bilaspur", "bike service Korba", "AC repair car Raipur", "puncture repair 24 hour Bilaspur"],
    mustHave: [
      { feature: "Services with Estimated Prices", why: "Oil change ₹300, tyre puncture ₹50 — yeh transparency trust build karta hai. Chhattisgarh mein garage rates unclear hone se customer jaata nahi." },
      { feature: "Before/After Work Photos", why: "3-4 real photos: rusted car restored, engine fixed — yeh skill proof hai. Video bhi rakh sakte ho WhatsApp se liya hua." },
      { feature: "Emergency Breakdown WhatsApp", why: "Car band ho gayi highway par — woh Google karenge 'garage near me'. Emergency WhatsApp link se instant business milega." },
      { feature: "Timing + Holiday Info", why: "Sunday/holiday timing clearly batao. Customers frustrated hote hain jab phone nahi uthata — pehle se website par batao." },
      { feature: "Brands Serviced", why: "Maruti, Hyundai, Hero Honda — list banao. 'Tata ka service nahi karte' — yeh bhi clear likho. Saves time for both." },
    ],
    skipThis: ["Online booking system (prefer phone/walk-in)", "Parts catalog with prices (changes too often)", "Complex multi-page site"],
    seoGoldMine: "\"car repair Bilaspur\" = ZERO competition. Even a basic optimized page will rank #1 within weeks.",
    blueprint: "1 page. Services + prices. Photos. Emergency WhatsApp button. Timing. Brands serviced.",
    budget: "₹9,999",
    deliveryDays: "13–21 din",
  },
  {
    id: "beauty-parlour",
    emoji: "💇",
    title: "Beauty Parlour / Salon",
    color: "pink",
    colorClass: { bg: "bg-pink-50", border: "border-pink-200", text: "text-pink-700", badge: "bg-pink-100 text-pink-700", dot: "bg-pink-500" },
    competitorStatus: "LOW — Vagaro/UrbanClap listings only, no local sites",
    competitorDetail: "UrbanClap (Urban Company) Raipur mein hai lekin Bilaspur mein bahut limited. Bilaspur, Korba, Jagdalpur ke local salons ka koi website nahi. Wedding season, Teej, Navratri mein bookings phone se hoti hain — which means bottleneck. Website se automation possible.",
    searchKeywords: ["beauty parlour near me Bilaspur", "bridal makeup Chhattisgarh", "salon timing Korba", "hair spa Vyapar Vihar Bilaspur"],
    mustHave: [
      { feature: "Service Menu with Prices", why: "Facial ₹400, threading ₹30, bridal package ₹5,000 — yeh clearly list karo. Price transparency = direct bookings." },
      { feature: "Festival/Wedding Booking Section", why: "Navratri, Teej, wedding season mein 2 mahine pehle bookings aati hain. Website par 'Book for [Festival]' special section." },
      { feature: "Portfolio Gallery", why: "Bridal makeup, mehendi work ke real photos — yeh conversion ka #1 tool hai beauty industry mein." },
      { feature: "Artist Profiles", why: "'Maya madam — 8 saal ka experience, bridal specialist' — local mein naam aur face recognition se bookings badhti hain." },
      { feature: "WhatsApp Booking with Date Picker", why: "'Kal 3 baje ki booking chahiye' — WhatsApp message pre-fill karo with date. Zyada friction nahi, zyada bookings." },
    ],
    skipThis: ["Online payment for booking (friction creates dropoff)", "Full e-commerce for products (handled physically)", "Complex CRM integration"],
    seoGoldMine: "\"bridal makeup Bilaspur\" — near zero competition. A good portfolio site + proper SEO = instant #1.",
    blueprint: "2 pages. Home with pricing. Gallery page. WhatsApp booking. Festival booking section.",
    budget: "₹9,999–₹22,999",
    deliveryDays: "13–21 din",
  },
];

const colorMap: Record<string, Record<string, string>> = {
  amber: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", badge: "bg-amber-100 text-amber-700", dot: "bg-amber-500", tabActive: "bg-amber-500 text-white", tabInactive: "text-amber-700 hover:bg-amber-50" },
  green: { bg: "bg-green-50", border: "border-green-200", text: "text-green-700", badge: "bg-green-100 text-green-700", dot: "bg-green-500", tabActive: "bg-green-500 text-white", tabInactive: "text-green-700 hover:bg-green-50" },
  blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", badge: "bg-blue-100 text-blue-700", dot: "bg-blue-500", tabActive: "bg-blue-500 text-white", tabInactive: "text-blue-700 hover:bg-blue-50" },
  red: { bg: "bg-red-50", border: "border-red-200", text: "text-red-700", badge: "bg-red-100 text-red-700", dot: "bg-red-500", tabActive: "bg-red-500 text-white", tabInactive: "text-red-700 hover:bg-red-50" },
  slate: { bg: "bg-slate-50", border: "border-slate-200", text: "text-slate-700", badge: "bg-slate-100 text-slate-700", dot: "bg-slate-500", tabActive: "bg-slate-600 text-white", tabInactive: "text-slate-700 hover:bg-slate-50" },
  pink: { bg: "bg-pink-50", border: "border-pink-200", text: "text-pink-700", badge: "bg-pink-100 text-pink-700", dot: "bg-pink-500", tabActive: "bg-pink-500 text-white", tabInactive: "text-pink-700 hover:bg-pink-50" },
};

export default function LocalBusinessWebsiteGuidePage() {
  const [activeNiche, setActiveNiche] = useState(0);
  const niche = NICHES[activeNiche];
  const c = colorMap[niche.color];

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans">

      {/* Top Nav */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e0e0e0]">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/blog/chhattisgarh-ke-liye-best-website-type"
            className="flex items-center gap-2 text-[#1a73e8] text-sm font-semibold hover:bg-blue-50 px-3 py-2 rounded-full transition-all"
          >
            <ArrowLeft size={18} /> Pichla Part
          </Link>
          <div className="text-[12px] font-bold text-[#5f6368] tracking-widest uppercase bg-[#f1f3f4] px-3 py-1 rounded-full">
            Part 6: Niche Deep-Dive
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-white border-b border-[#e0e0e0]">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-wide uppercase">
            <Search size={14} /> Competitor Research + Niche Guide
          </div>
          <h1 className="text-[34px] md:text-[50px] font-extrabold text-[#202124] leading-[1.1] mb-8 tracking-tight">
            Petrol Pump, Kirana, Clinic —{" "}
            <br />
            <span className="text-orange-500">Chhattisgarh Ke Local Businesses Ki Perfect Website</span>
          </h1>
          <p className="text-[19px] text-[#5f6368] max-w-2xl mx-auto leading-relaxed">
            Humne research ki — kya hai, kya nahi hai. Result: Chhattisgarh mein in niches mein competition
            virtually <strong className="text-[#202124]">zero hai.</strong> Pehle aane wale ka Google par raaj hoga.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm text-[#5f6368]">
            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-orange-500" /> Bilaspur, Korba, Raipur — Chhattisgarh</span>
            <span className="w-1 h-1 rounded-full bg-[#dadce0]" />
            <span>April 2026</span>
            <span className="w-1 h-1 rounded-full bg-[#dadce0]" />
            <span>12 min read</span>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">

          {/* Competitor Research Finding */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 border-2 border-orange-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-[0.04] pointer-events-none">
              <Search size={200} className="text-orange-500" />
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-[11px] font-bold tracking-widest uppercase mb-6">
              🔬 Research Finding — April 2026
            </div>
            <h2 className="text-[24px] md:text-[30px] font-bold text-[#202124] mb-6 leading-tight">
              Humne Research Ki — Yeh Mila:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { query: "petrol pump website Bilaspur", result: "0 individual sites", note: "Sirf HPCL/IOCL directory", color: "red" },
                { query: "kirana delivery website Korba", result: "0 results", note: "Justdial listing only", color: "red" },
                { query: "clinic website Bilaspur", result: "2–3 outdated sites", note: "Mobile broken, 2015-era design", color: "orange" },
              ].map((item, i) => (
                <div key={i} className={`rounded-2xl p-4 border ${item.color === "red" ? "bg-red-50 border-red-100" : "bg-orange-50 border-orange-100"}`}>
                  <div className="text-[12px] font-mono text-[#5f6368] mb-2 truncate">"{item.query}"</div>
                  <div className={`text-[20px] font-extrabold mb-1 ${item.color === "red" ? "text-red-600" : "text-orange-600"}`}>{item.result}</div>
                  <div className="text-[13px] text-[#5f6368]">{item.note}</div>
                </div>
              ))}
            </div>
            <p className="text-[17px] text-[#3c4043] leading-relaxed">
              <strong className="text-[#202124]">Conclusion:</strong> Chhattisgarh ke in local niches mein Google par abhi bhi ek bhi proper, optimized website nahi hai. Jo pehla business yahan website banayega — woh automatically <strong>page #1 par aayega</strong> aur competitors se 12–18 mahine aage rahega.
            </p>
          </div>

          {/* Market Reality Section */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 border border-[#e0e0e0] shadow-sm">
            <h2 className="text-[24px] md:text-[30px] font-bold text-[#202124] mb-6">
              🏢 Chhattisgarh Market Reality — Log Kya De Rahe Hain?
            </h2>
            <p className="text-[17px] text-[#5f6368] mb-8 leading-relaxed">
              Humne Raipur aur Bilaspur ki top agencies ko dekha. Sach toh yeh hai ki Chhattisgarh mein <strong className="text-[#202124]">web development provide karne wale log bahut hain.</strong> Lekin ek problem hai:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50/50 rounded-[24px] p-6 border border-red-100">
                <div className="text-red-600 font-bold mb-3 flex items-center gap-2">
                  <XCircle size={18} /> Baaki Agencies Ka Tarika
                </div>
                <ul className="space-y-3 text-[14px] text-[#5f6368]">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span> 
                    Wahi purana template sabko dena (one-size-fits-all).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span> 
                    Local business ki niche problems (timing, fuel price, local SEO) ko ignore karna.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span> 
                    Delivery mein 15–30 din lagana kyunki AI workflow nahi hai.
                  </li>
                </ul>
              </div>
              <div className="bg-emerald-50/50 rounded-[24px] p-6 border border-emerald-100">
                <div className="text-emerald-700 font-bold mb-3 flex items-center gap-2">
                  <CheckCircle size={18} /> Hamara Tarika (WebDevelopmentAI)
                </div>
                <ul className="space-y-3 text-[14px] text-[#5f6368]">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span> 
                    <strong>Niche-Focused:</strong> Har business ke liye alag features ka blueprint.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span> 
                    <strong>AI-Powered Speed:</strong> Wahi quality 3 din mein, with deep competitor research.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span> 
                    <strong>SEO-First:</strong> Hum website nahi, Google Page #1 ka raasta banate hain.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Niche Selector Tabs */}
          <div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-[#202124] mb-6">
              🎯 Apna Business Type Chunno — Deep Dive Padho
            </h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {NICHES.map((n, i) => (
                <button
                  key={n.id}
                  onClick={() => setActiveNiche(i)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold text-[14px] transition-all border ${
                    activeNiche === i
                      ? `${colorMap[n.color].tabActive} border-transparent shadow-lg scale-105`
                      : `bg-white border-[#e0e0e0] text-[#5f6368] hover:border-[#bbb]`
                  }`}
                >
                  <span>{n.emoji}</span> {n.title}
                </button>
              ))}
            </div>

            {/* Active Niche Detail */}
            <div className={`bg-white rounded-[32px] border-2 ${c.border} shadow-xl overflow-hidden`}>

              {/* Header */}
              <div className={`${c.bg} px-8 py-8 border-b ${c.border}`}>
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{niche.emoji}</div>
                  <div className="flex-1">
                    <h3 className={`text-[28px] font-extrabold ${c.text} mb-2`}>{niche.title}</h3>
                    <div className="flex flex-wrap gap-3">
                      <span className={`text-[12px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${c.badge}`}>
                        Budget: {niche.budget}
                      </span>
                      <span className={`text-[12px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${c.badge}`}>
                        {niche.deliveryDays} mein ready
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-8">

                {/* Competitor Status */}
                <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
                  <div className="flex items-start gap-3">
                    <AlertTriangle size={18} className="text-red-500 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-[12px] font-bold text-red-600 uppercase tracking-wide mb-1">Competition Status</div>
                      <p className="text-[15px] font-bold text-red-700 mb-2">{niche.competitorStatus}</p>
                      <p className="text-[14px] text-[#5f6368] leading-relaxed">{niche.competitorDetail}</p>
                    </div>
                  </div>
                </div>

                {/* SEO Gold Mine */}
                <div className="bg-yellow-50 rounded-2xl p-5 border border-yellow-200">
                  <div className="flex items-start gap-3">
                    <TrendingUp size={18} className="text-yellow-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-[12px] font-bold text-yellow-700 uppercase tracking-wide mb-1">🏆 SEO Opportunity</div>
                      <p className="text-[15px] text-yellow-800 leading-relaxed">{niche.seoGoldMine}</p>
                    </div>
                  </div>
                </div>

                {/* Target Search Keywords */}
                <div>
                  <div className="text-[13px] font-bold text-[#5f6368] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <Search size={14} /> Target Keywords (Zero Competition in Chhattisgarh)
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {niche.searchKeywords.map((kw, i) => (
                      <span key={i} className={`text-[13px] font-medium px-3 py-1.5 rounded-xl ${c.badge} border ${c.border}`}>
                        "{kw}"
                      </span>
                    ))}
                  </div>
                </div>

                {/* Must Have Features */}
                <div>
                  <div className="text-[18px] font-bold text-[#202124] mb-4 flex items-center gap-2">
                    <CheckCircle size={20} className={c.text} /> Kya Hona Chahiye — Feature by Feature
                  </div>
                  <div className="space-y-4">
                    {niche.mustHave.map((item, i) => (
                      <div key={i} className={`rounded-2xl p-5 border ${c.bg} ${c.border}`}>
                        <div className={`font-bold ${c.text} mb-1.5 flex items-center gap-2`}>
                          <span className={`w-5 h-5 rounded-full ${c.dot} text-white text-[10px] flex items-center justify-center font-black shrink-0`}>{i + 1}</span>
                          {item.feature}
                        </div>
                        <p className="text-[14px] text-[#5f6368] leading-relaxed pl-7">{item.why}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skip This */}
                <div className="bg-[#f8f9fa] rounded-2xl p-5 border border-[#e0e0e0]">
                  <div className="text-[14px] font-bold text-[#5f6368] uppercase tracking-wide mb-3">❌ Yeh Mat Banwao (Paisa Waste Hoga)</div>
                  <div className="space-y-2">
                    {niche.skipThis.map((s, i) => (
                      <div key={i} className="flex items-center gap-2 text-[14px] text-[#5f6368]">
                        <span className="w-4 h-4 rounded-full bg-red-100 text-red-500 text-[10px] flex items-center justify-center font-black shrink-0">✕</span>
                        {s}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Blueprint */}
                <div className={`rounded-2xl p-5 border ${c.border} ${c.bg}`}>
                  <div className={`text-[13px] font-bold uppercase tracking-wide mb-2 ${c.text}`}>📐 Recommended Blueprint</div>
                  <p className={`text-[15px] font-semibold ${c.text}`}>{niche.blueprint}</p>
                </div>

              </div>
            </div>
          </div>

          {/* What All Businesses Need — Common Section */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 border border-[#e0e0e0] shadow-sm">
            <h2 className="text-[24px] md:text-[30px] font-bold text-[#202124] mb-8">
              📱 Chhattisgarh Ke Sabhi Local Businesses Ko Yeh Common Cheezein Chahiye
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: <Smartphone size={20} className="text-blue-500" />, title: "Mobile-First Design", desc: "Bilaspur mein 87%+ customers mobile se browse karte hain. Desktop version secondary hai — pehle mobile perfect karo." },
                { icon: <Zap size={20} className="text-yellow-500" />, title: "1–2 Second Load Time", desc: "Chhattisgarh ke tier-2/3 cities mein 4G average speed hai. Slow site = customer gone. Page speed 90+ mandatory." },
                { icon: <Globe size={20} className="text-green-500" />, title: "Google My Business Link", desc: "Website ke saath GMB listing must hai. Dono ek saath kaam karte hain — website se GMB rank improve hoti hai." },
                { icon: <Star size={20} className="text-orange-500" />, title: "Local Area Keywords", desc: "'Telipara', 'Vyapar Vihar', 'Maharana Pratap Chowk', 'Magneto Mall ke paas' — yeh location words SEO mein gold hain." },
                { icon: <Search size={20} className="text-purple-500" />, title: "Hindi/Roman Hindi Content", desc: "\"Website hai\" koi bhi likha sakta hai. Lekin Hindi mein local context ke saath likha content — sirf hum karte hain." },
                { icon: <CheckCircle size={20} className="text-teal-500" />, title: "WhatsApp ka Integration", desc: "Chhattisgarh market mein WhatsApp first communication tool hai. Site par prominently visible hona chahiye." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-[#f8f9fa] rounded-2xl p-4">
                  <div className="shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <div className="font-bold text-[#202124] text-[15px] mb-1">{item.title}</div>
                    <div className="text-[13px] text-[#5f6368] leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reality Check Table */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 border border-[#e0e0e0] shadow-sm overflow-x-auto">
            <h2 className="text-[22px] md:text-[28px] font-bold text-[#202124] mb-6">
              📊 Chhattisgarh Niche — Quick Comparison
            </h2>
            <table className="w-full text-[13px] min-w-[600px]">
              <thead>
                <tr className="bg-[#f8f9fa]">
                  <th className="text-left p-3 font-bold text-[#202124] border-b border-[#e0e0e0]">Business</th>
                  <th className="text-center p-3 font-bold text-red-600 border-b border-[#e0e0e0]">Competitors Online</th>
                  <th className="text-center p-3 font-bold text-[#202124] border-b border-[#e0e0e0]">Budget</th>
                  <th className="text-center p-3 font-bold text-[#202124] border-b border-[#e0e0e0]">Delivery</th>
                  <th className="text-left p-3 font-bold text-green-600 border-b border-[#e0e0e0]">SEO Rank Timeline</th>
                </tr>
              </thead>
              <tbody>
                {NICHES.map((n, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}>
                    <td className="p-3 font-semibold text-[#202124] border-b border-[#f0f0f0]">{n.emoji} {n.title}</td>
                    <td className="p-3 text-center border-b border-[#f0f0f0] text-red-600 font-bold">{i === 2 ? "2–3 outdated" : "ZERO"}</td>
                    <td className="p-3 text-center border-b border-[#f0f0f0] font-medium text-[#202124]">{n.budget}</td>
                    <td className="p-3 text-center border-b border-[#f0f0f0] text-[#5f6368]">{n.deliveryDays}</td>
                    <td className="p-3 border-b border-[#f0f0f0] text-green-700 font-semibold">{i === 2 ? "30–45 din" : "15–30 din"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Real Pricing + Why Us Block */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 border border-[#e0e0e0] shadow-sm">
            <h2 className="text-[24px] md:text-[30px] font-bold text-[#202124] mb-4 leading-tight">
              💰 Hamari Actual Pricing — Koi Hidden Fee Nahi
            </h2>
            <p className="text-[16px] text-[#5f6368] mb-6">
              Yeh prices directly <a href="/" className="text-[#1a73e8] underline font-semibold">webdevelopmentai.in</a> par listed hain. Original price ke saath discount bhi dekho:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { name: "Digital Visiting Card / Landing Page", price: "₹9,999", orig: "₹14,999", off: "33% OFF", delivery: "13–21 din", for: "Petrol pump, kirana, medical store" },
                { name: "Service Landing Page", price: "₹21,999", orig: "₹36,999", off: "40% OFF", delivery: "4–6 din", for: "Clinic, beauty parlour, auto repair" },
                { name: "Basic Static Website (6 Pages)", price: "₹22,999", orig: "₹31,999", off: "28% OFF", delivery: "13–21 din", for: "Sabhi local businesses ke liye" },
                { name: "Standard Business (11 Pages)", price: "₹27,999", orig: "₹36,999", off: "25% OFF", delivery: "10–27 din", for: "Growth-stage local businesses" },
              ].map((pkg, i) => (
                <div key={i} className="bg-[#f8f9fa] rounded-2xl p-5 border border-[#e0e0e0]">
                  <div className="text-[13px] font-bold text-[#202124] mb-2 leading-snug">{pkg.name}</div>
                  <div className="flex items-baseline gap-2 flex-wrap mb-1">
                    <span className="text-[22px] font-extrabold text-[#202124]">{pkg.price}</span>
                    <span className="text-[12px] text-[#9aa0a6] line-through">{pkg.orig}</span>
                    <span className="text-[11px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{pkg.off}</span>
                  </div>
                  <div className="text-[11px] text-[#5f6368]">⏱ {pkg.delivery} &nbsp;&nbsp;👉 {pkg.for}</div>
                </div>
              ))}
            </div>

            <div className="bg-linear-to-br from-[#f8f9fa] to-white rounded-[24px] p-6 border border-[#e0e0e0]">
              <div className="text-[14px] font-bold text-[#202124] mb-4 uppercase tracking-wide">🏆 Hamse Kyon Karwao? — 6 Solid Reasons</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { icon: "⚡", point: "13–21 Din Delivery", detail: "AI workflow ki wajah se — baaki agencies 30+ din lagte hain" },
                  { icon: "🔍", point: "SEO-First Build", detail: "Har page 90+ Google score ke saath milega — rank guarantee" },
                  { icon: "📍", point: "Bilaspur Local Expert", detail: "Chhattisgarh ke mohalle, local keywords — hum jaante hain" },
                  { icon: "💬", point: "WhatsApp Support", detail: "Delivery tak direct WhatsApp par baat kar sakte ho" },
                  { icon: "💰", point: "One-Time Payment", detail: "Koi hidden monthly fees nahi — ek baar pay, lifetime website" },
                  { icon: "🛡️", point: "Free Support After Launch", detail: "Package ke hisaab se 1–6 months free support" },
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
            </div>
          </div>

          {/* CTA */}
          <section className="bg-gradient-to-br from-[#0d1117] to-[#1a2433] rounded-[32px] p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-6 left-6 w-36 h-36 border border-orange-400 rounded-full" />
              <div className="absolute bottom-6 right-6 w-56 h-56 border border-orange-400 rounded-full" />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-wide uppercase">
                <Zap size={12} /> Zero Competition Window — Abhi Close Ho Raha Hai
              </div>
              <h2 className="text-[26px] md:text-[38px] font-extrabold text-white mb-5 leading-tight">
                Aapka Business Type Chhattisgarh Mein <br />
                <span className="text-orange-400">Pehla Online Ho Sakta Hai — Abhi</span>
              </h2>
              <p className="text-white/70 text-[17px] mb-4 max-w-lg mx-auto leading-relaxed">
                Yeh zero-competition window hamesha nahi rahegi. Jab ek baar competition aayega — uske baad SEO mein time aur paisa dono zyada lagte hain.
              </p>
              <p className="text-white/50 text-[14px] mb-10">
                Hum 13–21 din mein aapka business Google par ready kar dete hain — with full local SEO setup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/book-appointment"
                  className="bg-orange-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all hover:bg-orange-400"
                >
                  Free Consultation Book Karo
                </a>
                <a
                  href="https://wa.me/916264906078?text=Mera%20business%20Chhattisgarh%20mein%20hai%20aur%20website%20chahiye"
                  className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all"
                >
                  WhatsApp Pe Baat Karo
                </a>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="mt-32 pt-20 border-t border-[#dadce0]">
            <div className="text-[13px] font-bold text-[#1a73e8] tracking-[0.3em] uppercase mb-12 text-center">
              Pichla Part Wapas Pado
            </div>
            <div className="relative max-w-2xl mx-auto pb-10">
              <Link
                href="/blog/chhattisgarh-ke-liye-best-website-type"
                className="absolute top-1/2 -left-10 md:-left-12 -translate-y-1/2 z-10 hidden md:block"
              >
                <div className="w-20 h-20 bg-white border border-[#dadce0] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all cursor-pointer">
                  <ArrowLeft className="text-[#202124]" size={32} />
                </div>
              </Link>

              <div className="overflow-hidden rounded-[32px] bg-white border border-[#dadce0] shadow-2xl">
                <div className="p-8 md:p-12">
                  <div className="flex flex-col items-center text-center">
                    <div className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-600 text-[11px] font-bold tracking-widest uppercase mb-6">
                      Part 5: Website Type Guide
                    </div>
                    <h3 className="text-[24px] md:text-[30px] font-bold text-[#202124] mb-4 leading-tight">
                      Static vs Dynamic vs E-commerce — <br /> Chhattisgarh Business Guide
                    </h3>
                    <p className="text-[#5f6368] text-lg mb-10 max-w-md mx-auto">
                      Decision table, budget guide aur 5 common galtiyan — ek jagah.
                    </p>
                    <Link
                      href="/blog/chhattisgarh-ke-liye-best-website-type"
                      className="bg-[#1a73e8] text-white px-10 py-5 rounded-2xl font-bold text-[17px] hover:shadow-2xl hover:scale-105 active:scale-95 transition-all mb-4"
                    >
                      Wapas Pado (Part 5)
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-10 md:hidden">
                <Link
                  href="/blog/chhattisgarh-ke-liye-best-website-type"
                  className="w-16 h-16 bg-white border border-[#dadce0] rounded-full flex items-center justify-center shadow-xl active:scale-90 transition-all"
                >
                  <ArrowLeft className="text-[#202124]" size={28} />
                </Link>
              </div>

              {/* Pagination — position 6 of 6 */}
              <div className="flex justify-center gap-3 mt-12 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-3 h-3 rounded-full bg-[#dadce0]" />
                ))}
                <div className="w-8 h-3 rounded-full bg-orange-500" />
              </div>
            </div>
          </div>

        </div>
      </article>

      <footer className="bg-white py-12 border-t border-[#e0e0e0]">
        <div className="max-w-4xl mx-auto px-6 text-center text-[#5f6368] text-sm">
          © 2026 WebDevelopmentAI • Local Business Experts for Bilaspur &amp; Chhattisgarh
        </div>
      </footer>

    </div>
  );
}
