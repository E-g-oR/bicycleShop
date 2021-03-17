const swiper = new Swiper('.swiper-container', {
   // Optional parameters
   // direction: 'vertical',
   loop: true,
   slidesPerView: 1.5,
   spaceBetween: 20,
   centeredSlides: true,
   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

});