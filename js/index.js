import './swiper-bundle.min.js';

new Swiper('#bannerSwiper', {
  loop: true,
  navigation: {
    nextEl: '.banner-button-next',
    prevEl: '.banner-button-prev',
  },
});

const categorySwiperthumbsOptions = {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  centerInsufficientSlides: true,
  breakpoints: {
    480: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 6,
    },
  },
};

const categorySwiperOptions = {
  loop: true,
  spaceBetween: 10,
};

const swiperClassicThumbs1 = new Swiper('#classic .category-thumbs', categorySwiperthumbsOptions);

new Swiper('#classic .category-items', {
  ...categorySwiperOptions,
  navigation: {
    nextEl: '#classic .swiper-button-next',
    prevEl: '#classic .swiper-button-prev',
  },
  thumbs: {
    swiper: swiperClassicThumbs1,
  },
});

const swiperClassicThumbs2 = new Swiper('#wellness .category-thumbs', categorySwiperthumbsOptions);

new Swiper('#wellness .category-items', {
  ...categorySwiperOptions,
  navigation: {
    nextEl: '#wellness .swiper-button-next',
    prevEl: '#wellness .swiper-button-prev',
  },
  thumbs: {
    swiper: swiperClassicThumbs2,
  },
});

