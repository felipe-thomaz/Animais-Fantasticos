export default class Accordion {
  constructor(list){
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass) 
  }

  // adiciona os eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      // início do accordion com a classe 'ativo' em todos os itens (deixa o accordion com todos os itens abertos)
      item.classList.add(this.activeClass);
      item.nextElementSibling.classList.add(this.activeClass);
      // fim do accordion com a classe 'ativo' em todos os itens
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  // iniciar função
  init() {
    if(this.accordionList.length) {
      // ativar itens
      this.addAccordionEvent();
      this.toggleAccordion(this.accordionList[0]);
    }
  }
}
