/**
 * ENUNCIADO:
 * Ejercicio 01 (Solución): Anatomía de una función, parámetros por defecto y Early Return.
 */

// 1. variables y constantes de estado

// 2. constantes al DOM
const inputCliente = document.querySelector('#inputCliente');
const inputImporte = document.querySelector('#inputImporte');
const inputDescuento = document.querySelector('#inputDescuento');
const btnCalcular = document.querySelector('#btnCalcular');
const btnProbarDefecto = document.querySelector('#btnProbarDefecto');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function calcularFactura(cliente = 'Anónimo', total = 0, descuento = 0) {
    if (total <= 0) {
        return '⚠️ Error: El importe de la factura debe ser mayor a 0 €.';
    }

    const descuentoAplicado = total * (descuento / 100);
    const precioFinal = total - descuentoAplicado;

    return `Factura generada para: <strong>${cliente}</strong> | Base: ${total.toFixed(2)} € | Descuento: ${descuento}% (-${descuentoAplicado.toFixed(2)} €) | <strong>Total Final: ${precioFinal.toFixed(2)} €</strong>`;
}

// 4. funciones de eventos
function procesarFormulario() {
    const clienteTexto = inputCliente.value.trim() !== '' ? inputCliente.value.trim() : undefined;
    const totalNum = Number(inputImporte.value);
    const descuentoNum = inputDescuento.value !== '' ? Number(inputDescuento.value) : undefined;

    const factura = calcularFactura(clienteTexto, totalNum, descuentoNum);
    resultado.innerHTML = factura;
}

function probarValoresPorDefecto() {
    const prueba = calcularFactura(undefined, 50, undefined);
    resultado.innerHTML = `Invocación con parámetros por defecto:<br>${prueba}`;
}

// 5. escuchadores de eventos
btnCalcular.addEventListener('click', procesarFormulario);
btnProbarDefecto.addEventListener('click', probarValoresPorDefecto);
