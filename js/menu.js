const menu = document.querySelector('.header-nav');

const menuToggler = document.querySelector('.header-nav');

menuToggler.addEventListener('click', () => {
  menu.classList.toggle('visible');
});
