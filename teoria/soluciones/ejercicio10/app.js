/* ==============================================================================
   EJERCICIO: La Máquina del Tiempo ⏳ - SOLUCIÓN
   
   OBJETIVO:
   El usuario escribirá en qué año empieza su viaje temporal y en qué año termina.
   Al pulsar el botón, el programa debe usar un bucle 'for' para generar un registro
   (bitácora) que muestre todos los años que ha recorrido.

   El bucle no debe inicializarse siempre en 0, sino que debe tomar dinámicamente
   como inicio el valor introducido en "Año de partida", y detenerse cuando alcance
   el valor del "Año de destino". ¡Cuidado con las paradojas temporales!
   ============================================================================== */

const destello = "✨";

// Constantes al DOM
const inputInicio = document.querySelector("#inputInicio");
const inputFin = document.querySelector("#inputFin");
const btnViajar = document.querySelector("#btnViajar");
const pantallaViaje = document.querySelector("#pantallaViaje");

// Evento click del botón viajar
btnViajar.addEventListener("click", () => {
    // Variables locales
    let bitacora = "";

    // Entradas convertidas a número entero
    const anioInicio = Number(inputInicio.value);
    const anioFin = Number(inputFin.value);

    // Validación y procesamiento
    if (isNaN(anioInicio) || isNaN(anioFin) || inputInicio.value === "" || inputFin.value === "") {
        pantallaViaje.textContent = "⚠️ Por favor, introduce años válidos en ambas casillas.";
        return;
    }

    if (anioInicio <= anioFin) {
        // Bucle for que comienza en anioInicio y termina en anioFin
        for (let anio = anioInicio; anio <= anioFin; anio++) {
            bitacora += `[Año ${anio} ${destello}] `;
        }
        pantallaViaje.textContent = `🚀 Bitácora del viaje: ${bitacora}`;
    } else {
        pantallaViaje.textContent = "⚡ ¡Paradoja Temporal detectada! El año de partida no puede ser posterior al año de destino.";
    }
});
