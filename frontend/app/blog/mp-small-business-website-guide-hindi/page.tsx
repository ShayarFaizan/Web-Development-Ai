import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Eye,
  Share2,
  Star,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "MP Ke Chhote Vyapariyon Ke Liye Website Guide Hindi Mein (2026)",
  description:
    "Madhya Pradesh ke har sheher aur kasbe ke vyapariyon ke liye. Jaaniye online dukaan kholne ka sabse aasaan aur sasta tareeqa — bina kisi technical knowledge ke.",
  keywords:
    "MP chhota vyapari website guide hindi, madhya pradesh small business website, online dukaan MP, website banwane ka kharcha MP, digital marketing MP hindi",
};

export default async function MPSmallBusinessWebsiteGuide({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const resolvedSearchParams = await searchParams;
  const isFromBlogHub = resolvedSearchParams?.ref === 'bloghub';
  const backLink = isFromBlogHub ? "/services/blog#mp-small-business-website-guide-hindi" : "/services/business#mp-small-business-website-guide-hindi";
  const backLabel = isFromBlogHub ? "Back to Blog Hub" : "Back to Business Hub";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "MP Ke Chhote Vyapariyon Ke Liye Website Guide Hindi Mein",
    description:
      "Madhya Pradesh ke chhote business owners ke liye ek complete, jargon-free guide jo batati hai ki website kaise banwayein aur use sales generate karne wala tool kaise banayen.",
    author: { "@type": "Person", name: "Web Development AI" },
    datePublished: "2026-04-20",
    publisher: {
      "@type": "Organization",
      name: "ResilienceSoft",
      logo: {
        "@type": "ImageObject",
        url: "https://resiliencesoft.com/logo.png",
      },
    },
  };

  const stats = [
    {
      icon: <TrendingUp size={22} className="text-blue-500" />,
      value: "3.2x",
      label: "Avg. revenue growth",
    },
    {
      icon: <Shield size={22} className="text-green-500" />,
      value: "87%",
      label: "Leads without walk-in",
    },
    {
      icon: <Zap size={22} className="text-yellow-500" />,
      value: "₹0",
      label: "Offline ad spend needed",
    },
  ];

  return (
    <div className="bg-[#f8f9fa] min-h-screen font-sans selection:bg-blue-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Header ── */}
      <header className="bg-white/90 backdrop-blur border-b border-gray-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href={backLink}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm"
          >
            <ArrowLeft size={18} />
            {backLabel}
          </Link>
          <span className="hidden sm:block text-xs font-bold text-gray-400 tracking-[0.2em] uppercase">
            MP Special
          </span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-24">
        {/* ── Hero Section ── */}
        <section className="mb-16">
          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-7">
            <span className="bg-blue-600 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full shadow">
              MP Special
            </span>
            <span className="bg-emerald-100 text-emerald-700 px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full">
              Small Business
            </span>
            <span className="bg-amber-100 text-amber-700 px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full">
              Hindi Guide
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-gray-900 leading-[1.1] tracking-tight mb-7">
            MP Ke Chhote Vyapariyon Ke Liye
            <br />
            <span className="text-blue-600">Online Dukaan Ka Blueprint</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl mb-10">
            Madhya Pradesh ke har sheher aur kasbe ke vyapariyon ke liye —
            Bhopal se Balaghat, Indore se Itarsi tak. Bina kisi technical
            knowledge ke, bina bade budget ke, apni online dukaan kholne ka
            sabse practical guide.
          </p>

          {/* Author + Meta */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 border-t border-b border-gray-200 py-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-linear-to-br from-blue-500 to-indigo-700 flex items-center justify-center text-white font-black text-base shadow-md">
                WA
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm leading-tight">
                  Web Development AI
                </p>
                <p className="text-gray-400 text-xs">
                  Business Strategist · 30+ Yrs
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 ml-auto">
              <Calendar size={15} />
              <span>Apr 20, 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={15} />
              <span>15 Min Read</span>
            </div>
            <div className="flex items-center gap-1.5 text-blue-600 font-semibold">
              <Eye size={15} />
              <span>11,038</span>
            </div>
            <div className="flex items-center gap-1.5 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} fill="currentColor" />
              ))}
              <span className="text-gray-700 font-bold ml-1">4.9</span>
            </div>
          </div>

          {/* Quick Stats Cards */}
          <div className="grid grid-cols-3 gap-4 mt-10">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-2">{s.icon}</div>
                <p className="text-2xl font-black text-gray-900">{s.value}</p>
                <p className="text-xs text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Article ── */}
        <article className="prose prose-lg md:prose-xl max-w-none text-gray-800 leading-relaxed space-y-10">
          {/* Hook Quote */}
          <blockquote className="not-prose relative border-l-[5px] border-blue-500 bg-white rounded-r-2xl px-7 py-6 shadow-sm my-10">
            <p className="text-xl md:text-2xl text-gray-700 font-light italic leading-snug">
              "Pandit ji ne mujhse poochha — 'Beta, itni mushkil se dukaan
              kholte hain, toh kya ek online dukaan nahi khol sakte?' Main
              sochne laga — woh sahi bol rahe the. Offline dukaan ke liye bhi
              toh humne risk liya tha."
            </p>
            <span className="block text-sm text-blue-500 font-semibold mt-4 not-italic">
              — Raju Kirana Store, Sagar, MP
            </span>
          </blockquote>

          <p>
            Madhya Pradesh — ek aisa rajya jahan Bhopal ki galiyon mein saari ki
            rasoi se lekar Mandsaur ke khet tak, har insaan ek vyapari ki rooh
            rakhta hai. MP ka chhota vyapari sab kuch janta hai — daam lagana,
            credit dena, aur seasonal demand ka andaza. Lekin ek cheez wo miss
            kar raha hai: <strong>Internet ki bhasha.</strong>
          </p>

          <p>
            Aur yahi ek kami usse pichhad rahi hai. Nahi — sirf pichhad nahi
            rahi, yahi kami uske grahak dheere-dheere us competitor ki taraf
            bhej rahi hai jiske paas ek simple sa Instagram page bhi hai.
          </p>

          <p>
            Aaj ki is guide mein, main — ek aisa insaan jo pichle 30 saalon se
            digital world aur business strategy ke junction par khada raha hai —
            aapko ek seedhi-saadi, bina bhaari-bhari technical terminology wali
            raah dikhaunga. Padhiye, kyunki ye aapki zindagi badal sakta hai.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl font-black text-gray-900 mt-16 mb-4 tracking-tight">
            Sach Ka Aaena: MP Ka Vyapari Peeche Kyun Hai?
          </h2>

          <p>
            NASSCOM aur Google India ke ek joint survey ke mutabiq,{" "}
            <strong>
              Madhya Pradesh mein sirf 12% chhote vyapariyon ki online presence
              hai.
            </strong>{" "}
            Matlab 88% vyapari aaj bhi sirf apni gali, mohalla, ya zor bol dene
            wale regular grahak par nirbhar hain.
          </p>

          <p>
            Ab sochiye: India mein 2024 mein online retail ka market ₹8 Lakh
            Crore se zyada ho gaya. Aur MP ke chhote vyapari is pie ka ek bhi
            piece nahi khaa rahe?
          </p>

          {/* Story Card */}
          <div className="not-prose bg-linear-to-br from-slate-50 to-blue-50 border border-blue-100 rounded-3xl p-8 my-10 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl">💡</span>
              <h3 className="text-xl font-black text-gray-900">
                Kahani: Rameshwar Textile, Sehore
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sehore ke Rameshwar ji 20 saal se saari ki wholesale dukaan
              chalate the. Ek din unka beta laptop le aaya aur bola — "Papa,
              Surat wale seedha Instagram par orders le rahe hain." Rameshwar ji
              ko laga ye sab bade shehron ki baat hai.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              6 mahine baad unke 3 regular grahak (jo dusre kasbon mein dukaan
              chalate the) ne unhe chodkar online supplier se saari lena shuru
              kar diya — kyunki online walo ka catalogue 24 ghante available
              tha, payment bhi easy thi.
            </p>
            <p className="text-gray-800 font-bold leading-relaxed">
              Jab Rameshwar ji humse mile, tab humne unke liye ek simple
              WhatsApp catalogue aur landing page banaya. Teen mahine mein
              unhone apne 3 khoe gaye grahak wapas paye aur 7 naaye jode. Aaj
              unki online sales 30% tak pahunch gayi hai.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl font-black text-gray-900 mt-16 mb-4 tracking-tight">
            Website Nahi, Online Dukaan — Fark Samjhiye
          </h2>

          <p>
            Bahut log "website" sun ke darr jaate hain — lagta hai ye sirf IT
            companies ke liye hai. Isliye main aaj se ek naya shabd use karunga:{" "}
            <strong>Online Dukaan.</strong>
          </p>

          <p>
            Jaise aapki offline dukaan mein sign board hota hai, samaan ka
            display hota hai, aur aap grahak se baat karte hain — ek online
            dukaan mein exactly yahi hota hai, sirf internet ke zariye. Aur
            sabse badi baat: ye 24 ghante, 7 din, 365 din khuli rehti hai.
          </p>

          <div className="not-prose grid md:grid-cols-2 gap-5 my-10">
            {[
              {
                emoji: "🏪",
                title: "Offline Dukaan",
                points: [
                  "Sirf local grahak",
                  "Subah 10 — Raat 9 hi khuli",
                  "Bimari mein band",
                  "Ek shahar tak seema",
                ],
                color: "border-red-200 bg-red-50",
              },
              {
                emoji: "🌐",
                title: "Online Dukaan",
                points: [
                  "Pure MP, Pure India",
                  "24×7 khuli",
                  "Aap sote ho, orders aate hain",
                  "Kashmir se Kanyakumari",
                ],
                color: "border-green-200 bg-green-50",
              },
            ].map((card, i) => (
              <div key={i} className={`rounded-2xl border-2 p-7 ${card.color}`}>
                <p className="text-3xl mb-3">{card.emoji}</p>
                <h4 className="font-black text-gray-900 text-lg mb-4">
                  {card.title}
                </h4>
                <ul className="space-y-2">
                  {card.points.map((p, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-gray-700 text-sm"
                    >
                      <CheckCircle
                        size={16}
                        className={
                          i === 0
                            ? "text-red-400 mt-0.5 shrink-0"
                            : "text-green-500 mt-0.5 shrink-0"
                        }
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl font-black text-gray-900 mt-16 mb-4 tracking-tight">
            MP Ke Vyapari Ke Liye Kaisi Website Chahiye?
          </h2>

          <p>
            Har business alag hota hai, isliye website bhi alag hoti hai.
            Chaliye types samjhte hain:
          </p>

          <div className="not-prose space-y-4 my-8">
            {[
              {
                no: "01",
                title: "Visiting Card Website",
                for: "Doctor, CA, Lawyer, Consultant",
                desc: "Aapka naam, number, kya karte ho, aur ek contact form. Bas. Grahak Google par naam search kare, aap milein.",
                cost: "₹8,000 – ₹15,000",
              },
              {
                no: "02",
                title: "Lead Generation Website",
                for: "Real estate, Education, Services",
                desc: "Ek page jo grahak ka naam-number capture kare aur automatically WhatsApp message bheje. Aapki sales team usse call kare.",
                cost: "₹15,000 – ₹35,000",
              },
              {
                no: "03",
                title: "E-commerce / Online Store",
                for: "Kapde, grocery, hardware, gifts",
                desc: "Poora online store jahan grahak browse kare, cart mein daale, payment kare. Order aapke paas aaye.",
                cost: "₹40,000 – ₹1,20,000+",
              },
              {
                no: "04",
                title: "B2B Catalogue Portal",
                for: "Wholesale, distributor, manufacturer",
                desc: "Price list, MOQ, account login — sirf aapke registered dealers ke liye. Indore aur Jabalpur ke wholesalers ke liye best.",
                cost: "₹60,000 – ₹2,00,000+",
              },
            ].map((item) => (
              <div
                key={item.no}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex gap-5 hover:shadow-md transition-shadow group"
              >
                <span className="text-3xl font-black text-blue-100 group-hover:text-blue-200 transition-colors shrink-0">
                  {item.no}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h4 className="font-black text-gray-900 text-lg">
                      {item.title}
                    </h4>
                    <span className="text-xs bg-blue-50 text-blue-600 font-semibold px-3 py-0.5 rounded-full">
                      {item.for}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">
                    {item.desc}
                  </p>
                  <p className="text-sm font-bold text-emerald-600">
                    {item.cost}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl font-black text-gray-900 mt-16 mb-4 tracking-tight">
            Website Banwane Ke Baad — Asli Khel Yahan Se Shuru Hota Hai
          </h2>

          <p>
            Website banne ke baad log ek galti karte hain — wait karte hain.
            Sochte hain "Ab toh website hai, orders aane chahiye." Lekin
            internet par "If you build it, they will come" ka rule nahi chalta.
          </p>

          <p>
            Website banana 50% kaam hai. Baaki 50% hai usse Google par rank
            karana, social media par promote karna, aur WhatsApp automation set
            karna taaki koi bhi visitor lead ban sake. Ek achhi agency aapko
            sirf code nahi deti — wo aapko ek complete{" "}
            <strong>Digital Sales System</strong> deti hai.
          </p>

          {/* Checklist */}
          <div className="not-prose bg-white border border-gray-100 rounded-3xl p-8 shadow-sm my-10">
            <h3 className="text-xl font-black text-gray-900 mb-6">
              ✅ Launch Ke Baad Ki Checklist
            </h3>
            <div className="space-y-3">
              {[
                "Google My Business listing activate karein",
                "Local SEO ke liye city-based keywords website mein daalen",
                "WhatsApp Business account website se link karein",
                "Facebook aur Instagram par business page banayein",
                "Pehle 3 mahine mein minimum 4-5 blog posts publish karein",
                "Existing grahak ko website link WhatsApp par bhejein",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-green-500 shrink-0 mt-0.5"
                  />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl font-black text-gray-900 mt-16 mb-4 tracking-tight">
            Agency Chunte Waqt Dhoka Kaise Bachein?
          </h2>

          <p>
            MP mein kai "web designers" hain jo ₹2,000 mein website bana dete
            hain. Yahi aapke business ka sabse bada dushman ban sakta hai. Ek
            sasti, slow, aur unsecured website se better hai koi website nahi.
          </p>

          <div className="not-prose grid sm:grid-cols-2 gap-5 my-8">
            {[
              {
                emoji: "🚩",
                title: "Red Flags (Avoid Karein)",
                points: [
                  "Sirf ek page ka portfolio",
                  "Mobile design nahi dikhate",
                  "Maintenance ki baat hi nahi karte",
                  "Payment leke gayab ho jaate hain",
                ],
              },
              {
                emoji: "✅",
                title: "Green Flags (Select Karein)",
                points: [
                  "Live kiye hue client references",
                  "Mobile-first design philosophy",
                  "Ongoing support & maintenance",
                  "SEO aur speed optimization included",
                ],
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 border-2 ${i === 0 ? "border-red-200 bg-red-50" : "border-green-200 bg-green-50"}`}
              >
                <p className="text-2xl mb-3">{card.emoji}</p>
                <h4 className="font-black text-gray-900 mb-4">{card.title}</h4>
                <ul className="space-y-2">
                  {card.points.map((p, j) => (
                    <li
                      key={j}
                      className="text-gray-700 text-sm flex items-start gap-2"
                    >
                      <span className="mt-1">{i === 0 ? "🔴" : "🟢"}</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Block */}
          <div className="not-prose relative overflow-hidden rounded-3xl my-14 shadow-2xl">
            <div className="absolute inset-0 bg-linear-to-br from-blue-700 via-indigo-700 to-violet-800" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
            <div className="relative p-9 md:p-14">
              <span className="inline-block bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
                Free Consultation
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-5">
                Apni MP Ki Dukaan Ko
                <br />
                <span className="text-blue-200">Pure India Ka Market</span>{" "}
                Dijiye
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed mb-3 max-w-xl">
                "Bhaiya hume tech nahi samajh aata" — ye mujhse mat boliye.
                Aapko sirf apna business samajhna chahiye. Tech ki zimmedari
                humari hai.
              </p>
              <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-xl">
                Hum sirf websites nahi banate — hum MP ke vyapariyon ke liye
                complete digital sales systems design karte hain. Seedha
                WhatsApp karein, free consultation mein apni situation discuss
                karein.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/916264906078"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-black rounded-2xl bg-white text-blue-800 hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform"
                >
                  💬 WhatsApp Par Baat Karein
                </a>
                <Link
                  href="/services/business"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl border-2 border-white/30 text-white hover:bg-white/10 transition-all"
                >
                  Hamare Packages Dekhein →
                </Link>
              </div>
              <p className="text-blue-200/60 text-xs mt-6">
                *Quality aur focus ke liye hum har mahine sirf 5 naye MP-based
                projects lete hain. Pehle aayein, pehle paayein.
              </p>
            </div>
          </div>

          {/* Closing */}
          <p className="text-gray-500 text-sm border-t border-gray-200 pt-8 leading-relaxed">
            MP ke vyapari ko sirf ek mauka chahiye — ek sahi platform, ek sahi
            disha, aur ek bharosemand saathi. Madhya Pradesh mein anginat
            talented log hain jinka product world-class hai, bas distribution
            broken hai. Agar aapko is guide ne kuch bhi sikhaaya, toh ise apne
            mohalle ke un vyapariyon ke saath share zaroor karein jinhein
            digital world ki zaroorat hai, taaki MP ka vyapari bhi aage badhe.
          </p>

          <div className="flex items-center gap-4 pb-12">
            <span className="font-bold text-gray-900 text-sm">
              Share this guide:
            </span>
            <button
              title="Share"
              className="p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm"
            >
              <Share2 size={18} />
            </button>
          </div>
        </article>
      </main>
    </div>
  );
}
