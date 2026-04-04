import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce Website Developer Bilaspur | Online Store Banwao — webdevelopmentai.in",
  description:
    "Bilaspur mein ecommerce website banwani hai? ₹48,999 se shuru — payment gateway, admin panel, mobile-first design ke saath. Kirana, kapde, supplement, food — sabke liye Next.js powered online store.",
  keywords:
    "ecommerce website developer Bilaspur, online store Bilaspur, ecommerce website Chhattisgarh, ecommerce website development cost Bilaspur, website developer in Bilaspur, payment gateway Bilaspur, kirana store website Bilaspur, buy online store Chhattisgarh",
  alternates: {
    canonical: "https://webdevelopmentai.in/ecommerce-website-bilaspur",
  },
  openGraph: {
    title: "Ecommerce Website Developer Bilaspur | Online Store — webdevelopmentai.in",
    description:
      "Bilaspur mein best ecommerce developer. ₹48,999 se shuru — payment gateway, admin panel, fast delivery. Abhi quote maango.",
    url: "https://webdevelopmentai.in/ecommerce-website-bilaspur",
    siteName: "Web Development AI",
    locale: "hi_IN",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
