document.addEventListener("DOMContentLoaded", () => {
  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // 1. Initial states
  gsap.set(".app-frame", { opacity: 0, scale: 0.9, y: 50 });
  gsap.set(".camera-img", {
    y: "2500%",
    rotate: 1000,
    scale: 2.2,
    visibility: "visible",
  });

  // Start text further out and more hidden for a dramatic "Image 1" feel
  gsap.set(".text-left", { x: "-60%", opacity: 0, visibility: "visible" });
  gsap.set(".text-right", { x: "60%", opacity: 0, visibility: "visible" });

  gsap.set(".navbar", { y: -50, opacity: 0, visibility: "visible" });
  gsap.set(".ui-elements", { y: 50, opacity: 0, visibility: "visible" });
  gsap.set(".viewfinder, .corner", { opacity: 0, visibility: "visible" });

  // Detail section initial hidden
  gsap.set(".detail-bg-slanted", { scaleX: 0, visibility: "visible" });
  gsap.set(".detail-content", { opacity: 0, visibility: "visible" });

  const entranceTl = gsap.timeline({
    defaults: {
      ease: "power4.out",
      duration: 1.5,
    },
  });

  // Entrance Sequence
  entranceTl
    .to(".app-frame", {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1.5,
      ease: "expo.out",
    })
    .to(
      ".camera-img",
      {
        y: "0%",
        rotate: 10,
        scale: 1,
        duration: 3,
        ease: "expo.out",
      },
      "-=1.0",
    )
    .to(
      ".text-right",
      {
        x: "0%",
        opacity: 1,
        duration: 2.5,
        ease: "expo.out",
      },
      "-=2.8",
    )
    .to(
      ".text-left",
      {
        x: "0%",
        opacity: 1,
        duration: 2.5,
        ease: "expo.out",
      },
      "-=2.8",
    )
    .to(".navbar", { y: 0, opacity: 1, duration: 0.8 }, "-=1.5")
    .to(".ui-elements", { y: 0, opacity: 1, duration: 0.8 }, "-=1.5")
    .to(
      ".viewfinder, .corner",
      { opacity: 1, duration: 1.2, stagger: 0.05 },
      "-=1.0",
    );

  // --- Scroll Animation ---

  let scrollCameraTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".detail-section",
      scroller: ".scroll-container",
      start: "top bottom",
      end: "top 10%",
      scrub: 1,
    },
  });

  scrollCameraTl
    .fromTo(".camera-wrapper", { top: "60%" }, { top: "55%", ease: "none" }, 0)
    .fromTo(
      ".camera-img",
      { scale: 1, rotate: 10 },
      { scale: 1.15, rotate: -5, ease: "none" },
      0,
    );

  // Hero text fading while scrolling
  gsap.to(".hero-text-container", {
    scrollTrigger: {
      trigger: ".detail-section",
      scroller: ".scroll-container",
      start: "top 100%",
      end: "top 50%",
      scrub: true,
    },
    opacity: 0,
    y: -50,
  });

  // Section 2 Background Transition
  gsap.to(".detail-bg-slanted", {
    scrollTrigger: {
      trigger: ".detail-section",
      scroller: ".scroll-container",
      start: "top 75%",
      end: "top 25%",
      scrub: 1,
    },
    scaleX: 1,
    ease: "power2.inOut",
  });

  // Section 2 Content Fade In
  gsap.to(".detail-content", {
    scrollTrigger: {
      trigger: ".detail-section",
      scroller: ".scroll-container",
      start: "top 70%",
      end: "top 45%",
      scrub: true,
    },
    opacity: 1,
    y: 0,
  });

  // --- Interactive Hover Parallax ---
  const frame = document.querySelector(".app-frame");
  frame.addEventListener("mousemove", (e) => {
    const rect = frame.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const moveX = (mouseX - centerX) / 50;
    const moveY = (mouseY - centerY) / 50;

    gsap.to(".camera-img", {
      x: moveX * 2,
      y: moveY * 2,
      duration: 1,
      ease: "power2.out",
    });

    // Slight text parallax for premium feel
    gsap.to(".hero-text", {
      x: moveX * 0.5,
      y: moveY * 0.5,
      duration: 1.5,
      ease: "power2.out",
    });
  });

  frame.addEventListener("mouseleave", () => {
    gsap.to(".camera-img", { x: 0, y: 0, duration: 1.5 });
    gsap.to(".hero-text", { x: 0, y: 0, duration: 1.5 });
  });
});
