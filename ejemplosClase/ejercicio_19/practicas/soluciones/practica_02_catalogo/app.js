/**
 * ============================================================================
 * SOLUCIÓN OFICIAL: PRÁCTICA 2 - MINI-CATÁLOGO DE PRODUCTOS (ARRAY DE OBJETOS)
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo (Santander, 2026)
 * ============================================================================
 */

// 1. Captura de elementos del DOM
const contenedor  = document.getElementById("contenedorProductos");
const formNuevo   = document.getElementById("formNuevoProducto");
const conteoTotal = document.getElementById("conteoTotal");

// 2. Array de objetos literales con el catálogo inicial
const productos = [
  { id: 1, nombre: "Cuaderno A4", precio: 2.50, stock: 5 },
  { id: 2, nombre: "Bolígrafo Azul", precio: 1.20, stock: 12 },
  { id: 3, nombre: "Mochila Escolar", precio: 24.90, stock: 2 }
];

// 3. Función principal para pintar las tarjetas en el DOM
function renderizarCatalogo() {
  contenedor.innerHTML = ""; // Limpiamos el contenedor para repintar

  // Actualizamos el contador total
  conteoTotal.textContent = `${productos.length} producto${productos.length === 1 ? "" : "s"}`;

  // Recorrido con bucle for...of
  for (const prod of productos) {
    const estaAgotado = prod.stock === 0;
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-producto";

    tarjeta.innerHTML = `
      <div>
        <h3>${prod.nombre}</h3>
        <p class="precio">${prod.precio.toFixed(2)} €</p>
        <p class="stock-info">
          ${estaAgotado ? '<span style="color: #ef4444; font-weight: bold;">Sin existencias</span>' : `Stock disponible: <strong>${prod.stock}</strong> uds.`}
        </p>
      </div>
      <button class="btn-vender" data-id="${prod.id}" ${estaAgotado ? "disabled" : ""}>
        ${estaAgotado ? "Agotado" : "🛒 Vender 1 ud."}
      </button>
    `;

    contenedor.appendChild(tarjeta);
  }

  // Asignamos el evento de venta a todos los botones generados
  const botonesVender = contenedor.querySelectorAll(".btn-vender");
  botonesVender.forEach(boton => {
    boton.addEventListener("click", (e) => {
      const idProducto = Number(e.currentTarget.dataset.id);
      venderProducto(idProducto);
    });
  });
}

// 4. Lógica para restar una unidad de stock
function venderProducto(id) {
  const productoEncontrado = productos.find(item => item.id === id);

  if (productoEncontrado && productoEncontrado.stock > 0) {
    productoEncontrado.stock--;
    renderizarCatalogo(); // Sincronizamos la pantalla
  }
}

// 5. Manejo del formulario de alta rápida
formNuevo.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombreIngresado = document.getElementById("inputNombre").value.trim();
  const precioIngresado = parseFloat(document.getElementById("inputPrecio").value);
  const stockIngresado  = parseInt(document.getElementById("inputStock").value, 10);

  // Validación básica
  if (!nombreIngresado || isNaN(precioIngresado) || isNaN(stockIngresado)) {
    alert("Por favor, completa correctamente todos los campos.");
    return;
  }

  // Creamos el nuevo objeto literal
  const nuevoProducto = {
    id: Date.now(),
    nombre: nombreIngresado,
    precio: precioIngresado,
    stock: stockIngresado
  };

  // Lo agregamos a la colección
  productos.push(nuevoProducto);

  // Limpiamos los campos del formulario
  formNuevo.reset();

  // Actualizamos la interfaz
  renderizarCatalogo();
});

// Inicialización de la vista
renderizarCatalogo();
