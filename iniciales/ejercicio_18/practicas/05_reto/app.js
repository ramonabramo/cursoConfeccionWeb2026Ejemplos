/**
 * ============================================================================
 * EJERCICIO 19 - RETO FINAL: CUENTA BANCARIA CON SALDO PRIVADO
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web
 * Alumno/a: [Escribe aquí tu nombre]
 *
 * INSTRUCCIONES:
 * Crea con una clausura (función autoejecutable IIFE) el objeto "cuenta".
 * El saldo NO puede ser accesible desde fuera: cuenta.saldo debe dar undefined.
 * ============================================================================
 */

// Reflejo en visor web
(function setupConsola() {
  const salida = document.getElementById("salidaConsola");
  if (!salida) return;
  const originalLog = console.log;
  console.log = function(...args) {
    originalLog.apply(console, args);
    salida.textContent += args.map(a => typeof a === "object" ? JSON.stringify(a) : String(a)).join(" ") + "\n";
  };
})();

// ////////////////////////////////////////////////////////////////////////////
// RETO: cuenta bancaria con saldo privado
// Crea con una clausura (función autoejecutable) el objeto "cuenta":
// - titular: "Lucía Navarro" (propiedad pública)
// - ingresar(importe): suma al saldo y devuelve "Saldo: 300€" (rechaza importes <= 0)
// - retirar(importe): resta del saldo y devuelve "Saldo: 200€"
//   (devuelve "Operación denegada" si el importe es <= 0 o supera el saldo)
// - consultarSaldo(): devuelve el saldo actual
// - historial(): devuelve un array con un texto por movimiento
// El saldo NO puede ser accesible desde fuera: cuenta.saldo debe dar undefined
// ////////////////////////////////////////////////////////////////////////////

// TODO: Escribe aquí la asignación a const cuenta utilizando una IIFE:
// const cuenta = (function() {
//   let saldo = 0;
//   const movimientos = [];
//   return { ... };
// })();

const cuenta = null; // Reemplaza null por tu implementación

// Pruebas (no las modifiques)
if (cuenta) {
  console.log(cuenta.ingresar(300));
  console.log(cuenta.retirar(100));
  console.log(cuenta.retirar(900));
  console.log(cuenta.saldo);
  console.log(cuenta.consultarSaldo());
  console.log(cuenta.historial());
} else {
  console.log("⚠️ Implementa el objeto 'cuenta' para ver las pruebas.");
}
