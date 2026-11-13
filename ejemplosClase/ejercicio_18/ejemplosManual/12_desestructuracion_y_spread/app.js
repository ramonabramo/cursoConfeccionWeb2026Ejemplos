/**
 * ============================================================================
 * EJERCICIO 18 · MANUAL OFICIAL DE OBJETOS LITERALES
 * Archivo Original: desestructuracion-y-spread.js (Página 16 del Manual)
 * Tema: 10 · Desestructuración y spread
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

// --- CÓDIGO ORIGINAL DEL MANUAL (desestructuracion-y-spread.js) ---
const alumno = { nombre: "Elena", edad: 20, curso: "DAW" };

const { nombre, edad } = alumno;                                    // extraer propiedades
const { curso: titulacion, aula = 104 } = alumno;                   // renombrar y valor por defecto
console.log(nombre, edad, titulacion, aula);

const base = { tema: "claro", idioma: "es" };
const mia = { ...base, tema: "oscuro", notificaciones: true };      // combinar
console.log(mia);

function presentar({ nombre, edad = 18 }) {                         // objeto como argumento
  return `${nombre} tiene ${edad} años`;
}
console.log(presentar(alumno));
console.log(presentar({ nombre: "Marcos" }));
