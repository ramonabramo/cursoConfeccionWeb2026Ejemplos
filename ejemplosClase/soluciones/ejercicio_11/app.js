/**
 * EJERCICIO 11 - GEOMETRÍA: ÁREA Y PERÍMETRO DE UN RECTÁNGULO EN LISTA HTML (SOLUCIÓN)
 *
 * Objetivo:
 * Pedir las dos dimensiones de un rectángulo, calcular su área y perímetro, y mostrar los 4 datos en sus respectivos <span> dentro de una lista.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar variables para lado1, lado2, area y perimetro.
 * - 2 PASO: Crear constantes al DOM para los spans #lado1, #lado2, #area y #perimetro.
 * - 3 PASO: Pedir lado1 y lado2 con Number(prompt(...)).
 * - 4 PASO: Calcular area = lado1 * lado2 y perimetro = 2 * lado1 + 2 * lado2.
 * - 5 PASO: Asignar cada valor a su span correspondiente con textContent.
 */

// 1. variables y constantes
let lado1 = 0;
let lado2 = 0;
let area = 0;
let perimetro = 0;

// 2. constantes al DOM
const spanLado1 = document.querySelector('#lado1');
const spanLado2 = document.querySelector('#lado2');
const spanArea = document.querySelector('#area');
const spanPerimetro = document.querySelector('#perimetro');

// 3. entradas
lado1 = Number(prompt('Introduce el lado 1'));
lado2 = Number(prompt('Introduce el lado 2'));

// 4. procesamiento
area = lado1 * lado2;
perimetro = 2 * lado1 + 2 * lado2;

// 5. salidas
spanLado1.textContent = lado1;
spanLado2.textContent = lado2;
spanArea.textContent = area;
spanPerimetro.textContent = perimetro;
