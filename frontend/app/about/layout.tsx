import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Web Development AI",
  description: "Learn more about Web Development AI, our mission, and our team.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
