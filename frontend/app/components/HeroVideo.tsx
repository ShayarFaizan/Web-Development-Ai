"use client";

import { useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section className="w-full bg-white py-8 md:py-12">
      {/* Section Heading */}
      <div className="text-center mb-5 md:mb-8 px-4">
        <h1 className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-gray-800">
          Web Development AI — India&apos;s Leading AI-Powered Web Agency
        </h1>
      </div>

      {/* Video Container */}
      <div className="mx-3 md:mx-6 lg:mx-10 xl:mx-16 relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
        {/* Video Element */}
        <video
          ref={videoRef}
          src="/assets/website1.mp4"
          className="w-full h-auto block"
          onEnded={handleVideoEnd}
          playsInline
          preload="metadata"
        />

        {/* Play / Pause Overlay Button */}
        {!isPlaying && (
          <div
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center cursor-pointer group"
          >
            {/* Semi-transparent dark veil when paused */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />

            {/* Golden play button — matches reference design */}
            <button
              aria-label="Play video"
              className="relative z-10 w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-yellow-400 bg-black/40 flex items-center justify-center
                         shadow-[0_0_24px_4px_rgba(234,179,8,0.35)]
                         hover:scale-110 hover:bg-black/60 transition-all duration-300"
            >
              {/* Triangle play icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-5 h-5 md:w-7 md:h-7 ml-1"
              >
                <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v15.78a1.5 1.5 0 0 0 2.3 1.27l13.14-7.89a1.5 1.5 0 0 0 0-2.54L6.3 2.84Z" />
              </svg>
            </button>
          </div>
        )}

        {/* Pause overlay when playing (click video to pause) */}
        {isPlaying && (
          <div
            onClick={handlePlay}
            className="absolute inset-0 cursor-pointer"
            aria-label="Pause video"
          />
        )}
      </div>
    </section>
  );
}
