/**
 * EJERCICIO 03 - SELECCIÓN DOBLE: COMPARACIÓN DE DOS NÚMEROS (EL MAYOR)
 *
 * Enunciado:
 * Pedir dos números distintos por teclado e indicar cuál es el mayor.
 * Mostrar el mayor en el div #salida.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar las variables para los dos números (numero1, numero2), el mensaje y la constante del div #salida.
 * - 2 PASO: Pedir los dos números por teclado mediante dos prompt() y convertirlos con Number().
 * - 3 PASO: Comparar ambos números con una estructura 'if ... else':
 *           * Si numero1 > numero2, guardar en el mensaje que el primer número es el mayor.
 *           * En caso contrario (else), guardar en el mensaje que el segundo número es el mayor.
 * - 4 PASO: Mostrar el resultado almacenado en el div #salida.
 */

// ejemplo de funcionamiento
// numero1 = 5;
// numero2 = 3;
// mensaje = 'El mayor es: 5';


// estructura programa

// declaracion de variables y constantes
let numero1 = 0;
let numero2 = 0;
let mensaje = "";

// constantes al DOM
const divSalida = document.querySelector("#salida");

// gestion de eventos
// constantes al DOM que queremos escuchar
// colocar escuchadores de eventos

// entradas
numero1 = Number(prompt("Introduce el primer número"));
numero2 = Number(prompt("Introduce el segundo número"));

// procesamiento
if (numero1 > numero2) {
    mensaje = `El mayor es: ${numero1}`;
} else {
    mensaje = `El mayor es: ${numero2}`;
}

// salidas
divSalida.textContent = mensaje;
