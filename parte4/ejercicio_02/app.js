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
 * PASOS A REALIZAR:
 * - 1 PASO: Crear constantes al DOM para los dos botones (#btnAceptar, #btnCancelar) y para #resultado.
 * - 2 PASO: Crear una función manejadora 'gestionarClick(e)' que reciba el objeto event.
 * - 3 PASO: Extraer el id y el texto del botón mediante e.target.id y e.target.textContent.
 * - 4 PASO: Usar un 'if / else if' evaluando si e.target.id es igual a 'btnAceptar' o a 'btnCancelar'.
 * - 5 PASO: Mostrar el mensaje en el div #resultado.
 * - 6 PASO: Asociar la función al evento 'click' de ambos botones.
 */

// estructura del programa principal

// declaracion de variables y constantes globales

// constantes al DOM que queremos escuchar
// apuntar a los botones #btnAceptar y #btnCancelar
// apuntar al div #resultado

// definir la funcion manejadora del evento que recibe el parametro (e)
function gestionarClick(e) {
    // entradas
    // obtener e.target.id y e.target.textContent

    // procesamiento
    // utilizar un 'if' para evaluar qué botón se pulsó según su id

    // salidas
    // mostrar el resultado en pantalla
}

// colocar escuchadores de eventos
// escuchar el evento click en ambos botones llamando a gestionarClick
