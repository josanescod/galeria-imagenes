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
};

function cargaImagenes() {
  //recorrer array
  for (nombreFoto in array_fototeca) {
    let objetoImagen = document.createElement("img");
    objetoImagen.setAttribute("src", `img/${array_fototeca[nombreFoto]}`);
    objetoImagen.setAttribute("id", array_fototeca[nombreFoto]);
    document.querySelector("#fototeca").append(objetoImagen);
    objetoImagen.addEventListener("dblclick", agregarGaleria);
  }

  let objetoImagen = document.createElement("img");//?
  objetoImagen.setAttribute("src", "img/");
}

function agregarGaleria() {
  let rutaFoto = this.getAttribute("src");
  let slash = rutaFoto.lastIndexOf("/");
  var Foto = rutaFoto.substring(slash + 1);
  if (array_galeria.includes(Foto)) {
    alert("la imatge ja existeix");
  } else {
    array_galeria.push(Foto);
    mostrarenGaleria(array_galeria);
  }
  console.log(array_galeria);
}

function mostrarenGaleria(arrayfotos) {
  var galeria = document.querySelector("#galeria");
  //borrar el contenido anterior
  galeria.innerHTML = "";
  for (f in arrayfotos) {
    var nombreFoto = arrayfotos[f];
    galeria.innerHTML += `
      <div class='imagenGaleria'>
        <img src="img/${nombreFoto}" >
        <img class='borrar' src='img/borrar.png' >
      </div>`;
    let crucesBorrar = document.querySelectorAll(".borrar");
    for (i = 0; i < crucesBorrar.length; i++) {
      crucesBorrar[i].onclick = borrarFoto;
    }
  }
}

function borrarFoto() {
  var cajaContenedoraImagen = this.parentNode;
  var seccionGaleria = cajaContenedoraImagen.parentNode;
  var indexFoto = Array.prototype.indexOf.call(
    seccionGaleria.children,
    cajaContenedoraImagen
  );
  array_galeria.splice(indexFoto, 1);
  seccionGaleria.removeChild(cajaContenedoraImagen);
}
