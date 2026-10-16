/**
 * ENUNCIADO:
 * Ejercicio 11 (Solución): Clausuras (Closures) y Estado Privado.
 */

const btnIncrementarA = document.querySelector('#btnIncrementarA');
const btnIncrementarB = document.querySelector('#btnIncrementarB');
const resultado = document.querySelector('#resultado');

function crearContador(nombreContador) {
    let cuenta = 0;
    return function () {
        cuenta++;
        return {
            nombre: nombreContador,
            valorActual: cuenta
        };
    };
}

const contadorA = crearContador('Contador A (Alpha)');
const contadorB = crearContador('Contador B (Beta)');

function pulsarA() {
    const estado = contadorA();
    resultado.innerHTML = `
        Clausura invocada: <strong>${estado.nombre}</strong><br>
        • Valor en su mochila privada: <strong>${estado.valorActual}</strong><br>
        <em>El Contador B conserva su propia memoria independiente.</em>
    `;
}

function pulsarB() {
    const estado = contadorB();
    resultado.innerHTML = `
        Clausura invocada: <strong>${estado.nombre}</strong><br>
        • Valor en su mochila privada: <strong>${estado.valorActual}</strong><br>
        <em>El Contador A conserva su propia memoria independiente.</em>
    `;
}

btnIncrementarA.addEventListener('click', pulsarA);
btnIncrementarB.addEventListener('click', pulsarB);
