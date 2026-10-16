/**
 * EJERCICIO 15 - LEER CONTENIDO DE UN DIV CON TEXTCONTENT Y COPIARLO (SOLUCIÓN)
 *
 * Objetivo:
 * Aprender a extraer el texto existente dentro de un elemento contenedor normal (div) usando la propiedad .textContent y volcarlo en otra caja de salida.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar una variable nombre inicializada a string vacío "".
 * - 2 PASO: Crear constantes al DOM para divNombre (#nombre) y divSalida (#salida).
 * - 3 PASO: Leer el contenido del div usando la propiedad textContent: nombre = divNombre.textContent.
 * - 4 PASO: Asignar dicho valor a la caja de salida: divSalida.textContent = nombre.
 */

// 1. variables y constantes
let nombre = '';

// 2. constantes al DOM
const divNombre = document.querySelector('#nombre');
const divSalida = document.querySelector('#salida');

// 3. entradas
nombre = divNombre.textContent;

// 4. salidas
divSalida.textContent = `Texto leído del div: ${nombre}`;
