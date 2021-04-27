const categorySwiper = new Swiper('.product__slider', {
   // Optional parameters
   // direction: 'vertical',
   autoheight: false,
   loop: false,
   slidesPerView: 1,
   spaceBetween: 70,
   centeredSlides: true,
   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   // breakpoints: {
   //    // when window width is >= 320px
   //    320: {
   //       spaceBetween: 30,
   //       slidesPerView: 1,
   //       // navigation: undefined
   //    },
   //    515: {
   //       spaceBetween: 30,
   //       slidesPerView: 0.8,
   //       // navigation: undefined
   //    },
   //    // when window width is >= 480px
   //    730: {
   //       spaceBetween: 50,
   //       slidesPerView: 1,
   //       // pagination: undefined
   //    },
   //    // when window width is >= 640px
   //    900: {
   //       spaceBetween: 70,
   //       slidesPerView: 1.5
   //    }
   // },
   // on: {
   //    init: function () {
   //       checkArrow();
   //    },
   //    resize: function () {
   //       checkArrow();
   //    }
   // }
});