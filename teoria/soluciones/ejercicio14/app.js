/* ==============================================================================
   EJERCICIO 14: La Cesta de Frutas 🧺 (SOLUCIÓN COMPLETA)
   
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

// ==========================================
// 1. ARRAY DE DATOS (NUESTRA CESTA)
// ==========================================
// Definimos nuestro array con 5 frutas
const frutas = ["🍎 Manzana", "🍌 Plátano", "🍓 Fresa", "🍊 Naranja", "🍇 Uva"];


// ==========================================
// 2. REFERENCIAS AL DOM CON QUERYSELECTOR
// ==========================================
const salida = document.querySelector("#salida");
const btnMostrar = document.querySelector("#btnMostrar");
const btnNumerar = document.querySelector("#btnNumerar");
const btnLimpiar = document.querySelector("#btnLimpiar");


// ==========================================
// 3. LISTENERS Y PRÁCTICA DE forEach()
// ==========================================

// Acción 1: forEach recibiendo solo el elemento actual
btnMostrar.addEventListener("click", function () {
    let mensaje = "LISTADO SIMPLE DE FRUTAS:\n\n";

    // forEach pasa a la función cada elemento del array, uno tras otro
    frutas.forEach(function (fruta) {
        mensaje += `• ${fruta}\n`;
    });

    salida.textContent = mensaje;
});

// Acción 2: forEach recibiendo dos parámetros (elemento, indice)
btnNumerar.addEventListener("click", function () {
    let mensaje = "LISTADO NUMERADO CON ÍNDICE:\n\n";

    // El segundo parámetro 'indice' contiene la posición (0, 1, 2...)
    frutas.forEach(function (fruta, indice) {
        mensaje += `${indice + 1}. ${fruta} (Índice en el array: ${indice})\n`;
    });

    salida.textContent = mensaje;
});

// Acción 3: Limpiar pantalla
btnLimpiar.addEventListener("click", function () {
    salida.textContent = "Pantalla limpia. Pulsa un botón para volver a recorrer el array.";
});
