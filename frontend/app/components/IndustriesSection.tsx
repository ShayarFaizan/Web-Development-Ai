import React from 'react';
import Link from 'next/link';
import { 
  Factory, 
  ShoppingBag, 
  Home, 
  Stethoscope, 
  GraduationCap, 
  ArrowRight 
} from 'lucide-react';

const INDUSTRIES = [
  {
    title: "Manufacturing",
    icon: <Factory size={24} />,
    desc: "Manufacturing Website Raipur — Digital solutions to showcase your plant and generate B2B inquiries.",
    href: "/services/manufacturing",
    color: "text-[#1a73e8]",
    lightBg: "bg-[#e8f0fe]"
  },
  {
    title: "Wholesale",
    icon: <ShoppingBag size={24} />,
    desc: "Scale your distribution with digital catalogs and bulk order systems.",
    href: "/industries/wholesale",
    color: "text-[#188038]",
    lightBg: "bg-[#e6f4ea]"
  },
  {
    title: "Real Estate",
    icon: <Home size={24} />,
    desc: "Convert property seekers into buyers with stunning listing sites.",
    href: "/industries/real-estate",
    color: "text-[#af5cf7]",
    lightBg: "bg-[#f3e8fd]"
  },
  {
    title: "Healthcare",
    icon: <Stethoscope size={24} />,
    desc: "Connect doctors with patients through booking and service pages.",
    href: "/industries/healthcare",
    color: "text-[#d93025]",
    lightBg: "bg-[#fce8e6]"
  },
  {
    title: "Education",
    icon: <GraduationCap size={24} />,
    desc: "Empower learning with admission portals and course directories.",
    href: "/industries/education",
    color: "text-[#e37400]",
    lightBg: "bg-[#fef7e0]"
  }
];

const IndustriesSection = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-[#202124] mb-4">
            Solutions by industry
          </h2>
          <p className="text-lg text-[#5f6368] max-w-2xl leading-relaxed">
            Every business is unique. We build specialized websites tailored to your specific industry goals and audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {INDUSTRIES.map((industry, index) => (
            <Link 
              key={index} 
              href={industry.href}
              className="group flex flex-col p-8 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-[0_1px_3px_0_rgba(60,64,67,0.30),0_4px_8px_3px_rgba(60,64,67,0.15)] transition-all duration-200"
            >
              <div className={`w-12 h-12 rounded-xl ${industry.lightBg} ${industry.color} flex items-center justify-center mb-6`}>
                {industry.icon}
              </div>
              <h3 className="text-xl font-medium text-[#202124] mb-3">{industry.title}</h3>
              <p className="text-[14px] text-[#5f6368] mb-8 leading-relaxed flex-1">
                {industry.desc}
              </p>
              <div className="inline-flex items-center gap-1 text-[#1a73e8] font-medium text-sm group-hover:underline">
                Learn more <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
