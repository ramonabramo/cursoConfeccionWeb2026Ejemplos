/**
 * EJERCICIO 11 (Ejemplo 11) - CÁLCULO DE DESGLOSE DE PRECIO CON IVA (SOLUCIÓN)
 *
 * Objetivo:
 * Pedir el precio base y el porcentaje de IVA, calcular el importe del impuesto y el total final, volcando el desglose en una lista del DOM.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar variables para precio, iva, ivaTotal y total.
 * - 2 PASO: Capturar los elementos de la lista #precio, #iva y #total.
 * - 3 PASO: Pedir el precio y el IVA mediante prompt() y convertirlos con Number().
 * - 4 PASO: Calcular ivaTotal = (precio * iva) / 100 y total = precio + ivaTotal.
 * - 5 PASO: Volcar cada valor en su elemento de salida correspondiente.
 */

// 1. variables y constantes
let precio = 0;
let iva = 0;
let total = 0;
let ivaTotal = 0;

// 2. constantes al DOM
const nodoPrecio = document.querySelector('#precio');
const nodoIva = document.querySelector('#iva');
const nodoTotal = document.querySelector('#total');

// 3. entradas
precio = Number(prompt('Introduce el precio del producto'));
iva = Number(prompt('Introduce el IVA (tanto por ciento, ej: 21)'));

// 4. procesamiento
ivaTotal = (precio * iva) / 100;
total = precio + ivaTotal;

// 5. salidas
nodoPrecio.innerHTML = `<strong>Precio base:</strong> ${precio} €`;
nodoIva.innerHTML = `<strong>Importe IVA:</strong> ${ivaTotal.toFixed(2)} €`;
nodoTotal.innerHTML = `<strong>Precio final:</strong> ${total.toFixed(2)} €`;
