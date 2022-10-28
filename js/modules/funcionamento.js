export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    // O SPLIT transforma uma String em uma Array. Já o MAP pega cada item da Array e trás uma Array nova, usando o construtor Number ele já retorna em números.
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number); 
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  dadosAtual() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const diaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto = this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1];
    return diaAberto && horarioAberto;
  }

  ativaAberto() {
    if(this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if(this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAtual();
      this.ativaAberto();
    }
    
  }
}
