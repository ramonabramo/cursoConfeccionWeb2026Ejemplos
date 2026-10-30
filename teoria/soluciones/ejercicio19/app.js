/* ==============================================================================
   EJERCICIO 19: Catálogo de Componentes Tecnológicos 💻 (SOLUCIÓN)
   
   OBJETIVO:
   Construir dinámicamente un catálogo de 10 productos tecnológicos en pantalla al
   hacer clic en un botón, combinando:
   1. Cuatro arrays paralelos que contienen la información de cada producto
      (imágenes, títulos, marcas y precios).
   2. Una función declarada 'crearTarjeta()' que recibe los datos de un producto
      y devuelve su estructura HTML utilizando Template Literals (con backticks `...`).
   3. El método 'forEach()' para recorrer los productos utilizando el índice 'i'
      para sincronizar los 4 arrays.
   4. Inyección del catálogo en el contenedor '#gridProductos' con '.innerHTML'.

   PASOS A REALIZAR:
   - PASO 1: Declarar la función constructora 'crearTarjeta(imagen, titulo, marca, precio)'
             que devuelva el string HTML del <article class="tarjeta">.
   - PASO 2: Disponer de los 4 arrays globales: imagenes, titulos, textos (marcas) y precios.
   - PASO 3: Crear las constantes al DOM que apunten al botón '#btnCargar' y al contenedor '#gridProductos'.
   - PASO 4: Añadir el escuchador de eventos 'click' al botón '#btnCargar'.
   - PASO 5: Dentro del evento:
             a) Declarar una variable local acumuladora (ej: let catalogoHTML = "").
             b) Recorrer el array 'titulos' con '.forEach((tituloActual, i) => { ... })'.
             c) Usar el índice 'i' para extraer la imagenActual, marcaActual y precioActual
                de sus respectivos arrays.
             d) Llamar a 'crearTarjeta(...)' y acumular el resultado con '+='.
             e) Asignar todo el string acumulado a 'gridProductos.innerHTML'.
   ============================================================================== */

// ==========================================
// 1. FUNCIONES DECLARADAS
// ==========================================
/**
 * Crea y devuelve el bloque HTML de una tarjeta de producto.
 * @param {string} imagen - Nombre del archivo de imagen (ej: "antivirus.jpg").
 * @param {string} titulo - Nombre o título del producto.
 * @param {string} marca  - Nombre de la marca o fabricante.
 * @param {number} precio - Importe numérico del producto.
 * @returns {string} Código HTML de la tarjeta (<article class="tarjeta">...).
 */
function crearTarjeta(imagen, titulo, marca, precio) {
    // Usamos Template Literals (con backticks `) para inyectar variables en el string de HTML
    return `
        <article class="tarjeta">
            <img src="imgs/${imagen}" alt="${titulo}">
            <p class="marca">${marca}</p>
            <h3 class="titulo">${titulo}</h3>
            <p class="precio">${precio.toFixed(2)} €</p>
        </article>
    `;
}


// ==========================================
// 2. VARIABLES Y CONSTANTES GLOBALES (ARRAYS)
// ==========================================
const imagenes = [
    "antivirus.jpg", "router.jpg", "pantalla-portatil.jpg",
    "docking.jpg", "raton.jpg", "teclado.jpg",
    "auriculares.jpg", "webcam.jpg", "ssd.jpg", "monitor-dahua.jpg"
];

const titulos = [
    "Antivirus Kaspersky Standard", "Punto de Acceso Deco X10",
    "Monitor Portátil Arzopa", "Docking USB-C NGS",
    "Ratón Gaming RGB", "Teclado Mecánico Pro",
    "Auriculares Inalámbricos", "Cámara Web 1080p",
    "Disco Duro SSD 1TB", "Monitor Dahua 27\" Curvo"
];

const textos = [
    "KASPERSKY", "TP-LINK", "ARZOPA", "NGS",
    "LOGITECH", "CORSAIR", "RAZER", "CREATIVE",
    "SAMSUNG", "DAHUA"
];

const precios = [
    27.90, 199.90, 129.91, 85.99,
    45.50, 110.00, 79.99, 35.00,
    99.95, 89.90
];


// ==========================================
// 3. CONSTANTES AL DOM
// ==========================================
const btnCargar = document.querySelector("#btnCargar");
const gridProductos = document.querySelector("#gridProductos");


// ==========================================
// 4. EVENTOS Y ESCUCHADORES
// ==========================================
// Como el evento es exclusivo para este botón, usamos una función de flecha o anónima directa
btnCargar.addEventListener("click", () => {
    // Constantes y variables locales: acumulador de tarjetas HTML
    let catalogoHTML = "";

    // Procesamiento: recorremos los arrays sincronizados mediante el índice 'i'
    titulos.forEach((tituloActual, i) => {
        // 'i' es el índice actual de la vuelta (0, 1, 2...). Lo usamos para extraer
        // el elemento de esa misma posición en los otros 3 arrays paralelos.
        const imagenActual = imagenes[i];
        const marcaActual = textos[i];
        const precioActual = precios[i];

        // Llamamos a la función constructora y concatenamos (+=) el resultado
        catalogoHTML += crearTarjeta(imagenActual, tituloActual, marcaActual, precioActual);
    });

    // Salidas: inyectamos todas las tarjetas en el contenedor del grid
    gridProductos.innerHTML = catalogoHTML;
});
