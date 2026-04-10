"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import { UserCheck, Star, Eye, TrendingUp, ShieldCheck, Lightbulb, Handshake } from "lucide-react";

export default function AboutPage() {
  const [trophyIdx, setTrophyIdx] = useState(0);
  return (
    <div className="bg-white min-h-screen">
      {/* ─── Hero Section ─── */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111] leading-tight">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
            At Web Development AI, our team and culture are at the heart of our success. 
            We build performant, beautiful, and AI-powered web solutions. As a trusted <strong className="font-semibold text-gray-800">freelance web developer Bilaspur</strong>, we craft exceptional digital experiences for businesses across India.
          </p>
          <div className="pt-4">
            <Link 
              href="/book-appointment" 
              className="inline-block bg-[#0d0d0d] text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition-all shadow-lg"
            >
              Work With Us
            </Link>
          </div>
        </div>
        <div className="flex-1 relative w-full rounded-2xl overflow-hidden animate-slide-up bg-gray-50/50 p-2 border border-gray-100">
          <Image
            src="/assets/about.png"
            alt="Our Innovation Hub"
            width={800}
            height={600}
            className="w-full h-auto object-contain rounded-xl shadow-xl"
            priority
          />
        </div>
      </section>

      {/* ─── Mission Section ─── */}
      <section id="mission" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111] leading-tight">
              Our Mission: Empowering Businesses to Build Better
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe in more than just scaling; we believe in growing with purpose. 
              By combining cutting-edge AI technology with modern web frameworks like Next.js, 
              we help millions of organizations grow better, not just bigger. 
              Your success is our success.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-[#e3bc7c]">99%</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Client Satisfaction</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-[#e3bc7c]">500+</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Projects Delivered</p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-50/30 p-2 border border-gray-100">
            <Image
              src="/assets/growth.jpg"
              alt="Collaboration and Growth"
              width={800}
              height={600}
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* ─── Value Section ─── */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-[#111] mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "AI-Driven Innovation",
              desc: "We leverage advanced AI to automate development and optimize performance.",
              icon: "🚀"
            },
            {
              title: "Next-Gen Performance",
              desc: "Websites built with Next.js for blazing-fast speed and SEO excellence.",
              icon: "⚡"
            },
            {
              title: "Client-Centric Approach",
              desc: "We prioritize your business goals and user needs above all else.",
              icon: "🤝"
            }
          ].map((val, i) => (
            <div key={i} className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{val.icon}</div>
              <h3 className="text-xl font-bold mb-3">{val.title}</h3>
              <p className="text-gray-600">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Tech Stack Section ─── */}
      <section className="bg-[#fcfcfc] py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#111] mb-6">Our Technology Stack</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            We utilize the latest modern web technologies to build lightning-fast, highly scalable web applications. If you're looking for an expert <strong className="font-semibold text-gray-800">Next.js developer Bilaspur</strong> or a top-tier <strong className="font-semibold text-gray-800">React developer Bilaspur</strong>, you are in the right place.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Firebase", "Node.js"].map((tech, i) => (
              <div key={i} className="px-6 py-3 bg-white rounded-full border border-gray-200 shadow-sm text-gray-800 font-medium">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Founder's Journey Section ─── */}
      <section id="founder" className="bg-[#0a0a0a] py-20 md:py-28 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#e3bc7c] rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#d4a75c] rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-[55%] relative group">
              <div className="absolute -inset-4 bg-linear-to-r from-[#e3bc7c] to-[#d4a75c] rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/assets/mentor gyan team.jpeg"
                  alt="Founder's Team & Journey"
                  fill
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
              
              {/* Subtle badge for desktop */}
              <div className="absolute -bottom-4 -right-4 bg-[#e3bc7c] text-black px-6 py-2 rounded-lg shadow-2xl hidden md:block border border-white/20 font-bold uppercase tracking-tighter text-sm">
                The Power of Teamwork 🤝
              </div>
            </div>

            <div className="w-full lg:w-[45%] space-y-6 md:space-y-8">
              <div className="space-y-3">
                <h2 className="text-white text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
                  Know About The <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-[#e3bc7c] via-[#fef1cd] to-[#d4a75c]">
                    Founder's Journey
                  </span>
                </h2>
                <div className="w-24 h-1.5 bg-linear-to-r from-[#e3bc7c] to-[#d4a75c] rounded-full"></div>
              </div>

              <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed italic border-l-2 border-white/10 pl-6">
                <p>
                  "I’ve learned that success is not just about skills, but about understanding people — how they think, communicate, and collaborate. Every individual brings a different perspective, and when aligned with the right approach, it creates something far more powerful than individual effort."
                </p>
                <p>
                  "One key lesson that stayed with me: adaptability is the real strength. The ability to listen, adjust, and grow with diverse teams is what builds not just better outcomes, but stronger relationships."
                </p>
                <p className="not-italic font-medium text-[#e3bc7c] pt-4">
                  Grateful for every experience, every challenge, and every team that shaped this learning. 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Trophy Moments Section ─── */}
      <section id="awards" className="bg-white py-20 md:py-28 overflow-hidden relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            {/* Image Slider Column (RIGHT on Desktop) */}
            <div className="w-full lg:w-[50%] relative group">
              <div className="relative w-full aspect-square md:aspect-4/5 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-gray-50 border border-gray-100">
                <div className="absolute inset-0 flex transition-transform duration-500 ease-out" 
                     style={{ transform: `translateX(-${trophyIdx * 100}%)` }}>
                  {["award.heic", "award 2.heic", "award 3.heic"].map((img, i) => (
                    <div key={i} className="relative min-w-full h-full">
                      <Image
                        src={`/assets/${img}`}
                        alt={`Award ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Navigation Arrows */}
                <button 
                  onClick={() => setTrophyIdx((prev) => (prev - 1 + 3) % 3)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-800 hover:bg-[#e3bc7c] hover:text-black transition-all z-20"
                >
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <button 
                  onClick={() => setTrophyIdx((prev) => (prev + 1) % 3)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-800 hover:bg-[#e3bc7c] hover:text-black transition-all z-20"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                </button>

                {/* Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {[0, 1, 2].map((i) => (
                    <button
                      key={i}
                      onClick={() => setTrophyIdx(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${i === trophyIdx ? "w-8 bg-[#e3bc7c]" : "w-2 bg-white/50"}`}
                    />
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#e3bc7c]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            </div>

            {/* Content Column (LEFT on Desktop) */}
            <div className="w-full lg:w-[50%] space-y-8">
              <div className="space-y-4">
                <span className="text-[#e3bc7c] font-black text-sm uppercase tracking-[0.3em] inline-block mb-2">The Milestone</span>
                <h2 className="text-[#111] text-3xl md:text-5xl font-black leading-tight tracking-tight">
                  Proof of <span className="text-[#e3bc7c]">Perseverance</span>
                </h2>
                <div className="w-20 h-1.5 bg-[#e3bc7c] rounded-full"></div>
              </div>

              <div className="space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed">
                <p className="font-medium text-gray-900">
                  Sometimes in life, you receive a <span className="text-[#e3bc7c] italic">*trophy*</span>… something that looks small from the outside, but carries an entire journey behind it.
                </p>
                <p>
                  Those late nights… the confusion… the self-doubt… and still choosing to show up every single day — none of that is visible to people. They only see the final result.
                </p>
                <div className="relative py-6">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-[#e3bc7c] to-[#d4a75c] rounded-full opacity-30"></div>
                  <p className="pl-6 text-gray-500 italic">
                    "There are moments when you feel completely broken… but even in those moments, one thing should never be lost — hope. Because maybe that’s what life truly means… to keep going, even when it feels impossible."
                  </p>
                </div>
                <p>
                  A trophy is not just a piece of metal… it’s proof that you didn’t give up. That even when things were difficult, you kept moving forward.
                </p>
                <div className="space-y-4 pt-4">
                  <p className="text-gray-900 font-bold">And here’s the truth:</p>
                  <p>
                    Everyone has a “trophy moment” waiting in their life… the only difference is, some people stop just before they reach it.
                  </p>
                </div>
                <div className="bg-[#111] p-6 rounded-2xl text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#e3bc7c]/10 rounded-full blur-3xl -z-10"></div>
                  <p className="relative z-10 font-bold mb-2">If you’re in your struggle phase right now…</p>
                  <p className="relative z-10 text-[#e3bc7c]">Understand this — you might be just one step away from your next trophy.</p>
                  <p className="relative z-10 text-2xl font-black mt-4 tracking-wider">KEEP GOING. 🏆</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Journey with People (Collage) Section ─── */}
      <section id="photos" className="bg-[#0f1115] py-20 md:py-28 overflow-hidden relative border-t border-white/5">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#e3bc7c]/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Collage Column (LEFT on Desktop) - Masonry Layout to prevent cropping */}
            <div className="w-full lg:w-[55%] columns-2 md:columns-3 gap-4 space-y-4">
            {[
                "chhattisgarh state finalcial officer.png",
                "j1.webp", "j2.webp", "j3.webp", 
                "j4.webp", "j5.webp", "j6.webp", 
                "j7.jpeg", "j8.jpeg", "j9jpeg.jpeg", "j10.jpeg"
              ].map((img, i) => (
                <div 
                  key={i} 
                  className="relative rounded-2xl overflow-hidden shadow-2xl group transition-all duration-500 hover:scale-[1.02] border border-white/10 break-inside-avoid mb-4"
                >
                  <img
                    src={`/assets/${img}`}
                    alt={`Journey Moment ${i + 1}`}
                    className="w-full h-auto block transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Content Column (RIGHT on Desktop) */}
            <div className="w-full lg:w-[45%] space-y-8">
              <div className="space-y-4">
                <span className="text-[#e3bc7c] font-bold text-sm uppercase tracking-[0.4em] inline-block mb-2">The Human Connection</span>
                <h2 className="text-white text-3xl md:text-5xl font-black leading-tight">
                  Relationships Over <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-[#e3bc7c] via-white to-blue-400">
                    Milestones
                  </span>
                </h2>
                <div className="w-24 h-1.5 bg-linear-to-r from-[#e3bc7c] to-blue-400 rounded-full"></div>
              </div>

              <div className="space-y-6 text-gray-400 text-lg md:text-xl leading-relaxed">
                <p className="border-l-4 border-[#e3bc7c]/30 pl-6 text-white font-medium italic">
                  "Not every journey is about reaching somewhere… sometimes it’s about the people you meet along the way."
                </p>
                
                <p>
                  Different faces, different mindsets, different stories — yet somehow, you grow together. Some become mentors, some become friends, and some become silent lessons that shape who you are.
                </p>

                <p className="text-gray-300">
                  There are moments when you feel lost, when things don’t make sense, when you feel completely broken inside… but then, <span className="text-white font-semibold">the right people at the right time</span> remind you why you started.
                </p>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <p className="text-sm md:text-base mb-4">
                    These pictures are not just memories… they are a reminder that <span className="text-[#e3bc7c] font-bold">growth is never a solo journey</span>. It’s built through conversations, support, guidance, and shared struggles.
                  </p>
                  <p className="text-white font-bold">
                    And maybe that’s what truly matters — not just what you achieve, but who you become and who you walk that path with.
                  </p>
                </div>

                <div className="pt-4">
                  <p className="text-[#e3bc7c] font-medium flex items-center gap-3">
                    <span className="h-px w-8 bg-[#e3bc7c]"></span>
                    Keep growing, keep connecting. 🤝
                  </p>
                  <p className="text-xs text-gray-500 mt-2 ml-11">Everyone has people like this in their life. Sometimes we just forget to value them.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Values Section ─── */}
      <section id="values" className="bg-gray-50 py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 md:mb-24 space-y-4">
            <span className="text-[#e3bc7c] font-black text-sm uppercase tracking-[0.4em] block">Our Foundation</span>
            <h2 className="text-[#111] text-4xl md:text-6xl font-black leading-tight">
              Our <span className="text-[#e3bc7c]">Core Values</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#e3bc7c] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                title: "Customer First",
                desc: "Every decision starts with the customer’s need, not convenience.",
                icon: <UserCheck className="w-8 h-8 text-[#e3bc7c]" />
              },
              {
                title: "Quality over Quantity",
                desc: "Focus on delivering work that actually creates impact, not just output.",
                icon: <Star className="w-8 h-8 text-[#e3bc7c]" />
              },
              {
                title: "Transparency",
                desc: "Clear communication, honest timelines, no hidden surprises.",
                icon: <Eye className="w-8 h-8 text-[#e3bc7c]" />
              },
              {
                title: "Continuous Growth",
                desc: "Learning, improving, and adapting is a constant process.",
                icon: <TrendingUp className="w-8 h-8 text-[#e3bc7c]" />
              },
              {
                title: "Ownership",
                desc: "Taking full responsibility for work, results, and commitments.",
                icon: <ShieldCheck className="w-8 h-8 text-[#e3bc7c]" />
              },
              {
                title: "Innovation Mindset",
                desc: "Always looking for smarter, faster, and better ways to solve problems.",
                icon: <Lightbulb className="w-8 h-8 text-[#e3bc7c]" />
              },
              {
                title: "Collaboration",
                desc: "Strong results come from teamwork, not individual effort alone.",
                icon: <Handshake className="w-8 h-8 text-[#e3bc7c]" />
              }
            ].map((value, i) => (
              <div 
                key={i} 
                className={`p-10 bg-white rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-gray-100 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(227,188,124,0.1)] hover:-translate-y-2 group
                  ${i === 6 ? "lg:col-start-2" : ""}
                `}
              >
                <div className="w-16 h-16 bg-[#e3bc7c]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-black text-[#111] mb-4 tracking-tight">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials Section ─── */}
      <section id="testimonials" className="bg-white py-20 md:py-32 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#e3bc7c]/5 rounded-full blur-[120px] -ml-40" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -mr-20" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="space-y-4 mb-16">
            <span className="text-[#e3bc7c] font-black text-sm uppercase tracking-[0.4em] block">Testimonials</span>
            <h2 className="text-[#111] text-4xl md:text-5xl font-black leading-tight">
              Client <span className="text-[#e3bc7c]">Appreciation</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#e3bc7c] mx-auto rounded-full"></div>
            <p className="text-gray-500 text-lg mt-6">
              The real measure of our success is the growth and satisfaction of those we work with.
            </p>
          </div>

          <div className="relative group max-w-2xl mx-auto">
            {/* Elegant Frame */}
            <div className="absolute -inset-4 bg-linear-to-r from-[#e3bc7c]/20 via-white to-blue-400/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
            
            <div className="relative bg-white p-2 md:p-3 rounded-4xl shadow-2xl border border-gray-100 overflow-hidden transform group-hover:scale-[1.01] transition-transform duration-500">
              <Image 
                src="/assets/testimoial 1.png"
                alt="Client Testimonial"
                width={800}
                height={600}
                className="w-full h-auto rounded-3xl"
              />
            </div>

            {/* Quote Icon Decorations */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#e3bc7c] rounded-full flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform">
              <span className="text-white text-2xl font-serif">“</span>
            </div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-[#111] rounded-full flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform">
              <span className="text-white text-2xl font-serif">”</span>
            </div>
          </div>

          <div className="mt-16 text-gray-400 font-medium italic">
            "Your trust is our greatest asset, and your success is our primary goal."
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

// Any other component additions or changes should follow proper React and Next.js patterns
