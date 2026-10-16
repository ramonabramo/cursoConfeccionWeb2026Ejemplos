/**
 * ENUNCIADO:
 * Ejercicio: Utiliza 'forEach()' para recorrer un array numérico y acumular totales.
 *
 * 'forEach()' no solo sirve para mostrar listas de texto, sino también para realizar
 * operaciones matemáticas con cada elemento, como sumar importes, calcular medias o aplicar descuentos.
 *
 * Array inicial de precios en euros:
 * let precios = [12.50, 4.99, 25.00, 8.75, 15.30];
 *
 * Al pulsar el botón #btnCalcular:
 * 1. Declarar una variable acumuladora inicializada en 0: let sumaTotal = 0;
 * 2. Recorrer el array con forEach sumando cada precio:
 *    precios.forEach(function (precio) {
 *        sumaTotal += precio;
 *    });
 * 3. Calcular la media dividiendo entre la cantidad total de artículos:
 *    const media = sumaTotal / precios.length;
 * 4. Mostrar en #resultado:
 *    - La lista de todos los precios.
 *    - La suma total formateada a 2 decimales (.toFixed(2)).
 *    - El precio medio por producto formateado a 2 decimales.
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 * - Al pulsar "Calcular Total y Media":
 *   Se muestra:
 *   Total de productos: 5
 *   Suma total: 66.54 €
 *   Precio medio: 13.31 €
 *
 * CONCEPTOS DE ARRAYS A UTILIZAR:
 * - forEach() para acumulación de valores numéricos.
 * - array.length para el cálculo de la media.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar el array 'precios'.
 * - 2 PASO: Apuntar a los elementos del DOM.
 * - 3 PASO: Programar 'submit' para permitir añadir nuevos precios (convirtiendo con Number()).
 * - 4 PASO: Programar 'click' en #btnCalcular.
 * - 5 PASO: Dentro del click, acumular con precios.forEach(function(p) { sumaTotal += p; }).
 * - 6 PASO: Calcular la media y mostrar el resumen en #resultado.
 */

// estructura del programa principal

// declaracion del array inicial
let precios = [12.50, 4.99, 25.00, 8.75, 15.30];

// constantes al DOM que queremos escuchar
const formPrecio = document.querySelector('#formPrecio');
const inputPrecio = document.querySelector('#inputPrecio');
const btnCalcular = document.querySelector('#btnCalcular');
const nodoResultado = document.querySelector('#resultado');

// colocar escuchadores de eventos

// 1. Permitir añadir nuevos precios
formPrecio.addEventListener('submit', function (e) {
    e.preventDefault();
    const nuevoPrecio = Number(inputPrecio.value);

    if (nuevoPrecio > 0) {
        precios.push(nuevoPrecio);
        inputPrecio.value = '';
        inputPrecio.focus();
        nodoResultado.textContent = `Precio ${nuevoPrecio.toFixed(2)} € añadido. Pulsa "Calcular Total y Media" para actualizar.`;
    }
});

// 2. Acumular y calcular con forEach()
btnCalcular.addEventListener('click', function () {
    let sumaTotal = 0;

    // Recorremos el array sumando cada precio a la variable acumuladora
    precios.forEach(function (precio) {
        sumaTotal += precio;
    });

    const precioMedio = sumaTotal / precios.length;

    // salidas con formato
    nodoResultado.textContent = 
`Artículos en la cesta: ${precios.length}
Precios registrados: [${precios.map(p => p.toFixed(2) + ' €').join(', ')}]
-------------------------------------------
Suma Total: ${sumaTotal.toFixed(2)} €
Precio Medio: ${precioMedio.toFixed(2)} €`;
});
