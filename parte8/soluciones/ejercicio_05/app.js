/**
 * ENUNCIADO:
 * Ejercicio 05 (Solución): Hoisting (Declaradas vs Expresadas).
 */

const btnDeclarada = document.querySelector('#btnDeclarada');
const btnExpresada = document.querySelector('#btnExpresada');
const resultado = document.querySelector('#resultado');

const pruebaHoisting = funcionConHoisting();

function funcionConHoisting() {
    return 'Soy una Función Declarada: Me he ejecutado gracias a la elevación (Hoisting) del motor de JS.';
}

const expresionSinHoisting = function () {
    return 'Soy una Expresión de Función: Solo puedo ser invocada después de haber sido inicializada en memoria.';
};

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

btnDeclarada.addEventListener('click', probarDeclarada);
btnExpresada.addEventListener('click', probarExpresada);
