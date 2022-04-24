function calcular() {
  var resultado = document.querySelector("#resultado");

  var peso = parseFloat(document.querySelector("#peso").value);
  var altura = parseFloat(document.querySelector("#altura").value);
  var imc = peso / (altura * altura);

  if (imc < 18.5) {
    resultado.innerText = `IMC = ${imc.toFixed(2)}, Magreza`;
  }
  if (imc >= 18.5 && imc <= 24.9) {
    resultado.innerText = `IMC = ${imc.toFixed(2)}, Normal`;
  }
  if (imc >= 25 && imc <= 29.9) {
    resultado.innerText = `IMC = ${imc.toFixed(2)}, Sobrepeso`;
  }
  if (imc >= 30) {
    resultado.innerText = `IMC = ${imc.toFixed(2)}, Obesidade`;
  }
}
