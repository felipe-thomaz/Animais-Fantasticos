export default class ScrollSuave{
  constructor(links, opcoes){
    this.linksInternos = document.querySelectorAll(links);
    if(opcoes === undefined) {
      this.options = {
        behavior: 'smooth',
        block: 'start' // alinha o bloco ao início
      }
    } else {
      this.options = opcoes;
    }

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    // const topo = section.offsetTop;

    section.scrollIntoView(this.options);

    // forma alternativa
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth'
    // })
  }
  
  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this; // posso retornar outras propriedades no método init no arquivo 'script.js'
  }  
}
