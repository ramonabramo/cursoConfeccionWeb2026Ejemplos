/**
 * ENUNCIADO:
 * Ejercicio 09 (Solución): Funciones de Orden Superior (HOF) y Callbacks.
 */

const inputTextoHof = document.querySelector('#inputTextoHof');
const btnHofMayus = document.querySelector('#btnHofMayus');
const btnHofSlug = document.querySelector('#btnHofSlug');
const btnHofInvertir = document.querySelector('#btnHofInvertir');
const resultado = document.querySelector('#resultado');

function transformarTexto(cadena, callbackTransformador) {
    const textoLimpio = cadena.trim();
    return callbackTransformador(textoLimpio);
}

function aplicarMayusculas() {
    const res = transformarTexto(inputTextoHof.value, t => t.toUpperCase());
    resultado.innerHTML = `HOF con Callback Mayúsculas: <strong>${res}</strong>`;
}

function aplicarSlug() {
    const res = transformarTexto(inputTextoHof.value, t => t.toLowerCase().replace(/\s+/g, '-'));
    resultado.innerHTML = `HOF con Callback Slug (URL amigable): <strong>${res}</strong>`;
}

function aplicarInversion() {
    const res = transformarTexto(inputTextoHof.value, t => t.split('').reverse().join(''));
    resultado.innerHTML = `HOF con Callback Invertido: <strong>${res}</strong>`;
}

btnHofMayus.addEventListener('click', aplicarMayusculas);
btnHofSlug.addEventListener('click', aplicarSlug);
btnHofInvertir.addEventListener('click', aplicarInversion);
