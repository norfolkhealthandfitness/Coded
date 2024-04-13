// Function to initialize Swiper
function initializeSwiper(selector, config) {
  new Swiper(selector, {
      direction: 'horizontal', // Default direction
      loop: true, // Enable looping of slides
      slidesPerView: 1, // Default number of slides to view on mobile
      spaceBetween: 10, // Default space between slides on mobile
      pagination: config.pagination, // Custom pagination settings
      navigation: config.navigation, // Custom navigation settings
      scrollbar: config.scrollbar, // Custom scrollbar settings
      breakpoints: {
          640: { // Tailwind's 'sm'
              slidesPerView: 1,
              spaceBetween: 10
          },
          768: { // Tailwind's 'md'
              slidesPerView: config.mediumSlides || 2, // Default to 2 or use provided value
              spaceBetween: 20
          },
          1024: { // Tailwind's 'lg'
              slidesPerView: config.largeSlides || 5, // Default to 5 or use provided value
              spaceBetween: 20
          },
      
      }
  });
}

// Initialize the first Swiper instance with specific parameters
initializeSwiper('.swiper1', {
  pagination: { el: '.swiper1 .swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper1 .swiper-button-next', prevEl: '.swiper1 .swiper-button-prev' },
  scrollbar: { el: '.swiper1 .swiper-scrollbar', draggable: true },
  mediumSlides: 3,
  largeSlides: 5,
  extraLargeSlides: 6
});

// Initialize the second Swiper instance with different parameters
initializeSwiper('.swiper2', {
  pagination: { el: '.swiper2 .swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper2 .swiper-button-next', prevEl: '.swiper2 .swiper-button-prev' },
  scrollbar: { el: '.swiper2 .swiper-scrollbar', draggable: true },
  mediumSlides: 2,
  largeSlides: 3,
});

initializeSwiper('.swiper3', {
  pagination: { el: '.swiper3 .swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper3 .swiper-button-next', prevEl: '.swiper1 .swiper-button-prev' },
  scrollbar: { el: '.swiper1 .swiper-scrollbar', draggable: true },
  mediumSlides: 3,
  largeSlides: 5,
  extraLargeSlides: 6
});