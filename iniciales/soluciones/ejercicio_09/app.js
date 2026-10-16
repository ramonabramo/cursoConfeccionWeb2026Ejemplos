/**
 * EJERCICIO 09 - TÍTULOS Y PÁRRAFOS: CONSTANTES VS VARIABLES (SOLUCIÓN)
 *
 * Objetivo:
 * Aprender la diferencia práctica entre una constante fija de configuración (titulo) y una variable dinámica introducida por el usuario (poblacion).
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar una variable poblacion y una constante fija titulo con el texto "Ejercicio de clase".
 * - 2 PASO: Crear constantes al DOM para el encabezado <h1> y el párrafo #parrafo.
 * - 3 PASO: Pedir la población con prompt("Introduce la poblacion donde vives").
 * - 4 PASO: Asignar titulo a nodoH1.textContent y poblacion a nodoP.textContent.
 */

// 1. variables y constantes
let poblacion = '';
const titulo = 'Ejercicio de clase';

// 2. constantes al DOM
const nodoH1 = document.querySelector('h1');
const nodoP = document.querySelector('#parrafo');

// 3. entradas
poblacion = prompt('Introduce la poblacion donde vives');

// 4. salidas
nodoH1.textContent = titulo;
nodoP.textContent = `Vives en: ${poblacion}`;
