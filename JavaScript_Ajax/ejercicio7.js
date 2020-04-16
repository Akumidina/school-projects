function aviso() {
  var checkBox = document.getElementById('myCheck');
  if (checkBox.checked == true) {
    alert('Sus datos serán protegidos');
  }
}

function load() {
  var checkBox = document.getElementById('campoDeTexto');
  checkBox.addEventListener('click', aviso, false);
}
