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

const swiperCategoryThumbs1 = new Swiper('#category1 .category-thumbs', categorySwiperthumbsOptions);

new Swiper('#category1 .category-items', {
  ...categorySwiperOptions,
  navigation: {
    nextEl: '#category1 .swiper-button-next',
    prevEl: '#category1 .swiper-button-prev',
  },
  thumbs: {
    swiper: swiperCategoryThumbs1,
  },
});
