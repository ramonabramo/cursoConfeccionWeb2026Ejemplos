/**
 * ENUNCIADO:
 * Ejercicio: Asignación masiva de escuchadores de eventos con forEach().
 *
 * ¡ATENCIÓN AL ERROR CLÁSICO!
 * Si intentas hacer esto:
 * const botones = document.querySelectorAll('.btn-accion');
 * botones.addEventListener('click', ...); // ❌ ¡ERROR! botones.addEventListener is not a function
 *
 * La razón es que una NodeList es una COLECCIÓN de elementos, no un botón individual.
 * Para asignar un escuchador a cada botón, debemos RECORRER la colección con forEach():
 *
 * botones.forEach(function (boton, indice) {
 *     boton.addEventListener('click', function () {
 *         // Código que se ejecuta cuando el usuario pulsa ESTE botón concreto
 *     });
 * });
 *
 * OBJETIVOS:
 * - Capturar todos los botones con clase '.btn-accion'.
 * - Recorrerlos con forEach(function (boton, indice) { ... }).
 * - Dentro del bucle, añadir a cada botón un escuchador 'click'.
 * - Al hacer clic en un botón:
 *   Mostrar en #resultado:
 *   'Has pulsado el botón #[indice + 1]: "[textoDelBoton]".'
 *
 * CONCEPTOS CLAVE:
 * - forEach para iterar la lista de nodos.
 * - boton.addEventListener('click', callback) individual dentro del bucle.
 * - boton.textContent para leer el texto del botón presionado.
 */

// estructura del programa principal

// 1. variables y constantes de estado

// 2. constantes al DOM
// capturar todos los botones con clase .btn-accion
// capturar el contenedor #resultado

// 3. funciones auxiliares

// 4. funciones de eventos

// 5. escuchadores de eventos
// recorrer 'botones' con forEach y asignar el evento 'click' a cada uno
