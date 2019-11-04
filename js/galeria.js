var array_fototeca = [
  "casa1.jpg",
  "casa2.jpg",
  "casa3.jpg",
  "casa4.jpg",
  "casa5.jpg",
  "casa6.jpg",
  "casa7.jpg",
  "casa8.jpg"
];
var array_galeria = [];

window.onload = () => {
  cargaImagenes();
  cerrarImagenAmpliada();
  activarFlechas();
};

function cargaImagenes() {
  for (nombreFoto in array_fototeca) {
    let objetoImagen = document.createElement("img");
    objetoImagen.setAttribute("src", `img/${array_fototeca[nombreFoto]}`);
    objetoImagen.setAttribute("id", array_fototeca[nombreFoto]);
    document.querySelector("#fototeca").append(objetoImagen);
    objetoImagen.addEventListener("dblclick", agregarGaleria);
  }
}

function agregarGaleria() {
  let rutaFoto = this.getAttribute("src");
  let slash = rutaFoto.lastIndexOf("/");
  let Foto = rutaFoto.substring(slash + 1);
  if (array_galeria.includes(Foto)) {
    alert("la imatge ja existeix");
  } else {
    array_galeria.push(Foto);
    mostrarenGaleria(array_galeria);
  }
  console.log(array_galeria);
}

function mostrarenGaleria(arrayfotos) {
  let galeria = document.querySelector("#galeria");
  galeria.innerHTML = "";
  for (f in arrayfotos) {
    let nombreFoto = arrayfotos[f];
    galeria.innerHTML += `
      <div class='imagenGaleria'>
        <img class='foto' src="img/${nombreFoto}" >
        <img class='borrar' src='img/borrar.png' >
      </div>`;
  }
  let crucesBorrar = document.querySelectorAll(".borrar");
  for (i = 0; i < crucesBorrar.length; i++) {
    crucesBorrar[i].onclick = borrarFoto;
  }

  let imagenesGaleria = document.querySelectorAll(".foto");
  for (i = 0; i < imagenesGaleria.length; i++) {
    imagenesGaleria[i].onclick = ampliaFoto;
  }
}

function borrarFoto() {
  let cajaContenedoraImagen = this.parentNode;
  let seccionGaleria = cajaContenedoraImagen.parentNode;
  let indexFoto = Array.prototype.indexOf.call(
    seccionGaleria.children,
    cajaContenedoraImagen
  );
  array_galeria.splice(indexFoto, 1);
  seccionGaleria.removeChild(cajaContenedoraImagen);
}

function ampliaFoto() {
  let rutaFoto = this.getAttribute("src");
  let imatge_ampliada = document.querySelector("#imagen_ampliada");
  imatge_ampliada.setAttribute("src", rutaFoto);
  $("#caja_imagen").fadeIn(1000, "linear");
  document.querySelector("#caja_imagen").style.display = "flex";
}

function cerrarImagenAmpliada() {
  let imagen = document.querySelector("#caja_imagen");
  imagen.addEventListener("click", function() {
    $("#caja_imagen").fadeOut(1000, "linear");
    //imagen.style.display = "none";
  });
}

function activarFlechas() {
  let izquierda = document.querySelector("#flecha_izquierda");
  let derecha = document.querySelector("#flecha_derecha");
  izquierda.addEventListener("click", muestraAmpliadaAnterior);
  derecha.addEventListener("click", muestraAmpliadaSiguiente);
}

function muestraAmpliadaAnterior(event){
  event.stopPropagation()
  console.log('anterior')
  //saber en que posicion del array esta la imagen actual

  //restarle  1 a la posicion

  //si llegamos al inicio actualizar la variable a la ultima posicion

  //recuperar del array galeria el nombre de la imagen y canviar el atributo src de la imagen del lightbox
}

function muestraAmpliadaSiguiente(event){
  event.stopPropagation()
  console.log('siguiente')
  //saber en que posicion del array esta la imagen actual

  //aumentarle  1 a la posicion

  //si llegamos al final actualizar la variable a la posicion 0 o inicio del array

  //recuperar del array galeria el nombre de la imagen y canviar el atributo src de la imagen del lightbox
}