import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft, Clock, Star, Users, Zap, Globe, ShieldCheck,
  TrendingUp, CheckCircle, AlertTriangle, MousePointer2,
  Package, ShoppingCart, Truck, CreditCard, Layout
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dropshipping Business MP Hindi Guide — 2026 Mein Ghar Se Kamai',
  description: 'Madhya Pradesh mein dropshipping business kaise shuru karein? Low investment, local supplier guide, aur 2026 ke best products ki poori jaankari Hindi mein.',
  keywords: 'dropshipping business mp hindi guide, dropshipping in madhya pradesh, ghar se business kaise kare, online business idea mp',
  openGraph: {
    title: 'Dropshipping Business MP Hindi Guide — 2026 Mein Ghar Se Kamai',
    description: 'MP mein dropshipping shuru karne ka complete road map.',
    type: 'article',
  },
};

const faqItems = [
  {
    q: 'Kya dropshipping bina paison ke shuru ho sakti hai?',
    a: 'Bilkul nahi, lekin minimal investment chahiye. Website aur marketing ke liye ₹5k-10k ka budget rakhna accha rehta hai.',
  },
  {
    q: 'MP mein best suppliers kahan milenge?',
    a: 'Indore aur Bhopal ke wholesalers se contact karein, ya IndiaMart/Roposo Cloud jaise platforms use karein.',
  },
  {
    q: 'Ghar se kitna kama sakte hain?',
    a: 'Initial phase mein ₹15k-30k profit possible hai, scale karne par monthly ₹1 Lakh+ tak ja sakta hai.',
  },
];

export default function DropshippingBusinessMPGuide() {
  return (
    <div className="bg-white min-h-screen pt-20 pb-24" style={{ fontFamily: "'Google Sans', system-ui, sans-serif" }}>
      <article className="max-w-[860px] mx-auto px-6">

        <nav className="mb-10">
          <Link href="/services/business" className="inline-flex items-center text-[#1a73e8] hover:underline text-sm font-medium">
            <ArrowLeft size={15} className="mr-1.5" /> Back to Business Hub
          </Link>
        </nav>

        <header className="mb-14">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="bg-[#fce8e6] text-[#c5221f] px-4 py-1.5 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm">Business Idea</span>
            <span className="bg-[#e8f0fe] text-[#1a73e8] px-4 py-1.5 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm">MP Special</span>
          </div>

          <div className="flex flex-wrap gap-4 text-[#5f6368] text-sm mb-7">
            <span className="flex items-center gap-1.5"><Clock size={15} /> 12 min read</span>
            <span className="flex items-center gap-1.5"><Star size={15} className="text-[#fbbc04] fill-[#fbbc04]" /> 4.4 Rating</span>
            <span className="flex items-center gap-1.5"><Users size={15} /> 3,890 Readers</span>
          </div>

          <h1 className="text-[38px] md:text-[56px] font-black text-[#202124] leading-[1.06] mb-6 tracking-tight">
            Dropshipping Business MP — {' '}
            <span className="text-[#1a73e8]">2026 Mein Ghar Se Paisa Kamane Ka Sahi Tarika</span>
          </h1>
          <p className="text-[21px] text-[#5f6368] leading-[1.75]">
            Bina warehouse aur bina stock ke apna online business shuru karein. Madhya Pradesh ke har yuva ke liye ek complete roadmap.
          </p>
        </header>

        <div className="text-[#3c4043] text-[19px] leading-[1.95] space-y-12">
          <section className="space-y-6">
            <h2 className="text-[30px] font-black text-[#202124]">Dropshipping Kya Hai?</h2>
            <p>
              Dropshipping ek aisa business model hai jahan aap products bechte hain bina unhe pehle khareede. Jab koi customer aapki website par order karta hai, tab aap supplier ko pay karte hain aur woh direct customer ko product bhej deta hai.
            </p>
          </section>

          <section className="space-y-6 border-t border-gray-100 pt-12">
            <h2 className="text-[30px] font-black text-[#202124]">MP Mein Dropshipping Kyun?</h2>
            <p>
              Indore aur Bhopal jaise cities e-commerce hubs ban rahe hain. Connectivity behtar hui hai aur local payment gateways ab local language support karte hain.
            </p>
            <div className="grid md:grid-cols-3 gap-5 mt-6">
              {[
                { icon: <Package className="text-[#1a73e8]" size={28} />, title: 'Zero Inventory', body: 'Stock rakhne ka jhanjhat khatam.' },
                { icon: <Truck className="text-[#137333]" size={28} />, title: 'Easy Shipping', body: 'Delhivery aur Shiprocket jaise partners se delivery aasan.' },
                { icon: <CreditCard className="text-[#c5221f]" size={28} />, title: 'Low Risk', body: 'Bina bikne ka darr nahi.' },
              ].map((item, i) => (
                <div key={i} className="bg-[#f8f9fa] p-7 rounded-3xl flex flex-col gap-3">
                  <div className="p-3 bg-white rounded-2xl w-fit shadow-sm">{item.icon}</div>
                  <p className="font-black text-[#202124] text-[18px]">{item.title}</p>
                  <p className="text-[15px] text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6 border-t border-gray-100 pt-12 text-center py-10">
            <p className="text-[24px] font-bold text-[#202124]">Apna Online Store Aaj Hi Setup Karein</p>
            <a 
              href="https://wa.me/916264906078?text=Hi%2C%20mujhe%20dropshipping%20business%20shuru%20karna%20hai" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#1a73e8] text-white font-black rounded-full hover:bg-[#1557b0] transition-all text-lg"
            >
              Expert Se Salah Lein <MousePointer2 size={20} />
            </a>
          </section>

          <section className="space-y-6 border-t border-gray-100 pt-12">
            <h2 className="text-[30px] font-black text-[#202124]">Aksar Pooche Jaane Wale Sawaal</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <details key={i} className="border border-gray-100 rounded-2xl group">
                  <summary className="flex justify-between items-start p-6 cursor-pointer font-black text-[18px] text-[#202124] list-none">
                    <span>{item.q}</span>
                    <span className="text-[#1a73e8]">+</span>
                  </summary>
                  <p className="px-6 pb-6 text-[16px] text-gray-500 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Dropshipping Business MP Hindi Guide',
          description: 'MP mein dropshipping shuru karne ka complete road map.',
          author: { '@type': 'Organization', name: 'Web Development AI' },
          datePublished: '2026-04-16',
          inLanguage: 'hi',
        }),
      }} />
    </div>
  );
}
