import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, GraduationCap, Video, BookOpen, Users } from 'lucide-react';

const EDUCATION_BLOGS = [
  {
    title: "School Website Design Raipur — Best Admission Portals 2026",
    excerpt: "Jaaniye Raipur ke top schools kaise apne admission process ko digital banakar query rate 40% badha rahe hain.",
    href: "/blog/school-website-design-raipur",
    readTime: "10 min read",
    tag: "K-12",
    emoji: "🏫"
  },
  {
    title: "Coaching Institute Website Bilaspur — Manage Students Online",
    excerpt: "LMS aur student management system ke saath apne coaching ko upgrade karein. Chhattisgarh ki ultimate guide.",
    href: "#",
    readTime: "8 min read",
    tag: "Coaching",
    emoji: "📚"
  },
  {
    title: "University & College Portals — Enterprise Grade Solutions",
    excerpt: "Advanced result management aur fee portals Raipur aur Bhilai ke colleges ke liye.",
    href: "#",
    readTime: "12 min read",
    tag: "Higher Ed",
    emoji: "🎓"
  }
];

export default function EducationHub() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-16 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#5f6368] mb-8">
          <Link href="/" className="hover:text-[#1a73e8]">Home</Link>
          <ArrowRight size={14} />
          <span className="text-[#202124] font-medium">Education Growth Hub</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 bg-[#fef7e0] text-[#e37400] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-[#e37400]/10">
            <GraduationCap size={14} /> Education Sector
          </div>
          <h1 className="text-4xl md:text-6xl font-medium text-[#202124] mb-6 tracking-tight leading-[1.1]">
            Empowering Learning with <span className="text-[#1a73e8]">Interactive Digital Portals</span>
          </h1>
          <p className="text-xl text-[#5f6368] leading-relaxed">
            Raipur, Bilaspur aur Chhattisgarh ke educational institutions (Schools, Colleges, Coaching Centers) ke liye specialized digital solutions. Apne admission process ko simplify karein aur students ko ek modern learning experience dein.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { title: "Admission Management", desc: "Online forms aur query tracking to boost enrollments.", icon: <Users className="text-[#1a73e8]" /> },
            { title: "Learning Management (LMS)", desc: "Upload lectures, notes and track student progress.", icon: <Video className="text-[#188038]" /> },
            { title: "Student Portals", desc: "Results, fees, and announcements in one secure place.", icon: <BookOpen className="text-[#e37400]" /> }
          ].map((f, i) => (
            <div key={i} className="p-8 rounded-2xl border border-gray-100 bg-[#f8f9fa] hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-6 shadow-sm">
                {f.icon}
              </div>
              <h3 className="text-xl font-medium text-[#202124] mb-3">{f.title}</h3>
              <p className="text-[#5f6368] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Blogs/Containers Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-medium text-[#202124] mb-12 flex items-center gap-3">
             Specialized Guides for Education Sector <span className="text-sm font-normal text-[#5f6368] bg-gray-100 px-3 py-1 rounded-full">{EDUCATION_BLOGS.length} Articles</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EDUCATION_BLOGS.map((blog, index) => (
              <Link 
                key={index}
                href={blog.href}
                className="group flex flex-col bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-transparent transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gray-50 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                  {blog.emoji}
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a73e8] bg-[#e8f0fe] px-2 py-1 rounded">
                      {blog.tag}
                    </span>
                    <span className="text-xs text-[#5f6368]">{blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-medium text-[#202124] mb-4 group-hover:text-[#1a73e8] transition-colors leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-[#5f6368] text-sm leading-relaxed mb-6 flex-1">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center text-[#1a73e8] font-medium text-sm gap-2">
                    Read Full Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Conversion Section */}
        <div className="bg-[#202124] rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
            <GraduationCap size={160} />
          </div>
          <h2 className="text-3xl md:text-5xl font-medium mb-6">Apne Institution Ko Digital Banayein</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Raipur ke and Bilaspur ke best schools aur institutes hum par bharosa karte hain. Aaj hi free consultation schedule karein.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a 
              href="https://wa.me/916264906078?text=Hi%2C%20mujhe%20apne%20school%2Finstitute%20ki%20website%20ke%20liye%20baat%20karni%20hai"
              target="_blank"
              className="px-10 py-4 bg-[#25d366] text-white font-bold rounded-full hover:bg-[#20bd5a] transition-all shadow-xl flex items-center justify-center gap-2"
             >
               Start on WhatsApp
             </a>
             <Link href="/book-appointment" className="px-10 py-4 border border-gray-700 hover:bg-white hover:text-black transition-all rounded-full font-bold">
               Book a Call
             </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
