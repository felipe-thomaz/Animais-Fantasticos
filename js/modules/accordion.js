export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = 'ativo';

  function activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  if (accordionList.length) {
    // accordionList[0].classList.add(activeClass)
    // accordionList[0].nextElementSibling.classList.add(activeClass)

    accordionList.forEach((item) => {
      item.classList.add(activeClass);
      item.nextElementSibling.classList.add(activeClass);
      item.addEventListener('click', activeAccordion);
    });
  }
}
