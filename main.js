var element = document.getElementById('btnliga');
var elementimg = document.getElementById('imagem');
var contador = document.querySelector('.badge');

var bateria = 100;
var intervalId;

$("#btnliga").on("click", function(){

    if (elementimg.src.match("lanternaon")) {
    elementimg.src="img/lanternaoff.gif";
    clearInterval(intervalId);
    }
  else{
      elementimg.src="img/lanternaon.gif";

      intervalId =  setInterval(function () {

          if(bateria <= 75){
            $("#barra").css("background-color", "#337ab7");
          }

          if(bateria <= 50){
            $("#barra").css("background-color", "#ffc107");
          }

          if(bateria <= 25){
            $("#barra").css("background-color", "#dc3545");
          }

          if (bateria == 0) {
            $("#barra").text(bateria + "%");
            $("#barra").css("width", bateria+"%");
            swal(
              'Bateria vazia',
              'É necessário trocar a bateria!',
              'info'
            );
            clearInterval(intervalId);
          } else {
              $("#barra").text(bateria + "%");
              $("#barra").css("width", bateria+"%");
          }
          bateria--;
      }, 1000);
    }
});

$("#btnTroca").on("click", function(){

    if (elementimg.src.match("lanternaon")) {
      elementimg.src="img/lanternaoff.gif";
      clearInterval(intervalId);
    }

    bateria = 100;
    $("#barra").text(bateria + "%");
    $("#barra").css("width", bateria+"%");
    $("#barra").css("background-color", "#28a745");
});
