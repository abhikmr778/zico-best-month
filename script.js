
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
      "6months": new Date("February 7, 2025 00:00:00"),
      // "6months": new Date("January 27, 2025 00:00:00"),
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

  const videoLinks = [
    "https://www.youtube.com/embed/Dx_fKPBPYUI",  // Ghibli LoFi
    "https://www.youtube.com/embed/4fDQwVC1g2M",  // Relaxing Ghibli Piano
    "https://www.youtube.com/embed/B5K4FjG3vrE",  // Anime Romance Playlist
    "https://www.youtube.com/embed/Et8c1U7jB7E",  // Love Songs Collection
    "https://www.youtube.com/embed/_QqxGWa7R-s"   // Romantic Ghibli Music
];

let currentVideoIndex = 0;
const videoFrame = document.getElementById("youtube-video");

function changeVideo(index) {
    videoFrame.src = videoLinks[index];
}

// Navigate videos
document.getElementById("prev-video").addEventListener("click", () => {
    currentVideoIndex = (currentVideoIndex - 1 + videoLinks.length) % videoLinks.length;
    changeVideo(currentVideoIndex);
});

document.getElementById("next-video").addEventListener("click", () => {
    currentVideoIndex = (currentVideoIndex + 1) % videoLinks.length;
    changeVideo(currentVideoIndex);
});

// Set default video on load
changeVideo(currentVideoIndex);

  
// Countdown target dates
// const countdowns = {
//     "6months": new Date("2025-02-07T00:00:00"),
//     // "6months": new Date("2025-01-27T00:00:00"),
//     "birthday": new Date("2025-02-10T00:00:00"),
//     "valentine": new Date("2025-02-14T00:00:00")
//   };
  
//   function startCountdown(eventId) {
//     const targetDate = countdowns[eventId];
//     const timerElement = document.getElementById(`timer-${eventId}`);
//     const contentElement = document.getElementById(`content-${eventId}`);
//     const countdownElement = document.getElementById(`countdown-${eventId}`);
  
//     const interval = setInterval(() => {
//       const now = new Date();
//       const timeLeft = targetDate - now;
  
//       if (timeLeft <= 0) {
//         clearInterval(interval);
//         countdownElement.classList.add("hidden");
//         contentElement.classList.remove("hidden");
//       } else {
//         const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
//         timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
//       }
//     }, 1000);
//   }
  
  // Call the countdown function for each event if the corresponding elements exist
  // if (document.getElementById("timer-6months")) startCountdown("6months");
  // if (document.getElementById("timer-birthday")) startCountdown("birthday");
  // if (document.getElementById("timer-valentine")) startCountdown("valentine");
  
  // document.addEventListener("DOMContentLoaded", function () {
  //   // Define event dates
  //   const eventDates = {
  //     // "6months": new Date("2025-02-07T00:00:00").getTime(),
  //     "6months": new Date("2025-01-27T00:00:00").getTime(),
  //     "birthday": new Date("2025-02-10T00:00:00").getTime(),
  //     "valentine": new Date("2025-02-14T00:00:00").getTime(),
  //   };
  
  //   // Function to update countdowns
  //   function updateCountdown() {
  //     const now = new Date().getTime();
  
  //     // Update each countdown
  //     for (let [event, date] of Object.entries(eventDates)) {
  //       const distance = date - now;
  //       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //       const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //       const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  //       // Display the result in the respective countdown element
  //       const countdownElement = document.getElementById(`timer-${event}`);
  //       if (distance > 0) {
  //         countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  //       } else {
  //         countdownElement.textContent = "It's time!";
  //       }
  //     }
  //   }
  
  //   // Update countdown every second
  //   updateCountdown(); // Initial call to display immediately
  //   setInterval(updateCountdown, 1000); // Update every second
  //   // setInterval(updateCountdown, 1000);
  // });
  
  // function toggleReadMore() {
  //   const readMore = document.getElementById('read-more');
  //   readMore.classList.toggle('hidden');
  // };

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

