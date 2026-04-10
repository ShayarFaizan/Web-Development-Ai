import React from "react";
import Link from "next/link";
import { CheckCircle, Zap, Shield, MapPin, ArrowRight, Laptop, Globe, Smartphone, Code } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Website Developer in Raipur | AI-Powered | Web Development AI",
  description: "Raipur ka Best Website Developer — Next.js, Fast Delivery. Website banwana Raipur mein sabse aasan. We serve Shankar Nagar, Pandri, Telibandha, and VIP Road.",
  keywords: "website developer in raipur, website development company in raipur, website development in raipur, web development company Raipur, website banwana Raipur, Next.js developer Raipur, affordable website Raipur Chhattisgarh, website development cost Raipur 2026",
};

const SERVICES = [
  { icon: <Laptop size={32} className="mb-4 text-blue-500" />, title: "Business Websites", desc: "Corporate sites for Raipur businesses." },
  { icon: <Globe size={32} className="mb-4 text-green-500" />, title: "Ecommerce Stores", desc: "Sell online with UPI and Razorpay integration." },
  { icon: <Smartphone size={32} className="mb-4 text-purple-500" />, title: "Landing Pages", desc: "High-converting single pages for ads." },
  { icon: <Code size={32} className="mb-4 text-red-500" />, title: "Custom Web Apps", desc: "Advanced Next.js powered applications." }
];

const PACKAGES = [
  {
    name: "Starter Business",
    price: "₹9,999",
    features: ["Domain & Hosting (1 Yr)", "Mobile Responsive", "Basic SEO Setup", "Contact Form", "WhatsApp Button", "SSL Certificate"],
    badge: "BASIC",
    color: "border-blue-500 bg-blue-50",
    badgeColor: "bg-blue-500",
  },
  {
    name: "Premium Corporate",
    price: "₹24,999",
    features: ["Custom UI/UX Design", "Advanced SEO Setup", "CMS & Admin Panel", "Fast Loading (Next.js)", "6 Months Free Support", "Premium Animations"],
    badge: "POPULAR",
    color: "border-green-500 bg-green-50",
    badgeColor: "bg-green-500",
  },
  {
    name: "Ecommerce Store",
    price: "₹48,999",
    features: ["Payment Gateway Setup", "Admin Dashboard", "Order Tracking", "Up to 50 Products", "Advanced SEO", "WhatsApp Order Flow"],
    badge: "BESTSELLER",
    color: "border-purple-500 bg-purple-50",
    badgeColor: "bg-purple-600",
  },
];

export default function RaipurServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website Development in Raipur",
    provider: {
      "@type": "ProfessionalService",
      name: "Web Development AI",
      url: "https://webdevelopmentai.in",
      telephone: "+91 62649 06078",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Raipur",
        addressRegion: "Chhattisgarh",
        addressCountry: "IN",
      },
    },
    description: "Raipur ka Best Website Developer — Next.js, Fast Delivery. Web development company Raipur specializing in modern business websites and ecommerce.",
    areaServed: "Raipur, Chhattisgarh, India",
    serviceType: [
      "website developer in raipur",
      "website development company in raipur",
      "website development in raipur",
      "web development company Raipur", 
      "website banwana Raipur",
      "Next.js developer Raipur",
      "affordable website Raipur Chhattisgarh",
      "website development cost Raipur 2026"
    ],
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans pt-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-white border-b border-[#e0e0e0]">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-blue-200">
            <Zap size={16} />
            Website Developer in Raipur
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#202124] leading-tight mb-6">
            Expert <span className="text-blue-600">website developer in Raipur</span> — Next.js, Fast Delivery
          </h1>
          <p className="text-xl text-[#5f6368] leading-relaxed max-w-3xl mx-auto mb-8">
            Hum Raipur mein businesses ko serve karte hain, delivering an <strong className="text-[#202124]">affordable website Raipur Chhattisgarh</strong> market ke liye. Agar aapko <strong className="text-[#202124]">website banwana Raipur</strong> mein hai, toh ab ye sabse aasan aur fast hai. Ek top-rated <strong className="text-[#202124]">web development company Raipur</strong> hone ke naate, hum ek professional <strong className="text-[#202124]">Next.js developer Raipur</strong> ki advanced services provide karte hain.
            <br/><br/>
            Log aksar puchte hain <strong className="text-[#202124]">website development cost Raipur 2026</strong> kya hai? Hamare premium Next.js packages sirf ₹9,999 se shuru hote hain. Hum <strong className="text-[#202124]">Shankar Nagar, Pandri, Telibandha, aur VIP Road</strong> sahit poore Raipur mein modern solutions de rahe hain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/916264906078?text=Hi%2C%20mujhe%20Raipur%20mein%20website%20banwani%20hai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all shadow-lg hover:shadow-green-200"
            >
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </a>
            <Link
              href="/plans"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#1a73e8] text-[#1a73e8] hover:bg-[#1a73e8] hover:text-white font-bold px-8 py-4 rounded-full text-lg transition-all"
            >
              Consult Now <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-black text-[#202124] mb-8 text-center">Top Web Development Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-[#e0e0e0] shadow-sm hover:shadow-md transition-all text-center">
              <div className="flex justify-center">{s.icon}</div>
              <h3 className="font-bold text-[#202124] text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-[#5f6368]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border-y border-[#e0e0e0] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[#202124] mb-3 text-center">
            Pricings Built for Raipur Markets
          </h2>
          <p className="text-center text-[#5f6368] mb-10 max-w-2xl mx-auto">Modern aur fast website banwana Raipur ki requirements ko dhyan mein rakh ke. Best ROI guaranteed.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACKAGES.map((pkg, i) => (
              <div key={i} className={`rounded-3xl p-8 border-2 relative flex flex-col ${pkg.color}`}>
                <span className={`absolute -top-3 left-6 text-white text-xs font-bold px-3 py-1 rounded-full ${pkg.badgeColor}`}>
                  {pkg.badge}
                </span>
                <h3 className="font-black text-[#202124] text-2xl mt-2 mb-1">{pkg.name}</h3>
                <div className="text-3xl font-black text-blue-600 mb-6">{pkg.price}</div>
                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-[#202124]">
                      <CheckCircle size={18} className="text-green-500 shrink-0 mt-0.5" />
                      <span className="leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/916264906078?text=Hi%2C%20mujhe%20Raipur%20mein%20${pkg.name}%20website%20banwani%20hai`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#202124] text-white font-bold py-4 rounded-xl hover:bg-black transition-all"
                >
                  Get Started →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-linear-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-20 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-yellow-400 mb-6">
            <MapPin size={24} />
            <span className="text-base font-bold tracking-wider uppercase">Serving Raipur & Beyond</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Raipur ke premium businesses ki choice!
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Agar aap apni brand ko online bada banana chahte hain, <strong className="text-white">website banwana Raipur</strong> mein itna asaan kabhi nahi tha. Tell us your goals today!
          </p>
          <a
            href="https://wa.me/916264906078?text=Hi%2C%20mujhe%20Raipur%20mein%20website%20ki%20requirement%20hai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-black px-10 py-5 rounded-full text-xl transition-all shadow-xl hover:shadow-green-900/40"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Text on WhatsApp
          </a>
        </div>
      </div>
      {/* Featured Blog Section */}
      <div className="bg-[#f8f9fa] pt-16 pb-24 flex flex-col items-start border-t border-[#e0e0e0] overflow-hidden" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-8 lg:gap-10">
          
          {/* Left Column */}
          <div className="lg:w-[220px] xl:w-[260px] shrink-0 flex flex-col items-start pt-[2px]">
            <h2 className="text-[32px] font-bold text-[#202124] tracking-tight mb-5 leading-none">
              Chhattisgarh
            </h2>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 border border-[#dadce0] bg-white text-[#1a73e8] font-medium text-[14px] px-[15px] py-[7px] rounded hover:bg-[#f8f9fa] transition-colors"
            >
              See posts <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
          
          {/* Right Column (Scrollable Cards) */}
          <div className="flex-1 w-full flex gap-6 overflow-x-auto pb-8 snap-x hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            
            {/* Card 1: Primary Yellow */}
            <Link href="/blog/website-banane-ka-kharcha-raipur-2026" className="flex flex-col group min-w-[316px] w-[316px] snap-start">
              <h3 className="text-[16px] font-medium text-[#174ea6] leading-[24px] mb-6 h-[72px] pr-2 hover:underline">
                Website banwane ka kharcha Raipur mein 2026: The Ultimate Price Guide
              </h3>
              <div className="bg-[#fef7e0] rounded-[16px] flex flex-col items-center justify-center h-[210px] w-full relative">
                 <div className="font-bold text-[18px] text-[#6a4e23] flex items-center gap-2">
                   🤖 Raipur 2026
                 </div>
              </div>
            </Link>
            
            {/* Card 2: Light Gray box with Pill */}
            <Link href="/blog/top-5-web-development-companies-raipur" className="flex flex-col group min-w-[316px] w-[316px] snap-start">
               <h3 className="text-[16px] font-medium text-[#174ea6] leading-[24px] mb-6 h-[72px] pr-2 hover:underline">
                 Top 5 Web Development Companies in Raipur — Honest Comparison
               </h3>
               <div className="bg-white border border-[#dadce0] rounded-[16px] flex flex-col items-center justify-center h-[210px] w-full relative">
                 <div className="border border-[#dadce0] rounded-full text-[#5f6368] font-medium bg-white px-3 py-1 flex items-center text-[13px] shadow-sm">
                   Raipur Rankings
                 </div>
               </div>
            </Link>

            {/* Card 3: Black Box with scroll arrow */}
            <Link href="/blog/why-website-important-raipur-business" className="flex flex-col group min-w-[316px] w-[316px] snap-start relative">
               <h3 className="text-[16px] font-medium text-[#174ea6] leading-[24px] mb-6 h-[72px] pr-2 hover:underline">
                 Raipur ke local business ke liye website kyu zaroori hai (2026)
               </h3>
               <div className="bg-black rounded-[16px] flex flex-col items-center justify-center h-[210px] w-full relative">
                 <div className="font-bold text-[24px] text-white tracking-tight flex items-center gap-2">
                   tech ❤️
                 </div>
                 
                 {/* Right edge decorative arrow button mimicking the exact UI */}
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[44px] h-[44px] bg-white border border-[#dadce0] rounded-full flex items-center justify-center shadow-[0_2px_4px_rgba(0,0,0,0.1)] z-10 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5f6368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                 </div>
               </div>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
