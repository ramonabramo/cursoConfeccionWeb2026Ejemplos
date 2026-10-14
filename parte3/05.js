/**
 * EJERCICIO 05 - IF ANIDADOS / ELSE IF (MAYOR O IGUALES)
 *
 * Enunciado:
 * Introducir dos números por teclado.
 * El programa tiene que indicar en el div #salida:
 * - Qué número es más grande.
 * - O si los números son iguales.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar las variables (numero1, numero2, mensaje) y la constante para el div #salida.
 * - 2 PASO: Pedir los dos números por teclado y convertirlos a número con Number().
 * - 3 PASO: Evaluar las tres posibilidades mediante 'if' anidados (o 'if ... else if ... else'):
 *           * Primera condición: si numero1 > numero2, el primero es más grande.
 *           * Segunda condición (dentro del else): si numero2 > numero1, el segundo es más grande.
 *           * Caso restante (else final): ambos números son iguales.
 * - 4 PASO: Mostrar el mensaje resultante en el div #salida.
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
numero1 = Number(prompt('Introduce el primer numero'));
numero2 = Number(prompt('Introduce el segundo numero'));


// procesamiento
if (numero1 > numero2) {
    mensaje = `El mayor es ${numero1}`;
} else if (numero2 > numero1) {
    mensaje = `El mayor es ${numero2}`;
} else {
    mensaje = 'Los dos numeros son iguales';
}

// salidas
divSalida.textContent = mensaje;

