/**
 * ============================================================================
 * EJERCICIO 18 · MANUAL OFICIAL DE OBJETOS LITERALES
 * Archivo Original: lo-que-json-pierde.js (Página 21 del Manual)
 * Tema: 12 · Lo que JSON pierde
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

// --- CÓDIGO ORIGINAL DEL MANUAL (lo-que-json-pierde.js) ---
const objeto = {
  nombre: "Ana",
  saludar() { return "Hola"; },
  pendiente: undefined,
  registro: new Date("2026-01-15T10:30:00Z")
};

const texto = JSON.stringify(objeto);
console.log(texto);

const vuelta = JSON.parse(texto);
console.log(typeof vuelta.registro);
console.log(vuelta.saludar);

try {
  JSON.parse("{nombre: 'Ana'}"); // JSON inválido: sin comillas dobles
} catch (e) {
  console.log(e.name);
}
