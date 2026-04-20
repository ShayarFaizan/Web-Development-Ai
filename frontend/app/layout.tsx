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
    "Website Developer in Bilaspur, Raipur, Indore, Bhopal, Nagpur | Web Development Company Chhattisgarh, MP & Maharashtra — webdevelopmentai.in",
  description:
    "Best website developer in Bilaspur, Raipur, Indore, Bhopal, Nagpur, Chhattisgarh, Madhya Pradesh & Maharashtra. ₹9,999 se shuru — affordable website development, ecommerce website, landing page, aur Next.js business sites. Best web development agency. Website banwana ho to abhi contact karo.",
  keywords:
    "website developer in Bilaspur, website developer in Raipur, website developer in Indore, website developer in Bhopal, website developer in Nagpur, web development company Chhattisgarh, website developer Chhattisgarh, website developer Madhya Pradesh, website developer Maharashtra, website designer Indore, website designer Nagpur, website designer Bhopal, website development Madhya Pradesh, website designer Raipur, website development Raipur, website banane wala Bilaspur, website designer near me, affordable website development, website banane ka kharcha, website development cost 2026, cheap website designer, website development price, ecommerce website developer, Next.js developer, business website, landing page banana hai, portfolio website developer, best web developer, hire web developer, freelance web developer, Google pe website kaise aaye, website maintenance service, web development agency, MP website development, Maharashtra website development",
  authors: [{ name: "Shayar Faizan" }],
  metadataBase: new URL("https://webdevelopmentai.in"),
  openGraph: {
    title:
      "Website Developer in Bilaspur & Raipur | Affordable Web Development — webdevelopmentai.in",
    description:
      "Bilaspur, Raipur aur Chhattisgarh ka best website developer. ₹9,999 se shuru, 13–21 din delivery. Ecommerce, landing page, business website — sab kuch ek jagah. Contact: +91 62649 06078",
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
    title: "Website Developer in Bilaspur, Raipur & Chhattisgarh | Web Development AI",
    description:
      "Bilaspur, Raipur aur Chhattisgarh mein best website developer. ₹9,999 mein professional business website, ecommerce, aur landing page banwao. Hire karo aaj.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Web Development AI",
    "image": "https://webdevelopmentai.in/assets/NextGen%20Website%20Developer2.png",
    "@id": "https://webdevelopmentai.in",
    "url": "https://webdevelopmentai.in",
    "telephone": "+91 62649 06078",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bilaspur City",
      "addressLocality": "Bilaspur",
      "addressRegion": "Chhattisgarh",
      "postalCode": "495001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.0797,
      "longitude": 82.1409
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Bilaspur"
      },
      {
        "@type": "City",
        "name": "Raipur"
      },
      {
        "@type": "City",
        "name": "Indore"
      },
      {
        "@type": "City",
        "name": "Bhopal"
      },
      {
        "@type": "City",
        "name": "Jabalpur"
      },
      {
        "@type": "City",
        "name": "Gwalior"
      },
      {
        "@type": "State",
        "name": "Chhattisgarh"
      },
      {
        "@type": "State",
        "name": "Madhya Pradesh"
      },
      {
        "@type": "City",
        "name": "Nagpur"
      },
      {
        "@type": "State",
        "name": "Maharashtra"
      }
    ],
    "priceRange": "INR 9999+",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/webdevelopmentai",
      "https://www.instagram.com/webdevelopmentai"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
