/* ==============================================================================
   EJERCICIO 13: La Pizzería del Chef 🍕 (SOLUCIÓN)
   
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

// ==========================================
// 1. VARIABLES GLOBALES Y ARRAY DE LA PIZZA
// ==========================================
// Array en memoria donde iremos acumulando los ingredientes de la pizza
const ingredientes = [];

// Mensaje por defecto cuando la pizza no contiene ningún ingrediente
const MENSAJE_VACIO = "Tu pizza está vacía. ¡Añade ingredientes de la mesa!";


// ==========================================
// 2. REFERENCIAS AL DOM CON QUERYSELECTOR
// ==========================================
// Elementos de salida e información
const pantallaPizza = document.querySelector("#pantallaPizza");
const contador = document.querySelector("#contador");

// Botones de acción individual
const btnQuitar = document.querySelector("#btnQuitar");
const btnVaciar = document.querySelector("#btnVaciar");
const btnHornear = document.querySelector("#btnHornear");


// ==========================================
// 3. CAPTURA CON QUERYSELECTORALL Y BUCLE FOR
// ==========================================
// Capturamos todos los botones de ingredientes (NodeList)
const botonesIngredientes = document.querySelectorAll(".btn-ingrediente");

// Recorremos la colección de botones con un bucle 'for' para asociar el evento a cada uno
for (let i = 0; i < botonesIngredientes.length; i++) {
    botonesIngredientes[i].addEventListener("click", function (eventito) {
        // Obtenemos el texto del botón pulsado gracias al objeto evento ("el chivato")
        const ingredienteSeleccionado = eventito.target.textContent;

        // Añadimos el ingrediente al final de nuestro array con .push()
        ingredientes.push(ingredienteSeleccionado);

        // Mostramos el contenido actualizado del array uniéndolo con el separador " + "
        pantallaPizza.textContent = "🍕 Pizza: " + ingredientes.join(" + ");

        // Actualizamos el contador leyendo la propiedad .length del array
        contador.textContent = `Total ingredientes: ${ingredientes.length}`;
    });
}


// ==========================================
// 4. LISTENERS DE LOS BOTONES DE ACCIÓN (QUERYSELECTOR)
// ==========================================

// Acción 1: Quitar el último ingrediente añadido usando .pop()
btnQuitar.addEventListener("click", function () {
    // Verificamos si hay al menos un ingrediente para quitar
    if (ingredientes.length > 0) {
        // Extraemos y eliminamos el último elemento del array
        const ingredienteQuitado = ingredientes.pop();

        // Comprobamos si aún quedan ingredientes tras el borrado
        if (ingredientes.length > 0) {
            pantallaPizza.textContent = "🍕 Pizza: " + ingredientes.join(" + ");
        } else {
            pantallaPizza.textContent = MENSAJE_VACIO;
        }

        // Actualizamos el badge contador con la nueva longitud
        contador.textContent = `Total ingredientes: ${ingredientes.length}`;
    } else {
        pantallaPizza.textContent = "⚠️ ¡No puedes quitar ingredientes de una masa vacía!";
    }
});

// Acción 2: Vaciar toda la pizza
btnVaciar.addEventListener("click", function () {
    // Vaciamos el array reseteando su longitud a cero
    ingredientes.length = 0;

    // Restauramos el texto inicial en pantalla y el contador
    pantallaPizza.textContent = MENSAJE_VACIO;
    contador.textContent = "Total ingredientes: 0";
});

// Acción 3: Hornear la pizza (.length)
btnHornear.addEventListener("click", function () {
    // Validamos con .length si la pizza tiene al menos un ingrediente
    if (ingredientes.length === 0) {
        pantallaPizza.textContent = "❌ ¡No podemos meter una pizza vacía en el horno! Ponle al menos un ingrediente.";
    } else {
        // Preparamos el resumen del pedido completo
        pantallaPizza.textContent = `🔥 ¡Marchando al horno! Pizza crujiente con ${ingredientes.length} ingrediente(s): ${ingredientes.join(", ")}. ¡Buen provecho!`;
    }
});
