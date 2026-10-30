/* ==============================================================================
   EJERCICIO 13: La Pizzería del Chef 🍕

   OBJETIVO:
   Gestionar la preparación de una pizza personalizada utilizando un array en memoria.
   Practicaremos la combinación de:
   1. Colecciones del DOM con document.querySelectorAll() para los botones de ingredientes.
   2. Asignación masiva de eventos 'click' mediante un bucle 'for'.
   3. Captura del elemento pulsado con el chivato del evento (e.target.textContent).
   4. Manipulación del array: .push() para añadir, .pop() para quitar el último,
      .length para contar y resetear a 0 para vaciar.
   5. Captura y escucha de botones individuales con document.querySelector().
   ============================================================================== */

/**
 * PASO A PASO:
 *
 * Paso 1: Crear un array vacío global llamado 'ingredientes' para almacenar los ingredientes seleccionados.
 *
 * Paso 2: Usar document.querySelector() para capturar:
 *         - La pantalla de salida: #pantallaPizza
 *         - El distintivo contador: #contador
 *         - El botón para quitar el último ingrediente: #btnQuitar
 *         - El botón para vaciar la pizza: #btnVaciar
 *         - El botón para hornear: #btnHornear
 *
 * Paso 3: Usar document.querySelectorAll('.btn-ingrediente') para capturar TODOS los botones de ingredientes.
 *
 * Paso 4: Con un bucle 'for', recorrer la lista de botones de ingredientes y colocar un addEventListener('click', ...)
 *         a cada uno. Dentro de la función del evento:
 *         a) Capturar el texto del botón pulsado usando: eventito.target.textContent
 *         b) Meter ese ingrediente en el array usando ingredientes.push()
 *         c) Actualizar el texto de #pantallaPizza mostrando el contenido del array (ej: ingredientes.join(' + '))
 *         d) Actualizar el texto de #contador usando la propiedad ingredientes.length
 *
 * Paso 5: Programar el evento 'click' del botón #btnQuitar:
 *         a) Comprobar si hay ingredientes en el array (ingredientes.length > 0).
 *         b) Si los hay, extraer el último con ingredientes.pop().
 *         c) Si aún quedan ingredientes en el array, mostrarlos; si el array quedó vacío,
 *            mostrar el mensaje original: "Tu pizza está vacía. ¡Añade ingredientes de la mesa!".
 *         d) Actualizar el contador con ingredientes.length.
 *
 * Paso 6: Programar el evento 'click' del botón #btnVaciar:
 *         a) Vaciar el array (ingredientes.length = 0).
 *         b) Restaurar el mensaje inicial en #pantallaPizza.
 *         c) Actualizar el contador a 0.
 *
 * Paso 7: Programar el evento 'click' del botón #btnHornear:
 *         a) Si ingredientes.length es 0, mostrar en #pantallaPizza un aviso de que no se puede hornear una pizza vacía.
 *         b) Si tiene ingredientes, mostrar un mensaje de éxito indicando que la pizza está en el horno con
 *            el número total de ingredientes y el detalle de los mismos.
 */


// ==========================================
// 1. VARIABLES GLOBALES Y ARRAY DE LA PIZZA
// ==========================================
// TAREA: Declara aquí una constante o variable con tu array vacío para los ingredientes (ej: const ingredientes = [];).


// ==========================================
// 2. REFERENCIAS AL DOM CON QUERYSELECTOR
// ==========================================
// TAREA: Captura con document.querySelector la pantalla (#pantallaPizza) y el contador (#contador).
// TAREA: Captura con document.querySelector los botones #btnQuitar, #btnVaciar y #btnHornear.


// ==========================================
// 3. CAPTURA CON QUERYSELECTORALL Y BUCLE FOR
// ==========================================
// TAREA: Captura todos los botones con la clase .btn-ingrediente usando document.querySelectorAll('.btn-ingrediente').

// TAREA: Crea un bucle 'for' para recorrer todos los botones de ingredientes.
//        Dentro del bucle, añade a cada botón un addEventListener('click', function(eventito) { ... }).
//        En el cuerpo de la función:
//        - Obtén el nombre del ingrediente pulsado: const ingrediente = eventito.target.textContent;
//        - Añádelo al array con: ingredientes.push(ingrediente);
//        - Muestra los ingredientes en pantalla: pantallaPizza.textContent = "Pizza: " + ingredientes.join(" + ");
//        - Actualiza el contador: contador.textContent = `Total ingredientes: ${ingredientes.length}`;


// ==========================================
// 4. LISTENERS DE LOS BOTONES DE ACCIÓN (QUERYSELECTOR)
// ==========================================

// TAREA: Añade el escuchador 'click' a btnQuitar:
// btnQuitar.addEventListener('click', function () {
//     - Si ingredientes.length > 0:
//         - ingredientes.pop();
//         - si ingredientes.length > 0 -> mostrar ingredientes.join(" + ")
//         - si ingredientes.length === 0 -> mostrar mensaje de pizza vacía
//     - Actualizar contador.textContent con ingredientes.length
// });


// TAREA: Añade el escuchador 'click' a btnVaciar:
// btnVaciar.addEventListener('click', function () {
//     - Vaciar el array (ingredientes.length = 0);
//     - Mostrar mensaje de pizza vacía en pantallaPizza.
//     - Poner el contador a 0.
// });


// TAREA: Añade el escuchador 'click' a btnHornear:
// btnHornear.addEventListener('click', function () {
//     - Si ingredientes.length === 0:
//         - Mostrar advertencia de pizza sin ingredientes.
//     - Si no:
//         - Mostrar felicitación: `🔥 ¡Marchando al horno! Pizza con ${ingredientes.length} ingredientes: ${ingredientes.join(", ")}`
// });
