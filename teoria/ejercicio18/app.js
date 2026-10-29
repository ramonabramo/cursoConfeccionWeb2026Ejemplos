/* ==============================================================================
   EJERCICIO 18: DJ Studio - Master Playlist 🎧 (REPASO COMPLETO)
   
   OBJETIVO:
   Crear un gestor de listas de reproducción musical aplicando de manera combinada:
   1. Manipulación de Arrays en memoria:
      - Añadir al final con .push()
      - Añadir al principio con .unshift()
      - Quitar del final con .pop()
      - Quitar del principio con .shift()
      - Vaciar el array con .length = 0
   2. Búsqueda de elementos dentro de un Array:
      - Comprobar existencia con .includes() o buscar índice con .indexOf()
   3. Escuchadores de eventos asociados a múltiples elementos:
      - Capturar la colección de botones con document.querySelectorAll()
      - Asignar el evento 'click' a cada uno recorriéndolos con .forEach()
   4. Uso de FUNCIONES DECLARADAS para estructurar y modular el código:
      - function actualizarPantalla()
      - function notificar(mensaje, tipo)
      - function agregarPistaFinal(nombre)
      - function agregarPistaInicio(nombre)
      - function eliminarUltimaPista()
      - function eliminarPrimeraPista()
      - function buscarPistaEnPlaylist(termino)
      - function vaciarPlaylistCompleta()
   ============================================================================== */

/**
 * PASO A PASO:
 * 
 * 1. DECLARAR EL ARRAY GLOBAL:
 *    - const playlist = []; // Almacenará los títulos de las pistas musicales.
 * 
 * 2. REFERENCIAS AL DOM CON querySelector Y querySelectorAll:
 *    - const botonesTemas = document.querySelectorAll('.btn-tema');
 *    - const inputPista = document.querySelector('#inputPista');
 *    - const btnBuscar = document.querySelector('#btnBuscar');
 *    - const btnAgregarInicio = document.querySelector('#btnAgregarInicio');
 *    - const btnAgregarFinal = document.querySelector('#btnAgregarFinal');
 *    - const btnQuitarPrimero = document.querySelector('#btnQuitarPrimero');
 *    - const btnQuitarUltimo = document.querySelector('#btnQuitarUltimo');
 *    - const btnVaciar = document.querySelector('#btnVaciar');
 *    - const pantallaPlaylist = document.querySelector('#pantallaPlaylist');
 *    - const pantallaMensaje = document.querySelector('#pantallaMensaje');
 *    - const badgeContadorPistas = document.querySelector('#badgeContadorPistas');
 * 
 * 3. DECLARAR LAS FUNCIONES:
 *    - Implementar las funciones declaradas descritas en el objetivo.
 * 
 * 4. ASIGNAR LISTENERS:
 *    - A la colección de botones de temas usando .forEach().
 *    - A los botones individuales de acción con addEventListener('click', ...).
 */

// ==========================================
// 1. ARRAY GLOBAL DE LA PLAYLIST
// ==========================================
const playlist = [];


// ==========================================
// 2. REFERENCIAS AL DOM
// ==========================================
const botonesTemas = document.querySelectorAll(".btn-tema");
const inputPista = document.querySelector("#inputPista");
const btnBuscar = document.querySelector("#btnBuscar");
const btnAgregarInicio = document.querySelector("#btnAgregarInicio");
const btnAgregarFinal = document.querySelector("#btnAgregarFinal");
const btnQuitarPrimero = document.querySelector("#btnQuitarPrimero");
const btnQuitarUltimo = document.querySelector("#btnQuitarUltimo");
const btnVaciar = document.querySelector("#btnVaciar");
const pantallaPlaylist = document.querySelector("#pantallaPlaylist");
const pantallaMensaje = document.querySelector("#pantallaMensaje");
const badgeContadorPistas = document.querySelector("#badgeContadorPistas");


// ==========================================
// 3. FUNCIONES DECLARADAS
// ==========================================

// Función 1: Muestra mensajes informativos y de feedback con clases CSS (exito, aviso, error)
function notificar(mensaje, tipo = "info") {
    // TODO: Asignar el texto a pantallaMensaje y cambiar su clase según el tipo
}

// Función 2: Renderiza la lista completa de pistas y el contador
function actualizarPantalla() {
    // TODO: Si el array está vacío, mostrar mensaje de lista vacía.
    // Si tiene elementos, recorrer el array y mostrar cada pista numerada (1. Pista, 2. Pista...)
    // Actualizar también badgeContadorPistas con el número de pistas.
}

// Función 3: Añade una pista al final con .push()
function agregarPistaFinal(nombrePista) {
    // TODO: Añadir nombrePista al final del array playlist, notificar y actualizar pantalla
}

// Función 4: Añade una pista al principio con .unshift()
function agregarPistaInicio(nombrePista) {
    // TODO: Añadir nombrePista al inicio del array playlist, notificar y actualizar pantalla
}

// Función 5: Quita la última pista con .pop()
function eliminarUltimaPista() {
    // TODO: Comprobar si el array tiene pistas. Si tiene, usar .pop(), notificar y actualizar pantalla
}

// Función 6: Quita la primera pista con .shift()
function eliminarPrimeraPista() {
    // TODO: Comprobar si el array tiene pistas. Si tiene, usar .shift(), notificar y actualizar pantalla
}

// Función 7: Busca si una pista existe usando .indexOf() o .includes()
function buscarPistaEnPlaylist(termino) {
    // TODO: Comprobar si el término buscado existe en la playlist e informar la posición exacta
}

// Función 8: Vacía la playlist por completo
function vaciarPlaylistCompleta() {
    // TODO: Vaciar el array (playlist.length = 0), notificar y actualizar pantalla
}


// ==========================================
// 4. ASIGNACIÓN DE LISTENERS
// ==========================================

// TODO: 1. Asignar listener a cada botón de la mesa de sonido con botonesTemas.forEach(...)
// TODO: 2. Asignar listeners a los botones de acción llamando a las funciones declaradas
