/**
 * EJERCICIO 04 - SELECCIÓN DOBLE: COMPARACIÓN DE DOS NÚMEROS (EL MENOR)
 *
 * Enunciado:
 * Pedir dos números distintos por teclado e indicar cuál es el menor.
 * Mostrar el menor en el div #salida.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar las variables (numero1, numero2, mensaje) y la constante del DOM (#salida).
 * - 2 PASO: Solicitar ambos números por teclado con prompt() y transformarlos a tipo numérico con Number().
 * - 3 PASO: Comparar ambos números utilizando 'if ... else':
 *           * Si numero1 < numero2, el menor es numero1.
 *           * Si no (else), el menor es numero2.
 * - 4 PASO: Mostrar en el div #salida cuál es el número menor.
 */

// estructura programa

// declaracion de variables y constantes
let numero1 = 0;
let numero2 = 0;
let mensaje = "";

// constantes al DOM
const divSalida = document.querySelector('#salida');

// gestion de eventos
// constantes al DOM que queremos escuchar
// colocar escuchadores de eventos

// entradas
numero1 = Number(prompt("Introduce el primer número"));
numero2 = Number(prompt("Introduce el segundo número"));

// procesamiento
if (numero1 < numero2) {
    mensaje = "El menor es: " + numero1;
} else {
    mensaje = "El menor es: " + numero2;
}

// salidas
divSalida.textContent = mensaje;
