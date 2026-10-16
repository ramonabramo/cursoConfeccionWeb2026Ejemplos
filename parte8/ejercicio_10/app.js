/**
 * ENUNCIADO:
 * Ejercicio 10 (Práctica del Alumno): Sistema de Filtrado con Callbacks.
 *
 * Utilizando lo aprendido en el Ejercicio 09 sobre HOF y Callbacks, crea tu propia función
 * de filtrado genérica (un equivalente manual a Array.prototype.filter):
 *
 * OBJETIVOS:
 * 1. Declarar la función de orden superior:
 *    function filtrar(array, callbackCriterio) {
 *        const resultadoFiltrado = [];
 *        for (const item of array) {
 *            // Invocamos el callback pasando el elemento actual:
 *            if (callbackCriterio(item) === true) {
 *                resultadoFiltrado.push(item);
 *            }
 *        }
 *        return resultadoFiltrado;
 *    }
 *
 * 2. Conectar cada botón pasando su respectivo callback booleano:
 *    - #btnBaratos: p => p.precio <= 30
 *    - #btnCaros: p => p.precio > 100
 *    - #btnEmpiezanPorC: p => p.nombre.startsWith('C')
 *
 * 3. Mostrar la lista de productos filtrados en #resultado.
 */

// estructura del programa principal

// 1. variables y constantes de estado
const inventario = [
    { nombre: 'Ratón USB', precio: 15 },
    { nombre: 'Monitor 4K', precio: 320 },
    { nombre: 'Cable HDMI', precio: 8 },
    { nombre: 'Portátil i7', precio: 850 },
    { nombre: 'Funda Tablet', precio: 22 }
];

// 2. constantes al DOM
// capturar botones y #resultado

// 3. funciones de orden superior (HOF)

// 4. funciones de eventos

// 5. escuchadores de eventos
