/**
 * ENUNCIADO:
 * Ejercicio 09 (Teoría Guiada): Funciones de Orden Superior (HOF) y Callbacks.
 *
 * DEFINICIONES CLAVE (MDN):
 * 1. Higher-Order Function (HOF): Función que recibe una o más funciones como argumentos,
 *    o que devuelve una función como resultado.
 * 2. Callback: Función que se pasa como argumento a otra función para ser ejecutada
 *    dentro de ella.
 */

// estructura del programa principal

// 1. variables y constantes de estado

// 2. constantes al DOM
const inputTextoHof = document.querySelector('#inputTextoHof');
const btnHofMayus = document.querySelector('#btnHofMayus');
const btnHofSlug = document.querySelector('#btnHofSlug');
const btnHofInvertir = document.querySelector('#btnHofInvertir');
const resultado = document.querySelector('#resultado');

// 3. Función de Orden Superior (HOF)
function transformarTexto(cadena, callbackTransformador) {
    const textoLimpio = cadena.trim();
    // Invocamos el callback pasándole el dato procesado
    return callbackTransformador(textoLimpio);
}

// 4. funciones de eventos que pasan diferentes callbacks a la HOF
function aplicarMayusculas() {
    // Pasamos un callback anónimo flecha
    const res = transformarTexto(inputTextoHof.value, t => t.toUpperCase());
    resultado.innerHTML = `HOF con Callback Mayúsculas: <strong>${res}</strong>`;
}

function aplicarSlug() {
    // Callback que convierte espacios en guiones
    const res = transformarTexto(inputTextoHof.value, t => t.toLowerCase().replace(/\s+/g, '-'));
    resultado.innerHTML = `HOF con Callback Slug (URL amigable): <strong>${res}</strong>`;
}

function aplicarInversion() {
    // Callback que invierte las letras
    const res = transformarTexto(inputTextoHof.value, t => t.split('').reverse().join(''));
    resultado.innerHTML = `HOF con Callback Invertido: <strong>${res}</strong>`;
}

// 5. escuchadores de eventos
btnHofMayus.addEventListener('click', aplicarMayusculas);
btnHofSlug.addEventListener('click', aplicarSlug);
btnHofInvertir.addEventListener('click', aplicarInversion);
