function initializeSwiper(selector, config) {
  const swiperConfig = {
      // Default parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
          el: '.swiper-pagination',
          clickable: true
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      scrollbar: {
          el: '.swiper-scrollbar',
      },
      // Overrides from config object
      ...config
  };

  return new Swiper(selector, swiperConfig);
}

document.addEventListener("DOMContentLoaded", function() {
  // Initialize Swiper for the first container
  initializeSwiper('.first-swiper', {
      slidesPerView: 1,
      breakpoints: {
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 5 }
      }
  });

  // Initialize Swiper for the second container with different settings
  initializeSwiper('.second-swiper', {
      slidesPerView: 3,
      breakpoints: {
          640: { slidesPerView: 5 },
      }
  });

  // Initialize Swiper for the third container with specific settings
  initializeSwiper('.third-swiper', {
      slidesPerView: 2,  // Adjust this number based on your design needs
      spaceBetween: 30,  // Adds space between slides
      loop: true,
      breakpoints: {
          640: { slidesPerView: 3 },

      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      }
  });
});