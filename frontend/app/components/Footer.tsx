"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Twitter, Youtube, Globe, Phone } from "lucide-react";

const Footer = () => {
  const pathname = usePathname();

  if (pathname === "/account" || pathname === "/cart") {
    return null;
  }

  return (
    <footer className="bg-[#f8f9fa] border-t border-gray-200 pt-16 pb-8 font-sans text-[#5f6368]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section with Branding & Social */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 pb-12 border-b border-gray-200">
          <div>
            <Link href="/" className="text-2xl font-medium text-[#202124] tracking-tight">
              Web Development AI
            </Link>
            <p className="mt-2 text-sm">Building the future of the web with AI-powered solutions.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://instagram.com" className="hover:text-[#202124] transition-colors"><Instagram size={20} /></a>
            <a href="https://facebook.com" className="hover:text-[#202124] transition-colors"><Facebook size={20} /></a>
            <a href="https://x.com" className="hover:text-[#202124] transition-colors"><Twitter size={20} /></a>
            <a href="https://youtube.com" className="hover:text-[#202124] transition-colors"><Youtube size={20} /></a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
          {/* Column 1: Company */}
          <div className="flex flex-col gap-4 text-sm">
            <h4 className="font-medium text-[#202124] uppercase tracking-wider text-[12px]">Company</h4>
            <Link href="/about" className="hover:underline">About Us</Link>
            <Link href="#contact" className="hover:underline">Contact Us</Link>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <Link href="#" className="hover:underline">Careers</Link>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col gap-4 text-sm">
            <h4 className="font-medium text-[#202124] uppercase tracking-wider text-[12px]">Services</h4>
            <Link href="#" className="hover:underline">Business Websites</Link>
            <Link href="#" className="hover:underline">E-commerce Solutions</Link>
            <Link href="#" className="hover:underline">Landing Pages</Link>
            <Link href="#" className="hover:underline">Custom Apps</Link>
          </div>

          {/* Column 3: Industries */}
          <div className="flex flex-col gap-4 text-sm">
            <h4 className="font-medium text-[#202124] uppercase tracking-wider text-[12px]">Industries</h4>
            <Link href="/industries/manufacturing" className="hover:underline">Manufacturing</Link>
            <Link href="/industries/wholesale" className="hover:underline">Wholesale</Link>
            <Link href="/industries/real-estate" className="hover:underline">Real Estate</Link>
            <Link href="/industries/healthcare" className="hover:underline">Healthcare</Link>
            <Link href="/industries/education" className="hover:underline">Education</Link>
          </div>

          {/* Column 4: Presence */}
          <div className="flex flex-col gap-4 text-sm">
            <h4 className="font-medium text-[#202124] uppercase tracking-wider text-[12px]">Presence</h4>
            <Link href="/services/raipur" className="hover:underline">Raipur Center</Link>
            <Link href="/ecommerce-website-bilaspur" className="hover:underline">Bilaspur Hub</Link>
            <Link href="/website-development-company-chhattisgarh" className="hover:underline">Chhattisgarh</Link>
          </div>

          {/* Column 5: Legal */}
          <div className="flex flex-col gap-4 text-sm">
            <h4 className="font-medium text-[#202124] uppercase tracking-wider text-[12px]">Support</h4>
            <Link href="#" className="hover:underline">Terms of Service</Link>
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Cookie Policy</Link>
            <Link href="#" className="hover:underline">Sitemap</Link>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px]">
          <div className="flex items-center gap-8">
            <span>© {new Date().getFullYear()} Web Development AI</span>
            <div className="flex items-center gap-2"><Globe size={14} /> English (India)</div>
          </div>
          
          <div className="flex items-center gap-8">
            <Link href="https://wa.me/916264906078" className="flex items-center gap-1 hover:text-[#202124]">
              <Phone size={14} /> +91 62649 06078
            </Link>
            <span>AI Powered Development</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
