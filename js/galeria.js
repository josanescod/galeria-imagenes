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

  let objetoImagen = document.createElement("img");
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

  console.log("datos:" + array_galeria);
}

function mostrarenGaleria(arrayfotos) { //duda recorrer array 
  console.log(arrayfotos);
  var galeria = document.querySelector("#galeria")
  //borrar el contenido anterior
  galeria.innerHTML = ''
  //recorrer el array e ir agregando imagenes
  for (f in arrayfotos){
      var nombreFoto = arrayfotos[f]
      console.log(nombreFoto)
      console.log('agregando: '+f)
      galeria.innerHTML += `<img src="img/${nombreFoto}" >`
  }
  
}


//codigo prueba
/*let objetoImagen = document.createElement("img");
  for (f in arrayfotos) {
    objetoImagen.setAttribute("src", `img/${arrayfotos[f]}`);
    objetoImagen.setAttribute("id", arrayfotos[f]);
    console.log(objetoImagen);
  }

  document.querySelector(
    "#galeria"
  ).innerHTML += `<img src="img/${arrayfotos[f]}" >`;*/