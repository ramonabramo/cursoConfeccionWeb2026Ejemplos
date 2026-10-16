/**
 * EJERCICIO 02 (Ejemplo 2) - LECTURA DEL DOM, CONCATENACIÓN Y TEMPLATE LITERALS (SOLUCIÓN)
 *
 * Objetivo:
 * Extraer información existente en etiquetas HTML mediante .textContent y formatear salidas de texto comparando concatenación (+) con Template Literals.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar variables locales para nombre y puntos.
 * - 2 PASO: Crear constantes al DOM para capturar los párrafos #nombre y #puntos.
 * - 3 PASO: Leer el contenido textual de ambos párrafos usando .textContent.
 * - 4 PASO: Mostrar en la consola la frase "Lucia tiene 12 puntos" usando concatenación tradicional (+).
 * - 5 PASO: Mostrar la misma frase usando plantillas de texto modernas (template literals con backticks).
 */

// 1. variables y constantes
let nombre = '';
let puntos = 0;

// 2. constantes al DOM
const nodoNombre = document.querySelector('#nombre');
const nodoPuntos = document.querySelector('#puntos');

// 3. entradas
nombre = nodoNombre.textContent;
puntos = nodoPuntos.textContent;

// 4. procesamiento

// 5. salidas
// Salida con concatenacion tradicional (+)
console.log(nombre + ' tiene ' + puntos + ' puntos');

// Salida con template literals (backticks)
console.log(`${nombre} tiene ${puntos} puntos`);
