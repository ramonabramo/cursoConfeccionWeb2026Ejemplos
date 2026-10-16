// ==========================================================================
// EJERCICIO 02 (Práctica): Ficha de Producto con Métodos y Cálculo de IVA
// OBJETIVO: Implementar un objeto literal 'producto' con métodos para venta y cálculo de IVA.
// ==========================================================================

// 1. variables y constantes de estado
const producto = {
    nombre: 'Teclado Mecánico RGB',
    precioBase: 79.99,
    stock: 15,

    calcularPrecioConIva(porcentajeIva = 21) {
        const factor = 1 + (porcentajeIva / 100);
        return this.precioBase * factor;
    },

    vender(unidades) {
        if (unidades > 0 && this.stock >= unidades) {
            this.stock -= unidades;
            return true;
        }
        return false;
    }
};

// 2. constantes al DOM
const productoNombreVisual = document.querySelector('#productoNombreVisual');
const productoPrecioVisual = document.querySelector('#productoPrecioVisual');
const productoStockVisual = document.querySelector('#productoStockVisual');
const productoIvaVisual = document.querySelector('#productoIvaVisual');

const inputCantidadVenta = document.querySelector('#inputCantidadVenta');
const selectIva = document.querySelector('#selectIva');

const btnVender = document.querySelector('#btnVender');
const btnRecalcularIva = document.querySelector('#btnRecalcularIva');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function renderizarProducto() {
    productoNombreVisual.textContent = producto.nombre;
    productoPrecioVisual.textContent = `${producto.precioBase.toFixed(2)} € (Base)`;
    productoStockVisual.textContent = `Stock disponible: ${producto.stock} uds`;

    const ivaSeleccionado = Number(selectIva.value);
    const precioFinal = producto.calcularPrecioConIva(ivaSeleccionado);
    productoIvaVisual.textContent = `IVA aplicado: ${ivaSeleccionado}% (${precioFinal.toFixed(2)} €)`;
}

function procesarVenta() {
    const unidades = Number(inputCantidadVenta.value);

    if (isNaN(unidades) || unidades <= 0) {
        resultado.textContent = '⚠️ Introduce un número de unidades válido mayor a 0.';
        resultado.className = 'resultado alerta-peligro';
        return;
    }

    const ventaExitosa = producto.vender(unidades);

    if (ventaExitosa) {
        renderizarProducto();
        resultado.textContent = `✅ Venta completada de ${unidades} unidad(es). Stock restante: ${producto.stock}.`;
        resultado.className = 'resultado alerta-exito';
    } else {
        resultado.textContent = `❌ Stock insuficiente. Solo quedan ${producto.stock} unidades en almacén.`;
        resultado.className = 'resultado alerta-peligro';
    }
}

function actualizarPrecioFinal() {
    const iva = Number(selectIva.value);
    const precioConIva = producto.calcularPrecioConIva(iva);
    renderizarProducto();

    resultado.textContent = `💶 Precio base ${producto.precioBase.toFixed(2)} € + ${iva}% IVA = ${precioConIva.toFixed(2)} € final.`;
    resultado.className = 'resultado alerta-exito';
}

// 4. funciones de eventos
function alPulsarVender() {
    procesarVenta();
}

function alPulsarRecalcular() {
    actualizarPrecioFinal();
}

// 5. escuchadores de eventos (addEventListener)
btnVender.addEventListener('click', alPulsarVender);
btnRecalcularIva.addEventListener('click', alPulsarRecalcular);

// Inicializar interfaz
renderizarProducto();
