/**
 * ENUNCIADO:
 * Ejercicio 02 (Solución): Bucle 'for' clásico sobre una NodeList.
 */

// 1. variables y constantes de estado

// 2. constantes al DOM
const items = document.querySelectorAll('.item-lista');
const btnEfectoCebra = document.querySelector('#btnEfectoCebra');
const btnLimpiar = document.querySelector('#btnLimpiar');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares

// 4. funciones de eventos
function aplicarEfectoCebra() {
    for (let i = 0; i < items.length; i++) {
        // Limpiamos clases previas
        items[i].classList.remove('par', 'impar');

        if (i % 2 === 0) {
            items[i].classList.add('par');
        } else {
            items[i].classList.add('impar');
        }
    }

    resultado.textContent = `Efecto cebra aplicado con éxito sobre los ${items.length} elementos utilizando bucle for clásico.`;
}

function limpiarLista() {
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('par', 'impar');
    }
    resultado.textContent = 'Lista restablecida a su estado original.';
}

// 5. escuchadores de eventos
btnEfectoCebra.addEventListener('click', aplicarEfectoCebra);
btnLimpiar.addEventListener('click', limpiarLista);
