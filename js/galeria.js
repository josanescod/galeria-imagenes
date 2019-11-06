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
var posicion;

window.onload = () => {
  recuperarLocalStorage();
  cargarImagenesFototeca();
  cerrarFotoAmpliada();
  activarFlechas();
};

function cargarImagenesFototeca() {
  for (nombreFoto in array_fototeca) {
    let objetoImagen = document.createElement("img");
    objetoImagen.setAttribute("src", `img/${array_fototeca[nombreFoto]}`);
    document.querySelector("#fototeca").append(objetoImagen);
    objetoImagen.addEventListener("dblclick", agregarFotoGaleria);
  }
}

function agregarFotoGaleria() {
  let rutaFoto = this.getAttribute("src");
  let slash = rutaFoto.lastIndexOf("/");
  let Foto = rutaFoto.substring(slash + 1);
  if (array_galeria.includes(Foto)) {
    alert("la imatge ja existeix");
  } else {
    array_galeria.push(Foto);
    mostrarenGaleria(array_galeria);
    guardarLocalStorage(array_galeria);
  }
  console.log(array_galeria);
}

function mostrarenGaleria(arrayFotos) {
  let galeria = document.querySelector("#galeria");
  galeria.innerHTML = "";
  for (f in arrayFotos) {
    let nombreFoto = arrayFotos[f];
    galeria.innerHTML += `
      <div class='imagenGaleria'>
        <img class='foto' src="img/${nombreFoto}" >
        <img class='borrar' src='img/borrar.png' >
      </div>`;
  }
  let botonBorrar = document.querySelectorAll(".borrar");
  for (i = 0; i < botonBorrar.length; i++) {
    botonBorrar[i].onclick = borrarFoto;
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
  guardarLocalStorage(array_galeria);
}

function ampliaFoto() {
  let rutaFoto = this.getAttribute("src");
  let imatge_ampliada = document.querySelector("#imagen_ampliada");
  imatge_ampliada.setAttribute("src", rutaFoto);
  $("#caja_imagen").fadeIn(1000, "linear");
  document.querySelector("#caja_imagen").style.display = "flex";
}

function cerrarFotoAmpliada() {
  let imagen = document.querySelector("#caja_imagen");
  imagen.addEventListener("click", function() {
    $("#caja_imagen").fadeOut(1000, "linear");
  });
}

function activarFlechas() {
  let izquierda = document.querySelector("#flecha_izquierda");
  let derecha = document.querySelector("#flecha_derecha");
  izquierda.addEventListener("click", Anterior);
  derecha.addEventListener("click", Siguiente);
}

function Siguiente(event) {
  event.stopPropagation();
  let imagen_ampliada = document.querySelector("#imagen_ampliada");
  let rutaFoto = imagen_ampliada.getAttribute("src");
  let slash = rutaFoto.lastIndexOf("/");
  let foto = rutaFoto.substring(slash + 1);
  posicion = array_galeria.indexOf(foto);
  if (posicion == array_galeria.length - 1) {
    posicion = 0;
  } else {
    posicion += 1;
  }
  rutaFoto = array_galeria[posicion];
  imagen_ampliada.setAttribute("src", "img/" + rutaFoto);
}

function Anterior(event) {
  event.stopPropagation();
  let imagen_ampliada = document.querySelector("#imagen_ampliada");
  let rutaFoto = imagen_ampliada.getAttribute("src");
  let slash = rutaFoto.lastIndexOf("/");
  let foto = rutaFoto.substring(slash + 1);
  posicion = array_galeria.indexOf(foto);
  if (posicion == 0) {
    posicion = array_galeria.length - 1;
  } else {
    posicion -= 1;
  }
  rutaFoto = array_galeria[posicion];
  imagen_ampliada.setAttribute("src", "img/" + rutaFoto);
}

function guardarLocalStorage(array_galeria) {
  if (array_galeria.length == 0) {
    localStorage.removeItem("galeria_imagenes");
  } else {
    let arrayTexto = array_galeria.join("-");
    localStorage.setItem("galeria_imagenes", arrayTexto);
  }
}

function recuperarLocalStorage() {
  if (localStorage.getItem("galeria_imagenes") != undefined) {
    let arrayTexto = localStorage.getItem("galeria_imagenes");
    array_galeria = arrayTexto.split("-");
    mostrarenGaleria(array_galeria);
  }
}
