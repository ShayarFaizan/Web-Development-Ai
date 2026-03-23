import { serviceCards } from "@/lib/servicesData";
import PlanDetailClient from "./client-page";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// 1. Static Parameter Generation (SSG)
export async function generateStaticParams() {
  return serviceCards.map((card) => ({
    id: card.id.toString(),
  }));
}

// 2. Metadata Generation (SEO Optimized)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const card = serviceCards.find((c) => c.id.toString() === id);

  if (!card) return { title: "Plan Not Found" };

  return {
    title: `${card.title} | AI Web Development Services in India`,
    description: `Get your ${card.title} starting at ${card.price}. Specialized in professional AI web development solutions and 1-second load time websites for businesses in India.`,
    keywords: `${card.title}, AI web design, affordable website India, Next.js developer, business website, ${card.category}, web development ai`,
    openGraph: {
      title: `${card.title} - Top Rated AI Web Solutions`,
      description: `Premium ${card.category} service by Web Development AI India. Affordable and high-performance websites.`,
      images: [card.image],
    },
  };
}

// 3. Main Server Component
export default async function PlanDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const card = serviceCards.find((c) => c.id.toString() === id);

  if (!card) {
    notFound();
  }

  return <PlanDetailClient card={card} id={id} />;
}
