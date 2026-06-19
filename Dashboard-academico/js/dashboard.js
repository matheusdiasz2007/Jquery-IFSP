var DashboardController = (function () {
  function renderizar(disciplinas) {
    var dados = CalculosAcademicos.indicadores(disciplinas);

    $("#totalDisciplinas").text(dados.total);
    $("#mediaGeral").text(dados.mediaGeral.toFixed(1));
    $("#crAluno").text(dados.cr.toFixed(1));
    $("#cargaTotal").text(dados.cargaHoraria + "h");
    $("#qtdAprovadas").text(dados.aprovado);
    $("#qtdRecuperacao").text(dados.recuperacao);
    $("#qtdReprovadas").text(dados.reprovado);
  }

  return {
    renderizar: renderizar
  };
})();
