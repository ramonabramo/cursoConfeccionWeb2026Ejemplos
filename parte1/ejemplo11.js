/*
Pide al usuario el precio de un producto y el IVA que se le debe aplicar.
Muestra el precio del producto en el li precio
Muestrar el precio del IVA en el li IVA
Muestra el precio total en el li total

Ejemplo:
precio=84
iva=21/100*84 = 17.64
total=84 + 17.64 = 101.64

La salida
Precio: 84
IVA: 17.64
Total: 101.64
*/

// variables
let precio = 0;
let iva = 0;
let total = 0;
let ivaTotal = 0;

// constantes

// constantes al DOM
const nodoPrecio = document.querySelector('#precio');
const nodoIva = document.querySelector('#iva');
const nodoTotal = document.querySelector('#total');

// entradas
precio = prompt('Introduce el precio del producto'); // 450
iva = prompt('Introduce el IVA (tanto por ciento)'); // 20

// procesamiento
ivaTotal = precio * iva / 100; // 450 * 20 / 100 = 9
total = precio + ivaTotal; // 450 + 9 = 459

// salidas

nodoPrecio.innerHTML += precio;
nodoIva.innerHTML += ivaTotal;
nodoTotal.innerHTML += total;


