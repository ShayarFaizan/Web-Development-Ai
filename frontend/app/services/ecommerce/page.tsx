import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ecommerce Solutions Raipur | Growth Guides & Strategies | Web Development AI',
  description: 'Raipur businesses ke liye ecommerce growth hub. Padiye expert blogs, online store strategies, aur success stories.',
};

const ECOMMERCE_BLOGS = [
  {
    title: "Ecommerce Website Raipur — Raipur Ka Business Online Le Jaana — Ecommerce Guide 2026",
    excerpt: "Ecommerce Website Raipur — Pandri, Shankar Nagar se lekar VIP Road tak—Raipur ke businesses ke liye ecommerce website kaise kaam karti hai.",
    href: "/blog/ecommerce-website-development-raipur",
    readTime: "9 min read",
    tag: "Strategy",
    emoji: "🛒"
  },
  {
    title: "Website Banwane Ka Kharcha Raipur Mein 2026",
    excerpt: "Affordable options se lekar enterprise solutions tak, Raipur mein website pricing ka poora breakdown.",
    href: "/blog/website-banane-ka-kharcha-raipur-2026",
    readTime: "6 min read",
    tag: "Pricing",
    emoji: "💰"
  },
  {
    title: "Why Website is Important for Raipur Businesses",
    excerpt: "2026 mein digital presence koi luxury nahi, balke necessity hai. Jaaniye kyun.",
    href: "/blog/why-website-important-raipur-business",
    readTime: "8 min read",
    tag: "Growth",
    emoji: "📍"
  },
  {
    title: "Best Payment Gateways for Chhattisgarh Businesses",
    excerpt: "UPI, Razorpay, aur CC Avenue—kaun sa gateway Raipur ke sellers ke liye best hai?",
    href: "#",
    readTime: "5 min read",
    tag: "Payments",
    emoji: "💳"
  },
  {
    title: "How to ship products from Raipur to all over India",
    excerpt: "Logistics guide for Pandri and Sadar Bazar wholesalers going national.",
    href: "#",
    readTime: "7 min read",
    tag: "Logistics",
    emoji: "📦"
  }
];

export default function EcommerceHub() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-16 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumb */}
        <nav className="mb-10">
          <Link href="/" className="inline-flex items-center text-[#1a73e8] hover:underline text-sm font-medium">
            <ArrowLeft size={16} className="mr-2" /> Back to Home
          </Link>
        </nav>

        {/* Hero Section */}
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 bg-[#e8f0fe] text-[#1a73e8] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <ShoppingCart size={14} />
            Ecommerce Growth Hub
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#202124] leading-tight mb-6">
            Ecommerce Website Raipur <br/><span className="text-[#1a73e8]">Success Center</span>
          </h1>
          <p className="text-xl text-[#5f6368] max-w-3xl leading-relaxed">
            Everything you need to know about starting and scaling an online store in Raipur. 
            From payment gateways to logistics and marketing strategies specialized for our city.
          </p>
        </header>

        {/* Blog Containers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {ECOMMERCE_BLOGS.map((blog, idx) => (
            <Link 
              key={idx} 
              href={blog.href}
              className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 bg-[#f8f9fa] flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                {blog.emoji}
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center gap-1.5 text-[11px] font-bold text-[#1a73e8] uppercase tracking-wider">
                    <Tag size={12} /> {blog.tag}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] font-medium text-[#5f6368]">
                    <Clock size={12} /> {blog.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#202124] mb-4 group-hover:text-[#1a73e8] transition-colors leading-snug">
                  {blog.title}
                </h3>
                <p className="text-[#5f6368] text-sm leading-relaxed mb-8 flex-1">
                  {blog.excerpt}
                </p>
                <div className="flex items-center gap-2 text-[#1a73e8] font-bold text-sm">
                  <BookOpen size={16} /> Read Full Article <ArrowRight size={14} className="ml-auto transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Consulting Banner */}
        <div className="bg-[#1a73e8] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Want a custom strategy for your business?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Book a free 15-minute consultation with our ecommerce experts in Raipur. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/916264906078?text=Hi%2C%20mujhe%20ecommerce%20hub%20dekhne%20ke%20baad%20apne%20business%20ke%20liye%20consultation%20chahiye"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1a73e8] font-black px-10 py-5 rounded-full text-lg hover:bg-gray-50 transition-all shadow-xl"
            >
              Consult with Experts
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
