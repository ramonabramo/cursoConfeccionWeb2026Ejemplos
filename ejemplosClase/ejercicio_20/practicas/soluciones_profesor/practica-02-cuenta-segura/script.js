/* ============================================================
   PRÁCTICA 02 · CUENTA BANCARIA SEGURA  ·  SOLUCIÓN DEL PROFESOR
   Tema: Campos privados, getters y errores controlados
   ------------------------------------------------------------
   ENUNCIADO
   Vas a programar una cuenta bancaria cuyo saldo no se puede tocar desde fuera.
   Los datos internos serán campos privados (#) y solo se accederá a ellos mediante métodos y getters.
   Los errores (PIN incorrecto, saldo insuficiente...) se lanzan con throw y se muestran con try...catch.
   ------------------------------------------------------------
   TODO (PASOS A REALIZAR)
   [x] PASO 1: Crea la clase CuentaSegura
         Con los campos privados #saldo (0), #movimientos (array vacío) y #pin.
   [x] PASO 2: Constructor
         constructor(titular, pin): guarda el titular (público) y el pin (privado).
   [x] PASO 3: Método privado #registrar(texto)
         Añade el texto al array de movimientos.
   [x] PASO 4: Método ingresar(importe)
         Lanza new Error("Importe no válido") si importe <= 0. Si no, suma al saldo y registra el movimiento.
   [x] PASO 5: Método retirar(importe, pin)
         Lanza "PIN incorrecto" o "Saldo insuficiente" según el caso. Si todo es correcto, resta y registra.
   [x] PASO 6: Getters saldo e historial
         saldo devuelve el saldo. historial devuelve una COPIA del array: [...this.#movimientos].
   [x] PASO 7: Crea la cuenta y conecta los botones
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

class CuentaSegura {
    #saldo = 0;
    #movimientos = [];
    #pin;

    constructor(titular, pin) {
        this.titular = titular;
        this.#pin = pin;
    }

    #registrar(texto) {
        this.#movimientos.push(texto);
    }

    ingresar(importe) {
        if (importe <= 0) throw new Error("Importe no válido");
        this.#saldo += importe;
        this.#registrar(`ingreso ${importe}€`);
    }

    retirar(importe, pin) {
        if (pin !== this.#pin) throw new Error("PIN incorrecto");
        if (importe > this.#saldo) throw new Error("Saldo insuficiente");
        this.#saldo -= importe;
        this.#registrar(`retirada ${importe}€`);
    }

    get saldo() { return this.#saldo; }
    get historial() { return [...this.#movimientos]; }
}

const cuenta = new CuentaSegura("Lucía Navarro", "1234");

function pintar() {
    titular.textContent = cuenta.titular;
    saldo.textContent = cuenta.saldo.toFixed(2);
    historial.textContent = "";
    for (const mov of cuenta.historial) {
        const li = document.createElement("li");
        li.textContent = mov;
        historial.appendChild(li);
    }
}

btnIngresar.addEventListener("click", () => {
    try {
        cuenta.ingresar(Number(inpImporte.value));
        mensaje.textContent = "";
    } catch (error) {
        mensaje.textContent = error.message;
    }
    pintar();
});

btnRetirar.addEventListener("click", () => {
    try {
        cuenta.retirar(Number(inpImporte.value), inpPin.value);
        mensaje.textContent = "";
    } catch (error) {
        mensaje.textContent = error.message;
    }
    pintar();
});

pintar();
