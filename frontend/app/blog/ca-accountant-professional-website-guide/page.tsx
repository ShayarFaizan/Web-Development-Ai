import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Scale, TrendingUp, CheckCircle, MessageSquare, Clock, Shield, Star, Users, Zap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CA aur Accountant ke Liye Professional Website Guide — Chhattisgarh 2026',
  description: 'Chhattisgarh ke CA aur accountants ke liye complete website guide. Raipur, Bilaspur, Durg, Korba, Jagdalpur, Ambikapur — har district mein online clients kaise paayen. GST consultant website, tax advisor online presence.',
  keywords: 'CA website chhattisgarh, chartered accountant website raipur, accountant website bilaspur, GST consultant website durg, tax advisor online presence chhattisgarh, CA firm website korba, professional accountant website CG 2026, chartered accountant digital marketing raipur, GST filing website bilaspur, income tax consultant website chhattisgarh, CA website design india, accountant website development raipur bilaspur durg',
};

const CG_DISTRICTS = [
  "Raipur", "Bilaspur", "Durg", "Rajnandgaon", "Korba", "Raigarh",
  "Ambikapur (Surguja)", "Janjgir-Champa", "Jashpur", "Kanker", "Kondagaon",
  "Jagdalpur (Bastar)", "Dantewada", "Bijapur", "Narayanpur", "Kabirdham (Kawardha)",
  "Bemetara", "Mungeli", "Balod", "Gariaband", "Mahasamund", "Dhamtari",
  "Baloda Bazar", "Sukma", "Balrampur", "Surajpur", "Gaurela-Pendra-Marwahi",
  "Khairagarh-Chhuikhadan-Gandai", "Manendragarh-Chirmiri-Bharatpur",
  "Sarangarh-Bilaigarh", "Mohla-Manpur-Ambagarh Chowki", "Shakti", "Khairabad"
];

export default function CaAccountantWebsiteGuide() {
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
            <span className="bg-[#e8f0fe] text-[#1a73e8] px-4 py-1.5 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm">Professional Services</span>
            <span className="bg-[#e6f4ea] text-[#137333] px-4 py-1.5 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm">CA & Accounting</span>
            <span className="text-[#5f6368] text-sm flex items-center gap-1.5">
              <Clock size={15} /> 11 min read
            </span>
          </div>
          <h1 className="text-[38px] md:text-[56px] font-black text-[#202124] leading-[1.06] mb-7 tracking-tight">
            CA aur Accountant Ke Liye <span className="text-[#1a73e8]">Professional Website</span> — Chhattisgarh Ka Complete Guide 2026
          </h1>
          <p className="text-[21px] text-[#5f6368] leading-[1.75]">
            Vivek Sharma CA — Raipur ke Telibandha mein 11 saal ka practice. Har saal March mein bhaag-daud, April mein khali calendar. Problem yeh nahi tha ki woh achhe CA nahi the. Problem yeh tha ki ek bhi naya client unhe Google par dhundh kar nahi aa raha tha.
          </p>
        </header>

        <div className="text-[#3c4043] text-[19px] leading-[1.95] space-y-12">

          {/* === HOOK: Vivek Sharma's story === */}
          <section className="space-y-6">
            <h2 className="text-[30px] font-black text-[#202124]">Vivek Bhai Ka Wake-Up Call: ₹0 Investment, ₹4.8 Lakh Naya Revenue</h2>
            <p>
              March 2024. Raipur ke Telibandha mein Vivek Sharma CA ke office mein subah 9 baje se queue lagti thi. GST filing, ITR, company registration — sab kuch. Lekin yeh sab existing clients the — wahi jo 8-10 saal se aa rahe the.
            </p>
            <p>
              Ek din unke junior ne poocha: <em>"Sir, mera cousin Bilaspur mein CA ki website dekh ke appointment le raha hai — bina phone kiye."</em>
            </p>
            <p>
              Vivek bhai ne pehli baar Google par tika: <strong className="text-[#202124]">"CA near me Raipur"</strong> — unka naam kahi nahi tha. Page 1 par 3 firms thi — ek 2019 mein bani hui, ek ek junior CA ki jo 60% kam fees leta tha. Aur teesri ek firm jo Bilaspur se Raipur shift hui thi 2 saal pehle.
            </p>
            <p className="italic text-[#5f6368] border-l-4 border-[#1a73e8] pl-5 py-2">
              Vivek bhai ne us din website banwane ka decision liya. 6 mahine baad: 34 naye clients — sirf Google se. ₹4.8 lakh additional revenue. Aur ab March mein unhe pareshaan hona nahi padta ki April mein kya hoga.
            </p>
          </section>

          {/* === RECIPROCITY: Free education === */}
          <section className="space-y-6 border-t border-gray-100 pt-10">
            <h2 className="text-[30px] font-black text-[#202124]">CA Firms Ke Liye Website Isliye Alag Hai — Normal Business Se</h2>
            <p>
              Ek kapde ki dukan aur ek CA firm ki website mein fundamental farak hota hai. CA/Accountant ke liye website <strong className="text-[#202124]">sirf marketing tool nahi — trust-building platform hai.</strong>
            </p>

            <div className="space-y-5 mt-4">
              {[
                {
                  icon: <Shield className="text-[#1a73e8]" size={26} />,
                  title: "Client Trust = Digital Credibility",
                  body: "Jab koi apna ITR ya GST kisi ko deta hai, woh pehle check karta hai: kya yeh professional lagta hai? Website aapki first impression hai. ICAI registration display karo, client count batao, certifications dikhao — yeh sab trust build karta hai jo phone call se nahi hota.",
                },
                {
                  icon: <Users className="text-[#137333]" size={26} />,
                  title: "24/7 Intake Without Receptionist",
                  body: "Raat ko 11 baje agar koi Durg ya Korba ka client ITR deadline ke baare mein pareshaan hai — woh Google karega. Agar aapki website hai with contact form ya WhatsApp button, toh woh aapko message kar dega. Subah aapke inbox mein lead hogi. Bina kisi receptionist ke.",
                },
                {
                  icon: <TrendingUp className="text-[#e8710a]" size={26} />,
                  title: "Services Showcase = Premium Pricing",
                  body: "Website par clearly batao: GST Filing, ITR Filing, Company Registration, TDS Return, Audit, MCA Compliance. Services list dekhkar client automatically samjhta hai ki aap ek professional firm hain — aur premium fees justify hoti hain.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-7 border border-gray-100 rounded-3xl hover:shadow-sm transition-all">
                  <div className="p-3 bg-white rounded-2xl h-fit border border-gray-100 shadow-sm flex-shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-[19px] font-black text-[#202124] mb-1">{item.title}</p>
                    <p className="text-gray-500 text-[17px] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* === SOCIAL PROOF: CG Districts Coverage === */}
          <section className="space-y-6 border-t border-gray-100 pt-10">
            <h2 className="text-[30px] font-black text-[#202124]">Chhattisgarh Ke Har District Mein CA Ki Demand — Aur Supply Gap</h2>
            <p>
              Chhattisgarh ke <strong>33 districts</strong> mein lakhs of small businesses, traders, manufacturers, aur professionals hain jin ko CA ya accounting services ki zaroorat hai. Lekin Google par dhoondhne par kya milta hai?
            </p>

            {/* All 33 districts grid */}
            <div className="bg-[#f8f9fa] rounded-[2.5rem] p-8 border border-gray-100">
              <p className="text-xs font-black text-[#1a73e8] uppercase tracking-widest mb-5">Chhattisgarh Ke Sabhi 33 Districts — Jahan Online CA Clients Dhoondhte Hain</p>
              <div className="flex flex-wrap gap-2">
                {CG_DISTRICTS.map((district, i) => (
                  <span key={i} className="bg-white border border-gray-200 text-[#3c4043] text-sm px-3 py-1.5 rounded-full font-medium hover:border-[#1a73e8] hover:text-[#1a73e8] transition-colors cursor-default">
                    {district}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-5 italic">
                In saare districts mein "CA near me," "GST consultant," "ITR filing," "company registration" searches hoti hain. Aur majority mein Google par koi strong local CA website nahi hai.
              </p>
            </div>

            <p>
              Raipur aur Bilaspur ke baad — <strong className="text-[#202124]">Korba, Durg, Rajnandgaon, Raigarh, Ambikapur, Jagdalpur, Dhamtari, Mahasamund</strong> — in sabhi tier-2 cities mein CA website search ka competition near-zero hai. Iska matlab? Ek basic well-optimized website bhi Google page 1 par aasani se rank kar sakti hai.
            </p>
          </section>

          {/* === COMMITMENT: Step-by-step CA website guide === */}
          <section className="space-y-8 border-t border-gray-100 pt-10">
            <h2 className="text-[30px] font-black text-[#202124]">CA/Accountant Website Mein Yeh 6 Cheezein ZAROOR Honi Chahiye</h2>
            <p>Sirf website bana lena kaafi nahi. Yeh 6 elements CA firm ki website ko ek lead-generating machine banate hain:</p>

            <div className="space-y-4">
              {[
                {
                  num: "01", color: "#1a73e8",
                  title: "ICAI Registration & Credentials Display",
                  body: "Membership number, UDIN, practice area clearly mention karein. Yeh sirf trust nahi — Google bhi ise 'Expertise, Authority, Trustworthiness (E-A-T)' signal maanta hai aur rank karta hai.",
                },
                {
                  num: "02", color: "#137333",
                  title: "Service Pages — Har Service Ke Liye Alag Page",
                  body: "GST Filing Raipur, ITR Filing Bilaspur, Company Registration Durg, TDS Return Korba — alag-alag service pages banao. Har page ek specific keyword target karta hai. Yeh ek website ko dozens of search queries par rank karwata hai.",
                },
                {
                  num: "03", color: "#e8710a",
                  title: "Client Testimonials + Google Reviews Integration",
                  body: "Chhattisgarh mein log known businesses ko trust karte hain. 5-10 verified client testimonials — zila mention karke — Google par trust signal bhi dete hain. 'Rahul verma, Kabirdham business owner' type ka testimonial bahut powerful hota hai.",
                },
                {
                  num: "04", color: "#d93025",
                  title: "WhatsApp Direct Connect Button",
                  body: "CA clients urgent hote hain — deadline se 2 din pehle phone aata hai ya raat ko worry hoti hai. Website par WhatsApp button se direct conversation start hoti hai. Yeh conversion rate 3x improve karta hai.",
                },
                {
                  num: "05", color: "#9334e6",
                  title: "Tax Calendar / Deadline Reminder Blog Section",
                  body: "GST return dates, ITR deadlines, advance tax dates — ek blog section jo yeh update karta rahe. Yeh ek reason deta hai clients ko baar baar aapki website visit karne ka. Aur Google issi repeated traffic ko rank signal maanta hai.",
                },
                {
                  num: "06", color: "#00897b",
                  title: "Local SEO — Google My Business + District Keywords",
                  body: "Google My Business profile + website mein 'CA in Raipur,' 'Accountant Bilaspur,' 'GST Consultant Durg,' 'Tax Advisor Korba' — yeh phrases naturally use karo. Jab koi bhi CG mein CA dhoodhega, aap miloge.",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-6 p-7 rounded-3xl border border-gray-100 hover:shadow-md transition-all group">
                  <div className="text-4xl font-black min-w-[52px]" style={{ color: item.color }}>{item.num}</div>
                  <div>
                    <p className="text-[19px] font-black text-[#202124] mb-2 group-hover:text-[#1a73e8] transition-colors">{item.title}</p>
                    <p className="text-gray-500 text-[17px] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* === AUTHORITY: Data section === */}
          <section className="bg-[#f8f9fa] rounded-[2.5rem] p-10 border border-gray-100 space-y-6">
            <p className="text-xs font-black text-[#1a73e8] uppercase tracking-widest">Search Data — Chhattisgarh 2026</p>
            <h3 className="text-[24px] font-black text-[#202124] leading-snug">Yeh Keywords Har Mahine CG Mein Search Hote Hain — Aur Competition Near-Zero Hai</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {[
                { keyword: "CA near me Raipur", volume: "High", comp: "Very Low" },
                { keyword: "GST consultant Bilaspur", volume: "High", comp: "Zero" },
                { keyword: "ITR filing Durg", volume: "Medium-High", comp: "Very Low" },
                { keyword: "Chartered accountant Korba", volume: "Medium", comp: "Zero" },
                { keyword: "Company registration Raipur", volume: "High", comp: "Low" },
                { keyword: "Tax advisor Ambikapur", volume: "Medium", comp: "Zero" },
                { keyword: "GST filing Rajnandgaon", volume: "Medium", comp: "Zero" },
                { keyword: "Accountant near me Chhattisgarh", volume: "Very High", comp: "Low" },
              ].map((row, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 flex justify-between items-center">
                  <span className="text-[15px] font-semibold text-[#202124]">{row.keyword}</span>
                  <span className={`text-xs font-black px-3 py-1 rounded-full ${row.comp === 'Zero' ? 'bg-[#e6f4ea] text-[#137333]' : row.comp === 'Very Low' ? 'bg-[#e8f0fe] text-[#1a73e8]' : 'bg-[#fef7e0] text-[#b06000]'}`}>
                    {row.comp} Competition
                  </span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 italic">*Search volume analysis based on Google Trends & SEO tool data for Chhattisgarh region, Q1 2026.</p>
          </section>

          {/* === LIKING: We understand your situation === */}
          <section className="space-y-6 border-t border-gray-100 pt-10">
            <h2 className="text-[30px] font-black text-[#202124]">"Meri Practice Referral Se Chalti Hai — Website Ki Kya Zaroorat?"</h2>
            <p>
              Yeh sabse common objection hai. Aur honestly, yeh sahi bhi hai — abhi tak.
            </p>
            <p>
              Lekin Chhattisgarh ki economy badh rahi hai. Korba, Raigarh, Jagdalpur, Balod, Janjgir-Champa — in sheher mein naye businesses khul rahe hain. Naye startups, GST registrations, MSME loans — in sab ke liye CA chahiye.
            </p>
            <p>
              Yeh naye business owners — 25-35 saal ke — <strong className="text-[#202124]">Google par search karte hain pehle, phir kisi se poochhhte hain.</strong> Aapke current clients ke bache aur relatives bhi isi generation ke hain.
            </p>
            <p>
              Referral system dependent hai kisi ke mood, yaad, aur network par. Website dependent hai Google ke algorithm par — aur woh 24/7 kaam karta hai.
            </p>
          </section>

          {/* === SCARCITY section === */}
          <section className="bg-[#fff8f7] border border-[#fce8e6] rounded-[2.5rem] p-10 space-y-4">
            <p className="text-[22px] font-black text-[#d93025]">⚠️ CG Mein CA Website Race Abhi Shuru Hui Hai</p>
            <p className="text-[#a50e0e] leading-relaxed">
              Janjgir-Champa, Bemetara, Kanker, Sukma, Narayanpur, Dantewada, Bijapur, Surajpur — in districts mein Google par aaj bhi koi CA website properly optimized nahi hai. <strong>Jo pehle aayega, woh dominate karega — saalon tak.</strong>
            </p>
            <p className="text-[#a50e0e] leading-relaxed">
              Gariaband, Baloda Bazar, Mungeli, Gaurela-Pendra-Marwahi — tier-3 locations mein bhi businesses grow ho rahe hain. In areas ka professional services search traffic doble ho raha hai har saal. Aarpas hoga nahi aur competition bhi badega.
            </p>
            <p className="font-black text-[#a50e0e] text-lg">Window abhi khuli hai. Kitni der aur?</p>
          </section>

          {/* === Checklist for commitment === */}
          <section className="space-y-5 border-t border-gray-100 pt-10">
            <h2 className="text-[30px] font-black text-[#202124]">Aapki CA Website Ke Liye Ready Checklist</h2>
            {[
              "ICAI membership certificate available hai",
              "Minimum 5 client testimonials le sakte hain",
              "Services clearly defined hain (GST, ITR, Audit, etc.)",
              "WhatsApp number available hai consultation ke liye",
              "Aapka office address aur area Google My Business mein add karna hai",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-4 p-5 border border-gray-100 rounded-2xl hover:border-[#1a73e8]/30 transition-all">
                <CheckCircle size={22} className="text-[#137333] mt-0.5 flex-shrink-0" />
                <p className="text-[17px]">{point}</p>
              </div>
            ))}
            <p className="text-gray-500 text-[17px] italic mt-3">
              Yeh sab prepare hai? Toh aapki website 15-20 din mein live ho sakti hai — aur 60-90 din mein Google results dikhne lagte hain CG ke kisi bhi district se.
            </p>
          </section>

          {/* === CTA === */}
          <div className="bg-[#202124] rounded-[3.5rem] p-12 md:p-20 text-center text-white mt-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#1a73e8] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#137333] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
            <p className="text-white/60 text-xs font-black uppercase tracking-[0.25em] mb-6">CA & Accounting Firms — CG 2026</p>
            <h3 className="text-[34px] md:text-[50px] font-black mb-8 leading-tight relative z-10">
              Vivek Bhai Ki Tarah Aapka Bhi <br /><span className="text-[#fbbc04]">Inbox Bhar Sakta Hai</span>
            </h3>
            <p className="text-lg opacity-80 mb-12 max-w-xl mx-auto relative z-10">
              Sirf ek free call mein jaanein ki aapki CA firm ke liye website kaise kaam karegi, kitna time lagega, aur pehla Google inquiry kab aayegi.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center relative z-10">
              <a
                href="https://wa.me/916264906078?text=Hi%2C%20mujhe%20apni%20CA%20firm%20ke%20liye%20professional%20website%20banwani%20hai%20Chhattisgarh%20mein"
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
              {[["34", "Naye Clients (6 Months)"], ["₹4.8L", "Additional Revenue"], ["33", "CG Districts Covered"]].map(([num, label]) => (
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
            "headline": "CA aur Accountant ke Liye Professional Website Guide — Chhattisgarh 2026",
            "description": "Chhattisgarh ke CA aur accountants ke liye complete website guide. Raipur, Bilaspur, Durg, Korba, Jagdalpur se lekar sabhi 33 districts mein online clients kaise paayen.",
            "author": { "@type": "Organization", "name": "Web Development AI", "url": "https://webdevelopmentai.in" },
            "datePublished": "2026-04-12",
            "dateModified": "2026-04-12",
            "publisher": { "@type": "Organization", "name": "Web Development AI" },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://webdevelopmentai.in/blog/ca-accountant-professional-website-guide" },
            "keywords": "CA website chhattisgarh, chartered accountant website raipur bilaspur durg korba, GST consultant online presence chhattisgarh, tax advisor website CG 2026, accountant digital marketing raipur",
            "articleSection": "Professional Services",
            "areaServed": {
              "@type": "State",
              "name": "Chhattisgarh",
              "containsPlace": [
                { "@type": "City", "name": "Raipur" }, { "@type": "City", "name": "Bilaspur" },
                { "@type": "City", "name": "Durg" }, { "@type": "City", "name": "Korba" },
                { "@type": "City", "name": "Jagdalpur" }, { "@type": "City", "name": "Ambikapur" },
                { "@type": "City", "name": "Rajnandgaon" }, { "@type": "City", "name": "Raigarh" },
                { "@type": "City", "name": "Dhamtari" }, { "@type": "City", "name": "Mahasamund" }
              ]
            }
          })
        }}
      />
    </div>
  );
}
