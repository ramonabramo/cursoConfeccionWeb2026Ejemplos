/**
 * ============================================================================
 * EJERCICIO 18 - EJEMPLO MANUAL 06: PRIVACIDAD Y PATRÓN MÓDULO (IIFE)
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 *
 * CONCEPTOS CLAVE TRATADOS:
 * 1. Todos los miembros de un objeto literal son públicos por definición en JS.
 * 2. La convención visual con guion bajo (`_pinSecreto`) es una advertencia
 *    entre programadores, pero el motor de JS permite su modificación libre.
 * 3. Patrón Módulo (IIFE + Clausura): una función autoejecutable define
 *    variables privadas en su ámbito léxico y retorna un objeto literal con
 *    los únicos métodos que tienen permiso para interactuar con ellas.
 * 4. La sintaxis `#campoPrivado` pertenece a las clases (`class`), no a los
 *    objetos literales.
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// CASO A: OBJETO LITERAL DIRECTO (Falsa privacidad con _)
// ----------------------------------------------------------------------------
const usuarioVulnerable = {
  nombre: "Marta",
  _pinSecreto: "1234", // Convención: cualquier código externo puede leerlo/cambiarlo
  _saldo: 500
};

const pinCasoA = document.getElementById("pinCasoA");
const saldoCasoA = document.getElementById("saldoCasoA");
const btnHackearA = document.getElementById("btnHackearA");
const msgA = document.getElementById("msgA");

btnHackearA.addEventListener("click", () => {
  // Alteramos la propiedad privada directamente desde fuera
  usuarioVulnerable._pinSecreto = "0000";
  usuarioVulnerable._saldo = 0;

  pinCasoA.textContent = usuarioVulnerable._pinSecreto;
  saldoCasoA.textContent = `${usuarioVulnerable._saldo} €`;

  msgA.style.color = "#f87171";
  msgA.textContent = "⚠️ ¡Vulnerado! El PIN se ha cambiado a '0000' y el saldo se ha vaciado sin ninguna restricción.";
});

// ----------------------------------------------------------------------------
// CASO B: PRIVACIDAD REAL MEDIANTE PATRÓN MÓDULO (IIFE + CLAUSURA)
// ----------------------------------------------------------------------------
const cajaFuerte = (function() {
  // Variables 100% privadas (inaccesibles directamente desde fuera)
  let _pinSecreto = "9876";
  let _dinero = 1000;

  function _registrar(texto) {
    console.log(`[AUDITORÍA BANCARIA]: ${texto}`);
  }

  // Devolvemos el objeto literal exponiendo ÚNICAMENTE la interfaz pública
  return {
    consultarSaldo(pinIntroducido) {
      if (pinIntroducido !== _pinSecreto) {
        _registrar("Intento fallido de acceso con PIN erróneo.");
        return { ok: false, msg: "❌ PIN incorrecto. Acceso a la caja denegado." };
      }

      _registrar("Consulta de saldo autorizada con éxito.");
      return { ok: true, msg: `✅ Acceso autorizado. Saldo en caja: ${_dinero} €` };
    }
  };
})();

const valBlindadoDinero = document.getElementById("valBlindadoDinero");
const valBlindadoPin = document.getElementById("valBlindadoPin");
const inpPinSeguro = document.getElementById("inpPinSeguro");
const btnConsultarSeguro = document.getElementById("btnConsultarSeguro");
const msgB = document.getElementById("msgB");

// Comprobación de que desde fuera devuelven 'undefined'
valBlindadoDinero.textContent = String(cajaFuerte._dinero); // undefined
valBlindadoPin.textContent = String(cajaFuerte._pinSecreto); // undefined

btnConsultarSeguro.addEventListener("click", () => {
  const pin = inpPinSeguro.value.trim();
  const res = cajaFuerte.consultarSaldo(pin);

  if (res.ok) {
    msgB.style.color = "#4ade80";
  } else {
    msgB.style.color = "#f87171";
  }
  msgB.textContent = res.msg;
});
