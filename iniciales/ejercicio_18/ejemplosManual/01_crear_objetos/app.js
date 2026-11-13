/**
 * ============================================================================
 * EJERCICIO 18 · MANUAL OFICIAL DE OBJETOS LITERALES
 * Archivo Original: crear-objetos.js (Página 5 del Manual)
 * Tema: 02 · Crear objetos
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

// --- CÓDIGO ORIGINAL DEL MANUAL (crear-objetos.js) ---
// Forma 1: creación directa con sus propiedades (la más habitual)
const alumno = {
  nombre: "Elena",
  edad: 20,
  matriculado: true
};

// Forma 2: objeto vacío y asignación posterior
const ficha = {};
ficha.curso = "JavaScript Básico";
ficha.aula = 104;

// Forma 3: abreviada, a partir de variables existentes (ES6)
const marca = "Logitech";
const modelo = "MX Master";
const raton = { marca, modelo }; // equivale a { marca: marca, modelo: modelo }

console.log(alumno);
console.log(ficha);
console.log(raton);
