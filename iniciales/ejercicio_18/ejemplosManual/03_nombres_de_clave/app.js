/**
 * ============================================================================
 * EJERCICIO 18 · MANUAL OFICIAL DE OBJETOS LITERALES
 * Archivo Original: nombres-de-clave.js (Página 7 del Manual)
 * Tema: 02 · Nombres de clave
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

// --- CÓDIGO ORIGINAL DEL MANUAL (nombres-de-clave.js) ---
const especial = {
  "nombre completo": "Ana Ruiz", // espacios: necesita comillas
  "e-mail": "ana@ejemplo.com",   // guion: necesita comillas
  2024: "año",                   // un número también vale
  clase: "A"                     // identificador válido: sin comillas
};

console.log(especial["nombre completo"]);
console.log(especial["e-mail"]);
console.log(especial[2024]);
console.log(especial.clase);

const campo = "color";
const camiseta = { talla: "M", [campo]: "azul" }; // clave calculada
console.log(camiseta);
