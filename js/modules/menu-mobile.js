import outsideClick from './outsideClick.js';

export default class MenuMobile {
  constructor(menuBtn, menuList, events) {
    this.menuBtn = document.querySelector(menuBtn);
    this.menuList = document.querySelector(menuList);
    this.activeClass = 'active'

    // Define os eventos como 'touchstart' e 'click' como argumento padrão de events
    if (events === undefined) {
      this.events = ['touchstart', 'click']
    } else {
      this.events = events;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuBtn.classList.add(this.activeClass);
    this.menuList.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuBtn.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((evento) => {
      this.menuBtn.addEventListener(evento, this.openMenu);
    });
  }

  init() {
    if(this.menuBtn && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
