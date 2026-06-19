var ImportacaoAcademica = (function () {
  function iniciar() {
    $("#inputImportarJSON").on("change", function (evento) {
      var arquivo = evento.target.files[0];
      if (!arquivo) return;

      var leitor = new FileReader();
      leitor.onload = function () {
        try {
          var dados = JSON.parse(leitor.result);
          AppAcademico.importarDados(dados);
          AnimacoesAcademicas.toast("Dados importados.");
        } catch (erro) {
          AnimacoesAcademicas.toast("Arquivo JSON inválido.");
        }
        $("#inputImportarJSON").val("");
      };
      leitor.readAsText(arquivo);
    });
  }

  return {
    iniciar: iniciar
  };
})();
