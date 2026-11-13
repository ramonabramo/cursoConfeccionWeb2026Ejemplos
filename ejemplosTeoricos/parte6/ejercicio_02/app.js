/**
 * ENUNCIADO:
 * Ejercicio: Recorrido masivo con forEach() para modificar clases CSS.
 *
 * El método .forEach() de una NodeList ejecuta una función callback sobre cada uno
 * de los elementos capturados:
 *
 * articulos.forEach(function (articulo, indice) {
 *     // aquí 'articulo' representa a cada nodo individual
 * });
 *
 * OBJETIVOS:
 * 1. Al pulsar el botón #btnDestacar:
 *    - Recorrer todos los elementos .articulo con forEach().
 *    - A cada uno, añadirle la clase 'destacado' usando articulo.classList.add('destacado').
 *    - Mostrar en #resultado cuántos artículos han sido destacados.
 *
 * 2. Al pulsar el botón #btnRestablecer:
 *    - Recorrer todos los elementos .articulo con forEach().
 *    - Quitarles la clase 'destacado' con articulo.classList.remove('destacado').
 *    - Mostrar en #resultado: 'Todos los artículos han vuelto a su estado original.'
 *
 * CONCEPTOS CLAVE:
 * - articulos.forEach(function (nodo) { ... })
 * - nodo.classList.add('nombreClase')
 * - nodo.classList.remove('nombreClase')
 */

// estructura del programa principal

// 1. variables y constantes de estado

// 2. constantes al DOM
// capturar todos los articulos (.articulo)
// capturar #btnDestacar, #btnRestablecer y #resultado

// 3. funciones auxiliares / de renderizado

// 4. funciones de eventos
// funcion para destacar todos los articulos recorriendo con forEach
// funcion para restablecer todos los articulos quitando la clase con forEach

// 5. escuchadores de eventos
// escuchar 'click' en #btnDestacar
// escuchar 'click' en #btnRestablecer
