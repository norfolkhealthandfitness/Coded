document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
      hamburger.addEventListener("click", () => {
          hamburger.classList.toggle("active");
          navMenu.classList.toggle("active");
      });

      document.querySelectorAll(".nav-link").forEach(m => m.addEventListener("click", () => {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
      }));
  } else {
      console.error("Hamburger or nav-menu element not found in the DOM.");
  }
});
