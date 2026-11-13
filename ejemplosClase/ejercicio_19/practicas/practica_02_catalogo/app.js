/**
 * ============================================================================
 * PRÁCTICA 2: MINI-CATÁLOGO DE PRODUCTOS (ARRAY DE OBJETOS)
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web
 * Alumno/a: [Escribe aquí tu nombre]
 * Profesor: Ramón Abramo (Santander, 2026)
 *
 * 🎯 OBJETIVOS:
 * 1. Manipular una lista de entidades mediante un Array de Objetos Literales.
 * 2. Recorrer el array con un bucle 'for...of' para generar dinámicamente el DOM.
 * 3. Localizar un objeto específico por su 'id' usando .find() y modificar su stock.
 * 4. Añadir nuevos objetos al array mediante .push() a través de un formulario.
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// PASO 1: Captura las referencias a los elementos del DOM
// ----------------------------------------------------------------------------
const contenedor  = document.getElementById("contenedorProductos");
const formNuevo   = document.getElementById("formNuevoProducto");
const conteoTotal = document.getElementById("conteoTotal");

// ----------------------------------------------------------------------------
// PASO 2: Declara el array "productos" con 3 objetos literales iniciales
// ----------------------------------------------------------------------------
const productos = [
  // TODO 2.1: Crea 3 objetos con las propiedades: id, nombre, precio, stock
  // - Objeto 1: id: 1, nombre: "Cuaderno A4", precio: 2.50, stock: 5
  // - Objeto 2: id: 2, nombre: "Bolígrafo Azul", precio: 1.20, stock: 12
  // - Objeto 3: id: 3, nombre: "Mochila Escolar", precio: 24.90, stock: 2
];

// ----------------------------------------------------------------------------
// PASO 3: Función para renderizar el catálogo en el DOM
// ----------------------------------------------------------------------------
function renderizarCatalogo() {
  // TODO 3.1: Vacía el contenedor (contenedor.innerHTML = "") para repintar desde cero.
  // TODO 3.2: Actualiza conteoTotal.textContent con el total de productos (productos.length).
  // TODO 3.3: Recorre el array productos con un bucle for...of:
  //   - Por cada producto, crea un elemento <div> con document.createElement("div").
  //   - Asígnale la clase: tarjeta.className = "tarjeta-producto".
  //   - Genera su HTML interior con innerHTML incluyendo:
  //       * <h3> con el nombre del producto
  //       * <p class="precio"> con el precio formateado a 2 decimales (€)
  //       * <p class="stock-info"> con el stock restante
  //       * <button class="btn-vender" data-id="...">Vender 1 ud.</button>
  //         (Si el stock es 0, añade el atributo 'disabled' y pon texto "Agotado").
  //   - Añade la tarjeta al contenedor con contenedor.appendChild(tarjeta).
  // TODO 3.4: Asocia el evento click a los botones .btn-vender:
  //   - Lee el data-id del botón pulsado.
  //   - Llama a la función venderProducto(id).
}

// ----------------------------------------------------------------------------
// PASO 4: Función para restar 1 unidad de stock
// ----------------------------------------------------------------------------
function venderProducto(id) {
  // TODO 4.1: Busca el producto correspondiente dentro del array usando productos.find(...)
  // TODO 4.2: Si el producto existe y tiene stock > 0:
  //   - Réstale 1 a su propiedad stock.
  //   - Llama a renderizarCatalogo() para reflejar el cambio en pantalla.
}

// ----------------------------------------------------------------------------
// PASO 5: Manejo del formulario de alta rápida
// ----------------------------------------------------------------------------
formNuevo.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita que la página se recargue

  // TODO 5.1: Lee los valores de los inputs: inputNombre, inputPrecio y inputStock.
  // Recuerda convertir el precio con parseFloat() y el stock con parseInt().

  // TODO 5.2: Crea un nuevo objeto literal con:
  //   - id: Date.now() (un id numérico único basado en el tiempo)
  //   - nombre, precio, stock

  // TODO 5.3: Añade el nuevo objeto al array productos con productos.push(nuevoObjeto).

  // TODO 5.4: Limpia el formulario con formNuevo.reset() y vuelve a llamar a renderizarCatalogo().
});

// Renderizado inicial al cargar el script
renderizarCatalogo();
