
function validar(f) {
  var ok; /*variable para contener el resultado*/
  var msg; /*variable para ir generando el mensaje de error*/
  msg = ''; /*son comillas simples!!*/
  ok = 'si'; /* ponemos la variables de ok a valor si*/

  if (document.getElementById('nombre').value == '') {
    ok = 'no';
    msg = msg + 'El campo "Nombre" no puede estar vacio.\n';
  } else {
    if (isNaN(document.getElementById('nom').value)) {
      ok = 'si';
    } else {
      ok = 'no';
      msg = msg + 'El nombre no puede contener números.\n';
    }
  }

  re = /^(6|7|8|9)[0-9]{8}$/;

  if (!re.exec(document.getElementById('TELEFONO').value)) {
    ok = 'no';
    msg = msg + 'El campo "Telefono" es erroneo.';
  } else {
    valor = document.getElementById('TELEFONO').value;
    if (!(/^\d{9}$/.test(valor))) {
      ok = 'no';
      11;
      msg = msg + 'El telefono debe tener 9 cifras.\n';
    }
  }
  /* Comprobamos si el campo edad es un número*/
  /*re=/^([0-9)]*$/*/
  re = /[0-9]/;
  if (!re.exec(document.getElementById('EDAD').value))
  {
    ok = 'no';
    msg = msg + 'El campo "Edad" debe ser numérico.\n';
  } else {
    valor = document.getElementById('EDAD').value;
    if (!(/^\d{2}$/.test(valor))) { /* menor a 99 */
      ok = 'no';
      12;
      msg = msg + 'La edad introducida no es válida.\n';
    } else if (valor <= 17) {
      ok = 'no';
      msg = msg + 'Debes ser mayor de edad para enviar el formulario.\n';
    }
  }

  re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!re.exec(document.getElementById('E-MAIL').value)) {
    ok = 'no';
    13;
    msg = msg + 'El correo introducido no es válido.';
  } else {
    ok = 'si';
  }

  if (ok == 'si') { /*si no ha ocurrido ningún error*/
    document.formulario.submit(); /* enviamos el formulario*/
  } else { /* si hay errores*/
    alert(msg); /*los mostramos en un mensaje*/
    return false; /* Este return impide que los datos escritos se borren
  antes de enviarlo */
  }
}
