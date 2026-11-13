/**
 * ============================================================================
 * EJERCICIO 18 · MANUAL OFICIAL DE OBJETOS LITERALES
 * Archivo Original: copiar-objetos.js (Página 15 del Manual)
 * Tema: 09 · Referencias y copias
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

// --- CÓDIGO ORIGINAL DEL MANUAL (copiar-objetos.js) ---
const a = { nombre: "Ana", notas: [7, 8] };

const b = a;                           // NO es una copia: apunta al mismo objeto
b.nombre = "Berta";
console.log(a.nombre);
console.log(a === b);

const c = { ...a };                    // copia superficial
c.nombre = "Carla";
c.notas.push(10);                      // el array interno se comparte
console.log(a.nombre, a.notas);

const d = structuredClone(a);          // copia profunda
d.notas.push(5);
console.log(a.notas, d.notas);

console.log({} === {});                // dos objetos distintos nunca son iguales
