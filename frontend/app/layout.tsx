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
    "Website Developer in Bilaspur | Web Development Company Chhattisgarh — webdevelopmentai.in",
  description:
    "Best website developer in Bilaspur, Chhattisgarh. ₹9,999 se shuru — affordable website development, ecommerce website, landing page, aur Next.js business sites. As a leading web development company Bilaspur, 13–21 din mein ready. Website banwana ho to abhi contact karo.",
  keywords:
    "website developer in Bilaspur, web development company Bilaspur, website banane wala Bilaspur, website designer near me Bilaspur, affordable website development Bilaspur, website banane ka kharcha Bilaspur, website development cost Bilaspur 2026, cheap website designer Bilaspur, website development price Chhattisgarh, ecommerce website developer Bilaspur, Next.js developer Bilaspur, business website Bilaspur Chhattisgarh, landing page banana hai Bilaspur, portfolio website developer Bilaspur, best web developer Bilaspur, hire web developer Bilaspur, freelance web developer Bilaspur, Google pe website kaise aaye Bilaspur, website maintenance service Bilaspur, web development agency Chhattisgarh",
  authors: [{ name: "Shayar Faizan" }],
  metadataBase: new URL("https://webdevelopmentai.in"),
  openGraph: {
    title:
      "Website Developer in Bilaspur | Affordable Web Development — webdevelopmentai.in",
    description:
      "Bilaspur ka best website developer. ₹9,999 se shuru, 13–21 din delivery. Ecommerce, landing page, business website — sab kuch ek jagah. Chhattisgarh ke local businesses ke liye specialist.",
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
    title: "Website Developer in Bilaspur | Web Development AI",
    description:
      "Bilaspur mein best website developer. ₹9,999 mein professional business website, ecommerce, aur landing page banwao. Hire karo aaj — 13–21 din delivery.",
  },
  icons: {
    icon: "/assets/NextGen Website Developer2.png",
    shortcut: "/assets/NextGen Website Developer2.png",
    apple: "/assets/NextGen Website Developer2.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://webdevelopmentai.in",
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
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TSP7SDC8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

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

        {/* Google Tag Manager (script) */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TSP7SDC8');
            `,
          }}
        />

        <AppProvider>
          <GoogleOneTap />
          <Navbar />
          <WhatsAppButton />
          <main className="pt-[110px] md:pt-[92px]">{children}</main>
          <SpeedInsights />
          <Analytics />
        </AppProvider>
      </body>
    </html>
  );
}
