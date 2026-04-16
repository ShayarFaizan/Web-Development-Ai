import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, Clock, Tag, PenTool } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Website Solutions | Publishing Platforms Hub | Web Development AI',
  description: 'Learn how SEO-optimized publishing platforms and blogs can scale your digital presence.',
};

const BLOG_ARTICLES = [
  {
    title: "Google Par Apna Business Kaise Register Karein 2026",
    excerpt: "Google par apna business kaise register karein 2026? Step-by-step complete guide local businesses ke liye jisse aapka business Google search aur maps par rank kare.",
    href: "/blog/google-par-apna-business-register-2026",
    readTime: "8 min read",
    tag: "Local SEO",
    emoji: "🌐"
  },
  {
    title: "Website se business kaise badhaye — Hindi guide",
    excerpt: "Website sirf ek digital address nahi, sales machine hai. Janiye kaise aap apni website ka use karke apne business ko 10X grow kar sakte hain.",
    href: "/blog/website-se-business-kaise-badhaye-hindi-guide",
    readTime: "10 min read",
    tag: "Business Growth",
    emoji: "🚀"
  },
  {
    title: "MP ke chhote vyapariyon ke liye website guide Hindi mein",
    excerpt: "Madhya Pradesh ke har sheher aur kasbe ke vyapariyon ke liye. Janiye online dukan kholne ka sabse asan aur sasta tareeka.",
    href: "/blog/mp-small-business-website-guide-hindi",
    readTime: "15 min read",
    tag: "MP Special",
    emoji: "🏘️"
  },
  {
    title: "Madhya Pradesh mein online business shuru karne ka tarika",
    excerpt: "Gwalior ki Chanderi sarees ho ya Bhopal ke handicrafts — janiye MP mein apna brand online launch karne ka step-by-step process.",
    href: "/blog/madhya-pradesh-online-business-shuru-karne-ka-tarika",
    readTime: "18 min read",
    tag: "Business Guide",
    emoji: "🚀"
  },
  {
    title: "Indore ke textile business ke liye B2B website guide",
    excerpt: "Indore ke kapde ke thok vyapariyon (wholesalers) ke liye guide. Jaaniye kaise B2B website se pure Bharat ke retailers se judein.",
    href: "/blog/indore-textile-business-b2b-website-guide",
    readTime: "14 min read",
    tag: "B2B Textile",
    emoji: "👕"
  },
  {
    title: "Jabalpur mein ecommerce business kaise shuru karein",
    excerpt: "Marble City ke vyapariyon ke liye special guide. Jaaniye kaise Jabalpur se baithkar pure India mein business karein.",
    href: "/blog/jabalpur-ecommerce-business-guide",
    readTime: "16 min read",
    tag: "MP Special",
    emoji: "💎"
  },
  {
    title: "Gwalior ke property dealers ke liye website guide 2026",
    excerpt: "Gwalior ke real estate market mein trust aur leads ka naya formula. Jaaniye kaise ek property listing website aapke deals ki speed 3x badha sakti hai.",
    href: "/blog/gwalior-property-dealers-website-guide",
    readTime: "12 min read",
    tag: "Real Estate",
    emoji: "🏠"
  },
  {
    title: "Voice search ke liye website optimize kaise karein — Hindi guide",
    excerpt: "2026 mein log 'Type' nahi 'Talk' kar rahe hain. Jaaniye kaise apni website ko Alexa aur Google Assistant ke liye taiyar karein.",
    href: "/blog/voice-search-optimization-hindi-guide",
    readTime: "10 min read",
    tag: "SEO 2026",
    emoji: "🎙️"
  },
  {
    title: "AI chatbot apne MP business ke liye kaise banwayein",
    excerpt: "Customer support ko automate karein. Jaaniye kaise AI chatbots aapke business ke liye 24/7 sales agent ki tarah kaam kam sakte hain.",
    href: "/blog/ai-chatbot-mp-business-guide",
    readTime: "11 min read",
    tag: "AI Automation",
    emoji: "🤖"
  },
  {
    title: "WhatsApp pe online shop kaise chalayein — MP guide",
    excerpt: "Sirf status lagana kaafi nahi hai. Jaaniye kaise WhatsApp Business aur catalog ka use karke MP mein apna product pure India mein bechein.",
    href: "/blog/whatsapp-online-shop-mp-guide",
    readTime: "9 min read",
    tag: "WhatsApp Biz",
    emoji: "🛍️"
  },
  {
    title: "MP mein solar business ke liye website banana 2026",
    excerpt: "Solar subsidary aur installation requests ko online manage karein. Jaaniye kaise solar vendors ke liye website ek lead machine ban sakti hai.",
    href: "/blog/mp-solar-business-website-guide-2026",
    readTime: "13 min read",
    tag: "Green Tech",
    emoji: "☀️"
  },
  {
    title: "ChatGPT se website content kaise likhein — Hindi guide",
    excerpt: "Kya aapko content likhne mein mushkil hoti hai? Jaaniye kaise AI ki madad se apne business ke liye professional aur SEO-friendly content likhein.",
    href: "/blog/chatgpt-website-content-hindi-guide",
    readTime: "8 min read",
    tag: "AI Writing",
    emoji: "✍️"
  },
  {
    title: "MP ke hospitals ke liye online appointment system guide",
    excerpt: "Patient care ko digitize karein. Jaaniye kaise online booking se aap clinic ya hospital ki bheed kam karke service behtar bana sakte hain.",
    href: "/blog/mp-hospital-online-appointment-system-guide",
    readTime: "12 min read",
    tag: "Health Tech",
    emoji: "🏥"
  },
  {
    title: "School management software ke liye website — MP guide",
    excerpt: "Fees collection, attendance aur exams ko automate karein. Jaaniye kaise ek school website parents aur teachers ka kaam asan karti hai.",
    href: "/blog/school-management-software-website-mp-guide",
    readTime: "14 min read",
    tag: "Ed-Tech",
    emoji: "🏫"
  },
  {
    title: "MP mein electric vehicle (EV) business ke liye website",
    excerpt: "EV revolution ka hissa banein. Jaaniye kaise showroom owners aur charge-point operators website se apni sales aur visibility badha sakte hain.",
    href: "/blog/mp-ev-business-website-guide",
    readTime: "11 min read",
    tag: "EV Trend",
    emoji: "⚡"
  },
  {
    title: "Online food delivery business shuru kaise karein — MP guide",
    excerpt: "Zomato-Swiggy par munaafa kam hai? Jaaniye kaise apni khud ki delivery website banakar MP mein apna food brand scale karein.",
    href: "/blog/online-food-delivery-business-mp-guide",
    readTime: "15 min read",
    tag: "Food Tech",
    emoji: "🍕"
  },
  {
    title: "MP mein real estate website ka kharcha aur ROI",
    excerpt: "Website banana sasta hai ya mehnga? Jaaniye property business ke liye digital investment aur usse aane wale Return on Investment ki sacchai.",
    href: "/blog/mp-real-estate-website-cost-roi",
    readTime: "10 min read",
    tag: "Investment",
    emoji: "📊"
  },
  {
    title: "Dropshipping business kaise shuru karein MP se — Hindi guide",
    excerpt: "Bina inventory ke business shuru karein. Jaaniye kaise MP ke kisi bhi sheher se baithkar global ecommerce brand banayein.",
    href: "/blog/dropshipping-business-mp-hindi-guide",
    readTime: "16 min read",
    tag: "Ecom Startup",
    emoji: "📦"
  },
  {
    title: "MP ke travel agents ke liye website + booking system guide",
    excerpt: "Kanha, Pench aur Pachmarhi ke tourists ko handle karein. Jaaniye kaise online booking system se travel business automate karein.",
    href: "/blog/mp-travel-agents-website-booking-guide",
    readTime: "12 min read",
    tag: "Travel Tech",
    emoji: "✈️"
  },
  {
    title: "Drone business ke liye website — MP agriculture guide",
    excerpt: "Kisaano ki madad karein drone technology se. Jaaniye kaise drone service providers website ka use karke MP mein apna business scale kar sakte hain.",
    href: "/blog/drone-business-mp-agriculture-guide",
    readTime: "13 min read",
    tag: "Agri Tech",
    emoji: "🚁"
  },
  {
    title: "Online tuition website kaise banaye — MP teachers guide",
    excerpt: "Physics wallah banna hai? Jaaniye kaise MP ke teachers apni website aur LMS banakar hazaron students ko online padha sakte hain.",
    href: "/blog/online-tuition-website-mp-teachers-guide",
    readTime: "11 min read",
    tag: "Education",
    emoji: "🎓"
  },
  {
    title: "MP mein influencer marketing agency website kaise banaye",
    excerpt: "Indore aur Bhopal ke influencers ke saath networking karein. Jaaniye kaise ek professional agency website se brands aur creators ko connect karein.",
    href: "/blog/mp-influencer-marketing-agency-website-guide",
    readTime: "10 min read",
    tag: "Social Tech",
    emoji: "🤳"
  },
  {
    title: "MP mein YouTube channel ke saath website ka combo",
    excerpt: "Sirf views se paise nahi bante. Jaaniye kaise MP ke YouTubers apni website banakar sponsors aur product sales se 5x earning badha sakte hain.",
    href: "/blog/mp-youtube-website-combo-guide",
    readTime: "9 min read",
    tag: "Creator Economy",
    emoji: "📺"
  },
  {
    title: "Indore aur Bhopal mein AI-powered web developer kahan milega",
    excerpt: "Future-ready websites banwayein. Jaaniye kaise AI-integrated development aapke business ko competitors se aage rakhti hai.",
    href: "/blog/indore-bhopal-ai-powered-web-developer",
    readTime: "10 min read",
    tag: "AI Dev",
    emoji: "🚀"
  },
  {
    title: "SEO kya hota hai — Hindi mein beginners guide",
    excerpt: "Google search mein top par kaise aayein? Seekhiye SEO ke basic concepts bilkul aasan Hindi bhasha mein.",
    href: "/blog/seo-kya-hota-hai-hindi-guide",
    readTime: "15 min read",
    tag: "SEO Guide",
    emoji: "🔍"
  },
  {
    title: "WhatsApp Business se website traffic kaise laye",
    excerpt: "Apne WhatsApp contacts ko website visitors mein badlein. Best strategies aur features jo aapka conversion rate badha denge.",
    href: "/blog/whatsapp-business-traffic-guide",
    readTime: "12 min read",
    tag: "Marketing",
    emoji: "💬"
  }
];

export default function BlogHub() {
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
            <PenTool size={14} />
            Publishing Platforms Hub
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#202124] leading-tight mb-6">
            Blog Website <br/><span className="text-[#1a73e8]">Growth Center</span>
          </h1>
          <p className="text-xl text-[#5f6368] max-w-3xl leading-relaxed">
            Content is king. Learn how SEO-optimized blogging platforms can establish your brand authority, drive organic traffic, and generate consistent leads from Google.
          </p>
        </header>

        {/* Blog Containers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {BLOG_ARTICLES.map((blog, idx) => (
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
        <div className="bg-[#1a73e8] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl mt-32">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Want to start your own blog?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Book a free 15-minute consultation with our experts to launch an SEO-optimized publishing platform designed for massive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/916264906078?text=Hi%2C%20mujhe%20apne%20business%20ke%20liye%20blog%20website%20start%20karni%20hai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1a73e8] font-black px-10 py-5 rounded-full text-lg hover:bg-gray-50 transition-all shadow-xl"
            >
              Talk to an Expert
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
