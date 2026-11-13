// ==========================================================================
// EJERCICIO 03 (Guiado): Cronómetro Digital (setInterval y clearInterval)
// OBJETIVO: Repetición continua cada 100ms, parada con clearInterval() y control de intervaloId.
// ==========================================================================

// 1. variables y constantes de estado
let intervaloId = null;
let totalDecimas = 0;

// 2. constantes al DOM
const displayTiempo = document.querySelector('#displayTiempo');
const badgeEstado = document.querySelector('#badgeEstadoCronometro');
const btnIniciar = document.querySelector('#btnIniciar');
const btnPausar = document.querySelector('#btnPausar');
const btnReiniciar = document.querySelector('#btnReiniciar');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function formatearTiempo(decimasTotales) {
    const minutos = Math.floor(decimasTotales / 600);
    const segundos = Math.floor((decimasTotales % 600) / 10);
    const decimas = decimasTotales % 10;

    const minStr = String(minutos).padStart(2, '0');
    const segStr = String(segundos).padStart(2, '0');

    return `${minStr}:${segStr}.${decimas}`;
}

function actualizarDisplay() {
    displayTiempo.textContent = formatearTiempo(totalDecimas);
}

function arrancarCronometro() {
    // PREVENCIÓN DE ERROR: Si el intervalo ya está en marcha, evitamos duplicarlo
    if (intervaloId !== null) {
        resultado.textContent = 'ℹ️ El cronómetro ya se encuentra en ejecución. No se crearán intervalos duplicados.';
        return;
    }

    badgeEstado.textContent = 'EN MARCHA';
    badgeEstado.className = 'badge-estado badge-activo';

    resultado.textContent = '⏱️ Cronómetro iniciado con setInterval(..., 100).';
    resultado.className = 'resultado alerta-exito';

    intervaloId = setInterval(() => {
        totalDecimas++;
        actualizarDisplay();
    }, 100);
}

function pausarCronometro() {
    if (intervaloId !== null) {
        // Detener el bucle en el navegador
        clearInterval(intervaloId);
        intervaloId = null; // Muy importante para permitir volver a iniciar

        badgeEstado.textContent = 'PAUSADO';
        badgeEstado.className = 'badge-estado badge-pausado';

        resultado.textContent = `⏸️ Cronómetro pausado en ${formatearTiempo(totalDecimas)} mediante clearInterval().`;
        resultado.className = 'resultado alerta-espera';
    }
}

function reiniciarCronometro() {
    pausarCronometro();
    totalDecimas = 0;
    actualizarDisplay();

    badgeEstado.textContent = 'DETENIDO';
    badgeEstado.className = 'badge-estado badge-detenido';

    resultado.textContent = '🔄 Cronómetro reseteado a 00:00.0.';
    resultado.className = 'resultado';
}

// 4. funciones de eventos
function alPulsarIniciar() {
    arrancarCronometro();
}

function alPulsarPausar() {
    pausarCronometro();
}

function alPulsarReiniciar() {
    reiniciarCronometro();
}

// 5. escuchadores de eventos (addEventListener)
btnIniciar.addEventListener('click', alPulsarIniciar);
btnPausar.addEventListener('click', alPulsarPausar);
btnReiniciar.addEventListener('click', alPulsarReiniciar);
