function calcularMDC() {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var mdc = 1;
    for (var i = 1; i <= numero1 && i <= numero2; i++) {
      if (numero1 % i == 0 && numero2 % i == 0) {
        mdc = i;
      }
    }
    document.getElementById("resultado").innerHTML = "MDC: " + mdc;
  }