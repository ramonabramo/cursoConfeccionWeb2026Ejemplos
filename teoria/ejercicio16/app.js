/* ==============================================================================
   EJERCICIO 16: La Sala de Cine 🎬 (¡Dominando el método forEach!)
   
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

/**
 * PASO A PASO:
 * 
 * 1. DECLARAR EL ARRAY DE ESTADO:
 *    - let reservas = []; // Guardará los nombres o números de las butacas reservadas.
 * 
 * 2. REFERENCIAS AL DOM CON querySelector Y querySelectorAll:
 *    - Capturar todas las butacas: const butacas = document.querySelectorAll('.butaca');
 *    - Capturar la pantalla: const pantallaInfo = document.querySelector('#pantallaInfo');
 *    - Capturar el badge contador: const contador = document.querySelector('#contador');
 *    - Capturar los 4 botones de acción: #btnNumerar, #btnOcuparTodas, #btnLiberarTodas, #btnListarOcupadas.
 * 
 * 3. USAR forEach() PARA ASIGNAR EVENTOS Y NUMERAR:
 *    - Recorrer 'butacas' con forEach: butacas.forEach(function (butaca, indice) { ... })
 *      a) Asignar texto con su número: butaca.textContent = `💺 Butaca ${indice + 1}`;
 *      b) Añadirle addEventListener('click', function() { ... }):
 *         - Si la butaca NO tiene la clase 'ocupada':
 *             * Añadir clase: butaca.classList.add('ocupada');
 *             * Meter en el array: reservas.push(`Butaca ${indice + 1}`);
 *             * Mensaje en pantalla: `Has reservado la Butaca ${indice + 1}.`
 *         - Si YA tiene la clase 'ocupada':
 *             * Quitar clase: butaca.classList.remove('ocupada');
 *             * Quitar del array reservas con filter o indexOf/splice.
 *             * Mensaje en pantalla: `Has liberado la Butaca ${indice + 1}.`
 *         - Actualizar el contador.
 * 
 * 4. BOTÓN 1: #btnNumerar (forEach CON ÍNDICE):
 *    - Recorrer con butacas.forEach(function(butaca, indice) { ... })
 *      Restablecer el texto de cada una: `💺 Butaca ${indice + 1}`.
 * 
 * 5. BOTÓN 2: #btnOcuparTodas (forEach MASIVO - 1 PARÁMETRO):
 *    - Recorrer con butacas.forEach(function(butaca, indice) { ... })
 *      Añadir a cada butaca la clase 'ocupada' y sincronizar el array 'reservas'.
 * 
 * 6. BOTÓN 3: #btnLiberarTodas (forEach MASIVO - 1 PARÁMETRO):
 *    - Recorrer con butacas.forEach(function(butaca) { ... })
 *      Quitar a cada butaca la clase 'ocupada' y vaciar el array 'reservas'.
 * 
 * 7. BOTÓN 4: #btnListarOcupadas (forEach SOBRE UN ARRAY DE DATOS):
 *    - Recorrer el array 'reservas' usando reservas.forEach(function(reserva, indice) { ... })
 *      Generar un texto con saltos de línea mostrando cada butaca ocupada y volcarlo en pantallaInfo.
 */


// ==========================================
// 1. ARRAY GLOBAL DE RESERVAS
// ==========================================
// TAREA: Declara una variable llamada 'reservas' inicializada como array vacío [].


// ==========================================
// 2. REFERENCIAS AL DOM
// ==========================================
// TAREA: Captura la colección de todas las butacas con document.querySelectorAll('.butaca').
// TAREA: Captura la pantalla (#pantallaInfo) y el contador (#contador) con document.querySelector().
// TAREA: Captura los 4 botones de acción (#btnNumerar, #btnOcuparTodas, #btnLiberarTodas, #btnListarOcupadas).


// ==========================================
// 3. ASIGNACIÓN INICIAL Y EVENTOS CON forEach()
// ==========================================
// TAREA: Usa butacas.forEach(function(butaca, indice) { ... }) para:
//        1. Escribir en butaca.textContent = `💺 Butaca ${indice + 1}`;
//        2. Añadir el escuchador 'click' a cada butaca.
//           Dentro del click:
//           - Comprueba si butaca.classList.contains('ocupada').
//           - Si NO está ocupada, añade la clase con butaca.classList.add('ocupada') y haz reservas.push(`Butaca ${indice + 1}`).
//           - Si YA está ocupada, quítala con butaca.classList.remove('ocupada') y retírala del array reservas.
//           - Actualiza la pantallaInfo y el contador.


// ==========================================
// 4. ACCIONES MASIVAS PRACTICANDO forEach()
// ==========================================

// TAREA: Botón #btnNumerar
// btnNumerar.addEventListener('click', function () {
//     - Recorre con butacas.forEach(function (butaca, indice) { ... });
//     - Pon a cada butaca el texto: `💺 Butaca ${indice + 1}`;
// });


// TAREA: Botón #btnOcuparTodas
// btnOcuparTodas.addEventListener('click', function () {
//     - Vacía primero el array reservas (reservas.length = 0);
//     - Recorre con butacas.forEach(function (butaca, indice) {
//           butaca.classList.add('ocupada');
//           reservas.push(`Butaca ${indice + 1}`);
//       });
//     - Actualiza pantallaInfo y contador.
// });


// TAREA: Botón #btnLiberarTodas
// btnLiberarTodas.addEventListener('click', function () {
//     - Recorre con butacas.forEach(function (butaca) {
//           butaca.classList.remove('ocupada');
//       });
//     - Vacía el array reservas (reservas.length = 0);
//     - Actualiza pantallaInfo y contador.
// });


// TAREA: Botón #btnListarOcupadas (forEach sobre un Array de JavaScript)
// btnListarOcupadas.addEventListener('click', function () {
//     - Si reservas.length === 0, muestra en pantallaInfo: "No hay ninguna butaca reservada actualmente."
//     - Si hay reservas, crea una variable let listado = "LISTADO DE RESERVAS ACTUALES:\n";
//     - Recorre con reservas.forEach(function (reserva, indice) {
//           listado += `${indice + 1}. ${reserva}\n`;
//       });
//     - Vuelca listado en pantallaInfo.textContent.
// });
