/**
 * ============================================================================
 * EJERCICIO 18 · MANUAL OFICIAL DE OBJETOS LITERALES
 * Archivo Original: getters-y-setters.js (Página 17 del Manual)
 * Tema: 11 · Getters, setters y privacidad
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

// --- CÓDIGO ORIGINAL DEL MANUAL (getters-y-setters.js) ---
const circulo = {
  radio: 5,
  get diametro() {
    return this.radio * 2;
  },
  set diametro(valor) {
    this.radio = valor / 2;
  }
};

console.log(circulo.diametro); // se lee como una propiedad
circulo.diametro = 40;         // se asigna como una propiedad
console.log(circulo.radio);
