/**
 * ENUNCIADO:
 * Ejercicio: Utiliza 'e.target' para saber qué elemento disparó la acción.
 * VERSIÓN 3: Escuchador en el contenedor de los botones (.grupo-botones) con 'if' para seleccionar el botón.
 *
 * En esta versión no colocamos escuchadores individuales en cada botón ni creamos
 * funciones externas. En su lugar, asociamos UN ÚNICO escuchador al contenedor
 * padre de los botones (.grupo-botones).
 *
 * Gracias al burbujeo de eventos y a 'e.target', el objeto event nos dirá exactamente
 * sobre qué elemento hijo se hizo clic. Con un 'if', comprobamos qué botón se pulsó
 * a partir de su ID (e.target.id).
 *
 * Tenemos dos botones dentro del contenedor:
 * - #btnAceptar ("Aceptar Solicitud")
 * - #btnCancelar ("Cancelar Solicitud")
 *
 * Al pulsar en el contenedor:
 * 1. Con un 'if', comprobamos qué botón fue presionado:
 *    - Si e.target.id === 'btnAceptar': acción = 'Acción: Solicitud confirmada con éxito.'
 *    - Si e.target.id === 'btnCancelar': acción = 'Acción: Operación cancelada por el usuario.'
 * 2. Si se pulsó alguno de los dos botones:
 *    - Leer e.target.id y e.target.textContent.
 *    - Mostrar el mensaje en el div #resultado.
 *
 * OBJETO EVENT A UTILIZAR:
 * - Escuchador en el contenedor padre: .grupo-botones
 * - e.target: Elemento hijo exacto que recibió el clic.
 * - e.target.id: Identificador del botón pulsado ('btnAceptar' o 'btnCancelar').
 * - e.target.textContent: Texto dentro del botón pulsado.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Crear constantes al DOM para el contenedor (.grupo-botones) y para el div (#resultado).
 * - 2 PASO: Asignar un único escuchador addEventListener('click', function (e) { ... }) al contenedor padre.
 * - 3 PASO: En la función, obtener e.target.id y e.target.textContent.
 * - 4 PASO: Utilizar un 'if / else if' evaluando si e.target.id es 'btnAceptar' o 'btnCancelar'.
 * - 5 PASO: Si se pulsó uno de los botones válidos, mostrar el mensaje en #resultado.
 */

// estructura del programa principal

// declaracion de variables y constantes globales

// constantes al DOM que queremos escuchar
// apuntar al contenedor padre (.grupo-botones)
// apuntar al div #resultado

// colocar un único escuchador de eventos en el contenedor padre
// escuchar el evento 'click' en el contenedor pasando el parámetro (e)

    // estructura del programa dentro de la función:

    // entradas
    // obtener el elemento pulsado con e.target
    // obtener e.target.id y e.target.textContent

    // procesamiento
    // con un 'if / else if', seleccionar qué botón se ha pulsado y asignar la acción

    // salidas
    // si se pulsó un botón válido, mostrar el mensaje compuesto en #resultado
