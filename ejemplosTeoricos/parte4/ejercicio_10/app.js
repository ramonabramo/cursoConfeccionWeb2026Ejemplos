/**
 * ENUNCIADO:
 * Ejercicio: Reto integrador del objeto 'event'.
 *
 * En este ejercicio combinamos todo lo aprendido sobre el objeto event:
 * 1. Frenar la recarga del formulario con e.preventDefault().
 * 2. Comprobar que el usuario ha introducido texto en el input.
 * 3. Crear dinámicamente un elemento de lista <li> con un botón de eliminar.
 * 4. Usar delegación de eventos con e.target en la lista <ul> para borrar
 *    únicamente el elemento cuyo botón 'Borrar' fue pulsado.
 *
 * PARTE A: Envío del formulario
 * - Al enviar #formAviso:
 *   * Ejecutar e.preventDefault().
 *   * Obtener el texto del input #inputAviso sin espacios.
 *   * Si está vacío, mostrar error en #resultado.
 *   * Si tiene texto:
 *     - Crear un <li> que contenga el texto y un botón con clase 'btn-borrar'.
 *     - Insertarlo dentro de #listaAvisos.
 *     - Limpiar el input y mostrar: 'Aviso "[texto]" añadido a la lista.'
 *
 * PARTE B: Eliminación del aviso
 * - Al hacer clic en #listaAvisos:
 *   * Comprobar con un 'if' si el elemento pulsado tiene la clase 'btn-borrar':
 *     e.target.classList.contains('btn-borrar')
 *   * Si es así, obtener su elemento padre (e.target.parentElement) y eliminarlo con .remove().
 *   * Mostrar en #resultado: 'Aviso eliminado correctamente.'
 *
 * OBJETO EVENT A UTILIZAR:
 * - e.preventDefault() en el formulario.
 * - e.target y e.target.classList.contains('btn-borrar') en la lista.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Crear constantes al DOM para el formulario (#formAviso), el input (#inputAviso), la lista (#listaAvisos) y el div (#resultado).
 * - 2 PASO: Escuchar 'submit' en el formulario:
 *           * Usar e.preventDefault().
 *           * Validar el texto con un 'if'.
 *           * Crear el <li> y agregarlo con appendChild().
 * - 3 PASO: Escuchar 'click' en la lista #listaAvisos:
 *           * Comprobar si e.target tiene la clase 'btn-borrar'.
 *           * Eliminar el elemento padre con e.target.parentElement.remove().
 *           * Mostrar mensaje de confirmación en #resultado.
 */

// estructura del programa principal

// declaracion de variables y constantes globales

// constantes al DOM que queremos escuchar
// apuntar al formulario (#formAviso)
// apuntar al input (#inputAviso)
// apuntar a la lista (#listaAvisos)
// apuntar al div (#resultado)

// colocar escuchadores de eventos

// 1. Escuchar el evento 'submit' en el formulario
// pasar el parámetro (e)

    // evitar recarga con e.preventDefault()

    // entradas: obtener el texto del input

    // procesamiento: validar si está vacío o crear el <li> con el botón borrar

    // salidas: mostrar mensaje en #resultado y limpiar el input


// 2. Escuchar el evento 'click' en la lista (delegación de eventos)
// pasar el parámetro (e)

    // comprobar si e.target.classList.contains('btn-borrar')

    // si es true: eliminar e.target.parentElement con .remove()
    // salidas: mostrar aviso eliminado en #resultado
