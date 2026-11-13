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
 * - VERSIÓN 1 (Como está ahora - Sin funciones declaradas):
 *   Usa funciones anónimas inline directamente dentro de addEventListener.
 *   Totalmente alineada con los conocimientos adquiridos hasta este tema (recomendada).
 *
 * - VERSIÓN 2 (Como estaba antes - Con función declarada):
 *   Declara una función con nombre 'gestionarClick(e)' y la asocia a ambos botones.
 *   Permite reutilizar la misma función y sirve como puente/adelanto a la Parte 8.
 *
 * - VERSIÓN 3 (Delegación de eventos en el contenedor padre):
 *   Asocia un único escuchador al contenedor (.grupo-botones) y utiliza un 'if'
 *   con e.target.id para seleccionar qué botón se ha pulsado.
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

// constantes al DOM que queremos escuchar
const btnAceptar = document.querySelector('#btnAceptar');
const btnCancelar = document.querySelector('#btnCancelar');
const nodoResultado = document.querySelector('#resultado');

// =============================================================================
// VERSIÓN 1: Con funciones anónimas inline (Recomendada para esta unidad)
// =============================================================================

// colocar escuchadores de eventos

// 1. Escuchador para el botón Aceptar con función anónima inline
btnAceptar.addEventListener('click', function (e) {
    // entradas: e.target es el elemento exacto que recibió el clic
    const idBoton = e.target.id;
    const textoBoton = e.target.textContent.trim();
    let accion = '';

    // procesamiento con condicional if
    if (idBoton === 'btnAceptar') {
        accion = 'Acción: Solicitud confirmada con éxito.';
    }

    // salidas
    nodoResultado.textContent = `Has pulsado el botón con ID "${idBoton}" (Texto: "${textoBoton}"). ${accion}`;
});

// 2. Escuchador para el botón Cancelar con función anónima inline
btnCancelar.addEventListener('click', function (e) {
    // entradas: e.target es el elemento exacto que recibió el clic
    const idBoton = e.target.id;
    const textoBoton = e.target.textContent.trim();
    let accion = '';

    // procesamiento con condicional if
    if (idBoton === 'btnCancelar') {
        accion = 'Acción: Operación cancelada por el usuario.';
    }

    // salidas
    nodoResultado.textContent = `Has pulsado el botón con ID "${idBoton}" (Texto: "${textoBoton}"). ${accion}`;
});


// =============================================================================
// VERSIÓN 2: Con función declarada reutilizable (Como estaba antes)
// (Para probar esta versión, comenta la Versión 1 anterior y descomenta este bloque)
// =============================================================================
/*
function gestionarClick(e) {
    // entradas: e.target es el botón exacto sobre el que se hizo clic
    const idBoton = e.target.id;
    const textoBoton = e.target.textContent.trim();
    let accion = '';

    // procesamiento con condicional if / else if
    if (idBoton === 'btnAceptar') {
        accion = 'Acción: Solicitud confirmada con éxito.';
    } else if (idBoton === 'btnCancelar') {
        accion = 'Acción: Operación cancelada por el usuario.';
    }

    // salidas
    nodoResultado.textContent = `Has pulsado el botón con ID "${idBoton}" (Texto: "${textoBoton}"). ${accion}`;
}

// Reutilizamos la misma función en ambos botones gracias a e.target:
// btnAceptar.addEventListener('click', gestionarClick);
// btnCancelar.addEventListener('click', gestionarClick);
*/


// =============================================================================
// VERSIÓN 3: Escuchador en el contenedor (.grupo-botones) con 'if' para seleccionar
// (Para probar esta versión, comenta la Versión 1 y descomenta el bloque siguiente)
// =============================================================================
/*
const contenedorBotones = document.querySelector('.grupo-botones');

contenedorBotones.addEventListener('click', function (e) {
    // entradas: e.target es el elemento exacto que recibió el clic dentro del contenedor
    const elementoPulsado = e.target;
    const idBoton = elementoPulsado.id;
    const textoBoton = elementoPulsado.textContent.trim();
    let accion = '';

    // procesamiento con condicional if para seleccionar qué botón hemos pulsado
    if (idBoton === 'btnAceptar') {
        accion = 'Acción: Solicitud confirmada con éxito.';
    } else if (idBoton === 'btnCancelar') {
        accion = 'Acción: Operación cancelada por el usuario.';
    }

    // salidas: solo actualizamos si el clic fue en uno de los botones válidos
    if (accion !== '') {
        nodoResultado.textContent = `Has pulsado el botón con ID "${idBoton}" (Texto: "${textoBoton}"). ${accion}`;
    }
});
*/
