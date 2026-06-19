var GraficosAcademicos = (function () {
  var graficoSituacao;
  var graficoMedias;

  function cores() {
    return {
      aprovado: "#16835f",
      recuperacao: "#d99b25",
      reprovado: "#b53d3d",
      barra: "#176b87"
    };
  }

  function iniciar() {
    var contextoSituacao = document.getElementById("graficoSituacao");
    var contextoMedias = document.getElementById("graficoMedias");

    graficoSituacao = new Chart(contextoSituacao, {
      type: "doughnut",
      data: {
        labels: ["Aprovadas", "Recuperação", "Reprovadas"],
        datasets: [{ data: [0, 0, 0], backgroundColor: [cores().aprovado, cores().recuperacao, cores().reprovado] }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: "bottom" } }
      }
    });

    graficoMedias = new Chart(contextoMedias, {
      type: "bar",
      data: {
        labels: [],
        datasets: [{ label: "Média ponderada", data: [], backgroundColor: cores().barra, borderRadius: 6 }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true, max: 10 } },
        plugins: { legend: { display: false } }
      }
    });
  }

  function renderizar(disciplinas) {
    var dados = CalculosAcademicos.indicadores(disciplinas);

    graficoSituacao.data.datasets[0].data = [dados.aprovado, dados.recuperacao, dados.reprovado];
    graficoSituacao.update();

    graficoMedias.data.labels = disciplinas.map(function (disciplina) {
      return disciplina.nome;
    });
    graficoMedias.data.datasets[0].data = disciplinas.map(function (disciplina) {
      return disciplina.mediaPonderada;
    });
    graficoMedias.update();
  }

  return {
    iniciar: iniciar,
    renderizar: renderizar
  };
})();
