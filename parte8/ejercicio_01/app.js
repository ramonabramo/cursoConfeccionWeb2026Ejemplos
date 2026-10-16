/**
 * ENUNCIADO:
 * Ejercicio 01 (Teoría Guiada): Anatomía de una función, parámetros por defecto y Early Return.
 *
 * CONCEPTOS CLAVE (ECMAScript / MDN):
 * 1. Declaración formal: palabra clave 'function', identificador, parámetros entre () y bloque {}.
 * 2. Parámetros por defecto (ES6): se activan ÚNICAMENTE cuando el argumento es 'undefined' o se omite.
 * 3. Early Return: salir inmediatamente con 'return' si no se cumplen las condiciones básicas,
 *    evitando anidar 'else' innecesarios y deteniendo el código inalcanzable.
 */

// estructura del programa principal

// 1. variables y constantes de estado

// 2. constantes al DOM
const inputCliente = document.querySelector('#inputCliente');
const inputImporte = document.querySelector('#inputImporte');
const inputDescuento = document.querySelector('#inputDescuento');
const btnCalcular = document.querySelector('#btnCalcular');
const btnProbarDefecto = document.querySelector('#btnProbarDefecto');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares (declaración formal con parámetros por defecto y early return)
function calcularFactura(cliente = 'Anónimo', total = 0, descuento = 0) {
    // Early return: si el importe no es válido, detenemos la ejecución inmediatamente
    if (total <= 0) {
        return '⚠️ Error: El importe de la factura debe ser mayor a 0 €.';
    }

    const descuentoAplicado = total * (descuento / 100);
    const precioFinal = total - descuentoAplicado;

    return `Factura generada para: <strong>${cliente}</strong> | Base: ${total.toFixed(2)} € | Descuento: ${descuento}% (-${descuentoAplicado.toFixed(2)} €) | <strong>Total Final: ${precioFinal.toFixed(2)} €</strong>`;
}

// 4. funciones de eventos
function procesarFormulario() {
    // Si el usuario deja el campo vacío, pasamos undefined para que se active el valor por defecto
    const clienteTexto = inputCliente.value.trim() !== '' ? inputCliente.value.trim() : undefined;
    const totalNum = Number(inputImporte.value);
    const descuentoNum = inputDescuento.value !== '' ? Number(inputDescuento.value) : undefined;

    const factura = calcularFactura(clienteTexto, totalNum, descuentoNum);
    resultado.innerHTML = factura;
}

function probarValoresPorDefecto() {
    // Invocamos omitiendo argumentos: se activan cliente="Anónimo", total=0, descuento=0
    const prueba = calcularFactura(undefined, 50, undefined);
    resultado.innerHTML = `Invocación con parámetros por defecto:<br>${prueba}`;
}

// 5. escuchadores de eventos
btnCalcular.addEventListener('click', procesarFormulario);
btnProbarDefecto.addEventListener('click', probarValoresPorDefecto);
