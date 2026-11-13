/**
 * ENUNCIADO:
 * Ejercicio 07 (Solución): IIFE (Immediately Invoked Function Expression).
 */

const variablePublica = 'Soy visible globalmente';
let resultadoDesdeIIFE = '';

(function () {
    const claveSecreta = 'TOKEN-SUPER-SECRETO-4829';
    resultadoDesdeIIFE = 'La IIFE se autoejecutó al cargar el script. Generó internamente el token pero no lo expuso en window.';
})();

const btnComprobarGlobales = document.querySelector('#btnComprobarGlobales');
const resultado = document.querySelector('#resultado');

function comprobarFugas() {
    const existeEnWindow = typeof window.claveSecreta !== 'undefined';

    resultado.innerHTML = `
        <strong>Informe de aislamiento de memoria IIFE:</strong><br>
        • Estado: ${resultadoDesdeIIFE}<br>
        • ¿Existe 'window.claveSecreta' en memoria global?: <strong>${existeEnWindow ? 'SÍ (Fuga de memoria)' : 'NO (Protegida correctamente por la IIFE)'}</strong><br>
        • 'variablePublica': ${variablePublica}
    `;
}

btnComprobarGlobales.addEventListener('click', comprobarFugas);
