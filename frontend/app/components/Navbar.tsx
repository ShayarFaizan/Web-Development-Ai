"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useAppContext } from "@/app/context/AppContext";
import {
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  User as FirebaseUser,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import {
  Search,
  User,
  Truck,
  Heart,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Home,
  Zap,
  BadgePercent,
  CalendarDays,
  LayoutDashboard,
} from "lucide-react";
import { serviceCards, CardData } from "@/lib/servicesData";

/* ══════════════════════════════════════════
   Icon Wrappers (lucide-react)
   ══════════════════════════════════════════ */
const IconSearch = () => <Search size={18} strokeWidth={1.8} />;
const IconPerson = () => <User size={18} strokeWidth={1.8} />;
const IconTruck = () => <Truck size={18} strokeWidth={1.8} />;
const IconHeart = () => <Heart size={18} strokeWidth={1.8} />;
const IconCart = () => <ShoppingCart size={18} strokeWidth={1.8} />;
const IconMenu = () => <Menu size={22} strokeWidth={1.8} />;
const IconClose = () => <X size={20} strokeWidth={2} />;
const IconChevron = () => <ChevronDown size={12} strokeWidth={2.5} />;

/* ══════════════════════════════════════════
   Sub-Nav Data
   ══════════════════════════════════════════ */
/* ══════════════════════════════════════════
   Services Mega Menu Data (4 columns)
   ══════════════════════════════════════════ */
const servicesMegaColumns = [
  {
    heading: "Websites",
    items: [
      { label: "Standard Business", href: "/#pricing" },
      { label: "Business Website", href: "/#pricing" },
      { label: "Portfolio Website", href: "/#pricing" },
      { label: "Landing Page", href: "/#pricing" },
    ],
  },
  {
    heading: "E-Commerce",
    items: [
      { label: "Online Store", href: "/book-appointment" },
      { label: "Payment Integration", href: "/book-appointment" },
      { label: "Product Catalogue", href: "/book-appointment" },
    ],
  },
  {
    heading: "Web Apps",
    items: [
      { label: "Custom Web App", href: "/book-appointment" },
      { label: "Admin Dashboard", href: "/book-appointment" },
      { label: "CRM / SaaS", href: "/book-appointment" },
    ],
  },
];

const subNavItems = [
  // { label: "HOME", href: "/", dropdown: null },
  {
    label: "SERVICES",
    href: "#services",
    isMega: true,
    dropdown: null,
  },
  {
    label: "PORTFOLIO",
    href: "/portfolio",
    isPortfolioMega: true,
    dropdown: null,
  },
  { label: "PRICING", href: "#pricing", dropdown: null },
  { label: "WHATSAPP", href: "https://wa.me/916264906078", dropdown: null },
  { label: "BLOG", href: "/blog", dropdown: null },
  {
    label: "CONTACT",
    href: "#contact",
    isContactMega: true,
    dropdown: null,
  },
];

import portfolioData from "./portfolioData.json";

/* ══════════════════════════════════════════
   Services Mega Menu Panel
   ══════════════════════════════════════════ */
function ServicesMegaMenu({ open }: { open: boolean }) {
  return (
    <div
      style={{
        position: "fixed",
        top: "92px" /* 52px main nav + 40px sub nav */,
        left: 0,
        right: 0,
        zIndex: 999,
        background: "#fff",
        boxShadow: "none",
        pointerEvents: open ? "auto" : "none",
        opacity: open ? 1 : 0,
        transition: "opacity 0.1s ease",
        padding: "28px 60px 32px 60px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {servicesMegaColumns.map((col, colIdx) => (
          <div
            key={col.heading}
            style={{
              borderRight:
                colIdx < servicesMegaColumns.length - 1
                  ? "1px solid #f0f0f0"
                  : "none",
              paddingLeft: colIdx === 0 ? 0 : "32px",
              paddingRight:
                colIdx === servicesMegaColumns.length - 1 ? 0 : "32px",
            }}
          >
            <div
              style={{
                fontSize: "15px",
                fontWeight: "700",
                color: "#111",
                letterSpacing: "0.05em",
                marginBottom: "14px",
                textTransform: "none",
              }}
            >
              {col.heading}
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {col.items.map((item) => (
                <li key={item.label} style={{ marginBottom: "10px" }}>
                  <Link
                    href={item.href}
                    style={{
                      fontSize: "14px",
                      color: "#555",
                      textDecoration: "none",
                      transition: "color 0.15s",
                      display: "block",
                      lineHeight: "1.4",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#111")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   Portfolio Mega Menu Panel (Image Grid)
   ══════════════════════════════════════════ */
function PortfolioMegaMenu({ open }: { open: boolean }) {
  return (
    <div
      style={{
        position: "fixed",
        top: "92px",
        left: 0,
        right: 0,
        zIndex: 999,
        background: "#fff",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        pointerEvents: open ? "auto" : "none",
        opacity: open ? 1 : 0,
        transition: "opacity 0.2s ease",
        padding: "32px 40px",
        maxHeight: "calc(100vh - 92px)",
        overflowY: "auto",
        borderTop: "1px solid #f0f0f0",
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: "1400px",
        }}
      >
        <div
          style={{
            fontSize: "16px",
            fontWeight: "700",
            color: "#111",
            letterSpacing: "0.05em",
            marginBottom: "20px",
            textTransform: "uppercase",
            borderBottom: "2px solid #f0f0f0",
            paddingBottom: "10px",
            display: "inline-block",
          }}
        >
          Our Featured Projects
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "24px",
          }}
        >
          {portfolioData.map((project, idx) => (
            <a
              key={idx}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 rounded-lg p-2 transition-all duration-300 hover:bg-gray-50 hover:shadow-lg border border-transparent hover:border-gray-100"
              style={{ textDecoration: "none" }}
            >
              <div
                className="relative w-full rounded-md overflow-hidden bg-gray-100 flex items-center justify-center"
                style={{ aspectRatio: "16/10" }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-3xl font-extrabold text-gray-400 tracking-widest uppercase transition-transform duration-500 group-hover:scale-105 group-hover:text-amber-500 text-center px-4">
                    {project.label}
                  </span>
                )}
              </div>
              <div className="px-1 text-center">
                <h4 className="text-[13px] font-semibold text-gray-800 tracking-wide line-clamp-1 group-hover:text-amber-600 transition-colors">
                  {project.label}
                </h4>
                <p className="text-[10px] text-gray-400 mt-1 tracking-wider uppercase">
                  View Project
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   Contact Mega Menu Panel
   ══════════════════════════════════════════ */
function ContactMegaMenu({ open }: { open: boolean }) {
  return (
    <div
      style={{
        position: "fixed",
        top: "92px",
        left: 0,
        right: 0,
        zIndex: 999,
        background: "#fff",
        boxShadow: "none",
        pointerEvents: open ? "auto" : "none",
        opacity: open ? 1 : 0,
        transition: "opacity 0.1s ease",
        padding: "20px 6px 20px 60px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "32px",
        }}
      >
        <Link
          href="#contact"
          style={{
            fontSize: "13px",
            fontWeight: "100",
            color: "#111",
            textDecoration: "none",
            transition: "color 0.15s",
            letterSpacing: "0.02em",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#111")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
        >
          Contact us
        </Link>
        <Link
          href="#about"
          style={{
            fontSize: "13px",
            fontWeight: "100",
            color: "#111",
            textDecoration: "none",
            transition: "color 0.15s",
            letterSpacing: "0.02em",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#111")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
        >
          About Us
        </Link>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   Sub-Nav Item with hover dropdown
   ══════════════════════════════════════════ */
function SubNavItem({ item }: { item: (typeof subNavItems)[number] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* SERVICES — full-width mega menu */
  if (item.isMega) {
    return (
      <div
        ref={ref}
        className="relative flex items-center h-full group/nav"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen(false)}
      >
        <Link
          href={item.href}
          className="flex items-center gap-1 h-full px-3 text-[11.5px] font-semibold tracking-widest
                     transition-colors duration-200 whitespace-nowrap
                     text-gray-700 hover:text-black cursor-pointer"
        >
          {item.label}
          <span className="text-gray-400 transition-transform duration-300 group-hover/nav:-rotate-180">
            <IconChevron />
          </span>
        </Link>
        <ServicesMegaMenu open={open} />
      </div>
    );
  }

  /* PORTFOLIO — full-width mega menu */
  if (item.isPortfolioMega) {
    return (
      <div
        ref={ref}
        className="relative flex items-center h-full group/nav"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen(false)}
      >
        <Link
          href={item.href}
          className="flex items-center gap-1 h-full px-3 text-[11.5px] font-semibold tracking-widest
                     transition-colors duration-200 whitespace-nowrap
                     text-gray-700 hover:text-black cursor-pointer"
        >
          {item.label}
          <span className="text-gray-400 transition-transform duration-300 group-hover/nav:-rotate-180">
            <IconChevron />
          </span>
        </Link>
        <PortfolioMegaMenu open={open} />
      </div>
    );
  }

  /* CONTACT — full-width mega menu */
  if (item.isContactMega) {
    return (
      <div
        ref={ref}
        className="relative flex items-center h-full group/nav"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen(false)}
      >
        <Link
          href={item.href}
          className="flex items-center gap-1 h-full px-3 text-[11.5px] font-semibold tracking-widest
                     transition-colors duration-200 whitespace-nowrap
                     text-gray-700 hover:text-black cursor-pointer"
        >
          {item.label}
          <span className="text-gray-400 transition-transform duration-300 group-hover/nav:-rotate-180">
            <IconChevron />
          </span>
        </Link>
        <ContactMegaMenu open={open} />
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="relative flex items-center h-full group/nav"
      onMouseEnter={() => item.dropdown && setOpen(true)}
      onMouseLeave={() => item.dropdown && setOpen(false)}
      onClick={() => setOpen(false)}
    >
      <Link
        href={item.href}
        target={item.href.startsWith("http") ? "_blank" : undefined}
        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="flex items-center gap-1 h-full px-3 text-[11.5px] font-semibold tracking-widest
                   transition-colors duration-200 whitespace-nowrap
                   text-gray-700 hover:text-black cursor-pointer"
      >
        {item.label}
        {item.dropdown && (
          <span className="text-gray-400 transition-transform duration-300 group-hover/nav:-rotate-180">
            <IconChevron />
          </span>
        )}
      </Link>

      {/* Regular Dropdown */}
      {Array.isArray(item.dropdown) && open && (
        <div
          className="absolute top-full left-0 z-50 min-w-[200px] py-2 rounded-sm shadow-xl"
          style={{ background: "#fff", border: "1px solid #e5e7eb" }}
        >
          {(item.dropdown as { label: string; href: string }[]).map((sub) => (
            <Link
              key={sub.label}
              href={sub.href}
              className="block px-5 py-2.5 text-[11px] text-gray-600 hover:text-black
                         hover:bg-gray-50 tracking-wide transition-colors"
            >
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════
   Main Navbar Component
   ══════════════════════════════════════════ */
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [imgError, setImgError] = useState(false);
  const { cartCount, wishlistCount, savedAddress } = useAppContext();
  const router = useRouter();
  const pathname = usePathname();

  // ── Search State ──
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<CardData[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);

  // Handle Scroll for Header Animation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close search on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
      if (
        mobileSearchRef.current &&
        !mobileSearchRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filtering Logic
  useEffect(() => {
    if (searchTerm.trim().length > 1) {
      const filtered = serviceCards
        .filter(
          (card) =>
            card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.features.some((f) =>
              f.toLowerCase().includes(searchTerm.toLowerCase()),
            ),
        )
        .slice(0, 8); // Limit to 8 results
      setSearchResults(filtered);
      setShowDropdown(true);
    } else {
      setSearchResults([]);
      setShowDropdown(false);
    }
  }, [searchTerm]);

  const handleResultClick = (id: number) => {
    router.push(`/plans/${id}`);
    setSearchTerm("");
    setShowDropdown(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setImgError(false); // reset on user change
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleBookingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/book-appointment");
  };

  const handleSearch = (e: React.FormEvent | React.KeyboardEvent) => {
    if (e.type === 'keydown' && (e as React.KeyboardEvent).key !== 'Enter') return;
    if (searchTerm.trim()) {
      router.push(`/more-services?q=${encodeURIComponent(searchTerm.trim())}`);
      setShowDropdown(false);
    }
  };

  const handleProfileClick = async () => {
    if (user) {
      if (window.confirm("Do you want to log out?")) {
        await signOut(auth);
      }
    }
  };

  /* lock scroll when drawer open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const mobileNavLinks = [
    // { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About Us", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "#contact" },
  ];

  const iconBtn =
    "text-gray-300 hover:text-white transition-colors duration-200 p-1.5 cursor-pointer";

  return (
    <>
      {/* ════════════════════════════════════
          TOP MAIN NAV BAR
          ════════════════════════════════════ */}
      <nav
        className="fixed top-0 w-full z-100 hidden md:block"
        style={{ background: "#0d0d0d" }}
      >
        {/* ── DESKTOP MAIN BAR ── */}
        <div className="hidden md:flex items-center justify-between h-[52px] px-6 lg:px-10 xl:px-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <span className="font-semibold text-[15px] tracking-wide text-white">
              Web Development AI
            </span>
          </Link>

          {/* 🔍 Search Bar (Flipkart Style) */}
          <div
            className="flex-1 max-w-[560px] mx-10 hidden lg:block"
            ref={searchRef}
          >
            <div className="relative group">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => searchTerm.length > 1 && setShowDropdown(true)}
                onKeyDown={handleSearch}
                placeholder="Search for services, technologies and more"
                className="w-full h-[36px] px-4 pr-10 rounded-sm text-[13px] outline-none transition-all duration-300
                           bg-white text-[#111] border border-transparent focus:border-[#e3bc7c]/50
                           placeholder:text-gray-500 shadow-sm"
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              />
              <button
                className="absolute right-0 top-0 h-full w-10 flex items-center justify-center cursor-pointer group/search"
                aria-label="Submit Search"
                onClick={handleSearch}
              >
                <Search
                  size={18}
                  className="text-[#e3bc7c] transition-transform group-hover/search:scale-110"
                  strokeWidth={2.2}
                />
              </button>

              {/* Desktop Search Results Dropdown */}
              {showDropdown && searchResults.length > 0 && (
                <div className="absolute top-[calc(100%+4px)] left-0 right-0 bg-white shadow-2xl rounded-sm overflow-hidden z-200 border border-gray-100">
                  <div className="py-1">
                    {searchResults.map((result) => (
                      <Link
                        key={result.id}
                        href={`/plans/${result.id}`}
                        onClick={() => {
                          setSearchTerm("");
                          setShowDropdown(false);
                        }}
                        className="px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-50 last:border-0"
                      >
                        <div className="w-10 h-10 rounded bg-gray-50 flex-shrink-0 overflow-hidden border border-gray-100">
                          <img
                            src={result.image}
                            alt=""
                            className="w-full h-full object-contain p-1"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[13px] font-semibold text-[#111] truncate">
                            {result.title}
                          </p>
                          <p className="text-[11px] text-[#e3bc7c] font-medium">
                            {result.category} • {result.price}
                          </p>
                        </div>
                        <Search size={14} className="text-gray-300" />
                      </Link>
                    ))}
                  </div>
                  <div className="bg-gray-50 px-4 py-2 border-t border-gray-100 italic">
                    <p className="text-[10px] text-gray-400">
                      Total {searchResults.length} recommendations found
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Icons + Button */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <div className="relative group flex items-center h-full">
                <button
                  className={`${iconBtn} px-4 flex items-center justify-center cursor-pointer h-full`}
                  aria-label="Account"
                >
                  {authLoading ? (
                    <span className="w-[18px] h-[18px] rounded-full border-2 border-gray-500 border-t-amber-400 animate-spin inline-block" />
                  ) : user && user.photoURL && !imgError ? (
                    <img
                      src={user.photoURL}
                      referrerPolicy="no-referrer"
                      alt="Profile"
                      width={24}
                      height={24}
                      className="w-[24px] h-[24px] rounded-full object-cover shadow-sm"
                      style={{
                        border: "2px solid transparent",
                        background:
                          "linear-gradient(#0d0d0d, #0d0d0d) padding-box, linear-gradient(135deg, #e3bc7c, #d4a75c, #fef1cd) border-box",
                      }}
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <IconPerson />
                  )}
                </button>

                {/* ── Premium Profile Dropdown ── */}
                <div
                  className="absolute top-[calc(100%-4px)] right-0 w-[260px] rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-999 overflow-hidden"
                  style={{
                    background: "rgba(13,13,13,0.95)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow:
                      "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05) inset",
                    transform: "translateY(4px)",
                  }}
                >
                  {user ? (
                    <>
                      {/* User Info Header */}
                      <div
                        className="px-5 py-5 flex items-center gap-3.5"
                        style={{
                          borderBottom: "1px solid rgba(255,255,255,0.06)",
                          background:
                            "linear-gradient(180deg, rgba(227,188,124,0.06) 0%, transparent 100%)",
                        }}
                      >
                        {/* Avatar with gradient ring */}
                        <div
                          className="w-11 h-11 rounded-full p-[2px] shrink-0"
                          style={{
                            background:
                              "linear-gradient(135deg, #e3bc7c, #d4a75c, #fef1cd)",
                          }}
                        >
                          {user.photoURL && !imgError ? (
                            <img
                              src={user.photoURL}
                              referrerPolicy="no-referrer"
                              alt="Profile"
                              className="w-full h-full rounded-full object-cover"
                              onError={() => setImgError(true)}
                            />
                          ) : (
                            <div className="w-full h-full rounded-full bg-[#1a1a1a] flex items-center justify-center text-white font-bold text-sm">
                              {(user.displayName || "U")
                                .charAt(0)
                                .toUpperCase()}
                            </div>
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="text-[14px] font-semibold text-white truncate leading-tight">
                            {user.displayName || "User"}
                          </p>
                          <p className="text-[11px] text-gray-500 truncate mt-1 leading-tight">
                            {user.email}
                          </p>
                        </div>
                      </div>

                      {/* Menu Links */}
                      <div className="py-1.5">
                        {[
                          {
                            icon: (
                              <LayoutDashboard size={15} strokeWidth={1.6} />
                            ),
                            label: "Admin Dashboard",
                            href: "/admin",
                          },
                          {
                            icon: <User size={15} strokeWidth={1.6} />,
                            label: "My Profile",
                            href: "#profile",
                          },
                          {
                            icon: <Truck size={15} strokeWidth={1.6} />,
                            label: "My Orders",
                            href: "/orders",
                          },
                          {
                            icon: <Heart size={15} strokeWidth={1.6} />,
                            label: "Wishlist",
                            href: "/wishlist",
                          },
                          {
                            icon: <ShoppingCart size={15} strokeWidth={1.6} />,
                            label: "My Cart",
                            href: "/cart",
                          },
                        ].map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="group/item flex items-center gap-3 mx-2 px-3 py-2.5 rounded-lg text-[12.5px] font-medium text-gray-400 transition-all duration-200 cursor-pointer"
                            style={{}}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background =
                                "rgba(255,255,255,0.04)";
                              e.currentTarget.style.color = "#fff";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "transparent";
                              e.currentTarget.style.color = "#9ca3af";
                            }}
                          >
                            <span
                              className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200"
                              style={{ background: "rgba(255,255,255,0.04)" }}
                            >
                              {item.icon}
                            </span>
                            {item.label}
                          </Link>
                        ))}
                      </div>

                      {/* Sign Out */}
                      <div
                        className="mx-3 mb-3 mt-1"
                        style={{
                          borderTop: "1px solid rgba(255,255,255,0.06)",
                          paddingTop: "12px",
                        }}
                      >
                        <button
                          onClick={handleProfileClick}
                          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-[12px] font-semibold tracking-wide uppercase transition-all duration-200"
                          style={{
                            color: "#ef4444",
                            background: "rgba(239,68,68,0.06)",
                            border: "1px solid rgba(239,68,68,0.12)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                              "rgba(239,68,68,0.12)";
                            e.currentTarget.style.borderColor =
                              "rgba(239,68,68,0.25)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background =
                              "rgba(239,68,68,0.06)";
                            e.currentTarget.style.borderColor =
                              "rgba(239,68,68,0.12)";
                          }}
                        >
                          Sign Out
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Not logged in */}
                      <div
                        className="px-5 py-5 text-center"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(227,188,124,0.06) 0%, transparent 100%)",
                        }}
                      >
                        <div
                          className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                          }}
                        >
                          <User
                            size={24}
                            strokeWidth={1.4}
                            className="text-gray-500"
                          />
                        </div>
                        <p className="text-[15px] font-semibold text-white tracking-wide mb-1">
                          Welcome!
                        </p>
                        <p className="text-[11px] text-gray-500 leading-relaxed max-w-[180px] mx-auto">
                          Sign in to access your account, orders & wishlist
                        </p>
                      </div>
                      <div className="px-4 pb-4">
                        <button
                          onClick={async () => {
                            try {
                              const provider = new GoogleAuthProvider();
                              await signInWithPopup(auth, provider);
                            } catch (err) {
                              console.error("Popup Sign-in failed", err);
                            }
                          }}
                          className="group/btn relative overflow-hidden block text-center w-full py-3 text-[12px] font-bold uppercase tracking-widest text-black rounded-lg transition-all hover:shadow-lg outline-none"
                          style={{
                            background:
                              "linear-gradient(90deg, #e3bc7c, #fef1cd, #d4a75c)",
                          }}
                        >
                          <span className="relative z-10">Sign In</span>
                          <div className="absolute top-0 left-[-150%] w-[150%] h-full z-0 transform -skew-x-12 bg-linear-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover/btn:opacity-100 group-hover/btn:left-[150%] transition-all duration-1200 ease-in-out" />
                        </button>
                        <p className="text-[10px] text-gray-600 text-center mt-3">
                          New here?{" "}
                          <button
                            onClick={async () => {
                              try {
                                const provider = new GoogleAuthProvider();
                                await signInWithPopup(auth, provider);
                              } catch (err) {
                                console.error("Popup Sign-in failed", err);
                              }
                            }}
                            className="text-amber-500 hover:text-amber-400 font-semibold transition-colors outline-none"
                          >
                            Create Account
                          </button>
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="w-px h-5 bg-[#333]" />
              <button className={`${iconBtn} px-4`} aria-label="Orders">
                <IconTruck />
              </button>
              <div className="w-px h-5 bg-[#333]" />
              <button
                onClick={() => router.push("/wishlist")}
                className={`${iconBtn} px-4 relative`}
                aria-label="Wishlist"
              >
                <IconHeart />
                {wishlistCount > 0 && (
                  <span className="absolute top-0 right-2 w-4 h-4 rounded-full bg-red-500 text-[9px] font-bold text-white flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>
              <div className="w-px h-5 bg-[#333]" />
              <button
                onClick={() => router.push("/cart")}
                className={`${iconBtn} px-4 relative`}
                aria-label="Cart"
              >
                <IconCart />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-2 w-4 h-4 rounded-full bg-blue-500 text-[9px] font-bold text-white flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            <div className="w-px h-6 bg-[#333] hidden md:block" />

            <button
              onClick={handleBookingClick}
              className="group relative overflow-hidden text-[12px] font-semibold tracking-wide uppercase px-6 py-2.5
                         rounded-md transition-opacity duration-300 whitespace-nowrap outline-none ml-2 cursor-pointer"
              style={{
                background: "linear-gradient(90deg, #e3bc7c, #fef1cd, #d4a75c)",
                color: "#111",
              }}
            >
              <span className="relative z-10">BOOK FREE APPOINTMENT</span>

              {/* Shine Effect */}
              <div
                className="absolute top-0 left-[-150%] w-[150%] h-full z-0 transform -skew-x-12 
                           bg-linear-to-r from-transparent via-white/30 to-transparent 
                           opacity-0 group-hover:opacity-100 group-hover:left-[150%] transition-all duration-1500 ease-in-out"
              />
            </button>
          </div>
        </div>

        {/* ── DESKTOP SUB-NAVBAR ── */}
        <div
          className="hidden md:flex items-center justify-center h-[40px] px-6"
          style={{ background: "#ffffff" }}
        >
          <div className="flex items-center h-full gap-1">
            {subNavItems.map((item) => (
              <SubNavItem key={item.label} item={item} />
            ))}
          </div>
        </div>
      </nav>

      {/* ── MOBILE TOP HEADER (Dynamic Scrolling Header) ── */}
      {!["/book-appointment", "/account", "/cart", "/more-services"].includes(
        pathname,
      ) && (
        <div
          className={`md:hidden fixed top-0 left-0 right-0 z-[200] px-3 shadow-lg transition-all duration-300 ease-in-out ${
            isScrolled ? "py-1.5 gap-0" : "py-2 gap-2"
          }`}
          style={{
            background: "linear-gradient(180deg, #121212 0%, #1a1a1a 100%)",
            borderBottom: "1px solid rgba(227,188,124,0.15)",
          }}
        >
          {/* Top Row: Location + Points (Vanishes on Scroll) */}
          <div
            className={`flex items-center justify-between transition-all duration-300 ease-in-out overflow-hidden ${
              isScrolled
                ? "max-h-0 opacity-0 pointer-events-none mb-0 pt-0"
                : "max-h-10 opacity-100 mb-1 pt-0.5"
            }`}
          >
            <div className="flex items-center gap-1.5 max-w-[80%]">
              <div className="flex-shrink-0">
                <div className="bg-[#e3bc7c] text-black p-0.5 rounded-sm shadow-sm">
                  <Home size={11} fill="black" />
                </div>
              </div>
              <div className="flex items-center gap-1 overflow-hidden">
                <span className="text-[11px] font-black text-[#e3bc7c] whitespace-nowrap tracking-wide leading-none">
                  HOME
                </span>
                <span className="text-[10px] text-gray-300 truncate font-medium opacity-80 leading-none">
                  {savedAddress || "Select delivery location"}
                </span>
                <ChevronRight size={14} className="text-[#e3bc7c] shrink-0" />
              </div>
            </div>

            <div className="bg-black/40 rounded-full px-1.5 py-0.5 flex items-center gap-1 border border-[#e3bc7c]/30 shadow-inner">
              <div className="bg-[#e3bc7c] rounded-full p-0.5 shadow-sm">
                <Zap size={9} fill="black" stroke="black" />
              </div>
              <span className="text-[10px] font-bold text-[#e3bc7c]">0</span>
            </div>
          </div>

          {/* Search Bar Row: Larger, Rounded with gold/brass border */}
          <div className="relative w-full" ref={mobileSearchRef}>
            <div className="relative transition-all duration-300">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => searchTerm.length > 1 && setShowDropdown(true)}
                onKeyDown={handleSearch}
                placeholder="Search for Services, Apps and more"
                className="w-full h-[46px] pl-12 pr-4 rounded-xl text-[14px] outline-none bg-white text-[#111] placeholder:text-gray-500 shadow-md ring-1 ring-inset ring-transparent focus:ring-[#e3bc7c]/30"
                style={{ border: "2px solid #e3bc7c" }}
              />
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#e3bc7c]"
                strokeWidth={2.5}
              />
            </div>

            {/* Results Dropdown (Mobile) */}
            {showDropdown && searchResults.length > 0 && (
              <div className="absolute top-[calc(100%+8px)] left-0 right-0 z-[999] bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 max-h-[70vh] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-300">
                {searchResults.map((result) => (
                  <div
                    key={result.id}
                    onMouseDown={() => handleResultClick(result.id)}
                    className="flex items-center gap-3 p-3.5 hover:bg-gray-50 active:bg-gray-100 border-b border-gray-50 last:border-0 cursor-pointer group transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center overflow-hidden shrink-0 border border-gray-100">
                      <img
                        src={result.image}
                        alt={result.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder-image.png";
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-[13px] font-bold text-gray-900 truncate tracking-tight">
                          {result.title}
                        </h4>
                        <span className="text-[11px] font-black text-[#d4a351] shrink-0">
                          {result.price}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] text-gray-400 font-medium">
                          Free Delivery
                        </span>
                        <div className="w-1 h-1 rounded-full bg-gray-200" />
                        <span className="text-[10px] text-gray-400 font-medium">
                          {result.category}
                        </span>
                      </div>
                    </div>
                    <ChevronRight
                      size={14}
                      className="text-gray-300 group-hover:text-[#d4a351] transition-colors"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── CONDITIONAL CSS TO REMOVE LAYOUT GAP ON SPECIAL PAGES ── */}
      {["/book-appointment", "/account", "/cart"].includes(pathname) && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
          main { padding-top: 0 !important; }
        `,
          }}
        />
      )}

      {/* ── FLIPKART STYLE MOBILE BOTTOM NAVBAR ── */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-100 bg-white px-2 mt-auto"
        style={{
          borderTop: "1px solid #e0e0e0",
          boxShadow: "0 -2px 10px rgba(0,0,0,0.05)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        <div className="flex items-center justify-between h-[60px]">
          {/* Home */}
          <Link
            href="/"
            className="flex-1 flex flex-col items-center justify-center gap-1"
          >
            <Home
              size={22}
              className={pathname === "/" ? "text-[#d4a351]" : "text-gray-600"}
            />
            <span
              className={`text-[10px] font-medium ${pathname === "/" ? "text-[#d4a351]" : "text-gray-600"}`}
            >
              Home
            </span>
          </Link>

          {/* Book Appointment */}
          <Link
            href="/book-appointment"
            className="flex-1 flex flex-col items-center justify-center gap-1"
          >
            <CalendarDays
              size={22}
              className={
                pathname === "/book-appointment"
                  ? "text-[#d4a351]"
                  : "text-gray-600"
              }
            />
            <span
              className={`text-[10px] font-medium ${pathname === "/book-appointment" ? "text-[#d4a351]" : "text-gray-600"}`}
            >
              Book Free
            </span>
          </Link>

          {/* Account */}
          <Link
            href="/account"
            className="flex-1 flex flex-col items-center justify-center gap-1"
          >
            <User
              size={22}
              className={
                pathname === "/account" ? "text-[#d4a351]" : "text-gray-600"
              }
            />
            <span
              className={`text-[10px] font-medium ${pathname === "/account" ? "text-[#d4a351]" : "text-gray-600"}`}
            >
              Account
            </span>
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="flex-1 flex flex-col items-center justify-center gap-1 relative"
          >
            <div className="relative">
              <ShoppingCart
                size={22}
                className={
                  pathname === "/cart"
                    ? "text-[#d4a351] fill-[#d4a351]"
                    : "text-gray-600"
                }
              />
              {cartCount > 0 && (
                <span
                  className="absolute -top-2 -right-2 w-[18px] h-[18px] rounded-full bg-red-500 text-[10px] font-extrabold text-white flex items-center justify-center shadow-sm"
                  style={{ border: "2px solid #fff" }}
                >
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              )}
            </div>
            <span
              className={`text-[10px] font-medium ${pathname === "/cart" ? "text-[#d4a351]" : "text-gray-600"}`}
            >
              Cart
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
