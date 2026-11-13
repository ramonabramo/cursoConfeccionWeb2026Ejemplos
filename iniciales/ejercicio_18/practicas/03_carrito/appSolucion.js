/**
 * ============================================================================
 * EJERCICIO 19 - PRÁCTICA 3: SOLUCIÓN OFICIAL DEL PROFESOR
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 * ============================================================================
 */

// PASO 1 (ya hecho): constantes que apuntan a los elementos del DOM
const inpNombre    = document.getElementById("inpNombre");
const inpPrecio    = document.getElementById("inpPrecio");
const inpCantidad  = document.getElementById("inpCantidad");
const btnAgregar   = document.getElementById("btnAgregar");
const listaCarrito = document.getElementById("listaCarrito");
const txtTotal     = document.getElementById("txtTotal");

// PASO 2 (ya hecho): array que almacenará un objeto literal por cada producto
const carrito = [];

// PASO 3: escuchador del botón "Añadir al carrito"
btnAgregar.addEventListener("click", () => {
  // 3.1 Lee los valores de los inputs (usa Number() para precio y cantidad)
  const nombre = inpNombre.value.trim();
  const precio = Number(inpPrecio.value);
  const cantidad = Number(inpCantidad.value);

  // 3.2 Valida: el nombre no puede estar vacío y precio y cantidad deben ser mayores que 0
  if (nombre === "" || precio <= 0 || cantidad <= 0 || isNaN(precio) || isNaN(cantidad)) {
    return;
  }

  // 3.3 Crea el objeto literal "nuevoProducto" con las propiedades
  //     nombre, precio, cantidad y el método subtotal()
  const nuevoProducto = {
    nombre,
    precio,
    cantidad,
    subtotal() {
      return this.precio * this.cantidad;
    }
  };

  // 3.4 Añádelo a "carrito" con push(), limpia los inputs y llama a dibujarCarrito()
  carrito.push(nuevoProducto);
  inpNombre.value = "";
  inpPrecio.value = "";
  inpCantidad.value = "1";
  dibujarCarrito();
});

// PASO 4: función que recorre el array de objetos y muestra el resultado
function dibujarCarrito() {
  // 4.1 Vacía la lista (textContent = "") y crea let sumaTotal = 0
  listaCarrito.textContent = "";
  let sumaTotal = 0;

  // 4.2 Recorre "carrito" con for (const prod of carrito)
  for (const prod of carrito) {
    // 4.3 Crea un <li> por producto con su nombre, sus unidades y su subtotal()
    const li = document.createElement("li");
    li.textContent = `${prod.nombre} (x${prod.cantidad}) - ${prod.subtotal().toFixed(2)} €`;
    listaCarrito.appendChild(li);

    // 4.4 Acumula en sumaTotal
    sumaTotal += prod.subtotal();
  }

  // Muestra sumaTotal.toFixed(2) en txtTotal
  txtTotal.textContent = sumaTotal.toFixed(2);
}
