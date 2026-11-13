/**
 * ENUNCIADO:
 * Ejercicio 12 (Reto Integrador): Panel de Inventario con Bucles Selectivos.
 *
 * En este reto final deberás aplicar el bucle más eficiente y adecuado según el tipo de datos:
 *
 * 1. TAREA A: Botón #btnValorInventario -> Usar 'for...of'
 *    - Recorrer todas las tarjetas (.tarjeta-producto).
 *    - Leer data-stock y data-precio de cada una.
 *    - Multiplicar stock * precio y acumular el valor monetario total del inventario.
 *    - Mostrar el importe total en #resultado.
 *
 * 2. TAREA B: Botón #btnBuscarAgotado -> Usar 'while' con 'break'
 *    - Recorrer con un bucle while hasta localizar el PRIMER producto con data-stock === "0".
 *    - En cuanto lo encuentre, detener con 'break'.
 *    - Mostrar en #resultado qué producto está agotado y qué ID tiene.
 *
 * 3. TAREA C: Botón #btnVerMetadatos -> Usar 'for...in'
 *    - Tenemos el siguiente objeto de configuración:
 *      const configAlmacen = { sede: 'Central Valencia', pasillos: 14, responsable: 'Laura Gómez', versionSistema: '2.4.1' };
 *    - Recorrer el objeto con 'for...in' y mostrar todas sus propiedades en #resultado.
 *
 * 4. TAREA D: Botones '.btn-eliminar' -> Usar 'forEach()'
 *    - Capturar todos los botones .btn-eliminar con querySelectorAll.
 *    - Asignar a cada uno un evento 'click' con forEach.
 *    - Al pulsar, ocultar o eliminar la tarjeta correspondiente (btn.closest('.tarjeta-producto').remove()).
 *
 * CONCEPTOS INTEGRADOS:
 * - Selección estratégica de bucles (for...of, while + break, for...in, forEach)
 * - Manipulación avanzada del DOM y atributos dataset
 */

// estructura del programa principal

// 1. variables y constantes de estado
const configAlmacen = {
    sede: 'Central Valencia',
    pasillos: 14,
    responsable: 'Laura Gómez',
    versionSistema: '2.4.1'
};

// 2. constantes al DOM
// capturar tarjetas (.tarjeta-producto), botones de accion y botones de eliminar

// 3. funciones auxiliares

// 4. funciones de eventos
// Tarea A: for...of para valor total
// Tarea B: while + break para detectar agotado
// Tarea C: for...in para metadatos

// 5. escuchadores de eventos
// escuchar botones de control
// escuchar botones de eliminar con forEach
