/**
 * ENUNCIADO:
 * Ejercicio: Detecta teclas modificadoras en un clic (e.shiftKey, e.ctrlKey, e.altKey).
 *
 * El objeto 'event' de un clic nos permite saber si el usuario mantenía presionada
 * alguna tecla modificadora en el momento exacto de hacer clic:
 * - e.shiftKey: true si la tecla Shift estaba presionada.
 * - e.ctrlKey:  true si la tecla Ctrl estaba presionada.
 * - e.altKey:   true si la tecla Alt estaba presionada.
 *
 * Al hacer clic en el botón #btnEspecial:
 * - Si e.shiftKey es true:
 *   Mostrar: '¡Modo Turbo! Has hecho clic manteniendo pulsada la tecla SHIFT.'
 * - Si e.ctrlKey es true:
 *   Mostrar: '¡Modo Administrador! Has hecho clic manteniendo pulsada la tecla CTRL.'
 * - Si e.altKey es true:
 *   Mostrar: '¡Modo Descarga directa! Has hecho clic manteniendo pulsada la tecla ALT.'
 * - Si ninguna está pulsada:
 *   Mostrar: 'Clic normal registrado. Consejo: Prueba a mantener pulsado Shift o Ctrl mientras haces clic.'
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 * - Clic normal:
 *   Se muestra: 'Clic normal registrado. Consejo: Prueba a mantener pulsado Shift o Ctrl mientras haces clic.'
 * - Clic con Shift presionado:
 *   Se muestra: '¡Modo Turbo! Has hecho clic manteniendo pulsada la tecla SHIFT.'
 *
 * OBJETO EVENT A UTILIZAR:
 * - Evento 'click' en el botón #btnEspecial.
 * - e.shiftKey, e.ctrlKey, e.altKey (valores booleanos true o false).
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Crear constantes al DOM para el botón (#btnEspecial) y el div (#resultado).
 * - 2 PASO: Escuchar el evento 'click' en el botón pasando el parámetro (e).
 * - 3 PASO: Evaluar con 'if / else if / else' las propiedades e.shiftKey, e.ctrlKey y e.altKey.
 * - 4 PASO: Mostrar el mensaje correspondiente en #resultado.
 */

// estructura del programa principal

// declaracion de variables y constantes globales

// constantes al DOM que queremos escuchar
// apuntar al botón #btnEspecial
// apuntar al div #resultado

// colocar escuchadores de eventos
// escuchar el evento 'click' en el botón pasando (e)

    // estructura del programa dentro de la función

    // procesamiento
    // comprobar con 'if / else if / else' si e.shiftKey, e.ctrlKey o e.altKey son true

    // salidas
    // mostrar el mensaje resultante en #resultado
