import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Eye, Share2, Star, CheckCircle2, AlertTriangle, Calculator, IndianRupee, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Indore Mein Website Banwane Ka Kharcha 2026 | Hidden Costs Exposed",
  description: "Indore ke businessmen ke liye website cost ki complete breakdown report. 2026 ke rates, features, aur hidden costs jo koi nahi batayega.",
  keywords: "website cost indore 2026, indore website development charges, ecommerce website cost indore, web design price indore, indore business website cost",
};

export default async function IndoreWebsiteCostGuide({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const resolvedSearchParams = await searchParams;
  const isFromBlogHub = resolvedSearchParams?.ref === 'bloghub';
  const backLink = isFromBlogHub ? "/services/blog#indore-website-cost" : "/services/business#indore-website-cost";
  const backLabel = isFromBlogHub ? "Back to Blog Hub" : "Back to Business Hub";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Indore Mein Website Banwane Ka Kharcha 2026",
    description: "Indore ke businessmen ke liye website cost ki complete breakdown report. 2026 ke rates, features, aur hidden costs jo koi nahi batayega.",
    author: { "@type": "Person", name: "Web Development AI" },
    datePublished: "2026-04-20",
    publisher: {
      "@type": "Organization",
      name: "ResilienceSoft",
      logo: { "@type": "ImageObject", url: "https://resiliencesoft.com/logo.png" },
    },
  };

  const costTiers = [
    {
      title: "Basic Static Website",
      price: "₹8k - ₹15k",
      for: "Freelancers, Local Clinics, Small Consultants",
      features: ["Up to 5 Pages", "Mobile Responsive", "Contact Form", "Basic SEO Setup", "1 Year Hosting"],
      color: "from-slate-100 to-gray-50",
      accent: "text-gray-700",
      border: "border-gray-200"
    },
    {
      title: "Lead Gen / Business Site",
      price: "₹20k - ₹40k",
      for: "Real Estate, Agencies, Education, B2B",
      features: ["Custom UI/UX Design", "CRM/WhatsApp Integration", "Fast Loading Speed", "Advanced SEO Setup", "Security Features"],
      color: "from-blue-50 to-indigo-50",
      accent: "text-blue-700",
      border: "border-blue-200",
      popular: true
    },
    {
      title: "E-Commerce / Custom Portal",
      price: "₹50k - ₹1.5L+",
      for: "Retailers, Wholesalers, Large Brands",
      features: ["Payment Gateway Setup", "Inventory Management", "User Dashboards", "Abandoned Cart Recovery", "Premium Cloud Hosting"],
      color: "from-emerald-50 to-teal-50",
      accent: "text-emerald-700",
      border: "border-emerald-200"
    }
  ];

  return (
    <div className="bg-[#fafafa] min-h-screen font-sans selection:bg-blue-200">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Modern Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-30 transition-all shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href={backLink} className="flex items-center gap-2 text-gray-600 hover:text-blue-700 transition-colors font-semibold text-sm bg-gray-50 hover:bg-blue-50 px-3 py-1.5 rounded-full">
            <ArrowLeft size={16} />
            {backLabel}
          </Link>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-[11px] font-bold text-gray-500 tracking-[0.2em] uppercase">Pricing Guide</span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* Split Hero Section */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-16 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-amber-100 text-amber-800 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md">2026 Edition</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md">Indore Business</span>
            </div>
            <h1 className="text-4xl md:text-[2.75rem] font-black text-gray-900 leading-[1.1] tracking-tight">
              Indore Mein Website Banwane Ka Kharcha <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">2026 Report</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
              Indore ke businessmen ke liye website cost ki ek transparent, no-BS guide. Jaaniye 2026 ke actual market rates, zaroori features, aur wo hidden costs jo freelancers aapse chupate hain.
            </p>
            <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white font-black text-sm">WA</div>
                <div>
                  <p className="text-gray-900 font-bold text-sm">Web Development AI</p>
                  <p className="text-gray-400 text-xs">5+ Yrs Exp. Strategist</p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500">
                <Clock size={16} /> 15 Min Read
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 bg-gradient-to-tr from-blue-50 to-indigo-100 rounded-full flex items-center justify-center shadow-inner border-[8px] border-white">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 rounded-full"></div>
              <Calculator size={80} className="text-blue-600 drop-shadow-md z-10" />
              <div className="absolute top-10 right-10 bg-white p-3 rounded-2xl shadow-lg rotate-12">
                <IndianRupee size={24} className="text-green-600" />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="prose prose-lg md:prose-xl max-w-[800px] mx-auto text-gray-700 leading-relaxed">
          <p className="text-xl md:text-2xl font-light leading-snug text-gray-800 mb-10">
            Pichle hafte mujhse Vijay Nagar ke ek real estate developer, Mr. Sharma mile. Unhone frustration mein kaha, <span className="italic font-medium text-gray-900">"Bhaiya, Indori market samajh ke bahar hai. Ek IT company website ka ₹50,000 mang rahi hai, aur Bhawarkuan ka ek student bol raha hai ₹3,000 mein bana dunga. Sahi rate kya hai aakhir?"</span>
          </p>

          <p>
            Ye sirf Sharma ji ka sawaal nahi hai. Indore — jo MP ka commercial hub aur mini-Mumbai kaha jata hai — wahan har din saikadon business owners is confusion mein rehte hain. Startup culture aur local businesses ke badhte competition mein har kisi ko online aana hai, par cost ko lekar market mein bohot untransparent mahaul hai. 
          </p>

          <p>
            Main pichle 5 saalon se digital marketing, web development, aur business strategy ke beech ka bridge ban kar kaam kar raha hu. In 5 saalon mein, maine itne projects aur case studies dekhi hain ki main ek jhalak mein bata sakta hu ki kaunsi website convert karegi aur kaunsi sirf paise ki barbadi hai. Maine aisi websites dekhi hain jo ₹2 lakh mein ban ke bhi ek single lead generate nahi kar paati, aur aisi websites bhi dekhi hain jo ₹30,000 mein ban kar har mahine ₹5 lakh ka organic revenue generate kar rahi hain. Fark sirf "code" ka nahi, balki strategy ka hai.
          </p>

          <p>
            Aaj is detailed guide mein, main saare parde hata dunga. Hum baat karenge ki 2026 mein Indore mein website banwane ka <strong>asli kharcha</strong> kya hai, alag-alag features ki costing kya hoti hai, kahan aapke paise waste hote hain, aur "sasti website" ka kadwa sach kya hai jo shayad aapko koi IT company pehle na bataye.
          </p>

          <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 border-b-2 border-blue-100 pb-4">
            Kahani: "Sasti Website" Ka Mehenga Parda
          </h2>

          <p>
            Price ko deeply samajhne se pehle, ek local Indore ka hi kissa share karta hu jisse aapko "Value vs Cost" ka farq samajh aayega.
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-10 not-prose">
            <h3 className="font-bold text-xl text-red-900 mb-3 flex items-center gap-2">
              <AlertTriangle size={22} /> Palasia Ke Ek Bakery Owner Ka Case Study
            </h3>
            <p className="text-red-800 mb-4 leading-relaxed">
              Rajesh (naam badla hua) ne Palasia mein ek premium cake shop kholi. Unhone socha online orders badhane ke liye ek website banwate hain. Unhone ek local freelancer ko pakda jisne kaha, "Sir, main ₹4,000 mein website, hosting, domain sab de dunga." Rajesh khush the ki unke ₹30,000 bach gaye jo ek agency maang rahi thi. Deal done.
            </p>
            <p className="text-red-800 mb-4 leading-relaxed">
              Website live hui. Par samasya kya thi? Design ekdum outdated tha, mobile par (jahan se 90% customers aate hain) images text ke bahar jaa rahi thi, aur page load hone mein 8 seconds lag rahe the. (Aajkal ke fast-paced zamaane mein customer 3 second mein back press kar deta hai). 
            </p>
            <p className="text-red-800 font-bold">
              Sabse bada jhatka: Valentine's Day ke theek ek din pehle website hack ho gayi. Kyun? Kyunki freelancer ne pirated themes (Nulled Themes) aur sasti third-grade shared hosting use ki thi taaki uska profit margin bacha rahe. Rajesh ko us ek din mein kam se kam ₹50,000 ke assured online orders ka nuksan hua, brand image jo kharab hui wo alag.
            </p>
          </div>

          <p>
            Is kahani ka moral ye nahi hai ki freelancers bure hote hain. Indore mein bahot aache freelancers bhi hain. Par moral ye hai ki <strong>Internet par sasta hamesha mehenga padta hai.</strong> Jab aap ₹4,000 ya ₹5,000 ki website banwate hain, to aap actually apne business ke liye ek "Digital liability" khareed rahe hain, asset nahi. Ek sasti website aapke customers ko ye signal deti hai ki aap apne business ko lekar serious nahi hain.
          </p>

          <h2 className="text-3xl font-black text-gray-900 mt-16 mb-10 text-center">
            2026 Indore Website Cost Breakdown (Transparent Pricing)
          </h2>

          <p className="text-center text-gray-500 mb-10">
            Neeche diya gaya pricing model Indore ki reputed agencies aur quality focus karne wale experts ke standard rates par aadharit hai. Ye figures hawa mein nahi, balki 2026 ke current market dynamics par based hain.
          </p>

          <div className="grid md:grid-cols-3 gap-6 not-prose mb-16">
            {costTiers.map((tier, idx) => (
              <div key={idx} className={`relative bg-gradient-to-b ${tier.color} border ${tier.border} rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                    Most Popular
                  </div>
                )}
                <h3 className={`font-black text-xl mb-2 ${tier.accent}`}>{tier.title}</h3>
                <p className="text-sm text-gray-600 h-10 mb-4 font-medium leading-tight">{tier.for}</p>
                <div className="text-3xl font-black text-gray-900 mb-6">{tier.price}</div>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={16} className={`mt-0.5 ${tier.accent} shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. Basic Static Website / Informational Site (₹8,000 - ₹15,000)</h3>
          <p>
            Agar aapka business abhi naya hai, jaise koi nayi consulting firm, ek choti si local clinic, ya aap ek individual professional hain, toh aapko ek badi website ki zarurat nahi hai. Ek 4-5 page ki website (Home, About Us, Services, Contact) aapka digital visiting card ban sakti hai. 
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-600">
            <li><strong>Design:</strong> Pre-designed templates use hote hain jisme aapka content lagaya jata hai.</li>
            <li><strong>Timeframe:</strong> 3 se 7 din ke andar website live ho jati hai.</li>
            <li><strong>What to watch out for:</strong> Ensure karein ki ye website mobile-friendly (responsive) ho. 80% log website apne phone par dekhenge.</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. Lead Generation / Dynamic Business Site (₹20,000 - ₹40,000)</h3>
          <p>
            Ye wo category hai jahan sabse zyada demand hai aur ROI (Return on Investment) milta hai. Agar aap ek Real Estate firm hain, ek digital agency chalate hain, ya B2B service provider hain, toh aapki website ka kaam sirf information dena nahi, balki customers ki <strong>leads</strong> lana hai.
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-600">
            <li><strong>Design & UX:</strong> Custom design jo aapki brand identity se match kare. Fast loading times aur proper psychological triggers.</li>
            <li><strong>Integrations:</strong> WhatsApp floating button, CRM integration (taaki direct aapke dashboard mein leads aayein), aur Google Analytics setup.</li>
            <li><strong>Timeframe:</strong> 2 se 4 hafte. Isme research aur copywriting bhi involve hoti hai.</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. E-Commerce / Advanced Portals (₹50,000 - ₹1.5 Lakh+)</h3>
          <p>
            Agar aap apni products online bechna chahte hain (chahe wo kapde ho, electronics, ya wholesale items), toh aapko ek proper e-commerce store ki zarurat hai. Isme cost isliye badhti hai kyunki isme complex functionalities hoti hain.
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-600">
            <li><strong>Features:</strong> Inventory management, secure payment gateway (Razorpay, Stripe), order tracking, aur abandoned cart recovery emails.</li>
            <li><strong>Platform:</strong> Shopify ya Custom Next.js/React based storefronts.</li>
            <li><strong>Scalability:</strong> Site aisi honi chahiye jo ek sath 1000 visitors ko handle kar sake bina crash hue.</li>
          </ul>

          <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">
            Wo Kharch Jo Koi Agency Pehle Nahi Batati (The Hidden Costs)
          </h2>

          <p>
            Indore mein website banwate waqt sabse bada confusion "hidden costs" ka hota hai. Ek achha businessman hamesha TCO (Total Cost of Ownership) dekhta hai, sirf initial price nahi. Aksar log ye sochte hain ki website ka kharcha sirf ek baar hota hai. Ye galatfehmi hai. Chaliye un extra costs ko decode karte hain jo aapko pehle din pata honi chahiye:
          </p>

          <div className="space-y-6 not-prose my-10">
            {[
              {
                title: "1. Domain Name & Premium Hosting Renewal",
                desc: "Jab aap pehli baar website banwate hain, toh aksar agency pehla saal free deti hai. Par domain aur hosting rent par li hui dukan ki tarah hain. Agle saal se inka renewal ₹3,000 se ₹8,000 (depending on server quality) lagta hai. Sasti hosting loge toh traffic badhne par site baar-baar down hogi.",
                icon: "🌍"
              },
              {
                title: "2. AMC (Annual Maintenance Contract)",
                desc: "Jaise aapki gaadi ko regular service chahiye, website ko backend updates, security patch, aur database backup chahiye hota hai. Taaki hackers se website bachi rahe. Yeh cost aam taur par website ki total value ka 15-20% per year hota hai.",
                icon: "🔧"
              },
              {
                title: "3. Copywriting & SEO Content",
                desc: "Ek bada misnomer hai ki developer hi content likhega. Developer code likhta hai, marketing copy nahi. Agar aapko professional aur persuasive content likhwana hai jo sales convert kare, toh ek accha content writer extra ₹5,000 se ₹15,000 charge karta hai.",
                icon: "✍️"
              },
              {
                title: "4. Third-Party API Integrations",
                desc: "Agar aapko WhatsApp Business API, advanced SMS gateways, ya custom CRM apne portal se jodna hai, toh un third-party services ke monthly/yearly API charges alag se lagte hain.",
                icon: "🔌"
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
                <div className="text-3xl shrink-0">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">
            Ek "Investment" Mindset: Website Ko Kharcha Mat Samjhiye
          </h2>
          
          <p>
            Maan lijiye aapne ₹30,000 lagakar ek aachi website banwayi. Ek saal mein agar us website ke through aapko 50 achhi qualified leads milti hain, aur usme se 5 clients bhi convert hote hain jinka ticket size ₹20,000 hai. Toh aapne us website se ₹1,00,000 ka revenue kiya. Aapka Return on Investment (ROI) clear hai.
          </p>
          <p>
            Lekin agar aapne ₹5,000 ki sasti site banwayi, jo load hone mein time leti hai, mobile par kharab dikhti hai, toh kitne aache prospects us website ko dekh kar bina aapko call kiye wapas chale jayenge? Wo ₹5,000 aapka kharcha nahi hai, balki jo leads aap loose kar rahe hain, wo aapka asli nuksan hai.
          </p>

          <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">
            Sahi Agency Kaise Chunein? (The 5-Year Expert Formula)
          </h2>

          <p>
            Mera 5 saal ka nichod aur anubhav kehta hai ki developer select karte waqt kabhi bhi usse pehla sawaal "Price kya hai?" mat puchiye. Ek cheap price hamesha cheap results lata hai. Usse ye 3 technical aur business-focused sawaal puchiye:
          </p>

          <ol className="space-y-4">
            <li><strong>"Aapka tech stack (framework) kya hai?"</strong> Agar wo WordPress ke saste page builders use kar rahe hain, toh site slow hogi. Aajkal ke modern standards mein Next.js, React ya modern headless CMS ka zamaana hai jo website ko lightning fast banate hain.</li>
            <li><strong>"Kya aap conversion ki guarantee ya strategy banate hain?"</strong> Sirf dekhne mein sundar website kisi kaam ki nahi hai agar log uspar action na lein. Website me lead capture forms, clear Call-to-Action (CTA), trust signals aur fast load speed zaroori hai.</li>
            <li><strong>"Aap post-launch support kaise dete hain?"</strong> Website launch hone ke baad agar koi bug aaye ya website down ho jaye, toh unka response time (SLA) kya hoga? Backup strategy kya hai?</li>
          </ol>

          {/* Persuasive CTA Block */}
          <div className="not-prose relative rounded-3xl mt-16 overflow-hidden bg-gray-900 shadow-2xl">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
              <ShieldCheck size={200} className="text-white" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>
            
            <div className="relative p-10 md:p-14 z-10 text-center md:text-left flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <span className="inline-block bg-blue-600/20 text-blue-400 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                  Exclusive for Indore
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                  Website Ek Kharcha Nahi, <br className="hidden md:block"/> <span className="text-blue-400">Ek Investment Hai.</span>
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
                  Hum Indoris apna business values aur trust pe chalate hain. Agar aap apne business ke digital future ko lekar serious hain, aur ek saste dard-e-sar se bachna chahte hain, toh aaiye baat karte hain. Hum sirf website nahi banate, hum business ka growth engine banate hain.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href="https://wa.me/916264906078"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-black rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-1"
                  >
                    Free Cost Estimate Lein (WhatsApp)
                  </a>
                  <Link
                    href="/services/business"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl border-2 border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 transition-all"
                  >
                    Humari Portfolio Dekhein
                  </Link>
                </div>
                <p className="text-gray-500 text-xs mt-6 font-medium">
                  *Hum quality maintain karne ke liye har mahine sirf 4 premium projects hi sign karte hain. Apna slot aaj hi reserve karein aur best return on investment payein.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-16 pt-8 pb-12 flex items-center justify-between">
            <p className="text-sm text-gray-500 font-medium">
              Aapka business grow karega, toh Indore grow karega. Jai Hind.
            </p>
            <button title="Share this article" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
              <Share2 size={18} />
            </button>
          </div>
        </article>
      </main>
    </div>
  );
}
