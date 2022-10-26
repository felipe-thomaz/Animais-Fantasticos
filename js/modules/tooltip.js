export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bind do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // Move a tooltip com a base em seus estilos de acordo com a posição do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if(event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`
    } else {
      this.tooltipBox.style.left = `${event.pageX + 15}px`;
    }
  }
  
  // Remove a tooltip e os eventos do mouseleave e mousemove
  onMouseLeave({currentTarget}) { // desestruturando o "event.currentTarget" pois só será utilizado o método de currentTarget do evento, caso tivesse a utilização de mais de um método do event, não seria possível fazer a desestruturação

    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave); // tira o evento de escuta do DOM para deixar o código mais otimizado.
    currentTarget.removeEventListener('mousemove', this.onMouseMove); // tira o evento de escuta do DOM para deixar o código mais otimizado.
  }
  
  // Cria a tooltip box e coloca no body
  criarTooltipBox(elemento) {
    const tooltipBox = document.createElement('div');
    const text = elemento.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }
  
  // Cria a tooltip e adiciona os eventos de mouseleave e mousemove ao target
  onMouseOver({currentTarget}) {
    // cria a tooltip box e coloca em uma propriedade
    this.criarTooltipBox(currentTarget);
    
    currentTarget.addEventListener('mouseleave', this.onMouseLeave); // além de uma função, o addEventListener pode receber um objeto também. Desde que esse objeto possua o método handleEvent() para dar certo
    currentTarget.addEventListener('mousemove', this.onMouseMove);
  }
  
  // Adiciona os eventos de mouseover para cada tooltip que tiver na minha página
  addTooltipsEvent() {
    this.tooltips.forEach((tooltip) => {
      tooltip.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if(this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this; // retorna a própria Classe Tooltip
  }
}
