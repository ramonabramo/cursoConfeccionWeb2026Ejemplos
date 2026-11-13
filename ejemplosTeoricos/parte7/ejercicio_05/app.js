/**
 * ENUNCIADO:
 * Ejercicio 05 (Teoría Guiada): Bucle 'for...of' (ES6).
 *
 * Introducido en ECMAScript 2015 (ES6), el bucle 'for...of' está diseñado específicamente
 * para iterar sobre los VALORES directos de cualquier estructura iterable (Arrays, Strings, NodeLists):
 *
 * for (const elemento of coleccion) {
 *     console.log(elemento); // Aquí 'elemento' es el dato directo, no un número de índice
 * }
 *
 * VENTAJAS CLAVE:
 * 1. Sintaxis ultralimpia: no hay que escribir 'let i = 0', ni 'i < length', ni 'i++'.
 * 2. Cero peligro de bucles infinitos o desbordamientos de índice.
 * 3. Funciona de forma idéntica sobre Arrays, Strings y NodeLists del DOM.
 */

// estructura del programa principal

// 1. variables y constantes de estado
const destinos = ['París', 'Roma', 'Tokio', 'Londres', 'Nueva York'];

// 2. constantes al DOM
const btnDestinos = document.querySelector('#btnDestinos');
const btnDeletrear = document.querySelector('#btnDeletrear');
const inputPalabra = document.querySelector('#inputPalabra');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares

// 4. funciones de eventos
// 4.1. Iteración directa sobre un Array
function mostrarDestinosForOf() {
    let mensaje = 'Destinos turísticos procesados con <strong>for...of</strong>:<br>';

    for (const ciudad of destinos) {
        mensaje += `✈️ Destino: <strong>${ciudad}</strong><br>`;
    }

    resultado.innerHTML = mensaje;
}

// 4.2. Iteración directa sobre un String (carácter a carácter)
function deletrearStringForOf() {
    const texto = inputPalabra.value.trim().toUpperCase();

    if (texto === '') {
        resultado.textContent = 'Introduce una palabra en el campo de texto.';
        return;
    }

    const letrasSeparadas = [];

    // En JavaScript, una cadena de texto es un iterable
    for (const letra of texto) {
        letrasSeparadas.push(letra);
    }

    resultado.innerHTML = `Palabra deletreada con for...of:<br><strong>${letrasSeparadas.join(' • ')}</strong> (Total: ${letrasSeparadas.length} letras)`;
}

// 5. escuchadores de eventos
btnDestinos.addEventListener('click', mostrarDestinosForOf);
btnDeletrear.addEventListener('click', deletrearStringForOf);
