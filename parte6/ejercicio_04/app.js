/**
 * ENUNCIADO:
 * Ejercicio: Patrón de exclusión mutua con pestañas (Tabs).
 *
 * Este es uno de los patrones más utilizados en interfaces frontend:
 * Cuando el usuario pulsa un botón de una lista (menús de navegación, pestañas, filtros):
 * 1. Primero se quita la clase activa ('activo') de TODOS los botones con un forEach.
 * 2. Después se añade la clase activa ('activo') ÚNICAMENTE al botón que se acaba de pulsar.
 *
 * OBJETIVOS:
 * 1. Capturar todos los botones con clase '.tab-btn' con querySelectorAll.
 * 2. Capturar el panel #contenidoTab y #resultado.
 * 3. Recorrer las pestañas con forEach y asignar a cada una un escuchador de 'click'.
 * 4. Al hacer clic en una pestaña:
 *    - Quitar la clase 'activo' de todas las pestañas.
 *    - Añadir la clase 'activo' a la pestaña pulsada.
 *    - Actualizar #contenidoTab mostrando el texto de la sección elegida.
 *    - Actualizar #resultado indicando qué pestaña está activa en ese momento.
 *
 * CONCEPTOS CLAVE:
 * - Patrón 'desactivar todos y activar uno'.
 * - pestañas.forEach(p => p.classList.remove('activo'))
 * - pestañaPulsada.classList.add('activo')
 */

// estructura del programa principal

// 1. variables y constantes de estado

// 2. constantes al DOM
// capturar todas las pestañas (.tab-btn)
// capturar #contenidoTab y #resultado

// 3. funciones auxiliares
// funcion para quitar la clase 'activo' de todas las pestañas

// 4. funciones de eventos

// 5. escuchadores de eventos
// recorrer las pestañas con forEach y escuchar 'click' en cada una
