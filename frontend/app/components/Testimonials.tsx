import React from "react";
import { Star, Quote, UserCircle } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "E-commerce Owner",
    location: "Raipur, India",
    content: "Hamari website pehle bahut slow thi, lekin inhone Next.js par switch kiya aur ab sales 40% badh gayi hain. Bilaspur mein inse achha koi nahi!",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "Tech Startup Founder",
    location: "California, USA",
    content: "Working remotely with this team was seamless. The communication was great and the final product exceeded our international quality standards.",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Portfolio Client",
    location: "London, UK",
    content: "Very professional and creative. They understood my global audience and delivered a stunning portfolio that helped me get high-end projects.",
    rating: 5
  },
  {
    name: "Amit Saini",
    role: "Business Consultant",
    location: "Sydney, Australia",
    content: "Inki SEO strategy ne mere business ko search results ke first page par laa diya. Performance aur support lajawab hai.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#fafafa] py-20 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-black uppercase tracking-widest">
             <Star className="w-3 h-3 fill-current" /> Trusted by 100+ Clients
           </div>
           <h2 className="text-4xl font-black text-gray-900 tracking-tight">
             What Our <span className="text-blue-600">Global Clients Say?</span>
           </h2>
           <p className="text-gray-500 font-medium">
             Business owners worldwide trust our premium quality and results.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {testimonials.map((t, idx) => (
             <div key={idx} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-4">
                   <div className="flex gap-1">
                      {[1,2,3,4,5].map((s) => (
                         <Star key={s} className="w-4 h-4 text-orange-400 fill-current" />
                      ))}
                   </div>
                   <div className="relative">
                      <Quote className="w-10 h-10 text-gray-100 absolute -top-4 -left-4 z-0" />
                      <p className="text-gray-700 leading-relaxed font-medium relative z-10 italic">
                        "{t.content}"
                      </p>
                   </div>
                </div>

                <div className="mt-8 flex items-center gap-4 border-t border-gray-50 pt-6">
                   <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                      <UserCircle className="w-8 h-8 opacity-40" />
                   </div>
                   <div>
                      <h4 className="font-black text-gray-900 leading-none">{t.name}</h4>
                      <p className="text-xs text-gray-400 font-bold mt-1 uppercase tracking-tight">
                        {t.role} • <span className="text-blue-600">{t.location}</span>
                      </p>
                   </div>
                </div>
             </div>
           ))}
        </div>

        <div className="mt-16 text-center">
           <p className="text-sm text-gray-400 flex items-center justify-center gap-2 font-bold">
             Check our <span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span> Business Profile for more reviews.
           </p>
        </div>
      </div>
    </section>
  );
}
