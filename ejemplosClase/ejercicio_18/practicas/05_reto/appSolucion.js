/**
 * ============================================================================
 * EJERCICIO 18 - RETO FINAL: SOLUCIÓN OFICIAL DEL PROFESOR
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 * ============================================================================
 */

// Reflejo en visor web
(function setupConsola() {
  const salida = document.getElementById("salidaConsola");
  if (!salida) return;
  salida.textContent = "";
  const originalLog = console.log;
  console.log = function(...args) {
    originalLog.apply(console, args);
    salida.textContent += args.map(a => typeof a === "object" ? JSON.stringify(a) : String(a)).join(" ") + "\n";
  };
})();

// RETO: cuenta bancaria con saldo privado
// Crea con una clausura (función autoejecutable) el objeto "cuenta":
const cuenta = (function() {
  // Variables 100% privadas protegidas en la clausura léxica
  let saldo = 0;
  const movimientos = [];

  return {
    titular: "Lucía Navarro",

    ingresar(importe) {
      if (importe <= 0 || isNaN(importe)) {
        return "Operación denegada";
      }
      saldo += importe;
      movimientos.push(`ingreso ${importe}€ -> ${saldo}€`);
      return `Saldo: ${saldo}€`;
    },

    retirar(importe) {
      if (importe <= 0 || importe > saldo || isNaN(importe)) {
        return "Operación denegada";
      }
      saldo -= importe;
      movimientos.push(`retirada ${importe}€ -> ${saldo}€`);
      return `Saldo: ${saldo}€`;
    },

    consultarSaldo() {
      return saldo;
    },

    historial() {
      return movimientos;
    }
  };
})();

// Pruebas (no las modifiques)
console.log(cuenta.ingresar(300));      // "Saldo: 300€"
console.log(cuenta.retirar(100));       // "Saldo: 200€"
console.log(cuenta.retirar(900));       // "Operación denegada"
console.log(cuenta.saldo);              // undefined
console.log(cuenta.consultarSaldo());   // 200
console.log(cuenta.historial());        // [ 'ingreso 300€ -> 300€', 'retirada 100€ -> 200€' ]
