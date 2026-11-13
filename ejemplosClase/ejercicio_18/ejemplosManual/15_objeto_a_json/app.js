/**
 * ============================================================================
 * EJERCICIO 18 · MANUAL OFICIAL DE OBJETOS LITERALES
 * Archivo Original: objeto-a-json.js (Página 20 del Manual)
 * Tema: 12 · Convertir con JSON
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

// --- CÓDIGO ORIGINAL DEL MANUAL (objeto-a-json.js) ---
const alumno = { nombre: "Ana", edad: 22, notas: [8, 9], activo: true };

const texto = JSON.stringify(alumno);       // objeto -> texto JSON
console.log(texto);
console.log(typeof texto);

const copia = JSON.parse(texto);            // texto JSON -> objeto
console.log(copia.nombre, copia.notas[1]);

console.log(JSON.stringify(alumno, null, 2)); // con sangría para leerlo mejor
