/*
Pide una temperatura al usuario por teclado en grados celsius
Convertir esa temperatura a Farenheit y mostrar en el div salida el siguiente mensaje
' 20ºC equivalen a 68 ºF'
*/

// variables
let celsius = 0;
let farenheit = 0;

// constantes

// constantes al DOM
const nodoSalida = document.querySelector('#salida');

// entradas
celsius = prompt('Ingrese la temperatura en grados celsius: ');

// procesamiento
farenheit = celsius * 1.8 + 32;

// salidas
nodoSalida.textContent = `${celsius}ºC equivalen a ${farenheit}ºF`;
