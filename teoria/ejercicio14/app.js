/* ==============================================================================
   EJERCICIO 14: La Cesta de Frutas 🧺 (Recorrer un Array con forEach)
   
   OBJETIVO:
   Comprender cómo funciona el método 'forEach()' para recorrer un Array
   de forma sencilla y directa, comparándolo con el bucle 'for' tradicional.
   
   ------------------------------------------------------------------------------
   DEL BUCLE 'for' CLÁSICO AL MÉTODO 'forEach()':
   ------------------------------------------------------------------------------
   Antes (bucle for clásico):
       for (let i = 0; i < frutas.length; i++) {
           console.log(frutas[i]); // Tenías que controlar i=0, i<length, i++ y usar corchetes frutas[i]
       }
   
   Ahora (con forEach):
       frutas.forEach(function (fruta) {
           console.log(fruta); // 'fruta' es directamente cada elemento, vuelta a vuelta
       });
       
   Si además necesitas saber la posición numérica (0, 1, 2...):
       frutas.forEach(function (fruta, indice) {
           console.log(`${indice + 1}. ${fruta}`);
       });
   ============================================================================== */

/**
 * PASO A PASO:
 * 
 * 1. Declarar el array 'frutas' con 5 frutas:
 *    const frutas = ["🍎 Manzana", "🍌 Plátano", "🍓 Fresa", "🍊 Naranja", "🍇 Uva"];
 * 
 * 2. Capturar con document.querySelector():
 *    - La pantalla de salida: #salida
 *    - El botón #btnMostrar
 *    - El botón #btnNumerar
 *    - El botón #btnLimpiar
 * 
 * 3. Programar el click en #btnMostrar:
 *    - Crear una variable acumuladora vacía: let mensaje = "";
 *    - Recorrer el array 'frutas' usando 'forEach' con 1 parámetro (fruta):
 *      frutas.forEach(function (fruta) {
 *          mensaje += `• ${fruta}\n`;
 *      });
 *    - Volcar 'mensaje' en el textContent de #salida.
 * 
 * 4. Programar el click en #btnNumerar:
 *    - Crear una variable acumuladora vacía: let mensaje = "";
 *    - Recorrer el array 'frutas' usando 'forEach' con 2 parámetros (fruta, indice):
 *      frutas.forEach(function (fruta, indice) {
 *          mensaje += `Posición ${indice + 1}: ${fruta}\n`;
 *      });
 *    - Volcar 'mensaje' en el textContent de #salida.
 * 
 * 5. Programar el click en #btnLimpiar:
 *    - Restaurar el texto por defecto en #salida.
 */


// ==========================================
// 1. ARRAY DE DATOS (NUESTRA CESTA)
// ==========================================
// TAREA: Declara una constante 'frutas' con el array de 5 frutas.


// ==========================================
// 2. REFERENCIAS AL DOM CON QUERYSELECTOR
// ==========================================
// TAREA: Captura la pantalla (#salida).
// TAREA: Captura los 3 botones: #btnMostrar, #btnNumerar y #btnLimpiar.


// ==========================================
// 3. LISTENERS Y PRÁCTICA DE forEach()
// ==========================================

// TAREA: Añade el evento 'click' a btnMostrar.
//        Dentro de la función:
//        - Declara una variable let mensaje = "LISTADO SIMPLE DE FRUTAS:\n\n";
//        - Recorre el array con frutas.forEach(function (fruta) { ... });
//        - En cada vuelta, concatena a 'mensaje': `• ${fruta}\n`;
//        - Muestra el resultado final en salida.textContent.


// TAREA: Añade el evento 'click' a btnNumerar.
//        Dentro de la función:
//        - Declara una variable let mensaje = "LISTADO NUMERADO CON ÍNDICE:\n\n";
//        - Recorre el array con frutas.forEach(function (fruta, indice) { ... });
//        - En cada vuelta, concatena a 'mensaje': `${indice + 1}. ${fruta} (Índice en el array: ${indice})\n`;
//        - Muestra el resultado final en salida.textContent.


// TAREA: Añade el evento 'click' a btnLimpiar.
//        Dentro de la función:
//        - salida.textContent = "Pantalla limpia. Pulsa un botón para volver a recorrer el array.";
