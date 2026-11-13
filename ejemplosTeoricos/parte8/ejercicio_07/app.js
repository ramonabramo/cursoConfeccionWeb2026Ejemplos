/**
 * ENUNCIADO:
 * Ejercicio 07 (Teoría Guiada): IIFE (Immediately Invoked Function Expression).
 *
 * Las IIFE son funciones que se ejecutan en el mismo milisegundo en que son definidas:
 * (function () {
 *     // Código encapsulado en una burbuja aislada
 * })();
 *
 * O con sintaxis flecha:
 * (() => {
 *     // Código aislado
 * })();
 *
 * UTILIDAD:
 * Crean un ámbito cerrado instantáneo. Todas las variables declaradas dentro de la IIFE
 * desaparecen de la memoria global una vez ejecutadas, impidiendo colisiones de nombres.
 */

// estructura del programa principal

// Variable global (contamina el objeto window)
const variablePublica = 'Soy visible globalmente';

// IIFE que protege variables confidenciales
let resultadoDesdeIIFE = '';

(function () {
    const claveSecreta = 'TOKEN-SUPER-SECRETO-4829';
    resultadoDesdeIIFE = `La IIFE se autoejecutó al cargar el script. Generó internamente el token pero no lo expuso en window.`;
})();

// 2. constantes al DOM
const btnComprobarGlobales = document.querySelector('#btnComprobarGlobales');
const resultado = document.querySelector('#resultado');

// 4. funciones de eventos
function comprobarFugas() {
    const existeEnWindow = typeof window.claveSecreta !== 'undefined';

    resultado.innerHTML = `
        <strong>Informe de aislamiento de memoria IIFE:</strong><br>
        • Estado: ${resultadoDesdeIIFE}<br>
        • ¿Existe 'window.claveSecreta' en memoria global?: <strong>${existeEnWindow ? 'SÍ (Fuga de memoria)' : 'NO (Protegida correctamente por la IIFE)'}</strong><br>
        • 'variablePublica': ${variablePublica}
    `;
}

// 5. escuchadores de eventos
btnComprobarGlobales.addEventListener('click', comprobarFugas);
