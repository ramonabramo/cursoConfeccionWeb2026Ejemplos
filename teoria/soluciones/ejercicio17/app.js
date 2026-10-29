/* ==============================================================================
   EJERCICIO 17: La Máquina de Escribir ⌨️ (SOLUCIÓN COMPLETA)
   
   OBJETIVO:
   Aprender a capturar y gestionar eventos de teclado en JavaScript utilizando 
   el evento 'keydown' y el objeto evento ('evento.key').
   
   Requisitos del ejercicio:
   1. Capturar cualquier pulsación de tecla y escribir los caracteres en la pantalla.
   2. Si se pulsa el botón "Mayúsculas", activar el modo mayúsculas para que el texto 
      tecleado se escriba en MAYÚSCULAS (y volver a minúsculas al desactivarlo).
   3. Si se pulsa el botón "Limpiar pantalla", borrar todo el texto y reiniciar la pantalla.
   4. Gestionar teclas especiales:
      - 'Backspace': Borrar el último carácter con slice(0, -1).
      - 'Enter': Añadir un salto de línea (\n).
      - Ignorar teclas modificadoras del sistema (Shift, Alt, Control, etc.).
   
   ------------------------------------------------------------------------------
   CONCEPTOS CLAVE:
   ------------------------------------------------------------------------------
   1. window.addEventListener('keydown', function(evento) { ... }):
      Escucha las teclas pulsadas en cualquier parte de la ventana.
      
   2. Objeto evento (evento.key):
      Propiedad que indica el carácter o nombre de la tecla pulsada:
      - Si es una letra o número -> "a", "A", "5", " " (espacio). Su longitud es 1 (evento.key.length === 1).
      - Si es una tecla especial -> "Backspace", "Enter", "Shift", "Control", etc.
      
   3. Variables de estado (banderas / flags):
      Una variable booleana como 'let enMayusculas = false;' que cambia de valor
      al hacer clic en el botón de mayúsculas para saber cómo transformar el texto.
   ============================================================================== */

// ==========================================
// 1. VARIABLES DE ESTADO
// ==========================================
// Cadena que almacena todo el texto que el usuario va escribiendo
let texto = "";

// Variable booleana (bandera) que controla si las mayúsculas están activadas o no
let enMayusculas = false;


// ==========================================
// 2. REFERENCIAS AL DOM CON QUERYSELECTOR
// ==========================================
const pantalla = document.querySelector("#pantalla");
const btnMayusculas = document.querySelector("#btnMayusculas");
const btnLimpiar = document.querySelector("#btnLimpiar");
const badgeMayusculas = document.querySelector("#badgeMayusculas");
const badgeContador = document.querySelector("#badgeContador");
const badgeUltimaTecla = document.querySelector("#badgeUltimaTecla");


// ==========================================
// 3. ESCUCHADOR DEL EVENTO DE TECLADO ('keydown')
// ==========================================
// Escuchamos las teclas pulsadas en la ventana global del navegador
window.addEventListener("keydown", function (evento) {
    // Caso 1: Tecla de borrar (Backspace) -> quitamos el último carácter escrito
    if (evento.key === "Backspace") {
        texto = texto.slice(0, -1);
    } 
    // Caso 2: Tecla Enter -> insertamos un salto de línea
    else if (evento.key === "Enter") {
        texto += "\n";
    } 
    // Caso 3: Caracteres imprimibles (longitud 1: letras, números, símbolos, espacio)
    else if (evento.key.length === 1) {
        let caracter = evento.key;

        // Si el modo mayúsculas está activo, convertimos el carácter
        if (enMayusculas) {
            caracter = caracter.toUpperCase();
        }

        texto += caracter;
    } 
    // Caso 4: Ignoramos teclas de control o modificadoras (Shift, Control, Alt, Escape, etc.)
    else {
        return;
    }

    // Actualizamos el contenido visual de la pantalla
    if (texto === "") {
        pantalla.textContent = "Empieza a teclear en tu teclado...";
        pantalla.classList.add("vacia");
    } else {
        pantalla.textContent = texto;
        pantalla.classList.remove("vacia");
    }

    // Actualizamos los badges informativos
    const nombreTecla = evento.key === " " ? "Espacio" : evento.key;
    badgeUltimaTecla.textContent = `Última tecla: ${nombreTecla}`;
    badgeContador.textContent = `Caracteres: ${texto.length}`;
});


// ==========================================
// 4. BOTÓN ACTIVAR/DESACTIVAR MAYÚSCULAS ('click')
// ==========================================
btnMayusculas.addEventListener("click", function () {
    // Invertimos el valor booleano (true pasa a false, y viceversa)
    enMayusculas = !enMayusculas;

    if (enMayusculas) {
        // Estado: MAYÚSCULAS ACTIVADAS
        btnMayusculas.textContent = "🔠 Desactivar Mayúsculas";
        btnMayusculas.classList.add("activo");

        badgeMayusculas.textContent = "🔠 Mayúsculas: ACTIVADAS";
        badgeMayusculas.className = "badge badge-activo";

        // Si ya había texto en pantalla, lo convertimos a mayúsculas
        if (texto.length > 0) {
            texto = texto.toUpperCase();
            pantalla.textContent = texto;
        }
    } else {
        // Estado: MAYÚSCULAS DESACTIVADAS
        btnMayusculas.textContent = "🔠 Activar Mayúsculas";
        btnMayusculas.classList.remove("activo");

        badgeMayusculas.textContent = "🔡 Mayúsculas: DESACTIVADAS";
        badgeMayusculas.className = "badge badge-inactivo";
    }

    // Retiramos el foco del botón para que la barra espaciadora no vuelva a pulsarlo
    btnMayusculas.blur();
});


// ==========================================
// 5. BOTÓN LIMPIAR PANTALLA ('click')
// ==========================================
btnLimpiar.addEventListener("click", function () {
    // Vaciamos la variable acumuladora de texto
    texto = "";

    // Restauramos el mensaje inicial de la pantalla
    pantalla.textContent = "Empieza a teclear en tu teclado...";
    pantalla.classList.add("vacia");

    // Restablecemos los contadores
    badgeContador.textContent = "Caracteres: 0";
    badgeUltimaTecla.textContent = "Última tecla: Ninguna";

    // Retiramos el foco del botón
    btnLimpiar.blur();
});
