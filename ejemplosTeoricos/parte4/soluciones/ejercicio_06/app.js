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

// constantes al DOM que queremos escuchar
const campoBusqueda = document.querySelector('#campoBusqueda');
const nodoResultado = document.querySelector('#resultado');

// colocar escuchadores de eventos
campoBusqueda.addEventListener('keydown', function (e) {
    // entradas: e.key identifica la tecla pulsada
    const tecla = e.key;
    let mensaje = '';

    // procesamiento con condicionales if / else if
    if (tecla === 'Enter') {
        const texto = e.target.value.trim();
        if (texto === '') {
            mensaje = 'Has pulsado ENTER, pero el campo está vacío.';
        } else {
            mensaje = `Has pulsado ENTER: Buscando "${texto}" en la base de datos...`;
        }
    } else if (tecla === 'Escape') {
        // Limpiamos el valor del input usando e.target.value
        e.target.value = '';
        mensaje = 'Has pulsado ESCAPE: Búsqueda cancelada y campo vaciado.';
    } else {
        mensaje = `Última tecla pulsada: "${tecla}" (Código: ${e.code}).`;
    }

    // salidas
    nodoResultado.textContent = mensaje;
});
