import './swiper-bundle.min.js';

new Swiper('#bannerSwiper', {
  loop: true,
  navigation: {
    nextEl: '.banner-button-next',
    prevEl: '.banner-button-prev',
  },
});
