const categorySwiper = new Swiper('.product__slider', {
   autoheight: false,
   loop: false,
   slidesPerView: 1,
   spaceBetween: 70,
   centeredSlides: true,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   }
});
var rellax = new Rellax(".header__bg_img");