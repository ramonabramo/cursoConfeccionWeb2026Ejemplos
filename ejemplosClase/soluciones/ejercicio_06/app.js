/**
 * EJERCICIO 06 - RELLENAR UNA TABLA HTML CON DATOS DEL USUARIO (SOLUCIÓN)
 *
 * Objetivo:
 * Pedir por teclado el nombre, edad y población mediante prompt() y volcar cada dato dentro de las celdas correspondientes de una tabla en el DOM.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar variables para nombre, edad y poblacion.
 * - 2 PASO: Crear constantes al DOM para las celdas #nombre, #edad y #poblacion con document.querySelector().
 * - 3 PASO: Solicitar cada uno de los 3 datos al usuario mediante prompt().
 * - 4 PASO: Asignar cada valor a su celda correspondiente usando textContent (o innerHTML).
 */

// 1. variables y constantes
let nombre = "";
let edad = 0;
let poblacion = "";

// 2. constantes al DOM
const tdNombre = document.querySelector('#nombre');
const tdEdad = document.querySelector('#edad');
const tdPoblacion = document.querySelector('#poblacion');

// 3. entradas
nombre = prompt('Introduce tu nombre');
edad = prompt('Introduce tu edad');
poblacion = prompt('Introduce tu poblacion');

// 4. procesamiento

// 5. salidas
tdNombre.textContent = nombre;
tdEdad.textContent = edad;
tdPoblacion.textContent = poblacion;
