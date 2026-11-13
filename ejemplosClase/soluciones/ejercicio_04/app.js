/**
 * EJERCICIO 04 - SEPARACIÓN MODULAR EN TRES ARCHIVOS (HTML, CSS Y JS) (SOLUCIÓN)
 *
 * Objetivo:
 * Consolidar la arquitectura web profesional vinculando una hoja de estilos externa (style.css) y un archivo de script externo (app.js).
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Vincular style.css en el <head> y app.js al final del <body>.
 * - 2 PASO: En app.js, seleccionar el div con document.querySelector("div").
 * - 3 PASO: Pedir al usuario un color en inglés con prompt() y guardarlo en una variable.
 * - 4 PASO: Modificar el color de fondo del div con la propiedad style.backgroundColor.
 */

// 1. variables y constantes
let color = "";

// 2. constantes al DOM
const nodoDiv = document.querySelector("div");

// 3. entradas
color = prompt("Introduce un color en ingles (ej: navy, gold, coral)");

// 4. procesamiento y salidas
nodoDiv.style.backgroundColor = color;
