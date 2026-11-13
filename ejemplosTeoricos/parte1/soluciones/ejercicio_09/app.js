/**
 * EJERCICIO 09 (Ejemplo 9) - SALUDO DINÁMICO CON PROMPT() E INTERPOLACIÓN (SOLUCIÓN)
 *
 * Objetivo:
 * Solicitar el nombre del usuario por teclado y mostrar en el DOM un mensaje de bienvenida personalizado utilizando Template Literals.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar la variable nombre.
 * - 2 PASO: Capturar el párrafo #salidaBienvenida.
 * - 3 PASO: Pedir el nombre con prompt("Ingrese su nombre: ").
 * - 4 PASO: Asignar a nodoSalidaBienvenida.textContent el mensaje interpolado: `Bienvenido, ${nombre}`.
 */

// 1. variables y constantes
let nombre = '';

// 2. constantes al DOM
const nodoSalidaBienvenida = document.querySelector('#salidaBienvenida');

// 3. entradas
nombre = prompt('Ingrese su nombre: ');

// 4. procesamiento

// 5. salidas
nodoSalidaBienvenida.textContent = `Bienvenido, ${nombre}`;
