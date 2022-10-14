import initOutsideClick from './outside-click.js';

export default function initMenuMobile() {
  const menuBtn = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  function openMenu() {
    menuBtn.classList.add('active');
    menuList.classList.add('active');
    initOutsideClick(menuList, ['click', 'touchstart'], () => {
      menuBtn.classList.remove('active');
      menuList.classList.remove('active');
    });
  }

  if (menuBtn) {
    ['click', 'touchstart'].forEach((evento) => {
      menuBtn.addEventListener(evento, openMenu);
    });
  }
}
