/**
 * EJERCICIO 08 - DIBUJO Y ESCALA CSS: REDIMENSIONAR UN CÍRCULO INTERACTIVO (SOLUCIÓN)
 *
 * Objetivo:
 * Pedir un número por teclado, escribirlo en el contenedor #salida y redimensionar dinámicamente un círculo en pantalla modificando style.width y style.height.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar una variable numero inicializada a 0.
 * - 2 PASO: Crear constantes al DOM para #salida y #caja.
 * - 3 PASO: Pedir un número al usuario con Number(prompt("Introduce un numero")).
 * - 4 PASO: Escribir en divSalida.innerHTML el número introducido con formato.
 * - 5 PASO: Asignar al divCaja el ancho y alto en píxeles: divCaja.style.width = `${numero}px` y divCaja.style.height = `${numero}px`.
 */

// 1. variables y constantes
let numero = 0;

// 2. constantes al DOM
const divSalida = document.querySelector('#salida');
const divCaja = document.querySelector('#caja');

// 3. entradas
numero = Number(prompt('Introduce un numero para el diametro (ej: 150)'));

// 4. procesamiento y salidas
divSalida.innerHTML = `
  <h2>Tamaño Configurado</h2>
  <p><strong>${numero} px</strong></p>
`;

divCaja.style.width = `${numero}px`;
divCaja.style.height = `${numero}px`;
