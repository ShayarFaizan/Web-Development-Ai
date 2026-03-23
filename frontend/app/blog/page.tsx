"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { 
  collection, 
  onSnapshot, 
  query, 
  orderBy,
  doc 
} from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Blog {
  id: string;
  category: string;
  title: string;
  price: string;
  description: string;
  image: string;
  link: string;
}

const INITIAL_SERVICES = [
  {
    category: "TECH GUIDE",
    title: "Why Next.js is better than WordPress for Business in 2026?",
    price: "Expert Insights",
    description:
      "Discover why high-performance businesses are moving away from WordPress to Next.js. Compare speed, SEO benefits, and long-term costs of making a website in India.",
    image: "/blog/card_nextjs_1773227401714.png",
    link: "#",
  },
  {
    category: "MARKETING",
    title: "How to create a digital visiting card for free (and when to upgrade)?",
    price: "Free Guide",
    description:
      "Learn the steps to build your personal brand. From basic profiles to smart business cards with Firebase backend integration for professional networking.",
    image: "/blog/card_nodejs_1773227418645.png",
    link: "#",
  },
  {
    category: "PRICING",
    title: "Cost of making a website in India in 2026: Hidden factors explained",
    price: "Budget Analysis",
    description:
      "Get a breakdown of development costs. Learn how to get a professional website under ₹10000 without sacrificing quality or AI features.",
    image: "/blog/card_payments_1773227435665.png",
    link: "#",
  },
  {
    category: "AI TOOLS",
    title: "Best AI tools for web development: Top picks for 2026",
    price: "Resource List",
    description:
      "Explore the ultimate AI powered website design tools. From automated coding modules to AI-driven UI generators that we use to build your faster apps.",
    image: "/blog/media__1773227184500.png",
    link: "#",
  },
];

export default function BlogPage() {
  const [services, setServices] = useState<any[]>(INITIAL_SERVICES);
  const [loading, setLoading] = useState(true);
  const [heroData, setHeroData] = useState({
    pageSubtitle: "Web Development 2026",
    pageTitle: "Next.js & Node.js Services 2026: Setting the new standard in business",
    subtitle: "Full-Stack Overview",
    title: "Comprehensive Web Solutions: Highlighting the most demanded features and prices",
    description: "At our agency, our goal has always been to build high-performance, scalable web applications that drive real business growth.",
    image: "/blog/next.js.png",
    buttonText: "Read article",
    buttonLink: "#services"
  });

  useEffect(() => {
    const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const blogsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setServices(blogsData);
      } else {
        setServices(INITIAL_SERVICES);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribeHero = onSnapshot(doc(db, "siteConfig", "blogHero"), (docSnap) => {
      if (docSnap.exists()) {
        setHeroData(docSnap.data() as any);
      }
    });

    return () => unsubscribeHero();
  }, []);

  return (
    <main className="min-h-screen bg-[#Fcfbf9] text-[#1f1f1f] font-sans pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-widest relative">
            <span className="text-black [text-shadow:2px_0px_0px_#D4AF37,-2px_0px_0px_#B8860B]">
              BLOG
            </span>
          </h1>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col items-center mb-24 cursor-pointer group">
          <div className="text-center mb-8">
            <span className="text-black font-semibold tracking-wider text-sm md:text-base uppercase">
              {heroData.pageSubtitle}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mt-4 max-w-4xl mx-auto leading-tight text-[#1f1f1f]">
              {heroData.pageTitle}
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full mt-8">
            <div className="w-full lg:w-[60%] rounded-2xl overflow-hidden shadow-sm shrink-0 bg-[#070b14]">
              <img
                src={heroData.image}
                alt="Web Development 2026 AI Services"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/blog/next.js.png";
                }}
              />
            </div>
            <div className="flex flex-col justify-center lg:w-[40%] pt-4 lg:pt-0">
              <span className="text-black font-semibold uppercase text-xs tracking-wider mb-4">
                {heroData.subtitle}
              </span>
              <h3 className="text-3xl md:text-[40px] font-normal mb-5 text-[#1f1f1f] leading-[1.15] group-hover:underline decoration-1 underline-offset-[5px] transition-all duration-300">
                {heroData.title}
              </h3>
              <p className="text-gray-600 text-[17px] mb-8 leading-[1.6]">
                {heroData.description}
              </p>
              <div className="flex items-center gap-2">
                <Link
                  href={heroData.buttonLink || "#services"}
                  className="group/btn inline-flex items-center justify-center gap-2.5 px-8 py-3 rounded-full text-black text-[15px] font-bold shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] w-fit cursor-pointer"
                  style={{
                    background: "linear-gradient(90deg, #e3bc7c, #fef1cd, #d4a75c)",
                  }}
                >
                  {heroData.buttonText}
                  <span className="flex items-center justify-center w-[18px] h-[18px] rounded-full border-[1.5px] border-black/20 transition-transform duration-300 group-hover/btn:translate-x-1">
                    <ArrowRight
                      className="w-3 h-3 text-black"
                      strokeWidth={3}
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid Section */}
        <div id="services" className="pt-8">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.id || index}
                  className="flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group cursor-pointer"
                >
                  <div className="p-8 pb-6 flex-1">
                    <span className="text-[#D4AF37] font-semibold uppercase text-xs tracking-wide">
                      {service.category}
                    </span>
                    <h4 className="text-2xl font-medium mt-4 mb-3 text-[#1f1f1f] leading-tight group-hover:text-[#D4AF37] transition-colors">
                      {service.title}
                    </h4>
                    <p className="font-semibold text-gray-900 mb-3 bg-gray-50 inline-block px-3 py-1 rounded-md text-sm border border-gray-100">
                      {service.price}
                    </p>
                    <p className="text-gray-600 text-[15px] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="relative w-full h-56 md:h-64 mt-4 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://placehold.co/600x400/eeeeee/222222?text=Web+Dev";
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
