/**
 * ============================================================================
 * EJERCICIO 18 · MANUAL OFICIAL DE OBJETOS LITERALES
 * Archivo Original: tipos-de-valores.js (Página 6 del Manual)
 * Tema: 02 · Valores
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

// --- CÓDIGO ORIGINAL DEL MANUAL (tipos-de-valores.js) ---
const demo = {
  texto: "Hola",
  numero: 42,
  booleano: true,
  nada: null,
  lista: [1, 2, 3],
  anidado: { clave: "valor" },
  accion() { return "Soy un método"; }
};

console.log(typeof demo.texto);
console.log(typeof demo.lista);
console.log(typeof demo.accion);
console.log(demo.accion());
