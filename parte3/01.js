/**
 * pedir un numero por teclado e indicar si es mayor que 5
 * o si menor o igual en el div Salida
 * 
 * Solo podemos utilizar if sin else
 */

// variables y constantes
let numero = 0;
let mensaje = '';

// constantes al DOM
const divSalida = document.querySelector('#salida');

// gestion de eventos
// constantes al DOM que queremos escuchar
// colocar escuchadores de eventos

// entradas
numero = Number(prompt('Introduce un numero'));

// procesamiento


if (numero > 5) {
    mensaje = 'el numero es mayor que 5';
} else {
    mensaje = 'el numero es menor o igual que 5';
}

// salidas
divSalida.textContent = mensaje;


