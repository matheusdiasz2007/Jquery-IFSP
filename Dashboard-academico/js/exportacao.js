var ExportacaoAcademica = (function () {
  function iniciar() {
    $("#btnExportarJSON").on("click", exportarJSON);
    $("#btnExportarBoletimPDF").on("click", function () {
      exportarPDF("boletim");
    });
    $("#btnExportarDashboardPDF").on("click", function () {
      exportarPDF("dashboard");
    });
  }

  function exportarJSON() {
    var dados = JSON.stringify({
      aluno: AppAcademico.estado.aluno,
      disciplinas: AppAcademico.estado.disciplinas
    }, null, 2);
    var blob = new Blob([dados], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");

    link.href = url;
    link.download = "dashboard-academico.json";
    link.click();
    URL.revokeObjectURL(url);
    AnimacoesAcademicas.toast("JSON exportado.");
  }

  function exportarPDF(tipo) {
    var jsPDF = window.jspdf && window.jspdf.jsPDF;
    if (!jsPDF) {
      AnimacoesAcademicas.toast("Biblioteca jsPDF não carregada.");
      return;
    }

    var doc = new jsPDF();
    var aluno = AppAcademico.estado.aluno;
    var disciplinas = AppAcademico.estado.disciplinas;
    var indicadores = CalculosAcademicos.indicadores(disciplinas);
    var y = 18;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text(tipo === "dashboard" ? "Dashboard Acadêmico" : "Boletim Universitário", 14, y);
    y += 10;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text("Aluno: " + (aluno.nome || "Não informado"), 14, y);
    y += 7;
    doc.text("Curso: " + (aluno.curso || "Não informado"), 14, y);
    y += 9;
    doc.text("Total: " + indicadores.total + " | Média geral: " + indicadores.mediaGeral.toFixed(2) + " | CR: " + indicadores.cr.toFixed(2) + " | CH: " + indicadores.cargaHoraria + "h", 14, y);
    y += 12;

    disciplinas.forEach(function (disciplina) {
      if (y > 274) {
        doc.addPage();
        y = 18;
      }
      doc.text(disciplina.nome + " - N1: " + disciplina.nota1.toFixed(1) + " | N2: " + disciplina.nota2.toFixed(1) + " | Média: " + disciplina.mediaPonderada.toFixed(2) + " | " + disciplina.situacao, 14, y);
      y += 8;
    });

    doc.save(tipo + ".pdf");
    AnimacoesAcademicas.toast("PDF gerado.");
  }

  return {
    iniciar: iniciar,
    exportarJSON: exportarJSON,
    exportarPDF: exportarPDF
  };
})();
