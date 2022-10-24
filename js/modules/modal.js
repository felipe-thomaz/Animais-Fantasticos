export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.openModalButton = document.querySelector(botaoAbrir);
    this.closeButton = document.querySelector(botaoFechar);
    this.modalContainer = document.querySelector(containerModal);

    // bind "this" ao callback para fazer referência ao objeto da classe.
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // abre ou fecha o modal
  toggleModal() {
    this.modalContainer.classList.toggle('ativo');
  }

  // adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    // this foi bindado ao this deste método
    this.toggleModal();
  }

  // fecha o modal ao clicar do lado de fora dela
  cliqueForaModal(event) {
    if (event.target === this.modalContainer) {
      this.toggleModal(event);
    }
  }

  // adiciona os eventos aos elementos do modal
  addModalEvents() {
    this.openModalButton.addEventListener('click', this.eventToggleModal);
    this.closeButton.addEventListener('click', this.eventToggleModal);
    this.modalContainer.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if(this.openModalButton && this.modalContainer && this.closeButton) {
      this.addModalEvents()
    }
    return this;
  }
}
