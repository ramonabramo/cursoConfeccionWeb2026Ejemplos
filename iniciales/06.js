// pedir por teclado el nombre, la edad y la poblacion y escribirlo en la tabla

// variables
let nombre = "";
let edad = 0;
let poblacion = "";

// constantes

// apuntar a los elementos del DOM
const tdNombre = document.querySelector('#nombre');
const tdEdad = document.querySelector('#edad');
const tdPoblacion = document.querySelector('#poblacion');

// entradas
nombre = prompt('Introduce tu nombre');
edad = prompt('Introduce tu edad');
poblacion = prompt('Introduce tu poblacion');

// procesamiento

// salidas

tdNombre.innerHTML = nombre;
tdEdad.innerHTML = edad;
tdPoblacion.innerHTML = poblacion;