/**
 * EJERCICIO 13 - CAJA INTERACTIVA: ANCHO, ALTO Y COLOR COMBINADOS (SOLUCIÓN)
 *
 * Objetivo:
 * Pedir el ancho, alto y color de un rectángulo por teclado, mostrar los datos en divs descriptivos y aplicar simultáneamente los estilos CSS al div #caja.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar variables para ancho, alto y color.
 * - 2 PASO: Crear constantes al DOM para #caja, #ancho, #alto y #color.
 * - 3 PASO: Pedir los 3 datos al usuario con prompt().
 * - 4 PASO: Volcar los textos en divAncho, divAlto y divColor con textContent.
 * - 5 PASO: Aplicar al divCaja sus estilos: style.width = `${ancho}px`, style.height = `${alto}px` y style.backgroundColor = color.
 */

// 1. variables y constantes
let ancho = 0;
let alto = 0;
let color = "";

// 2. constantes al DOM
const divCaja = document.querySelector('#caja');
const divAncho = document.querySelector('#ancho');
const divAlto = document.querySelector('#alto');
const divColor = document.querySelector('#color');

// 3. entradas
ancho = prompt('Ingrese el ancho del rectángulo (ej: 200)');
alto = prompt('Ingrese el alto del rectángulo (ej: 120)');
color = prompt('Ingrese el color del rectángulo (ej: purple, navy, green)');

// 4. procesamiento

// 5. salidas
divAncho.textContent = `Ancho: ${ancho}px`;
divAlto.textContent = `Alto: ${alto}px`;
divColor.textContent = `Color: ${color}`;

divCaja.style.width = `${ancho}px`;
divCaja.style.height = `${alto}px`;
divCaja.style.backgroundColor = color;
