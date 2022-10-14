export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  let window60;
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - window60) < 0;
      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  if (sections.length) {
    window60 = window.innerHeight * 0.6;

    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
