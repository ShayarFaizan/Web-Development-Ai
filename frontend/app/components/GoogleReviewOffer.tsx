"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Star, MessageSquare, CheckCircle2, Phone, Clock } from "lucide-react";

export default function GoogleReviewOffer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [expiryDate, setExpiryDate] = useState("");

  useEffect(() => {
    // SCARCITY LOGIC: The offer always ends 3 days from the user's current visit
    // To make it persistent for the user, we can set a date and store it in localStorage
    // or simply calculate it based on the current date so it always feels fresh.
    
    let targetTime;
    const storedTarget = localStorage.getItem("google_review_offer_target");
    
    const now = new Date();
    
    if (storedTarget) {
      targetTime = parseInt(storedTarget);
      // If the stored date has passed, reset it to a new 3-day window
      if (now.getTime() > targetTime) {
        targetTime = now.getTime() + (3 * 24 * 60 * 60 * 1000); 
        localStorage.setItem("google_review_offer_target", targetTime.toString());
      }
    } else {
      // First visit: Set target to 3 days from now
      targetTime = now.getTime() + (3 * 24 * 60 * 60 * 1000);
      localStorage.setItem("google_review_offer_target", targetTime.toString());
    }

    // Format the expiry date for display (e.g., "14 April")
    const dateObj = new Date(targetTime);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString('en-US', { month: 'long' });
    setExpiryDate(`${day} ${month}`);

    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const distance = targetTime - currentTime;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Side: Offer Info */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-600 rounded-lg text-[10px] font-bold uppercase tracking-widest animate-pulse">
                <Clock className="w-3 h-3" /> Flash Offer — Ending Soon!
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1]">
                Get <span className="text-[#e3bc7c]">5% Off</span> on <br />
                Your Next Website
              </h2>
              
              {/* Countdown Clock */}
              <div className="flex gap-4 pt-4">
                {[
                  { label: "Days", value: timeLeft.days },
                  { label: "Hours", value: timeLeft.hours },
                  { label: "Mins", value: timeLeft.minutes },
                  { label: "Secs", value: timeLeft.seconds },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-900 text-white rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-xl border-b-4 border-[#e3bc7c]">
                      {String(item.value).padStart(2, "0")}
                    </div>
                    <p className="text-[10px] uppercase tracking-tighter font-bold text-gray-400 mt-2">{item.label}</p>
                  </div>
                ))}
              </div>

              <p className="text-lg text-gray-500 max-w-lg pt-4 leading-relaxed">
                Help us grow on Google and get an instant discount. This special offer is available for the next few days only!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-gray-900 flex items-center justify-center text-white shadow-lg">
                  <Star className="w-6 h-6 fill-[#e3bc7c] text-[#e3bc7c]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Step 1: Write a Review</h3>
                  <p className="text-gray-500">Google par humein 5-star review dein (honest feedback ke saath)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-gray-900 flex items-center justify-center text-white shadow-lg">
                  <MessageSquare className="w-6 h-6 text-[#e3bc7c]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Step 2: Send Screenshot</h3>
                  <p className="text-gray-500">Review ka screenshot humein WhatsApp par share karein.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-gray-900 flex items-center justify-center text-white shadow-lg">
                  <CheckCircle2 className="w-6 h-6 text-[#e3bc7c]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Step 3: Claim Discount</h3>
                  <p className="text-gray-500">Apni agli professional website par 5% instant discount payein.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-wrap gap-4">
               <div className="px-4 py-2 border border-gray-100 rounded-xl bg-gray-50 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                 Min Order: ₹9,999
               </div>
               <div className="px-4 py-2 border border-gray-100 rounded-xl bg-gray-50 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                 Code: REVIEW5
               </div>
               <div className="px-4 py-2 border border-red-100 rounded-xl bg-red-50 text-[11px] font-bold text-red-500 uppercase tracking-wider animate-pulse">
                 Expires: {expiryDate || "Calculating..."}
               </div>
            </div>
          </div>

          {/* Right Side: Professional Scanner Card */}
          <div className="w-full lg:w-[450px]">
            <div className="relative group">
              {/* Background Glow */}
              <div className="absolute -inset-1 bg-linear-to-r from-[#e3bc7c] to-[#d4a75c] rounded-[32px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative bg-gray-900 rounded-[30px] p-8 md:p-12 text-center space-y-8">
                <div className="space-y-2">
                  <h3 className="text-[#e3bc7c] font-black text-2xl uppercase tracking-tighter">Scan to Review</h3>
                  <p className="text-gray-400 text-sm">Open camera to scan the QR code</p>
                </div>

                {/* The Scanner (QR Code) - LARGER SIZE */}
                <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 bg-white p-6 rounded-[40px] shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                  <div className="absolute inset-0 border-4 border-[#e3bc7c]/20 rounded-[40px] animate-pulse"></div>
                  <Image 
                    src="/assets/google scanner.png" 
                    alt="Google Review Scanner" 
                    width={800}
                    height={800}
                    className="w-full h-full object-contain"
                  />
                  
                  {/* Scanning Line Animation */}
                  <div className="absolute left-6 right-6 h-1 bg-[#e3bc7c] shadow-[0_0_20px_rgba(227,188,124,1)] top-6 animate-scan-line"></div>
                </div>

                <div className="space-y-4">
                  <p className="text-white font-medium text-lg leading-relaxed italic">
                    "Abhi review dein,<br />baad mein discount use karein!"
                  </p>
                  
                  <div className="grid grid-cols-1 gap-3 pt-4">
                    <a 
                      href="https://wa.me/916264906078?text=Hello%20WebDev%20AI,%20I%20have%20submitted%20the%20Google%20Review.%20Applying%20for%205%%20discount."
                      target="_blank"
                      className="flex items-center justify-center gap-3 py-4 bg-green-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20"
                    >
                      <MessageSquare className="w-5 h-5 fill-current" /> WhatsApp Now
                    </a>
                    <a 
                      href="tel:+916264906078"
                      className="flex items-center justify-center gap-3 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-colors"
                    >
                      <Phone className="w-5 h-5" /> Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { top: 24px; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: calc(100% - 24px); opacity: 0; }
        }
        .animate-scan-line {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
