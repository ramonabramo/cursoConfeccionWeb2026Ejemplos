/**
 * ENUNCIADO:
 * Ejercicio 13 (Solución): Recursividad y Caso Base.
 */

const inputNumeroRecursivo = document.querySelector('#inputNumeroRecursivo');
const btnCalcularFactorial = document.querySelector('#btnCalcularFactorial');
const btnCuentaAtras = document.querySelector('#btnCuentaAtras');
const resultado = document.querySelector('#resultado');

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

function cuentaRegresiva(n) {
    if (n <= 0) return '¡0! -> 🚀 ¡DESPEGUE!';
    return `${n}... ` + cuentaRegresiva(n - 1);
}

function ejecutarFactorial() {
    const num = Math.min(12, Math.max(0, Math.floor(Number(inputNumeroRecursivo.value))));
    const res = factorial(num);
    resultado.innerHTML = `
        Cálculo Recursivo de Factorial (!${num}):<br>
        • Resultado: <strong>${num}! = ${res.toLocaleString()}</strong><br>
        <em>Cada llamada quedó pausada en el Call Stack hasta que n=1 activó el caso base.</em>
    `;
}

function ejecutarCuentaAtras() {
    const num = Math.min(10, Math.max(1, Math.floor(Number(inputNumeroRecursivo.value))));
    const traza = cuentaRegresiva(num);
    resultado.innerHTML = `
        Cuenta Regresiva Recursiva:<br>
        <strong>${traza}</strong>
    `;
}

btnCalcularFactorial.addEventListener('click', ejecutarFactorial);
btnCuentaAtras.addEventListener('click', ejecutarCuentaAtras);
