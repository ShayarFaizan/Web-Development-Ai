import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Petrol Pump, Kirana, Clinic — Chhattisgarh Local Business Website Guide | webdevelopmentai.in",
  description:
    "Chhattisgarh ke petrol pump, kirana store, clinic, auto repair aur beauty parlour ke liye website guide. Landing page banana hai? ₹9,999 se shuru. Website maintenance service Bilaspur bhi available.",
  keywords:
    "landing page banana hai Bilaspur, website maintenance service Bilaspur, local business website Chhattisgarh, petrol pump website Bilaspur, kirana store website, clinic website Bilaspur, affordable website development Bilaspur",
  alternates: {
    canonical: "https://webdevelopmentai.in/blog/chhattisgarh-local-business-website-guide",
  },
  openGraph: {
    title: "Petrol Pump, Kirana, Clinic — Chhattisgarh Local Business Website Guide",
    description:
      "Bilaspur ke local businesses ke liye website guide. Petrol pump se leke beauty parlour tak — har niche ke liye blueprint.",
    url: "https://webdevelopmentai.in/blog/chhattisgarh-local-business-website-guide",
    siteName: "Web Development AI",
    locale: "hi_IN",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
