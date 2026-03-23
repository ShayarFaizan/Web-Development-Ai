import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// Supabase configuration
const SUPABASE_URL = "https://rsyyzokrhmqmypwbgbzk.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzeXl6b2tyaG1xbXlwd2JnYnprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyMTY4NzIsImV4cCI6MjA2Njc5Mjg3Mn0.2R_xw0VohyycGZKc8qqqBQP2teJIvvLyjQq7hOKXNFg";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Newsletter subscribe form logic
const subscribeForm = document.getElementById("subscribe-form");
const subscribeEmail = document.getElementById("subscribe-email");
const subscribeMessage = document.getElementById("subscribe-message");

if (subscribeForm) {
  subscribeForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent default form submit and scroll
    const email = subscribeEmail.value.trim();
    subscribeMessage.textContent = "";
    if (!email) {
      subscribeMessage.textContent = "Please enter a valid email.";
      subscribeMessage.style.color = "red";
      return;
    }
    // Insert email into Supabase
    const { data, error } = await supabase.from("subscribers").insert([{ email }]);
    if (error) {
      subscribeMessage.textContent = `Error: ${error.message}`;
      subscribeMessage.style.color = "red";
      console.error("Supabase insert error:", error);
      if (error.details) console.error("Error details:", error.details);
      if (error.hint) console.error("Error hint:", error.hint);
    } else {
      subscribeMessage.textContent = "Data saved!";
      subscribeMessage.style.color = "yellow";
      subscribeForm.reset();
    }
  });
}

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".service__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".about__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__list li", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});

ScrollReveal().reveal(".portfolio__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".portfolio__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".portfolio__image", {
  ...scrollRevealOption,
  origin: "right",
  delay: 1000,
});
ScrollReveal().reveal(".portfolio__list li", {
  ...scrollRevealOption,
  interval: 500,
  delay: 1500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});

ScrollReveal().reveal(".subscribe__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".subscribe__content form", {
  ...scrollRevealOption,
  delay: 500,
});

// Dark mode toggle logic
const darkModeToggle = document.getElementById("dark-mode-toggle");
const darkModeIcon = darkModeToggle.querySelector("i");

function setDarkMode(enabled) {
  document.body.classList.toggle("dark-mode", enabled);
  darkModeIcon.className = enabled ? "ri-sun-line" : "ri-moon-line";
  localStorage.setItem("darkMode", enabled ? "on" : "off");
}

// Load preference
const darkPref = localStorage.getItem("darkMode");
if (darkPref === "on") {
  setDarkMode(true);
}

darkModeToggle.addEventListener("click", () => {
  const enabled = !document.body.classList.contains("dark-mode");
  setDarkMode(enabled);
});

// === Review Section Logic ===
const reviewForm = document.getElementById("review-form");
const reviewName = document.getElementById("review-name");
const reviewText = document.getElementById("review-text");
const reviewRating = document.getElementById("review-rating");
const reviewMessage = document.getElementById("review-message");
const reviewsList = document.getElementById("reviews-list");
const ratingSummary = document.getElementById("rating-summary");

let showAllReviews = false; // Track toggle state

async function loadReviews() {
  if (!reviewsList) return;
  reviewsList.innerHTML = '<div class="text-gray-400 text-center">Loading reviews...</div>';
  const { data, error } = await supabase.from("reviews").select("*");
  console.log(data, error);
  if (error) {
    reviewsList.innerHTML = `<div class='text-red-500 text-center'>Failed to load reviews.</div>`;
    return;
  }
  if (!data || data.length === 0) {
    reviewsList.innerHTML = '<div class="text-gray-400 text-center">No reviews yet. Be the first!</div>';
    return;
  }

  // Show only first 3 reviews unless expanded
  const reviewsToShow = showAllReviews ? data : data.slice(0, 3);

  reviewsList.innerHTML = reviewsToShow.map((r, idx) => {
    const isLong = r.review.length > 100;
    const shortText = r.review.slice(0, 100);
    return `
      <div class="bg-white text-gray-800 rounded-lg shadow p-3 flex flex-col gap-1 mb-3 sm:mb-4">
        <div class="flex items-center gap-2">
          <span class="font-semibold text-black-500">${r.name || 'Anonymous'}</span>
          <span class="text-xs text-gray-400 ml-auto">${new Date(r.created_at).toLocaleDateString()}</span>
        </div>
        <div class="flex items-center gap-1 text-yellow-500">
          ${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}
        </div>
        <div class="text-gray-800 review-text" data-idx="${idx}">
          ${isLong
            ? `<span class="short">${shortText}…</span>
               <span class="full hidden">${r.review}</span>
               <button class="toggle-review text-blue-500 underline ml-2" data-idx="${idx}">Read more</button>`
            : r.review
          }
        </div>
      </div>
    `;
  }).join("");

  // Add expand/collapse logic for long reviews
  setTimeout(() => {
    document.querySelectorAll('.toggle-review').forEach(btn => {
      btn.addEventListener('click', function() {
        const idx = this.getAttribute('data-idx');
        const reviewDiv = document.querySelector(`.review-text[data-idx="${idx}"]`);
        const shortSpan = reviewDiv.querySelector('.short');
        const fullSpan = reviewDiv.querySelector('.full');
        if (fullSpan.classList.contains('hidden')) {
          shortSpan.classList.add('hidden');
          fullSpan.classList.remove('hidden');
          this.textContent = 'Show less';
        } else {
          shortSpan.classList.remove('hidden');
          fullSpan.classList.add('hidden');
          this.textContent = 'Read more';
        }
      });
    });
  }, 0);

  // Add "Read More"/"Show Less" button if needed
  const readMoreBtnId = "read-more-reviews-btn";
  if (data.length > 3) {
    reviewsList.innerHTML += `
      <div class="flex justify-center mt-4">
        <button id="${readMoreBtnId}" class="btn bg-orange-500 text-white hover:bg-orange-600 transition px-4 py-2 rounded">
          ${showAllReviews ? "Show Less" : "Read More"}
        </button>
      </div>
    `;
    setTimeout(() => {
      document.getElementById(readMoreBtnId).onclick = function() {
        showAllReviews = !showAllReviews;
        loadReviews();
      };
    }, 0);
  }

  // --- Add: Rating summary logic at the end ---
  if (typeof ratingSummary !== 'undefined' && ratingSummary) {
    const total = data.length;
    const sum = data.reduce((acc, r) => acc + (parseInt(r.rating) || 0), 0);
    const avg = sum / total;
    const fullStars = Math.round(avg);
    ratingSummary.innerHTML = `
      <div class="flex items-center justify-center gap-2 text-2xl mb-2">
        <span class="text-yellow-400">${'★'.repeat(fullStars)}${'☆'.repeat(5 - fullStars)}</span>
        <span class="text-white-700 text-lg">${avg.toFixed(1)} / 5</span>
      </div>
      <div class="text-center text-white-500 text-sm">Based on ${total} review${total > 1 ? 's' : ''}</div>
    `;
  }
}

if (reviewForm) {
  reviewForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    reviewMessage.textContent = "";
    const name = reviewName.value.trim();
    const review = reviewText.value.trim();
    const rating = parseInt(reviewRating.value);
    if (!name || !review || !rating) {
      reviewMessage.textContent = "Please fill all fields and select a rating.";
      reviewMessage.className = "text-red-500 text-center text-sm";
      return;
    }
    const { error } = await supabase.from("reviews").insert([{ name, review, rating }]);
    if (error) {
      reviewMessage.textContent = `Error: ${error.message}`;
      reviewMessage.className = "text-red-500 text-center text-sm";
    } else {
      reviewMessage.textContent = "Thank you for your review!";
      reviewMessage.className = "text-green-500 text-center text-sm";
      reviewForm.reset();
      loadReviews();
    }
  });
  // Initial load
  loadReviews();
}

// === All Reviews Section Toggle Logic ===
const toggleAllReviewsBtn = document.getElementById("toggle-all-reviews-btn");
const allReviewsSection = document.getElementById("all-reviews-section");
const allReviewsList = document.getElementById("all-reviews-list");

if (toggleAllReviewsBtn && allReviewsSection && allReviewsList) {
  let allReviewsVisible = false;
  toggleAllReviewsBtn.addEventListener("click", async () => {
    allReviewsVisible = !allReviewsVisible;
    if (allReviewsVisible) {
      allReviewsSection.classList.remove("hidden");
      toggleAllReviewsBtn.textContent = "Show Less";
      // Fetch and render all reviews.
      allReviewsList.innerHTML = '<div class="text-gray-400 text-center">Loading reviews...</div>';
      const { data, error } = await supabase.from("reviews").select("*").order("created_at", { ascending: false });
      if (error) {
        allReviewsList.innerHTML = `<div class='text-red-500 text-center'>Failed to load reviews.</div>`;
        return;
      }
      if (!data || data.length === 0) {
        allReviewsList.innerHTML = '<div class="text-gray-400 text-center">No reviews yet.</div>';
        return;
      }
      allReviewsList.innerHTML = data.map((r, idx) => {
        const isLong = r.review.length > 100;
        const shortText = r.review.slice(0, 100);
        return `
          <div class="bg-white text-gray-800 rounded-lg shadow p-3 flex flex-col gap-1 mb-3 sm:mb-4">
            <div class="flex items-center gap-2">
              <span class="font-semibold text-orange-500">${r.name || 'Anonymous'}</span>
              <span class="text-xs text-gray-400 ml-auto">${new Date(r.created_at).toLocaleDateString()}</span>
            </div>
            <div class="flex items-center gap-1 text-yellow-400">
              ${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}
            </div>
            <div class="text-gray-800 review-text" data-idx="all-${idx}">
              ${isLong
                ? `<span class="short">${shortText}…</span>
                   <span class="full hidden">${r.review}</span>
                   <button class="toggle-review text-blue-500 underline ml-2" data-idx="all-${idx}">Read more</button>`
                : r.review
              }
            </div>
          </div>
        `;
      }).join("");
      // Add expand/collapse logic for long reviews in all reviews section
      setTimeout(() => {
        document.querySelectorAll('#all-reviews-list .toggle-review').forEach(btn => {
          btn.addEventListener('click', function() {
            const idx = this.getAttribute('data-idx');
            const reviewDiv = document.querySelector(`#all-reviews-list .review-text[data-idx="${idx}"]`);
            const shortSpan = reviewDiv.querySelector('.short');
            const fullSpan = reviewDiv.querySelector('.full');
            if (fullSpan.classList.contains('hidden')) {
              shortSpan.classList.add('hidden');
              fullSpan.classList.remove('hidden');
              this.textContent = 'Show less';
            } else {
              shortSpan.classList.remove('hidden');
              fullSpan.classList.add('hidden');
              this.textContent = 'Read more';
            }
          });
        });
      }, 0);
    } else {
      allReviewsSection.classList.add("hidden");
      toggleAllReviewsBtn.textContent = "Read More";
    }
  });
}



// === Date formatting helper ===
function formatDateTime(isoString) {
  if (!isoString) return '';
  const date = new Date(isoString);
  if (isNaN(date)) return '';
  return date.toLocaleString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
}


