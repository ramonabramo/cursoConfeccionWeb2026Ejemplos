/**
 * ENUNCIADO:
 * Ejercicio: Combina 'indexOf()' y 'splice()' para eliminar un elemento concreto de un array.
 *
 * El método array.splice(indiceInicio, cantidadABorrar):
 * - Modifica el array original eliminando 'cantidadABorrar' elementos a partir de 'indiceInicio'.
 * - Por ejemplo: array.splice(2, 1) borra exactamente 1 elemento en la posición 2.
 *
 * Array inicial de animales en el refugio:
 * let animales = ['perro', 'gato', 'loro', 'conejo', 'tortuga'];
 *
 * Al enviar el formulario #formAnimal:
 * 1. Frenar la recarga con e.preventDefault().
 * 2. Obtener el nombre del animal en minúsculas y sin espacios.
 * 3. Buscar en qué índice se encuentra con: const indice = animales.indexOf(animal).
 * 4. Utilizar un 'if' para comprobar si el animal está en la lista:
 *    - Si indice !== -1:
 *      * Eliminarlo con: animales.splice(indice, 1).
 *      * Mostrar en #resultado:
 *        'Animal "[animal]" eliminado con éxito. Refugio actual: [animales] (Quedan: [length]).'
 *    - Si indice === -1:
 *      * Mostrar en #resultado: 'Error: El animal "[animal]" no se encuentra en el refugio.'
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 * - Se elimina 'loro':
 *   Se muestra: 'Animal "loro" eliminado con éxito. Refugio actual: [perro, gato, conejo, tortuga] (Quedan: 4).'
 *
 * CONCEPTOS DE ARRAYS A UTILIZAR:
 * - array.indexOf(elemento): Localiza el índice.
 * - array.splice(indice, 1): Elimina 1 elemento en ese índice.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar el array 'animales' con los 5 animales iniciales.
 * - 2 PASO: Crear constantes al DOM para #formAnimal, #inputAnimal y #resultado.
 * - 3 PASO: Escuchar 'submit' en el formulario pasando (e).
 * - 4 PASO: Llamar a e.preventDefault().
 * - 5 PASO: Localizar el índice con animales.indexOf(animal).
 * - 6 PASO: Si indice !== -1, ejecutar animales.splice(indice, 1) y mostrar el array actualizado.
 */

// estructura del programa principal

// declaracion del array inicial con let
// let animales = ['perro', 'gato', 'loro', 'conejo', 'tortuga'];

// constantes al DOM que queremos escuchar
// apuntar a #formAnimal, #inputAnimal y #resultado

// colocar escuchadores de eventos
// escuchar el evento 'submit' en el formulario pasando (e)

    // evitar recarga con e.preventDefault()

    // entradas: obtener el animal en minúsculas

    // procesamiento con if:
    // const indice = animales.indexOf(animal)
    // si indice !== -1 -> animales.splice(indice, 1)
    // si indice === -1 -> error de no encontrado

    // salidas:
    // mostrar el resultado en #resultado
