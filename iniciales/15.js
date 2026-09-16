
/**
 * quiero leer el contenido del div nombre y escribirlo en el div salida
 */

// variables
let nombre='';

// constantes

// constantes al DOM
const divNombre=document.querySelector('#nombre');
const divSalida=document.querySelector('#salida');

// entradas
nombre=divNombre.textContent;

// procesamiento

// salidas
divSalida.textContent=nombre;
