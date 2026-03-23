"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { CheckCircle2 } from "lucide-react";

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || "ORD-XXXXXX";
  const amount = searchParams.get("amount") || "0";
  const mrp = searchParams.get("mrp") || amount;
  const service = searchParams.get("service") || "N/A";
  const delivery = searchParams.get("delivery") || "5–7 days";
  const notes = searchParams.get("notes") || ""; // Added this line
  const discount = parseInt(mrp) - parseInt(amount);

  const formatPrice = (n: string | number) =>
    "₹" + parseInt(String(n)).toLocaleString("en-IN");

  return (
    <div className="min-h-screen bg-[#f4f4f4] flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg border border-gray-100 mt-[70px]">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Payment Successful
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            Thank you for your order! Our team will start working on your project shortly.
          </p>

          <div className="bg-gray-50 rounded-lg p-5 text-left space-y-3 mb-8 border border-gray-100">
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-xs text-gray-500 uppercase font-semibold">Order ID</span>
              <span className="text-sm font-bold text-gray-900 truncate max-w-[150px]" title={orderId}>{orderId}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-xs text-gray-500 uppercase font-semibold">Service</span>
              <span className="text-sm font-bold text-gray-900 truncate max-w-[150px] text-right" title={service}>
                {service}
              </span>
            </div>
            
            {notes && (
              <div className="flex flex-col pb-3 border-b border-gray-200 gap-1">
                <span className="text-xs text-gray-500 uppercase font-semibold">Project Notes</span>
                <span className="text-xs text-gray-700 italic bg-white p-2 rounded border border-gray-100 leading-normal">
                  {notes}
                </span>
              </div>
            )}
            
            {discount > 0 && (
              <>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-xs text-gray-500 uppercase font-semibold">Total MRP</span>
                  <span className="text-sm text-gray-400 line-through">{formatPrice(mrp)}</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-xs text-gray-500 uppercase font-semibold">Total Discount</span>
                  <span className="text-sm text-green-600 font-bold">- {formatPrice(discount)}</span>
                </div>
              </>
            )}

            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-xs text-gray-500 uppercase font-semibold">Amount Paid</span>
              <span className="text-sm font-bold text-gray-900">{formatPrice(amount)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500 uppercase font-semibold">Delivery Time</span>
              <span className="text-sm font-bold text-green-600">{delivery}</span>
            </div>
          </div>

          <button
            onClick={() => window.print()}
            className="w-full mb-4 flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-md text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all print:hidden"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Download / Print Receipt
          </button>

          <div className="space-y-4">
            <a
              href={`https://wa.me/916264906078?text=${encodeURIComponent(
                `Hello WebDev AI Team, \n\nMy Payment is Successful! ✅\n\nOrder Details:\n- Order ID: ${orderId}\n- Service: ${service}\n- Amount: ${formatPrice(amount)}\n${notes ? `- Notes: ${notes}\n` : ""}\nPlease confirm my order and start the process.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-md shadow-sm text-sm font-bold text-white bg-[#25D366] hover:bg-[#128C7E] transition-all"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.228 3.481 8.405c0 6.555-5.332 11.887-11.886 11.887-2.015 0-3.993-.512-5.753-1.488l-6.233 1.713zm5.866-3.405c1.556.924 3.17 1.411 4.838 1.411 5.031 0 9.125-4.094 9.125-9.125 0-2.436-.948-4.726-2.67-6.448-1.721-1.722-4.012-2.67-6.448-2.67-5.031 0-9.124 4.094-9.124 9.125 0 1.748.498 3.453 1.442 4.934l-.944 3.443 3.535-.971l-.104.001zM16.75 13.963c-.272-.136-1.612-.796-1.861-.887-.25-.091-.432-.136-.613.136-.182.273-.705.887-.864 1.069-.159.182-.318.204-.59.068-.272-.136-1.15-.424-2.19-1.352-.81-.722-1.356-1.613-1.515-1.886-.159-.273-.017-.42.119-.554.123-.122.272-.318.408-.477.136-.159.182-.272.272-.455.091-.182.045-.341-.023-.477-.068-.136-.613-1.477-.841-2.022-.222-.53-.446-.456-.613-.456h-.523c-.182 0-.477.068-.727.341-.25.273-.954.932-.954 2.273 0 1.341.977 2.636 1.114 2.818.136.182 1.92 2.932 4.653 4.114 2.733 1.182 2.733.795 3.23.75.497-.045 1.611-.659 1.838-1.295.228-.636.228-1.182.159-1.295-.068-.113-.25-.181-.522-.317z"/>
              </svg>
              Share on WhatsApp for Faster Support
            </a>

            <div className="pt-4 border-t border-gray-100">
              <p className="text-[12px] text-gray-500 mb-2 font-medium">For any help, WhatsApp us at:</p>
              <a 
                href="tel:+916264906078"
                className="text-[16px] font-bold text-gray-900 hover:text-amber-600 transition-colors"
              >
                +91 62649 06078
              </a>
            </div>

            <Link
              href="/"
              className="w-full flex justify-center py-3 px-4 border border-gray-200 rounded-md shadow-sm text-sm font-bold uppercase tracking-widest text-gray-600 hover:bg-gray-50 transition-all mt-4"
            >
              Go back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <OrderSuccessContent />
    </Suspense>
  );
}
