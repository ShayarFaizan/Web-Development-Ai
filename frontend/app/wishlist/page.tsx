"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/app/context/AppContext";
import {
  Heart,
  Trash2,
  ShoppingCart,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";

export default function WishlistPage() {
  const { wishlistItems, wishlistCount, removeFromWishlist, moveToCart } =
    useAppContext();

  /* ── Empty Wishlist ── */
  if (wishlistItems.length === 0) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
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
          <Heart size={48} className="text-gray-300" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Your wishlist is empty
        </h1>
        <p className="text-gray-500 text-sm mb-6 text-center max-w-sm">
          Save the services you love by clicking the heart icon. They&apos;ll
          appear here for easy access!
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 text-[13px] font-bold uppercase tracking-wide rounded-md text-black transition-all hover:opacity-90 hover:shadow-lg"
          style={{
            background: "linear-gradient(90deg, #e3bc7c, #fef1cd, #d4a75c)",
          }}
        >
          <ArrowLeft size={16} />
          Explore Services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20" style={{ background: "#f1f3f6" }}>
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
          <span className="text-gray-900 font-semibold">My Wishlist</span>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-0 py-5 md:py-6">
        <div className="flex flex-col lg:flex-row gap-5">
          {/* ═══════════════════════════════════
                LEFT: User Profile Sidebar
             ═══════════════════════════════════ */}
          <div className="hidden lg:block w-[260px] shrink-0 space-y-3">
            {/* Profile Card */}
            <div
              className="rounded-lg overflow-hidden"
              style={{ background: "#fff" }}
            >
              <div
                className="flex items-center gap-3 px-5 py-4"
                style={{ borderBottom: "1px solid #f0f0f0" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                  }}
                >
                  S
                </div>
                <div>
                  <p className="text-[11px] text-gray-400">Hello,</p>
                  <p className="text-[14px] font-bold text-gray-900">
                    Shayar Faizan
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar Menu */}
            <div
              className="rounded-lg overflow-hidden"
              style={{ background: "#fff" }}
            >
              {/* My Orders */}
              <Link
                href="/orders"
                className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50 transition-colors"
                style={{ borderBottom: "1px solid #f0f0f0" }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-blue-500 text-[16px]">📦</span>
                  <span className="text-[13px] font-semibold text-gray-500 uppercase tracking-wider">
                    My Orders
                  </span>
                </div>
                <ChevronRight size={14} className="text-gray-400" />
              </Link>

              {/* Account Settings */}
              <div style={{ borderBottom: "1px solid #f0f0f0" }}>
                <div className="flex items-center gap-3 px-5 pt-3.5 pb-2">
                  <span className="text-blue-500 text-[16px]">👤</span>
                  <span className="text-[13px] font-semibold text-gray-500 uppercase tracking-wider">
                    Account Settings
                  </span>
                </div>
                <div className="pb-2">
                  {["Profile Information", "Manage Addresses"].map((label) => (
                    <Link
                      key={label}
                      href="#"
                      className="block px-5 pl-12 py-2 text-[13px] text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* My Stuff */}
              <div>
                <div className="flex items-center gap-3 px-5 pt-3.5 pb-2">
                  <span className="text-blue-500 text-[16px]">📋</span>
                  <span className="text-[13px] font-semibold text-gray-500 uppercase tracking-wider">
                    My Stuff
                  </span>
                </div>
                <div className="pb-2">
                  {[
                    { label: "My Reviews & Ratings", href: "#reviews" },
                    { label: "All Notifications", href: "#notifications" },
                    { label: "My Wishlist", href: "/wishlist", active: true },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`block px-5 pl-12 py-2 text-[13px] transition-colors ${
                        item.active
                          ? "text-blue-600 font-semibold bg-blue-50/50"
                          : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                      style={
                        item.active ? { borderLeft: "3px solid #2563eb" } : {}
                      }
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Logout */}
              <div style={{ borderTop: "1px solid #f0f0f0" }}>
                <button className="flex items-center gap-3 px-5 py-3.5 w-full hover:bg-gray-50 transition-colors text-left">
                  <span className="text-[16px]">🚪</span>
                  <span className="text-[13px] font-semibold text-gray-500">
                    Logout
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════
                RIGHT: Wishlist Items
             ═══════════════════════════════════ */}
          <div className="flex-1">
            {/* Wishlist Header */}
            <div
              className="flex items-center justify-between px-5 py-4 rounded-t-lg"
              style={{
                background: "#fff",
                borderBottom: "1px solid #f0f0f0",
              }}
            >
              <h1 className="text-[16px] font-bold text-gray-900">
                My Wishlist ({wishlistCount})
              </h1>
            </div>

            {/* Wishlist Items */}
            <div className="rounded-b-lg md:bg-white bg-transparent">
              <div className="grid grid-cols-2 gap-2 md:grid-cols-1 md:gap-0 mt-2 md:mt-0">
                {wishlistItems.map((item, idx) => {
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
                    <React.Fragment key={item.id}>
                      {/* DESKTOP VIEW */}
                      <div
                        className="hidden md:block"
                        style={{
                          borderBottom:
                            idx < wishlistItems.length - 1
                              ? "1px solid #f0f0f0"
                              : "none",
                        }}
                      >
                        <div className="flex gap-4 p-5 hover:bg-gray-50 transition-colors">
                          {/* Product Image */}
                          <div className="shrink-0">
                            <div
                              className="relative w-[120px] h-[120px] rounded-lg overflow-hidden"
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

                          {/* Product Info */}
                          <div className="flex-1 min-w-0 flex flex-col justify-between">
                            {/* Title */}
                            <div>
                              <Link
                                href="#"
                                className="text-[15px] font-medium text-blue-600 hover:text-blue-700 leading-snug line-clamp-2 transition-colors"
                              >
                                {item.title}
                              </Link>

                              {/* Category */}
                              <div className="flex items-center gap-2 mt-1.5">
                                <span
                                  className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                                  style={{
                                    background: "#f0f0f0",
                                    color: "#666",
                                  }}
                                >
                                  {item.category}
                                </span>
                                <span className="text-[11px] text-gray-400">
                                  📦 Delivery: {item.delivery}
                                </span>
                              </div>
                            </div>

                            {/* Price */}
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
                          </div>

                          {/* Actions (right side) */}
                          <div className="shrink-0 flex flex-col items-end justify-between">
                            {/* Delete button */}
                            <button
                              onClick={() => removeFromWishlist(item.id)}
                              className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-full hover:bg-red-50"
                              aria-label="Remove from wishlist"
                            >
                              <Trash2 size={16} />
                            </button>

                            {/* Move to Cart button */}
                            <button
                              onClick={() => moveToCart(item.id)}
                              className="flex items-center gap-1.5 px-4 py-2 text-[11px] font-bold uppercase tracking-wide rounded-md text-black transition-all hover:opacity-90 hover:shadow-md"
                              style={{
                                background:
                                  "linear-gradient(90deg, #e3bc7c, #fef1cd, #d4a75c)",
                              }}
                            >
                              <ShoppingCart size={13} />
                              Move to Cart
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* MOBILE VIEW (FLIPKART 2-COLUMN GRID STYLE) */}
                      <div className="flex md:hidden flex-col h-full bg-white relative rounded-md shadow-sm overflow-hidden border border-gray-200">
                        <button
                          onClick={() => removeFromWishlist(item.id)}
                          className="absolute top-2 right-2 z-10 w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm border border-gray-200 text-gray-400 active:scale-90 transition-transform"
                        >
                          <Trash2 size={13} strokeWidth={2} />
                        </button>

                        <div className="relative w-full aspect-4/3 bg-white flex items-center justify-center p-2 mb-1">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain"
                          />
                        </div>

                        <div className="p-2 flex-1 flex flex-col w-full">
                          <span className="text-[9px] font-bold uppercase text-[#d4a351] mb-1 line-clamp-1">
                            {item.category}
                          </span>
                          <h3 className="text-[12px] font-medium text-gray-800 leading-[1.3] line-clamp-2 min-h-[31px]">
                            {item.title}
                          </h3>

                          <div className="mt-1.5 flex items-baseline gap-1.5 flex-wrap">
                            <span className="text-[14px] font-bold text-gray-900">
                              {item.price}
                            </span>
                            {itemOriginal > itemPrice && (
                              <span className="text-[10px] text-gray-400 line-through">
                                {item.originalPrice}
                              </span>
                            )}
                            {discountPercent > 0 && (
                              <span className="text-[10px] font-bold text-green-600 block">
                                {discountPercent}% off
                              </span>
                            )}
                          </div>

                          <div className="mt-1 flex items-center gap-1 mb-3">
                            <div className="flex items-center text-green-600 gap-px">
                              <span className="text-[10px]">★</span>
                              <span className="text-[10px]">★</span>
                              <span className="text-[10px]">★</span>
                              <span className="text-[10px]">★</span>
                              <span className="text-[10px] text-gray-300">
                                ★
                              </span>
                            </div>
                            <span className="text-[8px] bg-blue-50 text-[#d4a351] font-bold px-1 py-0.5 rounded border border-[#e3bc7c] flex items-center gap-0.5 ml-1">
                              Assured
                            </span>
                          </div>
                        </div>

                        {/* Mobile Add to Cart Button */}
                        <button
                          onClick={() => moveToCart(item.id)}
                          className="w-full mt-auto py-2.5 text-[12px] font-bold tracking-widest text-[#111] transition-colors border-t border-gray-100"
                          style={{
                            background:
                              "linear-gradient(90deg, #e3bc7c, #fef1cd, #d4a75c)",
                          }}
                        >
                          MOVE TO CART
                        </button>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
