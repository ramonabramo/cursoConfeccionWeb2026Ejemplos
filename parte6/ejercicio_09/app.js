/**
 * ENUNCIADO:
 * Ejercicio: Buscador de elementos en tiempo real.
 *
 * El evento 'input' se dispara en cada pulsación de tecla mientras el usuario escribe.
 * Al combinarlo con querySelectorAll() y forEach(), podemos crear un filtro instantáneo
 * que oculta o muestra elementos según su texto coincida con la búsqueda.
 *
 * OBJETIVOS:
 * 1. Capturar el campo de texto #inputBuscar, todos los elementos .item-tecnologia y #resultado.
 * 2. Escuchar el evento 'input' en #inputBuscar.
 * 3. En cada cambio:
 *    - Obtener el texto escrito en minúsculas y sin espacios (.trim().toLowerCase()).
 *    - Inicializar un contador de coincidencias en 0.
 *    - Recorrer todos los elementos .item-tecnologia con forEach().
 *    - Obtener el texto del elemento en minúsculas.
 *    - Si incluye el texto de búsqueda (o si la búsqueda está vacía):
 *      Quitar la clase 'oculto' con item.classList.remove('oculto').
 *      Incrementar el contador de coincidencias.
 *    - Si no coincide:
 *      Añadir la clase 'oculto' con item.classList.add('oculto').
 *    - Mostrar en #resultado: 'Mostrando [visibles] de [total] tecnologías coincidentes.'
 *
 * CONCEPTOS CLAVE:
 * - Evento 'input' en campos de texto.
 * - texto.includes(busqueda)
 * - elemento.classList.toggle('oculto', !coincide) o add/remove.
 */

// estructura del programa principal

// 1. variables y constantes de estado

// 2. constantes al DOM
// capturar #inputBuscar
// capturar todos los .item-tecnologia
// capturar #resultado

// 3. funciones auxiliares

// 4. funciones de eventos
// funcion que filtra los elementos segun el texto actual del input

// 5. escuchadores de eventos
// escuchar el evento 'input' en #inputBuscar
