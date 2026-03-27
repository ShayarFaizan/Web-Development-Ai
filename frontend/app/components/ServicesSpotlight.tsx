"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User as FirebaseUser,
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { useAppContext } from "@/app/context/AppContext";
import { serviceCards, categories } from "@/lib/servicesData";

export default function ServicesSpotlight() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("category") || "Landing Pages";

  const setActiveTab = (tab: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", tab);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const [modalData, setModalData] = useState<{
    media: string[];
    index: number;
  } | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  /* TRENDING = show all, otherwise filter */
  const visibleCards =
    activeTab === "TRENDING"
      ? serviceCards
      : serviceCards.filter((c) => c.category === activeTab);

  /* ── Scroll helpers ── */
  const SCROLL_AMOUNT = 320;
  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
  };
  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
  };

  return (
    <section
      id="pricing"
      className="w-full bg-white py-10 md:py-14 overflow-x-hidden"
    >
      {/* ── Section Heading ── */}
      <h2 className="text-center text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-gray-800 mb-8 md:mb-10 px-4">
        Popular <span className="text-gray-900">Website Packages</span>
      </h2>

      {/* ── Category Tabs ── */}
      <div className="flex justify-center mb-8 px-4">
        <div
          className="inline-flex rounded-md overflow-hidden shadow-sm"
          style={{
            background: "#111",
            border: "1px solid #333",
          }}
        >
          {categories.map((cat, idx) => {
            const isActive = activeTab === cat;
            const isPrevActive = activeTab === categories[idx + 1];
            const isLast = idx === categories.length - 1;
            const showBorder = !isLast && !isActive && !isPrevActive;

            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-8 md:px-10 py-2 md:py-[8px] text-[12px] md:text-[14px] font-semibold tracking-[0.05em] uppercase transition-all duration-300
                  ${isActive ? "text-black" : "text-gray-400 hover:text-white"}
                `}
                style={{
                  borderRight: showBorder
                    ? "1px solid #333"
                    : isLast
                      ? "none"
                      : "1px solid transparent",
                  background: isActive
                    ? "linear-gradient(90deg, #e3bc7c, #fef1cd 25%, #d4a75c)"
                    : "transparent",
                }}
              >
                {cat === "WEBSITES" ? "WEBSITE'S" : cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Slider Wrapper with Arrows ── */}
      <div className="relative px-2 md:px-4">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-20
                     w-9 h-9 md:w-10 md:h-10 rounded-full border border-amber-400
                     bg-white items-center justify-center shadow-md
                     hover:bg-amber-50 transition-all duration-200"
          aria-label="Scroll left"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#d97706"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Scrollable Track */}
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scroll-smooth px-4 md:px-10"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {visibleCards.map((card) => (
            <ServiceCard
              key={card.id}
              card={card}
              onMediaClick={(media, index) => setModalData({ media, index })}
              isModalActive={modalData !== null}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-20
                     w-9 h-9 md:w-10 md:h-10 rounded-full border border-amber-400
                     bg-white items-center justify-center shadow-md
                     hover:bg-amber-50 transition-all duration-200"
          aria-label="Scroll right"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#d97706"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* ── View All Button ── */}
      <div className="flex justify-center mt-10">
        <Link
          href="/book-appointment"
          className="rounded-md text-[14px] font-medium px-8 py-2 transition-all duration-300 hover:opacity-80 inline-block"
          style={{
            background: "#000",
            border: "1px solid #d4a75c",
            color: "#e3bc7c",
            letterSpacing: "0.02em",
          }}
        >
          Other Requirements Book Free Appointment
        </Link>
      </div>

      {/* Media Modal */}
      {modalData && (
        <MediaModal
          media={modalData.media}
          initialIndex={modalData.index}
          onClose={() => setModalData(null)}
        />
      )}
    </section>
  );
}

/* ══════════════════════════════════
   Helper Components
   ══════════════════════════════════ */

function MediaCarousel({
  media,
  onOpenModal,
  isModalActive,
}: {
  media: string[];
  onOpenModal: (media: string[], index: number) => void;
  isModalActive: boolean;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const currentMedia = media[currentIndex];
  const isVideo = currentMedia.toLowerCase().match(/\.(mp4|webm|ogg|mov)$/);

  // Video loop preview logic
  useEffect(() => {
    if (!isVideo) return;
    const video = videoRef.current;
    if (!video) return;

    if (isModalActive) {
      video.pause();
      return;
    }

    const handleTimeUpdate = () => {
      if (!isInteracting && video.currentTime >= 4) {
        video.currentTime = 0;
        video.play();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    if (isPlaying) video.play();

    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, [isInteracting, currentIndex, isModalActive, isPlaying, isVideo]);

  // Passive touch listeners (GOLDEN FIX for mobile vertical scroll)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTs = (e: TouchEvent) => {
      setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTe = (e: TouchEvent) => {
      if (touchStart === null) return;
      const tEnd = e.changedTouches[0].clientX;
      const dist = touchStart - tEnd;
      const isLeft = dist > 50;
      const isRight = dist < -50;

      if (isLeft) {
        setCurrentIndex((prev) => (prev + 1) % media.length);
        setIsInteracting(false);
        setIsMuted(true);
      } else if (isRight) {
        setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
        setIsInteracting(false);
        setIsMuted(true);
      }
      setTouchStart(null);
    };

    container.addEventListener("touchstart", handleTs, { passive: true });
    container.addEventListener("touchend", handleTe, { passive: true });

    return () => {
      container.removeEventListener("touchstart", handleTs);
      container.removeEventListener("touchend", handleTe);
    };
  }, [touchStart, media.length]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % media.length);
    setIsInteracting(false);
    setIsMuted(true);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
    setIsInteracting(false);
    setIsMuted(true);
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const startPreview = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isVideo) return;
    setIsInteracting(true);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-black group overflow-hidden cursor-pointer"
      style={{ touchAction: "pan-y" }}
    >
      {isVideo ? (
        <video
          key={currentIndex}
          ref={videoRef}
          src={currentMedia}
          autoPlay
          muted={isMuted}
          loop={isInteracting}
          playsInline
          className="absolute inset-0 w-full h-full object-contain bg-black"
        />
      ) : (
        <img
          key={currentIndex}
          src={currentMedia}
          alt="Preview"
          className="absolute inset-0 w-full h-full object-contain bg-black"
        />
      )}

      {/* Navigation Arrows */}
      {media.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-amber-500/80 transition-all opacity-0 group-hover:opacity-100"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-amber-500/80 transition-all opacity-0 group-hover:opacity-100"
          >
            ›
          </button>
        </>
      )}

      {/* Controls Overlay */}
      {isVideo &&
        (!isInteracting ? (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-all duration-300 bg-black/10 group-hover:bg-black/40"
            onClick={startPreview}
          >
            <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 transform group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5 text-white fill-current translate-x-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div
              className="text-black text-[10px] font-bold px-4 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-2 transition-all duration-300 uppercase tracking-widest shadow-xl"
              style={{ background: "linear-gradient(90deg, #e3bc7c, #fef1cd, #d4a75c)" }}
            >
              Click to Preview
            </div>
          </div>
        ) : (
          <div className="absolute bottom-2 left-0 right-0 px-3 z-30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center border border-white/20 hover:bg-amber-500 hover:text-black transition-all"
              >
                {isPlaying ? "Ⅱ" : "▶"}
              </button>
              <button
                onClick={toggleMute}
                className="w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center border border-white/20 hover:bg-amber-500 hover:text-black transition-all"
              >
                {isMuted ? "🔇" : "🔊"}
              </button>
            </div>
          </div>
        ))}

      {/* Dots Indicator */}
      {media.length > 1 && (
        <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-1 z-30">
          {media.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === currentIndex ? "bg-amber-400 w-3" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      )}

      {/* Maximize Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onOpenModal(media, currentIndex);
        }}
        className="absolute bottom-2 right-2 z-40 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center border border-white/20 hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all duration-300 cursor-pointer"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 3h6v6" /> <path d="M9 21H3v-6" /> <path d="M21 3l-7 7" /> <path d="M3 21l7-7" />
        </svg>
      </button>
    </div>
  );
}

function MediaModal({
  media,
  initialIndex,
  onClose,
}: {
  media: string[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomLevel, setZoomLevel] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const lastTap = useRef<number>(0);

  const currentMedia = media[currentIndex];
  const isVideo = currentMedia.toLowerCase().match(/\.(mp4|webm|ogg|mov)$/);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setZoomLevel(1);
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setZoomLevel(1);
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.5, 4));
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.5, 1));

  const handleImageClick = (e: React.MouseEvent) => {
    const now = Date.now();
    if (now - lastTap.current < 300) {
      setZoomLevel(zoomLevel === 1 ? 2.5 : 1);
    }
    lastTap.current = now;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTs = (e: TouchEvent) => {
      setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTe = (e: TouchEvent) => {
      if (zoomLevel > 1) {
        setTouchStart(null);
        return;
      }
      if (touchStart === null) return;
      const tEnd = e.changedTouches[0].clientX;
      const dist = touchStart - tEnd;
      if (dist > 50) handleNext();
      else if (dist < -50) handlePrev();
      setTouchStart(null);
    };

    container.addEventListener("touchstart", handleTs, { passive: true });
    container.addEventListener("touchend", handleTe, { passive: true });

    return () => {
      container.removeEventListener("touchstart", handleTs);
      container.removeEventListener("touchend", handleTe);
    };
  }, [touchStart, zoomLevel, media.length]);

  return (
    <div className="fixed inset-0 z-110 flex items-center justify-center bg-black/95 backdrop-blur-md p-0 md:p-4">
      <div
        ref={containerRef}
        className={`relative w-full h-full md:max-w-5xl md:aspect-video md:rounded-2xl shadow-2xl border-white/10 flex transition-all ${
          zoomLevel > 1 ? "overflow-auto flex-col" : "overflow-hidden items-center justify-center"
        } bg-black`}
        style={{ touchAction: zoomLevel > 1 ? "auto" : "pan-y" }}
      >
        {isVideo ? (
          <video key={currentIndex} src={currentMedia} autoPlay controls className="w-full h-full object-contain" />
        ) : (
          <img
            key={currentIndex} src={currentMedia} alt="Enlarged"
            onClick={handleImageClick}
            className={`transition-all duration-300 ${zoomLevel > 1 ? "h-auto p-12 md:p-20 block m-auto" : "w-full h-full object-contain"}`}
            style={{ minWidth: zoomLevel > 1 ? `${zoomLevel * 100}vw` : '100%' }}
          />
        )}

        <button onClick={onClose} className="absolute top-4 right-4 z-140 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center border border-white/20 text-xl">✕</button>

        {!isVideo && (
          <div className="absolute top-4 left-4 z-140 flex items-center gap-1.5 bg-black/50 backdrop-blur-md p-1 shadow-lg border border-white/10">
            <button onClick={zoomOut} className="w-10 h-10 flex items-center justify-center bg-white text-black text-xl font-bold rounded-md" disabled={zoomLevel <= 1}>-</button>
            <div className="px-3 min-w-[70px] text-center text-white text-[10px] font-black">{Math.round(zoomLevel * 100)}%</div>
            <button onClick={zoomIn} className="w-10 h-10 flex items-center justify-center bg-white text-black text-xl font-bold rounded-md" disabled={zoomLevel >= 4}>+</button>
          </div>
        )}
      </div>
      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>
  );
}

const LoginModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, googleProvider);
      onClose();
    } catch (e: any) { setErrorMsg(e.message); } finally { setLoading(false); }
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      onClose();
    } catch (e: any) { setErrorMsg(e.message || "Failed to sign in."); } finally { setLoading(false); }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-sm rounded-[10px] overflow-hidden p-6 shadow-2xl bg-[#111] border border-[#333]">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">✕</button>
        <div className="text-center mb-6">
          <h2 className="text-[18px] font-bold text-white mb-1">Welcome Back</h2>
          <p className="text-xs text-gray-400">Please sign in to continue</p>
        </div>
        {errorMsg && <div className="mb-4 text-[11px] text-red-500 bg-red-500/10 p-2 rounded border border-red-500/20 text-center">{errorMsg}</div>}
        <button onClick={handleGoogleSignIn} disabled={loading} className="w-full flex items-center justify-center gap-3 py-2.5 rounded-md mb-4 bg-white text-black font-semibold text-sm">
          <img src="https://www.google.com/favicon.ico" alt="GP" className="w-4 h-4" /> Sign In with Google
        </button>
        <form className="space-y-4" onSubmit={handleEmailSignIn}>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required className="w-full bg-[#1a1a1a] border border-[#333] rounded-md px-3 py-2.5 text-white" />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required className="w-full bg-[#1a1a1a] border border-[#333] rounded-md px-3 py-2.5 text-white" />
          <button type="submit" disabled={loading} className="w-full py-2.5 font-bold tracking-[0.05em] uppercase rounded-md text-black" style={{ background: "linear-gradient(90deg, #e3bc7c, #fef1cd, #d4a75c)" }}>{loading ? "Signing In..." : "SIGN IN"}</button>
        </form>
      </div>
    </div>
  );
};

function ServiceCard({ card, onMediaClick, isModalActive }: { card: CardData; onMediaClick: (media: string[], index: number) => void; isModalActive: boolean }) {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart, toggleWishlist, isInWishlist } = useAppContext();
  const router = useRouter();
  const isWishlisted = isInWishlist(card.id);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, u => setUser(u));
    return () => unsubscribe();
  }, []);

  const handleWishlistClick = () => user ? toggleWishlist(card) : setShowAuthModal(true);
  const handleAddToCartClick = () => {
    if (user) {
      addToCart(card);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    } else setShowAuthModal(true);
  };

  return (
    <div className={`shrink-0 w-[230px] md:w-[255px] rounded-xl overflow-hidden flex flex-col border border-gray-800`} style={{ background: "#111", touchAction: "auto" }}>
      <div className="relative w-full h-[210px] md:h-[230px] bg-[#1a1a1a] overflow-hidden">
        <button onClick={handleWishlistClick} className={`absolute top-3 left-3 z-20 ${isWishlisted ? "text-red-500" : "text-gray-400"}`}>
          <svg fill={isWishlisted ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
        </button>
        <div className="absolute top-2 right-2 z-20 flex flex-col gap-1.5 pointer-events-none">
          <span className="text-black font-extrabold text-[8px] px-2.5 py-1 rounded-sm" style={{ background: "linear-gradient(90deg, #e3bc7c, #fef1cd, #d4a75c)" }}>{card.badge}</span>
          <span className="text-black font-extrabold text-[10px] px-2.5 py-0.5 rounded-sm" style={{ background: "linear-gradient(90deg, #e3bc7c, #fef1cd, #d4a75c)" }}>{card.discount}</span>
        </div>
        {card.videos?.length ? (
          <MediaCarousel media={card.videos} onOpenModal={onMediaClick} isModalActive={isModalActive} />
        ) : (
          <div className="relative w-full h-full"><Image src={card.image} alt={card.title} fill className="object-cover" /></div>
        )}
      </div>
      <div
        onClick={() => router.push(`/plans/${card.id}`)}
        className="flex flex-col flex-1 p-3.5 md:p-4 cursor-pointer"
      >
        {/* Title */}
        <h3 className="text-white font-semibold text-[13px] leading-snug mb-2.5 line-clamp-2">
          {card.title}
        </h3>

        {/* Features */}
        <ul className="hidden md:flex flex-col gap-1 mb-2 flex-1">
          {card.features?.map((f, i) => {
            const isNotIncluded = f.toLowerCase().includes("not included");
            return (
              <li
                key={i}
                className="flex items-start gap-1.5 text-[11px] text-gray-300"
              >
                <span
                  className={`shrink-0 ${
                    isNotIncluded ? "text-red-500" : "text-green-400"
                  }`}
                >
                  {isNotIncluded ? "✖" : "✔"}
                </span>
                <span className="leading-tight">{f}</span>
              </li>
            );
          })}
        </ul>

        {/* Delivery */}
        <p className="hidden md:block text-[10px] text-amber-400/80 mb-3">
          ⏳ Delivery: {card.delivery}
        </p>

        {/* Tag badge */}
        <div className="hidden md:block mb-3">
          <span className="border border-amber-500/50 text-amber-400 text-[10px] font-semibold px-3 py-0.5 rounded-full">
            {card.tag}
          </span>
        </div>

        {/* Price, Read More & CTA Button Container */}
        <div className="mt-auto">
          {/* Price */}
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-white font-bold text-sm"> {card.price}</span>
            <span className="text-gray-500 line-through text-[11px]">
              {card.originalPrice}
            </span>
          </div>

          <Link
            href={`/plans/${card.id}`}
            className="text-amber-400 text-[11px] font-medium hover:underline mb-3 block w-fit underline-offset-4 cursor-pointer"
          >
            READ FULL DETAILS →
          </Link>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCartClick();
            }}
            className="w-full py-2.5 text-[12px] font-semibold tracking-[0.05em] rounded-md text-black
                       cursor-pointer active:scale-95 transition-all duration-300 hover:opacity-90 outline-none focus:outline-none focus:ring-0 flex items-center justify-center gap-2"
            style={{
              background: "linear-gradient(90deg, #e3bc7c, #fef1cd, #d4a75c)",
              border: "none",
            }}
          >
            {isAdded ? (
              <>
                ADDED <span className="animate-bounce">✓</span>
              </>
            ) : (
              "ADD TO CART"
            )}
          </button>
        </div>
      </div>
      <LoginModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  );
}

interface CardData {
  id: number;
  title: string;
  image: string;
  badge: string;
  discount: string;
  features: string[];
  price: string;
  originalPrice: string;
  delivery: string;
  tag: string;
  category: string;
  videos?: string[];
}
