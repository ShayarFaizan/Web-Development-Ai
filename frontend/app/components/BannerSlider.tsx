"use client";

import { useState } from "react";
import Image from "next/image";

const banners = [
  {
    id: 1,
    src: "/assets/banner1.png",
    alt: "Stronger Faster Websites – 15% Off",
  },
  { id: 2, src: "/assets/banner2.png", alt: "Design Develop Grow – 25% Off" },
  { id: 3, src: "/assets/banner3.png", alt: "Complete SEO Package – 15% Off" },
  {
    id: 4,
    src: "/assets/banner4.png",
    alt: "Mobile App Development – 20% Off",
  },
  {
    id: 5,
    src: "/assets/banner5.png",
    alt: "Website Security & Maintenance – 30% Off",
  },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);


  const prev = () =>
    setCurrent((c) => (c - 1 + banners.length) % banners.length);
  const next = () => setCurrent((c) => (c + 1) % banners.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      next();
    } else if (isRightSwipe) {
      prev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };


  return (
    <section className="w-full bg-white py-5 md:py-6 select-none">
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10">
        {/* ── DESKTOP: 3 banners side by side ── */}
        <div className="hidden md:flex items-center gap-3">
          {/* Left Arrow */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="shrink-0 w-8 h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center shadow hover:bg-gray-50 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#555"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Three banners */}
          <div className="flex flex-1 gap-3 overflow-hidden">
            {[0, 1, 2].map((offset) => {
              const idx = (current + offset) % banners.length;
              return (
                <div
                  key={idx}
                  className="flex-1 rounded-lg overflow-hidden"
                  style={{ height: "170px", minWidth: 0 }}
                >
                  <Image
                    src={banners[idx].src}
                    alt={banners[idx].alt}
                    width={400}
                    height={170}
                    className="object-cover w-full h-full"
                  />
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            aria-label="Next"
            className="shrink-0 w-8 h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center shadow hover:bg-gray-50 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#555"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* ── MOBILE: 1 banner at a time ── */}
        <div
          className="flex md:hidden items-center gap-2"
          style={{ touchAction: "pan-y" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >

          {/* Left Arrow */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="shrink-0 w-7 h-7 rounded-full border border-gray-300 bg-white flex items-center justify-center shadow hover:bg-gray-50 transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#555"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Single banner */}
          <div
            className="flex-1 rounded-lg overflow-hidden"
            style={{ height: "170px" }}
          >
            <Image
              src={banners[current].src}
              alt={banners[current].alt}
              width={400}
              height={170}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            aria-label="Next"
            className="shrink-0 w-7 h-7 rounded-full border border-gray-300 bg-white flex items-center justify-center shadow hover:bg-gray-50 transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#555"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* ── Dot Indicators ── */}
        <div className="flex justify-center gap-1.5 mt-3">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? "20px" : "8px",
                height: "8px",
                background: i === current ? "#555" : "#ccc",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
