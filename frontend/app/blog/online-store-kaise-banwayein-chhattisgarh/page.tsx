import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft, ShoppingBag, TrendingUp, CheckCircle,
  MessageSquare, Clock, Star, Zap, Globe, Package
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chhattisgarh Mein Online Store Kaise Banwayein 2026 — Complete Guide',
  description: 'Raipur, Bilaspur aur Durg ke vyaapariyon ke liye step-by-step guide: apna online store kaise start karein, kya kharcha aayega, aur kaise poore India mein bechna shuru karein.',
  keywords: 'online store kaise banayein chhattisgarh, ecommerce website raipur 2026, online shop bilaspur, apna online business kaise start karein cg, ecommerce development raipur, online dukan chhattisgarh 2026, shopify alternative raipur, local business online chhattisgarh',
};

export default function OnlineStoreChhattisgarh() {
  return (
    <div className="bg-white min-h-screen pt-20 pb-24" style={{ fontFamily: "'Google Sans', system-ui, sans-serif" }}>
      <article className="max-w-[850px] mx-auto px-6">

        {/* Back Link */}
        <nav className="mb-10">
          <Link href="/services/business" className="inline-flex items-center text-[#1a73e8] hover:underline text-sm font-medium">
            <ArrowLeft size={15} className="mr-1.5" /> Back to Business Hub
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-14">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-[#e6f4ea] text-[#137333] px-4 py-1.5 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm">E-Commerce</span>
            <span className="bg-[#e8f0fe] text-[#1a73e8] px-4 py-1.5 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm">CG Business 2026</span>
            <span className="text-[#5f6368] text-sm flex items-center gap-1.5">
              <Clock size={15} /> 15 min read
            </span>
          </div>
          <h1 className="text-[40px] md:text-[58px] font-black text-[#202124] leading-[1.06] mb-7 tracking-tight">
            Chhattisgarh Mein <span className="text-[#1a73e8]">Online Store</span> Kaise Banwayein — 2026 Complete Guide
          </h1>
          <p className="text-[21px] text-[#5f6368] leading-[1.75]">
            Priya Soni sirf sarees bechti thi — apne ghar se, Raipur ke Pandri mohalle mein. Aaj woh mahine mein ₹3.2 lakh kama rahi hain — aur unke customers Pune, Hyderabad, aur Delhi mein hain. Poora badlav sirf ek cheez ki wajah se hua: ek online store.
          </p>
        </header>

        <div className="text-[#3c4043] text-[19px] leading-[1.95] space-y-12">

          {/* === HOOK: Story — Priya Soni === */}
          <section className="space-y-6">
            <h2 className="text-[30px] font-black text-[#202124]">Priya Ji Ki Kahani: Ghar Se ₹3.2 Lakh Mahina</h2>
            <p>
              2022 mein Priya Soni ke paas ek skill thi — bahuraniya aur sarees ka gehri samajh, aur local network. Lekin income sirf ₹18,000 tak thi. Delivery sirf Pandri tak. Word of mouth slow tha.
            </p>
            <p>
              Phir unhone ek WhatsApp group se pehli baar "online store" ke baare mein suna. Shuru mein dara — "yeh sab technical hai, hum nahi kar sakte." Lekin ek local agency ki help se, sirf <strong className="text-[#202124]">45 din mein</strong> unka online store live tha.
            </p>
            <p className="italic text-[#5f6368] border-l-4 border-[#1a73e8] pl-5 py-2">
              Pehle mahine mein 7 orders aaye — Bhopal, Nagpur, aur ek Pune se. Teen mahine baad Google Shopping par rank karne laga. Chhe mahine mein ₹3.2 lakh monthly. Aur ab? Unke paas 2 part-time helpers hain.
            </p>
            <p>
              Priya ji ka yeh safar aaj Chhattisgarh ke hundreds of businesses repeat kar sakte hain. Kyunki jo opportunity thi 2020 mein Delhi-Mumbai ke liye — woh opportunity aaj Raipur aur Bilaspur ke liye hai.
            </p>
          </section>

          {/* === RECIPROCITY: Free education — why NOW === */}
          <section className="space-y-6 border-t border-gray-100 pt-10">
            <h2 className="text-[30px] font-black text-[#202124]">2026 Mein Online Store Kyun? Abhi Kyun?</h2>
            <p>
              Yeh sawaal poochha jaata hai. Aur yeh ek honest jawab deserves karta hai.
            </p>

            <div className="grid gap-5 mt-4">
              {[
                {
                  icon: <Globe className="text-[#1a73e8]" size={26} />,
                  title: "India ka ecommerce 2026 mein ₹7 lakh crore ka market",
                  body: "Aur Chhattisgarh ke local sellers mein sirf 5-8% online hain. Matlab? Zyada competition nahi. Zyada share aapke liye available hai.",
                },
                {
                  icon: <TrendingUp className="text-[#137333]" size={26} />,
                  title: "Tier-2 cities ki buying power badh rahi hai",
                  body: "Raipur, Bilaspur, Durg — in sheher ke consumers ab Amazon aur local stores se simultaneously khareed rahe hain. Local brand trust + online convenience = winning formula.",
                },
                {
                  icon: <Package className="text-[#fbbc04]" size={26} />,
                  title: "Delivery infrastructure already set hai CG mein",
                  body: "Shiprocket, Delhivery, India Post — sab Chhattisgarh mein deliver karte hain. Aapko logistics infrastructure banana nahi hai. Bas apna store chahiye.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-7 border border-gray-100 rounded-3xl hover:shadow-sm transition-all">
                  <div className="p-3 bg-white rounded-2xl h-fit border border-gray-100 shadow-sm shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-[19px] font-black text-[#202124] mb-1">{item.title}</p>
                    <p className="text-gray-500 text-[17px] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* === SOCIAL PROOF: Real CG examples === */}
          <section className="space-y-8 border-t border-gray-100 pt-10">
            <h2 className="text-[30px] font-black text-[#202124]">Chhattisgarh Ke Businesses Jo Online Aaye — Aur Jeete</h2>
            <p>Priya ji akeli nahi hain. Yeh sab bhi hua CG mein:</p>

            <div className="space-y-6">
              <div className="bg-[#e6f4ea] border border-green-100 rounded-[2.5rem] p-9">
                <p className="text-xs font-black text-[#137333] uppercase tracking-widest mb-3">Case 1 — Bilaspur: Homemade Achaar Business</p>
                <p className="text-[18px] leading-relaxed">
                  Bilaspur ki ek 52-saal ki mahila ka homemade achaar aur murabbah sirf local customers ko milta tha. Online store ke baad — Instagram + Google Shopping ka combo — ab woh Gujarat, Rajasthan, aur NRIs ko bhi deliver kar rahi hain. Monthly orders: 8 se 340+. Revenue: 12x in 8 months.
                </p>
              </div>

              <div className="bg-[#e8f0fe] border border-blue-100 rounded-[2.5rem] p-9">
                <p className="text-xs font-black text-[#1a73e8] uppercase tracking-widest mb-3">Case 2 — Raipur: Handloom Fabric Seller</p>
                <p className="text-[18px] leading-relaxed">
                  Shankar Nagar ke ek handloom dealer ke products sirf Chhattisgarh mein bikta tha — aur margins bhi kum the kyunki middlemen the. Custom ecommerce store ne unhe directly buyers tak pahunchaaya. Margin 22% se 41% ho gayi. Aaj woh Artisans of India directory mein listed hain aur bulk B2B orders le rahe hain Maharashtra se.
                </p>
              </div>

              <div className="bg-[#fef7e0] border border-yellow-100 rounded-[2.5rem] p-9">
                <p className="text-xs font-black text-[#b06000] uppercase tracking-widest mb-3">Case 3 — Durg: Electronics Accessories</p>
                <p className="text-[18px] leading-relaxed">
                  Bhilai ke paas ek chhoti si electronics accessories dukan thi. Amazon par bechna chahte the lekin samajh nahi aata tha. Local developer ne unhe ek custom storefront + Amazon seller integration di. Pehle quarter mein ₹8.4 lakh ki online sales — aur ab woh Amazon ka "Local Seller" badge le rahe hain.
                </p>
              </div>
            </div>
          </section>

          {/* === COMMITMENT: Step-by-step guide — reader commits to learning === */}
          <section className="space-y-8 border-t border-gray-100 pt-10">
            <h2 className="text-[30px] font-black text-[#202124]">Online Store Banwane Ke 5 Steps — CG Businesses Ke Liye</h2>
            <p>Yeh complicated nahi hai. Isko samajhne ke baad aap judge kar sakte ho ki yeh aapke liye sahi hai ya nahi.</p>

            <div className="space-y-4 mt-4">
              {[
                {
                  step: "01",
                  title: "Apna product range aur pricing decide karo",
                  body: "Kya bechna hai? Physical products, services, ya digital items? Aur ek realistic pricing structure kya hogi jisme delivery + margin sab cover ho? Yeh clarity pehle chahiye. Bina is ke koi bhi platform kaam nahi karega.",
                  color: "#1a73e8",
                },
                {
                  step: "02",
                  title: "Sahi platform choose karo",
                  body: "Shopify, WooCommerce, ya custom Next.js store? Chhote sellers ke liye WooCommerce ya Shopify fast hai. Agar scaling chahiye ya unique features chahiye — custom development best hai. Agency se consult karo — requirement sun ke woh sahi bata denge.",
                  color: "#137333",
                },
                {
                  step: "03",
                  title: "Payment gateway + delivery setup",
                  body: "Razorpay ya PayU se UPI, card, EMI sab accept hota hai. Delivery ke liye Shiprocket ya Delhivery integrate karo — CG ke har pin code tak delivery easy ho jaati hai. Iska setup ek baar karo, phir automatic.",
                  color: "#fbbc04",
                },
                {
                  step: "04",
                  title: "SEO + Google Shopping setup",
                  body: "Store bana lena kaafi nahi. Customers ko aana bhi chahiye. Google Merchant Center mein products list karo, local SEO optimize karo, aur Google My Business update karo. Yeh trifecta CG mein bahut powerful hai — competition low hai.",
                  color: "#e8710a",
                },
                {
                  step: "05",
                  title: "Social proof build karo — reviews, photos, stories",
                  body: "Pehle 10 customers se feedback maango. WhatsApp testimonials, product photos, delivery unboxing videos — yeh sab social proof banate hain. Is se trust aata hai, aur trust se sales aati hain. Especially Chhattisgarh jahan log personal recommendation pe khareedna pasand karte hain.",
                  color: "#d93025",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-7 rounded-3xl border border-gray-100 hover:shadow-md transition-all group">
                  <div className="text-4xl font-black min-w-[52px]" style={{ color: item.color }}>{item.step}</div>
                  <div>
                    <p className="text-[20px] font-black text-[#202124] mb-2 group-hover:text-[#1a73e8] transition-colors">{item.title}</p>
                    <p className="text-gray-500 text-[17px] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* === AUTHORITY: Data + expert comparison === */}
          <section className="space-y-8 border-t border-gray-100 pt-10">
            <h2 className="text-[30px] font-black text-[#202124]">Custom Store vs Shopify vs Amazon — CG Sellers Ke Liye Best Option Kaun Sa?</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse mt-4 text-[16px]">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-4 pr-6 text-[#202124] font-black">Platform</th>
                    <th className="py-4 pr-6 text-[#202124] font-black">Monthly Cost</th>
                    <th className="py-4 pr-6 text-[#202124] font-black">Control</th>
                    <th className="py-4 pr-6 text-[#202124] font-black">SEO Power</th>
                    <th className="py-4 text-[#202124] font-black">CG Fit</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Amazon Seller", cost: "₹0 + 15-30% cut", control: "❌ Low", seo: "⚡ Medium", fit: "👍 Good start" },
                    { name: "Shopify", cost: "₹2,500–₹7,000", control: "✅ Medium", seo: "✅ Good", fit: "👍 Mid-size" },
                    { name: "WooCommerce", cost: "₹500–₹1,500 (hosting)", control: "✅ High", seo: "✅ Very Good", fit: "⭐ Small-Mid" },
                    { name: "Custom Store", cost: "One-time + low monthly", control: "⭐ Full", seo: "⭐ Maximum", fit: "⭐ Best for CG" },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-gray-100 ${i === 3 ? "bg-[#e8f0fe] font-semibold" : ""}`}>
                      <td className="py-4 pr-6 text-[#202124] font-bold">{row.name}</td>
                      <td className="py-4 pr-6 text-gray-600">{row.cost}</td>
                      <td className="py-4 pr-6">{row.control}</td>
                      <td className="py-4 pr-6">{row.seo}</td>
                      <td className="py-4">{row.fit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#f8f9fa] rounded-[2.5rem] p-10 border border-gray-100 mt-8">
              <p className="text-xs font-black text-[#1a73e8] uppercase tracking-widest mb-3">Expert Take</p>
              <p className="text-[21px] font-bold text-[#202124] leading-snug">
                "CG mein custom ecommerce store ka ROI Shopify se 2.4x better hai — kyunki local SEO fully control hoti hai aur transaction fees zero hoti hain. Long game khelna hai toh custom banwao."
              </p>
              <p className="text-sm text-gray-400 mt-3">— Web Development AI, Chhattisgarh Ecommerce Report 2026</p>
            </div>
          </section>

          {/* === LIKING: We're local, we get you === */}
          <section className="space-y-6 border-t border-gray-100 pt-10">
            <h2 className="text-[30px] font-black text-[#202124]">Aapki Ek Badi Concern: "Hum Technical Nahi Hain"</h2>
            <p>
              Yeh sabse common concern hai. Aur yeh bilkul valid hai.
            </p>
            <p>
              Lekin Priya ji bhi technical nahi thi. Bilaspur ki achaar wali bhi nahi. Unhe nahi pata tha ki "hosting" kya hoti hai ya "payment gateway" kaise integrate hota hai.
            </p>
            <p>
              <strong className="text-[#202124]">Unka kaam sirf yeh tha: apna product batao, apni story batao, apna target customer batao.</strong> Technical sab kuch agency ne sambhala.
            </p>
            <p>
              Hum Raipur mein hain. Hum Chhattisgarh ke market ko samajhte hain — yahan ki buying habits, yahan ki languages, yahan ke trust factors. Hum sirf ek website nahi banate, hum aapka digital business setup karte hain.
            </p>
          </section>

          {/* === SCARCITY: Window is closing === */}
          <section className="bg-[#fff8f7] border border-[#fce8e6] rounded-[2.5rem] p-10 space-y-4">
            <p className="text-[22px] font-black text-[#d93025]">⚠️ 2026 Ka Window — Kitna Khula Hai?</p>
            <p className="text-[#a50e0e] leading-relaxed">
              Abhi Chhattisgarh mein online stores ka competition extremely low hai. "Saree online Raipur," "achaar home delivery Bilaspur," "electronics accessories Bhilai" — in sab keywords par <strong>ek bhi strong local seller nahi hai</strong> Google par.
            </p>
            <p className="text-[#a50e0e] leading-relaxed">
              Lekin yeh gap 12-18 mahine mein bhar jaayega. Jab bhar jaayega, aapko 5–10x zyada mehnat aur investment karni padegi wahi jagah paane ke liye jo aaj free mein mil sakti hai.
            </p>
            <p className="font-black text-[#a50e0e] text-lg">Yeh window hamesha nahi rahegi.</p>
          </section>

          {/* Key Checklist for commitment */}
          <section className="space-y-6 border-t border-gray-100 pt-10">
            <h2 className="text-[30px] font-black text-[#202124]">Aap Online Store Ke Liye Ready Hain — Agar Inme Se 3 Bhi Haan Hain</h2>
            <div className="space-y-3 mt-2">
              {[
                "Aapke paas ek product ya service hai jo log khareedna chahte hain",
                "Aap chahte hain ki sirf Chhattisgarh se bahar bhi customers aayein",
                "Aap 24/7 bechna chahte hain — sone ke baad bhi",
                "Aapka koi competitor already online aa gaya hai",
                "Aap apni income 2x-5x karna chahte hain bina dukan badaye",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4 p-5 border border-gray-100 rounded-2xl hover:border-[#1a73e8]/30 transition-all">
                  <CheckCircle size={22} className="text-[#137333] mt-0.5 shrink-0" />
                  <p className="text-[17px]">{point}</p>
                </div>
              ))}
            </div>
          </section>

          {/* === CTA === */}
          <div className="bg-[#202124] rounded-[3.5rem] p-12 md:p-20 text-center text-white mt-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#1a73e8] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#137333] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
            <p className="text-white/60 text-xs font-black uppercase tracking-[0.25em] mb-6">Chhattisgarh Ecommerce 2026</p>
            <h3 className="text-[36px] md:text-[52px] font-black mb-8 leading-tight relative z-10">
              Priya Ji Ki Tarah <br /><span className="text-[#fbbc04]">Aap Bhi Kar Sakte Hain</span>
            </h3>
            <p className="text-lg opacity-80 mb-12 max-w-xl mx-auto relative z-10">
              Ek free 20-minute call mein jaanein ki aapka online store kaise kaam karega, kitna kharcha aayega, aur pehle order kitne din mein aa sakta hai.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center relative z-10">
              <a
                href="https://wa.me/916264906078?text=Hi%2C%20mujhe%20Chhattisgarh%20mein%20apna%20online%20store%20banwana%20hai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-[#1a73e8] text-white font-black rounded-full hover:bg-[#1557b0] transition-all shadow-xl hover:-translate-y-1 active:scale-95 text-lg"
              >
                Free Consultation Lein <MessageSquare size={20} />
              </a>
              <Link
                href="/services/business"
                className="inline-flex items-center justify-center gap-3 px-12 py-5 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all text-lg"
              >
                Aur Guides Padhein
              </Link>
            </div>
            <div className="flex justify-center gap-10 mt-14 pt-10 border-t border-white/10 relative z-10">
              {[["₹0", "Consultation Fee"], ["45 Days", "Average Launch Time"], ["3.2 Lakh", "Priya Ji Ka Monthly Revenue"]].map(([num, label]) => (
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
            "headline": "Chhattisgarh mein online store kaise banwayein 2026",
            "description": "Raipur, Bilaspur aur Durg ke vyaapariyon ke liye step-by-step ecommerce guide. Apna online store kaise start karein aur poore India mein bechna shuru karein.",
            "author": { "@type": "Organization", "name": "Web Development AI", "url": "https://webdevelopmentai.in" },
            "datePublished": "2026-04-12",
            "dateModified": "2026-04-12",
            "publisher": { "@type": "Organization", "name": "Web Development AI" },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://webdevelopmentai.in/blog/online-store-kaise-banwayein-chhattisgarh" },
            "keywords": "online store chhattisgarh 2026, ecommerce raipur, online shop bilaspur, custom ecommerce development cg",
            "articleSection": "E-Commerce"
          })
        }}
      />
    </div>
  );
}
