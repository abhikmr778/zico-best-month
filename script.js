// document.addEventListener("DOMContentLoaded", function () {
//   const correctPassword = "yourpassword"; // Change this to your actual password
//   let attempt = prompt("Enter the password to access the site:");

//   if (attempt !== correctPassword) {
//       alert("Incorrect password. Try again.");
//       location.reload(); // Refresh the page if incorrect
//   }
// });

// Wait for the DOM and countdown logic to fully load
document.addEventListener('DOMContentLoaded', () => {
    initializeCountdowns(); // Replace with your countdown initialization function
    // Simulate a slight delay to ensure everything is ready (for example purposes)
    setTimeout(() => {
      document.body.classList.add('loaded'); // Hide preloader
    }, 100); // Adjust delay as necessary
  });
  

  // Example countdown initialization function
  function initializeCountdowns() {
    const eventDates = {
      "6months": new Date("February 7, 2025 08:00:00"),
      // "birthday": new Date("January 27, 2025 00:00:00"),
      "birthday": new Date("February 10, 2025 00:00:00"),
      "valentine": new Date("February 14, 2025 00:00:00")
    };
  
    Object.keys(eventDates).forEach(eventId => {
      const timerElement = document.getElementById(`timer-${eventId}`);
      if (!timerElement) return;
  
      const targetDate = eventDates[eventId];
  
      function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
  
        if (distance < 0) {
          timerElement.innerHTML = "Unlocked!";
          return;
        }
  
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
      const interval = setInterval(() => {
        const now = new Date();
        const timeLeft = targetDate - now;
        const contentElement = document.getElementById(`content-${eventId}`);
        const countdownElement = document.getElementById(`countdown-${eventId}`);
        if (timeLeft <= 0) {
          clearInterval(interval);
          countdownElement.classList.add("hidden");
          contentElement.classList.remove("hidden");
        } else {
          const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
          timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
      }, 1000);
  
      updateCountdown(); // Initial call to display immediately
      setInterval(updateCountdown, 1000); // Update every second
    });
  }

  
  function toggleReadMore() {
    const readMore = document.getElementById('read-more');
    readMore.classList.toggle('hidden');
  };

// Slideshow Logic
// Select all slides and navigation arrows
const slides = document.querySelectorAll(".slide");
const prevArrow = document.getElementById("prev-slide");
const nextArrow = document.getElementById("next-slide");

let currentSlideIndex = 0;

// Show a slide based on index
function showSlide(index) {
  // Reset all slides
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    slide.style.display = i === index ? "block" : "none";
  });

  slides[index].classList.add("active");
}

// Show next slide
function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Loop back to the first slide
  showSlide(currentSlideIndex);
}

// Show previous slide
function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length; // Loop back to the last slide
  showSlide(currentSlideIndex);
}

// Add event listeners for arrows
nextArrow.addEventListener("click", nextSlide);
prevArrow.addEventListener("click", prevSlide);

// Initialize the slideshow
showSlide(currentSlideIndex);


