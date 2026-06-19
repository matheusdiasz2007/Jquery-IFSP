var StorageAcademico = (function () {
  var chave = "dashboardAcademico";
  var estadoPadrao = {
    aluno: {},
    disciplinas: [],
    tema: "light"
  };

  function carregar() {
    var salvo = localStorage.getItem(chave);
    if (!salvo) {
      return $.extend(true, {}, estadoPadrao);
    }

    try {
      return $.extend(true, {}, estadoPadrao, JSON.parse(salvo));
    } catch (erro) {
      console.warn("Dados locais inválidos. Estado reiniciado.", erro);
      return $.extend(true, {}, estadoPadrao);
    }
  }

  function salvar(estado) {
    localStorage.setItem(chave, JSON.stringify(estado));
  }

  function limpar() {
    localStorage.removeItem(chave);
  }

  return {
    carregar: carregar,
    salvar: salvar,
    limpar: limpar
  };
})();
