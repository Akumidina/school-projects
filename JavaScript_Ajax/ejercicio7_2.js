
var cuentas = 0;

function suma() {
  cuentas++;
}

function resta() {
  cuentas--;
}

function cambio() {
  var elem = document.getElementById('boton1');
  var elem2 = document.getElementById('boton2');

  if (elem.innerHTML == 'Pínchame') {
    elem.innerHTML = 'No me pinches';
    elem2.innerHTML = 'Pínchame';
  } else if (elem.innerHTML == 'No me pinches') {
    elem.innerHTML = 'Pínchame';
    elem2.innerHTML = 'No me pinches';
  }
}

function load() {
  document.getElementById('boton1').addEventListener('click', cambio, true);
  document.getElementById('boton2').addEventListener('click', cambio, true);

}

setTimeout(function () { alert(cuentas); }, 5000);

/*
var cuentas = 0;

function suma() {
  cuentas++;
}

function resta() {
  cuentas--;
}

function cambio() {
  var elem = document.getElementById('boton1').value;
  if (elem.value == 'Pínchame') {elem.value = 'No me pinches';
  } else {
    elem.value = 'Pínchame';
  }
}

function load() {
  document.getElementById('boton1').addEventListener('click', cambio, true);
}
*/
