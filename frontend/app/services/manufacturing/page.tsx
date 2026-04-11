import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Factory, ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manufacturing & Industrial Solutions Raipur | Growth Hub | Web Development AI',
  description: 'Raipur ke industrial sectors (Urla, Siltara) ke liye official growth hub. Industrial strategy blogs, B2B lead generation, aur machinery showcase guides.',
};

const MANUFACTURING_BLOGS = [
  {
    title: "Manufacturing Website Raipur — Apni Factory Ko Digital Authority Kaise Banayein",
    excerpt: "Manufacturing Website Raipur — Industrial hubs jaise Urla aur Siltara ke liye complete digital transformation guide.",
    href: "/blog/manufacturing-website-development-raipur",
    readTime: "7 min read",
    tag: "Transformation",
    emoji: "🏭"
  },
  {
    title: "B2B Lead Generation for Raipur Industrial Hubs (Urla & Siltara)",
    excerpt: "Local manufacturing units ke liye global enquiries lane ka blueprint. Jaaniye kaise B2B portals kaam karte hain.",
    href: "#",
    readTime: "6 min read",
    tag: "Leads",
    emoji: "📈"
  },
  {
    title: "Technical SEO for Manufacturing: Rank Your Machinery Globally",
    excerpt: "Industrial keywords par rank karke international export orders kaise paayein. SEO guide for Raipur factories.",
    href: "#",
    readTime: "8 min read",
    tag: "SEO",
    emoji: "🌐"
  },
  {
    title: "Certification & Quality Control: Showcasing Reliability Online",
    excerpt: "ISO aur other certifications ko website pe kaise showcase karein ki buyers ka trust instant build ho jaaye.",
    href: "#",
    readTime: "5 min read",
    tag: "Trust",
    emoji: "✅"
  },
  {
    title: "Digital Catalogs vs PDF Brochures for Industrial Sales",
    excerpt: "Kyun traditional PDFs ab kaam nahi karte aur interactive catalogs kyun zaroori hain 2026 mein.",
    href: "#",
    readTime: "4 min read",
    tag: "Sales",
    emoji: "📖"
  }
];

export default function ManufacturingHub() {
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
          <div className="inline-flex items-center gap-2 bg-[#f3e8fd] text-[#9333ea] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <Factory size={14} />
            Industrial Growth Hub
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#202124] leading-tight mb-6">
            Manufacturing Website Raipur <br/><span className="text-[#1a73e8]">Industrial Center</span>
          </h1>
          <p className="text-xl text-[#5f6368] max-w-3xl leading-relaxed">
            Raipur ke manufacturers ke liye specialized digital resources. 
            Urla aur Siltara se lekar national aur international markets tak apne business ko scale karein.
          </p>
        </header>

        {/* Blog Containers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {MANUFACTURING_BLOGS.map((blog, idx) => (
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
        <div className="bg-[#202124] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to digitize your plant?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Book a free session with our industrial digital experts in Raipur. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/916264906078?text=Hi%2C%20mujhe%20industrial%20hub%20dekhne%20ke%20baad%20apne%20factory%20ke%20liye%20consultation%20chahiye"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#202124] font-black px-10 py-5 rounded-full text-lg hover:bg-gray-50 transition-all shadow-xl"
            >
              Consult with Experts
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
