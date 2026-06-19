var AlunoController = (function () {
  function iniciar() {
    $("#formAluno").on("submit", function (evento) {
      evento.preventDefault();
      AppAcademico.atualizarAluno({
        nome: $("#alunoNome").val().trim(),
        curso: $("#alunoCurso").val().trim()
      });
      AnimacoesAcademicas.toast("Aluno salvo com sucesso.");
    });
  }

  function renderizar(aluno) {
    $("#alunoNome").val(aluno.nome || "");
    $("#alunoCurso").val(aluno.curso || "");
    $("#tituloAluno").text(aluno.nome ? "Olá, " + aluno.nome : "Olá, estudante");
  }

  return {
    iniciar: iniciar,
    renderizar: renderizar
  };
})();
