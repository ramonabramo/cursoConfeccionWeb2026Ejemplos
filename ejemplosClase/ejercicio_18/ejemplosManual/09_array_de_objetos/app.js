/**
 * ============================================================================
 * EJERCICIO 18 · MANUAL OFICIAL DE OBJETOS LITERALES
 * Archivo Original: array-de-objetos.js (Página 13 del Manual)
 * Tema: 07 · Arrays de objetos
 * Profesor: Ramón Abramo · Santander 2026
 * ============================================================================
 */

(function () {
  const salidaEl = document.getElementById('consolaSalida');
  const originalLog = console.log;

  function imprimirEnDom(...args) {
    if (!salidaEl) return;
    const linea = args.map(arg => {
      if (typeof arg === 'object' && arg !== null) {
        try {
          return JSON.stringify(arg, null, 2);
        } catch (e) {
          return String(arg);
        }
      }
      return String(arg);
    }).join(' ');

    const p = document.createElement('div');
    p.className = 'linea-consola';
    p.textContent = '> ' + linea;
    salidaEl.appendChild(p);
  }

  console.log = function (...args) {
    originalLog.apply(console, args);
    imprimirEnDom(...args);
  };
})();

// --- CÓDIGO ORIGINAL DEL MANUAL (array-de-objetos.js) ---
const catalogo = [
  { id: 1, titulo: "Monitor 24 pulgadas", precio: 140, disponible: true },
  { id: 2, titulo: "Ratón Inalámbrico", precio: 25, disponible: false },
  { id: 3, titulo: "Alfombrilla XXL", precio: 18, disponible: true }
];

for (const item of catalogo) {
  if (item.disponible) {
    console.log(`✓ ${item.titulo} - ${item.precio}€`);
  }
}

const baratos = catalogo.filter(p => p.precio < 50);
const titulos = catalogo.map(p => p.titulo);
const raton = catalogo.find(p => p.id === 2);
const total = catalogo.reduce((suma, p) => suma + p.precio, 0);

console.log(baratos.length);
console.log(titulos);
console.log(raton.titulo);
console.log(total);
