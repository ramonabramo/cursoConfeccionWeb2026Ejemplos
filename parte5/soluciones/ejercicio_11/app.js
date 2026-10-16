/**
 * ENUNCIADO:
 * Ejercicio: Recorre un array utilizando el método 'forEach()'.
 *
 * En JavaScript moderno, 'forEach()' es el método preferido y más recomendado
 * para recorrer arrays. A diferencia de los bucles clásicos, no tenemos que
 * gestionar manualmente variables contadoras (i) ni preocuparnos por desbordar
 * la longitud del array.
 *
 * El método array.forEach(function (elemento) { ... }) ejecuta la función una vez
 * por cada elemento del array, pasándole dicho elemento automáticamente.
 *
 * Array inicial de lenguajes:
 * let lenguajes = ['JavaScript', 'Python', 'Java', 'PHP', 'TypeScript'];
 *
 * Acciones a programar:
 * 1. Envío del formulario (#formLenguaje):
 *    - Frenar recarga con e.preventDefault().
 *    - Si hay texto en #inputLenguaje: añadirlo con lenguajes.push() y limpiar el campo.
 * 2. Clic en el botón #btnMostrar:
 *    - Declarar una variable acumuladora vacía: let salida = '';
 *    - Recorrer el array con:
 *      lenguajes.forEach(function (lenguaje) {
 *          salida += `• ${lenguaje}\n`;
 *      });
 *    - Mostrar el resultado en el div #resultado.
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 * - Al pulsar "Recorrer con forEach":
 *   Se muestra:
 *   Listado de lenguajes (Total: 5):
 *   • JavaScript
 *   • Python
 *   • Java
 *   • PHP
 *   • TypeScript
 *
 * CONCEPTOS DE ARRAYS A UTILIZAR:
 * - array.forEach(function (elemento) { ... }): Recorrido declarativo y seguro.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar el array 'lenguajes'.
 * - 2 PASO: Crear constantes al DOM para formulario, input, botón mostrar y resultado.
 * - 3 PASO: Escuchar 'submit' para permitir añadir nuevos elementos con push().
 * - 4 PASO: Escuchar 'click' en #btnMostrar.
 * - 5 PASO: Dentro del click, aplicar lenguajes.forEach(...) acumulando cada texto.
 * - 6 PASO: Imprimir la cadena final en #resultado.
 */

// estructura del programa principal

// declaracion del array inicial
let lenguajes = ['JavaScript', 'Python', 'Java', 'PHP', 'TypeScript'];

// constantes al DOM que queremos escuchar
const formLenguaje = document.querySelector('#formLenguaje');
const inputLenguaje = document.querySelector('#inputLenguaje');
const btnMostrar = document.querySelector('#btnMostrar');
const nodoResultado = document.querySelector('#resultado');

// colocar escuchadores de eventos

// 1. Añadir nuevo elemento opcionalmente
formLenguaje.addEventListener('submit', function (e) {
    e.preventDefault();
    const nuevo = inputLenguaje.value.trim();

    if (nuevo !== '') {
        lenguajes.push(nuevo);
        inputLenguaje.value = '';
        inputLenguaje.focus();
        nodoResultado.textContent = `Lenguaje "${nuevo}" añadido. Pulsa "Recorrer con forEach" para actualizar el listado.`;
    }
});

// 2. Recorrer el array con forEach() (El método moderno recomendado)
btnMostrar.addEventListener('click', function () {
    let salida = `Listado de lenguajes (Total: ${lenguajes.length}):\n\n`;

    // forEach pasa en cada vuelta el elemento actual como parámetro
    lenguajes.forEach(function (lenguaje) {
        salida += `• ${lenguaje}\n`;
    });

    nodoResultado.textContent = salida;
});
