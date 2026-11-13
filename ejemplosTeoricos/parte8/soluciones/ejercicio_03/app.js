/**
 * ENUNCIADO:
 * Ejercicio 03 (Solución): Ámbito Léxico, Variable Shadowing y Call Stack.
 */

const visualStack = document.querySelector('#visualStack');
const btnSimularStack = document.querySelector('#btnSimularStack');
const resultado = document.querySelector('#resultado');

function paso3_C() {
    return 'Nivel C (Cima de la pila)';
}

function paso2_B() {
    const respuestaC = paso3_C();
    return `Nivel B -> ${respuestaC}`;
}

function paso1_A() {
    const respuestaB = paso2_B();
    return `Nivel A -> ${respuestaB}`;
}

function animarPila() {
    visualStack.innerHTML = '<div class="marco-stack">[1. Global Execution Context]</div>';

    setTimeout(() => {
        visualStack.innerHTML += '<div class="marco-stack">[2. paso1_A() apilada]</div>';
    }, 400);

    setTimeout(() => {
        visualStack.innerHTML += '<div class="marco-stack">[3. paso2_B() apilada]</div>';
    }, 800);

    setTimeout(() => {
        visualStack.innerHTML += '<div class="marco-stack" style="background-color: #f59e0b;">[4. paso3_C() ejecutándose en la cima]</div>';
    }, 1200);

    setTimeout(() => {
        const traza = paso1_A();
        visualStack.innerHTML = '<div class="marco-stack">[1. Global Execution Context (Funciones desapiladas tras return)]</div>';
        resultado.innerHTML = `
            <strong>Ejecución completada con éxito:</strong><br>
            Traza de resolución de llamadas: ${traza}<br>
            <em>La pila de llamadas (Call Stack) se ha vaciado en orden LIFO (Last In, First Out).</em>
        `;
    }, 1800);
}

btnSimularStack.addEventListener('click', animarPila);
