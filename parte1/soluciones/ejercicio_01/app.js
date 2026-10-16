/**
 * EJERCICIO 01 (Ejemplo 1) - PRIMER SCRIPT Y CANALES DE SALIDA (CONSOLA Y DOM) (SOLUCIÓN)
 *
 * Objetivo:
 * Comprender la ejecución de JavaScript externo y los dos primeros canales de salida: la consola del navegador (console.log) y el DOM (textContent).
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Crear una constante al DOM llamada salidaMensaje para apuntar al párrafo #salidaMensaje mediante document.querySelector().
 * - 2 PASO: Asignar el texto "Javascript esta funcionando" a la propiedad salidaMensaje.textContent.
 * - 3 PASO: Enviar a la consola del desarrollador el mensaje "Hola desde JS" usando console.log().
 * - 4 PASO: Realizar una operación matemática directa (10 + 5) y mostrar su resultado en la consola.
 */

// 1. variables y constantes

// 2. constantes al DOM
const salidaMensaje = document.querySelector('#salidaMensaje');

// 3. entradas

// 4. procesamiento

// 5. salidas
// colocar un texto en el parrafo
salidaMensaje.textContent = 'Javascript esta funcionando';

// mostrar un texto en consola
console.log('Hola desde JS');

// realizar una operacion matematica y mostrar el resultado en consola
console.log(10 + 5);
