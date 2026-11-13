/**
 * ENUNCIADO:
 * Ejercicio 04 (Solución): Búsqueda con bucle 'while' y 'break'.
 */

// 1. variables y constantes de estado
const almacen = ['Teclado', 'Ratón', 'Monitor', 'Altavoz', 'Impresora', 'Webcam'];

// 2. constantes al DOM
const inputBuscar = document.querySelector('#inputBuscar');
const btnBuscar = document.querySelector('#btnBuscar');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares

// 4. funciones de eventos
function buscarProductoWhile() {
    const busqueda = inputBuscar.value.trim().toLowerCase();

    if (busqueda === '') {
        resultado.textContent = 'Por favor, escribe el nombre de un producto para buscar.';
        return;
    }

    let i = 0;
    let encontrado = false;

    while (i < almacen.length) {
        if (almacen[i].toLowerCase() === busqueda) {
            encontrado = true;
            resultado.innerHTML = `¡Producto encontrado! <strong>"${almacen[i]}"</strong> se encuentra en el índice [${i}] (posición #${i + 1}). Se detuvo la búsqueda con 'break'.`;
            break; // Detención inmediata: optimiza la ejecución
        }
        i++;
    }

    if (!encontrado) {
        resultado.textContent = `El producto "${inputBuscar.value.trim()}" no se encuentra en el almacén (se revisaron los ${almacen.length} artículos).`;
    }
}

// 5. escuchadores de eventos
btnBuscar.addEventListener('click', buscarProductoWhile);
