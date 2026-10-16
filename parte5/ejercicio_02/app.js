/**
 * ENUNCIADO:
 * Ejercicio: Utiliza el método 'push()' para añadir nuevos elementos al final de un array.
 *
 * El método array.push(nuevoElemento) añade uno o más elementos al final del array
 * e incrementa automáticamente su longitud (length).
 *
 * Comenzaremos con una lista de la compra inicial:
 * let listaCompra = ['Pan', 'Leche'];
 *
 * Al enviar el formulario #formCompra:
 * 1. Frenar la recarga con e.preventDefault().
 * 2. Obtener el texto del input #inputArticulo sin espacios (.trim()).
 * 3. Si el campo está vacío: mostrar mensaje de error en #resultado.
 * 4. Si tiene texto:
 *    - Añadir el artículo al array con: listaCompra.push(articulo).
 *    - Limpiar el input y devolverle el foco.
 *    - Mostrar en #resultado:
 *      * El artículo añadido.
 *      * El contenido actual del array completo.
 *      * El número total de artículos (listaCompra.length).
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 * - Si se añade 'Huevos':
 *   Se muestra: 'Artículo "Huevos" añadido con éxito. Lista actual: [Pan, Leche, Huevos] (Total: 3 artículos).'
 *
 * CONCEPTOS DE ARRAYS A UTILIZAR:
 * - array.push(elemento): Inserta al final del array.
 * - array.length: Devuelve el tamaño actual.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar el array 'listaCompra' con los elementos iniciales ['Pan', 'Leche'].
 * - 2 PASO: Crear constantes al DOM para #formCompra, #inputArticulo y #resultado.
 * - 3 PASO: Escuchar 'submit' en el formulario pasando (e).
 * - 4 PASO: Leer los datos del formulario directamente sin necesidad de preventDefault().
 * - 5 PASO: Validar con 'if' que el texto no esté vacío.
 * - 6 PASO: Ejecutar listaCompra.push(articulo).
 * - 7 PASO: Mostrar el resumen actualizado en #resultado y limpiar el input.
 */

// estructura del programa principal

// declaracion del array inicial con let (ya que aumentará su contenido)
// let listaCompra = ['Pan', 'Leche'];

// constantes al DOM que queremos escuchar
// apuntar a #formCompra, #inputArticulo y #resultado

// colocar escuchadores de eventos
// escuchar el evento 'submit' en el formulario pasando (e)

    // evitar recarga con e.preventDefault()

    // entradas: obtener el artículo con .trim()

    // procesamiento con if:
    // si está vacío -> mensaje de aviso
    // si tiene texto -> listaCompra.push(articulo)

    // salidas:
    // mostrar el estado del array y el total de artículos
