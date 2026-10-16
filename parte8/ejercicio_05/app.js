/**
 * ENUNCIADO:
 * Ejercicio 05 (Teoría Guiada): Hoisting (Declaradas vs Expresadas).
 *
 * CONCEPTOS CLAVE:
 * 1. Funciones Declaradas ('function nombre()'):
 *    El motor de JS las 'eleva' (Hoisting) íntegramente a la cima de su ámbito en la fase
 *    de creación de memoria. Por eso se pueden invocar antes de su línea de definición.
 *
 * 2. Expresiones de Función ('const nombre = function()'):
 *    Al estar asignadas a 'const' o 'let', sufren la Temporal Dead Zone (TDZ).
 *    Si intentas invocarlas antes de la línea de asignación, JavaScript lanza un ReferenceError.
 */

// estructura del programa principal

// 1. variables y constantes de estado

// 2. constantes al DOM
const btnDeclarada = document.querySelector('#btnDeclarada');
const btnExpresada = document.querySelector('#btnExpresada');
const resultado = document.querySelector('#resultado');

// Demostración de Hoisting: Podemos llamar a funcionConHoisting() ANTES de su declaración física
const pruebaHoisting = funcionConHoisting();

function funcionConHoisting() {
    return 'Soy una Función Declarada: Me he ejecutado gracias a la elevación (Hoisting) del motor de JS.';
}

// En cambio, la expresión de función solo existe a partir de esta línea
const expresionSinHoisting = function () {
    return 'Soy una Expresión de Función: Solo puedo ser invocada después de haber sido inicializada en memoria.';
};

// 4. funciones de eventos
function probarDeclarada() {
    resultado.innerHTML = `
        <strong>Resultado de Función Declarada:</strong><br>
        ${pruebaHoisting}<br>
        <em>(Fue invocada en la línea de código antes de su declaración formal).</em>
    `;
}

function probarExpresada() {
    resultado.innerHTML = `
        <strong>Resultado de Expresión de Función:</strong><br>
        ${expresionSinHoisting()}
    `;
}

// 5. escuchadores de eventos
btnDeclarada.addEventListener('click', probarDeclarada);
btnExpresada.addEventListener('click', probarExpresada);
