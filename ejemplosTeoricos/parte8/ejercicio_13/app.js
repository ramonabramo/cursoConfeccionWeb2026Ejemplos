/**
 * ENUNCIADO:
 * Ejercicio 13 (Teoría Guiada): Recursividad y Caso Base.
 *
 * DEFINICIONES CLAVE (MDN):
 * 1. Recursividad: Técnica donde una función se invoca a sí misma para resolver
 *    subproblemas más pequeños de la misma naturaleza.
 * 2. Caso Base (Base Case): Condición de parada que detiene las llamadas recursivas
 *    y comienza a desapilar los resultados.
 * 3. Stack Overflow: Error que ocurre si falta el caso base (o nunca se alcanza),
 *    desbordando la memoria de la pila de llamadas (Call Stack).
 */

// estructura del programa principal

// 1. variables y constantes de estado

// 2. constantes al DOM
const inputNumeroRecursivo = document.querySelector('#inputNumeroRecursivo');
const btnCalcularFactorial = document.querySelector('#btnCalcularFactorial');
const btnCuentaAtras = document.querySelector('#btnCuentaAtras');
const resultado = document.querySelector('#resultado');

// 3. Función recursiva de factorial
function factorial(n) {
    // 1. CASO BASE (Freno de parada obligatoria)
    if (n <= 1) {
        return 1;
    }
    // 2. LLAMADA RECURSIVA: n multiplicado por el factorial de (n - 1)
    return n * factorial(n - 1);
}

// 4. Función recursiva de cuenta atrás
function cuentaRegresiva(n) {
    // Caso base
    if (n <= 0) {
        return '¡0! -> 🚀 ¡DESPEGUE!';
    }
    // Llamada recursiva concatenando texto
    return `${n}... ` + cuentaRegresiva(n - 1);
}

// 5. funciones de eventos
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

// 6. escuchadores de eventos
btnCalcularFactorial.addEventListener('click', ejecutarFactorial);
btnCuentaAtras.addEventListener('click', ejecutarCuentaAtras);
