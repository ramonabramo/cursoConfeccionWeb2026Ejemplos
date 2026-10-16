/**
 * ENUNCIADO:
 * Ejercicio 03 (Teoría Guiada): Ámbito Léxico, Variable Shadowing y Call Stack.
 *
 * CONCEPTOS CLAVE:
 * 1. Lexical Scope: Una función interna puede acceder a las variables de su entorno exterior,
 *    pero el código exterior NUNCA puede acceder a las variables locales de la función.
 * 2. Variable Shadowing: Cuando una variable local tiene el mismo nombre que una externa,
 *    la local 'hace sombra' y oculta a la externa dentro de su bloque.
 * 3. Call Stack (Pila de llamadas): Estructura LIFO (Last In, First Out). Cada llamada a función
 *    apila un nuevo contexto; al hacer return, se desapila.
 */

// estructura del programa principal

// 1. variables y constantes de estado
const visualStack = document.querySelector('#visualStack');
const btnSimularStack = document.querySelector('#btnSimularStack');
const resultado = document.querySelector('#resultado');

// 2. funciones que demuestran el Call Stack
function paso3_C() {
    const nivel = 'Nivel C (Cima de la pila)';
    return nivel;
}

function paso2_B() {
    const nivel = 'Nivel B';
    const respuestaC = paso3_C();
    return `${nivel} -> ${respuestaC}`;
}

function paso1_A() {
    const nivel = 'Nivel A';
    const respuestaB = paso2_B();
    return `${nivel} -> ${respuestaB}`;
}

// 3. funcion para simular visualmente la pila
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

// 4. escuchadores de eventos
btnSimularStack.addEventListener('click', animarPila);
