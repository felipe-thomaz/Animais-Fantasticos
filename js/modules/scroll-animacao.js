import debounce from "./debounce";

export default class AnimacaoScroll {
  constructor(sections, targetClass){
    this.sections = document.querySelectorAll(sections);
    this.targetClass = targetClass;
    this.window60 = window.innerHeight * 0.6;

    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  // Pega a distância de cada item em relação ao topo do site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.window60),
      };
    });
  }

  // Verifica a distância em cada objeto em relação ao scroll do site
  checkDistance() {
    this.distance.forEach((item) => {
        if(window.pageYOffset > item.offset) {
          item.element.classList.add(this.targetClass);
        } else if (item.element.classList.contains(this.targetClass)) {
          item.element.classList.remove(this.targetClass);
        }
      });
  }

  init(){
    if(this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this
  }

  // Remove o event de scroll 
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
