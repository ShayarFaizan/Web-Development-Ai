"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Zap, Clock, Star, CheckCircle, TrendingUp, MapPin } from "lucide-react";

export default function AiSeWebsiteBanaoPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans">

      {/* Top Nav */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e0e0e0]">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/blog/raipur-bangalore-vs-local-developer"
            className="flex items-center gap-2 text-[#1a73e8] text-sm font-semibold hover:bg-blue-50 px-3 py-2 rounded-full transition-all"
          >
            <ArrowLeft size={18} /> Pichla Part
          </Link>
          <div className="text-[12px] font-bold text-[#5f6368] tracking-widest uppercase bg-[#f1f3f4] px-3 py-1 rounded-full">
            Part 4: Hamara Tarika
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-white border-b border-[#e0e0e0]">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-wide uppercase">
            <Zap size={14} /> WebDevelopmentAI Ka Exclusive Approach
          </div>
          <h1 className="text-[36px] md:text-[52px] font-extrabold text-[#202124] leading-[1.1] mb-8 tracking-tight">
            AI se Website Banana —{" "}
            <br />
            <span className="text-emerald-500">Kam Time Mein, Better Results</span>
          </h1>
          <p className="text-[20px] text-[#5f6368] max-w-2xl mx-auto leading-relaxed">
            Jab baaki agencies aaj bhi manually kaam karti hain — hum ek alag hi level par kaam karte hain. 
            Bilaspur ke pehle AI-powered web development studio ki kahani.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm text-[#5f6368]">
            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-emerald-500" /> Bilaspur, Chhattisgarh</span>
            <span className="w-1 h-1 rounded-full bg-[#dadce0]" />
            <span>April 2026</span>
            <span className="w-1 h-1 rounded-full bg-[#dadce0]" />
            <span>7 min read</span>
          </div>
        </div>
      </div>

      {/* Main Article */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">

          {/* Hook */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-xl shadow-emerald-900/5 border border-emerald-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-[0.04] pointer-events-none">
              <Zap size={200} className="text-emerald-500" />
            </div>
            <p className="text-[20px] md:text-[24px] text-[#202124] font-semibold leading-relaxed mb-6">
              Bilaspur mein aaj bhi zyaadatar web developers waise hi kaam karte hain jaise 10 saal pehle karte the — ek-ek screen manually design karo, ek-ek line code khud likho, aur phir 4–8 hafte baad client ko deliver karo.
            </p>
            <p className="text-[18px] text-[#5f6368] leading-relaxed">
              Hum alag hain. <strong className="text-[#202124]">WebDevelopmentAI ne ek aisa workflow develop kiya hai</strong> jisme AI ka intelligent use karte hue ham woh kaam 13–21 din mein karte hain jo doosron ko months lagte hain — aur quality mein koi compromise nahi.
            </p>
          </div>

          {/* Section 1: The Problem with Old Way */}
          <div>
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#202124] mb-8 leading-tight">
              😓 Purana Tarika — Slow, Costly, Unpredictable
            </h2>
            <div className="bg-white rounded-[24px] p-6 md:p-8 border border-[#e0e0e0] shadow-sm">
              <p className="text-[17px] text-[#5f6368] mb-6 leading-relaxed">
                Traditional web development process mein yeh hota hai:
              </p>
              <div className="space-y-4">
                {[
                  { week: "Week 1–2", task: "Client se requirements lena, wireframes banana — manually, kaafi baar galat bhi hote hain", icon: "📝" },
                  { week: "Week 3–4", task: "Design banana — Photoshop ya Figma mein ek-ek element haath se place karo", icon: "🎨" },
                  { week: "Week 5–6", task: "Coding — simple cheezein bhi manually type karo, errors dhundo, phir fix karo", icon: "💻" },
                  { week: "Week 7–8", task: "Testing aur revisions — client unhappy, changes maange, phir se wahi loop", icon: "🔁" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-red-50/50 rounded-2xl p-4 border border-red-100">
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <div className="text-[12px] font-bold text-red-600 uppercase tracking-wide mb-1">{item.week}</div>
                      <div className="text-[15px] text-[#3c4043] leading-relaxed">{item.task}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-red-100 rounded-2xl p-4 text-[15px] text-red-700">
                <strong>Total time:</strong> 6–12 hafte. <strong>Cost client ke liye:</strong> zyada. <strong>Frustration:</strong> bahut.
              </div>
            </div>
          </div>

          {/* Section 2: Our AI-Powered Way */}
          <div>
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#202124] mb-4 leading-tight">
              ⚡ Hamara Tarika — AI + Human Expertise
            </h2>
            <p className="text-[18px] text-[#5f6368] mb-8 leading-relaxed">
              Humne ek aisa system develop kiya hai jisme AI aur human samajh dono saath kaam karte hain. Na sirf tools use karna — 
              <strong className="text-[#202124]"> ek poora thought-out workflow jise hum apne har project mein apply karte hain.</strong>
            </p>

            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  step: "01",
                  title: "Samajhna — Client Ki Zaroorat Ko Alag Andaaz Mein",
                  desc: "Hum pehle client ki business, audience aur goals deeply samajhte hain. Phir AI ka use karke multiple design directions aur content structures rapidly generate karte hain — taaki client ko concrete options milein, sirf vague promises nahi.",
                  result: "Kya milta hai: Client ek hi meeting mein 3–4 options dekh leta hai. Confusion zero.",
                  color: "emerald",
                  icon: "🧠",
                },
                {
                  step: "02",
                  title: "Design — Hours Mein, Weeks Mein Nahi",
                  desc: "AI ki madad se hum design iterations rapid speed par generate karte hain. Jo pehle ek designer ko 2 hafte lagte the — hum woh professionally in hours karte hain. Lekin final design hamesha human eye se review hoti hai — isliye quality mein koi compromise nahi.",
                  result: "Kya milta hai: Premium design, 60–70% faster delivery.",
                  color: "blue",
                  icon: "🎨",
                },
                {
                  step: "03",
                  title: "Content & Copy — SEO-Ready, Local Audience Ke Liye",
                  desc: "Bilaspur aur Chhattisgarh ke local audience ke liye content likhna ek skill hai. Hum AI-assisted content generation karte hain lekin har word local context ke hisaab se polish karte hain — taaki Google par rank bhi ho aur local log connect bhi karein.",
                  result: "Kya milta hai: SEO-optimized content jo actually padhne mein acha lage.",
                  color: "purple",
                  icon: "✍️",
                },
                {
                  step: "04",
                  title: "Development — Clean Code, Fast Website",
                  desc: "AI-assisted development workflow se hum clean, fast-loading websites banate hain. Page speed score 90+ — jo Google ranking ke liye critical hai. Doosron ki websites jahan 4–6 seconds load hoti hain, hamari 1–2 seconds mein.",
                  result: "Kya milta hai: Google-friendly website jo mobile par bhi lightning fast ho.",
                  color: "orange",
                  icon: "🚀",
                },
              ].map((item, i) => {
                const colorMap: Record<string, string> = {
                  emerald: "bg-emerald-50 border-emerald-100 text-emerald-600",
                  blue: "bg-blue-50 border-blue-100 text-blue-600",
                  purple: "bg-purple-50 border-purple-100 text-purple-600",
                  orange: "bg-orange-50 border-orange-100 text-orange-600",
                };
                const resultMap: Record<string, string> = {
                  emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
                  blue: "bg-blue-50 text-blue-700 border-blue-100",
                  purple: "bg-purple-50 text-purple-700 border-purple-100",
                  orange: "bg-orange-50 text-orange-700 border-orange-100",
                };
                return (
                  <div key={i} className="bg-white rounded-[24px] p-6 md:p-8 border border-[#e0e0e0] shadow-sm">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`text-[11px] font-black tracking-widest px-3 py-1 rounded-full border ${colorMap[item.color]}`}>
                        STEP {item.step}
                      </div>
                    </div>
                    <h3 className="text-[20px] font-bold text-[#202124] mb-3 flex items-center gap-3">
                      <span>{item.icon}</span> {item.title}
                    </h3>
                    <p className="text-[16px] text-[#5f6368] leading-relaxed mb-4">{item.desc}</p>
                    <div className={`rounded-xl p-3 border text-[14px] font-semibold ${resultMap[item.color]}`}>
                      ✅ {item.result}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 3: Real Numbers */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 border border-[#e0e0e0] shadow-sm">
            <h2 className="text-[26px] md:text-[32px] font-bold text-[#202124] mb-8 leading-tight">
              📊 Numbers Jo Bolte Hain
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { number: "13–21", unit: "Din", label: "Avg. Delivery Time", color: "text-emerald-600" },
                { number: "90+", unit: "Score", label: "Google Page Speed", color: "text-blue-600" },
                { number: "60%", unit: "Faster", label: "Than Traditional Dev", color: "text-purple-600" },
                { number: "1st", unit: "Page", label: "Google Rank Target", color: "text-orange-500" },
              ].map((stat, i) => (
                <div key={i} className="bg-[#f8f9fa] rounded-2xl p-5 text-center">
                  <div className={`text-[36px] font-extrabold ${stat.color}`}>{stat.number}</div>
                  <div className={`text-[13px] font-bold ${stat.color}`}>{stat.unit}</div>
                  <div className="text-[12px] text-[#5f6368] mt-1 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: AI Tools Mention — Subtle */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 border border-[#e0e0e0] shadow-sm">
            <h2 className="text-[26px] md:text-[32px] font-bold text-[#202124] mb-4 leading-tight">
              🤖 AI Ka Role — Kaise Kaam Karta Hai Hamara System
            </h2>
            <p className="text-[17px] text-[#5f6368] mb-8 leading-relaxed">
              Hum AI ko ek <strong className="text-[#202124]">intelligent assistant ki tarah use karte hain</strong> — na ki replacement. 
              Hamare workflow mein cutting-edge AI technologies integrate hain jo design speed, code quality aur content accuracy teeno mein improvement laati hain. 
              Market mein kaafi AI tools hain — ChatGPT, Gemini, Copilot — lekin hamari value yeh nahi ki hum kaunsa tool use karte hain, 
              <strong className="text-[#202124]"> value yeh hai ki hum kaise use karte hain.</strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: "🧠",
                  title: "Design Intelligence",
                  desc: "AI se rapid prototyping aur UI suggestions — phir hamara expert human eye final polish karta hai.",
                },
                {
                  icon: "⚡",
                  title: "Code Quality Boost",
                  desc: "AI-assisted coding se faster development aur automatically clean, bug-free code generation.",
                },
                {
                  icon: "🔍",
                  title: "SEO Optimization",
                  desc: "AI se keyword research, meta tags aur content structure — local Bilaspur search ke liye specifically tuned.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#f8f9fa] rounded-2xl p-5">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="font-bold text-[#202124] mb-2">{item.title}</div>
                  <div className="text-[14px] text-[#5f6368] leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Why Nobody Else Does This Locally */}
          <div>
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#202124] mb-8 leading-tight">
              🏆 Bilaspur Mein Yeh Koi Nahi Karta — Abhi Tak
            </h2>
            <div className="space-y-4">
              {[
                "Zyaadatar local developers traditional tools se kaam karte hain — seekhne ka time nahi ya interest nahi.",
                "Bahari agencies jo AI use karti hain, unhe Bilaspur ka local context samajh nahi aata — toh result generic hota hai.",
                "Hum dono ka fayda dete hain: <strong>local samajh + modern AI-powered execution.</strong>",
                "Iska matlab hai: aapki website sirf dikhne mein better nahi — woh search engine par bhi faster rank karti hai.",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-[#e0e0e0] shadow-sm">
                  <CheckCircle size={20} className="text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-[16px] text-[#3c4043] leading-relaxed" dangerouslySetInnerHTML={{ __html: point }} />
                </div>
              ))}
            </div>
          </div>

          {/* SEO Comparison Block */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 border border-[#e0e0e0] shadow-sm">
            <h2 className="text-[24px] md:text-[30px] font-bold text-[#202124] mb-6 leading-tight">
              🔎 Google Rank Mein Kya Fark Padta Hai?
            </h2>
            <p className="text-[17px] text-[#5f6368] mb-6 leading-relaxed">
              "Website ban gayi" kaafi nahi hai. <strong className="text-[#202124]">Google par dikhna zaroori hai.</strong> Hamara AI-assisted approach ensure karta hai:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Page Load Speed", ours: "1–2 sec ⚡", others: "4–7 sec 🐢" },
                { label: "Mobile Optimization", ours: "100% responsive ✅", others: "Often broken ❌" },
                { label: "Local SEO Setup", ours: "Bilaspur-specific 📍", others: "Generic keywords" },
                { label: "Content Quality", ours: "Structured + readable", others: "Copy-paste content" },
                { label: "Meta Tags & Schema", ours: "Auto-optimized ✅", others: "Usually missing ❌" },
                { label: "First Rank Timeline", ours: "2–4 months (local)", others: "6–12 months+" },
              ].map((row, i) => (
                <div key={i} className="bg-[#f8f9fa] rounded-xl p-4">
                  <div className="text-[12px] font-bold text-[#5f6368] uppercase tracking-wide mb-2">{row.label}</div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-[14px] text-emerald-700 font-semibold bg-emerald-50 px-3 py-1 rounded-lg flex-1 text-center">{row.ours}</div>
                    <div className="text-[11px] text-[#5f6368] shrink-0">vs</div>
                    <div className="text-[14px] text-[#5f6368] bg-white border border-[#e0e0e0] px-3 py-1 rounded-lg flex-1 text-center">{row.others}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <section className="bg-linear-to-br from-[#0a0a1a] to-[#1a2744] rounded-[32px] p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-4 left-4 w-40 h-40 border border-emerald-400 rounded-full" />
              <div className="absolute bottom-4 right-4 w-64 h-64 border border-emerald-400 rounded-full" />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-wide uppercase">
                <Zap size={12} /> Bilaspur Ka Pehla AI-Powered Studio
              </div>
              <h2 className="text-[28px] md:text-[40px] font-extrabold text-white mb-6 leading-tight">
                3 Din Mein Website Ready. <br />
                <span className="text-emerald-400">Google Par Rank Bhi.</span>
              </h2>
              <p className="text-white/70 text-[18px] mb-10 max-w-lg mx-auto leading-relaxed">
                Sirf design nahi — ek complete system jo aapke Bilaspur business ko online laata hai aur Google search mein visible karta hai.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/book-appointment" className="bg-emerald-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all hover:bg-emerald-400">
                  Free Consultation Lijiye
                </a>
                <a href="https://wa.me/916264906078" className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all">
                  WhatsApp Par Poochho
                </a>
              </div>
              <p className="text-white/40 text-sm mt-6">Bilaspur, Chhattisgarh • AI-Powered Web Development</p>
            </div>
          </section>

          <div className="mt-32 pt-20 border-t border-[#dadce0]">
            <div className="text-[13px] font-bold text-[#1a73e8] tracking-[0.3em] uppercase mb-12 text-center">
              Series Mein Aur Padho
            </div>

            <div className="relative max-w-2xl mx-auto pb-10">
              {/* Left Arrow — Part 3 */}
              <Link
                href="/blog/raipur-bangalore-vs-local-developer"
                className="absolute top-1/2 -left-10 md:-left-12 -translate-y-1/2 z-10 hidden md:block"
              >
                <div className="w-20 h-20 bg-white border border-[#dadce0] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all cursor-pointer">
                  <ArrowLeft className="text-[#202124]" size={32} />
                </div>
              </Link>

              {/* Right Arrow — Part 5 */}
              <Link
                href="/blog/chhattisgarh-ke-liye-best-website-type"
                className="absolute top-1/2 -right-10 md:-right-12 -translate-y-1/2 z-10 hidden md:block"
              >
                <div className="w-20 h-20 bg-white border border-[#dadce0] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all cursor-pointer">
                  <ArrowRight className="text-[#202124]" size={32} />
                </div>
              </Link>

              {/* Carousel Window — Part 5 Preview */}
              <div className="overflow-hidden rounded-[32px] bg-white border border-[#dadce0] shadow-2xl">
                <div className="p-8 md:p-12">
                  <div className="flex flex-col items-center text-center">
                    <div className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-600 text-[11px] font-bold tracking-widest uppercase mb-6">
                      Part 5: Website Type Guide
                    </div>
                    <h3 className="text-[26px] md:text-[32px] font-bold text-[#202124] mb-4 leading-tight">
                      Static vs Dynamic vs E-commerce — <br /> Chhattisgarh Business Ke Liye Kya Sahi Hai?
                    </h3>
                    <p className="text-[#5f6368] text-lg mb-10 max-w-md mx-auto">
                      Decision table, budget guide aur 5 common galtiyan — sab ek jagah. Directly converts.
                    </p>
                    <Link
                      href="/blog/chhattisgarh-ke-liye-best-website-type"
                      className="bg-violet-500 text-white px-10 py-5 rounded-2xl font-bold text-[17px] hover:shadow-2xl hover:scale-105 active:scale-95 transition-all mb-4"
                    >
                      Agla Part Padho →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile Arrows */}
              <div className="flex justify-center gap-6 mt-10 md:hidden">
                <Link
                  href="/blog/raipur-bangalore-vs-local-developer"
                  className="w-16 h-16 bg-white border border-[#dadce0] rounded-full flex items-center justify-center shadow-xl active:scale-90 transition-all"
                >
                  <ArrowLeft className="text-[#202124]" size={28} />
                </Link>
                <Link
                  href="/blog/chhattisgarh-ke-liye-best-website-type"
                  className="w-16 h-16 bg-white border border-[#dadce0] rounded-full flex items-center justify-center shadow-xl active:scale-90 transition-all"
                >
                  <ArrowRight className="text-[#202124]" size={28} />
                </Link>
              </div>

              {/* Pagination Dots — position 4 of 5 */}
              <div className="flex justify-center gap-3 mt-12 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#dadce0]" />
                <div className="w-3 h-3 rounded-full bg-[#dadce0]" />
                <div className="w-3 h-3 rounded-full bg-[#dadce0]" />
                <div className="w-8 h-3 rounded-full bg-emerald-500" />
                <div className="w-3 h-3 rounded-full bg-[#dadce0]" />
              </div>
            </div>
          </div>

        </div>
      </article>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-[#e0e0e0]">
        <div className="max-w-4xl mx-auto px-6 text-center text-[#5f6368] text-sm">
          © 2026 WebDevelopmentAI • AI-Powered Web Development • Bilaspur, Chhattisgarh
        </div>
      </footer>

    </div>
  );
}
