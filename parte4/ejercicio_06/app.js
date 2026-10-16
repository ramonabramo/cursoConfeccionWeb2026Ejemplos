/**
 * ENUNCIADO:
 * Ejercicio: Utiliza el evento 'keydown' y la propiedad 'e.key' para detectar teclas pulsadas.
 *
 * Cuando el usuario pulsa una tecla, el evento 'keydown' nos proporciona en la propiedad
 * 'e.key' el nombre exacto de la tecla que se presionó (por ejemplo: "Enter", "Escape", "a", etc.).
 *
 * En nuestro campo de búsqueda #campoBusqueda:
 * - Si el usuario pulsa la tecla 'Enter':
 *   * Comprobar si hay texto en el input (e.target.value.trim()).
 *   * Si hay texto, mostrar: 'Has pulsado ENTER: Buscando "[texto]" en la base de datos...'
 *   * Si está vacío, mostrar: 'Has pulsado ENTER, pero el campo está vacío.'
 * - Si el usuario pulsa la tecla 'Escape':
 *   * Limpiar el campo asignando e.target.value = ''.
 *   * Mostrar: 'Has pulsado ESCAPE: Búsqueda cancelada y campo vaciado.'
 * - Si pulsa cualquier otra tecla:
 *   * Mostrar: 'Última tecla pulsada: "[e.key]" (Código: [e.code]).'
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 * - Al pulsar la letra 'j':
 *   Se muestra: 'Última tecla pulsada: "j" (Código: KeyJ).'
 * - Al pulsar 'Enter' con 'JavaScript' escrito:
 *   Se muestra: 'Has pulsado ENTER: Buscando "JavaScript" en la base de datos...'
 * - Al pulsar 'Escape':
 *   Se limpia el input y se muestra: 'Has pulsado ESCAPE: Búsqueda cancelada y campo vaciado.'
 *
 * OBJETO EVENT A UTILIZAR:
 * - Evento 'keydown' en el campo #campoBusqueda.
 * - e.key: Nombre de la tecla física pulsada ("Enter", "Escape", etc.).
 * - e.code: Código físico de la tecla ("KeyA", "Space", etc.).
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Crear constantes al DOM para el input (#campoBusqueda) y el div (#resultado).
 * - 2 PASO: Escuchar el evento 'keydown' en el input pasando (e).
 * - 3 PASO: Leer e.key.
 * - 4 PASO: Evaluar con un 'if / else if / else':
 *           * Comprobar si e.key === 'Enter'.
 *           * Comprobar si e.key === 'Escape'.
 *           * En caso de otra tecla, mostrar e.key y e.code.
 * - 5 PASO: Mostrar la salida en #resultado.
 */

// estructura del programa principal

// declaracion de variables y constantes globales

// constantes al DOM que queremos escuchar
// apuntar al input #campoBusqueda
// apuntar al div #resultado

// colocar escuchadores de eventos
// escuchar el evento 'keydown' en el input pasando (e)

    // estructura del programa dentro de la función

    // entradas
    // obtener el nombre de la tecla con e.key

    // procesamiento
    // comprobar con un 'if' si es 'Enter', 'Escape' o cualquier otra tecla

    // salidas
    // mostrar la acción o tecla en #resultado
