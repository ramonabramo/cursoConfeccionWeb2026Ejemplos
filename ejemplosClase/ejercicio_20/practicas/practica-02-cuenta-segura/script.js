/* ============================================================
   PRÁCTICA 02 · CUENTA BANCARIA SEGURA
   Tema: Campos privados, getters y errores controlados
   ------------------------------------------------------------
   ENUNCIADO
   Vas a programar una cuenta bancaria cuyo saldo no se puede tocar desde fuera.
   Los datos internos serán campos privados (#) y solo se accederá a ellos mediante métodos y getters.
   Los errores (PIN incorrecto, saldo insuficiente...) se lanzan con throw y se muestran con try...catch.
   ------------------------------------------------------------
   TODO (PASOS A REALIZAR)
   [ ] PASO 1: Crea la clase CuentaSegura
         Con los campos privados #saldo (0), #movimientos (array vacío) y #pin.
   [ ] PASO 2: Constructor
         constructor(titular, pin): guarda el titular (público) y el pin (privado).
   [ ] PASO 3: Método privado #registrar(texto)
         Añade el texto al array de movimientos.
   [ ] PASO 4: Método ingresar(importe)
         Lanza new Error("Importe no válido") si importe <= 0. Si no, suma al saldo y registra el movimiento.
   [ ] PASO 5: Método retirar(importe, pin)
         Lanza "PIN incorrecto" o "Saldo insuficiente" según el caso. Si todo es correcto, resta y registra.
   [ ] PASO 6: Getters saldo e historial
         saldo devuelve el saldo. historial devuelve una COPIA del array: [...this.#movimientos].
   [ ] PASO 7: Crea la cuenta y conecta los botones
         const cuenta = new CuentaSegura("Lucía Navarro", "1234"). Cada botón usa try...catch y muestra el error en "mensaje".
   ------------------------------------------------------------
   NORMAS
   - Tu trabajo es SOLO este archivo (script.js).
   - No modifiques index.html ni estilos.css: ya están realizados.
   - Escribe el código debajo de cada comentario TODO.
   - Marca cada paso con [x] cuando lo termines.
   ============================================================ */

// ------------------------------------------------------------
// YA HECHO · elementos de la página (no hace falta tocarlos)
// ------------------------------------------------------------
const titular = document.getElementById("titular");
const saldo = document.getElementById("saldo");
const inpImporte = document.getElementById("inpImporte");
const inpPin = document.getElementById("inpPin");
const btnIngresar = document.getElementById("btnIngresar");
const btnRetirar = document.getElementById("btnRetirar");
const mensaje = document.getElementById("mensaje");
const historial = document.getElementById("historial");

// ------------------------------------------------------------
// TODO PASO 1: crea la clase CuentaSegura con los campos privados
//   #saldo = 0;   #movimientos = [];   #pin;
// TODO PASO 2: constructor(titular, pin)
//   El titular es público (this.titular) y el pin es privado (this.#pin)
// TODO PASO 3: método privado #registrar(texto)
//   Añade el texto a this.#movimientos
// TODO PASO 4: método ingresar(importe)
//   Si importe <= 0 lanza new Error("Importe no válido")
//   Si no, suma al saldo y registra "ingreso X€"
// TODO PASO 5: método retirar(importe, pin)
//   Si el pin no coincide lanza new Error("PIN incorrecto")
//   Si importe > saldo lanza new Error("Saldo insuficiente")
//   Si todo es correcto, resta y registra "retirada X€"
// TODO PASO 6: getters
//   get saldo()      -> devuelve this.#saldo
//   get historial()  -> devuelve una COPIA: [...this.#movimientos]
// ------------------------------------------------------------


// ------------------------------------------------------------
// TODO PASO 7: crea la cuenta y conecta la página
//   - const cuenta = new CuentaSegura("Lucía Navarro", "1234");
//   - Función pintar(): muestra titular, saldo (con 2 decimales) e historial (un <li> por movimiento)
//   - Botón Ingresar: dentro de try...catch llama a cuenta.ingresar(Number(inpImporte.value)),
//     limpia el mensaje y llama a pintar(). En catch escribe error.message en "mensaje".
//   - Botón Retirar: igual, con cuenta.retirar(importe, inpPin.value)
//   - Llama a pintar() al empezar
// ------------------------------------------------------------
