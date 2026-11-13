/**
 * ============================================================================
 * EJERCICIO 18 - MANUAL TEMA 07: ARRAYS DE OBJETOS (FILTER, MAP, REDUCE)
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web · Profesor: Ramón Abramo
 * ============================================================================
 */

const salida = document.getElementById("salidaConsola");
const cajaResultado = document.getElementById("cajaResultado");

function logSalida(...args) {
  console.log(...args);
  salida.textContent += args.map(a => typeof a === "object" ? JSON.stringify(a, null, 2) : String(a)).join(" ") + "\n";
}

const catalogo = [
  { id: 1, titulo: "Monitor 24 pulgadas", precio: 140, disponible: true },
  { id: 2, titulo: "Ratón Inalámbrico",   precio: 25,  disponible: false },
  { id: 3, titulo: "Alfombrilla XXL",     precio: 18,  disponible: true },
  { id: 4, titulo: "Teclado Mecánico",    precio: 60,  disponible: true }
];

logSalida("=== CATÁLOGO DE PRODUCTOS (4 ÍTEMS) ===");
logSalida(catalogo);

// 1. Mostrar Todos
document.getElementById("btnTodos").addEventListener("click", () => {
  cajaResultado.innerHTML = catalogo.map(p => `• ${p.titulo} - ${p.precio}€ (${p.disponible ? '✔ Stock' : '✖ Agotado'})`).join("<br>");
  logSalida("Listado completo:", catalogo);
});

// 2. filter()
document.getElementById("btnDisponibles").addEventListener("click", () => {
  const disponibles = catalogo.filter(p => p.disponible);
  cajaResultado.innerHTML = disponibles.map(p => `• <strong>${p.titulo}</strong> - ${p.precio}€`).join("<br>");
  logSalida("Artículos disponibles (filter):", disponibles);
});

// 3. map()
document.getElementById("btnNombres").addEventListener("click", () => {
  const titulos = catalogo.map(p => p.titulo);
  cajaResultado.innerHTML = `Titulos extraídos: <code>${titulos.join(" | ")}</code>`;
  logSalida("Array de títulos (map):", titulos);
});

// 4. reduce()
document.getElementById("btnTotal").addEventListener("click", () => {
  const total = catalogo.reduce((acc, p) => acc + p.precio, 0);
  cajaResultado.innerHTML = `Importe acumulado del catálogo: <strong>${total.toFixed(2)} €</strong>`;
  logSalida("Importe total (reduce):", `${total.toFixed(2)} €`);
});
