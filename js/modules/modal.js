export default function initModal() {
  const lineModal = document.querySelector('[data-modal="abrir"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  const botaoFecharModal = document.querySelector('[data-modal="fechar"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  function cliqueForaModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  if (lineModal && containerModal && botaoFecharModal) {
    lineModal.addEventListener('click', toggleModal);
    botaoFecharModal.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', cliqueForaModal);
  }
}
