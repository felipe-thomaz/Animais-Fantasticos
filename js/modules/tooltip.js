export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  function criarTooltipBox(elemento) {
    const tooltipBox = document.createElement('div');
    const text = elemento.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
  let onMouseLeave;
  let onMouseMove;
  function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this); // this faz referência ao tooltip da linha 17
    tooltipBox.style.top = `${event.pageY}px`;
    tooltipBox.style.left = `${event.pageX}px`;

    onMouseLeave.ttBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave); // além de uma função, o addEventListener pode receber um objeto também. Desde que esse objeto possua o método handleEvent() para dar certo

    onMouseMove.ttBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);
  }
  onMouseLeave = { // OBJETO
    ttBox: '',
    element: '',
    // passar EXATAMENTE o método handleEvent() para funcionar (não pode ser outro nome)
    handleEvent() {
      this.ttBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave); // tira o evento de escuta do DOM para deixar o código mais otimizado.
      this.element.removeEventListener('mousemove', onMouseMove); // tira o evento de escuta do DOM para deixar o código mais otimizado.
    },
  };

  onMouseMove = {
    ttBox: '',
    handleEvent(event) {
      this.ttBox.style.top = `${event.pageY + 20}px`;
      this.ttBox.style.left = `${event.pageX + 20}px`;
    },
  };

  tooltips.forEach((tooltip) => {
    tooltip.addEventListener('mouseover', onMouseOver);
  });
}
