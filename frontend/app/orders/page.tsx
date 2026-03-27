"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Package, Clock, CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";

export default function OrdersPage() {
  const router = useRouter();
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const q = query(
            collection(db, "orders"),
            where("userId", "==", currentUser.uid)
            // Note: If you add orderBy("orderDate", "desc"), you might need a composite index in Firestore.
            // For now, we will sort it client-side to avoid index errors.
          );
          const querySnapshot = await getDocs(q);
          const fetchedOrders = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          
          // Sort client-side descending
          fetchedOrders.sort((a: any, b: any) => {
            const dateA = a.orderDate?.toMillis ? a.orderDate.toMillis() : 0;
            const dateB = b.orderDate?.toMillis ? b.orderDate.toMillis() : 0;
            return dateB - dateA;
          });

          setOrders(fetchedOrders);
        } catch (error) {
          console.error("Error fetching orders:", error);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const formatPrice = (n: number) => "₹" + (n || 0).toLocaleString("en-IN");

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "N/A";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getOrderTime = (timestamp: any) => {
    if (!timestamp) return 0;
    if (timestamp.toMillis) return timestamp.toMillis();
    return new Date(timestamp).getTime();
  };

  const getStatusIcon = (status: string) => {
    switch(status.toLowerCase()) {
      case "paid":
      case "success":
        return <CheckCircle2 className="text-green-500 w-4 h-4" strokeWidth={2.5} />;
      case "failed":
      case "expired":
        return <XCircle className="text-red-500 w-4 h-4" strokeWidth={2.5} />;
      case "cancelled":
        return <AlertCircle className="text-red-400 w-4 h-4" strokeWidth={2.5} />;
      case "awaiting payment":
      default:
        return <Clock className="text-orange-500 w-4 h-4 animate-pulse" strokeWidth={2.5} />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f1f3f6] flex items-center justify-center">
        <p className="text-gray-500 font-medium tracking-wide">Loading Orders...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f1f3f6] pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 shadow-sm sticky top-0 z-10 flex items-center gap-4">
        <button onClick={() => router.back()} className="text-gray-800 focus:outline-none">
          <ArrowLeft size={24} strokeWidth={1.5} />
        </button>
        <h1 className="text-[17px] text-[#212121] font-semibold tracking-wide">
          My Orders
        </h1>
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-4">
        {!user ? (
          <div className="bg-white p-8 rounded-lg text-center shadow-sm">
            <Package size={48} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-lg font-bold text-gray-800 mb-2">Please Login</h2>
            <p className="text-sm text-gray-500 mb-4">You need to be logged in to view your orders.</p>
          </div>
        ) : orders.length === 0 ? (
          <div className="bg-white p-8 rounded-lg text-center shadow-sm">
            <Package size={48} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-lg font-bold text-gray-800 mb-2">No Orders Found</h2>
            <p className="text-sm text-gray-500">Looks like you haven't placed any orders yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => {
              const orderTime = getOrderTime(order.orderDate);
              const now = Date.now();
              const isExpired = now - orderTime > 24 * 60 * 60 * 1000; // 24 hours
              const currentStatus = order.paymentStatus || "pending";
              
              let displayStatus = currentStatus;
              if (currentStatus === "pending") {
                displayStatus = isExpired ? "expired" : "awaiting payment";
              }

              return (
              <div key={order.id} className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 relative overflow-hidden group hover:border-gray-200 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">Order ID</span>
                    <p className="text-sm text-gray-900 font-medium mt-0.5 font-mono">{order.id.toUpperCase()}</p>
                  </div>
                   <div className={`flex items-center gap-2 px-3 py-1 rounded-full border transition-colors ${
                    displayStatus === "paid" || displayStatus === "success" ? "bg-green-50 border-green-200" :
                    displayStatus === "failed" || displayStatus === "cancelled" ? "bg-red-50 border-red-200" :
                    "bg-orange-50 border-orange-200"
                  }`}>
                     <div className={`w-1.5 h-1.5 rounded-full ${
                      displayStatus === "paid" || displayStatus === "success" ? "bg-green-500" :
                      displayStatus === "failed" || displayStatus === "cancelled" ? "bg-red-500" :
                      "bg-orange-500 animate-pulse"
                    }`} />
                     <span className={`text-[10px] font-bold uppercase tracking-wider ${
                      displayStatus === "paid" || displayStatus === "success" ? "text-green-700" :
                      displayStatus === "failed" || displayStatus === "cancelled" ? "text-red-700" :
                      "text-orange-700"
                    }`}>
                      {displayStatus}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pb-4 border-b border-gray-100">
                  <div>
                    <span className="text-xs text-gray-500 font-medium block mb-0.5">Services Ordered</span>
                    <p className="text-[14px] text-gray-800 font-semibold">{order.serviceName || "N/A"}</p>
                  </div>
                  
                  {order.projectDetails && (
                    <div className="bg-gray-50 p-2.5 rounded border border-gray-100">
                      <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest block mb-1">Project Notes</span>
                      <p className="text-[12px] text-gray-600 italic leading-relaxed">"{order.projectDetails}"</p>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs text-gray-500 font-medium block mb-0.5">Order Date</span>
                      <p className="text-[13px] text-gray-800">{formatDate(order.orderDate)}</p>
                    </div>
                    <div className="text-right">
                       <span className="text-xs text-gray-500 font-medium block mb-0.5">Total Amount</span>
                       <p className="text-[14px] text-gray-900 font-bold">{formatPrice(order.amount)}</p>
                    </div>
                  </div>

                  {/* Price Breakdown */}
                  {order.totalMRP && order.totalMRP > order.amount && (
                    <div className="mt-3 pt-3 border-t border-dashed border-gray-100 space-y-1">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-gray-500">Total MRP:</span>
                        <span className="text-gray-400 line-through">{formatPrice(order.totalMRP)}</span>
                      </div>
                      <div className="flex justify-between text-[11px]">
                        <span className="text-gray-500">Discount:</span>
                        <span className="text-green-600 font-bold">- {formatPrice(order.totalMRP - order.amount)}</span>
                      </div>
                    </div>
                  )}
                </div>

                  {/* Additional Info / CTA */}
                {(displayStatus === "success" || displayStatus === "paid") && (
                  <div className="pt-4 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
                        Expected delivery: {order.deliveryTime || "5-7 days"}
                      </p>
                      
                      <button
                        onClick={() => {
                          const printWindow = window.open('', '_blank');
                          if (printWindow) {
                            const mrpVal = order.totalMRP || (order.amount + (order.amount > 10000 ? 5000 : 2000));
                            const discountVal = mrpVal - order.amount;
                            
                            printWindow.document.write(`
                              <html>
                                <head>
                                  <title>Order Receipt - ${order.id}</title>
                                  <style>
                                    body { font-family: sans-serif; padding: 40px; color: #333; }
                                    .header { text-align: center; border-bottom: 2px solid #f0f0f0; padding-bottom: 20px; }
                                    .details { margin: 30px 0; }
                                    .row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #f9f9f9; }
                                    .total { font-weight: bold; font-size: 1.2em; border-top: 2px solid #f0f0f0; margin-top: 20px; padding-top: 10px; }
                                    .footer { margin-top: 50px; text-align: center; color: #888; font-size: 0.9em; }
                                    @media print { .no-print { display: none; } }
                                  </style>
                                </head>
                                <body>
                                  <div class="header">
                                    <h1>WEB DEVELOPMENT AI</h1>
                                    <p>Official Order Receipt</p>
                                  </div>
                                  <div class="details">
                                    <div class="row"><span>Order ID:</span> <b>${order.id.toUpperCase()}</b></div>
                                    <div class="row"><span>Order Date:</span> <b>${formatDate(order.orderDate)}</b></div>
                                    <div class="row"><span>Service:</span> <b>${order.serviceName || 'N/A'}</b></div>
                                    <div class="row"><span>Delivery Time:</span> <b>${order.deliveryTime || '5-7 days'}</b></div>
                                    <br/>
                                    <div class="row" style="border-bottom: 2px solid #eee; margin-top: 10px;"><span><b>CUSTOMER DETAILS</b></span></div>
                                    <div class="row"><span>Name:</span> <b>${order.name || 'N/A'}</b></div>
                                    <div class="row"><span>Email:</span> <b>${order.email || 'N/A'}</b></div>
                                    <div class="row"><span>Phone:</span> <b>${order.phone || 'N/A'}</b></div>
                                    <div class="row"><span>Address:</span> <b>${order.address || 'N/A'}</b></div>
                                    ${order.projectDetails ? `<div class="row"><span>Project Notes:</span> <b>${order.projectDetails}</b></div>` : ''}
                                    <br/>
                                    <div class="row" style="border-bottom: 2px solid #eee; margin-top: 10px;"><span><b>BILLING DETAILS</b></span></div>
                                    <div class="row"><span>Total MRP:</span> <b>${formatPrice(mrpVal)}</b></div>
                                    <div class="row"><span>Discount:</span> <b style="color: green">-${formatPrice(discountVal)}</b></div>
                                    <div class="row total"><span>Net Amount Paid:</span> <b>${formatPrice(order.amount)}</b></div>
                                  </div>
                                  <div class="footer">
                                    <p>Thank you for choosing Web Development AI!</p>
                                    <p>For support, WhatsApp us at: +91 62649 06078</p>
                                  </div>
                                  <script>window.print();</script>
                                </body>
                              </html>
                            `);
                            printWindow.document.close();
                          }
                        }}
                        className="text-[11px] font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 border border-amber-200 px-3 py-1.5 rounded-md hover:bg-amber-50 transition-all font-sans"
                      >
                         <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                        </svg>
                        GET RECEIPT
                      </button>
                    </div>
                  </div>
                )}
                
                {displayStatus === "failed" && (
                  <div className="pt-4">
                    <p className="text-xs text-red-500 font-medium">Payment failed. Please try placing the order again.</p>
                  </div>
                )}

                {displayStatus === "cancelled" && (
                  <div className="pt-4">
                    <p className="text-xs text-red-600 font-medium bg-red-50 px-3 py-2 rounded-md border border-red-100 flex items-center gap-2 shadow-sm">
                       <AlertCircle size={15} className="shrink-0" />
                       Timeout: Payment wasn't completed in 15 minutes. Automatically cancelled.
                    </p>
                  </div>
                )}
              </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
