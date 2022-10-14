export default function initOutsideClick(elemento, events, callback) {
  // o parâmetro elemento refere-se ao this, que na função handleClick é o próprio dropdown menu
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleOutsideClick(evento) {
    if (!elemento.contains(evento.target)) {
      // confere se o click está sendo dentro ou fora do menu dropdown,
      // caso esteja o elemento não contenha o target da li,
      // ele executa a função callback que remove a classe 'active'.

      // remove o atributo data-outside quando clica fora do dropdown
      elemento.removeAttribute(outside);

      // passa o método de remover o evento de 'touchstart' e 'click' juntos abaixo:
      // events.forEach(userEvent => {
      //   html.removeEventListener(userEvent, handleOutsideClick)
      // remove o evento de touchstart e click no HTML
      // })

      // passa o método de remover o evento de 'touchstart' e 'click' separadamente abaixo:
      events.forEach(() => {
        html.removeEventListener('touchstart', handleOutsideClick);
        html.removeEventListener('click', handleOutsideClick);
      });
      callback();
    }
  }
  if (!elemento.hasAttribute(outside)) {
    // verifica se o elemento(li) possui o 'data-outside', se não possuir,
    // ele faz manda o evento de escuta pro html e cria o atributo 'data-outside' na li.
    // Isso evita que o evento de escuta mande diversos eventos de click para o navegador,
    // deixando a página mais otimizada.

    events.forEach((userEvent) => {
      // colocar o setTimeOut para deixar a função assíncrona,
      // fazendo com que o EventBubble ocorra primeiro
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick);
      });
    });

    elemento.setAttribute(outside, ''); // cria o atributo de data-set dentro da <li>
  }
}
