/**
 * EJERCICIO 14 - QUERYSELECTOR VS QUERYSELECTORALL EN TABLA 4X4 (SOLUCIÓN)
 *
 * Objetivo:
 * Comprender la diferencia crucial entre seleccionar un único nodo (primer elemento con querySelector) y una lista de nodos indexada (querySelectorAll).
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Crear una constante td con document.querySelector("td") para obtener la primera celda.
 * - 2 PASO: Crear una constante celdas con document.querySelectorAll("td") para obtener todas las celdas en un NodeList.
 * - 3 PASO: Cambiar el fondo de la primera celda a rojo mediante td.style.backgroundColor = "red".
 * - 4 PASO: Cambiar el fondo de la cuarta celda (índice 3) a rojo mediante celdas[3].style.backgroundColor = "red".
 */

// 1. variables y constantes

// 2. constantes al DOM
// querySelector captura únicamente el primer elemento que coincide
const td = document.querySelector('td');

// querySelectorAll captura todos los elementos que coinciden devolviendo un NodeList
const celdas = document.querySelectorAll('td');

// 3. procesamiento y salidas
// Modifica el color de la primera celda
td.style.backgroundColor = 'red';
td.style.color = 'white';

// Modifica el color de la cuarta celda (índice 3 en base cero)
celdas[3].style.backgroundColor = 'red';
celdas[3].style.color = 'white';
