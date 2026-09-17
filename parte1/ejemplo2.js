// Colocar en la consola el texto que esta los parrafos de la siguiente forma
// Lucia tiene 12 puntos
// Lucia esta en el primer parrafo
// 12 esta en el segundo parrafo

// variables
let nombre = '';
let puntos = 0;


// constantes

// constantes al dom
const nodoNombre = document.querySelector('#nombre');
const nodoPuntos = document.querySelector('#puntos');

// entradas
nombre = nodoNombre.textContent;
puntos = nodoPuntos.textContent;

// procesamiento

// salidas

// console.log(nodoNombre); // <p id="nombre">Lucia</p>
// console.log(nombre); // Lucia

// console.log(nodoPuntos); // <p id="puntos">12</p>

// console.log(puntos); // 12

console.log(nombre + ' tiene ' + puntos + ' puntos');
console.log(`${nombre} tiene ${puntos} puntos`);

