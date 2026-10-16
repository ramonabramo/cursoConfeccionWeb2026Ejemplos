/**
 * ENUNCIADO:
 * Ejercicio: Utiliza el método 'indexOf()' para localizar la posición exacta de un elemento.
 *
 * El método array.indexOf(elementoBuscado):
 * - Devuelve el índice numérico (0, 1, 2...) de la primera aparición del elemento.
 * - Devuelve el número -1 si el elemento NO existe en el array.
 *
 * Inventario de productos:
 * const productos = ['teclado', 'raton', 'monitor', 'auriculares', 'altavoces'];
 *
 * Al enviar el formulario #formProducto:
 * 1. Frenar la recarga con e.preventDefault().
 * 2. Obtener el texto del input en minúsculas y sin espacios.
 * 3. Obtener el índice con: const posicion = productos.indexOf(producto).
 * 4. Utilizar un 'if' para comprobar si se encontró:
 *    - Si posicion !== -1:
 *      Mostrar: 'El producto "[producto]" se encuentra disponible en la posición/estante [posicion].'
 *    - Si posicion === -1:
 *      Mostrar: 'El producto "[producto]" no existe en el catálogo.'
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 * - Se busca 'monitor':
 *   Se muestra: 'El producto "monitor" se encuentra disponible en la posición/estante 2.'
 * - Se busca 'impresora':
 *   Se muestra: 'El producto "impresora" no existe en el catálogo.'
 *
 * CONCEPTOS DE ARRAYS A UTILIZAR:
 * - array.indexOf(elemento): Devuelve el índice o -1 si no está.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar el array 'productos' con los 5 artículos.
 * - 2 PASO: Crear constantes al DOM para #formProducto, #inputProducto y #resultado.
 * - 3 PASO: Escuchar 'submit' en el formulario pasando (e).
 * - 4 PASO: Detener recarga con e.preventDefault().
 * - 5 PASO: Obtener el índice con productos.indexOf(producto).
 * - 6 PASO: Comprobar con 'if (posicion !== -1)' y mostrar la posición encontrada o el error.
 */

// estructura del programa principal

// declaracion del array inicial
// const productos = ['teclado', 'raton', 'monitor', 'auriculares', 'altavoces'];

// constantes al DOM que queremos escuchar
// apuntar a #formProducto, #inputProducto y #resultado

// colocar escuchadores de eventos
// escuchar el evento 'submit' en el formulario pasando (e)

    // evitar recarga con e.preventDefault()

    // entradas: obtener el producto buscado en minúsculas

    // procesamiento con if:
    // const posicion = productos.indexOf(productoBuscado)
    // evaluar si posicion !== -1

    // salidas:
    // mostrar la posición encontrada o aviso de no encontrado en #resultado
