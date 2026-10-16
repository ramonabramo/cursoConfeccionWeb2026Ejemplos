/**
 * ENUNCIADO:
 * Ejercicio: Descubre la diferencia fundamental entre 'e.target' y 'e.currentTarget'.
 *
 * Cuando colocamos un escuchador de eventos en un contenedor que tiene elementos hijos dentro:
 * - 'e.target': Es el elemento EXACTO sobre el que el usuario hizo clic (la diana original).
 *   Puede ser el <SPAN>, el <H3>, el <P> o el propio contenedor <DIV>.
 * - 'e.currentTarget': Es el elemento que TIENE EL ESCUCHADOR (addEventListener) asignado.
 *   En este ejercicio, SIEMPRE será el contenedor <div id="tarjeta">.
 *
 * Al hacer clic en cualquier parte de la tarjeta (#tarjeta):
 * 1. Obtendremos el nombre de la etiqueta de e.target: e.target.tagName.
 * 2. Obtendremos el nombre de la etiqueta de e.currentTarget: e.currentTarget.tagName.
 * 3. Utilizaremos un 'if' para comprobar si son el mismo elemento:
 *    - Si (e.target === e.currentTarget):
 *      Significa que el usuario hizo clic directamente en el fondo del contenedor padre.
 *    - En caso contrario:
 *      Significa que el usuario hizo clic en un elemento hijo interior (<${e.target.tagName}>),
 *      pero el evento subió por burbujeo hasta el padre que lo está escuchando.
 * 4. Mostraremos un informe claro en el div #resultado.
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 * - Caso 1 (clic en la etiqueta azul 'Novedad'):
 *   * e.target: <SPAN>
 *   * e.currentTarget: <DIV id="tarjeta">
 *   * Mensaje: "Has hecho clic en el hijo <SPAN>, pero el evento lo procesa el padre <DIV>."
 * - Caso 2 (clic en el espacio vacío/fondo de la tarjeta):
 *   * e.target: <DIV id="tarjeta">
 *   * e.currentTarget: <DIV id="tarjeta">
 *   * Mensaje: "¡Coinciden! Has hecho clic directamente en el contenedor padre <DIV>."
 *
 * OBJETO EVENT A UTILIZAR:
 * - e.target: El elemento que originó el clic.
 * - e.currentTarget: El elemento que tiene colocado el escuchador de eventos.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Crear constantes al DOM para la tarjeta (#tarjeta) y para el div (#resultado).
 * - 2 PASO: Escuchar el evento 'click' en la tarjeta (#tarjeta) pasando el parámetro (e).
 * - 3 PASO: Obtener el nombre de la etiqueta de e.target y de e.currentTarget.
 * - 4 PASO: Comprobar con un 'if (e.target === e.currentTarget)' si coinciden o son distintos.
 * - 5 PASO: Construir el mensaje explicativo y mostrarlo en #resultado.
 */

// estructura del programa principal

// constantes al DOM que queremos escuchar
const tarjeta = document.querySelector('#tarjeta');
const nodoResultado = document.querySelector('#resultado');

// colocar escuchadores de eventos
// Colocamos el escuchador en la tarjeta contenedora (#tarjeta)
tarjeta.addEventListener('click', function (e) {
    // entradas:
    // e.target: quién recibió físicamente el clic del ratón
    const elementoTarget = e.target;
    // e.currentTarget: quién posee el escuchador addEventListener (siempre la tarjeta padre)
    const elementoCurrentTarget = e.currentTarget;

    const etiquetaTarget = elementoTarget.tagName;
    const etiquetaCurrentTarget = elementoCurrentTarget.tagName;
    const idCurrentTarget = elementoCurrentTarget.id;

    let explicacion = '';

    // procesamiento con if: comparar si apuntan al mismo nodo en memoria
    if (elementoTarget === elementoCurrentTarget) {
        explicacion = `¡Coinciden! Has hecho clic directamente sobre el contenedor padre <${etiquetaCurrentTarget} id="${idCurrentTarget}">.`;
    } else {
        explicacion = `¡Son distintos! Has hecho clic en el elemento hijo <${etiquetaTarget}>, pero gracias al burbujeo de eventos, lo está procesando el contenedor padre <${etiquetaCurrentTarget} id="${idCurrentTarget}"> con currentTarget.`;
    }

    // salidas: mostrar los datos comparados
    nodoResultado.innerHTML = `
        <div><strong>e.target:</strong> &lt;${etiquetaTarget}&gt; (quien recibió el clic)</div>
        <div><strong>e.currentTarget:</strong> &lt;${etiquetaCurrentTarget} id="${idCurrentTarget}"&gt; (dueño del escuchador)</div>
        <div style="margin-top: 8px; color: #174a7c;">${explicacion}</div>
    `;
});
