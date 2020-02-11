
var valores = [];

function insertar() {
  valores.push(document.getElementById('valor').value);
  document.getElementById('resultado').innerHTML = valores;
}

function borrar() {
  valores.length = 0;
  document.getElementById('resultado').innerHTML = valores + 'Cadena inicializada';
}

function reseteaInputArray() {
  document.getElementById('valor').value = '';
}

var sumaDeValores = 0;
function sumar() {
  sumaDeValores = sumaDeValores + parseFloat(document.getElementById('numSuma').value);
  document.getElementById('resultadoSuma').innerHTML = sumaDeValores;
}

function borrarSuma() {
  sumaDeValores = 0;
  document.getElementById('resultadoSuma').innerHTML = 'Suma inicializada';
}

function reseteaInputSuma() {
  document.getElementById('numSuma').value = '';
}
