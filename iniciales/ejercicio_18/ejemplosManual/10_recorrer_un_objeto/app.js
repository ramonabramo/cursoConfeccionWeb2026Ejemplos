/**
 * ============================================================================
 * EJERCICIO 18 · MANUAL OFICIAL DE OBJETOS LITERALES
 * Archivo Original: recorrer-un-objeto.js (Página 14 del Manual)
 * Tema: 08 · Recorrer un objeto
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

// --- CÓDIGO ORIGINAL DEL MANUAL (recorrer-un-objeto.js) ---
const configuracion = {
  tema: "oscuro",
  idioma: "es",
  notificaciones: true
};

console.log(Object.keys(configuracion));
console.log(Object.values(configuracion));
console.log(Object.entries(configuracion));

for (const clave in configuracion) {
  console.log(clave + " -> " + configuracion[clave]);
}

for (const [clave, valor] of Object.entries(configuracion)) {
  console.log(`${clave}: ${valor}`);
}
