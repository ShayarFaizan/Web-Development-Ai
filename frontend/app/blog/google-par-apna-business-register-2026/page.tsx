import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, ArrowRight, CheckCircle, MapPin, Search, 
  Smartphone, Star, Zap, Globe, MessageSquare, ShieldCheck,
  Navigation, MousePointer2, Settings
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google Par Apna Business Kaise Register Karein 2026 | Step-by-Step Hindi Guide',
  description: 'Google par apna business kaise register karein 2026? Complete step-by-step Hindi guide local businesses ke liye jisse aapka business Google Maps par rank kare.',
  keywords: 'google business profile registration, google maps business listing hindi, register business on google 2026, local seo guide india, google my business registration hindi, rank business on google maps',
};

export default async function GoogleBusinessRegistrationPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const resolvedSearchParams = await searchParams;
  const isFromBlogHub = resolvedSearchParams?.ref === 'bloghub';
  const backLink = isFromBlogHub ? "/services/blog#google-par-apna-business-register-2026" : "/services/business#google-par-apna-business-register-2026";
  const backLabel = isFromBlogHub ? "Back to Blog Hub" : "Back to Business Hub";
  return (
    <div className="bg-white min-h-screen pt-20 pb-24" style={{ fontFamily: "'Google Sans', system-ui, sans-serif" }}>
      <article className="max-w-[850px] mx-auto px-6">

        {/* Back Link */}
        <nav className="mb-10">
          <Link href={backLink} className="inline-flex items-center text-[#1a73e8] hover:underline text-sm font-medium">
            <ArrowLeft size={15} className="mr-1.5" /> {backLabel}
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-16">
          <div className="flex flex-wrap gap-2 mb-8 lowercase tracking-wider">
            <span className="bg-[#e8f0fe] text-[#1a73e8] px-4 py-1.5 rounded-full text-[12px] font-bold uppercase shadow-sm border border-[#1a73e8]/10">Local SEO</span>
            <span className="bg-[#fef7e0] text-[#b06000] px-4 py-1.5 rounded-full text-[12px] font-bold uppercase shadow-sm border border-[#fbbc04]/10">2026 Guide</span>
          </div>
          <h1 className="text-[42px] md:text-[64px] font-[900] text-[#202124] leading-[1.05] mb-8 tracking-tighter">
            Google Par Apna Business <br/>
            <span className="text-[#1a73e8]">Kaise Register Karein?</span>
          </h1>
          <p className="text-[22px] text-[#5f6368] leading-[1.6] max-w-3xl mb-12">
            2026 mein voice search aur maps navigation ki vajah se 90% customers Google par search karte hain. Agar aapka business wahan nahi hai, toh aap apne 80% potential customers <span className="text-[#d93025] font-bold italic">lose kar rahe hain.</span>
          </p>
          <div className="flex items-center gap-4 text-sm font-bold text-[#202124] bg-[#f8f9fa] p-4 rounded-2xl border border-gray-100 w-fit">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px]">👤</div>
              ))}
            </div>
            <span>1,200+ local businesses registered in Chhattisgarh this month</span>
          </div>
        </header>

        {/* Progress Guide */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          <div className="p-4 bg-green-50 rounded-2xl border border-green-100">
             <div className="text-green-600 font-bold text-xs uppercase mb-1">Step 01</div>
             <div className="font-bold text-[#202124]">Registration</div>
          </div>
          <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
             <div className="text-blue-600 font-bold text-xs uppercase mb-1">Step 02</div>
             <div className="font-bold text-[#202124]">Verification</div>
          </div>
          <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
             <div className="text-orange-600 font-bold text-xs uppercase mb-1">Step 03</div>
             <div className="font-bold text-[#202124]">Optimization</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-[#3c4043] text-[19px] leading-[1.8] space-y-12">
          
          <section className="space-y-6">
            <h2 className="text-[32px] font-black text-[#202124] flex items-center gap-3">
              <div className="bg-[#1a73e8] p-2 rounded-xl text-white"><Globe size={24} /></div>
              Kyon Karein Register?
            </h2>
            <p>
              Imagine karein, koi Raipur ki 'MG Road' par khada hai aur search karta hai <strong>"Best Shoe Shop Near Me"</strong>. Agar aapki shop wahan listed hai, toh Google usse aapka rasta dikhayega. Yeh bilkul free hai, lekin isse hone wali sales <span className="text-[#1a73e8] font-bold underline decoration-wavy">Priceless</span> hain.
            </p>
          </section>

          {/* Step Detail Section */}
          <section className="space-y-10">
            <h2 className="text-[32px] font-black text-[#202124]">Step-by-Step Kaushal (Process)</h2>
            
            <div className="space-y-12">
               {/* Step 1 */}
               <div className="relative pl-12 border-l-4 border-gray-100">
                  <div className="absolute top-0 -left-[14px] w-6 h-6 bg-[#1a73e8] rounded-full border-4 border-white"></div>
                  <h3 className="text-[24px] font-[900] text-[#202124] mb-4">1. Google Business Profile Par Jayein</h3>
                  <p className="mb-6 text-gray-600">Apne browser mein <code>google.com/business</code> open karein aur 'Manage Now' par click karein. Yahan aapko apne business ka "Exact Name" likhna hai joh aapke shop ke board par hai.</p>
                  <div className="bg-[#f8f9fa] p-6 rounded-3xl border border-gray-100 flex items-start gap-4 italic space-y-2 flex-col">
                    <span className="text-sm font-bold text-orange-600 uppercase flex items-center gap-2 tracking-widest"><Settings size={14} /> Expert Tip:</span>
                    <p className="text-sm text-[#5f6368]">Sirf shop name na likhein. Agar aapki shop ka naam 'Gumber' hai and aap petrol pump hain, toh likhein <strong>'Gumber Petroleum - 24hr Petrol Pump Bilaspur'</strong>. Isse search mein rank hone ke chances 70% badh jaate hain.</p>
                  </div>
               </div>

               {/* Step 2 */}
               <div className="relative pl-12 border-l-4 border-gray-100">
                  <div className="absolute top-0 -left-[14px] w-6 h-6 bg-[#1a73e8] rounded-full border-4 border-white"></div>
                  <h3 className="text-[24px] font-[900] text-[#202124] mb-4">2. Sahi Category Chunnein</h3>
                  <p className="mb-4">Google ko batayein ki aap kya karte hain. Agar aap doctor hain, toh sirf "Doctor" na likhein, balki "Pediatrician" ya "Dentist" jaisi exact category chunnein.</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['Hardware Store', 'Real Estate Agency', 'Beauty Salon', 'Restaurant', 'Clinic', 'Mobile Shop'].map(tag => (
                      <span key={tag} className="text-[13px] font-bold text-gray-500 bg-gray-50 px-3 py-2 rounded-xl text-center border border-gray-100">{tag}</span>
                    ))}
                  </div>
               </div>

               {/* Step 3 */}
               <div className="relative pl-12 border-l-4 border-gray-100">
                  <div className="absolute top-0 -left-[14px] w-6 h-6 bg-[#1a73e8] rounded-full border-4 border-white"></div>
                  <h3 className="text-[24px] font-[900] text-[#202124] mb-4">3. Location Aur Pin Drop</h3>
                  <p className="mb-4">Google Maps par red pin ko exact shop ki position par rakhein. Chhattisgarh ke naye areas mein GPS thoda galat ho sakta hai, toh isse manually check karna <span className="font-black">bahut zaroori hai</span>.</p>
                  <div className="p-6 bg-[#e8f0fe] rounded-3xl border border-[#1a73e8]/20 flex items-center gap-4">
                    <MapPin size={32} className="text-[#1a73e8] animate-bounce" />
                    <p className="text-[15px] font-medium text-[#1a73e8]">Accuracy 100% honi chahiye warna customers ghum jaenge aur negative review denge.</p>
                  </div>
               </div>

               {/* Step 4 */}
               <div className="relative pl-12 border-l-4 border-gray-100">
                  <div className="absolute top-0 -left-[14px] w-6 h-6 bg-[#1a73e8] rounded-full border-4 border-white"></div>
                  <h3 className="text-[24px] font-[900] text-[#202124] mb-4">4. Verification (The Hard Part)</h3>
                  <p>Ab Google aapko verify karega. Pehle 'Postcard' (letter) aata tha, lekin 2026 mein zyadatar <strong>Video Verification</strong> chalta hai. Aapko apni shop ke bahar se andar tak ka ek video banana hota hai.</p>
               </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="bg-[#fef7e0] p-10 md:p-14 rounded-[3rem] border border-[#fbbc04]/20">
             <h2 className="text-[28px] font-black text-[#202124] mb-8 flex items-center gap-3">
                <ShieldCheck size={28} className="text-[#fbbc04]" /> 
                Log Kya Galti Karte Hain?
             </h2>
             <ul className="space-y-6">
                {[
                  { t: "Photos na dalna", d: "Ek bhi photo na hone par customers trust nahi karte. Kam se kam 10 high-quality photos zaroori hain." },
                  { t: "Galt Timing", d: "Shop band hai lekin Google par 'Open' dikha raha hai—yeh aapke business reputation ke liye zahar hai." },
                  { t: "Reviews ka reply na dena", d: "Jab koi 'Nice' likhe, use thank you kahein. Isse Google ka algorithm aapko upar rank karta hai." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                     <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-black shrink-0 shadow-sm">{i+1}</div>
                     <div>
                        <div className="font-[900] text-[#202124] text-[17px] mb-1">{item.t}</div>
                        <p className="text-[15px] text-gray-600">{item.d}</p>
                     </div>
                  </li>
                ))}
             </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-[30px] font-black text-[#202124]">Aapka Next Step</h2>
            <p>
              Business register karna sirf pehla step hai. Google par <strong>Rank</strong> karna asli game hai. Uske liye aapko ek dynamic website ki zaroorat hoti hai jo aapke maps listing se link ho.
            </p>
            <p>
              At <strong>Web Development AI</strong>, hum sirf website nahi banate, hum aapke listing ko auto-update karne wale AI systems lagate hain jo aapke Bilaspur/Raipur base business ko #1 par rakhte hain.
            </p>
          </section>

          {/* Final CTA */}
          <div className="bg-[#202124] rounded-[3.5rem] p-12 md:p-20 text-center text-white my-20 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#1a73e8] rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-500 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000"></div>
            </div>
            <p className="text-[#1a73e8] text-sm font-black uppercase tracking-[0.3em] mb-8">Ready to grow?</p>
            <h3 className="text-[38px] md:text-[56px] font-[900] mb-8 leading-[1.05] tracking-tight">
              Hamse Apna Google <br/><span className="text-[#1a73e8]">Setup Karwayein</span>
            </h3>
            <p className="text-xl text-gray-400 mb-14 max-w-2xl mx-auto leading-relaxed">
              Agar aapko process complex lag raha hai, toh humse contact karein. Hum aapka entire digital presence 13 din mein setup kar denge.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://wa.me/916264906078?text=Hi%2C%20mujhe%20apna%20business%20Google%20par%20set%20karwana%20hai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-[#25D366] text-white font-black rounded-full hover:scale-105 transition-all shadow-xl active:scale-95 text-[18px]"
              >
                Chat on WhatsApp <MessageSquare size={20} />
              </a>
              <Link
                href={backLink}
                className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all text-[18px]"
              >
                More Growth Guides <ArrowRight size={20} />
              </Link>
            </div>
            
            <div className="mt-16 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
               <div className="flex items-center gap-2"><Smartphone size={18} /> Mobile First</div>
               <div className="flex items-center gap-2"><Search size={18} /> Local SEO</div>
               <div className="flex items-center gap-2"><Zap size={18} /> AI Powered</div>
            </div>
          </div>

        </div>
      </article>

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Google Par Apna Business Kaise Register Karein 2026",
            "description": "Step-by-step guide for local businesses to register on Google Search and Maps in 2026.",
            "step": [
              {
                "@type": "HowToStep",
                "text": "Open google.com/business and click Manage Now."
              },
              {
                "@type": "HowToStep",
                "text": "Select the correct category for your business."
              },
              {
                "@type": "HowToStep",
                "text": "Verify your location using video verification or postcard."
              }
            ],
            "author": { "@type": "Organization", "name": "Web Development AI" },
            "datePublished": "2026-04-16",
            "publisher": { "@type": "Organization", "name": "Web Development AI" }
          })
        }}
      />
    </div>
  );
}
