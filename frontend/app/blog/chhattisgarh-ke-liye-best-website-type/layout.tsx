import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chhattisgarh ke Liye Best Website Type | Static vs Dynamic vs Ecommerce — webdevelopmentai.in",
  description:
    "Chhattisgarh ke small businesses ke liye kaunsa website type best hai? Static, Dynamic ya Ecommerce — is guide mein decide karo. Business website Bilaspur Chhattisgarh ke liye best option dhundh rahe ho? Yahan clear answer milega.",
  keywords:
    "business website Bilaspur Chhattisgarh, best website type Chhattisgarh, static vs dynamic website Bilaspur, ecommerce website developer Bilaspur, website development price Chhattisgarh, small business website Chhattisgarh",
  alternates: {
    canonical: "https://webdevelopmentai.in/blog/chhattisgarh-ke-liye-best-website-type",
  },
  openGraph: {
    title: "Chhattisgarh ke Liye Best Website Type | Static vs Dynamic vs Ecommerce",
    description:
      "Kaunsa website type aapke business ke liye sahi hai? Chhattisgarh ke local businesses ke liye complete guide.",
    url: "https://webdevelopmentai.in/blog/chhattisgarh-ke-liye-best-website-type",
    siteName: "Web Development AI",
    locale: "hi_IN",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
