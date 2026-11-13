/**
 * ENUNCIADO:
 * Ejercicio: Utiliza el método 'pop()' para extraer y eliminar el último elemento de un array.
 *
 * El método array.pop():
 * 1. Elimina el último elemento que contiene el array.
 * 2. Devuelve dicho elemento eliminado (lo podemos guardar en una variable).
 * 3. Reduce en 1 la longitud (length) del array.
 *
 * Comenzaremos con una pila de tareas pendientes:
 * let tareas = ['Lavar platos', 'Estudiar JS', 'Pasear al perro', 'Hacer la compra'];
 *
 * Al hacer clic en el botón #btnEliminar:
 * - Con un 'if', comprobaremos si aún quedan tareas (tareas.length > 0):
 *   * Si quedan tareas:
 *     - Extraer la última tarea con: const tareaEliminada = tareas.pop().
 *     - Mostrar en #resultado:
 *       'Se ha eliminado la tarea: "[tareaEliminada]". Tareas restantes: [lista] (Quedan: [length]).'
 *   * Si ya no quedan tareas (tareas.length === 0):
 *     - Mostrar en #resultado: 'No quedan más tareas en la lista. ¡El array está vacío!'
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 * - Primer clic:
 *   Se muestra: 'Se ha eliminado la tarea: "Hacer la compra". Tareas restantes: [Lavar platos, Estudiar JS, Pasear al perro] (Quedan: 3).'
 * - Si se pulsa hasta vaciar:
 *   Se muestra: 'No quedan más tareas en la lista. ¡El array está vacío!'
 *
 * CONCEPTOS DE ARRAYS A UTILIZAR:
 * - const elemento = array.pop(): extrae y remueve el último elemento.
 * - array.length === 0: comprobación de array vacío.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar el array 'tareas' con las 4 tareas iniciales.
 * - 2 PASO: Crear constantes al DOM para el botón (#btnEliminar) y el div (#resultado).
 * - 3 PASO: Escuchar el evento 'click' en el botón #btnEliminar.
 * - 4 PASO: Comprobar con 'if (tareas.length > 0)'.
 * - 5 PASO: Si es true: ejecutar tareas.pop() y mostrar qué elemento se eliminó y cómo queda el array.
 * - 6 PASO: Si es false: mostrar mensaje informando de que el array está vacío.
 */

// estructura del programa principal

// declaracion del array inicial
// let tareas = ['Lavar platos', 'Estudiar JS', 'Pasear al perro', 'Hacer la compra'];

// constantes al DOM que queremos escuchar
// apuntar al botón #btnEliminar
// apuntar al div #resultado

// colocar escuchadores de eventos
// escuchar el evento 'click' en el botón #btnEliminar

    // estructura del programa dentro de la función

    // procesamiento con if:
    // comprobar si tareas.length > 0
    // si es true -> const eliminada = tareas.pop()
    // si es false -> aviso de array vacío

    // salidas:
    // mostrar el resultado en #resultado
