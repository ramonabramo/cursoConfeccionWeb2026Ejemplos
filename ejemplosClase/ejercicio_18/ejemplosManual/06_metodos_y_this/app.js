/**
 * ============================================================================
 * EJERCICIO 18 · MANUAL OFICIAL DE OBJETOS LITERALES
 * Archivo Original: metodos-y-this.js (Página 10 del Manual)
 * Tema: 05 · Métodos y this
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

// --- CÓDIGO ORIGINAL DEL MANUAL (metodos-y-this.js) ---
const cuenta = {
  titular: "Lucía Navarro",
  saldo: 200,
  ingresar(cantidad) {
    this.saldo += cantidad;
    return `Ingreso de ${cantidad}€. Saldo actual: ${this.saldo}€`;
  },
  retirar(cantidad) {
    if (cantidad > this.saldo) {
      return "Operación denegada: saldo insuficiente.";
    }
    this.saldo -= cantidad;
    return `Retirada de ${cantidad}€. Saldo restante: ${this.saldo}€`;
  }
};

console.log(cuenta.ingresar(50));
console.log(cuenta.retirar(100));
console.log(cuenta.retirar(500));
