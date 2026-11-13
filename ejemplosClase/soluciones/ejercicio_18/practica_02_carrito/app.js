/**
 * ============================================================================
 * PRÁCTICA 2: CARRITO CON OBJETOS LITERALES · SOLUCIÓN OFICIAL DEL PROFESOR
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 *
 * EXPLICACIÓN DE LA SOLUCIÓN:
 * En lugar de gestionar listas dispersas con índices idénticos, agrupamos
 * cada artículo en un objeto literal:
 * {
 *    nombre: "...",
 *    precio: 0.0,
 *    cantidad: 1,
 *    subtotal() { return this.precio * this.cantidad; }
 * }
 * Esto permite manipular colecciones complejas con sencillez y total coherencia.
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// PASO 1: Constantes de acceso al DOM
// ----------------------------------------------------------------------------
const inpNombre    = document.getElementById("inpNombre");
const inpPrecio    = document.getElementById("inpPrecio");
const inpCantidad  = document.getElementById("inpCantidad");
const btnAgregar   = document.getElementById("btnAgregar");
const listaCarrito = document.getElementById("listaCarrito");
const txtTotal     = document.getElementById("txtTotal");

// ----------------------------------------------------------------------------
// PASO 2: Array de objetos literales (Colección del carrito)
// ----------------------------------------------------------------------------
const carrito = [];

// ----------------------------------------------------------------------------
// PASO 3: Función para renderizar el carrito y calcular el importe total
// ----------------------------------------------------------------------------
function dibujarCarrito() {
  listaCarrito.innerHTML = "";

  if (carrito.length === 0) {
    listaCarrito.innerHTML = `<li class="item-vacio">El carrito está vacío. Añade algún producto.</li>`;
    txtTotal.textContent = "0.00";
    return;
  }

  let sumaTotal = 0;

  // Recorrido de los objetos literales con bucle for...of
  carrito.forEach((prod, indice) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>
        <strong>${prod.nombre}</strong>
        <small style="color: #64748b; margin-left: 6px;">(${prod.cantidad} uds × ${prod.precio.toFixed(2)} €)</small>
      </span>
      <span>
        <strong style="color: #0f172a;">${prod.subtotal().toFixed(2)} €</strong>
        <button class="btn-eliminar-linea" title="Quitar este producto" data-index="${indice}">❌</button>
      </span>
    `;

    listaCarrito.appendChild(li);

    // Acumulamos el cálculo llamando al método subtotal() de cada objeto
    sumaTotal += prod.subtotal();
  });

  // Mostrar el total formateado
  txtTotal.textContent = sumaTotal.toFixed(2);

  // Asignar eventos de borrado individual
  document.querySelectorAll(".btn-eliminar-linea").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = parseInt(e.target.getAttribute("data-index"), 10);
      carrito.splice(idx, 1);
      dibujarCarrito();
    });
  });
}

// ----------------------------------------------------------------------------
// PASO 4: Escuchador del botón "Añadir al carrito"
// ----------------------------------------------------------------------------
btnAgregar.addEventListener("click", () => {
  const nombre = inpNombre.value.trim();
  const precio = parseFloat(inpPrecio.value);
  const cantidad = parseInt(inpCantidad.value, 10);

  // Validación de entradas
  if (nombre === "") {
    alert("Por favor, introduce el nombre del producto.");
    inpNombre.focus();
    return;
  }

  if (isNaN(precio) || precio <= 0) {
    alert("Introduce un precio numérico válido y superior a 0 €.");
    inpPrecio.focus();
    return;
  }

  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Introduce una cantidad válida (al menos 1 unidad).");
    inpCantidad.focus();
    return;
  }

  // Creación del objeto literal con método interno usando 'this'
  const nuevoProducto = {
    nombre: nombre,
    precio: precio,
    cantidad: cantidad,
    subtotal() {
      return this.precio * this.cantidad;
    }
  };

  // Añadimos el nuevo objeto a la colección
  carrito.push(nuevoProducto);

  // Limpiamos los inputs y reenfocamos
  inpNombre.value = "";
  inpPrecio.value = "";
  inpCantidad.value = "1";
  inpNombre.focus();

  // Actualizamos la vista
  dibujarCarrito();
});

// Inicialización de la vista
dibujarCarrito();
