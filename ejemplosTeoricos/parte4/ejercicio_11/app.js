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

// declaracion de variables y constantes globales

// constantes al DOM que queremos escuchar
// apuntar a la tarjeta (#tarjeta)
// apuntar al div #resultado

// colocar escuchadores de eventos
// escuchar el evento 'click' en la tarjeta pasando (e)

    // estructura del programa dentro de la función

    // entradas:
    // etiqueta de e.target
    // etiqueta e id de e.currentTarget

    // procesamiento con if:
    // evaluar si (e.target === e.currentTarget)

    // salidas:
    // mostrar la comparación detallada en #resultado
