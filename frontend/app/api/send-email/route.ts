import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, serviceName, amount, orderId } = data;

    // TODO: In a real-world scenario, you would integrate EmailJS, SendGrid, or Nodemailer here.
    // E.g., using SendGrid:
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send(msg);

    console.log(`\n================= EMAIL SYSTEM =================`);
    console.log(`Sending order confirmation email to CUSTOMER: ${email}`);
    console.log(`SUBJECT: Your Order Has Been Confirmed`);
    console.log(`BODY: 
Hello ${name},

Thank you for choosing Web Development AI.
Your order has been successfully placed.

Order Details:
Order ID: ${orderId}
Service Name: ${serviceName}
Amount Paid: ₹${amount}
Estimated Delivery Time: 5-7 days

Our team will start working on your project shortly.
If you have any questions feel free to contact us.

Regards,
Web Development AI`);
    console.log(`-------------------------------------------------`);
    
    console.log(`Sending order notification email to ADMIN`);
    console.log(`SUBJECT: New Order Received`);
    console.log(`BODY:
New order received.

Customer Name: ${name}
Email: ${email}
Phone: ${phone}
Service Ordered: ${serviceName}
Amount Paid: ₹${amount}
Order ID: ${orderId}`);
    console.log(`=================================================\n`);

    return NextResponse.json({ success: true, message: "Emails scheduled successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
