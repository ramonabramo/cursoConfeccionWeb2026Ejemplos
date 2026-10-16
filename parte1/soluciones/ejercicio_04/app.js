/**
 * EJERCICIO 04 (Ejemplo 4) - USO DE CONSTANTES PARA TEXTOS FIJOS (SOLUCIÓN)
 *
 * Objetivo:
 * Declarar constantes inmutables (const) para almacenar textos estáticos y plasmarlos en el DOM.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar una constante llamada TEXTO con el valor "hola desde un archivo externo".
 * - 2 PASO: Crear una constante al DOM para apuntar al párrafo #salidaSaludo con document.querySelector().
 * - 3 PASO: Asignar el contenido de la constante al párrafo mediante nodoSalidaSaludo.textContent.
 */

// 1. variables y constantes
const TEXTO = "hola desde un archivo externo";

// 2. constantes al DOM
const nodoSalidaSaludo = document.querySelector('#salidaSaludo');

// 3. entradas

// 4. procesamiento

// 5. salidas
nodoSalidaSaludo.textContent = TEXTO;
