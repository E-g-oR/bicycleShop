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
   breakpoints: {
      // when window width is >= 320px
      320: {
         spaceBetween: 30,
         slidesPerView: 1,
         // navigation: undefined
      },
      515: {
         spaceBetween: 30,
         slidesPerView: 0.8,
         // navigation: undefined
      },
      // when window width is >= 480px
      730: {
         spaceBetween: 50,
         slidesPerView: 1,
         // pagination: undefined
      },
      // when window width is >= 640px
      900: {
         spaceBetween: 70,
         slidesPerView: 1.5
      }
   },
   // on: {
   //    init: function () {
   //       checkArrow();
   //    },
   //    resize: function () {
   //       checkArrow();
   //    }
   // }
});

// function checkArrow() {
//    var swiperPrev = document.querySelector('.swiper-button-prev');
//    var swiperNext = document.querySelector('.swiper-button-next');
//    if (window.innerWidth > 730) {
//       console.log('Success', window.innerWidth);
//       swiperPrev.style.display = 'flex';
//       swiperNext.style.display = 'flex';
//    } else {
//       swiperPrev.style.display = 'none';
//       swiperNext.style.display = 'none';
//    }
// };
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
