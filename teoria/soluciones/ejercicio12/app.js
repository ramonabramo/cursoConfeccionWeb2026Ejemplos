/* ==============================================================================
   EJERCICIO: El Supermercado Loco 🛒 (SOLUCIÓN)
   
   OBJETIVO:
   Tenemos varios botones en pantalla (nuestros productos). Queremos que al hacer 
   clic en CUALQUIERA de ellos, ese producto se añada a nuestro array del carrito.
   
   Paso a paso:
   1. Usar querySelectorAll para capturar todos los botones a la vez.
   2. Añadir el addEventListener a cada botón con un bucle for.
   3. En la función del evento, capturar qué botón exacto se pulsó usando el chivato 
      (evento.target.textContent), meterlo en el array con .push() y mostrarlo.
   ============================================================================== */

// 1. Array global para el carrito
const carrito = [];

// 2. Referencia al DOM de la pantalla de salida
const pantallaCarrito = document.querySelector("#pantallaCarrito");

// 3. Capturamos todos los botones de producto (NodeList)
const botonesProductos = document.querySelectorAll(".btn-producto");

// 4. Asignamos el escuchador a cada botón mediante un bucle for
for (let i = 0; i < botonesProductos.length; i++) {
    botonesProductos[i].addEventListener("click", function (evento) {
        // Capturamos el texto del botón pulsado
        const producto = evento.target.textContent;

        // Añadimos el producto al array del carrito
        carrito.push(producto);

        // Mostramos el carrito actualizado en la pantalla
        pantallaCarrito.textContent = `🛒 Carrito (${carrito.length} productos): ${carrito.join(", ")}`;
    });
}
