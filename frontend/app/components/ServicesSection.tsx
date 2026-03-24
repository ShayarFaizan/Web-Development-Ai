"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  { id: 1, src: "/assets/is1.jpg", label: "E-COMMERCE SOLUTIONS" },
  { id: 2, src: "/assets/is2.jpg", label: "Blog Website" },
  { id: 3, src: "/assets/is3.jpg", label: "DIGITAL MARKETING" },
  { id: 4, src: "/assets/is4.jpg", label: "Educational Site" },
  { id: 5, src: "/assets/is5.jpg", label: "Business Website" },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-[#f4f4f4] py-10 md:py-14">
      {/* Heading */}
      <h2 className="text-center text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-gray-800 mb-8 md:mb-10 px-4">
        Website Types <span className="text-gray-900">We Build-</span>
      </h2>

      {/* ── DESKTOP: Accordion Row ── */}
      <div className="hidden md:flex gap-2 px-6 lg:px-10 xl:px-16 h-[360px] lg:h-[400px]">
        {services.map((service, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={service.id}
              onMouseEnter={() => setActiveIndex(index)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer
                          transition-all duration-500 ease-in-out
                          ${isActive ? "flex-[3.5]" : "flex-1"}`}
            >
              {/* Image with zoom on active */}
              <div
                className={`absolute inset-0 transition-transform duration-500 ease-in-out
                            ${isActive ? "scale-105" : "scale-100"}`}
              >
                <Image
                  src={service.src}
                  alt="Best Web Development AI Portfolio Image"
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>

              {/* Gradient overlay — lighter on active */}
              <div
                className={`absolute inset-0 transition-opacity duration-500
                            ${
                              isActive
                                ? "bg-linear-to-t from-black/60 via-black/10 to-transparent"
                                : "bg-linear-to-t from-black/70 via-black/30 to-black/10"
                            }`}
              />

              {/* Light flash on hover */}
              <div
                className={`absolute inset-0 bg-white transition-opacity duration-300
                            ${isActive ? "opacity-0" : "opacity-0 hover:opacity-5"}`}
              />

              {/* Label — horizontal when active, vertical when inactive */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                {isActive ? (
                  <div className="flex items-end justify-between">
                    <p className="text-white text-sm font-bold tracking-wider uppercase">
                      {service.label}
                    </p>
                    <button
                      className="text-black text-[10px] md:text-[11px] font-bold tracking-widest uppercase px-[18px] py-[10px] rounded-[4px]"
                      style={{
                        background:
                          "linear-gradient(90deg, #fdf0d5 0%, #d4a351 48%, #fdf0d5 100%)",
                        border: "none",
                      }}
                    >
                      EXPLORE NOW
                    </button>
                  </div>
                ) : (
                  <p
                    className="text-white text-[10px] font-bold tracking-widest uppercase"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    {service.label}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── MOBILE: Horizontal Scroll with Snap ── */}
      <div className="md:hidden flex gap-3 px-3 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-2">
        {services.map((service, index) => {
          const isFirst = index === 0;
          return (
            <div
              key={service.id}
              className={`relative rounded-xl overflow-hidden shrink-0 snap-start
                          ${isFirst ? "w-[72vw]" : "w-[55vw]"}
                          h-[280px]`}
            >
              <Image
                src={service.src}
                alt="Best Web Development AI Portfolio Image"
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/20 to-transparent" />

              {/* Label + button on first, vertical label on others */}
              <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                {isFirst ? (
                  <div>
                    <p className="text-white text-[11px] font-bold tracking-wider uppercase mb-2">
                      {service.label}
                    </p>
                    <button
                      className="text-black text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-[3px]"
                      style={{
                        background:
                          "linear-gradient(90deg, #fdf0d5 0%, #d4a351 48%, #fdf0d5 100%)",
                        border: "none",
                      }}
                    >
                      EXPLORE NOW
                    </button>
                  </div>
                ) : (
                  <p
                    className="text-white text-[9px] font-bold tracking-widest uppercase"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    {service.label}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* MORE SERVICES button */}
      <div className="flex justify-center mt-8 md:mt-10">
        <button
          className="group relative overflow-hidden text-black text-[15px] font-semibold uppercase px-[42px] py-[14px] rounded-[6px] transition-all duration-300"
          style={{
            background:
              "linear-gradient(145deg, #efc881 0%, #fef4d8 35%, #e1b465 65%, #c89542 100%)",
            boxShadow: "0px 4px 10px rgba(200, 149, 66, 0.2)",
            border: "none",
            letterSpacing: "0.5px",
          }}
        >
          <span className="relative z-10">MORE SERVICES</span>

          {/* Shine Effect */}
          <div
            className="absolute top-0 left-[-150%] w-[150%] h-full z-0 transform -skew-x-12 
                       bg-linear-to-r from-transparent via-white/40 to-transparent 
                       opacity-0 group-hover:opacity-100 group-hover:left-[150%] transition-all duration-1500 ease-in-out"
          />
        </button>
      </div>
    </section>
  );
}
