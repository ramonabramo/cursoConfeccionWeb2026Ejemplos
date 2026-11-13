/**
 * EJERCICIO 10 (Ejemplo 10) - CONVERSIÓN TÉRMICA: CELSIUS A FAHRENHEIT (SOLUCIÓN)
 *
 * Objetivo:
 * Pedir una temperatura en grados Celsius, aplicar la fórmula matemática F = C * 1.8 + 32 y mostrar el resultado formateado en el DOM.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar variables para celsius y farenheit.
 * - 2 PASO: Capturar el contenedor #salida con document.querySelector().
 * - 3 PASO: Pedir la temperatura con Number(prompt(...)).
 * - 4 PASO: Aplicar la fórmula: farenheit = celsius * 1.8 + 32.
 * - 5 PASO: Volcar en nodoSalida.textContent el mensaje: `${celsius}ºC equivalen a ${farenheit}ºF`.
 */

// 1. variables y constantes
let celsius = 0;
let farenheit = 0;

// 2. constantes al DOM
const nodoSalida = document.querySelector('#salida');

// 3. entradas
celsius = Number(prompt('Ingrese la temperatura en grados celsius: '));

// 4. procesamiento
farenheit = celsius * 1.8 + 32;

// 5. salidas
nodoSalida.textContent = `${celsius}ºC equivalen a ${farenheit}ºF`;
