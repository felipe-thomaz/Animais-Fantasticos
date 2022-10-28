import outsideClick from './outsideClick.js'

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus)
    this.activeClass = 'ativo'

    // Define os eventos como 'touchstart' e 'click' como argumento padrão de events
    if (events === undefined) {
      this.events = ['touchstart', 'click']
    } else {
      this.events = events
    }

    this.activateDropdownMenu = this.activateDropdownMenu.bind(this)
  }

  // Ativa o dropdown menu e adiciona a função que observa o click fora dele
  activateDropdownMenu(eventoClick) {
    eventoClick.preventDefault()
    // eventoClick.currentTarget é o parâmetro elemento na função outsideClick
    const element = eventoClick.currentTarget
    element.classList.add(this.activeClass)
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass)
    })
  }

  // adiciona os eventos ao dropdown menu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach(menu => {
      this.events.forEach(userEvent => {
        menu.addEventListener(userEvent, this.activateDropdownMenu)
      })

      // adicionando mais de um evento no EventListener
      // o userEvent é a array que leva os dois eventos (touchstart e click)
      // e é chamada dentro do EventListener abaixo:
      // ['touchstart', 'click'].forEach(userEvent => {
      // menu.addEventListener(userEvent, this.activateDropdownMenu)
      // });
    })
  }
  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent()
    }
    return this
  }
}
