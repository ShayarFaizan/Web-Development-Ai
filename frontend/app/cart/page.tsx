"use client";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/app/context/AppContext";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ShieldCheck,
  Tag,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";
import { auth, googleProvider } from "@/lib/firebase";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User as FirebaseUser,
} from "firebase/auth";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  setDoc,
} from "firebase/firestore";

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
    <div className="fixed inset-0 z-1000 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
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

const UserDetailsModal = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  initialData: any;
}) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    email: initialData?.email || "",
    phone: initialData?.phone || "",
    address: initialData?.address || "",
    projectDetails: initialData?.projectDetails || "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 z-1000 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div
        className="relative w-full max-w-md rounded-[10px] overflow-hidden p-6 shadow-2xl animate-in fade-in zoom-in duration-300"
        style={{ background: "#111", border: "1px solid #333" }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          ✕
        </button>
        <div className="text-center mb-6">
          <h2 className="text-[18px] font-bold text-white mb-1 tracking-wide">
            Enter Details
          </h2>
          <p className="text-xs text-gray-400">
            Please provide your details to proceed
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="text-left">
            <label className="block text-[11px] text-gray-400 mb-1.5 tracking-wide font-medium">
              Full Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-md px-3 py-2 text-xs text-white uppercase placeholder-gray-600 focus:outline-none focus:border-[#d4a75c] transition-colors"
            />
          </div>
          <div className="text-left">
            <label className="block text-[11px] text-gray-400 mb-1.5 tracking-wide font-medium">
              Email Address
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-md px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#d4a75c] transition-colors"
            />
          </div>
          <div className="text-left">
            <label className="block text-[11px] text-gray-400 mb-1.5 tracking-wide font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-md px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#d4a75c] transition-colors"
            />
          </div>
          <div className="text-left">
            <label className="block text-[11px] text-gray-400 mb-1.5 tracking-wide font-medium">
              Address (Optional)
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-md px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#d4a75c] transition-colors"
            />
          </div>
          <div className="text-left">
            <label className="block text-[11px] text-gray-400 mb-1.5 tracking-wide font-medium">
              Project Notes (Optional)
            </label>
            <textarea
              value={formData.projectDetails}
              onChange={(e) =>
                setFormData({ ...formData, projectDetails: e.target.value })
              }
              rows={2}
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-md px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#d4a75c] transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2.5 text-[12px] font-bold tracking-[0.05em] uppercase rounded-md text-black transition-opacity duration-300 hover:opacity-90 outline-none mt-4 cursor-pointer"
            style={{
              background: "linear-gradient(90deg, #e3bc7c, #fef1cd, #d4a75c)",
            }}
          >
            PROCEED TO PAYMENT
          </button>
        </form>
      </div>
    </div>
  );
};

export default function CartPage() {
  const {
    cartItems,
    cartCount,
    removeFromCart,
    updateCartQuantity,
    clearCart,
  } = useAppContext();

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [savedData, setSavedData] = useState<any>(null);
  const [user, setUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      setSavedData(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const [logoBase64, setLogoBase64] = useState<string>("");
  useEffect(() => {
    fetch("/assets/logo.png")
      .then((res) => res.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => setLogoBase64(reader.result as string);
        reader.readAsDataURL(blob);
      })
      .catch((err) => console.log("Failed to encode logo:", err));
  }, []);

  /* ── Price calculations ── */
  const totalMRP = cartItems.reduce((sum, item) => {
    const val = parseInt(item.originalPrice.replace(/[₹,]/g, ""), 10) || 0;
    return sum + val * item.quantity;
  }, 0);

  const totalPrice = cartItems.reduce((sum, item) => {
    const val = parseInt(item.price.replace(/[₹,]/g, ""), 10) || 0;
    return sum + val * item.quantity;
  }, 0);

  const totalDiscount = totalMRP - totalPrice;

  const formatPrice = (n: number) => "₹" + n.toLocaleString("en-IN");

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePlaceOrderClick = () => {
    if (!user) {
      setShowLoginModal(true);
      return;
    }
    setShowOrderForm(true);
  };

  const handleOrderDetailsSubmit = async (data: any) => {
    if (!user) return;
    localStorage.setItem("userData", JSON.stringify(data));
    setSavedData(data);
    setShowOrderForm(false);

    // Save/Update in Firebase users collection
    try {
      await setDoc(
        doc(db, "users", user.uid),
        {
          ...data,
          createdAt: serverTimestamp(),
        },
        { merge: true },
      );
    } catch (error) {
      console.error("Error saving user details:", error);
    }

    initiatePayment(data);
  };

  const initiatePayment = async (data: any) => {
    setPaymentLoading(true);
    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      setPaymentLoading(false);
      return;
    }

    try {
      const result = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalPrice }),
      });

      if (!result.ok) throw new Error("Network response was not ok");
      const order = await result.json();

      const serviceNames = cartItems.map((i) => i.title).join(", ");
      const deliveryTimes = cartItems.map((i) => i.delivery).join(", ");

      // Save order to Firebase as pending BEFORE opening payment
      const orderRef = await addDoc(collection(db, "orders"), {
        userId: user?.uid || "guest",
        name: data.name,
        email: data.email || user?.email,
        phone: data.phone,
        address: data.address || "",
        projectDetails: data.projectDetails || "", // Added this line
        amount: totalPrice,
        totalMRP: totalMRP,
        deliveryTime: deliveryTimes,
        paymentStatus: "pending",
        serviceName: serviceNames,
        orderDate: serverTimestamp(),
      });

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: order.amount,
        currency: order.currency,
        name: "Web Development AI",
        description: "Payment for selected services",
        image: "https://iili.io/qkFrCGt.jpg",
        order_id: order.id,
        method: {
          card: true,
          netbanking: true,
          wallet: true,
          upi: true,
        },
        config: {
          display: {
            blocks: {
              banks: {
                name: "Pay using Cards",
                instruments: [
                  {
                    method: "card",
                  },
                ],
              },
            },
            sequence: ["block.banks"],
            preferences: {
              show_default_blocks: true,
            },
          },
        },
        handler: async function (response: any) {
          try {
            // Update Order to Paid
            await setDoc(
              doc(db, "orders", orderRef.id),
              {
                paymentStatus: "paid",
                paymentId: response.razorpay_payment_id,
                paymentDate: serverTimestamp(),
              },
              { merge: true },
            );

            // Save to Payments Collection
            await addDoc(collection(db, "payments"), {
              orderId: orderRef.id,
              razorpayPaymentId: response.razorpay_payment_id,
              amount: totalPrice,
              paymentStatus: "success",
              paymentDate: serverTimestamp(),
            });

            // Fire and forget email notification
            fetch("/api/send-email", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                orderId: orderRef.id,
                name: data.name,
                email: data.email || user?.email,
                phone: data.phone,
                serviceName: serviceNames,
                amount: totalPrice,
              }),
            });

            clearCart();
            window.location.href = `/order-success?orderId=${orderRef.id}&amount=${totalPrice}&mrp=${totalMRP}&service=${encodeURIComponent(serviceNames)}&delivery=${encodeURIComponent(deliveryTimes)}&notes=${encodeURIComponent(data.projectDetails || "")}`;
          } catch (error) {
            console.error("Error saving payment to Firebase:", error);
            alert(
              "Payment successful, but database update failed. Please contact support.",
            );
          }
        },
        prefill: {
          name: data.name,
          email: data.email || user?.email,
          contact: data.phone,
        },
        theme: {
          color: "#d4a75c",
        },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.on("payment.failed", async function (response: any) {
        await setDoc(
          doc(db, "orders", orderRef.id),
          {
            paymentStatus: "failed",
          },
          { merge: true },
        );
        alert(
          "Payment Failed: " +
            response.error.description +
            ". Please try again.",
        );
      });
      paymentObject.open();
    } catch (error) {
      console.error("Error initiating payment:", error);
      alert("Error initiating payment.");
    } finally {
      setPaymentLoading(false);
    }
  };

  /* ── Empty Cart ── */
  if (cartItems.length === 0) {
    return (
      <>
        {/* DESKTOP EMPTY CART (Existing) */}
        <div
          className="hidden md:flex min-h-screen flex-col items-center justify-center px-6 py-20"
          style={{ background: "#ffffff" }}
        >
          <div
            className="w-28 h-28 rounded-full flex items-center justify-center mb-6"
            style={{
              background: "#fff",
              border: "1px solid #e0e0e0",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <ShoppingBag size={48} className="text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Your cart is empty
          </h1>
          <p className="text-gray-500 text-sm mb-6 text-center max-w-sm">
            Looks like you haven&apos;t added anything to your cart yet. Check
            out our services and find something you love!
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 text-[13px] font-bold uppercase tracking-wide rounded-md text-black transition-all hover:opacity-90 hover:shadow-lg"
            style={{
              background: "linear-gradient(90deg, #e3bc7c, #fef1cd, #d4a75c)",
            }}
          >
            <ArrowLeft size={16} />
            Continue Shopping
          </Link>
        </div>

        {/* MOBILE EMPTY CART (Flipkart Style) */}
        <div
          className={`md:hidden min-h-screen bg-[#ffffff] flex flex-col ${roboto.className}`}
        >
          {/* Header */}
          <div className="bg-white px-4 py-[14px] flex items-center gap-4">
            <button onClick={() => window.history.back()}>
              <ArrowLeft size={24} className="text-[#111]" strokeWidth={1.5} />
            </button>
            <h1 className="text-[17px] text-[#212121] font-normal tracking-wide">
              My Cart
            </h1>
          </div>

          {/* Tabs */}
          <div className="bg-white flex shadow-sm relative z-10 w-full">
            <div className="w-[50%] py-3 text-center border-b-[3px] border-[#d4a351] text-[#d4a351] text-[15px] font-medium tracking-wide">
              Web Development Ai
            </div>
          </div>

          {/* Empty State Body */}
          <div className="flex-1 flex flex-col items-center justify-start pt-16">
            <div className="relative w-[180px] h-[150px] mb-8 flex items-center justify-center -ml-6">
              {/* Faded Cart SVG with 5 Drop Animations */}
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                @keyframes drop1 {
                  0% { transform: translate(95px, -30px); opacity: 0; }
                  2% { opacity: 1; transform: translate(95px, -30px); }
                  10%, 95% { transform: translate(95px, 85px); opacity: 1; }
                  100% { transform: translate(95px, 85px); opacity: 0; }
                }
                @keyframes drop2 {
                  0%, 15% { transform: translate(128px, -30px); opacity: 0; }
                  17% { opacity: 1; transform: translate(128px, -30px); }
                  25%, 95% { transform: translate(128px, 85px); opacity: 1; }
                  100% { transform: translate(128px, 85px); opacity: 0; }
                }
                @keyframes drop3 {
                  0%, 35% { transform: translate(110px, -30px); opacity: 0; }
                  37% { opacity: 1; transform: translate(110px, -30px); }
                  45%, 95% { transform: translate(110px, 73px); opacity: 1; }
                  100% { transform: translate(110px, 73px); opacity: 0; }
                }
                @keyframes drop4 {
                  0%, 55% { transform: translate(138px, -30px); opacity: 0; }
                  57% { opacity: 1; transform: translate(138px, -30px); }
                  65%, 95% { transform: translate(138px, 65px); opacity: 1; }
                  100% { transform: translate(138px, 65px); opacity: 0; }
                }
                @keyframes drop5 {
                  0%, 75% { transform: translate(88px, -30px); opacity: 0; }
                  77% { opacity: 1; transform: translate(88px, -30px); }
                  85%, 95% { transform: translate(88px, 65px); opacity: 1; }
                  100% { transform: translate(88px, 65px); opacity: 0; }
                }
                @keyframes cartSmileMorph {
                  0%, 85% { d: path('M120 92 Q127 92 135 92'); stroke: #e0e0e0; }
                  90%, 95% { d: path('M118 86 Q127 102 137 86'); stroke: #222; }
                  100% { d: path('M120 92 Q127 92 135 92'); stroke: #e0e0e0; }
                }
                @keyframes cartEyeMorph {
                  0%, 85% { fill: #e0e0e0; }
                  90%, 95% { fill: #222; }
                  100% { fill: #e0e0e0; }
                }
                .web-1 { animation: drop1 10s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
                .web-2 { animation: drop2 10s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
                .web-3 { animation: drop3 10s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
                .web-4 { animation: drop4 10s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
                .web-5 { animation: drop5 10s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
                .cart-smile-icon { animation: cartSmileMorph 10s ease-in-out infinite; }
                .cart-eye-icon { animation: cartEyeMorph 10s ease-in-out infinite; }
              `,
                }}
              />
              <svg
                width="220"
                height="180"
                viewBox="0 0 200 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Faded background lines */}
                <path
                  d="M25 80 L65 80"
                  stroke="#e0e0e0"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M25 94 L75 94"
                  stroke="#e0e0e0"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* ── 5 Animated Falling Websites (Rendered before cart body to stay "inside") ── */}
                <g className="web-1">
                  <rect
                    x="0"
                    y="0"
                    width="26"
                    height="20"
                    rx="3"
                    fill="#d4a351"
                  />
                  <rect
                    x="3"
                    y="3"
                    width="20"
                    height="6"
                    rx="1"
                    fill="#fff"
                    opacity="0.9"
                  />
                  <rect
                    x="3"
                    y="11"
                    width="9"
                    height="6"
                    rx="1"
                    fill="#fff"
                    opacity="0.6"
                  />
                  <rect
                    x="14"
                    y="11"
                    width="9"
                    height="6"
                    rx="1"
                    fill="#fff"
                    opacity="0.6"
                  />
                </g>
                <g className="web-2">
                  <rect
                    x="0"
                    y="0"
                    width="26"
                    height="20"
                    rx="3"
                    fill="#d4a351"
                  />
                  <rect
                    x="3"
                    y="3"
                    width="20"
                    height="6"
                    rx="1"
                    fill="#fff"
                    opacity="0.9"
                  />
                  <rect
                    x="3"
                    y="11"
                    width="9"
                    height="6"
                    rx="1"
                    fill="#fff"
                    opacity="0.6"
                  />
                  <rect
                    x="14"
                    y="11"
                    width="9"
                    height="6"
                    rx="1"
                    fill="#fff"
                    opacity="0.6"
                  />
                </g>
                <g className="web-3">
                  <rect
                    x="0"
                    y="0"
                    width="26"
                    height="20"
                    rx="3"
                    fill="#d4a351"
                  />
                  <rect
                    x="3"
                    y="3"
                    width="20"
                    height="6"
                    rx="1"
                    fill="#fff"
                    opacity="0.9"
                  />
                  <rect
                    x="3"
                    y="11"
                    width="9"
                    height="6"
                    rx="1"
                    fill="#fff"
                    opacity="0.6"
                  />
                  <rect
                    x="14"
                    y="11"
                    width="9"
                    height="6"
                    rx="1"
                    fill="#fff"
                    opacity="0.6"
                  />
                </g>
                <g className="web-4">
                  <rect
                    x="0"
                    y="0"
                    width="26"
                    height="20"
                    rx="3"
                    fill="#d4a351"
                  />
                  <rect
                    x="3"
                    y="3"
                    width="20"
                    height="6"
                    rx="1"
                    fill="#fff"
                    opacity="0.9"
                  />
                  <rect
                    x="3"
                    y="11"
                    width="9"
                    height="6"
                    rx="1"
                    fill="#fff"
                    opacity="0.6"
                  />
                  <rect
                    x="14"
                    y="11"
                    width="9"
                    height="6"
                    rx="1"
                    fill="#fff"
                    opacity="0.6"
                  />
                </g>
                <g className="web-5">
                  <rect
                    x="0"
                    y="0"
                    width="26"
                    height="20"
                    rx="3"
                    fill="#d4a351"
                  />
                  <rect
                    x="3"
                    y="3"
                    width="20"
                    height="6"
                    rx="1"
                    fill="#fff"
                    opacity="0.9"
                  />
                  <rect
                    x="3"
                    y="11"
                    width="9"
                    height="6"
                    rx="1"
                    fill="#fff"
                    opacity="0.6"
                  />
                  <rect
                    x="14"
                    y="11"
                    width="9"
                    height="6"
                    rx="1"
                    fill="#fff"
                    opacity="0.6"
                  />
                </g>

                {/* ── Cart Body (Drawn on top to appear as boundaries) ── */}
                <path
                  d="M45 45 L70 45 L85 110 L165 110 L180 55 L75 55"
                  stroke="#e0e0e0"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Cart Wheels */}
                <circle cx="95" cy="130" r="9" fill="#e0e0e0" />
                <circle cx="150" cy="130" r="9" fill="#e0e0e0" />

                {/* Face inside Cart - Eyes */}
                <rect
                  className="cart-eye-icon"
                  x="115"
                  y="70"
                  width="5"
                  height="10"
                  rx="2.5"
                  fill="#e0e0e0"
                />
                <rect
                  className="cart-eye-icon"
                  x="135"
                  y="70"
                  width="5"
                  height="10"
                  rx="2.5"
                  fill="#e0e0e0"
                />

                {/* Face inside Cart - Animating Mouth */}
                <path
                  className="cart-smile-icon"
                  stroke="#e0e0e0"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>

            {!user && (
              <>
                <h2 className="text-[17px] font-medium text-black mb-6 tracking-wide">
                  Missing Cart items?
                </h2>
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="bg-[#d4a351] focus:outline-none active:scale-95 transition-transform text-white w-[200px] py-[10px] rounded-[3px] text-center font-bold text-[14px] shadow-sm mb-5"
                >
                  Login
                </button>
              </>
            )}

            <Link
              href="/"
              className="text-[#d4a351] text-[15px] font-medium mb-10"
            >
              Continue Shopping
            </Link>
          </div>
        </div>

        {/* ── LOGIN MODAL ── */}
        <LoginModal
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "#f1f3f6" }}>
      {/* ── Breadcrumb ── */}
      <div
        className="w-full px-4 md:px-8 lg:px-16 py-3"
        style={{ background: "#fff", borderBottom: "1px solid #e8e8e8" }}
      >
        <div className="max-w-[1200px] mx-auto flex items-center gap-2 text-[12px] text-gray-500">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <ChevronRight size={12} />
          <span className="text-gray-900 font-semibold">Shopping Cart</span>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-0 py-5 md:py-6">
        <div className="flex flex-col lg:flex-row gap-5">
          {/* ═══════════════════════════════════
                LEFT: Cart Items
             ═══════════════════════════════════ */}
          <div className="flex-1 space-y-0">
            {/* Cart Header */}
            <div
              className="flex items-center justify-between px-5 py-4 rounded-t-lg"
              style={{
                background: "#fff",
                borderBottom: "1px solid #f0f0f0",
              }}
            >
              <div>
                <h1 className="text-[18px] font-bold text-gray-900">
                  Shopping Cart
                </h1>
                <p className="text-[12px] text-gray-500 mt-0.5">
                  {cartCount} {cartCount === 1 ? "item" : "items"} in your cart
                </p>
              </div>
              {cartItems.length > 1 && (
                <button
                  onClick={clearCart}
                  className="text-[11px] font-semibold text-red-500 hover:text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-md transition-all uppercase tracking-wide"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Cart Items List */}
            <div
              className="rounded-b-lg overflow-hidden"
              style={{ background: "#fff" }}
            >
              {cartItems.map((item, idx) => {
                const itemPrice =
                  parseInt(item.price.replace(/[₹,]/g, ""), 10) || 0;
                const itemOriginal =
                  parseInt(item.originalPrice.replace(/[₹,]/g, ""), 10) || 0;
                const itemDiscount = itemOriginal - itemPrice;
                const discountPercent =
                  itemOriginal > 0
                    ? Math.round((itemDiscount / itemOriginal) * 100)
                    : 0;

                return (
                  <div
                    key={item.id}
                    style={{
                      borderBottom:
                        idx < cartItems.length - 1
                          ? "1px solid #f0f0f0"
                          : "none",
                    }}
                  >
                    <div className="flex gap-4 p-5">
                      {/* Product Image */}
                      <div className="shrink-0">
                        <div
                          className="relative w-[110px] h-[110px] md:w-[130px] md:h-[130px] rounded-lg overflow-hidden"
                          style={{
                            background: "#f5f5f5",
                            border: "1px solid #eee",
                          }}
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        {/* Title */}
                        <h3 className="text-[15px] font-semibold text-gray-900 leading-snug mb-1 line-clamp-2">
                          {item.title}
                        </h3>

                        {/* Category & Delivery */}
                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                          <span
                            className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                            style={{
                              background: "#f0f0f0",
                              color: "#666",
                            }}
                          >
                            {item.category}
                          </span>
                          <span className="text-[11px] text-gray-500">
                            📦 Delivery: {item.delivery}
                          </span>
                        </div>

                        {/* Price Row */}
                        <div className="flex items-baseline gap-2 mt-3">
                          <span className="text-[18px] font-bold text-gray-900">
                            {item.price}
                          </span>
                          <span className="text-[13px] text-gray-400 line-through">
                            {item.originalPrice}
                          </span>
                          {discountPercent > 0 && (
                            <span className="text-[12px] font-bold text-green-600">
                              {discountPercent}% off
                            </span>
                          )}
                        </div>

                        {/* Quantity + Actions Row */}
                        <div className="flex items-center gap-4 mt-4 flex-wrap">
                          {/* Quantity Controls */}
                          <div
                            className="inline-flex items-center rounded-full overflow-hidden"
                            style={{
                              border: "1px solid #e0e0e0",
                              background: "#fff",
                            }}
                          >
                            <button
                              onClick={() => updateCartQuantity(item.id, -1)}
                              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-100 transition-all"
                              aria-label="Decrease quantity"
                            >
                              {item.quantity === 1 ? (
                                <Trash2 size={13} className="text-red-500" />
                              ) : (
                                <Minus size={14} />
                              )}
                            </button>
                            <span
                              className="w-10 text-center text-[14px] font-bold text-gray-900"
                              style={{
                                borderLeft: "1px solid #e0e0e0",
                                borderRight: "1px solid #e0e0e0",
                              }}
                            >
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateCartQuantity(item.id, 1)}
                              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-100 transition-all"
                              aria-label="Increase quantity"
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          {/* Divider */}
                          <div className="w-px h-5 bg-gray-200 hidden sm:block" />

                          {/* Remove Button */}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-[12px] font-semibold text-gray-500 hover:text-red-600 transition-colors uppercase tracking-wide cursor-pointer"
                          >
                            Remove
                          </button>

                          {/* Divider */}
                          <div className="w-px h-5 bg-gray-200 hidden sm:block" />

                          {/* Save for later */}
                          <button className="text-[12px] font-semibold text-gray-500 hover:text-blue-600 transition-colors uppercase tracking-wide cursor-pointer">
                            Save for later
                          </button>
                        </div>
                      </div>

                      {/* Item Total (visible on larger screens) */}
                      <div className="hidden md:flex flex-col items-end shrink-0">
                        <p className="text-[17px] font-bold text-gray-900">
                          {formatPrice(itemPrice * item.quantity)}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-[11px] text-gray-400 mt-0.5">
                            {item.price} × {item.quantity}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Place Order Button - Bottom */}
            <div
              className="flex items-center justify-between px-5 py-4 rounded-lg mt-3"
              style={{
                background: "#fff",
                boxShadow: "0 -1px 4px rgba(0,0,0,0.05)",
              }}
            >
              <div />
              <button
                onClick={handlePlaceOrderClick}
                disabled={paymentLoading}
                className="px-8 md:px-12 py-3 text-[13px] md:text-[14px] font-bold tracking-wide uppercase rounded-md text-black transition-all hover:opacity-90 hover:shadow-lg disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                style={{
                  background:
                    "linear-gradient(90deg, #e3bc7c, #fef1cd, #d4a75c)",
                }}
              >
                {paymentLoading ? "Processing..." : "Place Order"}
              </button>
            </div>
          </div>

          {/* ═══════════════════════════════════
                RIGHT: Price Details Sidebar
             ═══════════════════════════════════ */}
          <div className="w-full lg:w-[380px] shrink-0 space-y-4">
            {/* Price Details Card */}
            <div
              className="rounded-lg overflow-hidden"
              style={{ background: "#fff" }}
            >
              {/* Header */}
              <div
                className="px-5 py-4"
                style={{ borderBottom: "1px solid #f0f0f0" }}
              >
                <h2 className="text-[15px] font-bold text-gray-500 uppercase tracking-wider">
                  Price Details
                </h2>
              </div>

              {/* Details */}
              <div className="px-5 py-4 space-y-4">
                {/* MRP */}
                <div className="flex items-center justify-between">
                  <span className="text-[14px] text-gray-700">
                    Price ({cartCount} {cartCount === 1 ? "item" : "items"})
                  </span>
                  <span className="text-[14px] text-gray-900 font-medium">
                    {formatPrice(totalMRP)}
                  </span>
                </div>

                {/* Discount */}
                <div className="flex items-center justify-between">
                  <span className="text-[14px] text-gray-700">Discount</span>
                  <span className="text-[14px] text-green-600 font-medium">
                    − {formatPrice(totalDiscount)}
                  </span>
                </div>

                {/* Delivery */}
                <div className="flex items-center justify-between">
                  <span className="text-[14px] text-gray-700">
                    Delivery Charges
                  </span>
                  <span className="text-[14px] text-green-600 font-medium">
                    FREE
                  </span>
                </div>

                {/* Platform Fee */}
                <div className="flex items-center justify-between">
                  <span className="text-[14px] text-gray-700">
                    Platform Fee
                  </span>
                  <span className="text-[14px] text-green-600 font-medium">
                    FREE
                  </span>
                </div>

                {/* Divider */}
                <div
                  className="pt-3"
                  style={{
                    borderTop: "1px dashed #e0e0e0",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[16px] font-bold text-gray-900">
                      Total Amount
                    </span>
                    <span className="text-[16px] font-bold text-gray-900">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                </div>

                {/* Savings Banner */}
                {totalDiscount > 0 && (
                  <div
                    className="flex items-center gap-2 rounded-md px-4 py-3 mt-2"
                    style={{
                      background: "#f0fdf4",
                      border: "1px solid #bbf7d0",
                    }}
                  >
                    <Tag size={16} className="text-green-600 shrink-0" />
                    <span className="text-[13px] font-semibold text-green-700">
                      You will save {formatPrice(totalDiscount)} on this order
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Trust Badge */}
            <div
              className="flex items-start gap-3 rounded-lg px-5 py-4"
              style={{ background: "#fff" }}
            >
              <ShieldCheck
                size={28}
                className="text-gray-400 shrink-0 mt-0.5"
              />
              <p className="text-[12px] text-gray-500 leading-relaxed">
                <span className="font-semibold text-gray-700">
                  Safe and Secure Payments.
                </span>{" "}
                Easy returns. 100% Authentic products. Your data is protected
                with industry-standard encryption.
              </p>
            </div>

            {/* Coupon Section */}
            <div
              className="rounded-lg overflow-hidden"
              style={{ background: "#fff" }}
            >
              <div className="px-5 py-4">
                <div className="flex items-center gap-2 mb-3">
                  <Tag size={16} className="text-gray-600" />
                  <span className="text-[13px] font-semibold text-gray-800">
                    Apply Coupon
                  </span>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="flex-1 px-3 py-2.5 text-[13px] text-gray-900 placeholder-gray-500 bg-white rounded-md border border-gray-300 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                  />
                  <button
                    className="px-5 py-2.5 text-[12px] font-bold uppercase tracking-wide rounded-md transition-all hover:opacity-90 cursor-pointer"
                    style={{
                      background:
                        "linear-gradient(90deg, #e3bc7c, #fef1cd, #d4a75c)",
                      color: "#111",
                    }}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── LOGIN MODAL ── */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
      {/* ── USER DETAILS MODAL ── */}
      <UserDetailsModal
        isOpen={showOrderForm}
        onClose={() => setShowOrderForm(false)}
        onSubmit={handleOrderDetailsSubmit}
        initialData={savedData}
      />
    </div>
  );
}
