/**
 * ENUNCIADO:
 * Ejercicio 12 (Solución): Factoría con Métodos y Closure.
 */

// 1. variables y constantes de estado

// 2. constantes al DOM
const inputCantidad = document.querySelector('#inputCantidad');
const btnIngresar = document.querySelector('#btnIngresar');
const btnGastar = document.querySelector('#btnGastar');
const btnConsultar = document.querySelector('#btnConsultar');
const resultado = document.querySelector('#resultado');

// 3. Factoría con Closure
function crearMonedero(saldoInicial = 0) {
    let saldo = saldoInicial; // Estado privado encapsulado en el closure

    return {
        ingresar(cantidad) {
            if (cantidad <= 0) return { exito: false, mensaje: 'La cantidad debe ser mayor a 0 €.' };
            saldo += cantidad;
            return { exito: true, saldoActual: saldo, mensaje: `Ingreso de ${cantidad.toFixed(2)} € realizado.` };
        },
        gastar(cantidad) {
            if (cantidad <= 0) return { exito: false, mensaje: 'La cantidad debe ser mayor a 0 €.' };
            if (cantidad > saldo) {
                return { exito: false, saldoActual: saldo, mensaje: `Fondos insuficientes (Saldo: ${saldo.toFixed(2)} €, Intento: ${cantidad.toFixed(2)} €).` };
            }
            saldo -= cantidad;
            return { exito: true, saldoActual: saldo, mensaje: `Gasto de ${cantidad.toFixed(2)} € completado.` };
        },
        obtenerSaldo() {
            return saldo;
        }
    };
}

// 4. Instancia de monedero con 100 € iniciales
const miCuenta = crearMonedero(100);

// 5. funciones de eventos
btnIngresar.addEventListener('click', () => {
    const cantidad = Number(inputCantidad.value);
    const op = miCuenta.ingresar(cantidad);
    resultado.innerHTML = `
        Operación de Ingreso:<br>
        • Estado: ${op.exito ? '✅ Éxito' : '❌ Fallo'}<br>
        • ${op.mensaje}<br>
        • <strong>Saldo privado actual: ${miCuenta.obtenerSaldo().toFixed(2)} €</strong>
    `;
});

btnGastar.addEventListener('click', () => {
    const cantidad = Number(inputCantidad.value);
    const op = miCuenta.gastar(cantidad);
    resultado.innerHTML = `
        Operación de Gasto:<br>
        • Estado: ${op.exito ? '✅ Éxito' : '⚠️ Denegado'}<br>
        • ${op.mensaje}<br>
        • <strong>Saldo privado actual: ${miCuenta.obtenerSaldo().toFixed(2)} €</strong>
    `;
});

btnConsultar.addEventListener('click', () => {
    const saldo = miCuenta.obtenerSaldo();
    resultado.innerHTML = `Consulta de saldo: <strong>${saldo.toFixed(2)} €</strong> disponibles en la cuenta.`;
});
