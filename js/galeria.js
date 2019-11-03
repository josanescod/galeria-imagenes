array_fototeca = ['casa1.jpg','casa2.jpg','casa3.jpg','casa4.jpg','casa5.jpg','casa6.jpg','casa7.jpg','casa8.jpg']


window.onload = ()=> {
cargaImagenes()
console.log('ejecutando script')

}



function cargaImagenes(){

    //recorrer array
    for (nombreFoto in array_fototeca){
        let objetoImagen = document.createElement('img');
        objetoImagen.setAttribute('src',`img/${array_fototeca[nombreFoto]}`);
        document.querySelector('#fototeca').append(objetoImagen);
        objetoImagen.addEventListener('dblclick',agregarGaleria);

    }

    let objetoImagen = document.createElement('img');
    objetoImagen.setAttribute('src','img/')


}

function agregarGaleria(){
    console.log('agregando a galeria')
}