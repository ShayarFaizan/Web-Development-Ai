"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/assets/hero9,999.jpg",
  "/assets/hero2.jpg",
  "/assets/hero3.jpg",
  "/assets/hero4.jpg",
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds auto-scroll duration

    // Clear interval on unmount
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

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
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div
      className="relative w-full overflow-hidden group max-h-[900px]"
      style={{ aspectRatio: "2047 / 900", touchAction: "pan-y" }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider Images container with smooth CSS transition */}
      <div
        className="flex w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full h-full shrink-0 relative">
            <Image
              src={src}
              alt="Best Web Development AI Portfolio Image"
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <div className="absolute top-1/2 left-4 md:left-6 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer z-10">
        <button
          onClick={goToPrevious}
          className="flex items-center justify-center w-[34px] h-[34px] rounded-[8px] transition-all duration-300 hover:scale-110"
          style={{
            backgroundColor: "transparent",
            border: "1.5px solid #d4a75c",
            color: "#d4a75c",
          }}
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 mr-0.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19.5L7.5 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>

      {/* Right Arrow */}
      <div className="absolute top-1/2 right-4 md:right-6 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer z-10">
        <button
          onClick={goToNext}
          className="flex items-center justify-center w-[34px] h-[34px] rounded-[8px] transition-all duration-300 hover:scale-110"
          style={{
            backgroundColor: "transparent",
            border: "1.5px solid #d4a75c",
            color: "#d4a75c",
          }}
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 ml-0.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 4.5L16.5 12 9 19.5"
            />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
        {images.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full border border-white transition-all ${
              currentIndex === slideIndex
                ? "bg-white scale-110"
                : "bg-transparent hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
