/* ==============================================================================
   EJERCICIO 15: El Zoológico de Emojis 🐾 (SOLUCIÓN COMPLETA)
   
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

// ==========================================
// 1. DATOS ORIGINALES DE RESPALDO
// ==========================================
const nombresOriginales = ["🐱 Gato", "🐶 Perro", "🦊 Zorro", "🐼 Panda", "🦁 León"];


// ==========================================
// 2. REFERENCIAS AL DOM
// ==========================================
// Capturamos todos los elementos con clase .tarjeta en una NodeList
const tarjetas = document.querySelectorAll(".tarjeta");

// Capturamos la pantalla y los botones con querySelector
const salida = document.querySelector("#salida");
const btnPintarTodas = document.querySelector("#btnPintarTodas");
const btnNumerar = document.querySelector("#btnNumerar");
const btnRestablecer = document.querySelector("#btnRestablecer");


// ==========================================
// 3. ASIGNAR LISTENERS A CADA TARJETA CON forEach()
// ==========================================
// Recorremos la NodeList de tarjetas directamente con forEach
tarjetas.forEach(function (tarjeta, indice) {
    tarjeta.addEventListener("click", function () {
        salida.textContent = `🐾 Has seleccionado: ${tarjeta.textContent} (Posición en la lista: #${indice + 1})`;
    });
});


// ==========================================
// 4. ACCIONES MASIVAS EN EL NODELIST CON forEach()
// ==========================================

// Acción 1: Cambiar el estilo a todas las tarjetas de golpe
btnPintarTodas.addEventListener("click", function () {
    // Recorremos todas las tarjetas con forEach
    tarjetas.forEach(function (tarjeta) {
        tarjeta.style.backgroundColor = "#f39c12";
        tarjeta.style.color = "white";
    });

    salida.textContent = "🎨 ¡Todas las tarjetas han cambiado de color mediante tarjetas.forEach()!";
});

// Acción 2: Modificar el texto de todas las tarjetas usando el parámetro 'indice'
btnNumerar.addEventListener("click", function () {
    tarjetas.forEach(function (tarjeta, indice) {
        tarjeta.textContent = `Nº ${indice + 1}: ${nombresOriginales[indice]}`;
    });

    salida.textContent = "🔢 Todas las tarjetas han sido numeradas con el parámetro 'indice' de forEach(tarjeta, indice).";
});

// Acción 3: Restablecer todos los estilos y textos originales
btnRestablecer.addEventListener("click", function () {
    tarjetas.forEach(function (tarjeta, indice) {
        tarjeta.style.backgroundColor = "";
        tarjeta.style.color = "";
        tarjeta.textContent = nombresOriginales[indice];
    });

    salida.textContent = "🔄 Estado original restaurado con tarjetas.forEach(). Haz clic en un animal o usa los botones.";
});
