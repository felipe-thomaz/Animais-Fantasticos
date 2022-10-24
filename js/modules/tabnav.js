export default class initTabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo'
  }

  // ativa a tab de acordo com o index da tab em questão
  activeTab(index) {
    const direcaoAnimacao = this.tabContent[index].dataset.anime;
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    this.tabContent[index].classList.add(this.activeClass, direcaoAnimacao);
  }

  // adiciona os eventos nas Tabs
  addTabNavEvent(){
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        this.activeTab(index);
      });
    });
  }

  init() {
    if(this.tabMenu.length && this.tabContent.length) {
      // ativar primeiro item
      this.activeTab(0)

      this.addTabNavEvent();
    }
    return this;
  }
}
