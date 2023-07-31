function calcularTabuada() {
    var numero = document.getElementById("numero").value;
    var tabuada = "";
    for (var i = 1; i <= 10; i++) {
      tabuada += numero + " x " + i + " = " + numero * i + "<br>";
    }
    document.getElementById("resultado").innerHTML = tabuada;
  }