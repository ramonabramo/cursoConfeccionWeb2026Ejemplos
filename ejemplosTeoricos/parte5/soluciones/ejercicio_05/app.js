/**
 * ENUNCIADO:
 * Ejercicio: Modifica el valor de una posición existente utilizando array[indice] = nuevoValor.
 *
 * Los arrays en JavaScript son mutables. Podemos cambiar el valor de cualquier
 * casilla simplemente indicando su índice entre corchetes y asignándole un nuevo dato.
 *
 * Array inicial de puntuaciones:
 * let puntuaciones = [85, 92, 78, 64, 90];
 *
 * Al enviar el formulario #formPuntuacion:
 * 1. Frenar la recarga con e.preventDefault().
 * 2. Obtener el índice y el nuevo valor, convirtiendo ambos a Number.
 * 3. Utilizar un 'if' para comprobar si la posición existe en el array:
 *    - Si posicion >= 0 y posicion < puntuaciones.length:
 *      * Guardar el valor antiguo en una variable para informar del cambio.
 *      * Asignar el nuevo valor: puntuaciones[posicion] = nuevoValor.
 *      * Mostrar en #resultado:
 *        'Posición [posicion] actualizada: cambió de [antiguo] a [nuevoValor]. Array: [puntuaciones].'
 *    - Si no existe:
 *      * Mostrar: 'Error: La posición [posicion] no existe. Debe estar entre 0 y 4.'
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 * - Modificar posición 2 con el valor 100:
 *   Se muestra: 'Posición 2 actualizada: cambió de 78 a 100. Array: [85, 92, 100, 64, 90].'
 *
 * CONCEPTOS DE ARRAYS A UTILIZAR:
 * - array[indice] = nuevoValor: reasigna el elemento en esa posición.
 * - Validación de índice: (indice >= 0 && indice < array.length).
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar el array 'puntuaciones' con los 5 números iniciales.
 * - 2 PASO: Crear constantes al DOM para el formulario, los dos inputs y #resultado.
 * - 3 PASO: Escuchar 'submit' en el formulario pasando (e).
 * - 4 PASO: Detener recarga con e.preventDefault().
 * - 5 PASO: Validar con 'if' que la posición sea válida.
 * - 6 PASO: Guardar valor antiguo, reasignar puntuaciones[posicion] = nuevoValor y mostrar el array.
 */

// estructura del programa principal

// declaracion del array inicial
let puntuaciones = [85, 92, 78, 64, 90];

// constantes al DOM que queremos escuchar
const btnActualizar = document.querySelector('#btnActualizar');
const inputPosicion = document.querySelector('#inputPosicion');
const inputValor = document.querySelector('#inputValor');
const nodoResultado = document.querySelector('#resultado');

// colocar escuchadores de eventos
btnActualizar.addEventListener('click', function () {

    // entradas
    const posicion = Number(inputPosicion.value);
    const nuevoValor = Number(inputValor.value);
    let mensaje = '';

    // procesamiento con if: validamos si el índice existe en el array
    if (posicion >= 0 && posicion < puntuaciones.length) {
        const valorAntiguo = puntuaciones[posicion];
        
        // Reasignamos el valor en esa posición exacta
        puntuaciones[posicion] = nuevoValor;

        mensaje = `Posición ${posicion} actualizada con éxito: cambió de ${valorAntiguo} a ${nuevoValor}. Array resultante: [${puntuaciones.join(', ')}].`;
    } else {
        mensaje = `Error: La posición ${posicion} no es válida. Debe ser un número entre 0 y ${puntuaciones.length - 1}.`;
    }

    // salidas
    nodoResultado.textContent = mensaje;
});
