/**
 * ============================================================================
 * EJERCICIO 18 · MANUAL OFICIAL DE OBJETOS LITERALES
 * Archivo Original: leer-propiedades.js (Página 8 del Manual)
 * Tema: 03 · Leer propiedades
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

// --- CÓDIGO ORIGINAL DEL MANUAL (leer-propiedades.js) ---
const coche = {
  marca: "Toyota",
  modelo: "Yaris",
  puertas: 5,
  extras: { aire: true }
};

console.log(coche.marca);            // notación de punto
console.log(coche["modelo"]);        // notación de corchetes
const clave = "puertas";
console.log(coche[clave]);           // clave guardada en una variable

console.log(coche.color);            // no existe: undefined
console.log("marca" in coche);       // ¿existe la clave?
console.log("color" in coche);
console.log(coche.garantia?.anios);  // ?. evita el error si falta garantia
