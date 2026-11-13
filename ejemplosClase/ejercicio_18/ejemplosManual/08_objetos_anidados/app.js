/**
 * ============================================================================
 * EJERCICIO 18 · MANUAL OFICIAL DE OBJETOS LITERALES
 * Archivo Original: objetos-anidados.js (Página 12 del Manual)
 * Tema: 06 · Objetos anidados
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

// --- CÓDIGO ORIGINAL DEL MANUAL (objetos-anidados.js) ---
const estudiante = {
  nombre: "Carlos Ruiz",
  direccion: {
    calle: "Av. de los Castros, 42",
    ciudad: "Santander",
    cp: "39005"
  },
  calificaciones: [7.5, 8.0, 9.5],
  calcularMedia() {
    let suma = 0;
    for (const nota of this.calificaciones) {
      suma += nota;
    }
    return (suma / this.calificaciones.length).toFixed(2);
  }
};

console.log(estudiante.direccion.ciudad);
console.log(estudiante.calificaciones[0]);
console.log(estudiante.calcularMedia());

estudiante.direccion.ciudad = "Torrelavega";
console.log(estudiante.direccion);
