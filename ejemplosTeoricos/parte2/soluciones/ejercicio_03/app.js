/**
 * EJERCICIO 03 - MÚLTIPLES INPUTS Y SALIDAS EN LISTA HTML (SOLUCIÓN)
 *
 * Objetivo:
 * Manejar formularios con varios campos a la vez (#nombre, #edad, #poblacion) y distribuir sus valores en diferentes elementos de una lista (#liNombre, #liEdad, #liPoblacion).
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Capturar el botón disparador con document.querySelector("button").
 * - 2 PASO: Asignar el escuchador boton.addEventListener("click", function() { ... }).
 * - 3 PASO: Declarar variables locales para nombre, edad y poblacion.
 * - 4 PASO: Referenciar los 3 inputs (#nombre, #edad, #poblacion) y los 3 elementos de salida (#liNombre, #liEdad, #liPoblacion).
 * - 5 PASO: Leer los valores de los inputs con .value y volcarlos en sus respectivos elementos de salida.
 */

// 1. constantes al DOM que queremos escuchar
const boton = document.querySelector('button');

// 2. colocar escuchadores de eventos
boton.addEventListener('click', function () {
    // variables y constantes
    let edad = 0;
    let nombre = '';
    let poblacion = '';

    // constantes al DOM
    const nodoNombre = document.querySelector('#liNombre');
    const nodoEdad = document.querySelector('#liEdad');
    const nodoPoblacion = document.querySelector('#liPoblacion');

    const inputNombre = document.querySelector('#nombre');
    const inputEdad = document.querySelector('#edad');
    const inputPoblacion = document.querySelector('#poblacion');

    // entradas
    nombre = inputNombre.value;
    edad = inputEdad.value;
    poblacion = inputPoblacion.value;

    // procesamiento

    // salidas
    nodoNombre.textContent = `Nombre: ${nombre}`;
    nodoEdad.textContent = `Edad: ${edad}`;
    nodoPoblacion.textContent = `Población: ${poblacion}`;
});
