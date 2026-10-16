/**
 * EJERCICIO 06 (Ejemplo 6) - MANIPULACIÓN DE ESTILOS CSS MEDIANTE UN OBJETO DE CONFIGURACIÓN (SOLUCIÓN)
 *
 * Objetivo:
 * Aplicar múltiples propiedades de estilo CSS en línea a un elemento visual leyendo la configuración de un objeto literal.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Definir un objeto propiedades con claves: ancho: 300, alto: 100, fondo: "blue", colorLetra: "white".
 * - 2 PASO: Capturar el contenedor #salida con document.querySelector().
 * - 3 PASO: Aplicar al nodoSalida sus estilos en línea: width (con px), height (con px), backgroundColor y color.
 */

// 1. variables y constantes
const propiedades = {
    ancho: 300,
    alto: 100,
    fondo: 'blue',
    colorLetra: 'white'
};

// 2. constantes al DOM
const nodoSalida = document.querySelector('#salida');

// 3. entradas

// 4. procesamiento

// 5. salidas
nodoSalida.style.width = `${propiedades.ancho}px`;
nodoSalida.style.height = `${propiedades.alto}px`;
nodoSalida.style.backgroundColor = propiedades.fondo;
nodoSalida.style.color = propiedades.colorLetra;
