/*
Pedir un numero por teclado y 
en el parrafo salida escribir el doble de ese numero
*/

// variables
let numero = 0;
let salida = 0;

// constantes

// constantes al DOM
const nodoSalida = document.querySelector('#salida');

// entradas
numero = Number(prompt('Introduce un numero'));

// procesamiento
salida = numero * 2;

// salidas
nodoSalida.textContent = salida;
