/**
 * ENUNCIADO:
 * Ejercicio 11 (Teoría Guiada): Clausuras (Closures) y Estado Privado.
 *
 * DEFINICIÓN OFICIAL (MDN):
 * Una clausura (closure) es la combinación de una función y el entorno léxico en el que
 * fue declarada. Dicho entorno contiene las variables locales que estaban disponibles
 * en el momento de crear la función.
 *
 * LA METÁFORA DEL AULA:
 * "El hijo que se va de casa pero se lleva una mochila invisible con la llave de la despensa".
 * La función 'crearContador' ya terminó y desapareció de la pila de llamadas, pero cada vez
 * que invocamos 'contadorA()', sigue recordando su propia variable privada 'cuenta'.
 */

// estructura del programa principal

// 1. variables y constantes de estado

// 2. constantes al DOM
const btnIncrementarA = document.querySelector('#btnIncrementarA');
const btnIncrementarB = document.querySelector('#btnIncrementarB');
const resultado = document.querySelector('#resultado');

// 3. Función generadora de Closures (Factoría)
function crearContador(nombreContador) {
    // Variable privada encapsulada
    let cuenta = 0;

    // Retornamos la función interna que forma el Closure
    return function () {
        cuenta++;
        return {
            nombre: nombreContador,
            valorActual: cuenta
        };
    };
}

// Creamos dos instancias totalmente independientes
const contadorA = crearContador('Contador A (Alpha)');
const contadorB = crearContador('Contador B (Beta)');

// 4. funciones de eventos
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

// 5. escuchadores de eventos
btnIncrementarA.addEventListener('click', pulsarA);
btnIncrementarB.addEventListener('click', pulsarB);
