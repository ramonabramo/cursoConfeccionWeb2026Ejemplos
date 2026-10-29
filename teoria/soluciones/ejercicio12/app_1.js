/* ==============================================================================
   EJERCICIO: El Supermercado Loco 🛒 (SOLUCIÓN CON UN SOLO ESCUCHADOR)
   
   OBJETIVO:
   Tenemos varios botones en pantalla (nuestros productos). Queremos que al hacer 
   clic en CUALQUIERA de ellos, ese producto se añada a nuestro array del carrito.
   
   TÉCNICA UTILIZADA: DELEGACIÓN DE EVENTOS (Event Delegation)
   En lugar de recorrer todos los botones con un bucle (for o forEach) y asociar 
   un escuchador a cada uno, colocamos UN ÚNICO escuchador de eventos en el elemento 
   padre contenedor (la estantería: div.estanteria).
   
   Aprovechando la propagación de eventos (burbujeo / event bubbling), cualquier 
   clic en un botón se propaga hacia arriba hasta llegar a la estantería. Desde allí, 
   usamos el "chivato" (evento.target) para comprobar si el clic se hizo en un botón 
   de producto antes de añadirlo.
   
   Paso a paso:
   1. Array global para almacenar los productos del carrito.
   2. Capturar la pantalla de salida (#pantallaCarrito) y el contenedor padre (.estanteria).
   3. Añadir UN SOLO addEventListener al contenedor padre (.estanteria).
   4. Dentro de la función del evento:
      a) Comprobar si el elemento pulsado es un botón de producto (con 
         evento.target.classList.contains("btn-producto") o evento.target.tagName === "BUTTON").
      b) Capturar el texto del botón con evento.target.textContent.
      c) Añadir el producto al array con carrito.push().
      d) Mostrar el carrito actualizado en pantalla.

      El mensaje a mostrar sería:
      🛒 Carrito (5 productos): 🍎 Manzana, 🍕 Pizza, 🍦 Helado, 🥩 Chuletón, 🥑 Aguacate
   ============================================================================== */

// 1. Array global para el carrito
const carrito = [];

// 2. Referencias al DOM (pantalla de salida y contenedor padre)
const pantallaCarrito = document.querySelector("#pantallaCarrito");
const estanteria = document.querySelector(".estanteria");

// 3. Asignamos UN SOLO escuchador al contenedor padre (Delegación de eventos)

estanteria.addEventListener("click", function (e) {
   const elementoPulsado = e.target;
   // if (elementoPulsado.tagName == 'BUTTON') {
   if (elementoPulsado.classList.contains("btn-producto")) {
      const producto = elementoPulsado.textContent;
      carrito.push(producto);
      pantallaCarrito.textContent = `🛒 Carrito (${carrito.length} productos): ${carrito.join(", ")}`;
   }

});
