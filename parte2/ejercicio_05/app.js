/**
 * EJERCICIO 05 - GEOMETRÍA: CÍRCULO Y ACTUALIZACIÓN DE SVG DINÁMICO
 *
 * Objetivo:
 * Leer el radio desde un input, calcular su área y perímetro matemáticos y actualizar dinámicamente un gráfico vectorial SVG mediante setAttribute().
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Capturar el botón de cálculo con document.querySelector("#boton").
 * - 2 PASO: Añadir el escuchador de eventos click.
 * - 3 PASO: Declarar variables locales para radio, area y perimetro.
 * - 4 PASO: Capturar #radio (input), #radioSalida, #area, #perimetro y el elemento SVG #circulo.
 * - 5 PASO: Leer y convertir el radio con Number(inputRadio.value).
 * - 6 PASO: Calcular area = Math.PI * (radio ** 2) y perimetro = 2 * Math.PI * radio.
 * - 7 PASO: Mostrar los cálculos en los spans y actualizar el radio del SVG con circulo.setAttribute("r", radio).
 */

// 1. constantes al DOM que queremos escuchar
const boton = document.querySelector('#boton');

// 2. colocar escuchadores de eventos
boton.addEventListener('click', function () {
    // estructura interna del evento
    // variables y constantes

    // constantes al DOM (input, spans y circulo SVG)

    // entradas

    // procesamiento

    // salidas (escribir en spans y actualizar atributo 'r' del circulo SVG)

});
