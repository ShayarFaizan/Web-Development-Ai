"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAppContext } from "@/app/context/AppContext";
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
  const { savedAddress, setSavedAddress } = useAppContext();
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [currentView, setCurrentView] = useState<string>("main");
  const [selectedLang, setSelectedLang] = useState("en"); // Persistent selection

  // ── TRANSLATIONS DICTIONARY ──
  const t = {
    en: {
      account: "Account",
      orders: "Orders",
      wishlist: "Wishlist",
      portfolio: "Portfolio",
      helpCenter: "Help Center",
      accountSettings: "Account Settings",
      plus: "WebDev Plus",
      devices: "Manage Devices",
      profile: "Edit Profile",
      cards: "Saved Credit / Debit & Gift Cards",
      addresses: "Saved Addresses",
      language: "Select Language",
      notifications: "Notification Settings",
      privacy: "Privacy Center",
      feedback: "Feedback & Information",
      terms: "Terms, Policies and Licenses",
      faqs: "Browse FAQs",
      logout: "Log Out",
      loginMsg: "Log in to get exclusive offers",
      loginBtn: "Log In",
      profileUpdate: "Profile updated successfully!",
      updateBtn: "Update Profile",
      fullName: "Full Name",
      mobile: "Mobile Number",
      noAddress: "No saved addresses found",
      addAddress: "+ Add a new address",
      plusDesc: "Unlock exclusive features & priority support",
      joinPlus: "Join Plus Membership",
      thisDevice: "This Device (Phone)",
      activeNow: "Active now",
      logoutAll: "Log Out From All Devices",
      push: "Push Notifications",
      pushDesc: "Get real-time updates on your phone",
      emailUp: "Email Updates",
      emailDesc: "Weekly project reports",
      offers: "Offer Alerts",
      offersDesc: "Never miss a discount",
      applied: "Language Preference Applied"
    },
    hi: {
      account: "खाता",
      orders: "ऑर्डर",
      wishlist: "इच्छा सूची",
      portfolio: "पोर्टफोलियो",
      helpCenter: "सहायता केंद्र",
      accountSettings: "खाता सेटिंग्स",
      plus: "वेब-डेव प्लस",
      devices: "डिवाइस प्रबंधित करें",
      profile: "प्रोफ़ाइल संपादित करें",
      cards: "सहेजे गए कार्ड",
      addresses: "सहेजे गए पते",
      language: "भाषा चुनें",
      notifications: "सूचना सेटिंग्स",
      privacy: "गोपनीयता केंद्र",
      feedback: "प्रतिक्रिया और जानकारी",
      terms: "शर्तें और नीतियां",
      faqs: "सवालो के जवाब",
      logout: "लॉग आउट",
      loginMsg: "विशेष ऑफ़र पाने के लिए लॉग इन करें",
      loginBtn: "लॉग इन करें",
      profileUpdate: "प्रोफ़ाइल सफलतापूर्वक अपडेट हो गई!",
      updateBtn: "प्रोफ़ाइल अपडेट करें",
      fullName: "पूरा नाम",
      mobile: "मोबाइल नंबर",
      noAddress: "कोई सहेजा गया पता नहीं मिला",
      addAddress: "+ नया पता जोड़ें",
      plusDesc: "विशेष सुविधाएं और सहायता प्राप्त करें",
      joinPlus: "प्लस मेंबरशिप लें",
      thisDevice: "यह डिवाइस (फोन)",
      activeNow: "अभी सक्रिय",
      logoutAll: "सभी डिवाइस से लॉग आउट करें",
      push: "पुश नोटिफिकेशन",
      pushDesc: "अपने फोन पर रियल-टाइम अपडेट प्राप्त करें",
      emailUp: "ईमेल अपडेट",
      emailDesc: "साप्ताहिक प्रोजेक्ट रिपोर्ट",
      offers: "ऑफ़र अलर्ट",
      offersDesc: "कोई भी डिस्काउंट न चूकें",
      applied: "भाषा प्राथमिकता लागू की गई"
    }
  }[selectedLang as 'en' | 'hi'] || {
    en: { /* Fallback to English labels for Hinglish or others */ },
    // Simplified for this demo, usually you'd have a full map
  };

  // Re-map localized texts (using 't' as our current language dictionary)
  // Define it inside the render or as a derived state
  const langKey = (selectedLang === 'hi' ? 'hi' : 'en') as 'en' | 'hi';
  const labels = {
    en: {
      account: "Account",
      orders: "Orders",
      wishlist: "Wishlist",
      portfolio: "Portfolio",
      helpCenter: "Help Center",
      accountSettings: "Account Settings",
      plus: "WebDev Plus",
      devices: "Manage Devices",
      profile: "Edit Profile",
      cards: "Saved Credit / Debit & Gift Cards",
      addresses: "Saved Addresses",
      language: "Select Language",
      notifications: "Notification Settings",
      privacy: "Privacy Center",
      feedback: "Feedback & Information",
      terms: "Terms, Policies and Licenses",
      faqs: "Browse FAQs",
      logout: "Log Out",
    },
    hi: {
      account: "खाता",
      orders: "ऑर्डर",
      wishlist: "इच्छा सूची",
      portfolio: "पोर्टफोलियो",
      helpCenter: "सहायता केंद्र",
      accountSettings: "खाता सेटिंग्स",
      plus: "वेब-डेव प्लस",
      devices: "डिवाइस प्रबंधित करें",
      profile: "प्रोफ़ाइल संपादित करें",
      cards: "सहेजे गए कार्ड",
      addresses: "सहेजे गए पते",
      language: "भाषा चुनें",
      notifications: "सूचना सेटिंग्स",
      privacy: "गोपनीयता केंद्र",
      feedback: "प्रतिक्रिया और जानकारी",
      terms: "शर्तें और नीतियां",
      faqs: "सवालो के जवाब",
      logout: "लॉग आउट",
    }
  }[langKey];

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setProfileData({
          name: currentUser.displayName || "",
          email: currentUser.email || "",
          phone: currentUser.phoneNumber || "",
        });
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to log out?")) {
      await signOut(auth);
      router.push("/");
    }
  };

  const menuItems = [
    {
      id: "plus",
      icon: <Sparkles size={18} className="text-[#d4a351]" />,
      label: labels.plus,
    },
    {
      id: "devices",
      icon: <Smartphone size={18} className="text-[#d4a351]" />,
      label: labels.devices,
    },
    {
      id: "profile",
      icon: <User size={18} className="text-[#d4a351]" />,
      label: labels.profile,
    },
    {
      id: "cards",
      icon: <CreditCard size={18} className="text-[#d4a351]" />,
      label: labels.cards,
    },
    {
      id: "addresses",
      icon: <MapPin size={18} className="text-[#d4a351]" />,
      label: labels.addresses,
    },
    {
      id: "language",
      icon: <Languages size={18} className="text-[#d4a351]" />,
      label: labels.language,
    },
    {
      id: "notifications",
      icon: <Bell size={18} className="text-[#d4a351]" />,
      label: labels.notifications,
    },
    {
      id: "privacy",
      icon: <Lock size={18} className="text-[#d4a351]" />,
      label: labels.privacy,
    },
  ];

  const infoItems = [
    {
      id: "terms",
      icon: <FileText size={18} className="text-[#d4a351]" />,
      label: labels.terms,
    },
    {
      id: "faqs",
      icon: <HelpCircle size={18} className="text-[#d4a351]" />,
      label: labels.faqs,
    },
  ];

  // ── SUB-VIEW RENDERING ──

  const renderCurrentView = () => {
    const currentT = selectedLang === 'hi' ? {
      updateBtn: "प्रोफ़ाइल अपडेट करें",
      fullName: "पूरा नाम",
      mobile: "मोबाइल नंबर",
      plusDesc: "विशेष सुविधाएं और सहायता प्राप्त करें",
      joinPlus: "प्लस मेंबरशिप लें",
      thisDevice: "यह डिवाइस (फोन)",
      activeNow: "अभी सक्रिय",
      logoutAll: "सभी डिवाइस से लॉग आउट करें",
      push: "पुश नोटिफिकेशन",
      emailUp: "ईमेल अपडेट",
      offers: "ऑफ़र अलर्ट",
      applied: "भाषा प्राथमिकता लागू की गई"
    } : {
      updateBtn: "Update Profile",
      fullName: "Full Name",
      mobile: "Mobile Number",
      plusDesc: "Unlock exclusive features & priority support",
      joinPlus: "Join Plus Membership",
      thisDevice: "This Device (Phone)",
      activeNow: "Active now",
      logoutAll: "Log Out From All Devices",
      push: "Push Notifications",
      emailUp: "Email Updates",
      offers: "Offer Alerts",
      applied: "Language Preference Applied"
    };

    switch (currentView) {
      case "profile":
        return (
          <div className="bg-white min-h-screen animate-in slide-in-from-right duration-300">
            <div className="p-4 border-b flex items-center gap-4 sticky top-0 bg-white">
              <button onClick={() => setCurrentView("main")}><ArrowLeft size={22} /></button>
              <h2 className="font-bold text-[18px]">{labels.profile}</h2>
            </div>
            <div className="p-5 space-y-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">{currentT.fullName}</label>
                <input 
                  type="text" 
                  value={profileData.name}
                  onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                  className="w-full border-b py-2 focus:border-[#d4a351] outline-none text-[14px]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  disabled
                  value={profileData.email}
                  className="w-full border-b py-2 text-gray-400 text-[14px]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">{currentT.mobile}</label>
                <input 
                  type="tel" 
                  placeholder="Add mobile number"
                  value={profileData.phone}
                  onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                  className="w-full border-b py-2 focus:border-[#d4a351] outline-none text-[14px]"
                />
              </div>
              <button 
                onClick={() => {
                  alert(selectedLang === 'hi' ? "प्रोफ़ाइल अपडेट हो गई!" : "Profile updated!");
                  setCurrentView("main");
                }}
                className="w-full py-3 mt-4 rounded-sm font-bold text-[14px] uppercase tracking-wide text-white bg-[#d4a351]"
              >
                {currentT.updateBtn}
              </button>
            </div>
          </div>
        );

      case "addresses":
        return (
          <div className="bg-white min-h-screen animate-in slide-in-from-right duration-300">
            <div className="p-4 border-b flex items-center gap-4 sticky top-0 bg-white">
              <button onClick={() => setCurrentView("main")}><ArrowLeft size={22} /></button>
              <h2 className="font-bold text-[18px]">{labels.addresses}</h2>
            </div>
            
            <button 
              onClick={() => {
                const newAddr = prompt("Enter your address:", savedAddress || "");
                if (newAddr !== null) setSavedAddress(newAddr);
              }}
              className="w-full p-4 bg-gray-50 flex items-center justify-between border-b hover:bg-gray-100 transition-colors"
            >
              <span className="text-[13px] font-bold text-[#d4a351] uppercase">
                {savedAddress ? "✎ Update Address" : (selectedLang === 'hi' ? "+ नया पता जोड़ें" : "+ Add a new address")}
              </span>
            </button>

            <div className="p-8 text-center">
              {savedAddress ? (
                <div className="bg-amber-50/50 p-4 rounded-lg border border-amber-100 text-left animate-in fade-in duration-500">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-[#d4a351] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[14px] font-bold text-gray-900 mb-1">Current Address</p>
                      <p className="text-[13px] text-gray-600 leading-relaxed font-medium">{savedAddress}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <MapPin size={48} className="mx-auto text-gray-200 mb-3" />
                  <p className="text-gray-400 text-[13px] tracking-wide font-medium">
                    {selectedLang === 'hi' ? "कोई सहेजा गया पता नहीं मिला" : "No saved addresses found"}
                  </p>
                </>
              )}
            </div>
          </div>
        );

      case "plus":
        return (
          <div className="bg-white min-h-screen animate-in zoom-in duration-300">
            <div className="p-4 flex items-center gap-4">
              <button onClick={() => setCurrentView("main")}><ArrowLeft size={22} /></button>
            </div>
            <div className="px-6 py-4 text-center">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles size={32} className="text-[#d4a351]" />
              </div>
              <h2 className="text-[22px] font-bold text-gray-900 mb-2">{labels.plus}</h2>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-8">
                {currentT.plusDesc}
              </p>
              <button className="w-full py-4 mt-8 rounded-lg font-bold text-[15px] uppercase tracking-wide text-white bg-black">
                {currentT.joinPlus}
              </button>
            </div>
          </div>
        );

      case "devices":
        return (
          <div className="bg-white min-h-screen animate-in slide-in-from-right duration-300">
            <div className="p-4 border-b flex items-center gap-4 sticky top-0 bg-white">
              <button onClick={() => setCurrentView("main")}><ArrowLeft size={22} /></button>
              <h2 className="font-bold text-[18px]">{labels.devices}</h2>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-4 p-4 border rounded-lg bg-blue-50/30 border-blue-100">
                <Smartphone className="text-blue-500" />
                <div>
                  <p className="text-[14px] font-bold text-gray-900">{currentT.thisDevice}</p>
                  <p className="text-[11px] text-gray-500">{currentT.activeNow} • New Delhi, India</p>
                </div>
              </div>
              <button className="w-full py-3 mt-8 border border-red-200 text-red-500 rounded-sm font-bold text-[13px] uppercase">
                {currentT.logoutAll}
              </button>
            </div>
          </div>
        );

      case "language":
        const languages = [
          { id: "en", name: "English", sub: "Global English" },
          { id: "hi", name: "हिन्दी", sub: "hindi" },
          { id: "hinglish", name: "Hinglish", sub: "hindi + English" },
        ];
        return (
          <div className="bg-white min-h-screen animate-in slide-in-from-right duration-300">
            <div className="p-4 border-b flex items-center gap-4 sticky top-0 bg-white">
              <button onClick={() => setCurrentView("main")}><ArrowLeft size={22} /></button>
              <h2 className="font-bold text-[18px]">{labels.language}</h2>
            </div>
            <div className="p-2">
              {languages.map(lang => (
                <div 
                  key={lang.id} 
                  onClick={() => {
                    setSelectedLang(lang.id);
                    setTimeout(() => setCurrentView("main"), 400); // Small delay for feedback
                  }}
                  className="flex items-center justify-between p-4 border-b border-gray-50 active:bg-gray-50 cursor-pointer"
                >
                  <div>
                    <p className={`text-[14px] font-bold ${selectedLang === lang.id ? 'text-[#d4a351]' : 'text-gray-900'}`}>{lang.name}</p>
                    <p className="text-[11px] text-gray-500">{lang.sub}</p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${selectedLang === lang.id ? 'border-[#d4a351]' : 'border-gray-200'}`}>
                    {selectedLang === lang.id && <div className="w-2.5 h-2.5 bg-[#d4a351] rounded-full animate-in zoom-in duration-200" />}
                  </div>
                </div>
              ))}
            </div>
            {/* Visual Feedback bottom bar */}
            {selectedLang && (
              <div className="absolute bottom-6 left-4 right-4 p-3 bg-green-50 border border-green-100 rounded-lg text-center animate-in slide-in-from-bottom flex items-center justify-center gap-2">
                <span className="text-green-700 text-[12px] font-bold uppercase tracking-wider">{currentT.applied}</span>
              </div>
            )}
          </div>
        );

      case "notifications":
        return (
          <div className="bg-white min-h-screen animate-in slide-in-from-right duration-300">
            <div className="p-4 border-b flex items-center gap-4 sticky top-0 bg-white">
              <button onClick={() => setCurrentView("main")}><ArrowLeft size={22} /></button>
              <h2 className="font-bold text-[18px]">{labels.notifications}</h2>
            </div>
            <div className="p-5 space-y-6">
              {[
                { title: currentT.push, desc: "Get real-time updates" },
                { title: currentT.emailUp, desc: "Weekly project reports" },
                { title: currentT.offers, desc: "Never miss a discount" }
              ].map(item => (
                <div key={item.title} className="flex items-center justify-between">
                  <div>
                    <h4 className="text-[14px] font-bold text-gray-900">{item.title}</h4>
                    <p className="text-[11px] text-gray-500">{item.desc}</p>
                  </div>
                  <div className="w-10 h-5 bg-[#d4a351] rounded-full relative">
                    <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "terms":
      case "privacy":
      case "faqs":
        return (
          <div className="bg-white min-h-screen animate-in slide-in-from-bottom duration-300">
            <div className="p-4 border-b flex items-center gap-4 sticky top-0 bg-white">
              <button onClick={() => setCurrentView("main")}><ArrowLeft size={22} /></button>
              <h2 className="font-bold text-[18px] capitalize">{currentView}</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600">{currentView === 'faqs' ? 'अक्सर पूछे जाने वाले सवाल' : 'नियम और शर्तें'}</p>
            </div>
          </div>
        );

      default:
        return (
          <>
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
                  {labels.account}
                </span>
              </div>

              {/* Header Action Row (Login/Logout) */}
              {!user && (
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[13px] text-gray-700">
                    {selectedLang === 'hi' ? 'विशेष ऑफ़र पाने के लिए लॉग इन करें' : 'Log in to get exclusive offers'}
                  </p>
                  <button
                    onClick={() => setShowLoginModal(true)}
                    className="bg-[#d4a351] hover:bg-[#c39240] text-white text-[13px] font-bold px-[18px] py-[6px] rounded-[3px] shadow-sm active:scale-95 transition-all outline-none"
                  >
                    {selectedLang === 'hi' ? 'लॉग इन' : 'Log In'}
                  </button>
                </div>
              )}
            </div>

            {/* ── 2x2 GRID ── */}
            <div className="bg-white p-3.5 mt-2">
              <div className="grid grid-cols-2 gap-3">
                <Link href="/orders" className="flex items-center gap-3 p-3 rounded-md border border-[#e5e7eb]">
                  <Package size={20} className="text-[#d4a351]" strokeWidth={1.8} />
                  <span className="text-[13px] font-semibold text-gray-800">{labels.orders}</span>
                </Link>
                <Link href="/wishlist" className="flex items-center gap-3 p-3 rounded-md border border-[#e5e7eb]">
                  <Heart size={20} className="text-[#d4a351]" strokeWidth={1.8} />
                  <span className="text-[13px] font-semibold text-gray-800">{labels.wishlist}</span>
                </Link>
                <Link href="/portfolio" className="flex items-center gap-3 p-3 rounded-md border border-[#e5e7eb]">
                  <LayoutGrid size={20} className="text-[#d4a351]" strokeWidth={1.8} />
                  <span className="text-[13px] font-semibold text-gray-800">{labels.portfolio}</span>
                </Link>
                <a href="https://wa.me/916264906078" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-md border border-[#e5e7eb]">
                  <Headphones size={20} className="text-[#d4a351]" strokeWidth={1.8} />
                  <span className="text-[13px] font-semibold text-gray-800">{labels.helpCenter}</span>
                </a>
              </div>
            </div>

            {/* ── ACCOUNT SETTINGS ── */}
            <div className="mt-2.5 bg-white pt-4 pb-1">
              <h3 className="px-4 text-[14px] font-bold text-gray-900 mb-2">{labels.accountSettings}</h3>
              <div className="flex flex-col">
                {menuItems.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setCurrentView(item.id)}
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
              <h3 className="px-4 text-[14px] font-bold text-gray-900 mb-2">{labels.feedback}</h3>
              <div className="flex flex-col">
                {infoItems.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setCurrentView(item.id)}
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

            {/* ── LOGOUT BUTTON ── */}
            {user && (
              <div className="px-4 mt-6">
                <button
                  onClick={handleLogout}
                  className="w-full bg-white border border-[#d4a351] text-[#d4a351] text-[14px] font-semibold py-[10px] rounded-sm shadow-sm active:scale-95 transition-all outline-none text-center"
                >
                  {labels.logout}
                </button>
              </div>
            )}
          </>
        );
    }
  };

  return (
    <div className="min-h-screen md:hidden flex flex-col pb-20" style={{ background: "#f1f3f6" }}>
      {renderCurrentView()}

      {/* ── LOGIN MODAL ── */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </div>
  );
}
