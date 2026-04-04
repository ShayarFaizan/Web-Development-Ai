import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Se Website Banana Bilaspur | Best Web Developer Bilaspur — webdevelopmentai.in",
  description:
    "Bilaspur ka best Next.js developer AI-powered workflow se websites banata hai — woh kaam 13–21 din mein jo doosron ko months lagte hain. Best web developer Bilaspur dhundh rahe ho? Yeh padhlo pehle.",
  keywords:
    "best web developer Bilaspur, Next.js developer Bilaspur, AI website development Bilaspur, hire web developer Bilaspur, website developer in Bilaspur, Google pe website kaise aaye Bilaspur, web development company Bilaspur",
  alternates: {
    canonical: "https://webdevelopmentai.in/blog/ai-se-website-banana-bilaspur",
  },
  openGraph: {
    title: "AI Se Website Banana Bilaspur | Next.js Developer Bilaspur",
    description:
      "Bilaspur ka best Next.js developer — AI workflow se 13–21 din mein premium website. Best web developer dhundh rahe ho? Yahi sahi jagah hai.",
    url: "https://webdevelopmentai.in/blog/ai-se-website-banana-bilaspur",
    siteName: "Web Development AI",
    locale: "hi_IN",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
