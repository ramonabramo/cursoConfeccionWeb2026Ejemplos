/**
 * EJERCICIO 06 - GEOMETRÍA: CUADRADO Y REPRESENTACIÓN VISUAL SVG (SOLUCIÓN)
 *
 * Objetivo:
 * Calcular área y perímetro de un cuadrado a partir de su lado en un formulario y redimensionar un rectángulo SVG con setAttribute("width") y setAttribute("height").
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Capturar el botón de cálculo con document.querySelector("button").
 * - 2 PASO: Asignar el escuchador de eventos click.
 * - 3 PASO: Declarar variables locales para lado, area y perimetro.
 * - 4 PASO: Capturar #inputLado, los spans de salida y el elemento SVG #rectangulo.
 * - 5 PASO: Leer y convertir el lado con Number(inputLado.value).
 * - 6 PASO: Calcular area = lado * lado y perimetro = 4 * lado.
 * - 7 PASO: Volcar los datos en los spans y asignar width y height al rectángulo SVG.
 */

// 1. constantes al DOM que queremos escuchar
const boton = document.querySelector('button');

// 2. colocar escuchadores de eventos
boton.addEventListener('click', function () {
    let lado = 0;
    let area = 0;
    let perimetro = 0;

    const inputLado = document.querySelector('#inputLado');
    const spanLado = document.querySelector('#lado');
    const spanArea = document.querySelector('#area');
    const spanPerimetro = document.querySelector('#perimetro');
    const rectangulo = document.querySelector('#rectangulo');

    lado = Number(inputLado.value);

    area = lado * lado;
    perimetro = 4 * lado;

    spanLado.textContent = lado;
    spanArea.textContent = area;
    spanPerimetro.textContent = perimetro;

    rectangulo.setAttribute('width', lado);
    rectangulo.setAttribute('height', lado);
});
