import { NextResponse } from "next/server";
import crypto from "crypto";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs, updateDoc, doc, serverTimestamp, addDoc } from "firebase/firestore";

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = req.headers.get("x-razorpay-signature");
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

    if (!signature || !secret) {
      console.error("Missing signature or secret");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Verify Signature
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(body)
      .digest("hex");

    if (expectedSignature !== signature) {
      console.error("Invalid signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
    }

    const event = JSON.parse(body);

    // Handle order.paid event
    if (event.event === "order.paid") {
      const order_id = event.payload.order.entity.id;
      const amount = event.payload.order.entity.amount_paid / 100;

      // Find the order in Firestore by razorpayOrderId
      const q = query(
        collection(db, "orders"),
        where("razorpayOrderId", "==", order_id)
      );
      
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const orderDoc = querySnapshot.docs[0];
        const currentData = orderDoc.data();

        // Only update if not already marked as paid
        if (currentData.paymentStatus !== "paid") {
          await updateDoc(doc(db, "orders", orderDoc.id), {
            paymentStatus: "paid",
            paymentDate: serverTimestamp(),
            webhookProcessed: true,
            amount_paid: amount,
          });

          // Optional: Add to payments collection for history
          await addDoc(collection(db, "payments"), {
            orderId: orderDoc.id,
            razorpayOrderId: order_id,
            amount: amount,
            status: "success",
            method: "webhook_order_paid",
            timestamp: serverTimestamp(),
          });
          
          console.log(`Order ${orderDoc.id} confirmed via order.paid Webhook`);
        }
      }
    }

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.error("Webhook Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
