/**
 * ENUNCIADO:
 * Ejercicio: Buscador de elementos en tiempo real.
 */

// estructura del programa principal

// 1. variables y constantes de estado

// 2. constantes al DOM
const inputBuscar = document.querySelector('#inputBuscar');
const itemsTecnologia = document.querySelectorAll('.item-tecnologia');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares

// 4. funciones de eventos
function filtrarTecnologias() {
    const textoBusqueda = inputBuscar.value.trim().toLowerCase();
    let visibles = 0;
    const total = itemsTecnologia.length;

    itemsTecnologia.forEach(function (item) {
        const nombreTecnologia = item.textContent.trim().toLowerCase();

        if (nombreTecnologia.includes(textoBusqueda)) {
            item.classList.remove('oculto');
            visibles++;
        } else {
            item.classList.add('oculto');
        }
    });

    if (textoBusqueda === '') {
        resultado.textContent = `Mostrando todas las tecnologías (${total} disponibles).`;
    } else {
        resultado.textContent = `Resultados para "${textoBusqueda}": ${visibles} de ${total} tecnologías coincidentes.`;
    }
}

// 5. escuchadores de eventos
inputBuscar.addEventListener('input', filtrarTecnologias);

// Estado inicial
filtrarTecnologias();
