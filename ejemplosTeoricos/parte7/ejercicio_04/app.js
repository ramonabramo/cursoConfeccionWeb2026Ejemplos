/**
 * ENUNCIADO:
 * Ejercicio 04 (Práctica del Alumno): Búsqueda con bucle 'while' y 'break'.
 *
 * Utilizando el bucle 'while' aprendido en el Ejercicio 03, implementa un algoritmo
 * de búsqueda lineal que detenga el bucle en cuanto encuentre el elemento.
 *
 * Tenemos el siguiente array:
 * const almacen = ['Teclado', 'Ratón', 'Monitor', 'Altavoz', 'Impresora', 'Webcam'];
 *
 * OBJETIVOS:
 * Al pulsar el botón #btnBuscar:
 * 1. Leer el texto de #inputBuscar, eliminar espacios (.trim()) y convertir a minúsculas (.toLowerCase()).
 * 2. Si el input está vacío, avisar al usuario.
 * 3. Inicializar el índice: let i = 0; y una bandera: let encontrado = false;
 * 4. Iniciar un bucle while que continúe mientras i < almacen.length:
 *    - Comparar si almacen[i].toLowerCase() === busqueda.
 *    - Si coincide:
 *      Marcar encontrado = true;
 *      Mostrar en #resultado que el producto se encontró en la posición i tras (i + 1) comprobaciones.
 *      ¡Detener el bucle inmediatamente con break!
 *    - Si no coincide:
 *      Incrementar i++;
 * 5. Si al salir del bucle encontrado sigue siendo false:
 *    Mostrar en #resultado que el producto no existe en el catálogo.
 *
 * CONCEPTOS A PRACTICAR:
 * - while (condición) con incremento manual.
 * - Instrucción 'break' para detener bucles prematuramente.
 * - Banderas de estado booleanas (let encontrado = false).
 */

// estructura del programa principal

// 1. variables y constantes de estado
const almacen = ['Teclado', 'Ratón', 'Monitor', 'Altavoz', 'Impresora', 'Webcam'];

// 2. constantes al DOM
// capturar #inputBuscar, #btnBuscar y #resultado

// 3. funciones auxiliares

// 4. funciones de eventos
// funcion de busqueda con while y break

// 5. escuchadores de eventos
// escuchar 'click' en #btnBuscar
