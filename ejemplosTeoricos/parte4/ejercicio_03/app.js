/**
 * ENUNCIADO:
 * Ejercicio: Evita el comportamiento por defecto de un formulario con e.preventDefault().
 *
 * De forma predeterminada, cuando enviamos un formulario (<form>), el navegador
 * recarga la página web completa para enviar la petición HTTP.
 * Con JavaScript podemos frenar este comportamiento llamando al método:
 * e.preventDefault()
 * Esto nos permite validar los datos y mostrar respuestas sin perder el estado de la página.
 *
 * Al enviar el formulario (#formulario):
 * 1. Frenaremos la recarga automática con e.preventDefault().
 * 2. Obtendremos el texto del input #nombre.
 * 3. Con un 'if':
 *    - Si el campo está vacío (tras usar .trim()), mostraremos:
 *      'Error: Debes escribir un nombre antes de enviar.'
 *    - Si contiene texto, mostraremos:
 *      '¡Formulario procesado con éxito! Bienvenido/a, [nombre].'
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 * - Caso 1: Se pulsa el botón con el campo vacío.
 *   Se muestra: 'Error: Debes escribir un nombre antes de enviar.'
 * - Caso 2: Se escribe 'Laura' y se pulsa el botón.
 *   Se muestra: '¡Formulario procesado con éxito! Bienvenido/a, Laura.'
 *
 * OBJETO EVENT A UTILIZAR:
 * - Escuchar el evento 'submit' en la etiqueta <form id="formulario">.
 * - Llamar a e.preventDefault() al inicio de la función manejadora.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Crear constantes al DOM para el formulario (#formulario), el input (#nombre) y el div (#resultado).
 * - 2 PASO: Escuchar el evento 'submit' del formulario pasando el parámetro (e).
 * - 3 PASO: En la primera línea dentro de la función, ejecutar e.preventDefault().
 * - 4 PASO: Obtener el valor de inputNombre.value y quitar espacios en blanco con .trim().
 * - 5 PASO: Evaluar con un 'if' si el nombre es una cadena vacía ('').
 * - 6 PASO: Mostrar el mensaje de error o de éxito en el div #resultado.
 */

// estructura del programa principal

// declaracion de variables y constantes globales

// constantes al DOM que queremos escuchar
// apuntar al formulario (#formulario)
// apuntar al input (#nombre)
// apuntar al div (#resultado)

// colocar escuchadores de eventos
// escuchar el evento 'submit' en el formulario pasando (e)

    // estructura del programa dentro de la función

    // 1. Evitar la recarga por defecto del formulario con e.preventDefault()

    // entradas
    // obtener el valor del input con .trim()

    // procesamiento
    // usar un 'if' para comprobar si el nombre está vacío o relleno

    // salidas
    // mostrar el resultado en #resultado
