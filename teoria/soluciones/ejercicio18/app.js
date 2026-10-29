/* ==============================================================================
   EJERCICIO 18: DJ Studio - Master Playlist 🎧 (SOLUCIÓN COMPLETA)
   
   OBJETIVO:
   Crear un gestor de listas de reproducción musical aplicando de manera combinada:
   1. Manipulación de Arrays en memoria:
      - Añadir al final con .push()
      - Añadir al principio con .unshift()
      - Quitar del final con .pop()
      - Quitar del principio con .shift()
      - Vaciar el array con .length = 0
   2. Búsqueda de elementos dentro de un Array:
      - Comprobar existencia con .includes() o buscar índice con .indexOf() / .findIndex()
   3. Escuchadores de eventos asociados a múltiples elementos:
      - Capturar la colección de botones con document.querySelectorAll()
      - Asignar el evento 'click' a cada uno recorriéndolos con .forEach()
   4. Uso de FUNCIONES DECLARADAS para estructurar y modular el código:
      - function actualizarPantalla(indiceResaltado)
      - function notificar(mensaje, tipo)
      - function agregarPistaFinal(nombre)
      - function agregarPistaInicio(nombre)
      - function eliminarUltimaPista()
      - function eliminarPrimeraPista()
      - function buscarPistaEnPlaylist(termino)
      - function vaciarPlaylistCompleta()
   ============================================================================== */

// ==========================================
// 1. ARRAY GLOBAL DE LA PLAYLIST
// ==========================================
// Array en memoria donde almacenamos las pistas en el orden de reproducción
const playlist = [];


// ==========================================
// 2. REFERENCIAS AL DOM CON QUERYSELECTOR
// ==========================================
// Colección de todos los botones de la mesa de sonido (NodeList)
const botonesTemas = document.querySelectorAll(".btn-tema");

// Elementos de formulario y búsqueda
const inputPista = document.querySelector("#inputPista");
const btnBuscar = document.querySelector("#btnBuscar");
const btnAgregarInicio = document.querySelector("#btnAgregarInicio");
const btnAgregarFinal = document.querySelector("#btnAgregarFinal");

// Botones de control y eliminación
const btnQuitarPrimero = document.querySelector("#btnQuitarPrimero");
const btnQuitarUltimo = document.querySelector("#btnQuitarUltimo");
const btnVaciar = document.querySelector("#btnVaciar");

// Pantallas de visualización e información
const pantallaPlaylist = document.querySelector("#pantallaPlaylist");
const pantallaMensaje = document.querySelector("#pantallaMensaje");
const badgeContadorPistas = document.querySelector("#badgeContadorPistas");


// ==========================================
// 3. FUNCIONES DECLARADAS
// ==========================================

/**
 * Función 1: notificar
 * Muestra mensajes interactivos en pantallaMensaje con estilos CSS según el tipo.
 * @param {string} mensaje - El texto informativo a mostrar.
 * @param {string} tipo - "exito", "aviso", "error" o "info".
 */
function notificar(mensaje, tipo = "info") {
    pantallaMensaje.textContent = mensaje;
    pantallaMensaje.className = `pantalla-mensaje ${tipo}`;
}

/**
 * Función 2: actualizarPantalla
 * Renderiza el estado visual completo de la playlist y actualiza el contador.
 * Permite opcionalmente resaltar una pista encontrada mediante búsqueda.
 * @param {number} indiceResaltado - Índice numérico de la pista a resaltar (por defecto -1).
 */
function actualizarPantalla(indiceResaltado = -1) {
    // 1. Actualizamos el badge contador de pistas
    const cantidad = playlist.length;
    badgeContadorPistas.textContent = `${cantidad} ${cantidad === 1 ? "pista cargada" : "pistas cargadas"}`;

    // 2. Si el array está vacío, mostramos el mensaje de lista vacía
    if (cantidad === 0) {
        pantallaPlaylist.className = "pantalla-playlist vacia";
        pantallaPlaylist.textContent = "🎵 Tu playlist está vacía. Añade pistas desde la mesa de sonido o escribe una personalizada.";
        return;
    }

    // 3. Si hay pistas, construimos la lista formateada recorriendo el array con forEach
    let contenidoHTML = "";
    playlist.forEach(function (pista, indice) {
        const esResaltada = indice === indiceResaltado ? "resaltada" : "";
        contenidoHTML += `
            <div class="elemento-pista ${esResaltada}">
                <span><strong>#${indice + 1}</strong> ${pista}</span>
                <span style="font-size: 0.8rem; opacity: 0.65;">Pista ${indice + 1}</span>
            </div>
        `;
    });

    pantallaPlaylist.className = "pantalla-playlist";
    pantallaPlaylist.innerHTML = contenidoHTML;
}

/**
 * Función 3: agregarPistaFinal
 * Inserta una pista al final del array usando el método .push().
 * @param {string} nombrePista - Nombre del tema a añadir.
 */
function agregarPistaFinal(nombrePista) {
    if (!nombrePista || nombrePista.trim() === "") {
        notificar("⚠️ Por favor, introduce un nombre de pista válido.", "aviso");
        return;
    }

    // Añadimos al final del array con .push()
    playlist.push(nombrePista.trim());

    notificar(`✅ Pista añadida al final (.push): "${nombrePista.trim()}"`, "exito");
    actualizarPantalla();
}

/**
 * Función 4: agregarPistaInicio
 * Inserta una pista al principio del array usando el método .unshift().
 * @param {string} nombrePista - Nombre del tema a añadir.
 */
function agregarPistaInicio(nombrePista) {
    if (!nombrePista || nombrePista.trim() === "") {
        notificar("⚠️ Por favor, introduce un nombre de pista válido.", "aviso");
        return;
    }

    // Añadimos al principio del array con .unshift()
    playlist.unshift(nombrePista.trim());

    notificar(`⏮️ Pista añadida al inicio (.unshift): "${nombrePista.trim()}"`, "exito");
    actualizarPantalla();
}

/**
 * Función 5: eliminarUltimaPista
 * Elimina la última pista del array usando el método .pop().
 */
function eliminarUltimaPista() {
    if (playlist.length === 0) {
        notificar("⚠️ No hay pistas en la playlist para eliminar.", "aviso");
        return;
    }

    // .pop() extrae y devuelve el último elemento
    const pistaEliminada = playlist.pop();

    notificar(`🗑️ Se ha eliminado la última pista (.pop): "${pistaEliminada}"`, "aviso");
    actualizarPantalla();
}

/**
 * Función 6: eliminarPrimeraPista
 * Elimina la primera pista del array usando el método .shift().
 */
function eliminarPrimeraPista() {
    if (playlist.length === 0) {
        notificar("⚠️ No hay pistas en la playlist para eliminar.", "aviso");
        return;
    }

    // .shift() extrae y devuelve el primer elemento, desplazando los demás
    const pistaEliminada = playlist.shift();

    notificar(`🗑️ Se ha eliminado la primera pista (.shift): "${pistaEliminada}"`, "aviso");
    actualizarPantalla();
}

/**
 * Función 7: buscarPistaEnPlaylist
 * Comprueba si una pista existe en el array usando búsqueda con .indexOf() o coincidencia flexible.
 * @param {string} termino - Término o nombre a buscar.
 */
function buscarPistaEnPlaylist(termino) {
    const busquedaLimpia = termino.trim().toLowerCase();

    if (busquedaLimpia === "") {
        notificar("⚠️ Escribe el nombre de la pista que deseas buscar.", "aviso");
        return;
    }

    if (playlist.length === 0) {
        notificar("⚠️ La playlist está vacía. No hay pistas donde buscar.", "aviso");
        return;
    }

    // Buscamos el índice de la primera pista que coincida con el término
    const indice = playlist.findIndex(function (pista) {
        return pista.toLowerCase().includes(busquedaLimpia);
    });

    if (indice !== -1) {
        // Pista encontrada: informamos la posición humana (índice + 1) y la resaltamos
        notificar(`🔎 ¡Encontrada! "${playlist[indice]}" se encuentra en la posición #${indice + 1}.`, "exito");
        actualizarPantalla(indice);
    } else {
        // Pista no encontrada
        notificar(`❌ La pista "${termino.trim()}" no está en tu playlist actual.`, "error");
        actualizarPantalla();
    }
}

/**
 * Función 8: vaciarPlaylistCompleta
 * Resetea el array estableciendo su longitud a 0.
 */
function vaciarPlaylistCompleta() {
    if (playlist.length === 0) {
        notificar("⚠️ La playlist ya se encuentra vacía.", "aviso");
        return;
    }

    // Vaciamos el array reseteando su longitud
    playlist.length = 0;

    notificar("🧹 Se ha vaciado la playlist completa.", "aviso");
    actualizarPantalla();
}


// ==========================================
// 4. ASIGNACIÓN DE LISTENERS
// ==========================================

// 1. Asignamos el escuchador a TODOS los botones de la mesa de sonido con .forEach()
botonesTemas.forEach(function (boton) {
    boton.addEventListener("click", function (evento) {
        // Capturamos el texto del botón pulsado
        const temaSeleccionado = evento.target.textContent;

        // Llamamos a la función declarada para añadirlo al final
        agregarPistaFinal(temaSeleccionado);
    });
});

// 2. Botón "Añadir al Final (.push)" desde el input
btnAgregarFinal.addEventListener("click", function () {
    const valor = inputPista.value;
    agregarPistaFinal(valor);
    inputPista.value = ""; // Limpiamos el input
});

// 3. Botón "Añadir al Inicio (.unshift)" desde el input
btnAgregarInicio.addEventListener("click", function () {
    const valor = inputPista.value;
    agregarPistaInicio(valor);
    inputPista.value = ""; // Limpiamos el input
});

// 4. Botón "Buscar Pista"
btnBuscar.addEventListener("click", function () {
    const valor = inputPista.value;
    buscarPistaEnPlaylist(valor);
});

// 5. Botón "Quitar Primera (.shift)"
btnQuitarPrimero.addEventListener("click", function () {
    eliminarPrimeraPista();
});

// 6. Botón "Quitar Última (.pop)"
btnQuitarUltimo.addEventListener("click", function () {
    eliminarUltimaPista();
});

// 7. Botón "Vaciar Playlist"
btnVaciar.addEventListener("click", function () {
    vaciarPlaylistCompleta();
});
