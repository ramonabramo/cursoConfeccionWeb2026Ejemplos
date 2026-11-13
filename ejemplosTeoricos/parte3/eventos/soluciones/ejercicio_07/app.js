/**
 * ENUNCIADO:
 * Ejercicio: Calcula el precio de una entrada dependiendo
 * de la edad del visitante.
 *
 * Los precios son:
 *
 * - Menores de 6 años: entrada gratuita (0 €).
 * - Desde 6 hasta 17 años: 5 €.
 * - Desde 18 hasta 64 años: 10 €.
 * - Desde 65 años: 6 €.
 *
 * Resolver utilizando un 'if' múltiple y evaluando
 * las edades en orden ascendente.
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 *
 * - Caso 1 (Edad 4):
 *   * 4 es menor que 6.
 *   * Precio: 0 €.
 *
 * - Caso 2 (Edad 15):
 *   * No es menor que 6.
 *   * Sí es menor que 18.
 *   * Precio: 5 €.
 *
 * - Caso 3 (Edad 40):
 *   * No es menor que 6 ni que 18.
 *   * Sí es menor que 65.
 *   * Precio: 10 €.
 *
 * - Caso 4 (Edad 70):
 *   * No cumple ninguna condición anterior.
 *   * Se ejecuta el 'else'.
 *   * Precio: 6 €.
 *

 * EVENTO A UTILIZAR:
 * - El formulario se mantiene para agrupar los controles.
 * - El botón es de tipo 'button'.
 * - Escuchar el evento 'click' del botón con id 'btnCalcular'.
 * - No es necesario utilizar preventDefault().
 * PASOS A REALIZAR:
 *
 * - 1 PASO: Declarar e inicializar:
 *           * edad
 *           * precio
 *
 * - 2 PASO: Crear las constantes al DOM necesarias.
 *
 * - 3 PASO: Escuchar el evento 'click' del botón #btnCalcular.
 *
 *
 * - 5 PASO: Obtener la edad y convertirla a número.
 *
 * - 6 PASO: Utilizar un 'if' múltiple:
 *
 *           * Si edad < 6:
 *             precio será 0.
 *
 *           * Si no, si edad < 18:
 *             precio será 5.
 *
 *           * Si no, si edad < 65:
 *             precio será 10.
 *
 *           * En caso contrario:
 *             precio será 6.
 *
 * - 7 PASO: Mostrar:
 *           "Precio de la entrada: X €".
 */

// estructura programa

// declaracion de variables y constantes
let edad = 0;
let precio = 0;

// constantes al DOM
const btnCalcular = document.querySelector('#btnCalcular');
const inputEdad = document.querySelector('#edad');
const divResultado = document.querySelector('#resultado');

// gestion de eventos
// escuchar el evento click del botón
btnCalcular.addEventListener('click', function () {
    // entradas
    edad = Number(inputEdad.value);

    // procesamiento en orden ascendente
    if (edad < 6) {
        precio = 0;
    } else if (edad < 18) {
        precio = 5;
    } else if (edad < 65) {
        precio = 10;
    } else {
        precio = 6;
    }

    // salidas
    divResultado.textContent = `Precio de la entrada: ${precio} €`;
});
