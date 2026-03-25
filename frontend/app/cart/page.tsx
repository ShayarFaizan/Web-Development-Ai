"use client";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  CreditCard,
  Building2,
  Wallet,
  Banknote,
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

  const router = useRouter();

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [savedData, setSavedData] = useState<any>(null);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [activeStep, setActiveStep] = useState<"items" | "address" | "payment">(
    "items",
  );
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    "upi" | "card" | "netbanking"
  >("upi");
  const [upiSelectionType, setUpiSelectionType] = useState<"apps" | "collect">(
    "apps",
  );
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    projectDetails: "",
  });

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
    setActiveStep("address");
  };

  const handleOrderDetailsSubmit = (data: any) => {
    localStorage.setItem("userData", JSON.stringify(data));
    setSavedData(data);
    setOrderDetails(data);

    // Save/Update in Firebase users collection
    if (user) {
      setDoc(
        doc(db, "users", user.uid),
        {
          ...data,
          createdAt: serverTimestamp(),
        },
        { merge: true },
      ).catch((err) => console.error("Error saving user details:", err));
    }

    setActiveStep("payment");
  };

  const initiatePayment = async (
    data: any,
    selectedMethod?: "upi" | "card" | "netbanking",
  ) => {
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

      const blocksConfig: any = {
        upi: {
          name: "Pay using UPI ID",
          instruments: [
            {
              method: "upi",
            },
          ],
        },
        card: {
          name: "Pay using Card",
          instruments: [
            {
              method: "card",
            },
          ],
        },
        netbanking: {
          name: "Pay using Net Banking",
          instruments: [
            {
              method: "netbanking",
            },
          ],
        },
      };

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: order.amount,
        currency: order.currency,
        name: "Web Development AI",
        description: "Payment for selected services",
        image: "https://iili.io/qkFrCGt.jpg",
        order_id: order.id,
        config: {
          display: {
            blocks: selectedMethod
              ? { [selectedMethod]: blocksConfig[selectedMethod] }
              : blocksConfig,
            sequence: selectedMethod
              ? [`block.${selectedMethod}`]
              : ["block.upi", "block.card", "block.netbanking"],
            preferences: {
              show_default_blocks: false,
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
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 px-8 py-3 text-[13px] font-bold uppercase tracking-wide rounded-md text-black transition-all hover:opacity-90 hover:shadow-lg cursor-pointer"
            style={{
              background: "linear-gradient(90deg, #e3bc7c, #fef1cd, #d4a75c)",
            }}
          >
            <ArrowLeft size={16} />
            Continue Shopping
          </button>
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

            <button
              onClick={() => router.back()}
              className="text-[#d4a351] text-[15px] font-medium mb-10 cursor-pointer"
            >
              Continue Shopping
            </button>
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
    <div
      className={`min-h-screen pb-24 ${roboto.className}`}
      style={{ background: "#f1f3f6" }}
    >
      {/* ── Breadcrumb / Stepper ── */}
      <div
        className="w-full px-4 md:px-8 lg:px-16 py-4 sticky top-0 z-50 shadow-sm"
        style={{ background: "#fff", borderBottom: "1px solid #e8e8e8" }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[12px] text-gray-500">
            <button
              onClick={() => {
                if (activeStep === "payment") setActiveStep("address");
                else if (activeStep === "address") setActiveStep("items");
                else router.back();
              }}
              className="hover:text-black transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft size={12} />
              Back
            </button>
            <ChevronRight size={12} />
            <span className="text-gray-900 font-semibold tracking-wide">
              {activeStep === "items"
                ? "Shopping Cart"
                : activeStep === "address"
                  ? "Shipping Address"
                  : "Complete Payment"}
            </span>
          </div>

          {/* Checkout Steps */}
          <div className="flex items-center gap-2 md:gap-4 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {[
              { id: "items", label: "Cart" },
              { id: "address", label: "Details" },
              { id: "payment", label: "Payment" },
            ].map((step, idx) => (
              <React.Fragment key={step.id}>
                <div className="flex items-center gap-2 shrink-0">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${activeStep === step.id ? "bg-[#2874f0] text-white" : "bg-gray-200 text-gray-500"}`}
                  >
                    {idx + 1}
                  </div>
                  <span
                    className={`text-[12px] font-bold uppercase tracking-wider ${activeStep === step.id ? "text-[#2874f0]" : "text-gray-400"}`}
                  >
                    {step.label}
                  </span>
                </div>
                {idx < 2 && (
                  <div className="w-8 md:w-12 h-[1px] bg-gray-200 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-[1240px] mx-auto px-4 py-5 md:py-6">
        <div className="flex flex-col lg:flex-row gap-4 items-start">
          {/* ═══════════════════════════════════
                LEFT: Dynamic Content Area
             ═══════════════════════════════════ */}
          <div className="flex-1 w-full space-y-4">
            {/* STEP 1: ITEMS IN CART */}
            {activeStep === "items" && (
              <div
                className="rounded-sm shadow-sm overflow-hidden"
                style={{ background: "#fff" }}
              >
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                  <h2 className="text-[16px] font-bold text-gray-900">
                    My Cart ({cartCount})
                  </h2>
                  {cartItems.length > 1 && (
                    <button
                      onClick={clearCart}
                      className="text-[11px] font-bold text-[#2874f0] hover:underline uppercase tracking-wide"
                    >
                      Clear All
                    </button>
                  )}
                </div>
                <div className="divide-y divide-gray-100">
                  {cartItems.map((item) => {
                    const itemPrice =
                      parseInt(item.price.replace(/[₹,]/g, ""), 10) || 0;
                    const itemOriginal =
                      parseInt(item.originalPrice.replace(/[₹,]/g, ""), 10) ||
                      0;
                    const discountPercent = Math.round(
                      ((itemOriginal - itemPrice) / itemOriginal) * 100,
                    );

                    return (
                      <div key={item.id} className="p-6 flex gap-6">
                        <div className="relative w-28 h-28 md:w-32 md:h-32 shrink-0">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-[15px] font-medium text-gray-900 mb-1 line-clamp-2">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-[12px] text-gray-500">
                              {item.category}
                            </span>
                            <span className="text-[12px] font-bold text-green-600 px-2 py-0.5 bg-green-50 rounded">
                              {item.delivery}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-xl font-bold">
                              {item.price}
                            </span>
                            <span className="text-sm text-gray-400 line-through">
                              {item.originalPrice}
                            </span>
                            <span className="text-sm font-bold text-green-600">
                              {discountPercent}% Off
                            </span>
                          </div>

                          <div className="flex items-center gap-6">
                            <div className="flex items-center border border-gray-300 rounded-sm">
                              <button
                                onClick={() => updateCartQuantity(item.id, -1)}
                                className="w-8 h-8 flex items-center justify-center hover:bg-gray-50"
                              >
                                {item.quantity === 1 ? (
                                  <Trash2 size={14} className="text-red-500" />
                                ) : (
                                  <Minus size={14} />
                                )}
                              </button>
                              <span className="w-10 text-center font-bold text-sm border-x border-gray-300">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateCartQuantity(item.id, 1)}
                                className="w-8 h-8 flex items-center justify-center hover:bg-gray-50"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-[13px] font-bold text-gray-800 hover:text-[#2874f0] uppercase tracking-wide cursor-pointer"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* Place Order Footer */}
                <div className="p-4 bg-white border-t border-gray-100 flex justify-end shadow-[0_-2px-10px_rgba(0,0,0,0.05)] sticky bottom-0">
                  <button
                    onClick={handlePlaceOrderClick}
                    className="bg-[#fb641b] text-white px-12 py-3.5 rounded-sm font-bold text-[15px] shadow-md hover:bg-[#eb5d1a] transition-colors cursor-pointer"
                  >
                    PLACE ORDER
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: ADDRESS / DETAILS */}
            {activeStep === "address" && (
              <div
                className="rounded-sm shadow-sm overflow-hidden"
                style={{ background: "#fff" }}
              >
                <div className="bg-[#2874f0] px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="bg-white text-[#2874f0] w-5 h-5 rounded-sm flex items-center justify-center text-[10px] font-bold">
                      2
                    </span>
                    <h2 className="text-[13px] font-bold text-white uppercase tracking-wider">
                      Delivery Details
                    </h2>
                  </div>
                </div>
                <div className="p-8">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      handleOrderDetailsSubmit({
                        name: formData.get("name"),
                        email: formData.get("email"),
                        phone: formData.get("phone"),
                        address: formData.get("address"),
                        projectDetails: formData.get("projectDetails"),
                      });
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                        Full Name
                      </label>
                      <input
                        name="name"
                        defaultValue={savedData?.name}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-[#2874f0] text-sm"
                        placeholder="e.g. Rahul Kumar"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                        Phone Number
                      </label>
                      <input
                        name="phone"
                        defaultValue={savedData?.phone}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-[#2874f0] text-sm"
                        placeholder="10-digit mobile number"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                        Email Address
                      </label>
                      <input
                        name="email"
                        type="email"
                        defaultValue={savedData?.email}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-[#2874f0] text-sm"
                        placeholder="e.g. rahul@example.com"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                        Delivery Address
                      </label>
                      <textarea
                        name="address"
                        defaultValue={savedData?.address}
                        required
                        rows={2}
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-[#2874f0] text-sm"
                        placeholder="House No, Street, Landmark, City, State, Pincode"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                        Project Notes (Optional)
                      </label>
                      <textarea
                        name="projectNotes"
                        defaultValue={savedData?.projectNotes}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-[#2874f0] text-sm"
                        placeholder="Explain your specific requirements or project details here..."
                      />
                    </div>
                    <div className="md:col-span-2 pt-4">
                      <button
                        type="submit"
                        className="bg-[#fb641b] text-white px-12 py-3.5 rounded-sm font-bold text-[15px] shadow-md hover:bg-[#eb5d1a] transition-colors uppercase tracking-wide cursor-pointer"
                      >
                        Deliver Here & Continue
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* STEP 3: PAYMENT OPTIONS */}
            {activeStep === "payment" && (
              <div className="rounded-sm shadow-sm overflow-hidden bg-white">
                <div className="bg-[#2874f0] px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="bg-white text-[#2874f0] w-5 h-5 rounded-sm flex items-center justify-center text-[10px] font-bold">
                      3
                    </span>
                    <h2 className="text-[13px] font-bold text-white uppercase tracking-wider">
                      Payment Options
                    </h2>
                  </div>
                  <div className="flex items-center gap-1 text-white text-[11px] font-bold opacity-90">
                    <ShieldCheck size={14} />
                    100% SECURE
                  </div>
                </div>

                <div className="flex flex-col md:flex-row min-h-[450px]">
                  {/* Left Sidebar: Payment Methods */}
                  <div className="w-full md:w-[300px] bg-gray-50 border-r border-gray-100 flex flex-col">
                    <div
                      onClick={() => setSelectedPaymentMethod("upi")}
                      className={`p-5 flex items-center gap-4 cursor-pointer transition-colors border-b border-gray-100 ${selectedPaymentMethod === "upi" ? "bg-white border-l-4 border-[#2874f0]" : "bg-gray-50 border-l-4 border-transparent hover:bg-gray-100"}`}
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/UPI-Logo.png"
                        alt="UPI"
                        className={`w-8 ${selectedPaymentMethod !== "upi" && "opacity-60 grayscale"}`}
                      />
                      <div className="flex-1">
                        <p
                          className={`text-[14px] leading-tight ${selectedPaymentMethod === "upi" ? "font-bold text-gray-900" : "font-semibold text-gray-700"}`}
                        >
                          UPI
                        </p>
                        <p
                          className={`text-[11px] font-medium mt-0.5 ${selectedPaymentMethod === "upi" ? "text-[#2874f0]" : "text-gray-500"}`}
                        >
                          PhonePe, Google Pay & more
                        </p>
                      </div>
                    </div>

                    <div
                      onClick={() => setSelectedPaymentMethod("card")}
                      className={`p-5 flex items-center gap-4 cursor-pointer transition-colors border-b border-gray-100 ${selectedPaymentMethod === "card" ? "bg-white border-l-4 border-[#2874f0]" : "bg-gray-50 border-l-4 border-transparent hover:bg-gray-100"}`}
                    >
                      <CreditCard
                        size={20}
                        className={
                          selectedPaymentMethod === "card"
                            ? "text-[#2874f0]"
                            : "text-gray-500"
                        }
                      />
                      <div className="flex-1">
                        <p
                          className={`text-[14px] ${selectedPaymentMethod === "card" ? "font-bold text-gray-900" : "font-semibold text-gray-700"}`}
                        >
                          Credit / Debit / ATM Card
                        </p>
                      </div>
                    </div>

                    <div
                      onClick={() => setSelectedPaymentMethod("netbanking")}
                      className={`p-5 flex items-center gap-4 cursor-pointer transition-colors border-b border-gray-100 ${selectedPaymentMethod === "netbanking" ? "bg-white border-l-4 border-[#2874f0]" : "bg-gray-50 border-l-4 border-transparent hover:bg-gray-100"}`}
                    >
                      <Building2
                        size={20}
                        className={
                          selectedPaymentMethod === "netbanking"
                            ? "text-[#2874f0]"
                            : "text-gray-500"
                        }
                      />
                      <div className="flex-1">
                        <p
                          className={`text-[14px] ${selectedPaymentMethod === "netbanking" ? "font-bold text-gray-900" : "font-semibold text-gray-700"}`}
                        >
                          Net Banking
                        </p>
                      </div>
                    </div>

                    <div className="p-5 flex items-center gap-4 opacity-50 cursor-not-allowed grayscale border-b border-gray-100">
                      <Banknote size={20} className="text-gray-400" />
                      <div className="flex-1">
                        <p className="text-[14px] font-bold text-gray-800">
                          Cash on Delivery
                        </p>
                        <p className="text-[11px] text-red-500">
                          Unavailable for digital services
                        </p>
                      </div>
                    </div>

                    <div className="p-5 flex items-center gap-4 opacity-50 cursor-not-allowed grayscale border-b border-gray-100">
                      <Wallet size={20} className="text-gray-400" />
                      <p className="text-[14px] font-bold text-gray-800">
                        Wallets
                      </p>
                    </div>

                    <div className="p-5 flex items-center gap-4 opacity-50 cursor-not-allowed grayscale mt-auto bg-gray-100">
                      <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest text-center w-full">
                        More options coming soon
                      </div>
                    </div>
                  </div>

                  {/* Right Content: Payment Action */}
                  <div className="flex-1 p-6 md:p-10 bg-white">
                    <div className="max-w-md mx-auto">
                      <div className="mb-8 border-b border-gray-100 pb-4">
                        <h3 className="text-[18px] font-bold text-gray-900 mb-1">
                          {selectedPaymentMethod === "upi"
                            ? "Pay using UPI"
                            : ""}
                          {selectedPaymentMethod === "card"
                            ? "Pay using Credit / Debit Card"
                            : ""}
                          {selectedPaymentMethod === "netbanking"
                            ? "Pay using Net Banking"
                            : ""}
                        </h3>
                        <p className="text-[13px] text-gray-500">
                          {selectedPaymentMethod === "upi"
                            ? "Select your preferred UPI app to pay securely."
                            : ""}
                          {selectedPaymentMethod === "card"
                            ? "You will be redirected to the secure page to enter your card details."
                            : ""}
                          {selectedPaymentMethod === "netbanking"
                            ? "You will be redirected to your bank's secure page."
                            : ""}
                        </p>
                      </div>

                      <div className="space-y-6">
                        {selectedPaymentMethod === "upi" && (
                          <div className="grid grid-cols-2 gap-3 mb-6">
                            <div
                              onClick={() => setUpiSelectionType("apps")}
                              className={`border rounded-sm p-4 cursor-pointer flex items-center justify-between transition-all ${upiSelectionType === "apps" ? "border-[#2874f0] bg-blue-50/20" : "border-gray-200 hover:border-gray-300 bg-white"}`}
                            >
                              <div className="flex items-center gap-3">
                                <img
                                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/UPI-Logo.png"
                                  alt="UPI"
                                  className="h-6 object-contain"
                                />
                                <span
                                  className={`text-[14px] font-semibold ${upiSelectionType === "apps" ? "text-gray-800" : "text-gray-600"}`}
                                >
                                  Use UPI Apps
                                </span>
                              </div>
                              <div
                                className={`w-4 h-4 rounded-full border-[5px] transition-colors ${upiSelectionType === "apps" ? "border-[#2874f0]" : "border-gray-200"}`}
                              />
                            </div>
                            <div
                              onClick={() => setUpiSelectionType("collect")}
                              className={`border rounded-sm p-4 cursor-pointer flex items-center justify-between transition-all ${upiSelectionType === "collect" ? "border-[#2874f0] bg-blue-50/20" : "border-gray-200 hover:border-gray-300 bg-white"}`}
                            >
                              <div className="flex items-center gap-3">
                                <svg
                                  className={`w-5 h-5 ${upiSelectionType === "collect" ? "text-[#2874f0]" : "text-gray-400"}`}
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                                  />
                                </svg>
                                <span
                                  className={`text-[14px] font-semibold ${upiSelectionType === "collect" ? "text-gray-800" : "text-gray-600"}`}
                                >
                                  UPI ID / QR Code
                                </span>
                              </div>
                              <div
                                className={`w-4 h-4 rounded-full border-[5px] transition-colors ${upiSelectionType === "collect" ? "border-[#2874f0]" : "border-gray-200"}`}
                              />
                            </div>
                          </div>
                        )}

                        {selectedPaymentMethod === "card" && (
                          <div className="border border-gray-200 rounded-sm px-4 py-4 mb-6 flex items-center justify-between bg-white text-gray-400 text-sm shadow-sm opacity-80 cursor-not-allowed">
                            <span>Click Pay to enter card securely</span>
                            <CreditCard size={18} />
                          </div>
                        )}

                        {selectedPaymentMethod === "netbanking" && (
                          <div className="border border-gray-200 rounded-sm px-4 py-4 mb-6 flex items-center justify-between bg-white text-gray-400 text-sm shadow-sm opacity-80 cursor-not-allowed">
                            <span>Click Pay to select your bank</span>
                            <Building2 size={18} />
                          </div>
                        )}

                        {/* Order Snapshot */}
                        <div className="p-4 bg-gray-50 rounded-sm border border-gray-100 shadow-sm flex items-center justify-between">
                          <div>
                            <p className="text-[11px] text-gray-500 uppercase font-bold tracking-wider mb-0.5">
                              Total Amount
                            </p>
                            <p className="text-[18px] font-bold text-gray-900">
                              {formatPrice(totalPrice)}
                            </p>
                          </div>
                          <div className="text-right text-[12px] text-gray-600 font-medium">
                            <span className="font-bold">
                              {cartItems.length}
                            </span>{" "}
                            {cartItems.length === 1 ? "Service" : "Services"}
                          </div>
                        </div>

                        {/* Pay Button */}
                        <div className="space-y-4 pt-2">
                          <button
                            onClick={() =>
                              initiatePayment(
                                orderDetails,
                                selectedPaymentMethod,
                              )
                            }
                            disabled={paymentLoading}
                            className="w-full bg-[#fb641b] text-white py-4 rounded-sm font-bold text-[16px] shadow-lg hover:bg-[#eb5d1a] transition-all transform active:scale-[0.98] disabled:opacity-75 cursor-pointer uppercase tracking-wider flex items-center justify-center gap-3"
                          >
                            {paymentLoading ? (
                              <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Processing...
                              </>
                            ) : (
                              `PAY ${formatPrice(totalPrice)}`
                            )}
                          </button>

                          <div className="flex items-center justify-center gap-6 opacity-60 grayscale scale-90 pt-2">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/UPI-Logo.png"
                              alt="UPI"
                              className="h-4"
                            />

                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                              alt="PayPal"
                              className="h-4"
                            />
                          </div>
                          <p className="text-[11px] text-gray-400 text-center leading-relaxed max-w-sm mx-auto">
                            By clicking "PAY", you agree to the Terms of
                            Service. Your payment status will be updated
                            instantly after a successful transaction.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ═══════════════════════════════════
                RIGHT: Order Summary Sidebar
             ═══════════════════════════════════ */}
          <div className="w-full lg:w-[380px] shrink-0">
            <div className="sticky top-[80px] space-y-4">
              <div
                className="bg-white rounded-sm shadow-sm overflow-hidden"
                style={{ background: "#fff" }}
              >
                <div className="px-5 py-3 border-b border-gray-100">
                  <h2 className="text-[14px] font-bold text-gray-500 uppercase tracking-wider">
                    Price Details
                  </h2>
                </div>
                <div className="p-5 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-800">
                      Price ({cartCount} items)
                    </span>
                    <span className="text-sm text-gray-900">
                      {formatPrice(totalMRP)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-800">Discount</span>
                    <span className="text-sm text-green-600 font-bold">
                      − {formatPrice(totalDiscount)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-800">Delivery</span>
                    <span className="text-sm text-green-600 font-bold">
                      FREE
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-800">Platform Fee</span>
                    <span className="text-sm text-green-600 font-bold">
                      FREE
                    </span>
                  </div>
                  <div className="pt-4 border-t border-dashed border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">
                        Total Amount
                      </span>
                      <span className="text-lg font-bold text-gray-900">
                        {formatPrice(totalPrice)}
                      </span>
                    </div>
                  </div>
                  {totalDiscount > 0 && (
                    <div className="p-3 bg-green-50 text-green-700 text-xs font-bold rounded-sm border border-green-100">
                      You will save {formatPrice(totalDiscount)} on this order
                    </div>
                  )}
                </div>
              </div>

              {/* Trust & Policy */}
              <div className="flex items-start gap-4 p-4 text-[11px] text-gray-400">
                <ShieldCheck size={28} className="shrink-0 text-gray-300" />
                <p>
                  Safe and Secure Payments. 100% Authentic products. Secure data
                  encryption protocols used for all transactions.
                </p>
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
    </div>
  );
}
