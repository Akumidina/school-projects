
var valores = [];

function insertar() {
  valores.push(document.getElementById('valor').value);
  document.getElementById('resultado').innerHTML = valores;
}

function borrar() {
  valores.length = 0;
  document.getElementById('resultado').innerHTML = valores + 'Cadena inicializada';
}
