function calcularPrimo() {
    var numero = document.getElementById("numero").value;
    var ehPrimo = true;
    for (var i = 2; i * i <= numero; i++) {
      if (numero % i === 0) {
        ehPrimo = false;
        break;
      }
    }
    document.getElementById("resultado").innerHTML = (ehPrimo ? "O número é primo." : "O número não é primo.");
  }