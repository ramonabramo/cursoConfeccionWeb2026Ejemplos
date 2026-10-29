/* ==============================================================================
   EJERCICIO 17: La Máquina de Escribir ⌨️ (Eventos de Teclado)
   
   OBJETIVO:
   Aprender a capturar y gestionar eventos de teclado en JavaScript utilizando 
   el evento 'keydown' y el objeto evento ('evento.key').
   
   Requisitos del ejercicio:
   1. Capturar cualquier pulsación de tecla y escribir los caracteres en la pantalla.
   2. Si se pulsa el botón "Mayúsculas", activar el modo mayúsculas para que el texto 
      tecleado se escriba en MAYÚSCULAS (y volver a minúsculas al desactivarlo).
   3. Si se pulsa el botón "Limpiar pantalla", borrar todo el texto y reiniciar la pantalla.
   4. Gestionar teclas especiales:
      - 'Backspace': Borrar el último carácter.
      - 'Enter': Añadir un salto de línea.
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

/**
 * PASO A PASO A REALIZAR:
 * 
 * 1. DECLARAR VARIABLES DE ESTADO:
 *    - let texto = "";               // Cadena para ir acumulando las teclas pulsadas.
 *    - let enMayusculas = false;     // Variable booleana para recordar si las mayúsculas están activas.
 * 
 * 2. REFERENCIAS AL DOM CON querySelector:
 *    - Capturar la pantalla: const pantalla = document.querySelector("#pantalla");
 *    - Capturar el botón mayúsculas: const btnMayusculas = document.querySelector("#btnMayusculas");
 *    - Capturar el botón limpiar: const btnLimpiar = document.querySelector("#btnLimpiar");
 *    - Capturar los badges informativos: #badgeMayusculas, #badgeContador, #badgeUltimaTecla.
 * 
 * 3. ESCUCHADOR DE TECLADO ('keydown' en window):
 *    - window.addEventListener("keydown", function(evento) { ... })
 *      a) Si evento.key === "Backspace": quitar el último carácter con slice o substring.
 *      b) Si evento.key === "Enter": añadir salto de línea "\n".
 *      c) Si evento.key.length === 1 (carácter imprimible):
 *         - Si enMayusculas es true, convertir con .toUpperCase().
 *         - Concatenar el carácter a la variable 'texto'.
 *      d) En cualquier otro caso: no hacer nada (retornar para ignorar Shift, Alt, etc.).
 *      e) Actualizar la pantalla y los badges informativos.
 * 
 * 4. ESCUCHADOR PARA EL BOTÓN MAYÚSCULAS ('click'):
 *    - Invertir la variable booleana: enMayusculas = !enMayusculas;
 *    - Actualizar el aspecto del botón y del badge.
 *    - Si ya hay texto escrito, podemos convertirlo también a mayúsculas.
 * 
 * 5. ESCUCHADOR PARA EL BOTÓN LIMPIAR ('click'):
 *    - Vaciar la variable: texto = "";
 *    - Restaurar el texto inicial de la pantalla y restablecer los contadores.
 */

// ==========================================
// 1. VARIABLES DE ESTADO
// ==========================================
let texto = "";
let enMayusculas = false;


// ==========================================
// 2. REFERENCIAS AL DOM
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
// TODO: Completa el escuchador en window para capturar las teclas pulsadas


// ==========================================
// 4. BOTÓN ACTIVAR/DESACTIVAR MAYÚSCULAS ('click')
// ==========================================
// TODO: Completa el evento click para alternar entre mayúsculas y minúsculas


// ==========================================
// 5. BOTÓN LIMPIAR PANTALLA ('click')
// ==========================================
// TODO: Completa el evento click para borrar el texto y reiniciar la pantalla
