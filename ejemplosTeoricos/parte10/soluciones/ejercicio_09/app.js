// ==========================================================================
// EJERCICIO 09 (Guiado): Campos Privados (#) y Getters / Setters
// OBJETIVO: Implementar campo privado #saldo, getter de lectura y métodos controlados.
// ==========================================================================

// 1. variables y constantes de estado
class CuentaBancaria {
    #saldo; // Campo privado estricto en runtime
    #pin;

    constructor(titular, saldoInicial = 0, pin = '1234') {
        this.titular = titular;
        this.#saldo = Math.max(saldoInicial, 0);
        this.#pin = pin;
    }

    // Getter para permitir lectura controlada
    get saldo() {
        return this.#saldo;
    }

    // Setter para cambiar el PIN con validación de 4 dígitos
    set pin(nuevoPin) {
        if (/^\d{4}$/.test(nuevoPin)) {
            this.#pin = nuevoPin;
        } else {
            throw new Error('El PIN debe tener exactamente 4 dígitos numéricos.');
        }
    }

    ingresar(cantidad) {
        if (cantidad > 0) {
            this.#saldo += cantidad;
            return true;
        }
        return false;
    }

    retirar(cantidad, pinIntroducido) {
        if (pinIntroducido !== this.#pin) {
            return { exito: false, mensaje: 'PIN incorrecto. Operación denegada.' };
        }
        if (cantidad <= 0 || cantidad > this.#saldo) {
            return { exito: false, mensaje: 'Fondos insuficientes o importe inválido.' };
        }
        this.#saldo -= cantidad;
        return { exito: true, mensaje: `Retirada de ${cantidad.toFixed(2)} € completada.` };
    }
}

const cuenta = new CuentaBancaria('Laura Morales', 1500, '1234');

// 2. constantes al DOM
const saldoCuentaVisual = document.querySelector('#saldoCuentaVisual');
const inputCantidad = document.querySelector('#inputCantidadOperacion');
const inputPin = document.querySelector('#inputPinOperacion');

const btnIngresar = document.querySelector('#btnIngresar');
const btnRetirar = document.querySelector('#btnRetirar');
const btnHackear = document.querySelector('#btnHackearPrivado');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function actualizarDisplaySaldo() {
    // Usamos el getter 'cuenta.saldo' (sin paréntesis)
    saldoCuentaVisual.textContent = `${cuenta.saldo.toFixed(2)} €`;
}

function realizarIngreso() {
    const cantidad = Number(inputCantidad.value);

    if (isNaN(cantidad) || cantidad <= 0) {
        resultado.textContent = '⚠️ Introduce un importe positivo válido para ingresar.';
        resultado.className = 'resultado alerta-peligro';
        return;
    }

    cuenta.ingresar(cantidad);
    actualizarDisplaySaldo();

    resultado.textContent = `✅ Ingreso de ${cantidad.toFixed(2)} € completado. Saldo actual: ${cuenta.saldo.toFixed(2)} €.`;
    resultado.className = 'resultado alerta-exito';
}

function realizarRetirada() {
    const cantidad = Number(inputCantidad.value);
    const pin = inputPin.value;

    const respuesta = cuenta.retirar(cantidad, pin);

    if (respuesta.exito) {
        actualizarDisplaySaldo();
        resultado.textContent = `✅ ${respuesta.mensaje} Saldo restante: ${cuenta.saldo.toFixed(2)} €.`;
        resultado.className = 'resultado alerta-exito';
    } else {
        resultado.textContent = `❌ ${respuesta.mensaje}`;
        resultado.className = 'resultado alerta-peligro';
    }
}

function probarAccesoIlegal() {
    resultado.textContent = '🛡️ IMPOSIBLE: Si intentas escribir cuenta.#saldo fuera de la clase, el motor de JavaScript dispara "SyntaxError: Private field #saldo must be declared in an enclosing class". ¡La privacidad con # es 100% infranqueable!';
    resultado.className = 'resultado alerta-espera';
}

// 4. funciones de eventos
function alPulsarIngresar() {
    realizarIngreso();
}

function alPulsarRetirar() {
    realizarRetirada();
}

function alPulsarHackear() {
    probarAccesoIlegal();
}

// 5. escuchadores de eventos (addEventListener)
btnIngresar.addEventListener('click', alPulsarIngresar);
btnRetirar.addEventListener('click', alPulsarRetirar);
btnHackear.addEventListener('click', alPulsarHackear);

// Inicializar saldo
actualizarDisplaySaldo();
