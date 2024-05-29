import { barcelona, roma, paris, londres } from './ciudades.js'

// * Obtener los elementos del DOM

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let precioElemento = document.getElementById('precio')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

// * Agregar un Evento CLICK a cada enlace

enlaces.forEach( function (enlace) {
    enlace.addEventListener('click', function  () {
        // * Remover Activo
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active')
        });
        
        // * Agregar activo al que le corresponda
        
        this.classList.add('active')
        
        // * Traer la información del objeto correspondiente a la elección

        let contenido = obtenerContenido(this.textContent)

        // * Mostrar el contenido en el DOM
        
        tituloElemento.innerHTML = contenido.titulo
        precioElemento.innerHTML = contenido.precio + ' $'
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo

    });

});

// * Función para traer la información correcta desde ciudades.js

function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres' : londres
    }
    return contenido[enlace]
}