let imagenes1 = [
    {
        "url": "img/chef.jpg",
        "nombre": "Proyecto 01",
        "descripcion": "Este es el proyecto 01 fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"

    },
    {
        "url": "img/grapas.jpg",
        "nombre": "Proyecto 02",
        "descripcion": "Hola a todos este es el proyecto02 y fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"

    },
    {
        "url": "img/masaje.jpg",
        "nombre": "Proyecto 03",
        "descripcion": "Este proyecto, es el 03 y fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"

    },
    {
        "url": "img/salon.jpg",
        "nombre": "Proyecto 04",
        "descripcion": "Este proyecto, es el 03 y fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"

    },
]

let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto');
let actual = 0;
posicionCarrusel();

atras.addEventListener('click', function () {
    actual -=1

    if (actual == -1) {
        actual = imagenes1.length -1
        
    }
    imagen.innerHTML = `
    <img class="img1" src="${imagenes1[actual].url}"  loading="lazy"></img>`
    texto.innerHTML = `<h3>${imagenes1[actual.nombre]}</h3>
    <p>${imagenes1[actual.descripcion]}</p>`
    posicionCarrusel()
    
})
adelante.addEventListener('click', function () {
    actual +=1

    if (actual == imagenes1.length) {
        actual = 0
        
    }
    imagen.innerHTML = `
    <img class="img1" src="${imagenes1[actual].url}"  loading="lazy"></img>`
    texto.innerHTML = `<h3>${imagenes1[actual].nombre}</h3>
    <p>${imagenes1[actual].descripcion}</p>`

    posicionCarrusel();
    
})

function posicionCarrusel() {
    puntos.innerHTML = ''
    for (var i = 0; i < imagenes1.length; i++) {
        if (i == actual) {
            puntos.innerHTML += '<p class="bold">.</p>'
            
        }else{
            puntos.innerHTML += '<p>.</p>'

        }
        
        
    }
    
}
