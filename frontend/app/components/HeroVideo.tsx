"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function HeroVideo() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [thumbUrl, setThumbUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Fetch directly from the working Instagram API
    fetch("/api/instagram")
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          // Look for the specific Reel (DWYzyplCHcL) or fallback to any video
          const targetReel = data.data.find(
            (p: any) =>
              p.permalink?.includes("DWYzyplCHcL") || p.id === "DWYzyplCHcL",
          );

          if (targetReel && targetReel.media_url) {
            setVideoUrl(targetReel.media_url);
            setThumbUrl(targetReel.thumbnail_url || null);
          } else {
            const latestVideo = data.data.find(
              (p: any) => p.media_type === "VIDEO",
            );
            if (latestVideo) {
              setVideoUrl(latestVideo.media_url);
              setThumbUrl(latestVideo.thumbnail_url || null);
            }
          }
        }
      })
      .catch((err) => console.log("Instagram hero video fetch skipped:", err));
  }, []);

  const handlePlay = () => {
    setHasStarted(true);
    setIsPlaying(true);
    // Play the video with sound once the user clicks
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.play();
      }
    }, 50);
  };

  const handlePause = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section className="w-full bg-white py-8 md:py-12">
      {/* Section Heading */}
      <div className="text-center mb-5 md:mb-8 px-4">
        <h1 className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-gray-800">
          Web Development AI — Chhattisgarh&apos;s Leading AI-Powered Web Agency
        </h1>
      </div>

      {/* Video Container */}
      <div className="mx-3 md:mx-6 lg:mx-10 xl:mx-16 relative rounded-xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] aspect-video bg-[#ececec]">
        {/* Dynamic Video Element (Instagram MP4 or Local) */}
        <video
          ref={videoRef}
          src={videoUrl || "/assets/website1.mp4"}
          className={`w-full h-full ${videoUrl ? "object-cover" : "block"}`}
          playsInline
          loop
          preload="metadata"
        />

        {/* Play / Pause Overlay Button */}
        {!isPlaying && (
          <div
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center cursor-pointer group bg-black/10"
            style={{ zIndex: 10 }}
          >
            {/* Optional Thumbnail Background from Instagram */}
            {thumbUrl && !hasStarted && (
              <Image
                src={thumbUrl}
                alt="Video Thumbnail"
                fill
                className="object-cover opacity-30"
                unoptimized
              />
            )}

            {/* Semi-transparent dark veil */}
            <div className="absolute inset-0 group-hover:bg-black/20 transition-colors duration-300" />

            {/* Premium Golden play button */}
            <button
              aria-label="Play video"
              className="relative z-10 w-16 h-16 md:w-24 md:h-24 rounded-full border-[3px] border-yellow-400 bg-black/40 flex items-center justify-center
                         shadow-[0_0_30px_5px_rgba(234,179,8,0.4)]
                         hover:scale-105 hover:bg-black/50 transition-all duration-500 ease-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-6 h-6 md:w-8 md:h-8 ml-1"
              >
                <path d="M6 3.5V20.5L19 12L6 3.5Z" />
              </svg>
            </button>
          </div>
        )}

        {/* Pause overlay when playing */}
        {isPlaying && (
          <div
            onClick={handlePause}
            className="absolute inset-0 cursor-pointer"
            aria-label="Toggle pause video"
            style={{ zIndex: 10 }}
          />
        )}
      </div>
    </section>
  );
}
