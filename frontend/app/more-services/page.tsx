"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Heart,
  Filter,
  ListFilter,
  Star,
  ChevronDown,
  Search,
  ShoppingCart,
  ArrowLeft,
  Truck,
  TrendingDown,
  Award,
  Zap,
  History,
  ArrowUpRight,
  X as CloseIcon,
} from "lucide-react";
import { serviceCards } from "@/lib/servicesData";
import Footer from "../components/Footer";
import { useAppContext } from "@/app/context/AppContext";

function MoreServicesContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toggleWishlist, isInWishlist } = useAppContext();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("Popularity");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [localSearchTerm, setLocalSearchTerm] = useState("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Load search history
  useEffect(() => {
    const history = localStorage.getItem("searchHistory");
    if (history) {
      setSearchHistory(JSON.parse(history));
    }
  }, []);

  const addToHistory = (term: string) => {
    const trimmed = term.trim().toLowerCase();
    if (!trimmed) return;
    
    const history = localStorage.getItem("searchHistory");
    const currentHistory: string[] = history ? JSON.parse(history) : [];
    const updatedHistory = [trimmed, ...currentHistory.filter(h => h !== trimmed)].slice(0, 10);
    
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
    setSearchHistory(updatedHistory);
  };

  const removeFromHistory = (term: string) => {
    setSearchHistory(prev => {
      const newHistory = prev.filter(h => h !== term);
      localStorage.setItem("searchHistory", JSON.stringify(newHistory));
      return newHistory;
    });
  };

  // Mobile scroll behavior: hide header on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Minimum scroll to trigger hide
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          setShowHeader(false); // Scrolling down
        } else {
          setShowHeader(true); // Scrolling up
        }
      } else {
        setShowHeader(true); // Near top
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Sync category with URL param
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const categories = [
    "All",
    "Landing Pages",
    "Website's",
    "BUSINESS",
    "Custom App",
    "Protein Website",
  ];

  const searchParam = searchParams.get("q");

  const filteredCards = serviceCards.filter((card) => {
    const matchesCategory =
      selectedCategory === "All" ||
      (selectedCategory === "Custom App"
        ? card.id === 4
        : card.category === selectedCategory);
    const matchesSearch =
      !searchParam ||
      card.title.toLowerCase().includes(searchParam.toLowerCase()) ||
      card.category.toLowerCase().includes(searchParam.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sorting logic
  const sortedCards = [...filteredCards].sort((a, b) => {
    if (sortBy === "Price -- Low to High") {
      return (
        parseInt(a.price.replace(/[^\d]/g, "")) -
        parseInt(b.price.replace(/[^\d]/g, ""))
      );
    }
    if (sortBy === "Price -- High to Low") {
      return (
        parseInt(b.price.replace(/[^\d]/g, "")) -
        parseInt(a.price.replace(/[^\d]/g, ""))
      );
    }
    return 0; // Default: Popularity (as defined in array order)
  });

  return (
    <div className="bg-[#f1f3f6] min-h-screen text-[#212121] -mt-[110px] md:mt-0">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-2 py-0 md:py-2 px-0 md:px-4">
        {/* Desktop Sidebar - Hidden on Mobile */}
        <aside className="hidden md:block w-[280px] bg-white shadow-sm shrink-0 self-start sticky top-[10px] h-[calc(100vh-20px)] overflow-y-auto">
          <div className="p-4 border-b border-gray-100">
            <h2 className="text-[18px] font-bold">Filters</h2>
          </div>

          <div className="p-4 border-b border-gray-100">
            <h3 className="text-[12px] font-bold uppercase text-gray-500 mb-3">
              Categories
            </h3>
            <div className="flex flex-col gap-2.5">
              <Link
                href="/"
                className="text-[14px] text-gray-400 flex items-center gap-1 hover:text-[#2874f0]"
              >
                <span>‹</span> AI Web Dev
              </Link>
              <div className="text-[14px] font-bold text-gray-800 flex items-center gap-2 mb-1">
                <span className="text-[10px] rotate-90">▼</span> IT Services
              </div>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[13px] text-left pl-6 ${
                    selectedCategory === cat
                      ? "font-bold text-[#2874f0]"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div className="p-4 border-b border-gray-100">
            <h3 className="text-[12px] font-bold uppercase text-gray-900 mb-3 flex justify-between items-center">
              Brand <ChevronDown size={14} className="text-gray-400" />
            </h3>
            <div className="flex flex-col gap-2.5">
              {["Starter Pack", "Professional", "Enterprise", "Elite"].map(
                (brand) => (
                  <label
                    key={brand}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      className="w-3.5 h-3.5 border-gray-300 rounded"
                    />
                    <span className="text-[14px] text-gray-700 group-hover:text-black">
                      {brand}
                    </span>
                  </label>
                ),
              )}
            </div>
          </div>

          {/* Discount */}
          <div className="p-4 border-b border-gray-100">
            <h3 className="text-[12px] font-bold uppercase text-gray-900 mb-3 flex justify-between items-center">
              Discount <ChevronDown size={14} className="text-gray-400" />
            </h3>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1">
          {/* MOBILE HEADER (Exact Replica) */}
          <div className={`md:hidden sticky top-0 z-201 bg-white border-b border-gray-100 flex items-center justify-between px-3 py-2.5 h-[54px] shadow-sm transform transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="flex items-center gap-3">
              <button onClick={() => router.back()} className="text-gray-800">
                <ArrowLeft size={22} strokeWidth={2.5} />
              </button>
              <div className="w-8 h-8 rounded-full bg-[#2874f0] flex items-center justify-center font-black text-white text-[14px]">
                W
              </div>
              <h1 className="text-[14px] font-bold text-gray-800 truncate">
                {searchParam ||
                  (selectedCategory === "All" ? "Services" : selectedCategory)}
              </h1>
            </div>
            <div className="flex items-center gap-4 text-gray-600">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Open Search"
              >
                <Search size={21} strokeWidth={2.2} />
              </button>
              <Heart size={21} strokeWidth={2.2} />
              <div className="relative">
                <ShoppingCart size={21} strokeWidth={2.2} />
                <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[9px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full border border-white">
                  2
                </span>
              </div>
            </div>
          </div>

          {/* MOBILE SORT/FILTER STRIP */}
          <div className={`md:hidden sticky top-[53.5px] z-200 bg-white border-b border-gray-200 flex items-center justify-evenly h-[48px] shadow-sm transform transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-[53.5px]'}`}>
            <button
              onClick={() => setIsSortOpen(true)}
              className="flex items-center gap-2 text-[13px] font-bold text-gray-700 w-full justify-center h-full"
            >
              <ListFilter size={16} className="text-gray-400" /> Sort
            </button>
            <div className="w-px h-6 bg-gray-200" />
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 text-[13px] font-bold text-gray-700 w-full justify-center h-full"
            >
              <Filter size={16} className="text-gray-400" /> Filter
            </button>
          </div>

          {/* DESKTOP HEADER (Exact Replica) */}
          <div className="hidden md:block bg-white p-4 mb-2 shadow-sm">
            <nav className="text-[12px] text-gray-500 mb-2 flex items-center gap-1">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span>›</span>
              <span className="text-gray-800">IT Services</span>
            </nav>
            <div className="mb-4">
              <h1 className="text-[16px] font-bold text-gray-900 inline-block mr-2">
                IT Services
              </h1>
              <span className="text-[12px] text-gray-500">
                (Showing 1 – {filteredCards.length} products of{" "}
                {filteredCards.length} products)
              </span>
            </div>
            <div className="flex items-center gap-8 text-[14px]">
              <span className="font-bold text-gray-900">Sort By</span>
              {[
                "Popularity",
                "Price -- Low to High",
                "Price -- High to Low",
                "Newest First",
              ].map((sort) => (
                <button
                  key={sort}
                  onClick={() => setSortBy(sort)}
                  className={`pb-1 transition-all relative ${
                    sortBy === sort
                      ? "text-[#2874f0] font-bold border-b-2 border-[#2874f0]"
                      : "text-gray-800 hover:text-[#2874f0]"
                  }`}
                >
                  {sort}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 md:gap-x-2 md:gap-y-2">
            {sortedCards.map((card) => (
              <div
                key={card.id}
                onClick={() => router.push(`/plans/${card.id}`)}
                className="group cursor-pointer flex flex-col bg-white transition-all duration-300 md:hover:shadow-[0_2px_12px_rgba(0,0,0,0.15)] border-b border-r border-gray-100 md:border-none p-4 pb-3"
              >
                {/* Image */}
                <div className="relative aspect-square w-full mb-3 flex items-center justify-center p-2 md:p-6">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain p-2 md:group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Heart Icon (Desktop: Gray, Mobile: Right-aligned) */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist({
                        id: card.id,
                        title: card.title,
                        price: card.price,
                        image: card.image,
                        originalPrice: card.originalPrice,
                        delivery: card.delivery,
                        category: card.category,
                      });
                    }}
                    className="absolute top-0 right-0 p-2"
                  >
                    <Heart
                      size={isInWishlist(card.id) ? 21 : 18}
                      className={`${isInWishlist(card.id) ? "fill-red-500 text-red-500" : "text-[#d6d6d6]"} transition-colors`}
                    />
                  </button>

                  <div className="absolute bottom-0 right-0 bg-white/90 border border-gray-100 rounded-md px-2 py-0.5 shadow-sm md:hidden">
                    <span className="text-[10px] font-bold text-[#2874f0]">
                      3 variants
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 mt-auto">
                  <h3 className="text-[12.5px] md:text-[14px] text-gray-800 md:text-gray-600 line-clamp-2 leading-snug mb-1 font-medium h-[36px] overflow-hidden group-hover:text-[#2874f0]">
                    {card.title}
                  </h3>

                  {card.reviews && card.reviews.length > 0 && (
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <div className="flex items-center bg-[#388e3c] text-white text-[10px] md:text-[12px] font-bold px-1.5 py-0.5 rounded gap-0.5">
                        <span>
                          {(
                            card.reviews.reduce((acc, r) => acc + r.rating, 0) /
                            card.reviews.length
                          ).toFixed(1)}
                        </span>
                        <Star size={10} className="fill-white" />
                      </div>
                      <span className="text-[10px] md:text-[13px] text-gray-400 md:text-gray-500 font-bold">
                        ({card.reviews.length.toLocaleString()})
                      </span>
                      <div className="ml-auto">
                        <div className="flex items-center bg-[#2874f0] text-white text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded-sm italic shadow-sm border border-blue-400/30">
                          <span className="text-yellow-400 mr-1 not-italic">
                            ★
                          </span>{" "}
                          WEBDEV{" "}
                          <span className="ml-1 opacity-90">Assured</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {(!card.reviews || card.reviews.length === 0) && (
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <div className="ml-auto">
                        <div className="flex items-center bg-[#2874f0] text-white text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded-sm italic shadow-sm border border-blue-400/30">
                          <span className="text-yellow-400 mr-1 not-italic">
                            ★
                          </span>{" "}
                          WEBDEV{" "}
                          <span className="ml-1 opacity-90">Assured</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[14px] md:text-[16px] font-bold text-gray-900">
                      {card.price}
                    </span>
                    <span className="text-[11px] md:text-[13px] text-gray-400 line-through">
                      {card.originalPrice}
                    </span>
                    <span className="text-[12px] md:text-[13px] text-[#388e3c] font-bold">
                      {card.discount}
                    </span>
                  </div>

                  <div className="text-[11px] md:text-[13px] text-gray-800 mb-1 leading-tight">
                    Buy 7 items, save extra 10%
                  </div>

                  <div className="hidden md:block text-[12px] text-[#388e3c] font-bold mt-1">
                    Hot Deal
                  </div>
                  <div className="md:hidden flex items-center gap-1 mt-1">
                    <div className="px-1.5 py-0.5 bg-green-50 text-[#388e3c] text-[9px] font-bold border border-green-100 rounded">
                      Hot Deal
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!sortedCards.length && (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400">
              <Search size={48} className="opacity-10 mb-4" />
              <p className="text-[18px]">
                No services found matching your filters.
              </p>
            </div>
          )}
        </main>
      </div>
      {/* MOBILE SORT MODAL */}
      {isSortOpen && (
        <div
          className="md:hidden fixed inset-0 z-1000 flex items-end justify-center bg-black/60 transition-opacity duration-300"
          onClick={() => setIsSortOpen(false)}
        >
          <div
            className="w-full bg-white rounded-t-2xl p-6 shadow-2xl animate-in slide-in-from-bottom duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-100">
              <h2 className="text-[16px] font-black text-gray-900 tracking-tight uppercase">
                Sort By
              </h2>
              <button
                onClick={() => setIsSortOpen(false)}
                className="text-gray-400 p-1 hover:bg-gray-50 rounded-full"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-1">
              {[
                "Popularity",
                "Price -- Low to High",
                "Price -- High to Low",
                "Newest First",
              ].map((sort) => (
                <button
                  key={sort}
                  onClick={() => {
                    setSortBy(sort);
                    setIsSortOpen(false);
                  }}
                  className={`flex items-center justify-between px-2 py-4 text-[14px] font-medium transition-colors border-b border-gray-50 last:border-0 ${
                    sortBy === sort
                      ? "text-[#2874f0]"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {sort}
                  {sortBy === sort && (
                    <div className="w-5 h-5 rounded-full border-4 border-[#2874f0] flex items-center justify-center p-[3px]">
                      <div className="w-full h-full bg-[#2874f0] rounded-full" />
                    </div>
                  )}
                  {sortBy !== sort && (
                    <div className="w-5 h-5 rounded-full border-2 border-gray-200" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MOBILE FILTER MODAL */}
      {isFilterOpen && (
        <div
          className="md:hidden fixed inset-0 z-1000 flex items-end justify-center bg-black/60 transition-opacity duration-300"
          onClick={() => setIsFilterOpen(false)}
        >
          <div
            className="w-full bg-white rounded-t-2xl p-6 shadow-2xl animate-in slide-in-from-bottom duration-300 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-100">
              <h2 className="text-[16px] font-black text-gray-900 tracking-tight uppercase">
                Categories
              </h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="text-gray-400 p-1 hover:bg-gray-50 rounded-full"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setIsFilterOpen(false);
                  }}
                  className={`flex items-center justify-between px-2 py-4 text-[14px] font-medium transition-colors border-b border-gray-50 last:border-0 ${
                    selectedCategory === cat
                      ? "text-[#2874f0]"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {cat}
                  {selectedCategory === cat && (
                    <div className="w-5 h-5 rounded-full border-4 border-[#2874f0] flex items-center justify-center p-[3px]">
                      <div className="w-full h-full bg-[#2874f0] rounded-full" />
                    </div>
                  )}
                  {selectedCategory !== cat && (
                    <div className="w-5 h-5 rounded-full border-2 border-gray-200" />
                  )}
                </button>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setIsFilterOpen(false);
                }}
                className="flex-1 py-3 text-[14px] font-bold text-gray-500 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors uppercase"
              >
                Clear All
              </button>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="flex-1 py-3 text-[14px] font-bold text-white bg-[#2874f0] rounded-lg shadow-md hover:bg-blue-600 transition-colors uppercase"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE SEARCH OVERLAY */}
      {isSearchOpen && (
        <div className="md:hidden fixed inset-0 z-1000 bg-[#f1f3f6] animate-in fade-in duration-200 flex flex-col">
          {/* Search Header */}
          <div className="bg-white px-4 h-[56px] flex items-center gap-4 border-b border-gray-200">
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="text-gray-600 p-1"
            >
              <ArrowLeft size={24} strokeWidth={2} />
            </button>
            <form 
              className="flex-1"
              onSubmit={(e) => {
                e.preventDefault();
                if (localSearchTerm.trim()) {
                  addToHistory(localSearchTerm.trim());
                  router.push(`/more-services?q=${encodeURIComponent(localSearchTerm.trim())}`);
                  setIsSearchOpen(false);
                }
              }}
            >
              <input 
                autoFocus
                type="text"
                value={localSearchTerm}
                onChange={(e) => setLocalSearchTerm(e.target.value)}
                placeholder="Search for Services, IT and More"
                className="w-full text-[15px] outline-none placeholder:text-gray-400 bg-transparent"
              />
            </form>
            {localSearchTerm && (
              <button 
                onClick={() => setLocalSearchTerm("")}
                className="text-gray-400"
              >
                <CloseIcon size={20} strokeWidth={2} />
              </button>
            )}
          </div>

          <div className="flex-1 overflow-y-auto bg-white">
            {/* Recent Searches / History Section */}
            {!localSearchTerm && (
              <div className="mb-4">
                {searchHistory.map((item, idx) => (
                  <div 
                    key={idx}
                    onClick={() => {
                        setLocalSearchTerm(item);
                        router.push(`/more-services?q=${encodeURIComponent(item)}`);
                        setIsSearchOpen(false);
                    }}
                    className="flex items-center justify-between px-5 py-4 border-b border-gray-50 group hover:bg-gray-50 active:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <History size={20} className="text-gray-400" />
                      <span className="text-[14px] text-gray-800">{item}</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFromHistory(item);
                      }}
                      className="p-2 text-gray-300 hover:text-gray-600 active:text-red-500 transition-colors"
                      aria-label="Remove from history"
                    >
                      <CloseIcon size={18} strokeWidth={2.5} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Discover More Section */}
            <div className="p-5 border-t border-gray-100 bg-gray-50/30">
               <h3 className="text-[13px] font-bold text-gray-800 mb-4 tracking-wide uppercase">Discover More</h3>
               <div className="flex flex-wrap gap-2.5">
                 {[
                   "websites", "landing pages", "portfolios", "apps", "SEO", "branding", "hosting", "logo design"
                 ].map((tag) => (
                   <button
                     key={tag}
                     onClick={() => {
                        addToHistory(tag);
                        setLocalSearchTerm(tag);
                        router.push(`/more-services?q=${encodeURIComponent(tag)}`);
                        setIsSearchOpen(false);
                     }}
                     className="px-4 py-2 bg-white border border-gray-200 rounded text-[13px] text-blue-600 font-medium hover:border-blue-200 hover:bg-blue-50 transition-all active:scale-95"
                   >
                     {tag}
                   </button>
                 ))}
               </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default function MoreServicesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#f1f3f6] flex items-center justify-center">
          Loading Services...
        </div>
      }
    >
      <MoreServicesContent />
    </Suspense>
  );
}
