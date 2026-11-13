/**
 * EJERCICIO 01 - SELECCIÓN SIMPLE
 * 
 * Enunciado:
 * Pedir un número por teclado e indicar si es mayor que 5
 * o si es menor o igual en el div #salida.
  * 
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar las variables (numero, mensaje) y la constante para apuntar al div #salida.
 * - 2 PASO: Pedir el número por teclado con prompt(), convertirlo con Number() y guardarlo en 'numero'.
 * - 3 PASO: Evaluar con un 'if' simple si el número es mayor que 5 (numero > 5) y asignar el mensaje correspondiente.
 * - 4 PASO: Evaluar con 'else' si el número es menor o igual que 5 (numero <= 5) 
 *           (o bien asignar un valor por defecto antes del primer 'if').
 * - 5 PASO: Mostrar el contenido de la variable 'mensaje' dentro del div #salida usando textContent.
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
