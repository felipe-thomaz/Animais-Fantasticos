export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');

  const diasSemana = funcionamento.dataset.semana.split(',').map(Number); // O SPLIT transforma uma String em uma Array. Já o MAP pega cada item da Array e trás uma Array nova, usando o construtor Number ele já retorna em números.

  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const diaAberto = diasSemana.indexOf(diaAgora) !== -1;

  const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (diaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}
