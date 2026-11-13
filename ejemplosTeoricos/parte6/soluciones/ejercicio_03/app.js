/**
 * ENUNCIADO:
 * Ejercicio: Asignación masiva de escuchadores de eventos con forEach().
 */

// estructura del programa principal

// 1. variables y constantes de estado

// 2. constantes al DOM
const botones = document.querySelectorAll('.btn-accion');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares

// 4. funciones de eventos

// 5. escuchadores de eventos
// Asignamos el escuchador individualmente a cada botón recorriendo la NodeList
botones.forEach(function (boton, indice) {
    boton.addEventListener('click', function () {
        const textoBoton = boton.textContent.trim();
        const numeroBoton = indice + 1;
        resultado.textContent = `Has pulsado el botón #${numeroBoton}: "${textoBoton}".`;
    });
});
