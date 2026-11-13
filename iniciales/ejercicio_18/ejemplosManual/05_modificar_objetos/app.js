/**
 * ============================================================================
 * EJERCICIO 18 · MANUAL OFICIAL DE OBJETOS LITERALES
 * Archivo Original: modificar-objetos.js (Página 9 del Manual)
 * Tema: 04 · Modificar, añadir y borrar
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

// --- CÓDIGO ORIGINAL DEL MANUAL (modificar-objetos.js) ---
const producto = {
  codigo: "A-104",
  nombre: "Teclado Mecánico",
  precio: 59.90,
  enStock: true
};

producto.precio = 49.95;             // modificar
producto.categoria = "Periféricos";  // añadir
delete producto.codigo;              // borrar
console.log(producto);

// const impide reasignar la variable, no modificar su contenido
try {
  producto = {};
} catch (e) {
  console.log(e.name + ": " + e.message);
}

const fijo = Object.freeze({ iva: 21 }); // objeto congelado
fijo.iva = 10;                           // se ignora
console.log(fijo.iva);
