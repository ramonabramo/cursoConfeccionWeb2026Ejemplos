/**
 * ENUNCIADO:
 * Ejercicio: Reto integrador de arrays de datos.
 *
 * En este ejercicio combinamos las operaciones más importantes que se realizan con arrays:
 * 1. Añadir elementos sin duplicados ('push' + 'includes').
 * 2. Buscar si un elemento existe y conocer su posición ('indexOf').
 * 3. Eliminar un elemento específico buscándolo previamente ('indexOf' + 'splice').
 * 4. Mostrar el catálogo completo con el formato adecuado ('join' y 'length').
 *
 * Array inicial de catálogo:
 * let catalogo = ['manzana', 'pera', 'platano'];
 *
 * Botones y acciones:
 * - #btnAgregar:
 *   * Si el campo está vacío: error.
 *   * Si catalogo.includes(producto): avisar de que el producto ya existe (no duplicar).
 *   * Si no existe: catalogo.push(producto) y confirmar inserción.
 * - #btnBuscar:
 *   * const pos = catalogo.indexOf(producto).
 *   * Si pos !== -1: indicar en qué posición está.
 *   * Si pos === -1: avisar de que no existe.
 * - #btnEliminar:
 *   * const pos = catalogo.indexOf(producto).
 *   * Si pos !== -1: catalogo.splice(pos, 1) y confirmar borrado.
 *   * Si pos === -1: avisar de que no se puede borrar porque no existe.
 * - #btnMostrar:
 *   * Mostrar el listado completo con catalogo.join(', ') y la cantidad total.
 *
 * CONCEPTOS DE ARRAYS A UTILIZAR:
 * - push(), includes(), indexOf(), splice(), join(), length.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar el array 'catalogo' con ['manzana', 'pera', 'platano'].
 * - 2 PASO: Crear constantes al DOM para el input y los cuatro botones.
 * - 3 PASO: Programar el evento 'click' de #btnAgregar con includes() y push().
 * - 4 PASO: Programar el evento 'click' de #btnBuscar con indexOf().
 * - 5 PASO: Programar el evento 'click' de #btnEliminar con indexOf() y splice().
 * - 6 PASO: Programar el evento 'click' de #btnMostrar con join().
 */

// estructura del programa principal

// declaracion del array inicial
// let catalogo = ['manzana', 'pera', 'platano'];

// constantes al DOM que queremos escuchar
// apuntar a #inputArticulo, #btnAgregar, #btnBuscar, #btnEliminar, #btnMostrar y #resultado

// colocar escuchadores de eventos

// 1. Escuchar clic en #btnAgregar (push con validación de duplicados con includes)

// 2. Escuchar clic en #btnBuscar (indexOf)

// 3. Escuchar clic en #btnEliminar (indexOf + splice)

// 4. Escuchar clic en #btnMostrar (join y length)
