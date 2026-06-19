var CalculosAcademicos = (function () {
  function numero(valor) {
    return Number.parseFloat(valor) || 0;
  }

  function arredondar(valor) {
    return Number((numero(valor)).toFixed(2));
  }

  function mediaSimples(nota1, nota2) {
    return arredondar((numero(nota1) + numero(nota2)) / 2);
  }

  function mediaPonderada(nota1, nota2, peso1, peso2) {
    var p1 = numero(peso1) || 1;
    var p2 = numero(peso2) || 1;
    return arredondar(((numero(nota1) * p1) + (numero(nota2) * p2)) / (p1 + p2));
  }

  function situacao(media) {
    if (media >= 7) {
      return "Aprovado";
    }

    if (media >= 5) {
      return "Recuperação";
    }

    return "Reprovado";
  }

  function calcularDisciplina(disciplina) {
    var simples = mediaSimples(disciplina.nota1, disciplina.nota2);
    var ponderada = mediaPonderada(disciplina.nota1, disciplina.nota2, disciplina.peso1, disciplina.peso2);

    return $.extend({}, disciplina, {
      nota1: numero(disciplina.nota1),
      nota2: numero(disciplina.nota2),
      peso1: numero(disciplina.peso1) || 1,
      peso2: numero(disciplina.peso2) || 1,
      cargaHoraria: numero(disciplina.cargaHoraria),
      mediaSimples: simples,
      mediaPonderada: ponderada,
      situacao: situacao(ponderada)
    });
  }

  function indicadores(disciplinas) {
    var totalCarga = 0;
    var somaMedias = 0;
    var somaCr = 0;
    var contagens = {
      aprovado: 0,
      recuperacao: 0,
      reprovado: 0
    };

    disciplinas.forEach(function (disciplina) {
      var media = numero(disciplina.mediaPonderada);
      var carga = numero(disciplina.cargaHoraria);

      totalCarga += carga;
      somaMedias += media;
      somaCr += media * carga;

      if (disciplina.situacao === "Aprovado") contagens.aprovado += 1;
      if (disciplina.situacao === "Recuperação") contagens.recuperacao += 1;
      if (disciplina.situacao === "Reprovado") contagens.reprovado += 1;
    });

    return {
      total: disciplinas.length,
      mediaGeral: disciplinas.length ? arredondar(somaMedias / disciplinas.length) : 0,
      cr: totalCarga ? arredondar(somaCr / totalCarga) : 0,
      cargaHoraria: totalCarga,
      aprovado: contagens.aprovado,
      recuperacao: contagens.recuperacao,
      reprovado: contagens.reprovado
    };
  }

  return {
    calcularDisciplina: calcularDisciplina,
    indicadores: indicadores,
    arredondar: arredondar
  };
})();
