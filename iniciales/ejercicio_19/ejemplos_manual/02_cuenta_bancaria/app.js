/**
 * ============================================================================
 * EJERCICIO 18 - EJEMPLO MANUAL 02: CUENTA BANCARIA Y 'THIS'
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 *
 * CONCEPTOS CLAVE TRATADOS:
 * 1. Declaración de métodos dentro de objetos literales (sintaxis abreviada `metodo() {}`).
 * 2. Uso fundamental de la palabra reservada `this` para acceder y modificar
 *    las propiedades del propio objeto desde sus métodos internos.
 * 3. ¿Por qué falla si omitimos `this`? Porque el motor de JavaScript buscaría
 *    una variable global o local llamada `saldo`, generando un ReferenceError.
 * 4. Validación de lógica de negocio dentro del método (saldo insuficiente).
 * ============================================================================
 */

// 1. OBJETO LITERAL CON PROPIEDADES Y MÉTODOS
const cuentaBancaria = {
  titular: "Lucía Navarro",
  saldo: 200.00,

  /**
   * Método para ingresar dinero.
   * Modifica this.saldo y devuelve un objeto de resultado.
   */
  ingresar(cantidad) {
    if (cantidad <= 0 || isNaN(cantidad)) {
      return { ok: false, msg: "La cantidad a ingresar debe ser mayor que 0." };
    }

    // Usamos 'this.saldo' para modificar la propiedad interna del objeto
    this.saldo += cantidad;

    return {
      ok: true,
      msg: `Ingreso de ${cantidad.toFixed(2)}€ realizado. Saldo actual: ${this.saldo.toFixed(2)}€`,
      tipo: "ingreso"
    };
  },

  /**
   * Método para retirar dinero con comprobación previa de fondos.
   */
  retirar(cantidad) {
    if (cantidad <= 0 || isNaN(cantidad)) {
      return { ok: false, msg: "La cantidad a retirar debe ser mayor que 0." };
    }

    // Comprobamos si el saldo actual permite la retirada
    if (cantidad > this.saldo) {
      return {
        ok: false,
        msg: `Operación denegada: saldo insuficiente (intentas retirar ${cantidad.toFixed(2)}€ pero tienes ${this.saldo.toFixed(2)}€).`,
        tipo: "denegado"
      };
    }

    // Si hay saldo suficiente, lo restamos de 'this.saldo'
    this.saldo -= cantidad;

    return {
      ok: true,
      msg: `Retirada de ${cantidad.toFixed(2)}€ completada. Saldo restante: ${this.saldo.toFixed(2)}€`,
      tipo: "reintegro"
    };
  }
};

// 2. REFERENCIAS AL DOM
const txtTitular = document.getElementById("txtTitular");
const txtSaldo = document.getElementById("txtSaldo");
const inpImporte = document.getElementById("inpImporte");
const btnIngresar = document.getElementById("btnIngresar");
const btnRetirar = document.getElementById("btnRetirar");
const cajaMensaje = document.getElementById("cajaMensaje");
const txtIcono = document.getElementById("txtIcono");
const txtMensaje = document.getElementById("txtMensaje");
const listaHistorial = document.getElementById("listaHistorial");

// 3. ACTUALIZACIÓN VISUAL
function actualizarVista() {
  txtTitular.textContent = cuentaBancaria.titular;
  txtSaldo.textContent = cuentaBancaria.saldo.toFixed(2);
}

function notificar(resultado) {
  if (resultado.ok) {
    cajaMensaje.className = "aviso-movimiento exito";
    txtIcono.textContent = "✅";
  } else {
    cajaMensaje.className = "aviso-movimiento error";
    txtIcono.textContent = "⚠️";
  }
  txtMensaje.textContent = resultado.msg;

  // Añadir al registro de operaciones
  const li = document.createElement("li");
  const ahora = new Date().toLocaleTimeString();
  li.innerHTML = `<span>[${ahora}] ${resultado.msg}</span>`;
  if (resultado.tipo === "ingreso") li.className = "log-ingreso";
  else if (resultado.tipo === "reintegro") li.className = "log-reintegro";
  else li.className = "log-denegado";

  listaHistorial.prepend(li);
}

// 4. LISTENERS DE EVENTOS
btnIngresar.addEventListener("click", () => {
  const cantidad = parseFloat(inpImporte.value);
  const res = cuentaBancaria.ingresar(cantidad); // Llamada al método
  actualizarVista();
  notificar(res);
});

btnRetirar.addEventListener("click", () => {
  const cantidad = parseFloat(inpImporte.value);
  const res = cuentaBancaria.retirar(cantidad); // Llamada al método
  actualizarVista();
  notificar(res);
});

// Inicialización
actualizarVista();
