/* Primero lo hice sin el parseFloat, simplemente poniendo un + delante de las operaciones:
        document.getElementById('output').value = +x + +y;
Luego vi el ejercicio de la alerta, el primero en el campus y entendí el parseFloat, en el dossier en vez de
string pone cadena, y no lo entedí que se refería a lo mismo hasta que vi el w3schools del parseFloat gracias a ese ejercicio.
 */

function mas() {
  var x = parseFloat(document.getElementById('n1').value);
  var y = parseFloat(document.getElementById('n2').value);
  document.getElementById('output').value = x + y;
}

function menos() {
  var x = parseFloat(document.getElementById('n1').value);
  var y = parseFloat(document.getElementById('n2').value);
  document.getElementById('output').value = x - y;
}

function multi() {
  var x = parseFloat(document.getElementById('n1').value);
  var y = parseFloat(document.getElementById('n2').value);
  document.getElementById('output').value = x * y;
}

function divis() {
  var x = parseFloat(document.getElementById('n1').value);
  var y = parseFloat(document.getElementById('n2').value);
  document.getElementById('output').value = x / y;
}
