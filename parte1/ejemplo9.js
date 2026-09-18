/*
Pedir el nombre del usuario por teclado y mostrar en un
parrafo con id salidaBienvenida el mensaje
'Bienvenido, nombre'
*/

// variables
let nombre='';

// constantes

// constantes al DOM
const nodoSalidaBienvenida = document.querySelector('#salidaBienvenida')

// entradas
nombre=prompt('Ingrese su nombre: ');

// procesamiento


// salidas
nodoSalidaBienvenida.textContent = `Bienvenido, ${nombre}`;





