"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

interface InstaPost {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
  timestamp?: string;
}

interface InstaProfile {
  username: string;
  profile_picture_url: string | null;
}

/* ── Fallback placeholder posts ── */
const placeholders: InstaPost[] = Array.from({ length: 6 }, (_, i) => ({
  id: `placeholder-${i}`,
  media_type: "IMAGE",
  media_url: `/assets/is${(i % 5) + 1}.jpg`,
  permalink: "https://www.instagram.com/by_coder_baba",
  caption: "Check out our latest work! ✨ #ByCoderBaba",
  timestamp: new Date().toISOString(),
}));

/* ── Format date like Instagram: "4 March · View on Instagram" ── */
function formatDate(iso?: string) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "long" });
}

/* ══════════════════════════════════════════════
   LIGHTBOX MODAL
══════════════════════════════════════════════ */
function LightboxModal({
  post,
  profile,
  onClose,
}: {
  post: InstaPost;
  profile: InstaProfile;
  onClose: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  const isVideo = post.media_type === "VIDEO";

  /* Close on Escape key */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3"
      style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
      onClick={onClose}
    >
      {/* Modal Box */}
      <div
        className="relative flex flex-col md:flex-row w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl mt-20 md:mt-[80px]"
        style={{ maxHeight: "75vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── LEFT: Media ── */}
        <div
          className="relative bg-black flex items-center justify-center"
          style={{ flex: "0 0 50%", maxHeight: "75vh" }}
        >
          {isVideo ? (
            <>
              <video
                ref={videoRef}
                src={post.media_url}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-contain"
                style={{ maxHeight: "75vh" }}
              />
              {/* Video Controls */}
              <div className="absolute bottom-4 left-4 flex gap-3 z-10">
                {/* Mute/Unmute */}
                <button
                  onClick={toggleMute}
                  className="w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors backdrop-blur-sm"
                  aria-label={muted ? "Unmute" : "Mute"}
                >
                  {muted ? (
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-3-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 18L19 19.27 20.27 18 5.27 3 4.27 3zM12 4 9.91 6.09 12 8.18V4z" />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                  )}
                </button>
                {/* Play/Pause */}
                <button
                  onClick={togglePlay}
                  className="w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors backdrop-blur-sm"
                  aria-label={playing ? "Pause" : "Play"}
                >
                  {playing ? (
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </>
          ) : (
            <div className="relative w-full h-full min-h-[400px]">
              <Image
                src={post.media_url}
                alt={post.caption?.slice(0, 60) ?? "Instagram post"}
                fill
                unoptimized={post.media_url.startsWith("http")}
                className="object-contain"
              />
            </div>
          )}
        </div>

        {/* ── RIGHT: Info Panel ── */}
        <div
          className="bg-white flex flex-col"
          style={{ flex: "0 0 45%", minWidth: 0 }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
            {/* Profile picture with Instagram gradient ring */}
            <div
              className="shrink-0 rounded-full p-[2px]"
              style={{
                background:
                  "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
              }}
            >
              <div className="w-9 h-9 rounded-full bg-white p-[2px] overflow-hidden">
                {profile.profile_picture_url ? (
                  <Image
                    src={profile.profile_picture_url}
                    alt={profile.username}
                    width={36}
                    height={36}
                    unoptimized
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  /* Fallback: Instagram icon if no picture */
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      fill="white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-900 leading-tight">
                {profile.username}
              </p>
              <p className="text-xs text-gray-400">Instagram</p>
            </div>
          </div>

          {/* Caption */}
          <div
            className="flex-1 px-5 py-4 overflow-y-auto"
            style={{ maxHeight: "340px" }}
          >
            {post.caption ? (
              <p
                className="text-sm text-gray-800 leading-relaxed whitespace-pre-wrap"
                style={{ wordBreak: "break-word" }}
              >
                {post.caption}
              </p>
            ) : (
              <p className="text-sm text-gray-400 italic">No caption</p>
            )}
          </div>

          {/* Footer: Date + View on Instagram */}
          <div className="px-5 py-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">
                {formatDate(post.timestamp)}
              </span>
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-blue-500 hover:text-blue-700 transition-colors"
              >
                View on Instagram →
              </a>
            </div>
          </div>
        </div>

        {/* ── Close Button ── */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors backdrop-blur-sm"
        >
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   MAIN INSTAGRAM FEED COMPONENT
══════════════════════════════════════════════ */
const DEFAULT_PROFILE: InstaProfile = {
  username: "by_coder_baba",
  profile_picture_url: null,
};

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstaPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<InstaPost | null>(null);
  const [profile, setProfile] = useState<InstaProfile>(DEFAULT_PROFILE);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/instagram")
      .then((r) => r.json())
      .then((data) => {
        if (data?.data?.length) {
          setPosts(data.data);
        } else {
          setPosts(placeholders);
        }
        if (data?.profile) {
          setProfile(data.profile);
        }
      })
      .catch(() => setPosts(placeholders))
      .finally(() => setLoading(false));
  }, []);

  const displayPosts = loading ? placeholders : posts;

  const scroll = (dir: "left" | "right") => {
    const amount = sliderRef.current?.clientWidth ?? 300;
    sliderRef.current?.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const handleClose = useCallback(() => setSelectedPost(null), []);

  return (
    <>
      <section className="w-full bg-white py-10 md:py-14">
        {/* Heading */}
        <h2 className="text-center text-[13px] md:text-sm font-semibold tracking-[0.25em] uppercase text-gray-900 mb-8">
          Follow Our Work{" "}
          <span className="text-gray-500 font-normal">ON INSTAGRAM</span>
        </h2>

        {/* Slider */}
        <div className="relative px-4 md:px-8">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20
                       w-9 h-9 rounded-full bg-white border border-gray-300
                       shadow-md items-center justify-center
                       hover:bg-gray-50 transition-colors"
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

          {/* Scrollable track */}
          <div
            ref={sliderRef}
            className="flex gap-3 overflow-x-auto scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {displayPosts.map((post) => {
              const thumb =
                post.media_type === "VIDEO"
                  ? post.thumbnail_url
                  : post.media_url;

              return (
                <button
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="shrink-0 relative rounded-lg overflow-hidden group
                             w-[calc(50%-6px)] md:w-[calc(20%-10px)] text-left
                             focus:outline-none focus:ring-2 focus:ring-pink-400"
                  style={{ aspectRatio: "4/5" }}
                  aria-label="View Instagram post"
                >
                  {/* Post thumbnail */}
                  {thumb && (
                    <Image
                      src={thumb}
                      alt={post.caption?.slice(0, 60) ?? "Instagram post"}
                      fill
                      unoptimized={thumb.startsWith("http")}
                      className="object-cover transition-transform duration-500
                                 group-hover:scale-105"
                    />
                  )}

                  {/* Video badge */}
                  {post.media_type === "VIDEO" && (
                    <span className="absolute top-2 right-2 z-10 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded-full">
                      ▶ Reel
                    </span>
                  )}

                  {/* Hover overlay with Instagram icon */}
                  <div
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/35
                                transition-all duration-300 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20
                       w-9 h-9 rounded-full bg-white border border-gray-300
                       shadow-md items-center justify-center
                       hover:bg-gray-50 transition-colors"
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

        {/* Follow button */}
        <div className="flex justify-center mt-8">
          <a
            href="https://www.instagram.com/by_coder_baba"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold
                       transition-all duration-300 hover:scale-105 hover:opacity-90"
            style={{
              background:
                "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
              color: "#fff",
            }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow @by_coder_baba
          </a>
        </div>
      </section>

      {/* ── Lightbox Modal ── */}
      {selectedPost && (
        <LightboxModal
          post={selectedPost}
          profile={profile}
          onClose={handleClose}
        />
      )}
    </>
  );
}
