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

const swiperClassicThumbs3 = new Swiper('#deluxe .category-thumbs', categorySwiperthumbsOptions);

new Swiper('#deluxe .category-items', {
  ...categorySwiperOptions,
  navigation: {
    nextEl: '#deluxe .swiper-button-next',
    prevEl: '#deluxe .swiper-button-prev',
  },
  thumbs: {
    swiper: swiperClassicThumbs3,
  },
});

const menu = document.querySelector('.header-nav');

const menuToggler = document.querySelector('.menu-toggler');

menu.addEventListener('click', (e) => {
  const isLink = e.target.classList.contains('header-nav__link');
  if (isLink) e.currentTarget.classList.remove('visible');
});

menuToggler.addEventListener('click', () => {
  menu.classList.toggle('visible');
});

const modal = document.querySelector('.modal');

document.body.addEventListener('click', (e) => {
  const isBuyButton = e.target.classList.contains('button-buy');
  if (isBuyButton) modal.classList.add('visible');
});

modal.addEventListener('click', (e) => {
  const target = e.target;
  const isCloseButton = target.classList.contains('modal-close');
  // const isLink = target.parentNode.classList.contains('modal-link');
  const isOverlay = target.classList.contains('modal-overlay');
  if (isCloseButton || isOverlay) e.currentTarget.classList.remove('visible');
});
