/**
 * ============================================================================
 * PRÁCTICA 2: CARRITO CON OBJETOS LITERALES
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web
 * Alumno/a: [Escribe aquí tu nombre]
 *
 * INSTRUCCIONES:
 * En lugar de usar arrays paralelos (nombres[], precios[], cantidades[]),
 * vas a gestionar la cesta de la compra con un único array llamado `carrito`,
 * donde cada elemento es un OBJETO LITERAL con propiedades y métodos.
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// PASO 1: Constantes de acceso a los elementos del DOM
// ----------------------------------------------------------------------------
const inpNombre    = document.getElementById("inpNombre");
const inpPrecio    = document.getElementById("inpPrecio");
const inpCantidad  = document.getElementById("inpCantidad");
const btnAgregar   = document.getElementById("btnAgregar");
const listaCarrito = document.getElementById("listaCarrito");
const txtTotal     = document.getElementById("txtTotal");

// ----------------------------------------------------------------------------
// PASO 2: Array que almacenará todos los objetos literales de cada producto
// ----------------------------------------------------------------------------
const carrito = [];

// ----------------------------------------------------------------------------
// PASO 3: Función para recorrer el array de objetos y pintar el resultado en pantalla
// ----------------------------------------------------------------------------
function dibujarCarrito() {
  // 3.1. Vacía el contenido previo de la lista:
  // listaCarrito.innerHTML = "";

  // 3.2. Si el array está vacío, muestra un mensaje avisando:
  // if (carrito.length === 0) {
  //   listaCarrito.innerHTML = `<li class="item-vacio">El carrito está vacío.</li>`;
  //   txtTotal.textContent = "0.00";
  //   return;
  // }

  // 3.3. Inicializa una variable acumuladora para el total a pagar:
  // let sumaTotal = 0;

  // 3.4. Recorre el array 'carrito' con un bucle 'for (const prod of carrito)'
  // TODO: Dentro del bucle:
  // - Crea un elemento 'li' con document.createElement("li").
  // - Llama al método prod.subtotal() para obtener el coste de esa línea.
  // - Asigna el HTML del li: `<span>${prod.nombre} (x${prod.cantidad})</span><strong>${prod.subtotal().toFixed(2)} €</strong>`
  // - Inserta el 'li' en listaCarrito con listaCarrito.appendChild(li).
  // - Suma el importe a la variable acumuladora: sumaTotal += prod.subtotal();

  // 3.5. Al terminar el bucle, muestra el total formateado a 2 decimales en txtTotal:
  // txtTotal.textContent = sumaTotal.toFixed(2);
}

// ----------------------------------------------------------------------------
// PASO 4: Escuchador del botón "btnAgregar"
// ----------------------------------------------------------------------------
btnAgregar.addEventListener("click", () => {
  // 4.1. Lee los valores de los inputs del formulario:
  // const nombre   = inpNombre.value.trim();
  // const precio   = parseFloat(inpPrecio.value);
  // const cantidad = parseInt(inpCantidad.value, 10);

  // 4.2. Validación: comprueba que el nombre no esté vacío y que precio y cantidad > 0:
  // if (nombre === "" || isNaN(precio) || precio <= 0 || isNaN(cantidad) || cantidad <= 0) {
  //   alert("Por favor, introduce un nombre, precio y cantidad válidos.");
  //   return;
  // }

  // 4.3. Crea el OBJETO LITERAL 'nuevoProducto':
  // TODO: Crea el objeto con:
  // - nombre (propiedad)
  // - precio (propiedad)
  // - cantidad (propiedad)
  // - subtotal() (método que calcula y devuelve this.precio * this.cantidad)
  // const nuevoProducto = { ... };

  // 4.4. Añade 'nuevoProducto' al array 'carrito' usando .push():
  // carrito.push(nuevoProducto);

  // 4.5. Limpia los campos del formulario para el siguiente artículo:
  // inpNombre.value = "";
  // inpPrecio.value = "";
  // inpCantidad.value = "1";
  // inpNombre.focus();

  // 4.6. Llama a la función dibujarCarrito() para refrescar la lista y el total:
  // dibujarCarrito();
});
