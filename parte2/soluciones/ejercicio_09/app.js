/**
 * EJERCICIO 09 - MANIPULACIÓN MÚLTIPLE DE ESTILOS CSS CON BOOTSTRAP (SOLUCIÓN)
 *
 * Objetivo:
 * Controlar múltiples elementos visuales simultáneamente (#circulo1, #circulo2, #circulo3) cambiando dinámicamente su color de fondo con style.backgroundColor según el botón pulsado (Rojo, Verde, Azul).
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Capturar los tres botones: #botonRojo, #botonVerde y #botonAzul.
 * - 2 PASO: Asignar un escuchador addEventListener("click", ...) a cada botón.
 * - 3 PASO: En cada función, capturar los tres círculos (#circulo1, #circulo2, #circulo3).
 * - 4 PASO: Asignar al style.backgroundColor de cada círculo el color correspondiente ("red", "green", "blue").
 */

// 1. constantes al DOM que queremos escuchar
const botonRojo = document.querySelector('#botonRojo');
const botonAzul = document.querySelector('#botonAzul');
const botonVerde = document.querySelector('#botonVerde');

// 2. colocar escuchadores de eventos
botonRojo.addEventListener('click', function () {
    const color = "red";
    const circulo1 = document.querySelector('#circulo1');
    const circulo2 = document.querySelector('#circulo2');
    const circulo3 = document.querySelector('#circulo3');

    circulo1.style.backgroundColor = color;
    circulo2.style.backgroundColor = color;
    circulo3.style.backgroundColor = color;
});

botonAzul.addEventListener('click', function () {
    const color = "blue";
    const circulo1 = document.querySelector('#circulo1');
    const circulo2 = document.querySelector('#circulo2');
    const circulo3 = document.querySelector('#circulo3');

    circulo1.style.backgroundColor = color;
    circulo2.style.backgroundColor = color;
    circulo3.style.backgroundColor = color;
});

botonVerde.addEventListener('click', function () {
    const color = "green";
    const circulo1 = document.querySelector('#circulo1');
    const circulo2 = document.querySelector('#circulo2');
    const circulo3 = document.querySelector('#circulo3');

    circulo1.style.backgroundColor = color;
    circulo2.style.backgroundColor = color;
    circulo3.style.backgroundColor = color;
});
