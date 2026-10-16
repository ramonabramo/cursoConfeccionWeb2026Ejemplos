// ==========================================================================
// EJERCICIO 08 (Práctica): Simulador de Carga de Batería Inteligente
// OBJETIVO: Incrementar carga periódicamente con setInterval, cambiar estilos y parar en 100%.
// ==========================================================================

// 1. variables y constantes de estado
let bateriaIntervalId = null;
let nivelBateria = 15;

// 2. constantes al DOM
const bateriaRelleno = document.querySelector('#bateriaRelleno');
const bateriaTexto = document.querySelector('#bateriaTexto');
const btnConectar = document.querySelector('#btnConectarCargador');
const btnDesconectar = document.querySelector('#btnDesconectarCargador');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function aplicarColorBateria(nivel) {
    if (nivel < 20) {
        bateriaRelleno.style.backgroundColor = '#ef4444'; // Rojo (Crítico)
    } else if (nivel < 80) {
        bateriaRelleno.style.backgroundColor = '#f59e0b'; // Naranja / Ámbar (Normal)
    } else {
        bateriaRelleno.style.backgroundColor = '#10b981'; // Verde (Óptimo)
    }
}

function actualizarInterfazBateria() {
    bateriaRelleno.style.width = `${nivelBateria}%`;
    bateriaTexto.textContent = `${nivelBateria}%`;
    aplicarColorBateria(nivelBateria);
}

function iniciarCarga() {
    if (bateriaIntervalId !== null) return;

    if (nivelBateria >= 100) {
        nivelBateria = 15; // Reiniciar si ya estaba llena para poder repetir la prueba
    }

    btnConectar.disabled = true;
    btnDesconectar.disabled = false;

    resultado.textContent = '⚡ Cargando batería rápidamente mediante setInterval()...';
    resultado.className = 'resultado alerta-espera';

    // Intervalo de 60ms
    bateriaIntervalId = setInterval(() => {
        nivelBateria++;
        actualizarInterfazBateria();

        if (nivelBateria >= 100) {
            clearInterval(bateriaIntervalId);
            bateriaIntervalId = null;

            btnConectar.disabled = false;
            btnDesconectar.disabled = true;

            resultado.textContent = '🔋 ¡Batería cargada al 100%! El cargador inteligente detuvo el suministro automáticamente.';
            resultado.className = 'resultado alerta-exito';
        }
    }, 60);
}

function detenerCarga() {
    if (bateriaIntervalId !== null) {
        clearInterval(bateriaIntervalId);
        bateriaIntervalId = null;

        btnConectar.disabled = false;
        btnDesconectar.disabled = true;

        resultado.textContent = `🔌 Cargador desconectado. El nivel se quedó en ${nivelBateria}%.`;
        resultado.className = 'resultado';
    }
}

// 4. funciones de eventos
function alPulsarConectar() {
    iniciarCarga();
}

function alPulsarDesconectar() {
    detenerCarga();
}

// 5. escuchadores de eventos (addEventListener)
btnConectar.addEventListener('click', alPulsarConectar);
btnDesconectar.addEventListener('click', alPulsarDesconectar);

// Inicializar color según el estado base
aplicarColorBateria(nivelBateria);
