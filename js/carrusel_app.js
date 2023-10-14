let imagenes = [
    {
        "url": "img/img1.jpg",
        "nombre": "Proyecto 01",
        "descripcion": "Descripción genérica 1"

    },
    {
        "url": "img/img2.jpg",
        "nombre": "Proyecto 02",
        "descripcion": "Descripción genérica 2"

    },
    {
        "url": "img/img3.webp",
        "nombre": "Proyecto 03",
        "descripcion": "Descripción genérica 3"

    },
]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto');
let lupa = document.getElementById('lupa');
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}

lupa.addEventListener('click', function() {
    // Obtiene la URL de la imagen actual
    let imagenActual = imagenes[actual].url;

    // Crea un elemento div para el lightbox
    let lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');

    // Crea una imagen en el lightbox
    let imagenLightbox = document.createElement('img');
    imagenLightbox.src = imagenActual;
    lightbox.appendChild(imagenLightbox);

    // Crea un botón con la imagen de "cerrar" para cerrar el lightbox
    let cerrarBoton = document.createElement('button');
    cerrarBoton.classList.add('cerrar-btn'); // Agrega una clase para aplicar estilos al botón

    // Crea una imagen en el botón
    let iconoCerrar = document.createElement('img');
    iconoCerrar.src = 'img/cerrar.png'; 
    iconoCerrar.alt = 'Cerrar';
    cerrarBoton.appendChild(iconoCerrar);

    cerrarBoton.addEventListener('click', function() {
        document.body.removeChild(lightbox); // Cierra el lightbox al hacer clic en el botón de cerrar
    });

    lightbox.appendChild(cerrarBoton);

    // Agrega el lightbox al cuerpo del documento
    document.body.appendChild(lightbox);
});