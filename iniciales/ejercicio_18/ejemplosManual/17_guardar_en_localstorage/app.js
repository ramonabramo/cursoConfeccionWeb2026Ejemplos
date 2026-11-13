/**
 * ============================================================================
 * EJERCICIO 18 · MANUAL OFICIAL DE OBJETOS LITERALES
 * Archivo Original: guardar-en-localstorage.js (Página 22 del Manual)
 * Tema: 12 · JSON y localStorage
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

// --- CÓDIGO ORIGINAL DEL MANUAL (guardar-en-localstorage.js) ---
const alumno = { nombre: "Ana", edad: 22 };

// Guardar: localStorage solo admite texto
localStorage.setItem("alumno", JSON.stringify(alumno));

// Recuperar: texto -> objeto
const recuperado = JSON.parse(localStorage.getItem("alumno"));
console.log(recuperado.nombre);
