/* ==============================================================================
   EJERCICIO 15: El Zoológico de Emojis 🐾 (Recorrer un NodeList con forEach)
   
   OBJETIVO:
   Aprender a recorrer una colección del DOM (NodeList obtenida con document.querySelectorAll)
   utilizando el método 'forEach()', sustituyendo el bucle 'for' que usábamos antes.
   
   ------------------------------------------------------------------------------
   DEL 'for' CLÁSICO AL 'forEach()' EN ELEMENTOS DEL DOM:
   ------------------------------------------------------------------------------
   En los ejercicios 11, 12 y 13 hacíamos:
       const tarjetas = document.querySelectorAll('.tarjeta');
       for (let i = 0; i < tarjetas.length; i++) {
           tarjetas[i].addEventListener('click', ...);
       }
   
   Ahora, con 'forEach()', ¡podemos recorrer todos los nodos HTML directamente!:
       tarjetas.forEach(function (tarjeta, indice) {
           // 'tarjeta' es directamente cada elemento HTML de la vuelta.
           // 'indice' es su posición numérica (0, 1, 2...).
           tarjeta.addEventListener('click', ...);
       });
   ============================================================================== */

/**
 * PASO A PASO:
 * 
 * 1. Array de nombres originales para restaurar o numerar:
 *    const nombresOriginales = ["🐱 Gato", "🐶 Perro", "🦊 Zorro", "🐼 Panda", "🦁 León"];
 * 
 * 2. Capturar con document.querySelectorAll():
 *    - Todas las tarjetas: const tarjetas = document.querySelectorAll('.tarjeta');
 * 
 * 3. Capturar con document.querySelector():
 *    - La pantalla de salida: #salida
 *    - Los 3 botones: #btnPintarTodas, #btnNumerar, #btnRestablecer
 * 
 * 4. Asignar el evento 'click' a cada tarjeta usando forEach():
 *    - tarjetas.forEach(function (tarjeta, indice) {
 *          tarjeta.addEventListener('click', function () {
 *              // Mostrar en #salida el texto de la tarjeta y su posición (indice + 1)
 *          });
 *      });
 * 
 * 5. Programar #btnPintarTodas:
 *    - Recorrer 'tarjetas' con forEach:
 *      tarjetas.forEach(function (tarjeta) {
 *          tarjeta.style.backgroundColor = '#f1c40f';
 *          tarjeta.style.color = '#2c3e50';
 *      });
 *    - Informar en #salida de que todas las tarjetas se han pintado de amarillo con forEach().
 * 
 * 6. Programar #btnNumerar:
 *    - Recorrer 'tarjetas' con forEach recibiendo (tarjeta, indice):
 *      tarjetas.forEach(function (tarjeta, indice) {
 *          tarjeta.textContent = `${indice + 1}. ${nombresOriginales[indice]}`;
 *      });
 *    - Informar en #salida de que todas las tarjetas se han numerado usando el índice.
 * 
 * 7. Programar #btnRestablecer:
 *    - Recorrer 'tarjetas' con forEach recibiendo (tarjeta, indice):
 *      tarjetas.forEach(function (tarjeta, indice) {
 *          tarjeta.style.backgroundColor = '';
 *          tarjeta.style.color = '';
 *          tarjeta.textContent = nombresOriginales[indice];
 *      });
 *    - Restaurar el mensaje inicial en #salida.
 */


// ==========================================
// 1. DATOS ORIGINALES DE RESPALDO
// ==========================================
const nombresOriginales = ["🐱 Gato", "🐶 Perro", "🦊 Zorro", "🐼 Panda", "🦁 León"];


// ==========================================
// 2. REFERENCIAS AL DOM
// ==========================================
// TAREA: Captura todas las tarjetas con document.querySelectorAll('.tarjeta').
// TAREA: Captura la pantalla (#salida).
// TAREA: Captura los 3 botones: #btnPintarTodas, #btnNumerar y #btnRestablecer.


// ==========================================
// 3. ASIGNAR LISTENERS A CADA TARJETA CON forEach()
// ==========================================
// TAREA: Recorre 'tarjetas' con tarjetas.forEach(function (tarjeta, indice) { ... }).
//        Dentro del forEach, añade a cada tarjeta un addEventListener('click', function () { ... }).
//        Al hacer clic, muestra en salida.textContent:
//        `Has seleccionado al animal: ${tarjeta.textContent} (Posición #${indice + 1})`;


// ==========================================
// 4. ACCIONES MASIVAS EN EL NODELIST CON forEach()
// ==========================================

// TAREA: Botón #btnPintarTodas
// btnPintarTodas.addEventListener('click', function () {
//     - Recorre con tarjetas.forEach(function (tarjeta) { ... });
//     - Cambia tarjeta.style.backgroundColor = '#f39c12';
//     - Cambia tarjeta.style.color = 'white';
//     - Muestra un mensaje en salida.textContent indicando que se han modificado todas las tarjetas con forEach.
// });


// TAREA: Botón #btnNumerar
// btnNumerar.addEventListener('click', function () {
//     - Recorre con tarjetas.forEach(function (tarjeta, indice) { ... });
//     - Cambia tarjeta.textContent = `Nº ${indice + 1}: ${nombresOriginales[indice]}`;
//     - Muestra un mensaje en salida.textContent.
// });


// TAREA: Botón #btnRestablecer
// btnRestablecer.addEventListener('click', function () {
//     - Recorre con tarjetas.forEach(function (tarjeta, indice) { ... });
//     - Restablece tarjeta.style.backgroundColor = '';
//     - Restablece tarjeta.style.color = '';
//     - Restablece tarjeta.textContent = nombresOriginales[indice];
//     - Restaura el mensaje inicial en salida.textContent.
// });
