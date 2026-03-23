import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, LayoutGrid, ExternalLink } from "lucide-react";
import portfolioData from "../components/portfolioData.json";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white pt-[60px] md:pt-[90px] pb-32 md:pb-10 px-4 sm:px-6 relative overflow-x-hidden font-sans">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-linear-to-b from-[#1a150e] to-transparent pointer-events-none z-0" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#d4a75c] rounded-full blur-[150px] opacity-10 z-0" />
      <div className="absolute top-40 -left-20 w-72 h-72 bg-[#e3bc7c] rounded-full blur-[120px] opacity-10 z-0" />

      <div className="max-w-7xl mx-auto relative z-10 w-full animate-fade-in-up">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#d4a75c] transition-colors duration-200 font-medium text-sm border border-white/10 px-4 py-2 rounded-full hover:bg-white/5 bg-[#111] mb-8 w-fit"
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-linear-to-r from-[#d4a75c]/20 to-transparent border border-[#d4a75c]/30 text-[#e3bc7c] text-xs font-semibold tracking-widest uppercase mb-4 w-fit">
              <LayoutGrid size={14} />
              <span>Our Portfolio</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Featured <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#e3bc7c] via-[#fef1cd] to-[#d4a75c]">
                Projects & Work
              </span>
            </h1>
          </div>

          <p className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed">
            Explore our diverse collection of web projects, ranging from elegant
            landing pages to complex e-commerce solutions and custom web
            applications.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {portfolioData.map((project: any, idx) => (
            <a
              key={idx}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#d4a75c]/50 hover:shadow-[0_0_30px_rgba(212,167,92,0.15)] active:scale-[0.98]"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-16/10 overflow-hidden bg-white/5">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-[#1a1a1a] to-[#0d0d0d]">
                    <span className="text-2xl font-bold text-gray-700 tracking-widest uppercase group-hover:text-[#d4a75c] transition-colors">
                      {project.label || "PROJECT"}
                    </span>
                  </div>
                )}

                {/* Overlay with Icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#d4a75c] text-black flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                    <ExternalLink size={20} strokeWidth={2.5} />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-[17px] font-bold text-white group-hover:text-[#e3bc7c] transition-colors line-clamp-1">
                  {project.label}
                </h3>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[11px] text-gray-500 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#d4a75c]" />
                    View Live Project
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Custom Styles for Animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `,
        }}
      />
    </div>
  );
}
