export default class AnimacaoScroll {
  constructor(sections, targetClass){
    this.sections = document.querySelectorAll(sections);
    this.targetClass = targetClass;
    this.window60 = window.innerHeight * 0.6;

    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - this.window60) < 0;
      if (isSectionVisible) {
        section.classList.add(this.targetClass);
      } else if (section.classList.contains(this.targetClass)) {
        section.classList.remove(this.targetClass);
      }
    });
  }

  init(){
    this.animaScroll();
    window.addEventListener('scroll', this.animaScroll);
  }
}
