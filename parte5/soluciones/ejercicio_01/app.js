/**
 * ENUNCIADO:
 * Ejercicio: Declara un array de datos y accede a sus elementos mediante su índice.
 *
 * En JavaScript, los arrays comienzan a numerarse siempre desde la posición 0.
 * Si un array tiene 7 elementos, los índices válidos van del 0 al 6.
 *
 * Tenemos el siguiente array predefinido:
 * const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
 *
 * El usuario introducirá un número en el campo #inputIndice.
 * Al enviar el formulario:
 * 1. Frenar la recarga con e.preventDefault().
 * 2. Convertir el valor introducido a número entero con Number().
 * 3. Utilizar un 'if' para comprobar si el índice es válido:
 *    - Si indice >= 0 y además indice < diasSemana.length:
 *      Obtener el elemento con diasSemana[indice] y mostrar:
 *      'En el índice [indice] se encuentra: "[dia]". Total de días en el array: 7.'
 *    - En caso contrario:
 *      Mostrar un mensaje de error: 'Error: El índice debe estar entre 0 y 6.'
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 * - Si se introduce 0:
 *   Se muestra: 'En el índice 0 se encuentra: "Lunes". Total de días en el array: 7.'
 * - Si se introduce 4:
 *   Se muestra: 'En el índice 4 se encuentra: "Viernes". Total de días en el array: 7.'
 * - Si se introduce 9:
 *   Se muestra: 'Error: El índice debe estar entre 0 y 6.'
 *
 * CONCEPTOS DE ARRAYS A UTILIZAR:
 * - Declaración: const array = ['elem0', 'elem1', ...];
 * - Acceso por corchetes: array[indice]
 * - Propiedad array.length: cantidad total de elementos en el array.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar el array de días de la semana con los 7 nombres.
 * - 2 PASO: Crear constantes al DOM para el formulario (#formulario), el input (#inputIndice) y el div (#resultado).
 * - 3 PASO: Escuchar el evento 'submit' en el formulario pasando (e).
 * - 4 PASO: Llamar a e.preventDefault().
 * - 5 PASO: Obtener el índice y convertirlo a número.
 * - 6 PASO: Validar con un 'if' si el índice está entre 0 y la longitud - 1.
 * - 7 PASO: Mostrar el elemento obtenido o el error en #resultado.
 */

// estructura del programa principal
// NOTA PEDAGÓGICA: En este primer ejercicio utilizamos type="submit" y el evento 'submit'
// con e.preventDefault() para ilustrar cómo se evita la recarga automática de la página en un formulario.
// En los ejercicios siguientes se utilizan botones type="button" con evento 'click' directo.


// declaracion del array y constantes globales
const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

// constantes al DOM que queremos escuchar
const formulario = document.querySelector('#formulario');
const inputIndice = document.querySelector('#inputIndice');
const nodoResultado = document.querySelector('#resultado');

// colocar escuchadores de eventos
formulario.addEventListener('submit', function (e) {
    // Evitamos la recarga automática del formulario
    e.preventDefault();

    // entradas
    const indice = Number(inputIndice.value);
    let mensaje = '';

    // procesamiento con if
    if (indice >= 0 && indice < diasSemana.length) {
        // Accedemos al elemento utilizando la sintaxis de corchetes: diasSemana[indice]
        const diaSeleccionado = diasSemana[indice];
        mensaje = `En el índice ${indice} se encuentra: "${diaSeleccionado}". Total de días en el array: ${diasSemana.length}.`;
    } else {
        mensaje = `Error: El índice debe estar entre 0 y ${diasSemana.length - 1}.`;
    }

    // salidas
    nodoResultado.textContent = mensaje;
});
