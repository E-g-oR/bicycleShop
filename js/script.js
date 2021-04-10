const swiper = new Swiper('.swiper-container', {
   // Optional parameters
   // direction: 'vertical',
   autoheight: false,
   loop: true,
   slidesPerView: 1.5,
   spaceBetween: 70,
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
const hamburgerMenu = document.querySelector('.hamburger-menu'),
   switchLanguage = document.querySelector('.switch-language'),
   topNavMenu = document.querySelector('.top-nav__menu');