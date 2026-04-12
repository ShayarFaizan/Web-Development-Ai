import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Target, TrendingUp, CheckCircle, MessageSquare, Clock, MousePointer2, Zap, Layers, BarChart3 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landing Page Kya Hota Hai? — Hindi Complete Guide 2026',
  description: 'Landing page aur website mein kya fark hai? Jaaniye kaise ek professional landing page aapka conversion rate 5x badha sakta hai. Storytelling + Cialdini principle based guide.',
  keywords: 'landing page kya hota hai, landing page vs website in hindi, high converting landing page raipur, digital marketing landing page bilaspur, landing page developer chhattisgarh, one page website for business hindi, landing page benefits for small business',
};

export default function LandingPageHindiGuide() {
  return (
    <div className="bg-white min-h-screen pt-20 pb-24" style={{ fontFamily: "'Google Sans', system-ui, sans-serif" }}>
      <article className="max-w-[850px] mx-auto px-6">

        {/* Back Link */}
        <nav className="mb-10">
          <Link href="/services/marketing" className="inline-flex items-center text-[#1a73e8] hover:underline text-sm font-medium">
            <ArrowLeft size={15} className="mr-1.5" /> Back to Marketing Hub
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-14">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-[#e8f0fe] text-[#1a73e8] px-4 py-1.5 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm">Digital Marketing</span>
            <span className="bg-[#fce8e6] text-[#d93025] px-4 py-1.5 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm">CONVERSION BOOSTER</span>
            <span className="text-[#5f6368] text-sm flex items-center gap-1.5">
              <Clock size={15} /> 9 min read
            </span>
          </div>
          <h1 className="text-[40px] md:text-[60px] font-black text-[#202124] leading-[1.06] mb-7 tracking-tight">
            Landing Page Kya Hota Hai? <span className="text-[#1a73e8]">Website vs Landing Page</span> — Samjho 5 Min Mein
          </h1>
          <p className="text-[21px] text-[#5f6368] leading-[1.75]">
            Manoj bhai ne ₹50,000 Ads par kharch kiye, lekin ek bhi order nahi aaya. Kyun? Kyunki unhone logon ko apni "Website" par bheja, "Landing Page" par nahi.
          </p>
        </header>

        <div className="text-[#3c4043] text-[19px] leading-[1.95] space-y-12">

          {/* === HOOK: Manoj Bhai's Story === */}
          <section className="space-y-6">
            <h2 className="text-[30px] font-black text-[#202124]">Manoj Bhai Ki Galti: ₹50,000 Ka Sabak</h2>
            <p>
              Raipur mein Manoj bhai ka ek Gym Equipment ka business hai. Unhone socha, "Google par ad chalate hain, orders aayenge." Unhone ₹50,000 spend kiye aur har ad click ko apni sundar website (manojgym.com) par bhej diya.
            </p>
            <p>
              Log aate, website par Home, About Us, Gallery, Gallery, contact dekhte, aur phir <strong className="text-[#202124]">confuse ho kar chale jaate.</strong> Manoj bhai ko laga ads bekaar hain.
            </p>
            <p>
              Phir unhone ek experiment kiya. Unhone ek single, focused <strong>Landing Page</strong> banwaya jisme sirf "Home Gym Setup" ki baat thi. Koi menu nahi, koi extra button nahi. Sirf "Benefit → Price → WhatsApp Booking."
            </p>
            <p className="italic text-[#5f6368] border-l-4 border-[#1a73e8] pl-5 py-2">
              Next month unhone wahi ₹50,000 spend kiye. Result? <strong className="text-[#202124]">14 confirm sales aur 85 leads.</strong> Manoj bhai ne samjha: Website 'Information' ke liye hoti hai, Landing Page 'Result' ke liye.
            </p>
          </section>

          {/* === RECIPROCITY === */}
          <section className="space-y-6 border-t border-gray-100 pt-10">
            <h2 className="text-[30px] font-black text-[#202124]">Website vs Landing Page: Kaun Sa Sahi Hai?</h2>
            <p>Isko ek simple example se samjhte hain jo har Chhattisgarh ka vyapari relate karega.</p>

            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <div className="p-8 bg-[#f8f9fa] rounded-[2rem] border border-gray-100 italic">
                <p className="text-[#1a73e8] font-black mb-3 uppercase tracking-wider text-xs">Website = Showroom</p>
                <p className="text-gray-600">Aapka bada showroom jahan 100 products hain. Customer aayega, ghumega, dekhega, aur shayad bina kuch liye chala jaaye kyunki options bahut hain.</p>
              </div>
              <div className="p-8 bg-[#e8f0fe] rounded-[2rem] border border-[#1a73e8]/20 italic">
                <p className="text-[#1a73e8] font-black mb-3 uppercase tracking-wider text-xs">Landing Page = Trusted Salesman</p>
                <p className="text-gray-600">Ek salesman jo customer ka haath pakad ke use sirf wahi product dikhata hai jiski use zaroorat hai, aur use "Buy Now" tak le jaata hai.</p>
              </div>
            </div>
          </section>

          {/* === SOCIAL PROOF === */}
          <section className="space-y-6 border-t border-gray-100 pt-10">
            <h2 className="text-[30px] font-black text-[#202124]">Landing Page Ki 3 Sabse Badi Powers</h2>

            <div className="space-y-6 mt-4">
              {[
                {
                  icon: <Target className="text-[#d93025]" size={28} />,
                  title: "Laser-Focused Goal",
                  body: "Landing page ka sirf EK maksad hota hai. Ya toh woh sales hogi, ya appointment, ya inquiry. Jab option kam hote hain, conversion high hota hai. Isey Hick's Law kehte hain — jitne kam choice, utna fast decision.",
                },
                {
                  icon: <BarChart3 className="text-[#1a73e8]" size={28} />,
                  title: "Highest Conversion Rate",
                  body: "Website ka average conversion rate 1-2% hota hai. Ek achhe landing page ka conversion rate 10-25% tak ja sakta hai. Matlab wahi ads ka paisa aapko 10x output deta hai.",
                },
                {
                  icon: <Zap className="text-[#fbbc04]" size={28} />,
                  title: "Lightning Fast Speed",
                  body: "Landing pages simple hote hain isliye wo mobile par palak jhapakte hi khul jaate hain. Chhattisgarh mein jahan network kabhi kabhi fluctuation karta hai, wahan speed hi client ko contact button tak pahunchati hai.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-7 border border-gray-100 rounded-3xl hover:shadow-md transition-all">
                  <div className="p-3 bg-white rounded-2xl h-fit border border-gray-100 shadow-sm flex-shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-[20px] font-black text-[#202124] mb-1">{item.title}</p>
                    <p className="text-gray-500 text-[17px] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* === COMMITMENT: Check if they need one === */}
          <section className="space-y-6 border-t border-gray-100 pt-10">
            <h2 className="text-[30px] font-black text-[#202124]">Kya Aapko Sach Mein Landing Page Chahiye?</h2>
            <p>Agar aap inme se koi bhi kaam kar rahe hain, toh sirf website se kaam nahi chalega:</p>
            <ul className="space-y-4 mt-4">
              {[
                "Aap Google Ads ya Facebook Ads chala rahe hain",
                "Aap koi specific offer (Limited Time Deal) promote kar rahe hain",
                "Aap naya product launch kar rahe hain Raipur market mein",
                "Aap high-value leads (CA, Real Estate, Interior) dhoondh rahe hain",
                "Aap chahte hain ki log turant aapko WhatsApp karein"
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <CheckCircle className="text-[#137333] mt-1 shrink-0" size={20} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* === AUTHORITY: Expert advice === */}
          <section className="bg-[#202124] text-white p-10 rounded-[2.5rem] space-y-4">
            <div className="flex items-center gap-3">
              <Layers className="text-[#1a73e8]" size={24} />
              <p className="text-xs font-black uppercase tracking-widest text-white/50">Expert Tip — 2026 Strategy</p>
            </div>
            <p className="text-[22px] font-bold leading-snug">
              "Advertisements ke liye kabhi bhi homepage ka use mat karein. Yeh paise jalane jaisa hai. Hamesha ek dedicated Landing Page ka upyog karein jiska message aapke ad se 100% match karta ho."
            </p>
            <p className="text-sm opacity-40">— Web Development AI, Raipur Lead-Gen Team</p>
          </section>

          {/* === LIKING: Relatable local businesses === */}
          <section className="space-y-6 border-t border-gray-100 pt-10">
            <h2 className="text-[30px] font-black text-[#202124]">Chhattisgarh Ke Businesses Jo Landing Page Use Kar Rahe Hain</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 border border-gray-100 rounded-3xl">
                <p className="text-sm font-black text-[#1a73e8] mb-2 uppercase">Real Estate — Bilaspur</p>
                <p className="text-[17px] leading-relaxed">Ek developer ne "3BHK Luxury Flats" ka landing page banaya. Form fill karte hi client ko brochure aur virtual tour mil gaya. 2 mahine mein 4 flats sold — direct query se.</p>
              </div>
              <div className="p-8 border border-gray-100 rounded-3xl">
                <p className="text-sm font-black text-[#1a73e8] mb-2 uppercase">Coaching — Raipur</p>
                <p className="text-[17px] leading-relaxed">"Free Demo Class" landing page. Students link par click karte, apna naam-number dete, aur turant batch timing unhe WhatsApp ho jaata. Admissions 45% badh gaye.</p>
              </div>
            </div>
          </section>

          {/* === SCARCITY === */}
          <section className="bg-[#fff8f7] border border-[#fce8e6] rounded-[2.5rem] p-10 space-y-4">
            <p className="text-[20px] font-black text-[#d93025]">⚠️ Warning: Ad Budget Waste Ho Raha Hai</p>
            <p className="text-[#a50e0e] leading-relaxed text-[17px]">
              Competition Raipur mein badh raha hai. Clicks mehenge ho rahe hain. Agar aap abhi bhi logon ko website par bhej rahe hain, toh aap unhe khone ka risk le rahe hain. Sahi waqt hai system badalne ka.
            </p>
          </section>

          {/* === CTA === */}
          <div className="bg-[#202124] rounded-[3.5rem] p-12 md:p-20 text-center text-white mt-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#1a73e8] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#d93025] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
            <p className="text-white/60 text-xs font-black uppercase tracking-[0.25em] mb-6">High Conversion Solutions</p>
            <h3 className="text-[36px] md:text-[52px] font-black mb-8 leading-tight relative z-10">
              Manoj Bhai Mat Bano <br /><span className="text-[#1a73e8]">Result-Oriented Bano</span>
            </h3>
            <p className="text-lg opacity-80 mb-12 max-w-xl mx-auto relative z-10">
              Apne current business setup ka audit karwayein. Hum aapko batayenge kya badalne ki zaroorat hai conversion badhane ke liye.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center relative z-10">
              <a
                href="https://wa.me/916264906078?text=Hi%2C%20mujhe%20apne%20ads%20ke%20liye%20high-converting%20landing%20page%20audit%20chahiye"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-[#1a73e8] text-white font-black rounded-full hover:bg-[#1557b0] transition-all shadow-xl hover:-translate-y-1 active:scale-95 text-lg"
              >
                Audit Karwayein <MousePointer2 size={20} />
              </a>
              <Link
                href="/services/business"
                className="inline-flex items-center justify-center gap-3 px-12 py-5 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all text-lg"
              >
                Aur Case Studies
              </Link>
            </div>
            <div className="flex justify-center gap-10 mt-14 pt-10 border-t border-white/10 relative z-10">
              {[["10-25%", "Conversion Rate"], ["10x", "Ad ROI Booster"], ["24/7", "Lead Gen Automation"]].map(([num, label]) => (
                <div key={label} className="text-center">
                  <p className="text-3xl font-black text-white">{num}</p>
                  <p className="text-sm text-white/40 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </article>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Landing Page Kya Hota Hai? — Hindi Complete Guide 2026",
            "description": "Jaaniye landing page aur website mein kya fark hai aur Manoj bhai ki story se seekhiye kaise ads budget bachayein.",
            "author": { "@type": "Organization", "name": "Web Development AI" },
            "datePublished": "2026-04-12",
            "publisher": { "@type": "Organization", "name": "Web Development AI" },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://webdevelopmentai.in/blog/landing-page-kya-hota-hai-hindi-guide" }
          })
        }}
      />
    </div>
  );
}
