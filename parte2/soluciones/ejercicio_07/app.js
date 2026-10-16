/**
 * EJERCICIO 07 - INTERCAMBIO DE TEXTO ENTRE CONTENEDORES DIV (SOLUCIÓN)
 *
 * Objetivo:
 * Aplicar el algoritmo de intercambio (swap) de valores entre dos elementos de texto mediante variables en memoria al hacer clic en un botón.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Capturar el botón disparador #boton con document.querySelector().
 * - 2 PASO: Asignar el escuchador boton.addEventListener("click", ...).
 * - 3 PASO: Declarar variables locales contenidoOrigen y contenidoDestino.
 * - 4 PASO: Capturar los elementos #origen y #destino del DOM.
 * - 5 PASO: Leer el contenido de ambos divs con textContent.
 * - 6 PASO: Intercambiar los valores asignando contenidoDestino a origen y contenidoOrigen a destino.
 */

// 1. constantes al DOM que queremos escuchar
const boton = document.querySelector('#boton');

// 2. colocar escuchadores de eventos
boton.addEventListener('click', function () {
    let contenidoOrigen = '';
    let contenidoDestino = '';

    const origen = document.querySelector('#origen');
    const destino = document.querySelector('#destino');

    contenidoOrigen = origen.textContent;
    contenidoDestino = destino.textContent;

    origen.textContent = contenidoDestino;
    destino.textContent = contenidoOrigen;
});
