/**
 * EJERCICIO 01 - EL PUNTO DE PARTIDA LINEAL CON PROMPT() (SOLUCIÓN)
 *
 * Objetivo:
 * Comprender el paradigma de ejecución secuencial clásico donde el programa pide datos al cargar la página mediante prompt() antes de pasar a la programación guiada por eventos.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar una variable edad inicializada a 0.
 * - 2 PASO: Crear una constante al DOM para apuntar al elemento #salida con document.querySelector().
 * - 3 PASO: Pedir la edad al usuario mediante prompt("introduce edad") y guardarla en la variable.
 * - 4 PASO: Escribir el valor de edad en el elemento #salida usando textContent (o innerHTML).
 */

// 1. variables y constantes
let edad = 0;

// 2. constantes al DOM
const nodoSalida = document.querySelector('#salida');

// 3. entradas
edad = prompt("introduce edad");

// 4. procesamiento

// 5. salidas
nodoSalida.textContent = edad;
