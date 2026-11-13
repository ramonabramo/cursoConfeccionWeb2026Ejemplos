/**
 * ENUNCIADO:
 * Ejercicio: Utiliza 'e.target' para saber qué elemento disparó la acción.
 *
 * La propiedad 'e.target' apunta directamente al elemento del DOM que ha
 * recibido la interacción del usuario. A partir de él, podemos leer sus
 * propiedades como el id (e.target.id) o su texto (e.target.textContent).
 *
 * Tenemos dos botones:
 * - #btnAceptar ("Aceptar Solicitud")
 * - #btnCancelar ("Cancelar Solicitud")
 *
 * Al pulsar cualquiera de ellos, deberemos:
 * 1. Leer el ID del botón pulsado (e.target.id).
 * 2. Leer el texto del botón pulsado (e.target.textContent).
 * 3. Utilizar un 'if' para mostrar un mensaje distinto según el botón:
 *    - Si id es 'btnAceptar': 'Acción: Solicitud confirmada con éxito.'
 *    - Si id es 'btnCancelar': 'Acción: Operación cancelada por el usuario.'
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 * - Si pulsas en 'Aceptar Solicitud':
 *   Se muestra: 'Has pulsado el botón con ID "btnAceptar" (Texto: "Aceptar Solicitud"). Acción: Solicitud confirmada con éxito.'
 * - Si pulsas en 'Cancelar Solicitud':
 *   Se muestra: 'Has pulsado el botón con ID "btnCancelar" (Texto: "Cancelar Solicitud"). Acción: Operación cancelada por el usuario.'
 *
 * OBJETO EVENT A UTILIZAR:
 * - e.target.id: Identificador HTML del elemento pulsado.
 * - e.target.textContent: Texto dentro del elemento pulsado.
 *
 * =============================================================================
 * TRES ENFOQUES DIDÁCTICOS (ELIGE EL QUE PREFIERAS):
 * =============================================================================
 * - VERSIÓN 1 (Sin funciones declaradas - Enfoque estándar de la unidad):
 *   Asignar un escuchador addEventListener('click', function (e) { ... }) a cada
 *   botón con funciones anónimas directas.
 *
 * - VERSIÓN 2 (Con función declarada - Enfoque de reutilización):
 *   Crear una función con nombre 'function gestionarClick(e) { ... }' y asociarla
 *   al evento 'click' de ambos botones para no duplicar código (puente a la Parte 8).
 *
 * - VERSIÓN 3 (Delegación de eventos en el contenedor de los botones):
 *   Asignar un único escuchador al contenedor (.grupo-botones) y utilizar un 'if'
 *   con e.target.id para seleccionar y gestionar el botón pulsado.
 * =============================================================================
 *
 * PASOS A REALIZAR (VERSIÓN 1 - Recomendada):
 * - 1 PASO: Crear constantes al DOM para los dos botones (#btnAceptar, #btnCancelar) y para #resultado.
 * - 2 PASO: Asignar un escuchador addEventListener('click', function (e) { ... }) a #btnAceptar recibiendo el objeto (e).
 * - 3 PASO: Extraer el id y el texto del botón mediante e.target.id y e.target.textContent.
 * - 4 PASO: Evaluar con un 'if' si e.target.id es 'btnAceptar' y definir la acción correspondiente.
 * - 5 PASO: Mostrar el mensaje en el div #resultado.
 * - 6 PASO: Repetir el proceso para #btnCancelar con su propio escuchador addEventListener('click', function (e) { ... }).
 */

// estructura del programa principal

// declaracion de variables y constantes globales

// constantes al DOM que queremos escuchar
// apuntar a los botones #btnAceptar y #btnCancelar
// apuntar al div #resultado

// =============================================================================
// VERSIÓN 1: Funciones anónimas inline (Enfoque habitual de esta unidad)
// =============================================================================

// colocar escuchadores de eventos

// 1. Escuchar el evento 'click' en #btnAceptar pasando el parámetro (e)
// estructura del programa dentro de la función de Aceptar:
    // entradas
    // obtener e.target.id y e.target.textContent

    // procesamiento
    // utilizar un 'if' para evaluar si es 'btnAceptar'

    // salidas
    // mostrar el resultado en #resultado

// 2. Escuchar el evento 'click' en #btnCancelar pasando el parámetro (e)
// estructura del programa dentro de la función de Cancelar:
    // entradas
    // obtener e.target.id y e.target.textContent

    // procesamiento
    // utilizar un 'if' para evaluar si es 'btnCancelar'

    // salidas
    // mostrar el resultado en #resultado


// =============================================================================
// VERSIÓN 2: Función declarada reutilizable (Como estaba antes - Opcional)
// =============================================================================
/*
// definir la función manejadora del evento que recibe el parámetro (e)
function gestionarClick(e) {
    // entradas
    // obtener e.target.id y e.target.textContent

    // procesamiento
    // utilizar un 'if / else if' para evaluar qué botón se pulsó según su id

    // salidas
    // mostrar el resultado en pantalla
}

// colocar escuchadores de eventos reutilizando la misma función en ambos botones:
// btnAceptar.addEventListener('click', gestionarClick);
// btnCancelar.addEventListener('click', gestionarClick);
*/


// =============================================================================
// VERSIÓN 3: Escuchador en el contenedor (.grupo-botones) con 'if' para seleccionar
// =============================================================================
/*
// constantes al DOM necesarias para esta versión:
// const contenedorBotones = document.querySelector('.grupo-botones');
// const nodoResultado = document.querySelector('#resultado');

// colocar un único escuchador en el contenedor padre:
// contenedorBotones.addEventListener('click', function (e) {
//     entradas: e.target es el elemento pulsado
//     obtener e.target.id y e.target.textContent
//
//     procesamiento:
//     con un 'if / else if', seleccionar si e.target.id es 'btnAceptar' o 'btnCancelar'
//
//     salidas:
//     mostrar el resultado en #resultado si se pulsó un botón válido
// });
*/
