// ==========================================================================
// EJERCICIO 04 (Práctica): Temporizador de Cuenta Regresiva
// OBJETIVO: Descontar 1 segundo cada 1000ms con setInterval y parar en 0 con clearInterval.
// ==========================================================================

// 1. variables y constantes de estado
let timerRegresivoId = null;
let segundosRestantes = 0;

// 2. constantes al DOM
const inputSegundos = document.querySelector('#inputSegundos');
const displayCuenta = document.querySelector('#displayCuentaRegresiva');
const subtextoCuenta = document.querySelector('#subtextoCuenta');
const btnComenzar = document.querySelector('#btnComenzarCuenta');
const btnAbortar = document.querySelector('#btnAbortarCuenta');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function limpiarTemporizador() {
    if (timerRegresivoId !== null) {
        clearInterval(timerRegresivoId);
        timerRegresivoId = null;
    }
}

function notificarFinDeTiempo() {
    limpiarTemporizador();
    displayCuenta.textContent = '0';
    displayCuenta.classList.add('texto-parpadeo-alerta');
    subtextoCuenta.textContent = '¡TIEMPO FINALIZADO!';

    resultado.textContent = '🚨 ¡Ding, Ding, Ding! ¡El tiempo ha concluido! El intervalo se detuvo automáticamente.';
    resultado.className = 'resultado alerta-peligro';
}

function comenzarCuentaAtras() {
    limpiarTemporizador();
    displayCuenta.classList.remove('texto-parpadeo-alerta');

    const segundosIngresados = Number(inputSegundos.value);

    if (isNaN(segundosIngresados) || segundosIngresados <= 0) {
        resultado.textContent = '⚠️ Introduce un número entero válido mayor a 0.';
        resultado.className = 'resultado alerta-peligro';
        return;
    }

    segundosRestantes = segundosIngresados;
    displayCuenta.textContent = segundosRestantes;
    subtextoCuenta.textContent = 'segundos restantes';

    resultado.textContent = `⏳ Cuenta atrás iniciada para ${segundosRestantes} segundos...`;
    resultado.className = 'resultado alerta-espera';

    // Intervalo de 1 segundo (1000 ms)
    timerRegresivoId = setInterval(() => {
        segundosRestantes--;
        displayCuenta.textContent = segundosRestantes;

        if (segundosRestantes <= 0) {
            notificarFinDeTiempo();
        }
    }, 1000);
}

function abortarCuentaAtras() {
    if (timerRegresivoId !== null) {
        limpiarTemporizador();
        displayCuenta.classList.remove('texto-parpadeo-alerta');
        subtextoCuenta.textContent = 'detenido';

        resultado.textContent = `🛑 Cuenta regresiva abortada manualmente cuando quedaban ${segundosRestantes} segundos.`;
        resultado.className = 'resultado';
    } else {
        resultado.textContent = 'ℹ️ No hay ninguna cuenta atrás activa en este momento.';
    }
}

// 4. funciones de eventos
function alPulsarComenzar() {
    comenzarCuentaAtras();
}

function alPulsarAbortar() {
    abortarCuentaAtras();
}

// 5. escuchadores de eventos (addEventListener)
btnComenzar.addEventListener('click', alPulsarComenzar);
btnAbortar.addEventListener('click', alPulsarAbortar);
