export interface CardHighlight {
  label: string;
  value: string;
}

export interface Review {
  id: string;
  userName: string;
  userImage?: string;
  reviewImage?: string; // Add this
  rating: number;
  title: string;
  comment: string;
  date: string;
  isGoldReviewer: boolean;
  likes: number;
  dislikes: number;
  images?: string[];
  userId?: string;
  likedBy?: string[];
  dislikedBy?: string[];
  createdAt?: any;
}

export interface CardData {
  id: number;
  title: string;
  image: string;
  badge: string;
  discount: string;
  features: string[];
  price: string;
  originalPrice: string;
  delivery: string;
  tag: string;
  category: string;
  videos?: string[];
  detailedDescription?: string;
  highlights?: CardHighlight[];
  reviews?: Review[];
}

export const categories = ["Landing Pages", "Website's", "Protein Website"];

export const serviceCards: CardData[] = [
  {
    id: 999,
    title: "Payment Gateway Testing (₹1)",
    image: "/assets/ssl2.svg",
    videos: [],
    badge: "TEST",
    discount: "99%",
    features: [
      "Strictly for payment testing",
      "Only costs ₹1",
      "Check Razorpay integration",
    ],
    price: "₹1",
    originalPrice: "₹100",
    delivery: "Instant",
    tag: "Test",
    category: "Landing Pages",
    detailedDescription: "This product is only added to test the Razorpay payment gateway with a minimal ₹1 transaction. Please do not expect any real services from this.",
  },
  {
    id: 13,
    title: "Basic Static Site (Fast Loading React Website)",
    image: "/assets/shakes web site.png",
    videos: [
      "/assets/shakes web site.png",
      "/assets/cake web site.png",
      "/assets/makeup artist.png",
      "/assets/momos basic website.png",
      "/assets/dry fruits basic web site.png",
      "/assets/basic static website.mp4",
    ],
    badge: "STARTER",
    discount: "28%",
    features: [
      "1-6 Pages (Home, About, Services, Contact)",
      "It shows fixed content",
      "Mobile Responsive",
      "Contact Form",
      "There is no admin panel",
      "Development in Next.js",
      "Domain & Hosting Not Included",
      "1 Months Free Support",
    ],
    price: "₹22,999",
    originalPrice: "₹31,999",
    delivery: "3–5 din",
    tag: "One Time",
    category: "Website's",
    detailedDescription: `
1. Design & Layout (Look and Feel)
• 5 Premium Pages: Home, About, Services, Gallery, aur Contact Us.
• Fully Responsive: Aapki site Mobile, Tablet aur Desktop sab par perfect dikhegi.
• Modern UI: Hum Tailwind CSS use karte hain jo site ko Apple ya Stripe jaisa clean look deti hai.
• Custom Animations: Framer Motion ka use karke thodi smooth scrolling aur entrance animations (Premium Feel).

2. Technical Power (Next.js Speciality)
• Super Fast Speed: Google PageSpeed score hamesha 90+ rahega. Site 1 second se kam mein load hogi.
• Next-Gen Images: Aapki photos ko automatic 'WebP' format mein badla jayega taaki quality kharab na ho aur site bhari na lage.
• SEO Ready: Har page ka alag Meta Title aur Description likha jayega taaki Google par site jaldi dikhe.

3. Connectivity (Leads badhane ke liye)
• WhatsApp Chat Button: Ek click par customer aap se chat kar payega.
• Smart Contact Form: Enquiry aate hi seedha aapki Email ID par notification aayega.
• Google Maps: Aapke office ya shop ki location ka interactive map.
• Social Media Icons: Instagram, Facebook, LinkedIn aur YouTube ke links.

4. Free Stuff & Maintenance (Saving your Money)
• SSL Certificate: Lock wala icon (Secure Site) bilkul free.
• Professional Email: info@yourbrand.com jaisa professional email setup.

5. Launch Support
• Google Indexing: Hum aapki site ko Google Search Console mein submit karenge.
• 30 Days Support: Launch ke baad 1 mahine tak koi bhi technical issue hum free mein theek karenge.`,
    highlights: [
      {
        label: "Applied For",
        value: "Business Growth, Local Brand, Fast Loading",
      },
      { label: "Tech Stack", value: "Next.js, React, Tailwind CSS" },
      { label: "Device Ready", value: "All Mobile & Desktop Types" },
      { label: "Support", value: "30 Days Free" },
      { label: "Type", value: "Pure Static Experience" },
      { label: "Admin Panel", value: "No" },
    ],
    reviews: [
      {
        id: "r1",
        userName: "Vikram Saini",
        rating: 5,
        title: "Awesome Experience",
        comment:
          "The site is lightning fast and the design is premium. Highly recommend!",
        date: "5 months ago",
        isGoldReviewer: true,
        likes: 12,
        dislikes: 0,
        images: ["/assets/shakes web site.png", "/assets/cake web site.png"],
      },
      {
        id: "r2",
        userName: "Dinesh Kumar",
        rating: 4,
        title: "Brilliant Work",
        comment:
          "Excellent support and very professional communication. The contact form works great.",
        date: "2 months ago",
        isGoldReviewer: true,
        likes: 8,
        dislikes: 1,
      },
    ],
  },
  {
    id: 1,
    title: "Standard Business (Next.js AI Portfolio Website)",
    image: "/assets/samosa shop.png",
    videos: [
      "/assets/samosa shop.png",
      "/assets/restorent 5-11 page.png",
      "/assets/property web site.png",
    ],
    badge: "BESTSELLER",
    discount: "25%",
    features: [
      "5-11 Professional Pages",
      "Super-Fast Loading (SSG)",
      "100% Mobile Responsive",
      "Google-Friendly SEO",
      "Custom UI/UX",
      "WhatsApp & Lead Forms",
      "Domain & Hosting Not Included",
      "3-6 Months Support",
      "90+ Speed Score",
    ],
    price: "₹27,999",
    originalPrice: "₹36,999",
    delivery: "10–27 din",
    tag: "One Time",
    category: "Website's",
    highlights: [
      {
        label: "Applied For",
        value: "Business Growth, Local Brand, Fast Loading",
      },
      { label: "Tech Stack", value: "Next.js, React, Tailwind CSS" },
      { label: "Device Ready", value: "All Mobile & Desktop Types" },
      { label: "Support", value: "3-6 Months Free" },
      { label: "Speed Score", value: "90+" },
      { label: "Admin Panel", value: "No (Pure Static)" },
    ],
    detailedDescription: `
Next-Gen Static Website built with Next.js. 100% Mobile Responsive, SEO Ready, aur Super-Fast Performance ke saath. Agar aapko ek aisi website chahiye jo Google par rank kare aur customers ko impress kare, toh hamara 11-Page Professional Package aapke liye best hai. No hidden monthly hosting costs!

### High-Performance Static Website (Next.js Special)

**Overview:**
Hamari Next.js Static Website un businesses ke liye perfect hai jo internet par apni pehchaan ek fast, secure aur modern tarike se banana chahte hain. Next.js technology ki wajah se aapki website Google par jaldi rank karti hai aur users ko ek smooth experience deti hai.

**Key Features (Jo aapko milenge):**
• ⚡ **Super-Fast Loading:** Next.js Static Generation (SSG) ki wajah se website 1-2 seconds mein load ho jati hai. Slow loading ki wajah se ab koi customer wapas nahi jayega!
• 📱 **Fully Responsive Design:** Aapki website Mobile, Tablet, aur Desktop—har screen par perfect aur professional dikhegi.
• 🔍 **SEO Optimized:** Hum har page par Google-friendly meta tags aur structure set karte hain, taaki aapka business search results mein upar aaye.
• 🎨 **Custom UI/UX:** Koi sasta template nahi! Hamari design team aapke brand aur logo ke hisaab se ek unique look taiyar karegi.
• 🛡️ **Top-Notch Security:** Static website hone ki wajah se isme hacking ka khatra na ke barabar hota hai. Iske saath aapko Free SSL (HTTPS) bhi milta.
• 📩 **Lead Generation:** Contact forms aur WhatsApp integration ke saath, taaki aapke customers aapse direct jud sakein.

**Package Details:**
• **Pages:** 5 se 11 Professional Pages (Home, About, Services, Gallery, Contact, etc.)
• **Hosting:** Domain or Hosting Not Including
• **Support:** 3-6 Months ki free technical support aur minor updates.
• **Speed Score:** 90+ Google Lighthouse Score.`,
  },
  {
    id: 12,
    title: "Dynamic Website",
    image: "/assets/ice cream crm.png",
    videos: ["/assets/ice cream crm.png", "/assets/cloud kitchen.png"],
    badge: "PREMIUM",
    discount: "52%",
    features: [
      "10-20 Premium Pages",
      "Admin Control Panel",
      "Database Integration",
      "Advanced Interactive Features",
      "Security & Authentication",
      "Advanced Dashboard (CMS)",
      "Server-Side Rendering (SSR)",
      "Technical SEO",
      "Update content from dashboard",
      "Add blogs,images & edit pages anytime",
      "Next.js + CMS",
      "Development in Next.js",
      "Domain & Hosting Not Included",
      "3 Months Free Support",
    ],
    price: "₹42,999",
    originalPrice: "₹89,999",
    delivery: "15–20 din",
    tag: "One Time",
    category: "Website's",
    highlights: [
      {
        label: "Applied For",
        value: "Corporate, SaaS, Dynamic Content",
      },
      { label: "Tech Stack", value: "Next.js, React, Tailwind, CMS" },
      { label: "Device Ready", value: "All Mobile & Desktop Types" },
      { label: "Support", value: "3 Months Free Support" },
      { label: "Admin Panel", value: "Yes (Custom CMS)" },
      { label: "SEO", value: "Technical GSC Setup" },
    ],
    detailedDescription: `
High-Performance Dynamic Website (Next.js + Admin Panel)

1. Custom Admin Panel (CMS)
Iska sabse bada fayda ye hai ki aapko har chhote kaam ke liye developer ko phone nahi karna padega. Ek login ID aur password milega jahan se aap:
• Nayi photos upload kar sakte hain (Gallery update).
• Services ka text ya price badal sakte hain.
• Blogs ya news section manage kar sakte hain.

2. 10-20 Premium Pages
Standard 5-11 pages se upar jaakar, isme aapko detailed pages milte hain:
• Har service ka ek alag dedicated page (SEO ke liye best).
• Testimonials/Reviews page.
• Privacy Policy, Terms & Conditions (Legal pages).
• Career/Job openings page.

3. Advanced Lead Generation
• Multiple Forms: Sirf ek "Contact Us" nahi, balki "Get a Quote", "Book a Consultation", aur "Callback Request" jaise alag-alag forms.
• CRM Integration: Jo bhi enquiry aayegi, wo aapko Email ke saath-saath ek dashboard par bhi dikhegi.

4. Technical SEO (Search Engine Optimization)
Is budget mein sirf tags nahi, balki deep SEO hota hai:
• Google Search Console: Aapki site Google par register ki jayegi.
• Sitemap & Robots.txt: Taki Google ke robots aapki site ko sahi se scan karein.
• Speed Optimization: Site 2 seconds ke andar load honi chahiye.

5. Security & Analytics
• SSL Certificate: HTTPS (Safe lock icon) lifetime ya 1 saal ke liye.
• Google Analytics: Aap dekh payenge ki kitne log site par aa rahe hain aur kis city se hain.
• Social Media API: Aapke Instagram ya Facebook ki latest posts automatic website par dikhengi.`,
  },
  {
    id: 2,
    title: "Business Dynamic Website",
    image: "/assets/ssl2.svg",
    badge: "BESTSELLER",
    discount: "15%",
    features: [
      "8–10 Pages",
      "Admin Panel (khud se content change)",
      "Blog System",
      "Basic SEO setup",
      "1 Months Free Support",
    ],
    price: "₹24,999",
    originalPrice: "₹29,999",
    delivery: "10–15 din",
    tag: "One Time",
    category: "BUSINESS",
    detailedDescription:
      "Our Business Dynamic Website strikes the perfect balance between high-end features and cost-effectiveness. It includes exactly what a modern business needs: a professional multi-page layout, a fully functional blog to drive traffic, and an easy-to-use Admin Panel for basic content updates. It's the standard for SMEs looking to transition from a static presence to an interactive, content-driven platform.",
  },
  {
    id: 3,
    title: "Ecommerce Website 🛒",
    image: "/assets/ecommarce2.png",
    videos: [
      "/assets/ecommarce2.png",
      "/assets/e commarce.png",
      "/assets/fast food e commarce.png",
      "/assets/icecream ecommarce.png",
    ],
    badge: "BESTSELLER",
    discount: "26%",
    features: [
      "Product Management",
      "Payment Gateway",
      "Order Tracking",
      "Cart & Checkout",
      "User Accounts",
      "Shipping Integration",
      "Coupons & Discounts generate system",
      "Development in Next.js",
      "Domain & Hosting Not Included",
      "6 Months Free Support",
    ],
    price: "₹51,999",
    originalPrice: "₹69,999",
    delivery: "15–20 din",
    tag: "One Time",
    category: "Website's",
    highlights: [
      {
        label: "Applied For",
        value: "Online Store, Selling Products, Growth",
      },
      { label: "Tech Stack", value: "Next.js, React, CRM, Razorpay" },
      { label: "Device Ready", value: "All Mobile & Desktop Types" },
      { label: "Support", value: "6 Months Free Support" },
      { label: "Admin Panel", value: "Yes (Store Manager)" },
      { label: "Shipping", value: "Ready for Integration" },
    ],
    detailedDescription: `
High-Performance Ecommerce Store (Next.js Power)

1. Performance & Tech (Next.js Power)
• Super-Fast Speed: Next.js ki wajah se site 1-2 second mein khul jati hai.
• PWA (App-like experience): Website mobile par ek App ki tarah behave karti hai (smooth scrolling aur fast navigation).
• Lifetime Free Hosting Setup: Developer site ko Vercel par host karke deta hai, jiska matlab hai aapko hosting ka monthly rent nahi dena padega.

2. Core Ecommerce Features
• Product Management (20-50 Products): Har product ke liye multiple photos, description, aur price options.
• Shopping Cart & Checkout: Ek modern cart jahan customer products add kar sake aur address daal kar order place kare.
• Payment Gateway Integration: Razorpay, Paytm ya Stripe setup, jisse aap UPI (GPay/PhonePe), Credit Card, aur Netbanking se payments le sakein.

3. Smart Admin Panel (CMS)
Aapko ek Login Dashboard milta hai jahan se aap:
• Naye products add kar sakte hain.
• Purane products ka price ya photo badal sakte hain.
• Aaye huye Orders ki list dekh sakte hain.

4. Notifications & Sales Tools
• Order Alerts: Jab bhi koi order aayega, aapko Email ya WhatsApp par instant notification milega.
• WhatsApp Chat Button: Customer aapse direct chat karke query pooch sakta hai.
• Coupon Code System: Discount codes (Jaise: FIRST10) create karne ka option.

5. Essential SEO & Security
• Google Search Setup: Website ko Google par register karna (Search Console).
• SSL Certificate: Website ke aage "Secure Lock" icon (HTTPS).
• Basic Analytics: Ye dekhna ki kitne log site par aa rahe hain.`,
  },
  {
    id: 4,
    title: "Custom Web Application",
    image: "/assets/cycle1.png",
    videos: ["/assets/cycle1.png", "/assets/cycle2.png"],
    badge: "HOT",
    discount: "10%",
    features: [
      "Login / Signup",
      "Dashboard",
      "Custom Features (client need ke hisab se)",
      "Domain & Hosting Not Included",
      "6 Months Free Support",
    ],
    price: "₹2,29,999",
    originalPrice: "₹5,00,000",
    delivery: "Timeline feature pe depend",
    tag: "Starting",
    category: "Website's",
    detailedDescription:
      "When off-the-shelf solutions don't cut it, you need a Custom Web Application. Whether you're building a unique SaaS platform, a complex internal management tool, or a social network, we build it from the ground up tailored to your exact business logic. We use the latest stack (Next.js, Tailwind, Firebase/PostgreSQL) to ensure your app is secure, scalable, and future-proof. This is a full-service development plan for innovative ideas.",
  },
  {
    id: 7,
    title: "Sales Landing Page",
    image: "/assets/sales landing page.png",
    videos: [
      "/assets/sales landing page.png",
      "/assets/sales landing page 4.png",
      "/assets/sales landing page3.png",
      "/assets/Sales Landing Page.mp4",
      "/assets/What is a Landing Page.mp4",
    ],
    badge: "HOT",
    discount: "20%",
    features: [
      "1 High-converting page",
      "1–3 products",
      "Buy button",
      "Order data stored",
      "Payment gateway",
      "Ads ready design",
      "Mobile Responsive",
      "Fastest Loading Speed",
      "Extra product charge: ₹1,999 per product",
      "Development In Next.js",
      "Domain & Hosting Not Included",
    ],
    price: "₹19,999",
    originalPrice: "₹24,999",
    delivery: "5–7 din",
    tag: "One Time",
    category: "Landing Pages",
    highlights: [
      {
        label: "Applied For",
        value: "Facebook/Google Ads, Selling 1-3 Products",
      },
      { label: "Tech Stack", value: "Next.js, FB Pixel, G-Analytics" },
      { label: "Device Ready", value: "Mobile Optimized (90% Sales)" },
      { label: "Conversion", value: "High-Conv. Layout & Copy" },
      { label: "Tracking", value: "Ads Tracking Setup Ready" },
      { label: "Load Time", value: "Under 1 Second (Ultra Fast)" },
    ],
    detailedDescription: `
High-Performance Sales Landing Page

1. Next.js Performance: Page 1 second se bhi kam mein load hona chahiye (Conversion ke liye zaroori hai).
2. High Conversion Design: Copywriting aur Layout aisa jo customer ko "Buy Now" ya "Enquire" karne par majboor kare.
3. Lead Generation: Forms, Pop-ups, aur WhatsApp buttons ka sahi placement.
4. Mobile Optimized: Kyunki 90% sales mobile se aati hain.
5. Tracking: Google Analytics aur FB Pixel setup taaki aap dekh sakein ads se kitne log aaye.`,
  },
  {
    id: 5,
    title: "Landing Page (Digital Visiting Card with Firebase Backend)",
    image: "/assets/landing page.png",
    videos: [
      "/assets/landing page.png",
      "/assets/landing page 3.png",
      "/assets/landing page 2.png",
      "/assets/What is a Landing Page.mp4",
    ],
    badge: "LIMITED LAUNCH OFFER ⏳",
    discount: "33%",
    features: [
      "1 High-converting page",
      "Ads ready design",
      "WhatsApp / Call integration",
      "Contact Form",
      "Mobile Responsive",
      "Basic SEO setup",
      "Direct Gmail lead",
      "Fastest Loading Speed",
      "Development In Next.js",
      "Domain & Hosting Not Included",
    ],
    price: "₹9,999",
    originalPrice: "₹14,999",
    delivery: "3–5 din",
    tag: "One Time",
    category: "Landing Pages",
    highlights: [
      {
        label: "Applied For",
        value: "Personal Branding, Digital Visiting Card",
      },
      { label: "Tech Stack", value: "Next.js, React, Tailwind" },
      { label: "Device Ready", value: "Mobile & Laptop Optimized" },
      { label: "Hosting Cost", value: "Domain & hosting not included" },
      { label: "Page Type", value: "Single Page Long Scroll" },
      { label: "Support", value: "Basic Setup Support" },
    ],
    detailedDescription: `
High-Performance Landing Page (Digital Visiting Card)

1. Single Page Design (Long Scroll)
Isme alag-alag pages nahi hote, balki ek hi bada page hota hai jisme ye sections hote hain:
• Hero Section: Ek badi image aur aapka main message.
• About Us: Business ya person ki thodi jaankari.
• Services/Products: 3-4 main cheezein jo aap offer karte hain (sirf text aur icons).
• Gallery: 4-6 photos ka ek simple grid.
• Contact Form: Ek basic form jo enquiry aapki email par bhej de.

2. Technical Features (Next.js Advantage)
• Super Fast Speed: Next.js ki wajah se page turant load hoga.
• Mobile Responsive: Website phone aur laptop dono par sahi dikhegi.
• WhatsApp Integration: Ek direct chat button taaki log aapse jud sakein.
• Google Maps: Aapke office ka map integration.

3. Zero Hosting Cost (Savings!)
Developer aapko Vercel ya Netlify par site setup karke dega.
• Fayda: Client ko hosting ke liye har mahine ya har saal ₹3,000 - ₹5,000 nahi dene padenge. Ye lifetime FREE rahega.

4. Kya ISME NAHI Milta? (Dhyan dein)
• No Multiple Pages: Alag se 5-11 pages isme nahi hote.
• No Admin Panel: Agar kuch badalna hai (text ya photo), toh developer ki zarurat padegi.
• No Advanced SEO: Sirf basic meta tags milenge, deep ranking mehnat nahi hogi.
• No Copywriting: Content (likhna) client ko khud dena padega.
• Domain Cost: ₹800-₹1,000 ka domain client ko khud lena hoga ya alag se pay karna hoga.

Ye ek "Digital Visiting Card" jaisa hai jo bahut fast chalta hai aur hosting free hai.`,
  },
  {
    id: 8,
    title: "Service Landing Page",
    image: "/assets/salon service.png",
    videos: [
      "/assets/salon service.png",
      "/assets/doctor service landing page.png",
      "/assets/collage service landing page.png",
      "/assets/Service Landing Page.mp4",
      "/assets/What is a Landing Page.mp4",
    ],
    badge: "POPULAR",
    discount: "40%",
    features: [
      "1 High-converting service page",
      "Service details section",
      "Book Now / Get Quote button",
      "Contact form enquiry",
      "WhatsApp / Call integration",
      "Portfolio / service showcase",
      "Mobile responsive design",
      "Fastest Loading Speed",
      "Basic SEO setup",
      "Development in Next.js",
      "Domain & Hosting Not Included",
    ],
    price: "₹21,999",
    originalPrice: "₹36,999",
    delivery: "4–6 din",
    tag: "One Time",
    category: "Landing Pages",
    detailedDescription: `
High-Performance Service Landing Page (Leads & Booking Special)

1. Single Goal (Ek hi Maqsad: Conversions)
Ek normal website par bahut saare pages hote hain jo visitor ko divert kar dete hain. Lekin hamara "Service Landing Page" sirf ek kaam ke liye design hota hai: Client se Enquiry Form bharwana ya direct WhatsApp par message karwana.

2. Specific Audience Targeting
Yeh page tab sabse zyada asardaar hota hai jab aap kisi khaas service ko promote kar rahe ho (Ads ke liye best).
Example: Agar aapki Digital Marketing Agency hai, toh poori website dikhane ke bajaye aap sirf "Facebook Ads Service" ka landing page dikhayenge taaki visitor confuse na ho aur seedha action le.

3. Conversion-Focused Structure (Banawat)
Iska structure scientific tarike se fix hota hai taaki visitor convince ho jaye:
• Hero Section: Ek solid headline jo customer ki problem solve kare.
• Social Proof: Aapke purane clients ke reviews, ratings aur logos.
• Benefits Section: Sirf features nahi, balki yeh dikhana ki aapki service se client ka kya faida hoga.
• CTA (Call to Action): "Book Now" ya "Get Free Quote" ke buttons har sahi jagah par placement.

4. Next.js Power (Blink Loading)
Normal landing pages slow hote hain jisse 30-40% log page khulne se pehle hi chhod dete hain. Next.js mein aapka page "Blink" karte hi khul jayega, jisse client ke form bharne ke chances 20-30% badh jate hain.

5. Premium Features:
• Desktop & Mobile Responsive: 90% leads mobile se aati hain, isliye hum mobile view ko priority dete hain.
• WhatsApp & Call Integration: One-click connectivity.
• Automated Lead Tracking: Jo bhi form bharega, uski details direct aapke email par aayengi.
• Google Maps & Contact Info: Aapki physical presence dikhane ke liye.`,
    highlights: [
      { label: "Goal", value: "Lead Generation & Direct Bookings" },
      { label: "Tech Stack", value: "Next.js, React, Tailwind CSS" },
      { label: "Target", value: "Service Providers, Doctors, Consultants" },
      { label: "Speed", value: "Under 1 Second (Ultra Fast)" },
      { label: "Ads Ready", value: "Perfect for FB/Google Ads" },
      { label: "Support", value: "30 Days Free Support" },
    ],
  },
  {
    id: 9,
    title: "Webinar / Event Landing Page",
    image: "/assets/webinar landing page.png",
    videos: [
      "/assets/webinar landing page.png",
      "/assets/youtuber landing page.png",
      "/assets/insta influncer landing page.png",
      "/assets/Webinar  Event Landing Page.mp4",
      "/assets/What is a Landing Page.mp4",
    ],
    badge: "POPULAR",
    discount: "23%",
    features: [
      "1 High-converting webinar/event page",
      "Countdown Timer included",
      "Speaker / host bios section",
      "Date & time section with Google Calendar",
      "Registration form with Auto-sync",
      "Google Sheets & Email Notification",
      "Sticky 'Register Now' button",
      "Mobile responsive design",
      "Fastest Loading (Next.js)",
      "Basic SEO setup",
      "Development in Next.js",
    ],
    price: "₹14,999",
    originalPrice: "₹19,479",
    delivery: "4–6 din",
    tag: "One Time",
    category: "Landing Pages",
    detailedDescription: `
High-Conversion Webinar & Event Landing Page (For Coaches & Creators)

1. Purpose-Built for Coaches & Creators
Yeh page khas taur par un creators ke liye taiyar kiya gaya hai jo Facebook ya Instagram Ads ke zariye webinar registrations laana chahte hain. Is ka har element lead convert karne ke liye design kiya gaya hai.

2. Urgency & Action (Conversion Elements)
• Countdown Timer: Webinar start hone ka time dikhakar urgency create karta hai jo registration rate ko 20-30% badha deta hai.
• Sticky CTA Button: Ek constant "Register Now" button jo mobile par hamesha dikhta rahega.
• Multiple CTAs: Page par 2-3 baar logical positions par registration buttons ka placement.

3. Complete Event Lifecycle
• Speaker Profile Section: Host ki expertise aur authority dikhane ke liye.
• Detailed Agenda: Webinar mein kya sikhaya jayega, uska step-by-step breakdown.
• Mobile view First: Kyunki 90% registrations mobile se aati hain, isliye design mobile-first rehta hai.

4. Data Integration (Smart Lead System)
Aapko leads manually download nahi karni padengi. Hum system ko aise setup karte hain ki registration hote hi:
• Google Sheets: Data automatic real-time mein aapki sheet mein upload ho jayega.
• Email Notification: Aapko turant ek email notification milega lead aate hi.

5. Speed (The Next.js Edge)
Next.js ki wajah se aapka landing page "Blink" karte hi 1-2 seconds mein load ho jata hai. Agar page slow ho, toh ads ka paisa waste hota hai, par hamare fast landing page ke saath aapke ads ka ROI badh jayega.

Vaule Table:
• Design & Development: ₹10,000 (Coding + Mobile Responsive)
• Lead System Integration: ₹3,000 (Google Sheets/Email setup)
• Performance & SEO: ₹2,000 (Ultra Fast Optimization)`,
    highlights: [
      { label: "Used For", value: "Webinars, Events, Ad Campaigns" },
      { label: "Urgency Tools", value: "Countdown Timer & Sticky CTAs" },
      { label: "Data Flow", value: "Auto-sync to Google Sheets/Email" },
      { label: "Tech Stack", value: "Next.js, Tailwind, Fast-Load" },
      { label: "Load Time", value: "1-2 Seconds (Mobile First)" },
      { label: "ROI Focus", value: "Built for High Ads Conversion" },
    ],
  },
  {
    id: 10,
    title: "SaaS / App Landing Page",
    image: "/assets/sass app page.png",
    videos: [
      "/assets/sass app page.png",
      "/assets/app landing page.png",
      "/assets/App Web Site.mp4",
      "/assets/What is a Landing Page.mp4",
    ],
    badge: "PREMIUM",
    discount: "32%",
    features: [
      "1 SaaS / App landing page",
      "Hero section (product intro)",
      "Features / benefits section",
      "App screenshots section",
      "Pricing / plans section",
      "Free trial / signup form",
      "Call-to-action buttons",
      "Contact / support section",
      "Mobile responsive design",
      "Fastest loading optimization",
      "Basic SEO setup",
      "Development in Next.js",
      "Domain & Hosting Not Included",
    ],
    price: "₹16,999",
    originalPrice: "₹24,999",
    delivery: "5–7 days",
    tag: "One Time",
    category: "Landing Pages",
    detailedDescription:
      "Specifically crafted for software and apps. This plan includes sections for detailed feature breakdowns, interactive pricing tables, and screenshots walkthroughs. It's designed to build authority and explain complex tech simply to your users. It feels 'tech-first' and uses modern animations to showcase your digital product.",
  },
  {
    id: 11,
    title: "Lead Magnet Landing Page",
    image: "/assets/lead page.png",
    videos: [
      "/assets/lead page.png",
      "/assets/free concltation.png",
      "/assets/What is a Landing Page.mp4",
    ],
    badge: "POPULAR",
    discount: "35%",
    features: [
      "1 Lead Magnet landing page",
      "Hero section (free offer highlight)",
      "Lead capture form",
      "Download / access button",
      "Benefits section",
      "CTA buttons",
      "Email notification on signup",
      "Mobile responsive design",
      "Fastest loading optimization",
      "Basic SEO setup",
      "Development in Next.js",
      "Domain & Hosting Not Included",
    ],
    price: "₹8,499",
    originalPrice: "₹12,999",
    delivery: "3–5 days",
    tag: "One Time",
    category: "Landing Pages",
    detailedDescription:
      "The gold standard for email list building. This page is laser-focused on your free offer (E-book, Checklist, Video). It's designed to remove all distractions, forcing the user to focus on the value and your opt-in form. Perfect for influencers, coaches, and marketers building their funnel foundation.",
  },
  {
    id: 6,
    title: "Maintenance Plan",
    image: "/assets/ssl1.svg",
    badge: "ESSENTIAL",
    discount: "15%",
    features: ["Monthly Backup", "Security Updates", "Small Changes"],
    price: "₹2,000",
    originalPrice: "₹2,500",
    delivery: "Ongoing",
    tag: "/ month",
    category: "BUSINESS",
    detailedDescription:
      "Don't let your website break or get outdated. Our Maintenance Plan keeps your site running smoothly with regular backups, core updates, and priority support for small text or image changes. It's insurance for your digital asset, giving you peace of mind so you can focus on your business.",
  },
  {
    id: 15,
    title: "Protein Website (Starter)",
    image: "/assets/protein website.png",
    videos: ["/assets/protein website.png"],
    badge: "NEW",
    discount: "30%",
    features: [
      "Protein (Supplement) Website Pricing",
      "Single brand / 10–20 products",
      "Product listing",
      "Add to cart",
      "Basic design",
      "WhatsApp order",
      "Development in Next.js",
      "Mobile Responsive",
      "Domain & Hosting Not Included",
    ],
    price: "₹28,999",
    originalPrice: "₹39,999",
    delivery: "4–6 days",
    tag: "One Time",
    category: "Protein Website",
    detailedDescription:
      "Start your supplement brand online with our specialized Protein Starter Website. This plan is perfect for local brands or single-brand distributors looking to showcase 10-20 products. It includes a sleek product listing, a functional cart, and direct WhatsApp ordering to close sales faster. Built with Next.js for lightning speed.",
  },
  {
    id: 16,
    title: "Standard E-commerce (Best option)",
    image: "/assets/proper supplement store.png",
    videos: ["/assets/proper supplement store.png"],
    badge: "BEST SELLER",
    discount: "40%",
    features: [
      "Standard E-commerce Supplement Store",
      "Proper supplement store experience",
      "Payment gateway (UPI, cards)",
      "Cart + checkout",
      "Admin panel",
      "Mobile responsive",
      "Basic SEO",
      "Next.js High Performance",
      "Highly Scalable",
    ],
    price: "₹48,999",
    originalPrice: "₹79,999",
    delivery: "10–14 days",
    tag: "One Time",
    category: "Protein Website",
    detailedDescription:
      "This is our most popular plan for protein and supplement stores looking for a full E-commerce setup. It features a complete shopping experience with integrated payment gateways (UPI, Credit/Debit cards), a dedicated admin panel for inventory management, and a robust cart system. Perfect for multi-brand stores or growing supplement companies wanting to scale fast. Price varies between ₹30,000 to ₹80,000 depending on SKU volume and custom admin features.",
  },
  {
    id: 17,
    title: "Advanced Protein Brand Website",
    image: "/assets/advanced protein website.png",
    videos: ["/assets/advanced protein website.png"],
    badge: "ENTERPRISE",
    discount: "50%",
    features: [
      "Advanced Protein Brand Solution",
      "Serious business / Global brand features",
      "Custom UI/UX Design (Bespoke)",
      "User Login & Profile Dashboard",
      "Offers / Coupons & Loyalty Points",
      "Live Inventory System Management",
      "Score: 100 Fast Performance",
      "Multi-Brand Catalog Support",
      "Global Shipping Integration Ready",
    ],
    price: "₹1,19,999",
    originalPrice: "₹2,39,999",
    delivery: "21–30 days",
    tag: "One Time",
    category: "Protein Website",
    detailedDescription:
      "If you are a serious supplement brand with high volume and specific design needs, our Advanced Brand Plan is the ultimate choice. It includes a completely custom, bespoke design tailored to your brand identity. Features include a full-fledged customer login system with order history, coupon/offer engines for marketing, and a live inventory system to track every sale. Built with top-tier tech to ensure enterprise-level speed and security. Price ranges from ₹80,000 to ₹2,00,000+ based on custom CRM/ERP integrations.",
  },
  {
    id: 18,
    title: "High-level Brand (Startup / Big brand)",
    image: "/assets/high level protein brand.png",
    videos: ["/assets/high level protein brand.png"],
    badge: "SCALABLE",
    discount: "60%",
    features: [
      "High-level Infrastructure Solution",
      "Startup Scale / Big Brand Presence",
      "Full Custom Development (No limitations)",
      "CRM / Marketing Automation Integration",
      "High Traffic / Load Balancing Ready",
      "Multi-Country / Currency Support",
      "Dedicated Enterprise Level Support",
      "Custom BI & Analytics Dashboard",
    ],
    price: "₹2,49,999",
    originalPrice: "₹4,99,999",
    delivery: "45–60 days",
    tag: "One Time",
    category: "Protein Website",
    detailedDescription:
      "For massive sports nutrition brands and high-growth fitness startups, the High-level Brand Plan is our elite digital infrastructure offering. This isn't just a website; it's a scalable commerce engine built for millions of hits. We provide deep integration with custom CRMs, marketing automation, and multi-country shipping logic. Designed to handle high-traffic spikes without lag, using state-of-the-art server-side rendering and edge computing. Price ranges from ₹1,00,000 to ₹5,00,000+ tailored to custom infrastructure and scale requirements.",
  },
  {
    id: 19,
    title: "Protein Informational Website",
    image: "/assets/informational protein website.png",
    videos: ["/assets/informational protein website.png"],
    badge: "BUDGET",
    discount: "20%",
    features: [
      "Pure Informational Fitness Website",
      "Perfect for Brand Introduction",
      "Home, About, Showcase, Contact Pages",
      "Mobile Responsive & Modern UI",
      "Fixed WhatsApp Support Button",
      "Contact Form Integration",
      "Fast 2–4 Days Delivery",
      "Basic SEO Setup",
    ],
    price: "₹11,999",
    originalPrice: "₹14,999",
    delivery: "2–4 days",
    tag: "One Time",
    category: "Protein Website",
    detailedDescription:
      "If you just need a professional online identity for your supplement brand without full e-commerce complexity, our Informational Plan is for you. It's built for startups and distributors who want to showcase their products (no cart/checkout) and tell their brand story. The plan includes essential pages: Home, About Brand, Product Showcase, and a dedicated Contact page. It's completely mobile-responsive, looks premium, and includes a fixed WhatsApp button for direct leads. Price is kept between ₹10,000 to ₹15,000 for maximum affordability.",
  },
  {
    id: 20,
    title: "Standard Informational Website (CMS)",
    image: "/assets/standard informational protein cms.png",
    videos: ["/assets/standard informational protein cms.png"],
    badge: "MOST POPULAR",
    discount: "15%",
    features: [
      "5–8 Premium Fitness Pages",
      "User-Friendly Admin Dashboard (CMS)",
      "Edit Content & Images Yourself",
      "Manage Product Showcase Easily",
      "Modern UI (High-End Fitness Aesthetic)",
      "Fast Loading & Performance Speed",
      "Lead Management & Contact Form",
      "Advanced Basic SEO Setup",
    ],
    price: "₹26,999",
    originalPrice: "₹32,999",
    delivery: "5–7 days",
    tag: "One Time",
    category: "Protein Website",
    detailedDescription:
      "Our Standard Informational Plan is the choice for 80% of protein brands. It combines a premium, fitness-style modern UI with a powerful Admin Dashboard (CMS), giving you full control over your site. Without any coding, you can update Home page text, About brand story, Product images, and prices. The dashboard allows you to add/edit/delete products in your showcase instantly. It features 5–8 high-quality pages, fast performance, and a professional look that builds massive trust with your customers. This is the ultimate balance of affordability and long-term convenience. Price range: ₹25,000 – ₹30,000.",
  },
];
