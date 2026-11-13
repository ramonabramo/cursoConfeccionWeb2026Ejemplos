/**
 * ENUNCIADO:
 * Ejercicio: Reto integrador de catálogo interactivo con filtros y cálculo de reservas.
 *
 * Este ejercicio reúne todas las habilidades aprendidas en la Parte 6:
 * - Selección múltiple con querySelectorAll().
 * - Recorrido y asignación de eventos con forEach().
 * - Patrón de pestañas activas para los botones de categoría.
 * - Filtrado visual de tarjetas según su atributo data-categoria.
 * - Selección interactiva de cursos con alternancia de clase (classList.toggle('seleccionado')).
 * - Recálculo automático del total acumulado sumando los cursos seleccionados.
 *
 * OBJETIVOS:
 * 1. Filtros de categoría:
 *    - Al pulsar un botón de categoría (.tab-btn):
 *      1. Quitar 'activo' de todos los botones y añadirlo al pulsado.
 *      2. Leer data-filtro del botón ('todos', 'frontend', 'backend', 'diseno').
 *      3. Recorrer todas las tarjetas (.tarjeta-curso):
 *         - Si categoria === filtro o filtro === 'todos', quitar clase 'oculto'.
 *         - En caso contrario, añadir clase 'oculto'.
 *
 * 2. Selección de cursos:
 *    - Cada tarjeta tiene su botón '.btn-reservar'.
 *    - Al hacer clic, alternar en la tarjeta la clase 'seleccionado' (classList.toggle('seleccionado')).
 *    - Si está seleccionada, cambiar el texto del botón a 'Quitar Curso'; si no, a 'Seleccionar Curso'.
 *    - Llamar a recalcularTotal().
 *
 * 3. Función recalcularTotal():
 *    - Recorrer todas las tarjetas que tengan la clase '.seleccionado'.
 *    - Sumar sus precios leyendo Number(tarjeta.dataset.precio).
 *    - Mostrar en #resultado:
 *      'Cursos seleccionados: [cantidad] | Total de la matrícula: [total] €.'
 *
 * 4. Botón #btnVaciarCarrito:
 *    - Quitar la clase 'seleccionado' de todas las tarjetas.
 *    - Restablecer los textos de los botones a 'Seleccionar Curso'.
 *    - Recalcular el total (quedará en 0 €).
 *
 * CONCEPTOS CLAVE:
 * - Integración completa de DOM múltiple.
 * - classList.toggle()
 * - dataset y acumuladores numéricos.
 */

// estructura del programa principal

// 1. variables y constantes de estado

// 2. constantes al DOM
// capturar botones de categoria (.tab-btn)
// capturar tarjetas (.tarjeta-curso)
// capturar #btnVaciarCarrito y #resultado

// 3. funciones auxiliares
// funcion para recalcular y mostrar el total de cursos seleccionados

// 4. funciones de eventos
// funcion para aplicar el filtro de categoria
// funcion para limpiar todas las reservas

// 5. escuchadores de eventos
// asignar eventos a las pestañas de filtro con forEach
// asignar eventos a cada boton .btn-reservar dentro de las tarjetas con forEach
// escuchar 'click' en #btnVaciarCarrito
