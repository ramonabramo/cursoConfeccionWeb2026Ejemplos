// ==========================================================================
// EJERCICIO 11 (Guiado): Demostración Empírica del Event Loop (setTimeout 0ms)
// OBJETIVO: Demostrar visualmente el flujo Call Stack -> Web APIs -> Task Queue -> Event Loop.
// ==========================================================================

// 1. variables y constantes de estado
let numeroPrueba = 1;

// 2. constantes al DOM
const btnEjecutarPrueba = document.querySelector('#btnEjecutarPrueba');
const btnLimpiarConsola = document.querySelector('#btnLimpiarConsola');
const cuerpoConsola = document.querySelector('#cuerpoConsola');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function registrarLinea(texto, clase) {
    const linea = document.createElement('div');
    linea.className = `linea-consola ${clase}`;
    linea.textContent = texto;
    cuerpoConsola.appendChild(linea);
}

function limpiarConsola() {
    cuerpoConsola.innerHTML = '';
    resultado.textContent = 'Consola vaciada. Listo para un nuevo experimento.';
    resultado.className = 'resultado';
}

function lanzarExperimentoEventLoop() {
    registrarLinea(`--- INICIO PRUEBA #${numeroPrueba++} ---`, 'linea-separador');

    // 1. INSTRUCCIÓN SÍNCRONA DIRECTA (Entra y sale de inmediato del Call Stack)
    registrarLinea('1️⃣ [SÍNCRONO] Se ejecuta de inmediato en el Call Stack principal.', 'linea-sincrono');

    // 2. INSTRUCCIÓN ASÍNCRONA CON CERO MILISEGUNDOS
    // Se delega a las Web APIs del navegador, viaja a la Task Queue y ESPERA a que el Call Stack quede vacío
    setTimeout(() => {
        registrarLinea('3️⃣ [ASÍNCRONO - 0ms] El Event Loop lo extrajo de la Task Queue porque el Call Stack ya quedó libre.', 'linea-asincrono');
    }, 0);

    // 3. SEGUNDA INSTRUCCIÓN SÍNCRONA DIRECTA (Ocurre ANTES que el callback de 0ms)
    registrarLinea('2️⃣ [SÍNCRONO FINAL] Esta línea se ejecuta ANTES que el setTimeout a pesar de que el temporizador era de 0ms.', 'linea-sincrono');

    resultado.textContent = '✅ Observa el orden: 1️⃣ -> 2️⃣ -> 3️⃣. La tarea asíncrona NUNCA interrumpe la pila síncrona en curso.';
    resultado.className = 'resultado alerta-exito';
}

// 4. funciones de eventos
function alPulsarEjecutar() {
    lanzarExperimentoEventLoop();
}

function alPulsarLimpiar() {
    limpiarConsola();
}

// 5. escuchadores de eventos (addEventListener)
btnEjecutarPrueba.addEventListener('click', alPulsarEjecutar);
btnLimpiarConsola.addEventListener('click', alPulsarLimpiar);
