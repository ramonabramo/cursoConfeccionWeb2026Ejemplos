/* ==============================================================================
   EJERCICIO 19: TechStore - Catálogo Dinámico con Lightbox 🛍️ (SOLUCIÓN COMPLETA)
   
   OBJETIVO PEDAGÓGICO:
   1. El método forEach() para recorrer colecciones de datos y elementos del DOM.
   2. FUNCIONES DECLARADAS para estructurar la aplicación:
      - function formatearPrecio(precio)
      - function calcularCuota(precio, meses)
      - function crearTarjetaHTML(titulo, texto, precio, imagen, indice)
      - function renderizarCatalogo()
      - function abrirLightbox(indice)   <-- ¡Función declarada para abrir el modal!
      - function cerrarLightbox()         <-- ¡Función declarada para cerrar el modal!
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

// Referencias a los elementos del Lightbox
const lightbox = document.querySelector("#lightbox");
const btnCerrarLightbox = document.querySelector("#btnCerrarLightbox");
const lightboxImg = document.querySelector("#lightboxImg");
const lightboxTitulo = document.querySelector("#lightboxTitulo");
const lightboxMarca = document.querySelector("#lightboxMarca");
const lightboxPrecio = document.querySelector("#lightboxPrecio");
const lightboxCuota = document.querySelector("#lightboxCuota");


// ==============================================================================
// 3. FUNCIONES DECLARADAS
// ==============================================================================

/**
 * FUNCIÓN 1: formatearPrecio
 * Recibe un valor numérico y lo formatea como moneda europea (ej: 89.9 -> "89,90 €").
 * 
 * @param {number} precio - Importe numérico del producto.
 * @returns {string} Precio con dos decimales, coma y símbolo de euro.
 */
function formatearPrecio(precio) {
    return precio.toFixed(2).replace(".", ",") + " €";
}


/**
 * FUNCIÓN 2: calcularCuota
 * Calcula la cuota mensual a 3 plazos u otro número de meses especificado.
 * 
 * @param {number} precio - Importe total.
 * @param {number} meses - Número de plazos (por defecto 3).
 * @returns {string} Mensaje de financiación formateado.
 */
function calcularCuota(precio, meses = 3) {
    const cuota = (precio / meses).toFixed(2).replace(".", ",");
    return `Desde ${cuota} €/mes o ${meses} plazos sin coste`;
}


/**
 * FUNCIÓN 3: crearTarjetaHTML
 * Construye la estructura HTML completa de una tarjeta de producto a partir de sus datos.
 * 
 * @param {string} titulo - Título comercial del producto.
 * @param {string} texto - Marca o texto descriptivo.
 * @param {number} precio - Precio numérico.
 * @param {string} imagen - Ruta al archivo de imagen.
 * @param {number} indice - Posición numérica del producto en los arrays.
 * @returns {string} Cadena HTML con la tarjeta lista para ser inyectada en el DOM.
 */
function crearTarjetaHTML(titulo, texto, precio, imagen, indice) {
    const precioTexto = formatearPrecio(precio);
    const cuotaTexto = calcularCuota(precio);

    return `
        <article class="tarjeta-producto" data-indice="${indice}">
            <div class="imagen-wrapper">
                <img src="${imagen}" alt="${titulo}" class="producto-img">
            </div>
            <h3 class="producto-titulo" title="${titulo}">${titulo}</h3>
            <span class="producto-marca">${texto}</span>
            <div class="producto-precio">${precioTexto}</div>
            <div class="producto-cuota">${cuotaTexto}</div>
            <div class="producto-envio">
                <span class="envio-gratis">Envío GRATIS</span>
                <span class="plazo-entrega">Recíbelo en 48/72h</span>
            </div>
        </article>
    `;
}


/**
 * FUNCIÓN 4: renderizarCatalogo
 * Recorre el catálogo utilizando forEach e inyecta todas las tarjetas en el contenedor.
 */
function renderizarCatalogo() {
    catalogo.innerHTML = "";
    let contenidoHTML = "";

    titulos.forEach(function (titulo, indice) {
        const texto = textos[indice];
        const precio = precios[indice];
        const imagen = imagenes[indice];

        contenidoHTML += crearTarjetaHTML(titulo, texto, precio, imagen, indice);
    });

    catalogo.innerHTML = contenidoHTML;
}


/**
 * FUNCIÓN 5 (DECLARADA): abrirLightbox
 * Muestra el Lightbox modal con toda la información detallada del producto seleccionado.
 * 
 * @param {number} indice - Posición numérica del producto que se ha pulsado.
 */
function abrirLightbox(indice) {
    // Obtenemos los datos correspondientes en los arrays gracias al índice
    const titulo = titulos[indice];
    const texto = textos[indice];
    const precio = precios[indice];
    const imagen = imagenes[indice];

    // Asignamos la información al DOM del Lightbox
    lightboxImg.src = imagen;
    lightboxImg.alt = titulo;
    lightboxTitulo.textContent = titulo;
    lightboxMarca.textContent = texto;
    lightboxPrecio.textContent = formatearPrecio(precio);
    lightboxCuota.textContent = calcularCuota(precio);

    // Mostramos la ventana modal quitando la clase 'oculto'
    lightbox.classList.remove("oculto");

    // Actualizamos la barra de selección superior
    textoSeleccion.innerHTML = `🔎 Viendo en Lightbox: <strong>${titulo}</strong> (${formatearPrecio(precio)})`;
}


/**
 * FUNCIÓN 6 (DECLARADA): cerrarLightbox
 * Oculta la ventana modal del Lightbox añadiéndole la clase 'oculto'.
 */
function cerrarLightbox() {
    lightbox.classList.add("oculto");
}


/**
 * FUNCIÓN 7: activarEscuchadores
 * Asigna los eventos tanto a las tarjetas de producto como a los controles de cierre del Lightbox.
 */
function activarEscuchadores() {
    // 1. Asignamos a cada tarjeta de producto el evento click para abrir el Lightbox con forEach
    const tarjetas = document.querySelectorAll(".tarjeta-producto");

    tarjetas.forEach(function (tarjeta, indice) {
        tarjeta.addEventListener("click", function () {
            // Llamamos a la función declarada pasándole el índice del producto
            abrirLightbox(indice);
        });
    });

    // 2. Cerrar con el botón '×'
    btnCerrarLightbox.addEventListener("click", function () {
        cerrarLightbox();
    });

    // 3. Cerrar haciendo clic en el fondo oscuro (backdrop)
    lightbox.addEventListener("click", function (evento) {
        if (evento.target === lightbox) {
            cerrarLightbox();
        }
    });

    // 4. Cerrar al pulsar la tecla Escape del teclado
    window.addEventListener("keydown", function (evento) {
        if (evento.key === "Escape") {
            cerrarLightbox();
        }
    });
}


// ==============================================================================
// 4. ARRANQUE DE LA APLICACIÓN
// ==============================================================================
// 1. Generamos y renderizamos las tarjetas con forEach
renderizarCatalogo();

// 2. Activamos todos los escuchadores de eventos
activarEscuchadores();
