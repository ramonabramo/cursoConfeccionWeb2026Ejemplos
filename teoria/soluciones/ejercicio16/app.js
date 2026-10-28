/* ==============================================================================
   EJERCICIO 16: La Sala de Cine 🎬 (SOLUCIÓN COMPLETA)
   
   OBJETIVO:
   Aprender a utilizar el método 'forEach()' tanto en colecciones del DOM (NodeList)
   como en Arrays de JavaScript.
   
   ------------------------------------------------------------------------------
   ¿QUÉ ES 'forEach()' Y POR QUÉ ES MEJOR QUE EL BUCLE 'for' TRADICIONAL?
   ------------------------------------------------------------------------------
   Hasta ahora, en los ejercicios 11, 12 y 13 usábamos:
       for (let i = 0; i < elementos.length; i++) {
           elementos[i].addEventListener(...);
       }
   
   Con 'forEach()', JavaScript recorre automáticamente cada elemento sin necesidad
   de declarar contadores (let i = 0), condiciones (i < length) ni incrementos (i++):
   
       elementos.forEach(function (elemento, indice) {
           // 1. 'elemento' es el objeto actual de la vuelta (¡adiós a elementos[i]!)
           // 2. 'indice' es la posición numérica opcional (0, 1, 2...)
       });
   ============================================================================== */

// ==========================================
// 1. ARRAY GLOBAL DE RESERVAS
// ==========================================
// Array en memoria que almacenará las butacas actualmente reservadas
let reservas = [];


// ==========================================
// 2. REFERENCIAS AL DOM CON QUERYSELECTOR Y QUERYSELECTORALL
// ==========================================
// Capturamos la colección de todos los botones con clase .butaca (NodeList)
const butacas = document.querySelectorAll('.butaca');

// Capturamos los elementos de información individual
const pantallaInfo = document.querySelector('#pantallaInfo');
const contador = document.querySelector('#contador');

// Capturamos los botones de control masivo
const btnNumerar = document.querySelector('#btnNumerar');
const btnOcuparTodas = document.querySelector('#btnOcuparTodas');
const btnLiberarTodas = document.querySelector('#btnLiberarTodas');
const btnListarOcupadas = document.querySelector('#btnListarOcupadas');


// ==========================================
// 3. ASIGNACIÓN INICIAL Y EVENTOS CON forEach()
// ==========================================
// Recorremos la NodeList de butacas.
// La función callback recibe:
//   - 'butaca': cada botón individual (nodo HTML).
//   - 'indice': posición numérica de la butaca (0, 1, 2, ...).
butacas.forEach(function (butaca, indice) {
    const numeroAsiento = `Butaca ${indice + 1}`;

    // 1. Numeramos inicialmente cada butaca usando el parámetro 'indice'
    butaca.textContent = `💺 ${numeroAsiento}`;

    // 2. Asociamos el escuchador 'click' a cada una directamente dentro del forEach
    butaca.addEventListener('click', function () {
        // Comprobamos si la butaca ya está ocupada
        if (butaca.classList.contains('ocupada')) {
            // Liberamos la butaca: quitamos la clase CSS
            butaca.classList.remove('ocupada');

            // La eliminamos de nuestro array de reservas
            const posicion = reservas.indexOf(numeroAsiento);
            if (posicion !== -1) {
                reservas.splice(posicion, 1);
            }

            pantallaInfo.textContent = `🟢 Has cancelado la reserva de la ${numeroAsiento}.`;
        } else {
            // Ocupamos la butaca: añadimos la clase CSS
            butaca.classList.add('ocupada');

            // La añadimos al array con .push()
            reservas.push(numeroAsiento);

            pantallaInfo.textContent = `🔴 ¡Excelente! Has reservado la ${numeroAsiento}.`;
        }

        // Actualizamos el contador con el tamaño actual del array (.length)
        contador.textContent = `Butacas ocupadas: ${reservas.length} / ${butacas.length}`;
    });
});


// ==========================================
// 4. ACCIONES MASIVAS PRACTICANDO forEach()
// ==========================================

// Acción 1: Numerar / reetiquetar todas las butacas usando el parámetro (indice)
btnNumerar.addEventListener('click', function () {
    butacas.forEach(function (butaca, indice) {
        butaca.textContent = `💺 Butaca ${indice + 1}`;
    });

    pantallaInfo.textContent = '🔢 Todas las butacas han sido renumeradas con éxito usando forEach(butaca, indice).';
});

// Acción 2: Ocupar todas las butacas masivamente
btnOcuparTodas.addEventListener('click', function () {
    // Vaciamos el array para no duplicar datos
    reservas.length = 0;

    // Recorremos todas las butacas con forEach y añadimos la clase 'ocupada'
    butacas.forEach(function (butaca, indice) {
        butaca.classList.add('ocupada');
        reservas.push(`Butaca ${indice + 1}`);
    });

    pantallaInfo.textContent = '🔴 ¡La sala está llena! Todas las butacas se han marcado como ocupadas con forEach().';
    contador.textContent = `Butacas ocupadas: ${reservas.length} / ${butacas.length}`;
});

// Acción 3: Liberar todas las butacas masivamente
btnLiberarTodas.addEventListener('click', function () {
    // Recorremos todas las butacas con forEach y quitamos la clase 'ocupada'
    butacas.forEach(function (butaca) {
        butaca.classList.remove('ocupada');
    });

    // Vaciamos el array de reservas
    reservas.length = 0;

    pantallaInfo.textContent = '🟢 Todas las butacas han sido liberadas con forEach(). ¡Sala disponible!';
    contador.textContent = `Butacas ocupadas: 0 / ${butacas.length}`;
});

// Acción 4: forEach sobre un Array de JavaScript en memoria
btnListarOcupadas.addEventListener('click', function () {
    // Comprobamos si hay reservas
    if (reservas.length === 0) {
        pantallaInfo.textContent = 'ℹ️ No hay ninguna butaca reservada actualmente. ¡La sala está vacía!';
    } else {
        let listado = `📋 LISTADO DE RESERVAS ACTIVAS (${reservas.length} en total):\n`;

        // Recorremos el ARRAY 'reservas' usando forEach con dos parámetros
        reservas.forEach(function (reserva, indice) {
            listado += `• [Pase #${indice + 1}]: ${reserva}\n`;
        });

        pantallaInfo.textContent = listado;
    }
});
