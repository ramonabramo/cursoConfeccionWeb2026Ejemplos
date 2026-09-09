// declarar

// variables
let poblacion = '';

// constantes

const titulo = 'Ejercicio de clase';

// constantes al DOM
const nodoH1 = document.querySelector('h1');
const nodoP = document.querySelector('#parrafo');


// entradas
poblacion = prompt('Introduce la poblacion donde vives');


// procesamiento

// salidas

// en el nodo p quiero escribir la poblacion que introduzca por teclado
nodoP.innerHTML = poblacion;
nodoH1.innerHTML = titulo;