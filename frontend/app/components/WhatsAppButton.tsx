"use client";

import React, { useState, useEffect, useRef } from "react";

const WhatsAppButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragMoved, setDragMoved] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const phoneNumber = "918319449833";
  const message =
    "Hello Web Development AI, I am interested in your web development services!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Default position: bottom-20 and right-4 on mobile, bottom-6/right-6 on desktop
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const initialX = window.innerWidth - (isMobile ? 56 : 72); // Button width included
    const initialY = window.innerHeight - (isMobile ? 136 : 80); // Higher on mobile for bottom bar
    setPosition({ x: initialX, y: initialY });
  }, []);

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    let clientX, clientY;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    setIsDragging(true);
    setDragStart({ x: clientX - position.x, y: clientY - position.y });
    setDragMoved(false);
  };

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;

    let clientX, clientY;
    if (e instanceof TouchEvent) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const isMobile = window.innerWidth < 768;
    const buttonWidth = buttonRef.current?.offsetWidth || (isMobile ? 44 : 56);
    const buttonHeight =
      buttonRef.current?.offsetHeight || (isMobile ? 44 : 56);
    const navbarFullHeight = 110; // Extra padding to stay below Navbar
    const bottomNavHeight = isMobile ? 80 : 20;

    setDragMoved(true);

    // Constraint: Stay below Navbar and above mobile menu
    const newX = Math.min(
      Math.max(0, clientX - dragStart.x),
      window.innerWidth - buttonWidth,
    );
    const newY = Math.min(
      Math.max(navbarFullHeight, clientY - dragStart.y),
      window.innerHeight - buttonHeight - bottomNavHeight,
    );

    setPosition({ x: newX, y: newY });
  };

  const [isMinimized, setIsMinimized] = useState(false);
  const [side, setSide] = useState<"left" | "right">("right");

  const handleEnd = () => {
    setIsDragging(false);

    if (dragMoved) {
      const isMobile = window.innerWidth < 768;
      const buttonWidth =
        buttonRef.current?.offsetWidth || (isMobile ? 44 : 56);
      const midPoint = window.innerWidth / 2;
      const isLeft = position.x + buttonWidth / 2 < midPoint;

      setSide(isLeft ? "left" : "right");

      // Calculate distance from the edge
      const distFromEdge = isLeft
        ? position.x
        : window.innerWidth - (position.x + buttonWidth);

      // Threshold: 30px for mobile, 60px for desktop
      const threshold = isMobile ? 30 : 60;

      if (distFromEdge < threshold) {
        const finalX = isLeft ? -(buttonWidth - 28) : window.innerWidth - 32;
        setPosition((prev) => ({ ...prev, x: finalX }));
        setIsMinimized(true);
      } else {
        const finalX = isLeft ? 10 : window.innerWidth - buttonWidth - 10;
        setPosition((prev) => ({ ...prev, x: finalX }));
        setIsMinimized(false);
      }
    }
  };

  const showButton = () => {
    if (!isMinimized) return;
    const isMobile = window.innerWidth < 768;
    const buttonWidth = buttonRef.current?.offsetWidth || (isMobile ? 44 : 56);

    // Smoothly bring it out with 10px padding
    const finalX = side === "left" ? 10 : window.innerWidth - buttonWidth - 10;
    setPosition((prev) => ({ ...prev, x: finalX }));
    setIsMinimized(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Keep in bounds on resize or scroll if needed
      if (!isDragging) {
        setPosition((prev) => ({
          x: Math.min(
            Math.max(0, prev.x),
            window.innerWidth - (buttonRef.current?.offsetWidth || 0),
          ),
          y: Math.min(
            Math.max(0, prev.y),
            window.innerHeight - (buttonRef.current?.offsetHeight || 0),
          ),
        }));
      }
    };
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, [isDragging]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchmove", handleMove);
      window.addEventListener("touchend", handleEnd);
    } else {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, dragStart, position]);

  const handleClick = () => {
    if (dragMoved) return;
    if (isMinimized) {
      showButton();
      return;
    }
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      ref={buttonRef}
      className="fixed z-999999 touch-none select-none group"
      onMouseEnter={showButton}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: isDragging
          ? "none"
          : "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      }}
    >
      <div
        onMouseDown={handleStart}
        onTouchStart={(e) => {
          e.stopPropagation();
          showButton();
          handleStart(e);
        }}
        onClick={handleClick}
        className={`relative flex items-center justify-center w-11 h-11 md:w-12 md:h-12 bg-green-500 text-white rounded-full shadow-2xl cursor-grab active:cursor-grabbing transform transition-all duration-300 ${isMinimized ? "opacity-50 hover:opacity-100 scale-90" : "scale-100 hover:scale-110"}`}
      >
        {/* Pulsing ring animation - hide when minimized to avoid distraction */}
        {!isMinimized && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
        )}

        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className={`w-6 h-6 md:w-7 md:h-7 z-10 fill-current pointer-events-none transition-transform duration-300 ${isMinimized && side === "left" ? "translate-x-3" : isMinimized && side === "right" ? "-translate-x-3" : ""}`}
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      </div>
    </div>
  );
};

export default WhatsAppButton;
