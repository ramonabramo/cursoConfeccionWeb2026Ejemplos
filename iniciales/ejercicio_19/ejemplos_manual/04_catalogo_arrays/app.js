/**
 * ============================================================================
 * EJERCICIO 18 - EJEMPLO MANUAL 04: ARRAYS DE OBJETOS LITERALES
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 *
 * CONCEPTOS CLAVE TRATADOS:
 * 1. Colecciones homogéneas: almacenar múltiples objetos literales dentro de un Array.
 * 2. Recorrido de colecciones mediante el bucle `for...of` y métodos de array (`filter`, `sort`).
 * 3. Acceso a las propiedades de cada objeto (`item.titulo`, `item.precio`, `item.disponible`).
 * 4. Creación dinámica de elementos del DOM a partir de datos estructurados.
 * ============================================================================
 */

// 1. ARRAY DE OBJETOS LITERALES (Base de datos simulada)
const catalogo = [
  { id: 1, titulo: "Monitor Curvo 24 pulgadas", precio: 149.99, disponible: true },
  { id: 2, titulo: "Ratón Ergonómico Inalámbrico", precio: 24.50, disponible: false },
  { id: 3, titulo: "Alfombrilla Gaming XXL", precio: 18.00, disponible: true },
  { id: 4, titulo: "Teclado Mecánico Switch Blue", precio: 79.90, disponible: true },
  { id: 5, titulo: "Auriculares Hi-Res con Micrófono", precio: 55.00, disponible: false },
  { id: 6, titulo: "Webcam Full HD 1080p con Trípode", precio: 39.95, disponible: true }
];

// 2. REFERENCIAS AL DOM
const contenedorCatalogo = document.getElementById("contenedorCatalogo");
const selFiltro = document.getElementById("selFiltro");
const selOrden = document.getElementById("selOrden");
const inpBuscar = document.getElementById("inpBuscar");

const totalArticulos = document.getElementById("totalArticulos");
const totalDisponibles = document.getElementById("totalDisponibles");
const precioMedio = document.getElementById("precioMedio");

/**
 * Función principal que filtra, ordena y dibuja los objetos literales en pantalla
 */
function renderizarCatalogo() {
  const criterioFiltro = selFiltro.value;
  const criterioOrden = selOrden.value;
  const terminoBusqueda = inpBuscar.value.trim().toLowerCase();

  // 1. Filtrado
  let lista = catalogo.filter(item => {
    // Filtro disponibilidad
    if (criterioFiltro === "disponibles" && !item.disponible) return false;
    if (criterioFiltro === "agotados" && item.disponible) return false;

    // Filtro búsqueda textual
    if (terminoBusqueda !== "" && !item.titulo.toLowerCase().includes(terminoBusqueda)) {
      return false;
    }

    return true;
  });

  // 2. Ordenación
  if (criterioOrden === "asc") {
    lista.sort((a, b) => a.precio - b.precio);
  } else if (criterioOrden === "desc") {
    lista.sort((a, b) => b.precio - a.precio);
  } else {
    lista.sort((a, b) => a.id - b.id);
  }

  // 3. Pintado en el DOM
  contenedorCatalogo.innerHTML = "";

  if (lista.length === 0) {
    contenedorCatalogo.innerHTML = `<div class="mensaje-vacio">🔍 No se han encontrado artículos que coincidan con los criterios.</div>`;
  } else {
    // Recorremos los objetos con for...of
    for (const item of lista) {
      const tarjeta = document.createElement("div");
      tarjeta.className = "tarjeta-item";

      tarjeta.innerHTML = `
        <div class="item-header">
          <span class="item-id">ID: #${item.id}</span>
          <span class="badge-stock ${item.disponible ? 'disponible' : 'agotado'}">
            ${item.disponible ? '✔ En Stock' : '✖ Agotado'}
          </span>
        </div>
        <h3 class="item-titulo">${item.titulo}</h3>
        <div class="item-footer">
          <span class="item-precio">${item.precio.toFixed(2)} €</span>
          <button class="btn-sm" onclick="alert('Objeto seleccionado: ID ${item.id} - ${item.titulo}')">Ver ficha</button>
        </div>
      `;

      contenedorCatalogo.appendChild(tarjeta);
    }
  }

  // 4. Cálculo de Métricas globales del catálogo completo
  actualizarMetricas();
}

function actualizarMetricas() {
  totalArticulos.textContent = catalogo.length;

  let disponiblesCount = 0;
  let sumaPrecios = 0;

  for (const prod of catalogo) {
    if (prod.disponible) disponiblesCount++;
    sumaPrecios += prod.precio;
  }

  totalDisponibles.textContent = disponiblesCount;
  precioMedio.textContent = catalogo.length > 0
    ? `${(sumaPrecios / catalogo.length).toFixed(2)} €`
    : "0.00 €";
}

// 3. LISTENERS
selFiltro.addEventListener("change", renderizarCatalogo);
selOrden.addEventListener("change", renderizarCatalogo);
inpBuscar.addEventListener("input", renderizarCatalogo);

// Inicialización
renderizarCatalogo();
