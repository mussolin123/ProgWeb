function calcularNumerosImpares() {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var impares = [];
    for (var i = numero1; i <= numero2; i++) {
      if (i % 2 === 1) {
        impares.push(i);
      }
    }
    document.getElementById("resultado").innerHTML = impares;
  }