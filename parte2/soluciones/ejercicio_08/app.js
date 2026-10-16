/**
 * EJERCICIO 08 - INTERCAMBIO DINÁMICO DE VALORES ENTRE INPUTS (SOLUCIÓN)
 *
 * Objetivo:
 * Intercambiar los valores de dos campos de texto interactivos (#origen y #destino) accediendo y reasignando su propiedad .value.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Capturar el botón disparador #boton con document.querySelector().
 * - 2 PASO: Asignar el listener de click.
 * - 3 PASO: Declarar variables locales para guardar los valores temporales.
 * - 4 PASO: Capturar los inputs #origen y #destino.
 * - 5 PASO: Leer los valores de los inputs usando .value.
 * - 6 PASO: Asignar a origen.value el valor de destino y a destino.value el valor de origen.
 */

// 1. constantes al DOM que queremos escuchar
const boton = document.querySelector('#boton');

// 2. colocar escuchadores de eventos
boton.addEventListener('click', function () {
    let contenidoOrigen = '';
    let contenidoDestino = '';

    const origen = document.querySelector('#origen');
    const destino = document.querySelector('#destino');

    contenidoOrigen = origen.value;
    contenidoDestino = destino.value;

    origen.value = contenidoDestino;
    destino.value = contenidoOrigen;
});
