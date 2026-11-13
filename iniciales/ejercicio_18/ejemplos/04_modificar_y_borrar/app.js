/**
 * ============================================================================
 * EJERCICIO 18 - MANUAL TEMA 04: MODIFICAR, AÑADIR, BORRAR Y CONGELAR
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web · Profesor: Ramón Abramo
 * ============================================================================
 */

const salida = document.getElementById("salidaConsola");
const estadoProducto = document.getElementById("estadoProducto");

function logSalida(...args) {
  console.log(...args);
  salida.textContent += args.map(a => typeof a === "object" ? JSON.stringify(a, null, 2) : String(a)).join(" ") + "\n";
}

let producto = {
  codigo: "A-104",
  nombre: "Teclado Mecánico",
  precio: 59.90,
  enStock: true
};

function refrescarVista() {
  estadoProducto.textContent = JSON.stringify(producto, null, 2);
}

logSalida("=== ESTADO INICIAL DEL OBJETO ===");
logSalida(producto);

// 1. Modificar
document.getElementById("btnModificar").addEventListener("click", () => {
  producto.precio = 49.95;
  refrescarVista();
  logSalida("✔ producto.precio modificado a 49.95:", producto);
});

// 2. Añadir nueva propiedad
document.getElementById("btnAgregar").addEventListener("click", () => {
  producto.categoria = "Periféricos";
  refrescarVista();
  logSalida("✔ Nueva propiedad 'categoria' añadida:", producto);
});

// 3. Borrar propiedad con delete y comprobar con 'in'
document.getElementById("btnBorrar").addEventListener("click", () => {
  delete producto.codigo;
  refrescarVista();
  logSalida("🗑️ delete producto.codigo ejecutado.");
  logSalida("¿Sigue existiendo 'codigo' in producto? ->", "codigo" in producto);
});

// 4. Object.freeze()
document.getElementById("btnCongelar").addEventListener("click", () => {
  Object.freeze(producto);
  logSalida("❄️ Object.freeze(producto) aplicado. El objeto es ahora inmutable.");
  try {
    producto.precio = 999; // Falla silenciosamente o lanza TypeError en strict mode
    logSalida("Intento de cambiar precio tras freeze. Precio actual:", producto.precio);
  } catch (e) {
    logSalida("Error al modificar objeto congelado:", e.message);
  }
});

refrescarVista();
