/* ==============================================================================
   EJERCICIO: La Máquina del Tiempo ⏳
   
   OBJETIVO:
   El usuario escribirá en qué año empieza su viaje temporal y en qué año termina.
   Al pulsar el botón, el programa debe usar un bucle 'for' para generar un registro
   (bitácora) que muestre todos los años que ha recorrido.

   El bucle no debe inicializarse siempre en 0, sino que debe tomar dinámicamente
   como inicio el valor introducido en "Año de partida", y detenerse cuando alcance
   el valor del "Año de destino". ¡Cuidado con las paradojas temporales!
   ============================================================================== */

const destello = "✨";

// constantes al DOM
// TAREA: Captura el input del año de inicio (inputInicio).
// TAREA: Captura el input del año de fin (inputFin).
// TAREA: Captura el botón de viajar (btnViajar).
// TAREA: Captura el div de la pantalla (pantallaViaje).

// eventos
// constantes para apuntar a los elementos del dom que quiero controlar los eventos

// colocar escuchadores con addeventlistener. si el evento solo es para un elemento directamente con funcion anonima en caso de que se utilice para varios elementos lo mismo utilizar funcion declarada
// TAREA: Pasa la función anónima (o flecha) directamente dentro de addEventListener
btnViajar.addEventListener("click", () => {

    // constantes y variables locales
    // TAREA: Crea tu variable acumuladora inicializada vacía (ej: let bitacora = "";).
    // TAREA: Crea una variable para el mensaje final.

    // constantes al DOM
    // (Vacío en este caso porque ya hemos capturado todo globalmente)

    // entradas
    // TAREA: Lee el valor de inputInicio y conviértelo a número entero con Number() o parseInt().
    // TAREA: Lee el valor de inputFin y conviértelo a número entero con Number() o parseInt().

    // procesamiento
    // TAREA: Crea un 'if' para comprobar que el año de inicio es MENOR O IGUAL (<=) al año de fin.

    // TAREA: Dentro del 'if', monta el bucle 'for'.
    // - Inicialización: tu contador (let i) empieza en tu variable de inicio.
    // - Condición: da vueltas MIENTRAS el contador sea menor o igual (<=) a tu variable de fin.
    // - Expresión final: suma 1 al contador en cada vuelta (i++).

    // TAREA: En cada vuelta, concatena a la bitácora el año por el que pasas.

    // TAREA: Crea el 'else' del 'if'. Si han puesto un inicio mayor que el fin, advierte de la paradoja temporal.

    // salidas
    // TAREA: Vuelca de golpe todo el registro temporal (tu variable con el mensaje final) en la propiedad textContent de la pantalla.

});