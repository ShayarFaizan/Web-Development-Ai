"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  if (pathname === "/account" || pathname === "/cart") {
    return null;
  }

  return (
    <footer
      style={{
        backgroundColor: "#1a1a1a",
        color: "#fff",
        fontFamily: "Arial, Helvetica, sans-serif",
        paddingTop: "60px",
      }}
    >
      {/* ─── TOP BAR ─────────────────────────────────────────────────────────── */}
      <div
        style={{
          backgroundColor: "#222",
          border: "1px solid #3a3a3a",
          borderRadius: "10px",
          margin: "0px 16px",
          padding: "0px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontWeight: "700",
            fontSize: "20px",
            letterSpacing: "3px",
            color: "#fff",
            whiteSpace: "nowrap",
          }}
        >
          Web Development Ai
        </div>

        {/* Social Icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={socialIconStyle}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={socialIconStyle}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          {/* X (Twitter) */}
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            style={socialIconStyle}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            style={socialIconStyle}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
              <polygon
                points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                fill="#1a1a1a"
              />
            </svg>
          </a>
        </div>

        {/* App Store Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginTop: "4px",
          }}
        >
          <div
            style={{
              position: "relative",
              opacity: 0.7,
              cursor: "not-allowed",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "16px",
                right: "18px",
                background: "#e3bc7c",
                color: "#000",
                fontSize: "8px",
                fontWeight: "bold",
                padding: "2px 6px",
                borderRadius: "10px",
                zIndex: 10,
                letterSpacing: "0.5px",
              }}
            >
              COMING SOON
            </span>
            <Image
              src="/assets/google_play_badge1.png"
              alt="Get it on Google Play"
              width={112}
              height={33}
              style={{
                borderRadius: "6px",
                objectFit: "cover",
                filter: "grayscale(100%)",
              }}
            />
          </div>
          <div
            style={{
              position: "relative",
              opacity: 0.7,
              cursor: "not-allowed",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "8px",
                right: "13px",
                background: "#e3bc7c",
                color: "#000",
                fontSize: "8px",
                fontWeight: "bold",
                padding: "2px 6px",
                borderRadius: "10px",
                zIndex: 10,
                letterSpacing: "0.5px",
              }}
            >
              COMING SOON
            </span>
            <Image
              src="/assets/app_store_badge1.png"
              alt="Download on the App Store"
              width={97}
              height={33}
              style={{
                borderRadius: "6px",
                objectFit: "cover",
                filter: "grayscale(100%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* ─── 4-COLUMN LINKS ──────────────────────────────────────────────────── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "24px",
          padding: "40px 50px 30px 50px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
        className="footer-links-grid"
      >
        {/* Column 1: Know Us */}
        <div>
          <h4 style={colHeadingStyle}>Know Us</h4>
          <ul style={listStyle}>
            <li>
              <Link
                href="/about"
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="#"
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2: Services */}
        <div>
          <h4 style={colHeadingStyle}>Services</h4>
          <ul style={listStyle}>
            {[
              "Business Websites",
              "E-commerce Websites",
              "Landing Pages",
              "Maintenance Plans",
              "UI/UX Design",
            ].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  style={linkStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.textDecoration = "underline")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.textDecoration = "none")
                  }
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Shop */}
        <div>
          <h4 style={colHeadingStyle}>Upcomming Premium Services</h4>
          <ul style={listStyle}>
            {[
              "AI Development",
              "Custom Web Applications",
              "Web Application Development",
              "Mobile App Development",
              "Cloud Solutions",
              "Data Analytics",
            ].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  style={linkStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.textDecoration = "underline")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.textDecoration = "none")
                  }
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Customer Service */}
        <div>
          <h4 style={colHeadingStyle}>Customer Service</h4>
          <ul style={listStyle}>
            {[
              "Track Order",
              "Services Policy",
              "Replacement & Refunds",
              "Terms & Conditions",
              "Privacy Notice",
              "Cookie Notice",
              "Accessibility",
            ].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  style={linkStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.textDecoration = "underline")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.textDecoration = "none")
                  }
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
          {/* Column 5: Locations (Newly Added for SEO) */}
        <div>
          <h4 style={colHeadingStyle}>Our Presence</h4>
          <ul style={listStyle}>
            <li>
              <Link
                href="/blog/why-website-important-raipur-business"
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
              >
                Website Developer Raipur
              </Link>
            </li>
            <li>
              <Link
                href="/ecommerce-website-bilaspur"
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
              >
                Website Developer Bilaspur
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* ─── Why Businesses Choose Us ──────────────────────────────────────────────────── */}
      <div
        style={{
          padding: "0 50px 30px 50px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h4 style={{ ...colHeadingStyle, marginBottom: "10px" }}>
          Why Businesses Choose Us
        </h4>
        <p
          style={{
            fontSize: "11px",
            color: "#aaa",
            lineHeight: "1.7",
            maxWidth: "900px",
          }}
        >
          As the <strong style={{ color: "#fff" }}>best web developer Bilaspur</strong> and <strong style={{ color: "#fff" }}>top website development company in Raipur</strong>, we build fast, modern websites using AI-powered development. If you need an <strong style={{ color: "#fff" }}>affordable website developer Bilaspur</strong> or professional services in <strong style={{ color: "#fff" }}>Raipur</strong>, we ensure your business can launch quickly and grow online. <Link href="https://wa.me/916264906078" style={{ color: "#e3bc7c", textDecoration: "underline" }}>Hire web developer Raipur & Bilaspur</Link> today for a strong professional presence. 🚀
        </p>
      </div>

      {/* ─── PROMOTIONAL STRIP ───────────────────────────────────────────────── */}
      <div
        style={{
          background: "linear-gradient(90deg, #0d0d0d, #1a1a1a, #0d0d0d)",
          borderTop: "1px solid #333",
          padding: "14px 20px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#e3bc7c",
            fontSize: "13px",
            fontWeight: "bold",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Starting Website from <span style={{ color: "#fff" }}>₹9,999</span>{" "}
          <span style={{ color: "#555", margin: "0 10px" }}>|</span> Delivery in{" "}
          <span style={{ color: "#fff" }}>13–21 Days</span>
        </p>
      </div>

      {/* ─── BOTTOM COPYRIGHT ────────────────────────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid #333",
          padding: "16px 50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px",
          fontSize: "11px",
          color: "#777",
        }}
      >
        <span>
          © {new Date().getFullYear()} Web Development Ai. All Rights Reserved.
        </span>
        <span>Artificial intelligence (AI) Development</span>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .footer-links-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .footer-links-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};

// ─── Inline style objects ──────────────────────────────────────────────────────

const socialIconStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  border: "1px solid #555",
  backgroundColor: "transparent",
  cursor: "pointer",
  transition: "border-color 0.2s, background-color 0.2s",
  textDecoration: "none",
};

const colHeadingStyle: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: "700",
  color: "#fff",
  marginBottom: "16px",
  letterSpacing: "0.5px",
  textTransform: "none",
};

const listStyle: React.CSSProperties = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const linkStyle: React.CSSProperties = {
  fontSize: "12px",
  color: "#ccc",
  textDecoration: "none",
  transition: "color 0.2s",
  lineHeight: "1.4",
};

export default Footer;
