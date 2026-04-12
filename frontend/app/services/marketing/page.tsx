import React from 'react';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, ArrowRight, BookOpen, Clock, Tag, Target, BarChart, Search, MousePointer2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Hub Raipur | Performance Marketing | Web Development AI',
  description: 'Raipur ke businesses ke liye digital marketing results. SEO, Landing Pages, aur Lead Generation strategies jo sales 5x badhati hain.',
};

const MARKETING_BLOGS = [
  {
    title: "Landing page kya hota hai — Hindi mein samjho",
    excerpt: "Website aur Landing Page mein kya fark hai? Jaaniye kaise ek single page aapke business ke sales ko 5x badha sakta hai. Simple Hindi guide.",
    href: "/blog/landing-page-kya-hota-hai-hindi-guide",
    readTime: "9 min read",
    tag: "CONVERSION",
    emoji: "🎯"
  }
];

export default function MarketingHub() {
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
            <TrendingUp size={14} />
            Performance Marketing Hub
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#202124] leading-tight mb-6">
            Digital Growth <br/><span className="text-[#1a73e8]">& Sales Center</span>
          </h1>
          <p className="text-xl text-[#5f6368] max-w-3xl leading-relaxed">
            Sirf "likes" nahi, "orders" chahiye? Raipur ke local businesses ke liye data-driven strategies jo aapke ad budget ko ROI mein convert karti hain.
          </p>
        </header>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 border-b border-gray-100 pb-16">
          {[
            { icon: <Search className="text-[#1a73e8]" />, title: "Local SEO", desc: "Raipur aur Bilaspur ke customers jab search karein, tab aap top par hoon." },
            { icon: <Target className="text-[#d93025]" />, title: "Lead Generation", desc: "High-intent customer inquiries direct aapke WhatsApp aur Inbox mein." },
            { icon: <BarChart className="text-[#137333]" />, title: "Analytics", desc: "Har ek paise ka hisaab. Jaaniye kahan se sales aa rahi hai." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-[#f8f9fa] rounded-2xl flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#202124]">{item.title}</h3>
              <p className="text-[#5f6368] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Blog Containers Grid */}
        <h2 className="text-2xl font-black text-[#202124] mb-10 flex items-center gap-3">
           Marketing Knowledge Base <span className="bg-[#1a73e8] text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-tighter">NEW</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {MARKETING_BLOGS.map((blog, idx) => (
            <Link 
              key={idx} 
              href={blog.href}
              className="group flex flex-col bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
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
                  <BookOpen size={16} /> Learn More <ArrowRight size={14} className="ml-auto transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Strategy Consultation */}
        <div className="bg-[#f8f9fa] border border-gray-100 rounded-[3rem] p-10 md:p-16 flex flex-col items-center text-center">
            <div className="mb-6 p-4 bg-white rounded-2xl shadow-sm">
                <MousePointer2 className="text-[#1a73e8]" size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#202124] mb-6">Want a custom marketing plan?</h2>
            <p className="text-xl text-[#5f6368] mb-10 max-w-2xl mx-auto">
                Hum aapke business aur competition ko analyze karenge aur aapko bataenge ki agle 3 mahine mein 3x growth kaise laayi jaaye.
            </p>
            <a 
              href="https://wa.me/916264906078?text=Hi%2C%20mujhe%20marketing%20audit%20aur%20strategy%20ke%20baad%20apne%20business%20audit%20karna%20hai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#1a73e8] text-white font-black px-12 py-5 rounded-full text-lg hover:bg-[#1557b0] transition-all shadow-xl"
            >
              Get My Marketing Audit
            </a>
        </div>

      </div>
    </div>
  );
}
