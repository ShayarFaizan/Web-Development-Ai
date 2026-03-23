"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  const [activeTab, setActiveTab] = useState("Landing Pages");
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
      className="w-full bg-white py-10 md:py-14 overflow-hidden"
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
                className={`px-5 md:px-8 py-1.5 md:py-[7px] text-[10px] md:text-[12px] font-semibold tracking-[0.05em] uppercase transition-all duration-300
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
                {cat}
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
          className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-20
                     w-9 h-9 md:w-10 md:h-10 rounded-full border border-amber-400
                     bg-white flex items-center justify-center shadow-md
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
          className="flex gap-4 overflow-x-auto scroll-smooth px-8 md:px-10"
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
          className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-20
                     w-9 h-9 md:w-10 md:h-10 rounded-full border border-amber-400
                     bg-white flex items-center justify-center shadow-md
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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);


  const currentMedia = media[currentIndex];
  const isVideo = currentMedia.toLowerCase().match(/\.(mp4|webm|ogg|mov)$/);

  useEffect(() => {
    if (!isVideo) return;
    const video = videoRef.current;
    if (!video) return;

    if (isModalActive) {
      video.pause();
      return;
    }

    const handleTimeUpdate = () => {
      // preview mode: loop first 4 seconds if not isInteracting
      if (!isInteracting && video.currentTime >= 4) {
        video.currentTime = 0;
        video.play();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    if (isPlaying) video.play();

    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, [isInteracting, currentIndex, isModalActive, isPlaying, isVideo]);

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
    if (!isVideo) return; // Images don't have preview interactions like this
    setIsInteracting(true);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.stopPropagation();
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.stopPropagation();
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % media.length);
      setIsInteracting(false);
      setIsMuted(true);
    } else if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
      setIsInteracting(false);
      setIsMuted(true);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };


  return (
    <div
      className="relative w-full h-full bg-black group overflow-hidden cursor-pointer"
      style={{ touchAction: "pan-y" }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
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

      {/* Controls / Info Overlay */}
      {isVideo &&
        (!isInteracting ? (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-all duration-300 bg-black/10 group-hover:bg-black/40"
            onClick={startPreview}
          >
            <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 transform group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-5 h-5 text-white fill-current translate-x-0.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div
              className="text-black text-[10px] font-bold px-4 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-2 transition-all duration-300 uppercase tracking-widest shadow-xl"
              style={{
                background: "linear-gradient(90deg, #e3bc7c, #fef1cd, #d4a75c)",
              }}
            >
              Click to Preview
            </div>
          </div>
        ) : (
          <div className="absolute bottom-2 left-0 right-0 px-3 z-30 flex items-center justify-between animate-in slide-in-from-bottom-2 duration-300">
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

            {/* Maximize option button - hidden here as we moved it to bottom-right */}
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

      {/* Maximize Button (Bottom Right) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onOpenModal(media, currentIndex);
        }}
        className="absolute bottom-2 right-2 z-40 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center border border-white/20 hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all duration-300 cursor-pointer"
        title="Open Large View"
      >
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 3h6v6" />
          <path d="M9 21H3v-6" />
          <path d="M21 3l-7 7" />
          <path d="M3 21l7-7" />
        </svg>
      </button>
    </div>
  );
}

/* ══════════════════════════════════
   Single Service Card
   ══════════════════════════════════ */
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
  const currentMedia = media[currentIndex];
  const isVideo = currentMedia.toLowerCase().match(/\.(mp4|webm|ogg|mov)$/);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);


  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.stopPropagation();
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.stopPropagation();
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };


  return (
    <div className="fixed inset-0 z-110 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-300">
      <div
        className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center bg-black"
        style={{ touchAction: "pan-y" }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >

        {isVideo ? (
          <video
            key={currentIndex}
            src={currentMedia}
            autoPlay
            controls
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            key={currentIndex}
            src={currentMedia}
            alt="Enlarged view"
            className="w-full h-full object-contain"
          />
        )}

        {/* Modal Navigation Arrows */}
        {media.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-130 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-amber-500 transition-all border border-white/10 text-2xl"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-130 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-amber-500 transition-all border border-white/10 text-2xl"
            >
              ›
            </button>

            {/* Indicator Dots for Modal */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-130">
              {media.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i === currentIndex
                      ? "bg-amber-400 w-6"
                      : "bg-white/30 w-1.5"
                  }`}
                />
              ))}
            </div>
          </>
        )}

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-140 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-red-500 transition-colors border border-white/20 text-xl"
          aria-label="Close media"
        >
          ✕
        </button>
      </div>
      {/* Click outside to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>
  );
}

const LoginModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleGoogleSignIn = async () => {
    try {
      setErrorMsg("");
      setLoading(true);
      await signInWithPopup(auth, googleProvider);
      onClose();
    } catch (error: any) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setErrorMsg("");
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      onClose();
    } catch (error: any) {
      setErrorMsg(error.message || "Failed to sign in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div
        className="relative w-full max-w-sm rounded-[10px] overflow-hidden p-6 shadow-2xl animate-in fade-in zoom-in duration-300"
        style={{
          background: "#111",
          border: "1px solid #333",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          ✕
        </button>

        <div className="text-center mb-6">
          <h2 className="text-[18px] font-bold text-white mb-1 tracking-wide">
            Welcome Back
          </h2>
          <p className="text-xs text-gray-400">Please sign in to continue</p>
        </div>

        {errorMsg && (
          <div className="mb-4 text-[11px] text-red-500 bg-red-500/10 p-2 rounded border border-red-500/20 text-center">
            {errorMsg}
          </div>
        )}

        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 py-2.5 rounded-md mb-4 bg-white hover:bg-gray-100 transition-colors text-black font-semibold text-sm shadow-sm disabled:opacity-50"
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-4 h-4 object-contain"
          />
          Sign In with Google
        </button>

        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-px bg-[#333]"></div>
          <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
            or
          </span>
          <div className="flex-1 h-px bg-[#333]"></div>
        </div>

        <form className="space-y-4" onSubmit={handleEmailSignIn}>
          <div className="text-left">
            <label className="block text-[11px] text-gray-400 mb-1.5 tracking-wide font-medium">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-md px-3 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#d4a75c] transition-colors"
            />
          </div>
          <div className="text-left">
            <label className="block text-[11px] text-gray-400 mb-1.5 tracking-wide font-medium">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-md px-3 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#d4a75c] transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 text-[12px] font-bold tracking-[0.05em] uppercase rounded-md text-black transition-opacity duration-300 hover:opacity-90 outline-none mt-4 disabled:opacity-50"
            style={{
              background: "linear-gradient(90deg, #e3bc7c, #fef1cd, #d4a75c)",
            }}
          >
            {loading ? "Signing In..." : "SIGN IN"}
          </button>
        </form>
      </div>
    </div>
  );
};

function ServiceCard({
  card,
  onMediaClick,
  isModalActive,
}: {
  card: CardData;
  onMediaClick: (media: string[], index: number) => void;
  isModalActive: boolean;
}) {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart, toggleWishlist, isInWishlist } = useAppContext();
  const router = useRouter();

  const isWishlisted = isInWishlist(card.id);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleWishlistClick = () => {
    if (user) {
      toggleWishlist({
        id: card.id,
        title: card.title,
        image: card.image,
        price: card.price,
        originalPrice: card.originalPrice,
        delivery: card.delivery,
        category: card.category,
      });
    } else {
      setShowAuthModal(true);
    }
  };

  const handleAddToCartClick = () => {
    if (user) {
      addToCart({
        id: card.id,
        title: card.title,
        image: card.image,
        price: card.price,
        originalPrice: card.originalPrice,
        delivery: card.delivery,
        category: card.category,
      });
      // Show checkmark animation for 2 seconds
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    } else {
      setShowAuthModal(true);
    }
  };

  const isLimitedOffer = card.badge?.includes("LIMITED");

  return (
    <div
      className={`shrink-0 w-[230px] md:w-[255px] rounded-xl overflow-hidden transition-all duration-400 flex flex-col ${
        isLimitedOffer
          ? "border-2 border-[#d4a75c] shadow-[0_0_20px_rgba(212,167,92,0.4)] relative"
          : "border border-gray-200 hover:border-amber-300 hover:shadow-xl"
      }`}
      style={{ background: "#111" }}
    >
      {/* Glow Effect Background on Limited Offers */}
      {isLimitedOffer && (
        <div className="absolute inset-0 z-0 bg-linear-to-b from-[#d4a75c]/10 to-transparent pointer-events-none" />
      )}
      {/* Image */}
      <div className="relative w-full h-[210px] md:h-[230px] bg-[#1a1a1a] overflow-hidden">
        {/* Wishlist */}
        <button
          onClick={handleWishlistClick}
          className={`absolute top-3 left-3 z-20 transition-colors ${
            isWishlisted
              ? "text-red-500 hover:text-red-400"
              : "text-gray-400 hover:text-red-400"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isWishlisted ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>

        {/* Badges */}
        <div className="absolute top-2 right-2 z-20 flex flex-col items-end gap-1.5">
          <span
            className="text-black font-extrabold tracking-wider uppercase text-[8px] px-2.5 py-1 rounded-sm shadow-sm"
            style={{
              background: "linear-gradient(90deg, #e3bc7c, #fef1cd, #d4a75c)",
              border: "1px solid #c89542",
            }}
          >
            {card.badge}
          </span>
          <span
            className="text-black font-extrabold tracking-widest text-[10px] px-2.5 py-0.5 rounded-sm shadow-sm"
            style={{
              background: "linear-gradient(90deg, #e3bc7c, #fef1cd, #d4a75c)",
              border: "1px solid #c89542",
            }}
          >
            {card.discount}
          </span>
        </div>

        {card.videos && card.videos.length > 0 ? (
          <MediaCarousel
            media={card.videos}
            onOpenModal={(mediaArr, idx) => onMediaClick(mediaArr, idx)}
            isModalActive={isModalActive}
          />
        ) : (
          <div className="relative w-full h-full group">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            {/* Maximize Button for Static Image */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onMediaClick([card.image], 0);
              }}
              className="absolute bottom-2 right-2 z-20 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center border border-white/20 hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all duration-300 cursor-pointer"
              title="Open Large View"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 3h6v6" />
                <path d="M9 21H3v-6" />
                <path d="M21 3l-7 7" />
                <path d="M3 21l7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div 
        onClick={() => router.push(`/plans/${card.id}`)}
        className="flex flex-col flex-1 p-3.5 md:p-4 cursor-pointer"
      >
        {/* Title */}
        <h3 className="text-white font-semibold text-[13px] leading-snug mb-2.5 line-clamp-2">
          {card.title}
        </h3>

        {/* Features */}
        <ul className="flex flex-col gap-1 mb-2 flex-1">
          {card.features.map((f, i) => {
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
        <p className="text-[10px] text-amber-400/80 mb-3">
          ⏳ Delivery: {card.delivery}
        </p>

        {/* Tag badge */}
        <div className="mb-3">
          <span className="border border-amber-500/50 text-amber-400 text-[10px] font-semibold px-3 py-0.5 rounded-full">
            {card.tag}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-white font-bold text-sm"> {card.price}</span>
          <span className="text-gray-500 line-through text-[11px]">
            {card.originalPrice}
          </span>
        </div>

        {/* Read More Section */}
        <Link 
          href={`/plans/${card.id}`}
          className="text-amber-400 text-[11px] font-medium hover:underline mb-3 block w-fit underline-offset-4 cursor-pointer"
        >
          READ FULL DETAILS →
        </Link>

        {/* CTA Button */}
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

      {/* Attach login modal locally here */}
      <LoginModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </div>
  );
}
