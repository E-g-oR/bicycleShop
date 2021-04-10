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
   buttons = document.querySelector('.buttons'),
   topNavMenu = document.querySelector('.top-nav__menu'),
   topNavControls = document.querySelector('.top-nav__controls');

hamburgerMenu.addEventListener('click', () => {
   hamburgerMenu.classList.toggle('active');
   topNavMenu.classList.toggle('active');
   topNavControls.classList.toggle('active');
});
