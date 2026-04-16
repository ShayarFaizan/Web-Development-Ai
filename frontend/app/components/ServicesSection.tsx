"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  { id: 1, src: "/assets/is1.jpg", label: "E-COMMERCE SOLUTIONS", desc: "Custom online stores with advanced inventory.", href: "/services/ecommerce" },
  { id: 2, src: "/assets/is2.jpg", label: "Blog Website", desc: "SEO-optimized publishing platforms.", href: "/services/blog" },
  { id: 3, src: "/assets/is3.jpg", label: "DIGITAL MARKETING", desc: "Data-driven growth and SEO strategies.", href: "/services/marketing" },
  { id: 4, src: "/assets/is4.jpg", label: "Educational Site", desc: "Interactive learning management systems.", href: "/services/education" },
  { id: 5, src: "/assets/is5.jpg", label: "Business Website", desc: "Professional corporate presence sites.", href: "/services/business" },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-white pt-24 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-[#202124] mb-4">
            Websites we build
          </h2>
          <p className="text-lg text-[#5f6368] max-w-2xl leading-relaxed">
            From simple landing pages to complex e-commerce platforms, we deliver high-performance solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.id} href={service.href} className="group flex flex-col rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden bg-gray-50">
                <Image
                  src={service.src}
                  alt={service.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-[#202124] mb-2 uppercase tracking-wide text-sm font-bold">
                  {service.label}
                </h3>
                <p className="text-[#5f6368] mb-8 flex-1">
                  {service.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-[#1a73e8] font-medium group-hover:underline">
                  Explore solution <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/more-services"
            className="inline-flex items-center justify-center px-10 py-4 border border-gray-200 text-[#1a73e8] font-medium rounded-full hover:bg-gray-50 transition-all"
          >
            See all services
          </Link>
        </div>
      </div>
    </section>
  );
}
