/**
 * EJERCICIO 07 - GEOMETRÍA: CÁLCULO DEL ÁREA DE UN CÍRCULO (SOLUCIÓN)
 *
 * Objetivo:
 * Pedir por teclado el radio de un círculo, calcular su área matemática usando Math.PI y el operador de potencia **, y mostrar los resultados en el DOM.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar variables para radio y area inicializadas a 0.0.
 * - 2 PASO: Crear constantes al DOM para los elementos #radio y #area con document.querySelector().
 * - 3 PASO: Pedir el radio con prompt() y convertirlo con Number().
 * - 4 PASO: Calcular el área con la fórmula: Math.PI * (radio ** 2).
 * - 5 PASO: Escribir el radio y el área en los elementos correspondientes del DOM.
 */

// 1. variables y constantes
let radio = 0.0;
let area = 0.0;

// 2. constantes al DOM
const spanRadio = document.querySelector('#radio');
const spanArea = document.querySelector('#area');

// 3. entradas
radio = Number(prompt('Introduce el radio'));

// 4. procesamiento
area = Math.PI * (radio ** 2);

// 5. salidas
spanRadio.textContent = radio;
spanArea.textContent = area.toFixed(2);
