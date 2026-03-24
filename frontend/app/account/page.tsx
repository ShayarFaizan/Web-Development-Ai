"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Package,
  Heart,
  Gift,
  Headphones,
  Sparkles,
  Smartphone,
  User,
  CreditCard,
  MapPin,
  Languages,
  Bell,
  Lock,
  FileText,
  HelpCircle,
  LayoutGrid,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { auth, googleProvider } from "@/lib/firebase";
import {
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  User as FirebaseUser,
} from "firebase/auth";

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

export default function AccountPage() {
  const router = useRouter();
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to log out?")) {
      await signOut(auth);
      router.push("/");
    }
  };

  return (
    <div
      className="min-h-screen md:hidden flex flex-col pb-20"
      style={{ background: "#f1f3f6" }}
    >
      {/* ── HEADER ── */}
      <div className="bg-white px-4 py-3 shrink-0 shadow-sm sticky top-0 z-10 border-b border-gray-100">
        <div className="flex items-center gap-4 mb-4 mt-1">
          <button
            onClick={() => router.back()}
            className="text-gray-800"
            aria-label="Go back"
          >
            <ArrowLeft size={22} strokeWidth={1.5} />
          </button>
          <span className="text-[18px] font-semibold text-gray-900 tracking-wide">
            Account
          </span>
        </div>

        {/* Header Action Row (Login/Logout) */}
        {!user && (
          <div className="flex items-center justify-between mb-2">
            <p className="text-[13px] text-gray-700">
              Log in to get exclusive offers
            </p>
            <button
              onClick={() => setShowLoginModal(true)}
              className="bg-[#d4a351] hover:bg-[#c39240] text-white text-[13px] font-bold px-[18px] py-[6px] rounded-[3px] shadow-sm active:scale-95 transition-all outline-none"
            >
              Log In
            </button>
          </div>
        )}
      </div>

      {/* ── 2x2 GRID (Orders, Wishlist, Coupons, Help) ── */}
      <div className="bg-white p-3.5 mt-2">
        <div className="grid grid-cols-2 gap-3">
          <Link
            href="/orders"
            className="flex items-center gap-3 p-3 rounded-md border"
            style={{ borderColor: "#e5e7eb" }}
          >
            <Package size={20} className="text-[#d4a351]" strokeWidth={1.8} />
            <span className="text-[13px] font-semibold text-gray-800">
              Orders
            </span>
          </Link>
          <Link
            href="/wishlist"
            className="flex items-center gap-3 p-3 rounded-md border"
            style={{ borderColor: "#e5e7eb" }}
          >
            <Heart size={20} className="text-[#d4a351]" strokeWidth={1.8} />
            <span className="text-[13px] font-semibold text-gray-800">
              Wishlist
            </span>
          </Link>
          <Link
            href="/portfolio"
            className="flex items-center gap-3 p-3 rounded-md border"
            style={{ borderColor: "#e5e7eb" }}
          >
            <LayoutGrid size={20} className="text-[#d4a351]" strokeWidth={1.8} />
            <span className="text-[13px] font-semibold text-gray-800">
              Portfolio
            </span>
          </Link>
          <a
            href="https://wa.me/916264906078"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-md border"
            style={{ borderColor: "#e5e7eb" }}
          >
            <Headphones
              size={20}
              className="text-[#d4a351]"
              strokeWidth={1.8}
            />
            <span className="text-[13px] font-semibold text-gray-800">
              Help Center
            </span>
          </a>
        </div>
      </div>

      {/* ── ACCOUNT SETTINGS ── */}
      <div className="mt-2.5 bg-white pt-4 pb-1">
        <h3 className="px-4 text-[14px] font-bold text-gray-900 mb-2">
          Account Settings
        </h3>
        <div className="flex flex-col">
          {[
            {
              icon: <Sparkles size={18} className="text-[#d4a351]" />,
              label: "WebDev Plus",
            },
            {
              icon: <Smartphone size={18} className="text-[#d4a351]" />,
              label: "Manage Devices",
            },
            {
              icon: <User size={18} className="text-[#d4a351]" />,
              label: "Edit Profile",
            },
            {
              icon: <CreditCard size={18} className="text-[#d4a351]" />,
              label: "Saved Credit / Debit & Gift Cards",
            },
            {
              icon: <MapPin size={18} className="text-[#d4a351]" />,
              label: "Saved Addresses",
            },
            {
              icon: <Languages size={18} className="text-[#d4a351]" />,
              label: "Select Language",
            },
            {
              icon: <Bell size={18} className="text-[#d4a351]" />,
              label: "Notification Settings",
            },
            {
              icon: <Lock size={18} className="text-[#d4a351]" />,
              label: "Privacy Center",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between px-4 py-[14px] border-b border-gray-100 last:border-0 cursor-pointer active:bg-gray-50"
            >
              <div className="flex items-center gap-4">
                {item.icon}
                <span className="text-[13px] text-gray-800">{item.label}</span>
              </div>
              <ChevronRight size={16} className="text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      {/* ── FEEDBACK & INFORMATION ── */}
      <div className="mt-2.5 bg-white pt-4 pb-1">
        <h3 className="px-4 text-[14px] font-bold text-gray-900 mb-2">
          Feedback & Information
        </h3>
        <div className="flex flex-col">
          {[
            {
              icon: <FileText size={18} className="text-[#d4a351]" />,
              label: "Terms, Policies and Licenses",
            },
            {
              icon: <HelpCircle size={18} className="text-[#d4a351]" />,
              label: "Browse FAQs",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between px-4 py-[14px] border-b border-gray-100 last:border-0 cursor-pointer active:bg-gray-50"
            >
              <div className="flex items-center gap-4">
                {item.icon}
                <span className="text-[13px] text-gray-800">{item.label}</span>
              </div>
              <ChevronRight size={16} className="text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      {/* ── LOGOUT BUTTON (Only if user is logged in) ── */}
      {user && (
        <div className="px-4 mt-6">
          <button
            onClick={handleLogout}
            className="w-full bg-white border border-[#d4a351] text-[#d4a351] text-[14px] font-semibold py-[10px] rounded-sm shadow-sm active:scale-95 transition-all outline-none text-center"
          >
            Log Out
          </button>
        </div>
      )}

      {/* ── LOGIN MODAL ── */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </div>
  );
}
