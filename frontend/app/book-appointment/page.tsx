"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Video, CheckCircle2, CalendarDays } from "lucide-react";

export default function BookAppointment() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white pt-[60px] md:pt-[90px] pb-32 md:pb-10 px-4 sm:px-6 relative overflow-x-hidden font-sans">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#1a150e] to-transparent pointer-events-none z-0" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#d4a75c] rounded-full blur-[150px] opacity-10 z-0" />
      <div className="absolute top-40 -left-20 w-72 h-72 bg-[#e3bc7c] rounded-full blur-[120px] opacity-10 z-0" />

      <div className="max-w-6xl mx-auto relative z-10 w-full animate-fade-in-up">
        {/* Back Button */}
        <div className="mb-6 md:mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#d4a75c] transition-colors duration-200 font-medium text-sm border border-white/10 px-4 py-2 rounded-full hover:bg-white/5 bg-[#111]"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Details & Value Prop */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#d4a75c]/20 to-transparent border border-[#d4a75c]/30 text-[#e3bc7c] text-xs font-semibold tracking-widest uppercase mb-6 w-fit">
              <CalendarDays size={14} />
              <span>Free Consultation</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Book Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e3bc7c] via-[#fef1cd] to-[#d4a75c]">
                Strategy Session
              </span>
            </h1>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              Discuss your project requirements with our experts. Get personalized strategies to elevate your online presence and scale your business using cutting-edge web technologies.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4 items-start">
                <div className="mt-1 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-[#d4a75c]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">60 Minutes Session</h3>
                  <p className="text-sm text-gray-400">Deep dive into your business goals and website requirements.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="mt-1 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Video size={18} className="text-[#d4a75c]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Google Meet Video</h3>
                  <p className="text-sm text-gray-400">Conference info will be sent to your email after booking.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#111] border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#e3bc7c] to-[#d4a75c]" />
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">What you'll get:</h4>
              <ul className="space-y-3">
                {[
                  "Clear project roadmap",
                  "Expert technical advice",
                  "Architecture recommendations",
                  "No-obligation cost estimate"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-[#d4a75c]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Google Calendar Embed */}
          <div className="lg:col-span-8 relative">
            {/* Soft glow behind the calendar */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#e3bc7c]/30 to-[#d4a75c]/30 rounded-[28px] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 pointer-events-none"></div>
            
            <div className="relative bg-white rounded-[24px] p-2 md:p-4 h-[850px] md:h-[700px] shadow-2xl overflow-hidden flex flex-col items-center justify-center ring-1 ring-white/20">
              {mounted ? (
                <iframe
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2X0wzbJRu9ntFcTM32JTxuaYCjbNfoT0w8ckG1cMH1XMwryHaCpY3KXwtqzBoT6Wqp0B5Jej-3?gv=true"
                  style={{ border: 0 }}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="rounded-[16px] w-full h-full"
                  title="Book an appointment"
                ></iframe>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-black">
                  <div className="w-10 h-10 border-4 border-gray-200 border-t-[#d4a75c] rounded-full animate-spin mb-4"></div>
                  <p className="text-gray-500 font-medium animate-pulse">Loading Calendar...</p>
                </div>
              )}
            </div>
            
            {/* Mobile note and fallback */}
            <div className="flex flex-col items-center mt-6 lg:hidden space-y-3">
              <p className="text-center text-xs text-gray-500">
                If the calendar isn't responding, try opening it in a new window.
              </p>
              <a 
                href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2X0wzbJRu9ntFcTM32JTxuaYCjbNfoT0w8ckG1cMH1XMwryHaCpY3KXwtqzBoT6Wqp0B5Jej-3?gv=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-colors"
              >
                <CalendarDays size={16} />
                Open Calendar in Full Screen
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Global styles for animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}} />
    </div>
  );
}
