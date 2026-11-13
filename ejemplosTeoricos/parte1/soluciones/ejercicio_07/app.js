/**
 * EJERCICIO 07 (Ejemplo 7) - ENTRADA CON PROMPT(), CONVERSIÓN NUMÉRICA Y CÁLCULO DEL DOBLE (SOLUCIÓN)
 *
 * Objetivo:
 * Pedir un número por teclado mediante prompt(), convertirlo con Number() para calcular su doble y plasmar el resultado en el DOM.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar variables numero y salida inicializadas a 0.
 * - 2 PASO: Capturar el párrafo #salida con document.querySelector().
 * - 3 PASO: Pedir un número con Number(prompt("Introduce un numero", 0)).
 * - 4 PASO: Calcular salida = numero * 2.
 * - 5 PASO: Escribir el resultado en nodoSalida.textContent.
 */

// 1. variables y constantes
let numero = 0;
let salida = 0;

// 2. constantes al DOM
const nodoSalida = document.querySelector('#salida');

// 3. entradas
numero = Number(prompt('Introduce un numero', 0));

// 4. procesamiento
salida = numero * 2;

// 5. salidas
nodoSalida.textContent = salida;
