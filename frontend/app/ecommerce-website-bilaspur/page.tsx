"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle, ShoppingCart, ArrowRight, Zap, Shield, MapPin, Star } from "lucide-react";

const FEATURES = [
  "Product Management (20–100+ Products)",
  "Payment Gateway — UPI, GPay, Razorpay",
  "Cart + Checkout System",
  "Order Tracking & Notifications",
  "Admin Panel (Dashboard se manage karo)",
  "Mobile Responsive Design",
  "Basic SEO Setup",
  "Next.js High-Performance Build",
  "WhatsApp Order Button",
  "6 Months Free Support",
];

const NICHES = [
  { icon: "🛒", name: "Kirana Store", desc: "Online delivery system ke saath" },
  { icon: "👗", name: "Kapde Ki Dukaan", desc: "Fashion ecommerce for Bilaspur" },
  { icon: "💊", name: "Medical/Pharmacy", desc: "Online medicine order system" },
  { icon: "🍱", name: "Food / Tiffin Service", desc: "Online menu + order system" },
  { icon: "💪", name: "Supplement Store", desc: "Protein products online store" },
  { icon: "🔧", name: "Hardware / Tools", desc: "B2B + B2C product catalog" },
];

const PACKAGES = [
  {
    name: "Ecommerce Starter",
    price: "₹51,999",
    orig: "₹69,999",
    features: ["20–50 Products", "Razorpay Payment", "Cart & Checkout", "Admin Panel", "WhatsApp Order", "6 Months Support"],
    badge: "POPULAR",
    color: "border-blue-500 bg-blue-50",
    badgeColor: "bg-blue-500",
  },
  {
    name: "Protein Store Special",
    price: "₹48,999",
    orig: "₹79,999",
    features: ["Supplement Catalog", "UPI + Card Payment", "Admin Panel", "Mobile Responsive", "SEO Setup", "6 Months Support"],
    badge: "BESTSELLER",
    color: "border-green-500 bg-green-50",
    badgeColor: "bg-green-500",
  },
  {
    name: "Advanced Brand Store",
    price: "₹1,19,999",
    orig: "₹2,39,999",
    features: ["Unlimited Products", "Custom UI/UX Design", "User Login + Profile", "Coupons & Loyalty Points", "Live Inventory", "Enterprise Speed"],
    badge: "ENTERPRISE",
    color: "border-purple-500 bg-purple-50",
    badgeColor: "bg-purple-600",
  },
];

const WHY_US = [
  { icon: "🚀", title: "Next.js Power", desc: "1-second load time — slow ecommerce se customers bhaag jaate hain" },
  { icon: "📱", title: "Mobile First", desc: "90% orders mobile se aate hain — iska design mobile-first hai" },
  { icon: "📍", title: "Bilaspur Local Expert", desc: "Sirf website developer nahi — Chhattisgarh ke market ko samjhte hain" },
  { icon: "💳", title: "UPI + Razorpay Ready", desc: "Bilaspur ke log UPI prefer karte hain — pehle din se ready" },
  { icon: "🔍", title: "SEO Setup Included", desc: "Google pe 'ecommerce store Bilaspur' ke liye optimize karenge" },
  { icon: "💬", title: "WhatsApp Support", desc: "Delivery tak direct WhatsApp par baat karo — no email wait" },
];

export default function EcommerceWebsiteBilaspurPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Ecommerce Website Development Bilaspur",
    provider: {
      "@type": "ProfessionalService",
      name: "Web Development AI",
      url: "https://webdevelopmentai.in",
      telephone: "+91 62649 06078",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bilaspur",
        addressRegion: "Chhattisgarh",
        addressCountry: "IN",
      },
    },
    description:
      "Bilaspur mein best ecommerce website developer. ₹48,999 se shuru — Next.js powered online store with payment gateway, admin panel, and WhatsApp integration.",
    offers: {
      "@type": "Offer",
      price: "48999",
      priceCurrency: "INR",
    },
    areaServed: "Bilaspur, Chhattisgarh, India",
    serviceType: ["Ecommerce Website Development Bilaspur", "Ecommerce Website Chhattisgarh"],
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <div className="bg-white border-b border-[#e0e0e0]">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-blue-200">
            <ShoppingCart size={16} />
            Ecommerce Website Developer in Bilaspur
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#202124] leading-tight mb-6">
            Bilaspur mein{" "}
            <span className="text-blue-600">Ecommerce Website</span>{" "}
            Banwana Hai?
          </h1>
          <p className="text-xl text-[#5f6368] leading-relaxed max-w-3xl mx-auto mb-8">
            Next.js powered online store — <strong className="text-[#202124]">payment gateway, admin panel, mobile-first design</strong> ke saath. As the top <strong className="text-[#202124]">ecommerce website Chhattisgarh</strong> provider, we are Bilaspur ke sabse affordable aur premium ecommerce developer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/916264906078?text=Hi%2C%20mujhe%20Bilaspur%20mein%20ecommerce%20website%20banwani%20hai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all shadow-lg hover:shadow-green-200"
            >
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Par Baat Karo
            </a>
            <Link
              href="/plans"
              className="inline-flex items-center gap-2 border-2 border-[#1a73e8] text-[#1a73e8] hover:bg-[#1a73e8] hover:text-white font-bold px-8 py-4 rounded-full text-lg transition-all"
            >
              Sabhi Packages Dekho <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { val: "₹48,999", label: "Se Shuru", sub: "Ecommerce Starter" },
            { val: "13–21", label: "Din Delivery", sub: "Fast Launch" },
            { val: "90+", label: "Speed Score", sub: "Google Lighthouse" },
            { val: "6 mah", label: "Free Support", sub: "Launch ke baad" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 text-center border border-[#e0e0e0] shadow-sm">
              <div className="text-2xl font-black text-blue-600">{stat.val}</div>
              <div className="text-sm font-bold text-[#202124] mt-1">{stat.label}</div>
              <div className="text-xs text-[#5f6368] mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Niches */}
      <div className="max-w-5xl mx-auto px-6 pb-10">
        <h2 className="text-2xl font-black text-[#202124] mb-2 text-center">
          Kaunse Businesses Ke Liye Hai?
        </h2>
        <p className="text-center text-[#5f6368] mb-8">Bilaspur ke in businesses ke liye tailor-made ecommerce solution</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {NICHES.map((n, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-[#e0e0e0] hover:border-blue-300 hover:shadow-md transition-all">
              <div className="text-3xl mb-2">{n.icon}</div>
              <div className="font-bold text-[#202124] text-sm">{n.name}</div>
              <div className="text-xs text-[#5f6368] mt-1">{n.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-white border-y border-[#e0e0e0]">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-black text-[#202124] mb-2 text-center">
            Ecommerce Site Mein Kya Milega?
          </h2>
          <p className="text-center text-[#5f6368] mb-8">Sab kuch included — koi hidden charges nahi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {FEATURES.map((f, i) => (
              <div key={i} className="flex items-center gap-3 bg-[#f8f9fa] rounded-xl p-4 border border-[#e8eaed]">
                <CheckCircle size={18} className="text-green-500 shrink-0" />
                <span className="text-sm font-medium text-[#202124]">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Packages */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-black text-[#202124] mb-2 text-center">
          Ecommerce Packages — Bilaspur Ke Liye
        </h2>
        <p className="text-center text-[#5f6368] mb-8">Transparent pricing — koi baat chhupayi nahi</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PACKAGES.map((pkg, i) => (
            <div key={i} className={`rounded-2xl p-6 border-2 relative ${pkg.color}`}>
              <span className={`absolute -top-3 left-4 text-white text-xs font-bold px-3 py-1 rounded-full ${pkg.badgeColor}`}>
                {pkg.badge}
              </span>
              <h3 className="font-black text-[#202124] text-lg mt-2 mb-1">{pkg.name}</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-black text-blue-600">{pkg.price}</span>
                <span className="text-sm text-[#5f6368] line-through">{pkg.orig}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-[#202124]">
                    <CheckCircle size={14} className="text-green-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/916264906078?text=Hi%2C%20mujhe%20ecommerce%20website%20banwani%20hai%20Bilaspur%20mein"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#202124] text-white font-bold py-3 rounded-xl hover:bg-[#000] transition-all text-sm"
              >
                Yeh Package Lena Hai →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Why Us */}
      <div className="bg-white border-y border-[#e0e0e0]">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-black text-[#202124] mb-2 text-center">
            Bilaspur Mein Best Ecommerce Developer Kyon Hain Hum?
          </h2>
          <p className="text-center text-[#5f6368] mb-8">6 solid reasons jo doosre nahi denge</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {WHY_US.map((w, i) => (
              <div key={i} className="bg-[#f8f9fa] rounded-2xl p-5 border border-[#e8eaed]">
                <div className="text-3xl mb-3">{w.icon}</div>
                <div className="font-bold text-[#202124] mb-1">{w.title}</div>
                <div className="text-sm text-[#5f6368]">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-yellow-400 mb-4">
            <MapPin size={18} />
            <span className="text-sm font-bold tracking-wider uppercase">Bilaspur, Chhattisgarh</span>
          </div>
          <h2 className="text-3xl font-black text-white mb-4">
            Aapki Ecommerce Site 13–21 Din Mein Ready
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Payment gateway se leke admin panel tak — sab kuch setup karke denge. Abhi WhatsApp karo, kal se kaam shuru.
          </p>
          <a
            href="https://wa.me/916264906078?text=Hi%2C%20mujhe%20Bilaspur%20mein%20ecommerce%20website%20banwani%20hai%20%E2%80%94%20please%20quote%20bhejo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-black px-10 py-5 rounded-full text-xl transition-all shadow-xl hover:shadow-green-900/40"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Free Quote Maango — WhatsApp
          </a>
          <p className="text-white/40 text-sm mt-4">Response within 30 minutes • Monday–Saturday 9am–8pm</p>
        </div>
      </div>

      {/* Breadcrumb / Nav */}
      <div className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex flex-wrap gap-3 text-sm text-[#5f6368]">
          <Link href="/" className="hover:text-[#1a73e8] hover:underline">Home</Link>
          <span>/</span>
          <Link href="/plans" className="hover:text-[#1a73e8] hover:underline">Services</Link>
          <span>/</span>
          <span className="text-[#202124] font-medium">Ecommerce Website Bilaspur</span>
        </div>
      </div>
    </div>
  );
}
