/* ==============================================================================
   EJERCICIO 19: TechStore - Catálogo Dinámico con Lightbox 🛍️
   
   OBJETIVO PEDAGÓGICO:
   1. El método forEach() para recorrer colecciones de datos y elementos del DOM.
   2. FUNCIONES DECLARADAS para estructurar la aplicación:
      - function formatearPrecio(precio)
      - function calcularCuota(precio, meses)
      - function crearTarjetaHTML(titulo, texto, precio, imagen, indice)
      - function renderizarCatalogo()
      - function abrirLightbox(indice)   <-- ¡NUEVA! Abre la ventana modal con el detalle
      - function cerrarLightbox()         <-- ¡NUEVA! Cierra la ventana modal
      - function activarEscuchadores()
   3. Sincronización de arrays paralelos mediante el parámetro 'indice' del forEach.
   4. Asignación masiva de escuchadores de eventos ('click') con forEach.
   ============================================================================== */

// ==============================================================================
// 1. ARRAYS DE DATOS DEL CATÁLOGO (10 PRODUCTOS)
// ==============================================================================

// Array con los títulos completos de los productos
const titulos = [
    '(DHI-LM27-E230C) MONITOR DAHUA 27" CURVO GAMING, 165HZ, 2 HDMI',
    'Antivirus Kaspersky Standard 3 Dispositivos 1 Año',
    'PUNTO DE ACCESO MESH WIFI 6 TP-LINK DECO X10 PACK 3u',
    'ARZOPA Z3FC + SLEEVE 16.1" LCD IPS 2.5K Altavoces',
    'DOCKING USB-C NGS WONDERDOCK12PRO: WIN/MAC 12 EN 1',
    'TECLADO MECÁNICO GAMING CORSAIR RGB SWITCHES RED',
    'RATÓN INALÁMBRICO ERGONÓMICO LOGITECH SILENT ÓPTICO',
    'AURICULARES GAMING HYPERX CLOUD II SONIDO 7.1 USB',
    'DISCO SSD EXTERNO SAMSUNG T7 1TB USB 3.2 NVME AZUL',
    'WEBCAM STREAMING PRO LOGITECH FULL HD 1080P CON MIC'
];

// Array con los textos descriptivos o marcas de cada producto
const textos = [
    'DAHUA',
    'KASPERSKY',
    'TP-LINK',
    'ARZOPA',
    'NGS',
    'CORSAIR',
    'LOGITECH',
    'HYPERX',
    'SAMSUNG',
    'LOGITECH'
];

// Array con los precios numéricos de los productos
const precios = [
    89.90,
    27.90,
    199.90,
    129.91,
    85.99,
    59.95,
    34.50,
    69.90,
    94.99,
    49.90
];

// Array con los nombres y rutas de las imágenes de cada producto
const imagenes = [
    'img/monitor.svg',
    'img/antivirus.svg',
    'img/wifi.svg',
    'img/monitor-portatil.svg',
    'img/docking.svg',
    'img/teclado.svg',
    'img/raton.svg',
    'img/auriculares.svg',
    'img/disco-ssd.svg',
    'img/webcam.svg'
];


// ==============================================================================
// 2. REFERENCIAS AL DOM CON QUERYSELECTOR
// ==============================================================================
const catalogo = document.querySelector("#catalogo");
const textoSeleccion = document.querySelector("#textoSeleccion");

// Elementos de la ventana modal Lightbox
const lightbox = document.querySelector("#lightbox");
const btnCerrarLightbox = document.querySelector("#btnCerrarLightbox");
const lightboxImg = document.querySelector("#lightboxImg");
const lightboxTitulo = document.querySelector("#lightboxTitulo");
const lightboxMarca = document.querySelector("#lightboxMarca");
const lightboxPrecio = document.querySelector("#lightboxPrecio");
const lightboxCuota = document.querySelector("#lightboxCuota");


// ==============================================================================
// 3. FUNCIONES DECLARADAS QUE DEBES COMPLETAR
// ==============================================================================

/**
 * FUNCIÓN 1: formatearPrecio
 * Recibe un número decimal (ej: 89.9) y devuelve el texto con formato europeo (ej: "89,90 €").
 */
function formatearPrecio(precio) {
    // TODO: Devuelve el precio formateado con dos decimales, coma y símbolo €
}


/**
 * FUNCIÓN 2: calcularCuota
 * Calcula la cuota mensual dividiendo el precio entre el número de meses (por defecto 3).
 * Devuelve un texto como: "Desde 29,97 €/mes o 3 plazos sin coste"
 */
function calcularCuota(precio, meses = 3) {
    // TODO: Calcula la cuota por mes y devuelve la frase formateada
}


/**
 * FUNCIÓN 3: crearTarjetaHTML
 * Recibe los datos de un único producto y devuelve el bloque HTML de su tarjeta.
 */
function crearTarjetaHTML(titulo, texto, precio, imagen, indice) {
    // TODO: Llama a formatearPrecio() y a calcularCuota()
    // TODO: Devuelve el string HTML con la plantilla de la tarjeta
}


/**
 * FUNCIÓN 4: renderizarCatalogo
 * Recorre los arrays con forEach y genera todas las tarjetas dentro de #catalogo.
 */
function renderizarCatalogo() {
    // TODO: Implementar el forEach para construir e inyectar las tarjetas
}


/**
 * FUNCIÓN 5 (DECLARADA): abrirLightbox
 * Recibe el índice del producto pulsado, rellena los datos del Lightbox y lo hace visible.
 * 
 * Pasos:
 * 1. Extraer los datos del producto usando el 'indice' en los arrays paralelos:
 *    - const titulo = titulos[indice];
 *    - const texto = textos[indice];
 *    - const precio = precios[indice];
 *    - const imagen = imagenes[indice];
 * 2. Asignar la imagen a lightboxImg.src y lightboxImg.alt.
 * 3. Asignar los textos: lightboxTitulo.textContent, lightboxMarca.textContent, etc.
 * 4. Quitar la clase "oculto" del contenedor lightbox: lightbox.classList.remove("oculto");
 * 5. Actualizar la barra superior textoSeleccion.
 */
function abrirLightbox(indice) {
    // TODO: Rellenar la información del producto en el lightbox y mostrarlo
}


/**
 * FUNCIÓN 6 (DECLARADA): cerrarLightbox
 * Oculta la ventana modal del Lightbox añadiéndole de nuevo la clase 'oculto'.
 */
function cerrarLightbox() {
    // TODO: Añadir la clase 'oculto' al elemento lightbox
}


/**
 * FUNCIÓN 7: activarEscuchadores
 * Asigna los escuchadores de eventos:
 * 1. A cada tarjeta de producto: al pulsar sobre ella, llama a abrirLightbox(indice).
 * 2. Al botón de cierre (btnCerrarLightbox): al pulsar, llama a cerrarLightbox().
 * 3. Al fondo oscuro del lightbox: si el usuario pulsa en el fondo, se cierra.
 * 4. A la tecla Escape (Escape): si se pulsa, se cierra.
 */
function activarEscuchadores() {
    // TODO: Recorrer todas las tarjetas con forEach y asociar abrirLightbox(indice)
    // TODO: Añadir escuchador al botón de cierre
    // TODO: Añadir escuchador para cerrar al hacer clic en el fondo oscuro
    // TODO: Añadir escuchador para la tecla Escape
}


// ==============================================================================
// 4. INICIALIZACIÓN
// ==============================================================================
// TODO: Llama a renderizarCatalogo() y después a activarEscuchadores()
