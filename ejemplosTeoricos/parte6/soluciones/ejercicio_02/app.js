/**
 * ENUNCIADO:
 * Ejercicio: Recorrido masivo con forEach() para modificar clases CSS.
 */

// estructura del programa principal

// 1. variables y constantes de estado (no requeridas)

// 2. constantes al DOM
const articulos = document.querySelectorAll('.articulo');
const btnDestacar = document.querySelector('#btnDestacar');
const btnRestablecer = document.querySelector('#btnRestablecer');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares

// 4. funciones de eventos
function destacarTodos() {
    articulos.forEach(function (articulo, indice) {
        articulo.classList.add('destacado');
    });
    resultado.textContent = `Se han destacado los ${articulos.length} artículos del documento.`;
}

function restablecerOriginal() {
    articulos.forEach(function (articulo) {
        articulo.classList.remove('destacado');
    });
    resultado.textContent = 'Todos los artículos han vuelto a su estado original.';
}

// 5. escuchadores de eventos
btnDestacar.addEventListener('click', destacarTodos);
btnRestablecer.addEventListener('click', restablecerOriginal);
