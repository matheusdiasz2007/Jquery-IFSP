var DisciplinasController = (function () {
  function iniciar() {
    $("#formDisciplina").on("submit", function (evento) {
      evento.preventDefault();
      salvarFormulario();
    });

    $("#btnLimparDisciplina").on("click", limparFormulario);
    $("#buscaDisciplina, #ordenarDisciplinas").on("input change", function () {
      renderizar(AppAcademico.estado.disciplinas);
    });

    $("#listaDisciplinas").on("click", "[data-editar]", function () {
      editar(Number($(this).data("editar")));
    });

    $("#listaDisciplinas").on("click", "[data-excluir]", function () {
      excluir(Number($(this).data("excluir")));
    });
  }

  function salvarFormulario() {
    var disciplina = CalculosAcademicos.calcularDisciplina({
      id: Number($("#disciplinaId").val()) || Date.now(),
      nome: $("#disciplinaNome").val().trim(),
      nota1: $("#nota1").val(),
      nota2: $("#nota2").val(),
      cargaHoraria: $("#cargaHoraria").val(),
      peso1: $("#peso1").val(),
      peso2: $("#peso2").val()
    });

    if (!disciplina.nome) {
      AnimacoesAcademicas.toast("Informe o nome da disciplina.");
      return;
    }

    if (disciplina.nota1 > 10 || disciplina.nota2 > 10) {
      AnimacoesAcademicas.toast("As notas devem ficar entre 0 e 10.");
      return;
    }

    AppAcademico.salvarDisciplina(disciplina);
    limparFormulario();
    AnimacoesAcademicas.toast("Disciplina salva.");
  }

  function limparFormulario() {
    $("#formDisciplina")[0].reset();
    $("#disciplinaId").val("");
    $("#peso1").val(1);
    $("#peso2").val(1);
    $("#btnSalvarDisciplina").text("Adicionar disciplina");
  }

  function editar(id) {
    var disciplina = AppAcademico.estado.disciplinas.find(function (item) {
      return item.id === id;
    });

    if (!disciplina) return;

    $("#disciplinaId").val(disciplina.id);
    $("#disciplinaNome").val(disciplina.nome);
    $("#nota1").val(disciplina.nota1);
    $("#nota2").val(disciplina.nota2);
    $("#cargaHoraria").val(disciplina.cargaHoraria);
    $("#peso1").val(disciplina.peso1 || 1);
    $("#peso2").val(disciplina.peso2 || 1);
    $("#btnSalvarDisciplina").text("Atualizar disciplina");
    document.querySelector("#disciplinas").scrollIntoView({ behavior: "smooth" });
  }

  function excluir(id) {
    if (!confirm("Excluir esta disciplina?")) {
      return;
    }

    AppAcademico.excluirDisciplina(id);
    AnimacoesAcademicas.toast("Disciplina excluída.");
  }

  function listaFiltrada(disciplinas) {
    var termo = ($("#buscaDisciplina").val() || "").toLowerCase();
    var ordem = $("#ordenarDisciplinas").val();
    var lista = disciplinas.filter(function (disciplina) {
      return disciplina.nome.toLowerCase().includes(termo);
    });

    lista.sort(function (a, b) {
      if (ordem === "media") {
        return b.mediaPonderada - a.mediaPonderada;
      }
      return a.nome.localeCompare(b.nome);
    });

    return lista;
  }

  function classeSituacao(situacao) {
    return situacao.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  function renderizar(disciplinas) {
    var linhas = listaFiltrada(disciplinas).map(function (disciplina) {
      return [
        "<tr class='fade-in'>",
        "<td><strong>" + disciplina.nome + "</strong></td>",
        "<td>" + disciplina.nota1.toFixed(1) + "</td>",
        "<td>" + disciplina.nota2.toFixed(1) + "</td>",
        "<td>" + disciplina.mediaPonderada.toFixed(2) + "</td>",
        "<td>" + disciplina.cargaHoraria + "h</td>",
        "<td><span class='badge " + classeSituacao(disciplina.situacao) + "'>" + disciplina.situacao + "</span></td>",
        "<td>",
        "<button type='button' class='action-btn' data-editar='" + disciplina.id + "'>Editar</button> ",
        "<button type='button' class='action-btn' data-excluir='" + disciplina.id + "'>Excluir</button>",
        "</td>",
        "</tr>"
      ].join("");
    });

    $("#listaDisciplinas").html(linhas.join("") || "<tr><td colspan='7'>Nenhuma disciplina cadastrada.</td></tr>");
  }

  return {
    iniciar: iniciar,
    renderizar: renderizar,
    limparFormulario: limparFormulario
  };
})();
