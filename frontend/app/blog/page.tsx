"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronRight, ArrowRight } from "lucide-react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { auth, googleProvider, db, messaging } from "@/lib/firebase";

interface Blog {
  id: string;
  category: string;
  title: string;
  price: string;
  description: string;
  image: string;
  link: string;
  createdAt?: any;
}

const FEATURED_ARTICLES = [
  {
    tags: ["GEMINI", "GOOGLE AI STUDIO", "AI", "AI HOMEPAGE", "EVENTS"],
    title: "Get ready for Google I/O 2026",
    description:
      "Google I/O returns May 19-20. Watch the livestreams for updates on Android, AI, Chrome, and Cloud. Registration is open on the Google I/O website.",
    image: "/blog/next.js.png",
    date: "MAY 19 – 20",
  },
];

const STATIC_BLOGS = [
  {
    title:
      "Announcing ADK for Java 1.0.0: Building the Future of AI Agents in Java",
    date: "MARCH 30, 2026",
    snippet:
      "Google has released version 1.0.0 of the Agent Development Kit (ADK) for Java, introducing powerful new features like Google Maps grounding, built-in URL fetching, and a standardized Agent2Agent...",
  },
  {
    title: "Closing the knowledge gap with agent skills",
    date: "MARCH 25, 2026",
    snippet:
      'To bridge the gap between static model knowledge and rapidly evolving software practices, Google DeepMind developed a "Gemini API developer skill" that provides agents with live...',
  },
  {
    title: "Jump to play: Building with Gemini & MediaPipe",
    date: "MARCH 24, 2026",
    snippet:
      "The provided workflow streamlines motion-controlled game development by using Gemini Canvas to rapidly prototype mechanics like the MediaPipe Pose Landmarker through high-level...",
  },
];

const MOBILE_BLOGS = [
  {
    title: "Jump to play: Building with Gemini & MediaPipe",
    image: "https://lh3.googleusercontent.com/pw/AP1GczM_Xz_Z_j_Y_Z",
  },
  {
    title: "On-Device Function Calling in Google AI Edge Gallery",
    image: "https://lh3.googleusercontent.com/pw/AP1GczN_Xz_Z_j_Y_Z",
  },
  {
    title: "LiteRT: The Universal Framework for On-Device AI",
    image: "https://lh3.googleusercontent.com/pw/AP1GczO_Xz_Z_j_Y_Z",
  },
];

const WEB_BLOGS = [
  {
    title: "Jump to play: Building with Gemini & MediaPipe",
    color: "#f1f3f4",
    type: "dino",
  },
  {
    title: "Turn creative prompts into interactive XR experiences with Gemini",
    color: "#e8effc",
    type: "xr",
  },
  {
    title: "LiteRT: The Universal Framework for On-Device AI",
    color: "#e8f0fe",
    type: "litert",
  },
];

const CLOUD_BLOGS = [
  {
    title:
      "Announcing ADK for Java 1.0.0: Building the Future of AI Agents in Java",
    color: "#fef7e0",
    type: "robot",
  },
  {
    title: "Developer's Guide to AI Agent Protocols",
    color: "#ffffff",
    type: "protocols",
  },
  {
    title:
      "Announcing the Colab MCP Server: Connect Any AI Agent to Google Colab",
    color: "#000000",
    type: "colab",
  },
];

export default function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>(STATIC_BLOGS);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);
  const [followed, setFollowed] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleFollow = async () => {
    try {
      const { setDoc, deleteDoc, doc, getDoc } =
        await import("firebase/firestore");
      let user = auth.currentUser;

      // Optimistic UI update for speed
      if (followed) {
        setFollowed(false);
      } else if (user) {
        setFollowed(true);
      }

      if (followed && user) {
        // UNFOLLOW LOGIC
        await deleteDoc(doc(db, "subscribers", user.uid));
        setToastMessage("Successfully unfollowed!");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
        return;
      }

      // FOLLOW LOGIC
      // 1. Google Sign-In only if not already logged in
      if (!user) {
        const { signInWithPopup } = await import("firebase/auth");
        const result = await signInWithPopup(auth, googleProvider);
        user = result.user;
        setFollowed(true); // Update state now that we have a user
      }

      if (!user) {
        setFollowed(false); // Rollback if login failed
        return;
      }

      // 2. Request Notification Permission
      const permission = await Notification.requestPermission();

      let fcmToken = null;
      if (permission === "granted" && messaging) {
        try {
          const { getToken } = await import("firebase/messaging");
          fcmToken = await getToken(messaging, {
            vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY || "",
          });
        } catch (tokenErr) {
          console.error("Error getting FCM token:", tokenErr);
        }
      }

      // 3. Save to Firestore
      await setDoc(
        doc(db, "subscribers", user.uid),
        {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          fcmToken: fcmToken,
          followedAt: new Date(),
          status: "active",
        },
        { merge: true },
      );

      setToastMessage(
        "Successfully followed! Updates will now appear in your Google recommendations.",
      );
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    } catch (error) {
      console.error("Error during follow/unfollow:", error);
      setFollowed(!followed); // Robust rollback on error
    }
  };

  useEffect(() => {
    const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const blogsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs([...STATIC_BLOGS, ...blogsData]);
      } else {
        setBlogs(STATIC_BLOGS);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Check if current user is already a follower
  useEffect(() => {
    import("firebase/auth").then(({ onAuthStateChanged }) => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const { getDoc, doc } = await import("firebase/firestore");
          const subDoc = await getDoc(doc(db, "subscribers", user.uid));
          if (subDoc.exists()) {
            setFollowed(true);
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-blue-100 selection:text-blue-900 pb-20 cursor-pointer">
      <div className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#dadce0] shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-[14px] text-[#5f6368] font-medium hidden sm:block">
              Follow web development ai for updates on your Google Feed
            </p>
            <p className="text-[14px] text-[#5f6368] font-medium sm:hidden">
              Follow for Google Feed updates
            </p>
          </div>
          <button
            onClick={handleFollow}
            className={`flex items-center gap-3 px-6 h-10 rounded-full transition-all duration-300 cursor-pointer text-[14px] font-medium scale-100 hover:scale-105 active:scale-95 ${
              followed
                ? "bg-[#e8f0fe] text-[#1a73e8] border border-[#1a73e8] hover:bg-[#d2e3fc]"
                : "bg-[#1a73e8] text-white hover:bg-[#1b66c9] shadow-md hover:shadow-lg"
            }`}
          >
            {followed ? (
              <>
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                Following
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
                Follow
              </>
            )}
          </button>
        </div>
      </div>

      <main className="min-h-screen bg-[#4285F4] relative overflow-hidden font-sans pt-24 pb-20">
        {/* Geometric Pattern */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-64 h-64 border-2 border-white"></div>
          <div className="absolute top-[40%] right-[10%] w-48 h-96 border-2 border-white"></div>
          <div className="absolute bottom-[5%] left-[20%] w-96 h-32 border-2 border-white"></div>
          <div className="absolute top-[20%] left-[50%] w-px h-full bg-white"></div>
          <div className="absolute left-0 right-0 top-[30%] h-px bg-white"></div>
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10 px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Hero Section - Left */}
            <div className="lg:col-span-7 bg-white rounded-2xl shadow-2xl flex flex-col relative group">
              <div className="p-10 flex flex-col h-full">
                <h2 className="text-[28px] font-medium text-[#202124] mb-10 font-sans tracking-tight">
                  Featured articles
                </h2>

                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black flex flex-col items-center justify-center p-8 group/image">
                  <div className="flex items-center gap-6 mb-8 transform transition-transform duration-700 group-hover/image:scale-110">
                    <div className="w-16 h-16 text-[#00E676] flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-full h-full fill-current"
                      >
                        <path d="M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" />
                      </svg>
                    </div>
                    <div className="w-16 h-16 text-white border-2 border-white rounded-full flex items-center justify-center p-2">
                      <div className="w-full h-full border border-white rounded-full animate-pulse"></div>
                    </div>
                    <div className="w-16 h-16 bg-linear-to-r from-red-500 via-orange-500 to-yellow-500 rounded-lg"></div>
                  </div>
                  <div className="text-white text-3xl font-bold tracking-wider">
                    MAY 19 – 20
                  </div>
                </div>

                <div className="mt-10">
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-medium text-[#1a73e8] tracking-widest uppercase mb-6">
                    {FEATURED_ARTICLES[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="hover:underline cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-[36px] font-normal text-[#202124] mb-4 leading-tight">
                    {FEATURED_ARTICLES[0].title}
                  </h3>
                  <p className="text-[#3c4043] text-[18px] leading-relaxed max-w-2xl">
                    {FEATURED_ARTICLES[0].description}
                  </p>
                </div>

                <div className="flex justify-center gap-3 mt-auto pt-10">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeSlide ? "bg-black w-6" : "bg-gray-300 hover:bg-gray-400 cursor-pointer"}`}
                      onClick={() => setActiveSlide(i)}
                    />
                  ))}
                </div>
              </div>

              <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center border border-[#dadce0] hover:bg-gray-50 transition-all z-20 cursor-pointer">
                <ChevronRight className="w-8 h-8 text-[#202124]" />
              </button>
            </div>

            {/* Hero Section - Right (Latest) */}
            <div className="lg:col-span-5 bg-white rounded-2xl shadow-xl flex flex-col h-full border border-white/20 overflow-hidden">
              <div className="p-10 flex-1 overflow-y-auto max-h-[700px] custom-scrollbar">
                <h2 className="text-[28px] font-medium text-[#202124] mb-10 tracking-tight">
                  Latest blogs
                </h2>
                <div className="space-y-10">
                  {blogs.map((blog, idx) => (
                    <div key={blog.id || idx} className="group cursor-pointer">
                      <div className="text-[12px] font-medium text-[#70757a] tracking-wider mb-2 uppercase">
                        {blog.date || "MARCH 30, 2026"}
                      </div>
                      <h4 className="text-[20px] font-medium text-[#202124] group-hover:text-[#1a73e8] transition-colors mb-3 leading-snug">
                        {blog.title}
                      </h4>
                      <p className="text-[15px] text-[#3c4043] leading-relaxed line-clamp-2">
                        {blog.snippet || blog.description}
                      </p>
                      <div className="h-px bg-[#dadce0] mt-10 group-last:hidden"></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-[#f8f9fa] border-t border-[#dadce0]">
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#70757a]" />
                    <input
                      type="text"
                      placeholder="Search blog"
                      className="w-full bg-white border border-[#dadce0] rounded-lg py-3 pl-11 pr-4 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#1a73e8]"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <button className="bg-white text-[#1a73e8] font-medium px-8 py-3 rounded-lg border border-[#dadce0] text-[14px] cursor-pointer">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* OVERLAPPING WHITE BACKGROUND SHEET */}
      <div className="w-full bg-white mt-[-160px] pt-48 pb-24 shadow-[0_-1px_0_rgba(0,0,0,0.05)] text-[#202124] relative z-0">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          {[
            { title: "AI", blogs: STATIC_BLOGS },
            { title: "Mobile", blogs: MOBILE_BLOGS },
            { title: "Web", blogs: WEB_BLOGS },
            { title: "Cloud", blogs: CLOUD_BLOGS },
          ].map((section, sIdx) => (
            <div key={section.title}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-3">
                  <h2 className="text-[34px] font-bold text-[#1a1c1e] mb-6 tracking-tight">
                    {section.title}
                  </h2>
                  <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-[#dadce0] text-[#1a73e8] font-semibold hover:bg-[#1a73e8]/5 transition-all text-[15px] cursor-pointer">
                    See posts <ArrowRight size={16} />
                  </button>
                </div>

                <div className="lg:col-span-9 relative">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {section.blogs.map((blog, bIdx) => (
                      <div
                        key={bIdx}
                        className="flex flex-col group cursor-pointer"
                      >
                        <h4 className="text-[18px] font-medium text-[#202124] mb-14 leading-tight h-[80px] line-clamp-3 group-hover:text-[#1a73e8] transition-colors">
                          {blog.title}
                        </h4>
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg shadow-gray-200 bg-gray-100 flex items-center justify-center">
                          <div
                            className="w-full h-full flex items-center justify-center"
                            style={{
                              backgroundColor:
                                (blog as any).color ||
                                (sIdx === 0 && bIdx === 1
                                  ? "#042e27"
                                  : sIdx === 0 && bIdx === 0
                                    ? "#f8e9d9"
                                    : "#f1f3f4"),
                            }}
                          >
                            {(blog as any).type === "robot" && (
                              <div className="relative w-full h-full flex items-center justify-center font-bold text-[#805a3b] text-xl">
                                🤖 ADK Java
                              </div>
                            )}
                            {(blog as any).type === "colab" && (
                              <div className="text-white font-bold text-2xl flex items-center gap-2">
                                colab{" "}
                                <span className="text-orange-500">🧡</span>
                              </div>
                            )}
                            {(blog as any).type === "litert" && (
                              <div className="text-[#1a73e8] font-bold text-xl">
                                LiteRT
                              </div>
                            )}
                            {(blog as any).type === "protocols" && (
                              <div className="w-full h-full bg-linear-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center p-4">
                                <div className="border border-gray-100 rounded-lg p-2 bg-white shadow-sm text-[10px] text-gray-400">
                                  Agent Protocols
                                </div>
                              </div>
                            )}
                            {(blog as any).type === "xr" && (
                              <div className="w-full h-full flex items-center justify-center bg-blue-50">
                                <div className="w-12 h-12 border-2 border-blue-200 rounded-full flex items-center justify-center text-blue-400">
                                  XR
                                </div>
                              </div>
                            )}
                            {(blog as any).type === "dino" && (
                              <div className="text-gray-400 text-3xl">🌵</div>
                            )}
                            {!(blog as any).type && (
                              <>
                                {sIdx === 0 && bIdx === 0 && (
                                  <span className="text-[11px] text-[#202124]/40 font-bold uppercase tracking-widest">
                                    ADK Java 1.0
                                  </span>
                                )}
                                {sIdx === 0 && bIdx === 1 && (
                                  <div className="text-white text-center">
                                    <div className="text-[10px] opacity-70 mb-1 tracking-wider uppercase">
                                      ✦ Gemini API
                                    </div>
                                    <div className="text-[18px] font-medium">
                                      Agent skills
                                    </div>
                                  </div>
                                )}
                                {(sIdx === 1 || (sIdx === 0 && bIdx === 2)) &&
                                  !(blog as any).type && (
                                    <div className="w-16 h-16 bg-white/40 rounded-lg animate-pulse"></div>
                                  )}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="absolute right-[-24px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-800 hover:bg-gray-50 transition-all invisible lg:visible lg:flex z-10">
                    <ChevronRight size={24} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
              {sIdx < 3 && (
                <div className="h-px bg-gray-100 my-16 w-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="w-screen bg-[#cce5ff] py-24 relative left-1/2 -translate-x-1/2">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex flex-col items-center">
          <h2 className="text-[44px] font-normal text-[#202124] mb-16 font-sans text-center">
            Follow web development ai for Developers
          </h2>

          <div className="max-w-6xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              <div className="bg-white rounded-xl p-8 shadow-sm flex flex-col items-start h-full">
                <div className="w-10 h-10 mb-6">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-full h-full fill-[#FF0000]"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <p className="text-[16px] text-[#202124] mb-8 leading-relaxed grow">
                  Subscribe to join a community of creative developers and learn
                  the latest in Web Development Ai technology.
                </p>
                <button className="px-5 py-2 border border-[#dadce0] rounded-lg text-[#1a73e8] font-medium text-[14px] hover:bg-[#1a73e8]/5 transition-all cursor-pointer">
                  Learn more
                </button>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm flex flex-col items-start h-full text-left">
                <div className="w-10 h-10 mb-6">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <defs>
                      <radialGradient
                        id="instaGradient"
                        cx="30%"
                        cy="150%"
                        r="150%"
                      >
                        <stop offset="0%" stopColor="#fed373" />
                        <stop offset="4%" stopColor="#fec053" />
                        <stop offset="10%" stopColor="#fb5f1b" />
                        <stop offset="30%" stopColor="#d23187" />
                        <stop offset="50%" stopColor="#a211a7" />
                        <stop offset="70%" stopColor="#515ecf" />
                      </radialGradient>
                    </defs>
                    <path
                      fill="url(#instaGradient)"
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.981-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
                    />
                  </svg>
                </div>
                <p className="text-[16px] text-[#202124] mb-8 leading-relaxed grow">
                  Follow and discover developer resources, community events, and
                  inspirational stories.
                </p>
                <button className="px-5 py-2 border border-[#dadce0] rounded-lg text-[#1a73e8] font-medium text-[14px] hover:bg-[#1a73e8]/5 transition-all cursor-pointer">
                  Learn more
                </button>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm flex flex-col items-start h-full">
                <div className="w-10 h-10 mb-6">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-full h-full fill-[#0077B5]"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <p className="text-[16px] text-[#202124] mb-8 leading-relaxed grow">
                  Join a community of creative developers and learn how to use
                  the latest in technology.
                </p>
                <button className="px-5 py-2 border border-[#dadce0] rounded-lg text-[#1a73e8] font-medium text-[14px] hover:bg-[#1a73e8]/5 transition-all cursor-pointer">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TOAST NOTIFICATION */}
      {showToast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-100 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="bg-[#202124] text-white px-6 py-3 rounded-lg shadow-2xl flex items-center gap-3 border border-white/10">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#00E676]">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
            <span className="text-sm font-medium">{toastMessage}</span>
          </div>
        </div>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d1d5db;
        }
      `}</style>
    </div>
  );
}
