var BoletimAcademico = (function () {
  function renderizar(aluno, disciplinas) {
    if (!disciplinas.length) {
      $("#boletimConteudo").html("<div class='boletim-empty'>Cadastre disciplinas para gerar o boletim.</div>");
      return;
    }

    var indicadores = CalculosAcademicos.indicadores(disciplinas);
    var html = [
      "<div class='boletim-header'>",
      "<strong>" + (aluno.nome || "Aluno não informado") + "</strong>",
      "<span>Curso: " + (aluno.curso || "Não informado") + "</span>",
      "<span>Média geral: " + indicadores.mediaGeral.toFixed(2) + " | CR: " + indicadores.cr.toFixed(2) + "</span>",
      "</div>",
      "<div class='table-wrap'><table><thead><tr>",
      "<th>Disciplina</th><th>Nota 1</th><th>Nota 2</th><th>Média</th><th>Carga horária</th><th>Situação</th>",
      "</tr></thead><tbody>"
    ];

    disciplinas.forEach(function (disciplina) {
      html.push(
        "<tr><td>" + disciplina.nome + "</td><td>" + disciplina.nota1.toFixed(1) + "</td><td>" + disciplina.nota2.toFixed(1) + "</td><td>" + disciplina.mediaPonderada.toFixed(2) + "</td><td>" + disciplina.cargaHoraria + "h</td><td>" + disciplina.situacao + "</td></tr>"
      );
    });

    html.push("</tbody></table></div>");
    $("#boletimConteudo").html(html.join(""));
  }

  return {
    renderizar: renderizar
  };
})();
