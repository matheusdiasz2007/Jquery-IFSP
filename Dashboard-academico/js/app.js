var AppAcademico = (function () {
  var app = {
    estado: StorageAcademico.carregar()
  };

  function iniciar() {
    AlunoController.iniciar();
    DisciplinasController.iniciar();
    TemaAcademico.iniciar();
    ExportacaoAcademica.iniciar();
    ImportacaoAcademica.iniciar();
    AnimacoesAcademicas.iniciar();
    GraficosAcademicos.iniciar();

    $("#btnCarregarExemplo").on("click", carregarExemplo);
    normalizarDisciplinas();
    renderizarTudo();
  }

  function normalizarDisciplinas() {
    app.estado.disciplinas = (app.estado.disciplinas || []).map(function (disciplina) {
      return CalculosAcademicos.calcularDisciplina(disciplina);
    });
  }

  function persistir() {
    StorageAcademico.salvar(app.estado);
    renderizarTudo();
  }

  function renderizarTudo() {
    AlunoController.renderizar(app.estado.aluno || {});
    DisciplinasController.renderizar(app.estado.disciplinas);
    DashboardController.renderizar(app.estado.disciplinas);
    GraficosAcademicos.renderizar(app.estado.disciplinas);
    BoletimAcademico.renderizar(app.estado.aluno || {}, app.estado.disciplinas);
    TemaAcademico.aplicar(app.estado.tema || "light");
  }

  function atualizarAluno(aluno) {
    app.estado.aluno = aluno;
    persistir();
  }

  function salvarDisciplina(disciplina) {
    var indice = app.estado.disciplinas.findIndex(function (item) {
      return item.id === disciplina.id;
    });

    if (indice >= 0) {
      app.estado.disciplinas[indice] = disciplina;
    } else {
      app.estado.disciplinas.push(disciplina);
    }

    persistir();
  }

  function excluirDisciplina(id) {
    app.estado.disciplinas = app.estado.disciplinas.filter(function (disciplina) {
      return disciplina.id !== id;
    });
    persistir();
  }

  function atualizarTema(tema) {
    app.estado.tema = tema;
    persistir();
  }

  function importarDados(dados) {
    app.estado.aluno = dados.aluno || {};
    app.estado.disciplinas = (dados.disciplinas || []).map(function (disciplina) {
      return CalculosAcademicos.calcularDisciplina(disciplina);
    });
    persistir();
  }

  function carregarExemplo() {
    importarDados({
      aluno: {
        nome: "Matheus Dias Pereira",
        curso: "Engenharia de Software"
      },
      disciplinas: [
        { id: 1, nome: "Programação Web", nota1: 8.5, nota2: 9, peso1: 1, peso2: 1, cargaHoraria: 80 },
        { id: 2, nome: "Banco de Dados", nota1: 7.2, nota2: 6.8, peso1: 1, peso2: 1, cargaHoraria: 60 },
        { id: 3, nome: "Algoritmos", nota1: 5.5, nota2: 4.8, peso1: 1, peso2: 2, cargaHoraria: 80 },
        { id: 4, nome: "Engenharia de Software", nota1: 9.1, nota2: 8.7, peso1: 1, peso2: 1, cargaHoraria: 60 }
      ]
    });
    AnimacoesAcademicas.toast("Dados de exemplo carregados.");
  }

  app.iniciar = iniciar;
  app.atualizarAluno = atualizarAluno;
  app.salvarDisciplina = salvarDisciplina;
  app.excluirDisciplina = excluirDisciplina;
  app.atualizarTema = atualizarTema;
  app.importarDados = importarDados;
  return app;
})();

$(AppAcademico.iniciar);
