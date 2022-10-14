import initOutsideClick from './outside-click.js';

export default function initDropdownMenu() {
}
const dropdownMenus = document.querySelectorAll('[data-dropdown]');

function handleClick(eventoClique) {
  eventoClique.preventDefault();
  this.classList.add('active');
  // console.log(this);  // o this é a própria li

  initOutsideClick(this, ['touchstart', 'click'], () => { // o this refere-se ao parâmetro "elemento"(li) da função outsideClick, já a function desta linha, refere-se ao parâmetro de callback da função outsideClick
    this.classList.remove('active');
    console.log(this);
  });
}

dropdownMenus.forEach((menu) => {
  menu.addEventListener('touchstart', handleClick);
  menu.addEventListener('click', handleClick);

  // adicionando mais de um evento no EventListener
  // o userEvent é a array que leva os dois eventos (touchstart e click)
  // e é chamada dentro do EventListener abaixo:
  // ['touchstart', 'click'].forEach(userEvent => {
  // menu.addEventListener(userEvent, handleClick)
  // });
});
