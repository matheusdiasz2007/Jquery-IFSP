var TemaAcademico = (function () {
  function iniciar() {
    $("#btnTema").on("click", function () {
      var proximoTema = $("body").hasClass("dark") ? "light" : "dark";
      AppAcademico.atualizarTema(proximoTema);
    });
  }

  function aplicar(tema) {
    $("body").toggleClass("dark", tema === "dark");
    $("#temaLabel").text(tema === "dark" ? "Tema claro" : "Tema escuro");
    $(".theme-icon").text(tema === "dark" ? "☀" : "☾");
  }

  return {
    iniciar: iniciar,
    aplicar: aplicar
  };
})();
