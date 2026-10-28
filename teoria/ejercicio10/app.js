/* ==============================================================================
   EJERCICIO: La Máquina del Tiempo ⏳
   
   OBJETIVO:
   El usuario escribirá en qué año empieza su viaje temporal y en qué año termina.
   Al pulsar el botón, el programa debe usar un bucle 'for' para generar un registro
   (bitácora) que muestre todos los años que ha recorrido.

   El bucle no debe inicializarse siempre en 0, sino que debe tomar dinámicamente
   como inicio el valor introducido en "Año de partida", y detenerse cuando alcance
   el valor del "Año de destino". ¡Cuidado con las paradojas temporales!

   Los años los debe mostrar separados por la constante destello (✨)
   
   En caso de que el año de inicio sea mayor que el de fin, el programa debe mostrar el mensaje
   '¡Cuidado con las paradojas temporales!'.

   ============================================================================== */

const destello = "✨";

// constantes al DOM
// TAREA: Captura el input del año de inicio (inputInicio).
const inputInicio = document.querySelector("#inputInicio");
// TAREA: Captura el input del año de fin (inputFin).
const inputFin = document.querySelector("#inputFin");
// TAREA: Captura el botón de viajar (btnViajar).
const btnViajar = document.querySelector("#btnViajar");
// TAREA: Captura el div de la pantalla (pantallaViaje).
const pantallaViaje = document.querySelector("#pantallaViaje");

// eventos
// constantes para apuntar a los elementos del dom que quiero controlar los eventos

// colocar escuchadores con addeventlistener. si el evento solo es para un elemento directamente con funcion anonima en caso de que se utilice para varios elementos lo mismo utilizar funcion declarada
// TAREA: Pasa la función anónima (o flecha) directamente dentro de addEventListener
btnViajar.addEventListener("click", () => {

    // constantes y variables locales
    // TAREA: Crea tu variable acumuladora inicializada vacía (ej: let bitacora = "";).
    let bitacora = "";
    // TAREA: Crea una variable para el mensaje final.
    let mensajeFinal = "";

    // constantes al DOM
    // (Vacío en este caso porque ya hemos capturado todo globalmente)

    // entradas
    // TAREA: Lee el valor de inputInicio y conviértelo a número entero con Number() o parseInt().
    const inicio = Number(inputInicio.value);
    // TAREA: Lee el valor de inputFin y conviértelo a número entero con Number() o parseInt().
    const fin = Number(inputFin.value);

    // procesamiento
    // TAREA: Crea un 'if' para comprobar que el año de inicio es MENOR O IGUAL (<=) al año de fin.
    if (inicio <= fin) {

        // TAREA: Dentro del 'if', monta el bucle 'for'.
        // - Inicialización: tu contador (let i) empieza en tu variable de inicio.
        // - Condición: da vueltas MIENTRAS el contador sea menor o igual (<=) a tu variable de fin.
        // - Expresión final: suma 1 al contador en cada vuelta (i++).
        for (let i = inicio; i <= fin; i++) {

            // TAREA: En cada vuelta, concatena a la bitácora el año por el que pasas.
            bitacora += `${i} ${destello} `;
        }
        mensajeFinal = bitacora;

    } else {
        // TAREA: Crea el 'else' del 'if'. Si han puesto un inicio menor que el fin, advierte de la paradoja temporal.
        // en caso de que el año de inicio sea mayor que el de fin
        // almaceno en mensaje Final el mensaje correspondiente
        // ¡Cuidado con las paradojas temporales!
        mensajeFinal = "La paradoja temporal ha ocurrido";
    }

    // salidas
    // TAREA: Vuelca de golpe todo el registro temporal (tu variable con el mensaje final) en la propiedad textContent de la pantalla.
    pantallaViaje.textContent = mensajeFinal;

});