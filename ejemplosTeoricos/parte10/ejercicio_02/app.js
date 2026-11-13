// ==========================================================================
// EJERCICIO 02 (Práctica): Ficha de Producto con Métodos y Cálculo de IVA
// OBJETIVO: Implementar un objeto literal 'producto' con métodos para venta y cálculo de IVA.
// ==========================================================================

// 1. variables y constantes de estado
// - Objeto literal 'producto' con:
//     * nombre: 'Teclado Mecánico RGB'
//     * precioBase: 79.99
//     * stock: 15
//     * calcularPrecioConIva(porcentajeIva):
//         devuelve el precioBase sumándole el porcentaje correspondiente.
//     * vender(unidades):
//         comprueba si this.stock >= unidades.
//         Si hay stock, descuenta unidades de this.stock y devuelve true.
//         Si no hay stock suficiente, devuelve false.

// 2. constantes al DOM
// - Elementos visuales: #productoNombreVisual, #productoPrecioVisual, #productoStockVisual, #productoIvaVisual
// - Inputs y select: #inputCantidadVenta, #selectIva
// - Botones: #btnVender, #btnRecalcularIva
// - Div resultado: #resultado

// 3. funciones auxiliares
// - function renderizarProducto():
//     * Actualiza el DOM con producto.nombre, producto.precioBase y producto.stock.
// - function procesarVenta():
//     * Lee unidades de #inputCantidadVenta.
//     * Invoca producto.vender(unidades).
//     * Si devuelve true: actualiza la interfaz y avisa de la venta con éxito.
//     * Si devuelve false: muestra alerta de stock insuficiente.
// - function actualizarPrecioFinal():
//     * Lee el iva de #selectIva.
//     * Llama a producto.calcularPrecioConIva(iva).
//     * Muestra el desglose en el div de resultado y en la tarjeta.

// 4. funciones de eventos
// - Click en #btnVender -> procesarVenta()
// - Click en #btnRecalcularIva -> actualizarPrecioFinal()

// 5. escuchadores de eventos (addEventListener)
