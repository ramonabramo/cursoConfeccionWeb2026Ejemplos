/**
 * EJERCICIO 05 (Ejemplo 5) - AGRUPACIÓN DE DATOS EN UN OBJETO LITERAL (SOLUCIÓN)
 *
 * Objetivo:
 * Aprender a agrupar múltiples datos relacionados leídos del DOM dentro de un objeto literal de JavaScript.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Definir un objeto constante datos con propiedades: nombre, poblacion y edad.
 * - 2 PASO: Crear constantes al DOM para capturar los elementos #nombre, #poblacion y #edad.
 * - 3 PASO: Asignar a cada propiedad del objeto el texto leído del DOM con .textContent.
 * - 4 PASO: Mostrar en la consola la información del objeto formateada con template literals.
 */

// 1. variables y constantes
const datos = {
    nombre: '',
    poblacion: '',
    edad: 0
};

// 2. constantes al DOM
const nodoNombre = document.querySelector('#nombre');
const nodoPoblacion = document.querySelector('#poblacion');
const nodoEdad = document.querySelector('#edad');

// 3. entradas
datos.nombre = nodoNombre.textContent;
datos.poblacion = nodoPoblacion.textContent;
datos.edad = nodoEdad.textContent;

// 4. procesamiento

// 5. salidas
console.log(`Nombre: ${datos.nombre} Edad: ${datos.edad} Poblacion: ${datos.poblacion}`);
