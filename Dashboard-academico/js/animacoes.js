var AnimacoesAcademicas = (function () {
  var timer;

  function toast(mensagem) {
    clearTimeout(timer);
    $("#toast").text(mensagem).addClass("show").fadeIn(140);
    timer = setTimeout(function () {
      $("#toast").fadeOut(180, function () {
        $(this).removeClass("show");
      });
    }, 2600);
  }

  function iniciar() {
    $(".nav-link").on("click", function () {
      $(".nav-link").removeClass("active");
      $(this).addClass("active");
    });
  }

  return {
    iniciar: iniciar,
    toast: toast
  };
})();
