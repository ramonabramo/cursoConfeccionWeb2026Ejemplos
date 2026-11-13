/**
 * ENUNCIADO:
 * Ejercicio: Gestión masiva de Checkboxes y conteo en tiempo real.
 *
 * Cada casilla <input type="checkbox"> tiene la propiedad booleana .checked:
 * - chk.checked = true;  // queda marcada
 * - chk.checked = false; // queda desmarcada
 *
 * OBJETIVOS:
 * 1. Crear una función auxiliar actualizarContador():
 *    - Recorre todos los checkboxes con forEach.
 *    - Cuenta cuántos tienen chk.checked === true.
 *    - Muestra en #resultado: 'Tareas completadas: [marcadas] de [total] ([porcentaje]%).'
 *
 * 2. Escuchar el evento 'change' en cada checkbox individual para que el contador
 *    se actualice automáticamente cada vez que el usuario hace clic en una casilla.
 *
 * 3. Botón #btnMarcarTodos:
 *    - Pone chk.checked = true en todos los checkboxes.
 *    - Llama a actualizarContador().
 *
 * 4. Botón #btnDesmarcarTodos:
 *    - Pone chk.checked = false en todos los checkboxes.
 *    - Llama a actualizarContador().
 *
 * 5. Botón #btnInvertir:
 *    - Pone chk.checked = !chk.checked en cada uno.
 *    - Llama a actualizarContador().
 *
 * CONCEPTOS CLAVE:
 * - chk.checked (lectura y escritura booleana).
 * - Evento 'change' en inputs de tipo checkbox.
 * - Sincronización de estado e interfaz.
 */

// estructura del programa principal

// 1. variables y constantes de estado

// 2. constantes al DOM
// capturar todos los checkboxes (.chk-tarea)
// capturar #btnMarcarTodos, #btnDesmarcarTodos, #btnInvertir y #resultado

// 3. funciones auxiliares
// funcion para contar seleccionados y actualizar el texto de #resultado

// 4. funciones de eventos
// marcar todos los checkboxes
// desmarcar todos los checkboxes
// invertir la seleccion

// 5. escuchadores de eventos
// escuchar 'change' en cada checkbox con forEach
// escuchar 'click' en los botones de accion
// llamar a actualizarContador() al inicio para mostrar el estado inicial
