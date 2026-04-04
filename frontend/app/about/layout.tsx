import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Web Developer Bilaspur | About Us — Web Development AI",
  description:
    "Bilaspur ka best freelance web developer — Shayar Faizan. Hum Chhattisgarh ke local businesses ko affordable, high-performance websites banate hain. ₹9,999 se shuru. About our team, mission, aur work process jaano.",
  keywords:
    "freelance web developer Bilaspur, hire web developer Bilaspur, best web developer Bilaspur Chhattisgarh, web developer about page, web development AI about us",
  alternates: {
    canonical: "https://webdevelopmentai.in/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
