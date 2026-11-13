/**
 * ============================================================================
 * EJERCICIO 18 · MANUAL OFICIAL DE OBJETOS LITERALES
 * Archivo Original: errores-con-this.js (Página 11 del Manual)
 * Tema: 05 · Errores con this
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

// --- CÓDIGO ORIGINAL DEL MANUAL (errores-con-this.js) ---
const gato = {
  nombre: "Misi",
  saludarMal: () => `Soy ${this.nombre}`,             // flecha: this NO es el objeto
  saludarBien() { return `Soy ${this.nombre}`; }     // método abreviado: correcto
};

console.log(gato.saludarBien());
console.log(gato.saludarMal());

// Perder this al separar el método del objeto
const suelto = gato.saludarBien;
console.log(suelto());

// Solución: fijar this con bind
const ligado = gato.saludarBien.bind(gato);
console.log(ligado());
