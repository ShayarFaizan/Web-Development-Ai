import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // Check path
import GoogleOneTap from "./components/GoogleOneTap";
import WhatsAppButton from "./components/WhatsAppButton";
import { AppProvider } from "@/app/context/AppContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "AI Web Development Services in India - Best AI Website Builder for Business",
  description:
    "Get a professional website with 1-second load time. Specialized in Next.js and AI-powered solutions for your business. Best AI Web Development Agency in India offering low-cost web design.",
  keywords:
    "Best Web Development Company in India, Digital Visiting Card Maker, Smart Business Card Online, Ecommerce Website Development Service, Portfolio Website Builder for Students, Low Cost Website Design India, Next.js Web Development Services, React JS Website Development, Fastest Website Builder 2026, AI Powered Website Design, Firebase Backend Integration, Server Side Rendering (SSR) Websites, Web Developer near me, Website Designer in Delhi, Website Designer in Mumbai, Website Designer in Bangalore, Freelance Web Developer India, web development ai, AI integrated website, AI chatbot setup, affordable web design india, sasta website developer, website under 7000, website under 10000, next.js expert, react developer, mern stack developer",
  authors: [{ name: "Shayar Faizan" }],
  openGraph: {
    title: "Web Development AI - Leading AI Web Agency in India",
    description:
      "Transform your business with 1-second load time websites. Specialized in Next.js, AI solutions, and high-performance E-commerce apps.",
    url: "https://webdevelopmentai.in",
    siteName: "Web Development AI",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development AI - Top AI Web Development Services",
    description:
      "Get a professional website with 1-second load time. Specialized in Next.js and AI solutions for your business.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-Q9DVK16NK3`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q9DVK16NK3');
            `,
          }}
        />
        <AppProvider>
          <GoogleOneTap />
          <Navbar />
          <WhatsAppButton />
          <main className="pt-0 md:pt-[92px]">{children}</main>
          <SpeedInsights />
          <Analytics />
        </AppProvider>
      </body>
    </html>
  );
}
