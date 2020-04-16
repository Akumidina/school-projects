
function peliculas(titulo, año, duracion, precioAlquiler, alquilada, ulitmoUsuario) {
  this.titulo = 'El castillo ambulante';
  this.año = '2004';
  this.duracion = '119 minutos';
  this.precioAlquiler = precioAlquiler;
  this.alquilada = 'No';
  this.ulitmoUsuario = ulitmoUsuario;
  this.alquilar = function () {
    peliculas.alquilada = 'si';
    document.getElementById('parrafo').innerHTML = ('Has alquilado ' + this.titulo);
    this.ulitmoUsuario = (document.getElementById('usuario').value);
  };
  this.devolver = function () {
    peliculas.alquilada = 'No';
    document.getElementById('parrafo').innerHTML = ('Has devuelto ' + this.titulo);
  };
}


/* Pruebas

Peliculas.prototype.alquilar = function () {
    this.alquilada = 'si';
    document.write('Acabas de devolver la pelicula ' + this.titulo);
};

var peli = new Peliculas();
document.getElementById('demo').innerHTML = peli.alquilar();

function alquilar() {
  peliculas.alquilada = 'Si';
  document.getElementById('parrafo').innerHTML = ('Acabas de devolver la pelicula ' + peliculas.titulo);
}

function Devolver() {
  peliculas.alquilada = 'No';
}

function UltimoAlquiler() {
  document.getElementById('peliculas.UltimoAlquiler').innerHTML = ulitmoUsuario;

}

function peliculas(titulo, año, duracion, precioAlquiler, alquilada, ulitmoUsuario) {
  this.titulo = 'El castillo ambulante';
  this.año = '2004';
  this.duracion = '119 minutos';
  this.precioAlquiler = precioAlquiler;
  this.alquilada = 'No';
  this.ulitmoUsuario = ulitmoUsuario;

}


var peliculas (
  titulo: 'El castillo ambulante',
  año: '2004',
  duracion: '119 minutos',
  precioAlquiler: precioAlquiler,
  alquilada: 'No',
  ulitmoUsuario: ulitmoUsuario,
  function alquilar() {
    document.getElementById('parrafo').innerHTML = ('Acabas de devolver la pelicula ' + peliculas.titulo);
  )
};
*/
