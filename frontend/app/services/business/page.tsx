import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Briefcase, ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Solutions Raipur | Corporate Growth Hub | Web Development AI',
  description: 'Raipur ke local businesses aur SMEs ke liye digital growth hub. Jaaniye kaise professional website se aap apne brand aur leads ko scale kar sakte hain.',
};

const BUSINESS_BLOGS = [
  {
    title: "Bakery Website Raipur — Sweetening Your Success Online",
    excerpt: "Bakery Website Raipur — Kaise apne cakes aur pastries ko online bechein aur 30% commission bachayein.",
    href: "/blog/bakery-website-development-raipur",
    readTime: "8 min read",
    tag: "Food & Beverage",
    emoji: "🍰"
  },
  {
    title: "Sasti Website Raipur — Kya ₹9,999 Mein Sach Mein Milti Hai?",
    excerpt: "Sasti website Raipur mein lene se pehle yeh padhein. Complete pricing breakdown, kya milta hai, kya nahi — bilkul seedha aur transparent.",
    href: "/blog/sasti-website-raipur",
    readTime: "9 min read",
    tag: "Pricing",
    emoji: "💸"
  },
  {
    title: "Why Every Raipur Shop Needs a Digital Presence in 2026",
    excerpt: "Pandri se lekar Sadar Bazar tak, Raipur ke har vyapari ke liye digital hona kyun zaroori hai.",
    href: "/blog/why-website-important-raipur-business",
    readTime: "7 min read",
    tag: "Strategy",
    emoji: "🏪"
  },
  {
    title: "Professional Business Website: The Digital Identity for Raipur SMEs",
    excerpt: "Ek corporate website kaise aapki brand value Raipur aur Chhattisgarh mein badha sakti hai.",
    href: "/blog/business-website-raipur",
    readTime: "9 min read",
    tag: "Corporate",
    emoji: "🏢"
  },
  {
    title: "Website Cost Raipur — 2026 Mein Kitne Mein Banti Hai Website?",
    excerpt: "Website cost Raipur mein kya hoti hai? Har type ki website ka honest pricing breakdown — ₹9,999 se lekar ₹5,00,000 tak. Koi chupaana nahi.",
    href: "/blog/website-cost-raipur",
    readTime: "9 min read",
    tag: "Pricing",
    emoji: "💰"
  },
  {
    title: "Website Development Cost Raipur — Jo Agency Nahi Batati, Hum Batate Hain",
    excerpt: "Hidden charges, red flags, aur honest itemized breakdown — website development cost Raipur mein actually kitni aati hai 2026 mein.",
    href: "/blog/website-development-cost-raipur",
    readTime: "9 min read",
    tag: "Development",
    emoji: "🛠️"
  },
  {
    title: "Affordable Website Developer Raipur — Quality Aur Budget Ka Sahi Mel",
    excerpt: "Raipur mein budget-friendly prices mein premium business websites kaise deliver hoti hain. Vikas ki story se seekhein.",
    href: "/blog/affordable-website-developer-raipur",
    readTime: "10 min read",
    tag: "Value",
    emoji: "🚀"
  },
  {
    title: "Responsive Website Design Raipur — Kya Aapka Business Har Screen Par Perfect Hai?",
    excerpt: "Mobile-friendly design kyun ab Raipur ke businesses ke liye optional nahi hai. Anil bhai ki story se seekhein.",
    href: "/blog/responsive-website-design-raipur",
    readTime: "12 min read",
    tag: "Design",
    emoji: "📱"
  },
  {
    title: "Restaurant Website Raipur — 30% Commission Bachane Ka Digital Setup",
    excerpt: "Raipur aur Bilaspur ke cafes kaise aggregator apps chhod kar zero-commission direct ordering setup kar rahe hain.",
    href: "/blog/restaurant-website-raipur",
    readTime: "15 min read",
    tag: "Food Tech",
    emoji: "🍔"
  },
  {
    title: "Small Business Website Raipur — Instagram Chhodo, Apni Dukaan Banao",
    excerpt: "Raipur aur Bilaspur ke small businesses, shops aur service providers ke liye website kyu essential hai? Ramesh ji ki local story.",
    href: "/blog/small-business-website-raipur",
    readTime: "12 min read",
    tag: "Small Biz",
    emoji: "🏪"
  },
  {
    title: "SEO Friendly Website Raipur — Ek Sundar 'Ghost Town' Banane Se Bachein",
    excerpt: "Kyun sirf sundar website banwana kafi nahi hai? Jaaniye Raipur me Google rank karne ki fast aur technical strategy.",
    href: "/blog/seo-friendly-website-raipur",
    readTime: "11 min read",
    tag: "SEO",
    emoji: "🔍"
  },
  {
    title: "AI vs Normal Website — Raipur Businesses Ke Liye Kya Sahi Hai?",
    excerpt: "Kya AI powered websites sacch mein normal websites se behtar hain? Jaaniye Raipur ke market trends aur conversion rates.",
    href: "/blog/ai-vs-normal-website-raipur",
    readTime: "10 min read",
    tag: "Tech Comparison",
    emoji: "🤖"
  },
  {
    title: "AI-powered website vs normal website — kya fark hai?",
    excerpt: "Detail mein jaaniye 5 bade difference jo ek AI website ko normal website se alag aur zyada powerful banate hain. Conversion ka asli sach.",
    href: "/blog/ai-powered-vs-normal-website-differences",
    readTime: "12 min read",
    tag: "Comparison",
    emoji: "⚖️"
  },
  {
    title: "Next.js kya hai aur kyun better hai WordPress se?",
    excerpt: "Kya aap abhi bhi purani WordPress technology use kar rahe hain? Jaaniye kyun Next.js aapki Raipur website ko 10x faster aur secure banata hai.",
    href: "/blog/nextjs-vs-wordpress-raipur",
    readTime: "14 min read",
    tag: "Modern Tech",
    emoji: "⚡"
  },
  {
    title: "AI chatbot apne business ke liye kaise banwayein Raipur — Best Solution",
    excerpt: "Customer ko 24/7 reply chahiye? Seekhiye kaise AI chatbots aapke Raipur business ki sales 3x kar sakte hain bina kisi extra staff ke.",
    href: "/blog/ai-chatbot-business-raipur",
    readTime: "16 min read",
    tag: "AI SOLUTIONS",
    emoji: "💬"
  },
  {
    title: "Google pe #1 kaise aayein — Bilaspur business guide",
    excerpt: "Bilaspur ke local market mein apne business ko Google ke pehle page par kaise laayein? Jaaniye SEO ki aisi strategy jo koi nahi batayega.",
    href: "/blog/google-rank-bilaspur-business",
    readTime: "13 min read",
    tag: "LOCAL SEO",
    emoji: "📈"
  },
  {
    title: "Website ke bina business kyun fail hota hai — CG examples",
    excerpt: "Kyun sirf offline rehna aapke business ke liye khatarnak hai? Dekhiye Chhattisgarh ke real cases jahan bina website ke badhiya business bhi thapp ho gaye.",
    href: "/blog/kyun-fail-hota-hai-business-without-website",
    readTime: "12 min read",
    tag: "BUSINESS GROWTH",
    emoji: "📉"
  },
  {
    title: "Chhattisgarh mein online store kaise banwayein 2026",
    excerpt: "Apna offline vyapaar poore desh mein kaise felayein? Jaaniye Raipur aur Bilaspur ke businesses ecommerce ka use kar ke kaise 10x growth kar rahe hain.",
    href: "/blog/online-store-kaise-banwayein-chhattisgarh",
    readTime: "15 min read",
    tag: "E-COMMERCE",
    emoji: "🛍️"
  },
  {
    title: "CA aur accountant ke liye professional website guide",
    excerpt: "Tax season mein client dhoondhna band karein. Jaaniye kaise ek AI-powered website CA aur accounting firms ke liye trust aur leads automate karti hai.",
    href: "/blog/ca-accountant-professional-website-guide",
    readTime: "11 min read",
    tag: "PROFESSIONAL SERVICES",
    emoji: "⚖️"
  },
  {
    title: "Salon aur beauty parlor ke liye website — Bilaspur guide",
    excerpt: "Bilaspur ke beauty parlor aur salon owners ke liye: Jaaniye kaise ek professional website se aapka appointment booking automate ho sakta hai aur aapka brand city mein top par dikhega.",
    href: "/blog/salon-beauty-parlor-website-guide-bilaspur",
    readTime: "10 min read",
    tag: "LIFESTYLE BUSINESS",
    emoji: "💇‍♀️"
  }
];

const MP_BLOGS = [
  {
    title: "MP mein GST registration ke baad website kyun banwayein?",
    excerpt: "GST number mil gaya, ab vyapar kaise badhaein? Jaaniye kyun MP ke har GST-registered business ke liye ek professional website sales ka power booster hai.",
    href: "/blog/mp-gst-registration-website-benefits",
    readTime: "10 min read",
    tag: "BUSINESS TAX",
    emoji: "📑"
  },
  {
    title: "Indore mein photography business ke liye website guide",
    excerpt: "Apne clicks ko business mein convert karein. Jaaniye kaise ek premium portfolio website Indore ke wedding aur fashion photographers ki sales 5x badha sakti hai.",
    href: "/blog/indore-photography-business-website-guide",
    readTime: "11 min read",
    tag: "CREATIVE BIZ",
    emoji: "📸"
  },
  {
    title: "Website maintenance kya hoti hai aur kyun zaroori hai?",
    excerpt: "Website banwa li, par kya woh secure hai? Jaaniye kyun regular maintenance aapki website ko hacking aur slow speed se bachati hai.",
    href: "/blog/website-maintenance-importance-hindi-guide",
    readTime: "9 min read",
    tag: "TECH CARE",
    emoji: "🛠️"
  }
];

export default function BusinessHub() {
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
            <Briefcase size={14} />
            Business growth hub
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#202124] leading-tight mb-6">
            Corporate & Local <br/><span className="text-[#1a73e8]">Business Center</span>
          </h1>
          <p className="text-xl text-[#5f6368] max-w-3xl leading-relaxed">
            Raipur ke local businesses (Bakery, Shops, Clinics) ke liye specialized digital solutions. 
            Apne brand ki local authority banayein aur regular leads generate karein.
          </p>
        </header>

        {/* Blog Containers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {BUSINESS_BLOGS.map((blog, idx) => (
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

        {/* Madhya Pradesh Hub Section */}
        <section className="mt-32 mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-[#202124] mb-4">
                Madhya Pradesh <br/><span className="text-[#1a73e8]">Business Growth Hub</span>
              </h2>
              <p className="text-lg text-[#5f6368] max-w-2xl leading-relaxed">
                Indore, Bhopal aur MP ke badhte shehron ke liye specialized digital strategies. 
                Apne business ko pure state mein extend karein.
              </p>
            </div>
            <div className="bg-[#f8f9fa] px-6 py-3 rounded-2xl border border-gray-100 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#137333] rounded-full animate-pulse"></span>
              <span className="text-sm font-bold text-[#202124]">EXPANDING IN MP</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MP_BLOGS.map((blog, idx) => (
              <Link 
                key={idx} 
                href={blog.href}
                className="group flex flex-col bg-[#fdfdfd] border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-[#1a73e8]/20"
              >
                <div className="h-40 bg-[#f8f9fa] flex items-center justify-center text-5xl group-hover:scale-105 transition-transform duration-500 opacity-80">
                  {blog.emoji}
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-black text-[#1a73e8] uppercase tracking-widest">{blog.tag}</span>
                    <span className="text-[10px] text-[#5f6368]">{blog.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#202124] mb-3 group-hover:text-[#1a73e8] transition-colors leading-tight">
                    {blog.title}
                  </h3>
                  <p className="text-[#5f6368] text-xs leading-relaxed mb-6 flex-1">
                    {blog.excerpt}
                  </p>
                  <div className="text-[#1a73e8] font-bold text-xs flex items-center gap-2">
                    Open Guide <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Consulting Banner */}
        <div className="bg-[#1a73e8] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Need a professional business website?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Book a free 15-minute consultation with our Raipur experts and get a custom strategy for your local business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/916264906078?text=Hi%2C%20mujhe%20business%20hub%20dekhne%20ke%20baad%20apne%20shop%20ke%20liye%20consultation%20chahiye"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1a73e8] font-black px-10 py-5 rounded-full text-lg hover:bg-gray-50 transition-all shadow-xl"
            >
              Consult with Us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
