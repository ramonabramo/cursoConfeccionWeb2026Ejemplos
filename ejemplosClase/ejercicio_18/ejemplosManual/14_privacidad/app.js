/**
 * ============================================================================
 * EJERCICIO 18 · MANUAL OFICIAL DE OBJETOS LITERALES
 * Archivo Original: privacidad.js (Página 18 del Manual)
 * Tema: 11 · Privacidad y clausuras
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

// --- CÓDIGO ORIGINAL DEL MANUAL (privacidad.js) ---
// A) Convención: el guion bajo avisa, pero no protege
const usuario = {
  nombre: "Marta",
  _claveSecreta: "1234",
  saludar() { return `Hola, soy ${this.nombre}`; }
};
console.log(usuario._claveSecreta);

// B) Privacidad real con una clausura (función autoejecutable)
const cajaFuerte = (function () {
  const pinSecreto = "9876";
  let dinero = 1000;

  function registrar(texto) {
    console.log("[Auditoría] " + texto);
  }

  return {
    consultarSaldo(pin) {
      if (pin !== pinSecreto) return "PIN incorrecto";
      registrar("Consulta de saldo autorizada");
      return dinero + "€";
    }
  };
})();

console.log(cajaFuerte.dinero);
console.log(cajaFuerte.consultarSaldo("0000"));
console.log(cajaFuerte.consultarSaldo("9876"));
