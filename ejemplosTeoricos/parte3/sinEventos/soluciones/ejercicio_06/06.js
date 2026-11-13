/**
 * EJERCICIO 06 - IF ANIDADOS (POSITIVO, NEGATIVO O CERO)
 *
 * Enunciado:
 * Pedir un número por teclado e indicar en el div #salida si el número
 * introducido es POSITIVO, NEGATIVO o CERO (neutro).
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar las variables (numero, mensaje) y la constante del DOM (#salida).
 * - 2 PASO: Pedir el número por teclado con prompt() y convertirlo con Number().
 * - 3 PASO: Evaluar el signo del número con condicionales anidados ('if ... else if ... else'):
 *           * Si numero > 0, entonces el número es positivo.
 *           * Si no, comprobar si numero < 0; en ese caso el número es negativo.
 *           * Si no se cumple ninguna de las anteriores (else), el número es 0.
 * - 4 PASO: Mostrar el mensaje en el div #salida.
 */

// estructura programa

// declaracion de variables y constantes
let numero = 0;
let mensaje = "";

// constantes al DOM
const divSalida = document.querySelector("#salida");

// gestion de eventos
// constantes al DOM que queremos escuchar
// colocar escuchadores de eventos

// entradas
numero = Number(prompt("Introduce un número"));

// procesamiento
if (numero > 0) {
    mensaje = "El número es POSITIVO";
} else if (numero < 0) {
    mensaje = "El número es NEGATIVO";
} else {
    mensaje = "El número es CERO";
}

// salidas
divSalida.textContent = mensaje;
