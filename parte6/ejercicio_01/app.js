/**
 * ENUNCIADO:
 * Ejercicio: Selección múltiple con querySelectorAll() y lectura por índices.
 *
 * El método document.querySelectorAll('.caja') nos devuelve una lista de nodos (NodeList)
 * con todos los elementos HTML que coincidan con la clase CSS especificada.
 *
 * Cada elemento de la NodeList tiene una posición numérica (índice base cero: 0, 1, 2...).
 * La propiedad .length nos indica cuántos elementos hay en total en la colección.
 *
 * OBJETIVOS:
 * 1. Al pulsar el botón #btnContar:
 *    - Obtener la cantidad de cajas con cajas.length.
 *    - Mostrar en #resultado: 'Se han encontrado [total] cajas en el documento HTML.'
 *
 * 2. Al pulsar el botón #btnPrimera:
 *    - Obtener la primera caja usando cajas[0].
 *    - Quitar la clase 'destacada' de todas las cajas con un bucle forEach.
 *    - Añadir la clase 'destacada' a cajas[0] con classList.add('destacada').
 *    - Mostrar en #resultado: 'La primera caja (índice 0) contiene: "[texto]".'
 *
 * 3. Al pulsar el botón #btnUltima:
 *    - Obtener la última caja usando cajas[cajas.length - 1].
 *    - Quitar la clase 'destacada' de todas las cajas con forEach.
 *    - Añadir la clase 'destacada' a la última caja.
 *    - Mostrar en #resultado: 'La última caja (índice [longitud - 1]) contiene: "[texto]".'
 *
 * CONCEPTOS CLAVE:
 * - document.querySelectorAll('.caja') -> Devuelve una NodeList.
 * - coleccion.length -> Número total de nodos.
 * - coleccion[0] -> Primer elemento.
 * - coleccion[coleccion.length - 1] -> Último elemento.
 * - elemento.classList.add('clase') y elemento.classList.remove('clase').
 */

// estructura del programa principal

// 1. variables y constantes de estado

// 2. constantes al DOM (elementos capturados con querySelector o querySelectorAll)
// apuntar a todas las cajas con document.querySelectorAll('.caja')
// apuntar a los botones #btnContar, #btnPrimera, #btnUltima y al div #resultado

// 3. funciones auxiliares / de renderizado
// funcion para limpiar la clase 'destacada' de todas las cajas

// 4. funciones de eventos
// funcion para contar cajas y mostrar el total
// funcion para seleccionar y destacar la primera caja
// funcion para seleccionar y destacar la ultima caja

// 5. escuchadores de eventos (addEventListener)
// escuchar 'click' en #btnContar
// escuchar 'click' en #btnPrimera
// escuchar 'click' en #btnUltima
