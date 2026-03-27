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
    "AI Web Development Services in India - Premium Custom Websites",
  description:
    "Hire an expert full-stack Next.js developer for your startup or enterprise. We build high-performance, premium custom React websites, integrate AI solutions, and develop scalable eCommerce platforms in India.",
  keywords:
    "premium custom next.js web development in india, professional full stack react developer for startups, enterprise ecommerce website development service india, AI integrated web development agency, smart business web solutions, high-performance server side rendering websites, custom corporate portfolio website builder, premium ui ux web design, scalable nextjs saas development, firebase backend expert developers, professional ai web solutions for businesses, top rated website designer in delhi mumbai bangalore, hire elite next.js developer india",
  authors: [{ name: "Shayar Faizan" }],
  openGraph: {
    title: "Web Development AI - Premium & High-Performance Custom Websites",
    description:
      "Transform your business with lightning-fast, custom-built React and Next.js websites. We offer premium AI integrations, scalable eCommerce setups, and elite development for startups and enterprises in India.",
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
    title: "Web Development AI - Premium Next.js Experts",
    description:
      "Hire elite Next.js web developers in India. Get a high-performance, custom website with AI integrations designed for businesses and startups.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://webdevelopmentai.in',
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
