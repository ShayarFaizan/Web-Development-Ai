"use client";

import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db, auth } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import {
  Plus,
  Edit2,
  Trash2,
  Image as ImageIcon,
  Tag,
  DollarSign,
  Link as LinkIcon,
  FileText,
  Save,
  X,
  LayoutDashboard,
  Settings,
  ArrowLeft,
  Package,
} from "lucide-react";

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

export default function AdminPanel() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Form State
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    price: "",
    description: "",
    image: "",
    link: "",
  });

  // Hero Section State
  const [activeTab, setActiveTab] = useState<"blogs" | "settings" | "orders">(
    "blogs",
  );
  const [orders, setOrders] = useState<any[]>([]);
  const [heroData, setHeroData] = useState({
    pageSubtitle: "Web Development 2026",
    pageTitle:
      "Next.js & Node.js Services 2026: Setting the new standard in business",
    subtitle: "Full-Stack Overview",
    title:
      "Comprehensive Web Solutions: Highlighting the most demanded features and prices",
    description:
      "At our agency, our goal has always been to build high-performance, scalable web applications that drive real business growth.",
    image: "/blog/next.js.png",
    buttonText: "Read article",
    buttonLink: "#services",
  });

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    const blogsQuery = query(
      collection(db, "blogs"),
      orderBy("createdAt", "desc"),
    );
    const unsubscribeBlogs = onSnapshot(blogsQuery, (snapshot) => {
      const blogsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Blog[];
      setBlogs(blogsData);
    });

    // Fetch Hero Data
    const unsubscribeHero = onSnapshot(
      doc(db, "siteConfig", "blogHero"),
      (docSnap) => {
        if (docSnap.exists()) {
          setHeroData(docSnap.data() as any);
        }
      },
    );

    // Fetch Orders Data
    const ordersQuery = query(
      collection(db, "orders"),
      orderBy("orderDate", "desc"),
    );
    const unsubscribeOrders = onSnapshot(ordersQuery, (snapshot) => {
      const ordersData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrders(ordersData);
    });

    return () => {
      unsubscribeAuth();
      unsubscribeBlogs();
      unsubscribeHero();
      unsubscribeOrders();
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditing && editId) {
        await updateDoc(doc(db, "blogs", editId), {
          ...formData,
          updatedAt: serverTimestamp(),
        });
        alert("Blog updated successfully!");
      } else {
        await addDoc(collection(db, "blogs"), {
          ...formData,
          createdAt: serverTimestamp(),
        });
        alert("Blog added successfully!");
      }
      resetForm();
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("Error saving blog. Check console.");
    }
  };

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await setDoc(
        doc(db, "siteConfig", "blogHero"),
        {
          ...heroData,
          updatedAt: serverTimestamp(),
        },
        { merge: true },
      );
      alert("Hero section updated successfully!");
    } catch (error) {
      console.error("Error updating hero:", error);
      alert("Error updating hero. Check console.");
    }
  };

  const resetForm = () => {
    setFormData({
      category: "",
      title: "",
      price: "",
      description: "",
      image: "",
      link: "",
    });
    setIsEditing(false);
    setEditId(null);
  };

  const handleEdit = (blog: Blog) => {
    setFormData({
      category: blog.category,
      title: blog.title,
      price: blog.price,
      description: blog.description,
      image: blog.image,
      link: blog.link,
    });
    setIsEditing(true);
    setEditId(blog.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await deleteDoc(doc(db, "blogs", id));
        alert("Deleted successfully!");
      } catch (error) {
        console.error("Error deleting:", error);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#D4AF37]"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
          <LayoutDashboard className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Admin Access Required
          </h2>
          <p className="text-gray-600 mb-6">
            Please log in from the main website to access this panel.
          </p>
          <a
            href="/"
            className="inline-block text-black px-8 py-3 rounded-full font-semibold transition-all hover:shadow-xl hover:scale-[1.02] cursor-pointer"
            style={{
              background: "linear-gradient(90deg, #e3bc7c, #fef1cd, #d4a75c)",
            }}
          >
            Go to Website
          </a>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 font-sans pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 flex items-center gap-3">
              <LayoutDashboard className="text-[#D4AF37]" />
              Blog Admin Panel
            </h1>
            <p className="text-gray-500 mt-1">
              Manage your blog posts and services dynamically
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white p-1 rounded-xl shadow-sm border border-gray-100">
            <button
              onClick={() => setActiveTab("blogs")}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${activeTab === "blogs" ? "text-black shadow-md" : "text-gray-600 hover:bg-gray-50"}`}
              style={
                activeTab === "blogs"
                  ? {
                      background:
                        "linear-gradient(90deg, #e3bc7c, #fef1cd, #d4a75c)",
                    }
                  : {}
              }
            >
              <LayoutDashboard size={16} /> Blogs
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${activeTab === "settings" ? "text-black shadow-md" : "text-gray-600 hover:bg-gray-50"}`}
              style={
                activeTab === "settings"
                  ? {
                      background:
                        "linear-gradient(90deg, #e3bc7c, #fef1cd, #d4a75c)",
                    }
                  : {}
              }
            >
              <Settings size={16} /> Hero Section
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${activeTab === "orders" ? "text-black shadow-md" : "text-gray-600 hover:bg-gray-50"}`}
              style={
                activeTab === "orders"
                  ? {
                      background:
                        "linear-gradient(90deg, #e3bc7c, #fef1cd, #d4a75c)",
                    }
                  : {}
              }
            >
              <Package size={16} /> All Orders
            </button>
          </div>

          <div className="flex items-center gap-4 bg-white p-2 rounded-xl shadow-sm border border-gray-100 ml-auto">
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt="Admin"
                className="w-10 h-10 rounded-full"
              />
            )}
            <div>
              <p className="text-sm font-semibold text-gray-800">
                {user.displayName || "Admin"}
              </p>
              <p className="text-xs text-green-600 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Authorized
              </p>
            </div>
          </div>
        </div>

        {activeTab === "blogs" ? (
          <>
            {/* Form Section */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-12">
              <h3 className="text-xl font-bold text-gray-800 mb-8 flex items-center gap-2">
                {isEditing ? (
                  <Edit2 className="w-5 h-5 text-[#D4AF37]" />
                ) : (
                  <Plus className="w-5 h-5 text-[#D4AF37]" />
                )}
                {isEditing ? "Edit Blog Post" : "Add New Blog / Service"}
              </h3>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Tag className="w-4 h-4" /> Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    placeholder="e.g. NEXT.JS FRONTEND"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all cursor-pointer"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <FileText className="w-4 h-4" /> Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Blog Title"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all cursor-pointer"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" /> Price Info
                  </label>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="Starts at $2,500 / ₹2,00,000"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <ImageIcon className="w-4 h-4" /> Image URL
                  </label>
                  <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    placeholder="/blog/image.png or external link"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all cursor-pointer"
                    required
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <FileText className="w-4 h-4" /> Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Write a brief description..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all resize-none cursor-pointer"
                    required
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <LinkIcon className="w-4 h-4" /> Destination Link
                  </label>
                  <input
                    type="text"
                    name="link"
                    value={formData.link}
                    onChange={handleInputChange}
                    placeholder="#"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all cursor-pointer"
                    required
                  />
                </div>

                <div className="md:col-span-2 flex items-center gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 text-black font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                    style={{
                      background:
                        "linear-gradient(90deg, #e3bc7c, #fef1cd, #d4a75c)",
                    }}
                  >
                    <Save className="w-5 h-5" />
                    {isEditing ? "Update Post" : "Save Blog Post"}
                  </button>
                  {isEditing && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-6 py-4 rounded-xl border border-gray-200 font-bold text-gray-600 hover:bg-gray-50 flex items-center gap-2 cursor-pointer"
                    >
                      <X className="w-5 h-5" /> Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* List Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Existing Blogs ({blogs.length})
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {blogs.length === 0 ? (
                  <div className="bg-white p-12 text-center rounded-3xl border border-dashed border-gray-300">
                    <p className="text-gray-400">
                      No blogs found in the database. Add your first one!
                    </p>
                  </div>
                ) : (
                  blogs.map((blog) => (
                    <div
                      key={blog.id}
                      className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-6 hover:shadow-md transition-shadow group cursor-pointer"
                    >
                      <div className="w-full md:w-32 h-24 bg-gray-100 rounded-xl overflow-hidden shrink-0">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "https://placehold.co/400x300?text=No+Image";
                          }}
                        />
                      </div>

                      <div className="flex-1 min-w-0 text-center md:text-left">
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] bg-amber-50 px-2 py-0.5 rounded-md">
                            {blog.category}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 truncate">
                          {blog.title}
                        </h4>
                        <p className="text-sm text-gray-500 line-clamp-1">
                          {blog.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => handleEdit(blog)}
                          className="p-3 rounded-xl bg-amber-50 text-amber-600 hover:bg-amber-100 transition-colors cursor-pointer"
                          title="Edit"
                        >
                          <Edit2 className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(blog.id)}
                          className="p-3 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition-colors cursor-pointer"
                          title="Delete"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </>
        ) : activeTab === "orders" ? (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-gray-800">
                Customer Orders & Payments ({orders.length})
              </h3>
              <div className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full border border-green-200 uppercase tracking-widest">
                Live View
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {orders.length === 0 ? (
                <div className="lg:col-span-3 bg-white p-12 text-center rounded-2xl border border-dashed border-gray-200">
                  <Package className="w-10 h-10 text-gray-100 mx-auto mb-3" />
                  <p className="text-gray-400 text-sm">No orders yet.</p>
                </div>
              ) : (
                orders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:border-[#D4AF37]/50 transition-all flex flex-col"
                  >
                    <div className="p-4 flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <div className="space-y-0.5">
                          <span className="text-[9px] font-bold text-[#D4AF37] uppercase tracking-widest block">
                            ID: {order.id.slice(-6).toUpperCase()}
                          </span>
                          <h4 className="text-sm font-bold text-gray-900 leading-tight">
                            {order.name}
                          </h4>
                          <div className="flex flex-col text-[11px] text-gray-500 mt-1">
                            <span className="truncate max-w-[150px]">
                              {order.email}
                            </span>
                            <span className="font-bold text-gray-700">
                              {order.phone}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                           <span
                            className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest border inline-block mb-1 ${
                              order.paymentStatus === "paid" ||
                              order.paymentStatus === "success"
                                ? "bg-green-50 text-green-600 border-green-100"
                                : order.paymentStatus === "cancelled" ||
                                  order.paymentStatus === "failed"
                                ? "bg-red-50 text-red-600 border-red-100"
                                : "bg-orange-50 text-orange-600 border-orange-100"
                            }`}
                          >
                            {(() => {
                              const status = order.paymentStatus || "pending";
                              // Show "expired" if pending and older than 24h
                              if (status === "pending" && order.orderDate) {
                                const orderTime = new Date(
                                  order.orderDate.seconds * 1000,
                                ).getTime();
                                const now = new Date().getTime();
                                if (now - orderTime > 24 * 60 * 60 * 1000) {
                                  return "expired";
                                }
                              }
                              return status;
                            })()}
                          </span>
                          <p className="text-base font-black text-gray-900 mt-1">
                            ₹{(order.amount || 0).toLocaleString("en-IN")}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3 pt-3 border-t border-gray-50">
                        <div>
                          <h5 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                            Service Selection
                          </h5>
                          <p className="text-[11px] font-bold text-gray-800 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100 leading-snug">
                            {order.serviceName}
                          </p>
                        </div>

                        <div className="bg-[#D4AF37]/5 px-3 py-2 rounded-lg border border-[#D4AF37]/10">
                          <h5 className="text-[9px] font-bold text-[#D4AF37] uppercase tracking-widest mb-1">
                            Project Notes
                          </h5>
                          <p className="text-[11px] text-gray-700 leading-relaxed italic">
                            {order.projectDetails
                              ? `"${order.projectDetails}"`
                              : "None provided."}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 border-t border-gray-50 bg-gray-50/50">
                      <a
                        href={`tel:${order.phone}`}
                        className="py-2.5 text-center text-[10px] font-black text-gray-600 hover:bg-white transition-colors uppercase tracking-widest border-r border-gray-100"
                      >
                        CALL
                      </a>
                      <a
                        href={`https://wa.me/${order.phone.replace(/\D/g, "")}`}
                        target="_blank"
                        className="py-2.5 text-center text-[10px] font-black text-[#25D366] hover:bg-white transition-colors uppercase tracking-widest"
                      >
                        WHATSAPP
                      </a>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-12">
            <h3 className="text-xl font-bold text-gray-800 mb-8 flex items-center gap-2">
              <Settings className="w-5 h-5 text-[#D4AF37]" />
              Edit Blog Hero & Header
            </h3>

            <form
              onSubmit={handleHeroSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Page Header Section */}
              <div className="md:col-span-2 border-b border-gray-100 pb-4 mb-2">
                <h4 className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider">
                  Top Page Header
                </h4>
                <p className="text-xs text-gray-400">
                  The very first text people see when landing on the blog page.
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Top Small Text (Header)
                </label>
                <input
                  type="text"
                  value={heroData.pageSubtitle}
                  onChange={(e) =>
                    setHeroData({ ...heroData, pageSubtitle: e.target.value })
                  }
                  placeholder="Web Development 2026"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] outline-none cursor-pointer"
                  required
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-gray-700">
                  Main Large Title (Header)
                </label>
                <textarea
                  value={heroData.pageTitle}
                  onChange={(e) =>
                    setHeroData({ ...heroData, pageTitle: e.target.value })
                  }
                  rows={2}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] outline-none resize-none cursor-pointer"
                  required
                />
              </div>

              {/* Spotlight Section */}
              <div className="md:col-span-2 border-b border-gray-100 pb-4 mt-6 mb-2">
                <h4 className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider">
                  Spotlight Section (Hero)
                </h4>
                <p className="text-xs text-gray-400">
                  The section with the large AI image and detailed description.
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Tag className="w-4 h-4" /> Golden Subtitle
                </label>
                <input
                  type="text"
                  value={heroData.subtitle}
                  onChange={(e) =>
                    setHeroData({ ...heroData, subtitle: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] outline-none cursor-pointer"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Main Title
                </label>
                <input
                  type="text"
                  value={heroData.title}
                  onChange={(e) =>
                    setHeroData({ ...heroData, title: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] outline-none cursor-pointer"
                  required
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Description
                </label>
                <textarea
                  value={heroData.description}
                  onChange={(e) =>
                    setHeroData({ ...heroData, description: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] outline-none resize-none cursor-pointer"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <ImageIcon className="w-4 h-4" /> Hero Image URL
                </label>
                <input
                  type="text"
                  value={heroData.image}
                  onChange={(e) =>
                    setHeroData({ ...heroData, image: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] outline-none cursor-pointer"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <LinkIcon className="w-4 h-4" /> Button Text
                </label>
                <input
                  type="text"
                  value={heroData.buttonText}
                  onChange={(e) =>
                    setHeroData({ ...heroData, buttonText: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] outline-none cursor-pointer"
                  required
                />
              </div>

              <div className="md:col-span-2 pt-4">
                <button
                  type="submit"
                  className="w-full text-black font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                  style={{
                    background:
                      "linear-gradient(90deg, #e3bc7c, #fef1cd, #d4a75c)",
                  }}
                >
                  <Save className="w-5 h-5" />
                  Save Changes to Website
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
