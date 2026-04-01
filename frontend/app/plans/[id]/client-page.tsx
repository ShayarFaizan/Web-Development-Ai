"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Star, 
  StarHalf,
  ChevronRight, 
  MapPin, 
  ShieldCheck, 
  Zap, 
  Info,
  Clock,
  Package,
  ArrowRightLeft,
  Lock,
  ChevronDown,
  ChevronUp,
  ThumbsUp,
  ThumbsDown,
  UserCheck,
  X,
  Camera,
  Trash2,
  Heart
} from "lucide-react";
import { Review, CardData } from "@/lib/servicesData";
import Navbar from "@/app/components/Navbar";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { 
  collection, 
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  query, 
  where, 
  onSnapshot, 
  serverTimestamp,
  Timestamp,
  increment,
  arrayUnion,
  arrayRemove
} from "firebase/firestore";
import { useAppContext } from "@/app/context/AppContext";
import { useRouter } from "next/navigation";

export default function PlanDetailClient({ card, id }: { card: CardData, id: string }) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { addToCart, toggleWishlist, isInWishlist } = useAppContext();
  const [selectedMedia, setSelectedMedia] = useState(0);
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);
  const [isHighlightsOpen, setIsHighlightsOpen] = useState(true);
  
  // Auth State
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Review States
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [localReviews, setLocalReviews] = useState<Review[]>([]);
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const [newReview, setNewReview] = useState({
    rating: 5,
    title: "",
    comment: "",
    userName: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  // Swipe logic for gallery
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      setSelectedMedia((prev) => (prev + 1) % gallery.length);
    } else if (isRightSwipe) {
      setSelectedMedia((prev) => (prev - 1 + gallery.length) % gallery.length);
    }
  };

  // Dynamic Rating Calculations
  const allReviewsCount = localReviews.length;
  const averageRating = allReviewsCount > 0 
    ? Number((localReviews.reduce((acc, r) => acc + r.rating, 0) / allReviewsCount).toFixed(1))
    : 0;

  // Filtered Reviews for Display
  const filteredReviews = filterRating 
    ? localReviews.filter(r => Math.floor(r.rating) === filterRating)
    : localReviews;

  const totalReviewsCount = filteredReviews.length;

  // Fetch reviews from Firestore
  useEffect(() => {
    if (!id) return;

    const q = query(
      collection(db, "reviews"),
      where("planId", "==", id)
    );

    const unsubscribeReviews = onSnapshot(q, (snapshot) => {
      const dbReviews = snapshot.docs.map(doc => {
        const data = doc.data();
        let formattedDate = "Just now";
        
        if (data.createdAt && data.createdAt instanceof Timestamp) {
          const date = data.createdAt.toDate();
          const dayMonthYear = date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
          const time = date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
          formattedDate = `${dayMonthYear} • ${time}`;
        }

        return {
          id: doc.id,
          userName: data.userName,
          userImage: data.userImage,
          reviewImage: data.reviewImage || null,
          rating: data.rating,
          title: data.title,
          userId: data.userId || null, 
          comment: data.comment,
          date: formattedDate,
          isGoldReviewer: data.isGoldReviewer || false,
          likes: data.likes || 0,
          dislikes: data.dislikes || 0,
          likedBy: data.likedBy || [],
          dislikedBy: data.dislikedBy || [],
          createdAt: data.createdAt || null
        } as Review;
      });

      dbReviews.sort((a, b) => {
        const dateA = a.createdAt ? a.createdAt.toMillis() : Date.now();
        const dateB = b.createdAt ? b.createdAt.toMillis() : Date.now();
        return dateB - dateA;
      });

      const initialReviews = card?.reviews || [];
      setLocalReviews([...dbReviews, ...initialReviews]);
    }, (error) => {
      console.error("Firestore Listen Error:", error);
    });

    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setNewReview(prev => ({
          ...prev,
          userName: user.displayName || ""
        }));
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      unsubscribeReviews();
      unsubscribeAuth();
    };
  }, [id, card]);

  const gallery = card.videos && card.videos.length > 0 ? card.videos : [card.image];

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await addDoc(collection(db, "reviews"), {
        planId: id,
        userId: currentUser?.uid || "anonymous",
        userName: newReview.userName || currentUser?.displayName || "Anonymous",
        userImage: currentUser?.photoURL || null,
        reviewImage: imagePreview || null,
        rating: newReview.rating,
        title: newReview.title || "User Review",
        comment: newReview.comment,
        isGoldReviewer: false,
        likes: 0,
        dislikes: 0,
        createdAt: serverTimestamp()
      });

      setShowReviewForm(false);
      setImagePreview(null);
      setSelectedImage(null);
      setNewReview({ rating: 5, title: "", comment: "", userName: currentUser?.displayName || "" });
    } catch (error) {
      console.error("Error adding review: ", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Image size should be less than 2MB");
        return;
      }
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteReview = async (reviewId: string) => {
    if (!confirm("Are you sure you want to delete this review?")) return;
    try {
      await deleteDoc(doc(db, "reviews", reviewId));
    } catch (error) {
      console.error("Error deleting review:", error);
      alert("Delete failed. You might not have permission.");
    }
  };

  const handleLike = async (reviewId: string, isDislike: boolean = false) => {
    if (!currentUser) {
      alert("Please login to like/dislike reviews.");
      return;
    }

    try {
      const reviewRef = doc(db, "reviews", reviewId);
      const review = localReviews.find(r => r.id === reviewId);
      if (!review) return;

      const userId = currentUser.uid;
      const alreadyLiked = review.likedBy?.includes(userId);
      const alreadyDisliked = review.dislikedBy?.includes(userId);

      if (isDislike) {
        if (alreadyDisliked) {
          // Unlike (Remove dislike)
          await updateDoc(reviewRef, {
            dislikedBy: arrayRemove(userId),
            dislikes: increment(-1)
          });
        } else {
          // Add Dislike
          const updates: any = {
            dislikedBy: arrayUnion(userId),
            dislikes: increment(1)
          };
          // If was liked, remove like
          if (alreadyLiked) {
            updates.likedBy = arrayRemove(userId);
            updates.likes = increment(-1);
          }
          await updateDoc(reviewRef, updates);
        }
      } else {
        if (alreadyLiked) {
          // Unlike (Remove like)
          await updateDoc(reviewRef, {
            likedBy: arrayRemove(userId),
            likes: increment(-1)
          });
        } else {
          // Add Like
          const updates: any = {
            likedBy: arrayUnion(userId),
            likes: increment(1)
          };
          // If was disliked, remove dislike
          if (alreadyDisliked) {
            updates.dislikedBy = arrayRemove(userId);
            updates.dislikes = increment(-1);
          }
          await updateDoc(reviewRef, updates);
        }
      }
    } catch (error) {
      console.error("Error updating like/dislike", error);
    }
  };

  const handleAddToCart = () => {
    if (card) {
      addToCart({
        id: card.id,
        title: card.title,
        image: card.image,
        price: card.price,
        originalPrice: card.originalPrice,
        delivery: card.delivery,
        category: card.category,
      });
      alert("Added to cart!");
    }
  };

  const handleBuyNow = () => {
    if (card) {
      addToCart({
        id: card.id,
        title: card.title,
        image: card.image,
        price: card.price,
        originalPrice: card.originalPrice,
        delivery: card.delivery,
        category: card.category,
      });
      router.push("/cart");
    }
  };

  const renderStars = (rating: number) => {
    return [1, 2, 3, 4, 5].map((star) => {
      const isFull = star <= Math.floor(rating);
      const isHalf = !isFull && (star - 0.5 <= rating);
      return (
        <span key={star}>
          {isFull ? (
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
          ) : isHalf ? (
            <StarHalf className="w-4 h-4 fill-amber-500 text-amber-500" />
          ) : (
            <Star className="w-4 h-4 text-zinc-300" />
          )}
        </span>
      );
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-800 selection:bg-amber-500/30">
      <Navbar />

      {/* Breadcrumbs */}
      <nav className="max-w-[1500px] mx-auto px-4 md:px-8 pt-2 md:pt-10 pb-2">
        <div className="flex items-center gap-2 text-[11px] text-zinc-500 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <Link href="/" className="hover:text-amber-600 hover:underline transition-colors uppercase tracking-tight">Home</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <Link href="/more-services" className="hover:text-amber-600 hover:underline transition-colors uppercase tracking-tight">Services</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <Link href={`/more-services?category=${encodeURIComponent(card.category)}`} className="text-blue-600 hover:text-amber-600 hover:underline transition-colors uppercase tracking-tight cursor-pointer font-medium">{card.category}</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <span className="text-zinc-800 font-bold truncate uppercase tracking-tight">{card.title}</span>
        </div>
      </nav>

      <main className="max-w-[1500px] mx-auto px-4 md:px-8 pb-20 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-black/5">
          
          {/* 1. Gallery Column */}
          <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-24 h-fit">
            <div 
              className="relative aspect-square rounded-lg bg-white border border-black/5 overflow-hidden group cursor-zoom-in touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                src={gallery[selectedMedia]}
                alt={card.title}
                fill
                className="object-contain p-2 group-hover:scale-110 transition-transform duration-700"
                priority
              />
              <div className="absolute top-4 left-4">
                 <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase tracking-wider">
                  {card.badge}
                </span>
              </div>

              {/* Wishlist Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleWishlist({
                    id: card.id,
                    title: card.title,
                    image: card.image,
                    price: card.price,
                    originalPrice: card.originalPrice,
                    delivery: card.delivery,
                    category: card.category
                  });
                }}
                className={`absolute top-4 right-4 transition-all duration-300 p-2.5 rounded-full backdrop-blur-md shadow-lg border border-white/20 z-10 ${
                  isInWishlist(card.id) 
                    ? "bg-red-500 text-white" 
                    : "bg-white/70 text-gray-400 hover:text-red-500 hover:bg-white"
                }`}
              >
                <Heart 
                  size={20} 
                  fill={isInWishlist(card.id) ? "currentColor" : "none"} 
                  strokeWidth={isInWishlist(card.id) ? 0 : 2.5}
                />
              </button>
            </div>
            
            <div className="flex gap-2 overflow-x-auto py-2 scrollbar-hide">
              {gallery.map((media: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setSelectedMedia(idx)}
                  className={`relative w-16 h-16 rounded border-2 transition-all shrink-0 ${
                    selectedMedia === idx ? "border-amber-500 scale-105" : "border-black/5 hover:border-black/20"
                  }`}
                >
                  <Image src={media} alt="thumbnail" fill className="object-cover rounded-sm" />
                </button>
              ))}
            </div>
          </div>

          {/* 2. Middle Content Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-b border-black/10 pb-4">
              <h1 className="text-2xl md:text-3xl font-medium text-zinc-900 mb-2 leading-tight">
                {card.title} - Professional {card.category} Experience ({card.tag} Plan)
              </h1>
              <div className="flex items-center gap-4 text-sm font-light h-6">
                {(card.reviews && card.reviews.length > 0) ? (
                  <div className="flex items-center gap-1 group cursor-pointer">
                    {averageRating > 0 && <span className="text-amber-600 font-bold">{averageRating}</span>}
                    <div className="flex items-center">
                      {renderStars(averageRating)}
                    </div>
                    <span className="text-blue-600 hover:text-amber-700 hover:underline ml-1 uppercase text-[10px] font-bold tracking-widest">
                      {totalReviewsCount.toLocaleString()} Customer Ratings
                    </span>
                  </div>
                ) : (
                   <div className="flex items-center text-zinc-400 text-[10px] uppercase font-bold tracking-widest">
                      No Ratings Yet
                   </div>
                )}
                
                <div className="ml-2">
                  <div className="flex items-center bg-[#2874f0] text-white text-[9px] md:text-[11px] font-black px-2.5 py-0.5 rounded-sm italic shadow-sm border border-blue-400/30">
                    <span className="text-yellow-400 mr-1 not-italic text-[12px]">★</span> WEBDEV <span className="ml-1 opacity-90">Assured</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-3">
                 <span className="text-red-500 text-3xl font-light">-{card.discount}</span>
                 <div className="flex items-start">
                    <span className="text-sm mt-1 font-medium text-zinc-900">₹</span>
                    <span className="text-3xl font-medium text-zinc-900">
                        {card.price.split('₹')[1]}
                    </span>
                 </div>
              </div>
              <div className="flex items-center gap-2 text-zinc-500 text-sm">
                <span>M.R.P.:</span>
                <span className="line-through">{card.originalPrice}</span>
              </div>
              <div className="bg-zinc-100 inline-block px-2 py-1 rounded text-[11px] text-zinc-600 border border-black/5 mt-2">
                All taxes included. GST input tax credit available.
              </div>
            </div>

            <div className="p-4 rounded-lg border border-amber-500/30 bg-amber-500/10 flex items-start gap-4 shadow-[0_4px_12px_rgba(245,158,11,0.1)] hover:shadow-[0_4px_16px_rgba(245,158,11,0.15)] transition-all group cursor-default">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(245,158,11,0.25)] group-hover:scale-110 transition-transform">
                 <Star className="w-6 h-6 text-white fill-white" />
              </div>
              <div>
                <p className="text-xs font-black text-amber-600 mb-1.5 tracking-[0.2em] uppercase">Limited Time Offer</p>
                <p className="text-sm text-zinc-800 leading-relaxed font-bold">
                  GIVE THE <span className="text-amber-600">5 STAR REVIEW</span> ON GOOGLE MY BUSINESS GET INSTANT <span className="text-green-600">5 PERCENT OFF</span> SHARE THE REVIEW WITH SCREENSHOT ON WHATSAPP WITH US
                </p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 pt-2 pb-6 border-b border-black/10">
               {[
                 { icon: Clock, label: "Delivery", val: card.delivery },
                 { icon: Lock, label: "Secure Payment", val: "Verified" },
                 { icon: Package, label: "Service Mode", val: card.tag },
                 { icon: ArrowRightLeft, label: "Revisions", val: "Unlimited*" }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center gap-2 text-center group cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all shadow-sm">
                       <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-zinc-500 group-hover:text-amber-600 uppercase tracking-tighter">{item.label}</span>
                    <span className="text-[10px] text-blue-600 font-medium">{item.val}</span>
                 </div>
               ))}
            </div>

            {/* Buying Section for Mobile Only */}
            <div className="lg:hidden">
              <div className="p-5 rounded-xl border border-black/10 bg-white space-y-6 shadow-sm">
                 <div className="space-y-1">
                     <div className="flex items-start">
                         <span className="text-sm mt-1 font-medium text-zinc-900">₹</span>
                         <span className="text-2xl font-medium text-zinc-900">
                             {card.price.split('₹')[1]}
                         </span>
                     </div>
                     <div className="flex items-center gap-2 text-blue-600 text-xs hover:underline cursor-pointer">
                         <MapPin className="w-3 h-3 text-zinc-400" />
                         <span>Deliver to Web Development AI - Bilaspur 495001</span>
                     </div>
                 </div>

                 <div className="space-y-2">
                     <p className="text-green-600 font-medium text-lg tracking-tight">In stock</p>
                     <div className="text-sm space-y-1">
                         <div className="flex gap-2">
                             <span className="text-zinc-400">Ships from</span>
                             <span className="text-zinc-700">Web Development AI</span>
                         </div>
                         <div className="flex gap-2">
                             <span className="text-zinc-400">Sold by</span>
                             <span className="text-blue-600 hover:underline uppercase font-medium">Web Development AI</span>
                         </div>
                     </div>
                 </div>

                 <div className="flex flex-col gap-3 pt-2">
                    <button
                       onClick={handleAddToCart}
                       className="w-full py-2.5 rounded-full bg-[#FFD814] hover:bg-[#F7CA00] text-black text-sm font-medium transition-colors text-center shadow-sm cursor-pointer"
                    >
                      Add to Cart
                    </button>
                    <button
                       onClick={handleBuyNow}
                       className="w-full py-2.5 rounded-full bg-[#FFA41C] hover:bg-[#FA8900] text-black text-sm font-medium transition-colors text-center shadow-sm cursor-pointer"
                    >
                      Buy Now
                    </button>
                 </div>

                 <div className="flex items-center gap-2 text-zinc-400 text-xs">
                     <ShieldCheck className="w-4 h-4" />
                     <span className="text-blue-600 hover:underline cursor-pointer">Secure transaction</span>
                 </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-zinc-900 tracking-tight uppercase">Product Description</h2>
              <div className="text-zinc-600 text-sm leading-relaxed space-y-4">
                <p className="whitespace-pre-line">{card.detailedDescription}</p>
                <div className="space-y-2">
                   <h3 className="text-zinc-900 font-bold text-sm">Key Features We Provide:</h3>
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                      {card.features.map((f: string, idx: number) => (
                         <li key={idx} className="flex items-center gap-2 text-zinc-500 group">
                            <CheckIcon className="w-3.5 h-3.5 text-green-600 shrink-0" />
                            <span className="group-hover:text-zinc-900 transition-colors uppercase text-[11px] tracking-wide">{f}</span>
                         </li>
                      ))}
                   </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Right Buying Column (Sticky for Desktop) */}
          <div className="hidden lg:block lg:col-span-3">
             <div className="p-5 rounded-xl border border-black/10 bg-white space-y-6 lg:sticky lg:top-24 shadow-sm">
                <div className="space-y-1">
                    <div className="flex items-start">
                        <span className="text-sm mt-1 font-medium text-zinc-900">₹</span>
                        <span className="text-2xl font-medium text-zinc-900">
                            {card.price.split('₹')[1]}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-600 text-xs hover:underline cursor-pointer">
                        <MapPin className="w-3 h-3 text-zinc-400" />
                        <span>Deliver to Web Development AI - Bilaspur 495001</span>
                    </div>
                </div>

                <div className="space-y-2">
                    <p className="text-green-600 font-medium text-lg tracking-tight">In stock</p>
                    <div className="text-sm space-y-1">
                        <div className="flex gap-2">
                            <span className="text-zinc-400">Ships from</span>
                            <span className="text-zinc-700">Web Development AI</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-zinc-400">Sold by</span>
                            <span className="text-blue-600 hover:underline uppercase font-medium">Web Development AI</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3 pt-2">
                   <button
                      onClick={handleAddToCart}
                      className="w-full py-2.5 rounded-full bg-[#FFD814] hover:bg-[#F7CA00] text-black text-sm font-medium transition-colors text-center shadow-sm cursor-pointer"
                   >
                     Add to Cart
                   </button>
                   <button
                      onClick={handleBuyNow}
                      className="w-full py-2.5 rounded-full bg-[#FFA41C] hover:bg-[#FA8900] text-black text-sm font-medium transition-colors text-center shadow-sm cursor-pointer"
                   >
                     Buy Now
                   </button>
                </div>

                <div className="flex items-center gap-2 text-zinc-400 text-xs">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-blue-600 hover:underline cursor-pointer">Secure transaction</span>
                </div>
             </div>
          </div>
        </div>

        {/* 4. Product Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 pt-8">
            <section className="bg-white rounded-2xl border border-black/5 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setIsHighlightsOpen(!isHighlightsOpen)}
                  className="w-full p-8 flex items-center justify-between text-left hover:bg-black/5 transition-colors"
                >
                    <h2 className="text-xl font-bold text-zinc-900 tracking-wide uppercase">Product highlights</h2>
                    {isHighlightsOpen ? <ChevronUp className="w-5 h-5 text-zinc-400" /> : <ChevronDown className="w-5 h-5 text-zinc-400" />}
                </button>
                
                {isHighlightsOpen && (
                    <div className="px-8 pb-8 pt-4 border-t border-black/5 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
                        {card.highlights ? card.highlights.map((h: any, i: number) => (
                            <div key={i} className="space-y-1 group">
                                <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">{h.label}</p>
                                <p className="text-sm text-zinc-700 group-hover:text-amber-600 transition-colors uppercase">{h.value}</p>
                            </div>
                        )) : (
                            <p className="text-zinc-400 italic text-sm px-8 pb-8">Spec highlights coming soon...</p>
                        )}
                    </div>
                )}
            </section>

            {/* 5. All Details */}
            <section className="bg-white rounded-2xl border border-black/5 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                  className="w-full p-8 flex items-center justify-between text-left hover:bg-black/5 transition-colors"
                >
                    <div>
                        <h2 className="text-xl font-bold text-zinc-900 tracking-wide uppercase">All details</h2>
                        <p className="text-xs text-zinc-400 mt-1 uppercase font-light">Features, description and more</p>
                    </div>
                    {isDetailsOpen ? <ChevronUp className="w-5 h-5 text-zinc-400" /> : <ChevronDown className="w-5 h-5 text-zinc-400" />}
                </button>
                {isDetailsOpen && (
                    <div className="px-8 pb-8 pt-4 border-t border-black/5 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                           <div className="space-y-3">
                              <h3 className="text-zinc-800 font-bold uppercase text-[10px] tracking-[0.2em]">Why Choose Us</h3>
                              <p className="text-sm text-zinc-500 leading-relaxed uppercase font-light">We provide industry-standard quality with pure modern codebases. No legacy software, only performance.</p>
                           </div>
                           <div className="space-y-3">
                              <h3 className="text-zinc-800 font-bold uppercase text-[10px] tracking-[0.2em]">Technical Scope</h3>
                              <p className="text-sm text-zinc-500 leading-relaxed uppercase font-light">Fully optimized for speed (Core Web Vitals), accessible for all users, and secure by design.</p>
                           </div>
                           <div className="space-y-3">
                              <h3 className="text-zinc-800 font-bold uppercase text-[10px] tracking-[0.2em]">Delivery Process</h3>
                              <p className="text-sm text-zinc-500 leading-relaxed uppercase font-light">Standard deployment pipeline: Requirement &rarr; UI/UX &rarr; Tech Dev &rarr; Testing &rarr; Handover.</p>
                           </div>
                        </div>
                    </div>
                )}
            </section>

            {/* 6. Ratings and reviews */}
            <section className="bg-white rounded-2xl border border-black/5 p-8 space-y-10 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Overall Summary */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="space-y-1">
                            <h2 className="text-xl font-bold text-zinc-900 tracking-wide uppercase">Ratings and reviews</h2>
                            <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-light">Summary of {totalReviewsCount} Verified Buyers</p>
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col">
                                <span className="text-4xl font-bold text-zinc-900 tracking-tighter">{averageRating}</span>
                                <div className="flex mt-1">
                                    {renderStars(averageRating)}
                                </div>
                            </div>
                            <div className="h-10 w-px bg-black/5" />
                            <span className="bg-green-600/10 text-green-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-green-600/20">
                                {averageRating >= 4.5 ? "Exceptional" : averageRating >= 4 ? "Very Good" : "Recommended"}
                            </span>
                        </div>
                        
                        <div className="pt-4">
                             <button 
                                 onClick={() => {
                                   if (!currentUser) {
                                     alert("Please login to rate this service.");
                                     return;
                                   }
                                   setShowReviewForm(true);
                                 }}
                                 className="w-full py-2.5 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-800 text-xs font-bold hover:bg-zinc-100 transition-all uppercase tracking-widest hover:border-amber-500/30"
                             >
                                 Rate this Service
                             </button>
                        </div>
                    </div>

                    {/* Rating Bars Distribution */}
                    <div className="lg:col-span-8 flex flex-col justify-center space-y-2.5">
                        <div className="flex justify-between items-center mb-2">
                             <span className="text-[10px] text-zinc-400 uppercase tracking-widest">Filter by rating</span>
                             {filterRating && (
                                 <button 
                                    onClick={() => setFilterRating(null)}
                                    className="text-[10px] text-amber-600 hover:underline uppercase tracking-widest"
                                 >
                                     Reset Filter
                                 </button>
                             )}
                        </div>
                        {[5, 4, 3, 2, 1].map((star) => {
                            const count = localReviews.filter(r => Math.floor(r.rating) === star).length;
                            const percentage = allReviewsCount > 0 ? (count / allReviewsCount) * 100 : 0;
                            const isActive = filterRating === star;
                            
                            return (
                                <div 
                                    key={star} 
                                    onClick={() => setFilterRating(isActive ? null : star)}
                                    className={`flex items-center gap-4 group cursor-pointer transition-all ${isActive ? "scale-[1.02]" : "hover:scale-[1.01]"}`}
                                >
                                    <span className={`text-[10px] font-bold w-10 uppercase tracking-tighter transition-colors ${isActive ? "text-amber-600" : "text-zinc-500 group-hover:text-amber-600"}`}>
                                        {star} Star
                                    </span>
                                    <div className={`flex-1 h-2.5 bg-zinc-100 rounded-full overflow-hidden border transition-colors ${isActive ? "border-amber-500/50" : "border-black/5"}`}>
                                        <div 
                                            className={`h-full transition-all duration-700 ease-out rounded-full ${isActive ? "bg-amber-500 shadow-[0_4px_12px_rgba(245,158,11,0.25)]" : "bg-amber-500/60 group-hover:bg-amber-500"}`}
                                            style={{ width: `${percentage}%` }}
                                        />
                                    </div>
                                    <span className={`text-[10px] font-bold w-10 text-right transition-colors ${isActive ? "text-zinc-900" : "text-zinc-400 group-hover:text-zinc-600"}`}>
                                        {Math.round(percentage)}%
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="h-px w-full bg-black/5" />

                {/* Review Gallery */}
                {localReviews.some(r => r.reviewImage) && (
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                        {localReviews
                            .filter(r => r.reviewImage)
                            .map((r, i) => (
                                <div 
                                    key={i} 
                                    onClick={() => setFullscreenImage(r.reviewImage!)}
                                    className="relative w-32 h-32 rounded-lg border border-black/10 overflow-hidden shrink-0 group cursor-zoom-in hover:border-amber-500/50 transition-all shadow-sm"
                                >
                                    <img src={r.reviewImage!} alt="customer upload" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute inset-x-0 bottom-0 bg-black/60 py-1 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-[8px] text-white font-bold uppercase tracking-widest">{r.userName}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )}

                {/* Review Cards List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredReviews.length > 0 ? filteredReviews.map((r: any) => (
                        <div key={r.id} className="p-5 rounded-xl border border-black/5 bg-zinc-50/50 space-y-4 hover:border-amber-500/10 transition-colors flex flex-col justify-between group/card relative">
                            {/* Delete Button */}
                            {currentUser && r.userId === currentUser.uid && (
                                <button 
                                    onClick={() => handleDeleteReview(r.id)}
                                    className="absolute top-2 right-2 p-1.5 rounded-full bg-red-600/10 text-red-600 opacity-0 group-hover/card:opacity-100 transition-opacity hover:bg-red-600 hover:text-white shadow-sm"
                                    title="Delete Review"
                                >
                                    <Trash2 className="w-3 h-3" />
                                </button>
                            )}

                            <div className="space-y-4">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex gap-3">
                                        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-black/5">
                                            <img 
                                              src={r.userImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(r.userName)}&background=random&color=fff&size=128`} 
                                              alt={r.userName} 
                                              className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <div className={`text-[10px] font-bold px-1.5 py-0.5 rounded text-white flex items-center gap-1 ${
                                                    r.rating >= 4 ? "bg-green-600" : 
                                                    r.rating >= 3 ? "bg-yellow-500" : "bg-red-600"
                                                }`}>
                                                    {r.rating} <Star className="w-2.5 h-2.5 fill-current" />
                                                </div>
                                                <span className="text-xs font-bold text-zinc-800 uppercase tracking-wide truncate max-w-[100px]">{r.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-[9px] text-zinc-400 font-light whitespace-nowrap mt-1">{r.date}</span>
                                </div>
                                
                                <p className="text-xs text-zinc-600 italic leading-relaxed line-clamp-3">"{r.comment}"</p>

                                {r.reviewImage && (
                                    <div 
                                        onClick={() => setFullscreenImage(r.reviewImage!)}
                                        className="relative mt-4 w-full h-40 rounded-lg overflow-hidden border border-black/5 bg-white group/img cursor-zoom-in shadow-sm"
                                    >
                                        <img 
                                            src={r.reviewImage} 
                                            alt="Review submission" 
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                            <Camera className="w-5 h-5 text-black/50" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-black/5">
                                <div className="flex items-center gap-4">
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-[10px] font-medium text-zinc-800 uppercase tracking-tighter">{r.userName}</span>
                                        {r.isGoldReviewer && (
                                            <div className="flex items-center gap-1 text-[8px] text-amber-600 font-bold uppercase tracking-widest">
                                                <UserCheck className="w-2.5 h-2.5" />
                                                Gold
                                            </div>
                                        )}
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-3">
                                    <button 
                                        onClick={() => handleLike(r.id)}
                                        className="flex items-center gap-1 text-zinc-400 hover:text-amber-600 transition-colors"
                                    >
                                        <ThumbsUp className={`w-3 h-3 ${r.likes > 0 ? "fill-amber-600/20 text-amber-600" : ""}`} />
                                        <span className="text-[9px]">{r.likes}</span>
                                    </button>
                                    <button 
                                        onClick={() => handleLike(r.id, true)}
                                        className="flex items-center gap-1 text-zinc-400 hover:text-red-600 transition-colors"
                                    >
                                        <ThumbsDown className={`w-3 h-3 ${r.dislikes > 0 ? "fill-red-600/20 text-red-600" : ""}`} />
                                        <span className="text-[9px]">{r.dislikes}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <p className="text-zinc-400 italic text-sm uppercase font-light col-span-full text-center py-10">
                            {filterRating ? `No ${filterRating}-star reviews match your filter.` : "Be the first to rate this service!"}
                        </p>
                    )}
                </div>
            </section>
        </div>

        {/* 7. Review Form Modal */}
        {showReviewForm && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <div className="bg-white border border-black/10 rounded-2xl w-full max-w-lg overflow-hidden relative shadow-2xl animate-in zoom-in-95 duration-200">
              <button 
                onClick={() => setShowReviewForm(false)}
                className="absolute top-4 right-4 p-2 hover:bg-black/5 rounded-full transition-colors text-zinc-400"
              >
                <X className="w-5 h-5" />
              </button>

              <form onSubmit={handleReviewSubmit} className="p-8 space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold text-zinc-900 uppercase tracking-tight">Rate this service</h2>
                  <p className="text-sm text-zinc-500 uppercase tracking-widest">Share your experience with others</p>
                </div>

                {/* Profile Display if Logged In */}
                {currentUser && (
                  <div className="flex items-center gap-3 bg-zinc-50 p-3 rounded-xl border border-black/5">
                    <img 
                      src={currentUser.photoURL || ""} 
                      alt="avatar" 
                      className="w-12 h-12 rounded-full border border-amber-500/30" 
                    />
                    <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-widest">Posting as</p>
                      <p className="text-sm font-bold text-zinc-900 uppercase">{currentUser.displayName}</p>
                    </div>
                  </div>
                )}

                {/* Star Rating Selector */}
                <div className="flex justify-center gap-3 py-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      className="transition-transform active:scale-95"
                    >
                      <Star 
                        className={`w-10 h-10 ${
                          star <= newReview.rating 
                            ? "fill-amber-500 text-amber-500" 
                            : "text-zinc-200 hover:text-zinc-300"
                        }`} 
                      />
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  {!currentUser && (
                    <div>
                      <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1 block">Your Name</label>
                      <input
                        required
                        type="text"
                        value={newReview.userName}
                        onChange={(e) => setNewReview({ ...newReview, userName: e.target.value })}
                        className="w-full bg-zinc-50 border border-black/5 rounded-lg px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-amber-500 transition-colors uppercase"
                        placeholder="ENTER NAME"
                      />
                    </div>
                  )}
                  <div>
                    <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1 block">Review Title</label>
                    <input
                      required
                      type="text"
                      value={newReview.title}
                      onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                      className="w-full bg-zinc-50 border border-black/5 rounded-lg px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-amber-500 transition-colors uppercase"
                      placeholder="EX: AWESOME WORK!"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1 block">Detail Review</label>
                    <textarea
                      required
                      rows={4}
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      className="w-full bg-zinc-50 border border-black/5 rounded-lg px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-amber-500 transition-colors uppercase resize-none"
                      placeholder="TELL US MORE ABOUT THE SERVICE..."
                    />
                  </div>
                  
                  {imagePreview && (
                    <div className="relative w-24 h-24 rounded-lg border border-black/10 overflow-hidden bg-zinc-50 group">
                      <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                      <button 
                        type="button"
                        onClick={() => { setImagePreview(null); setSelectedImage(null); }}
                        className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="w-6 h-6 text-white" />
                      </button>
                    </div>
                  )}

                  {!imagePreview && (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex items-center gap-2 text-[10px] font-bold text-amber-600 uppercase tracking-widest hover:text-amber-700 transition-colors"
                    >
                      <Camera className="w-4 h-4" />
                      Add Photo
                    </button>
                  )}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/*"
                    className="hidden"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-amber-500 text-white text-xs font-black uppercase tracking-[0.2em] shadow-lg hover:bg-amber-600 transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Post Review"}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* 8. Fullscreen Image Overlay */}
        {fullscreenImage && (
          <div className="fixed inset-0 z-200 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
             <button 
                onClick={() => setFullscreenImage(null)}
                className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
             >
                <X className="w-6 h-6" />
             </button>
             <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img src={fullscreenImage} alt="Fullscreen review image" className="w-full h-full object-contain" />
             </div>
          </div>
        )}
      </main>
    </div>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
