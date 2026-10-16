// ==========================================================================
// EJERCICIO 06 (Práctica): Reloj con Formato 12H / 24H
// OBJETIVO: Conmutar entre 24h y 12h con sufijo AM/PM manteniendo el setInterval activo.
// ==========================================================================

// 1. variables y constantes de estado
let timerRelojId = null;
let usarFormato12h = false;

// 2. constantes al DOM
const indicadorModo = document.querySelector('#indicadorModo');
const relojDisplay = document.querySelector('#relojDisplay12o24');
const sufijoAmPm = document.querySelector('#sufijoAmPm');
const btnCambiarFormato = document.querySelector('#btnCambiarFormato');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function pad(n) {
    return String(n).padStart(2, '0');
}

function actualizarReloj() {
    const ahora = new Date();
    const horasReales = ahora.getHours();
    const minutos = pad(ahora.getMinutes());
    const segundos = pad(ahora.getSeconds());

    if (usarFormato12h) {
        // Lógica de 12 horas con AM/PM
        const ampm = horasReales >= 12 ? 'PM' : 'AM';
        const horas12 = horasReales % 12 || 12; // 0h pasa a ser 12 AM

        relojDisplay.textContent = `${pad(horas12)}:${minutos}:${segundos}`;
        sufijoAmPm.textContent = ampm;
        sufijoAmPm.style.display = 'inline-block';
    } else {
        // Lógica estándar de 24 horas
        relojDisplay.textContent = `${pad(horasReales)}:${minutos}:${segundos}`;
        sufijoAmPm.textContent = '';
        sufijoAmPm.style.display = 'none';
    }
}

function conmutarFormato() {
    usarFormato12h = !usarFormato12h;

    if (usarFormato12h) {
        indicadorModo.textContent = 'MODO: 12 HORAS (AM / PM)';
        btnCambiarFormato.textContent = '🔄 Cambiar a Formato 24 Horas';
        resultado.textContent = 'ℹ️ Formato de 12 horas activado (con sufijo AM / PM).';
    } else {
        indicadorModo.textContent = 'MODO: 24 HORAS';
        btnCambiarFormato.textContent = '🔄 Cambiar a Formato 12 Horas (AM/PM)';
        resultado.textContent = 'ℹ️ Formato de 24 horas militar/europeo activado.';
    }

    // Actualización inmediata para que el usuario no espere al siguiente segundo
    actualizarReloj();
}

// 4. funciones de eventos
function alPulsarCambiarFormato() {
    conmutarFormato();
}

// 5. escuchadores de eventos (addEventListener)
btnCambiarFormato.addEventListener('click', alPulsarCambiarFormato);

// Iniciar el reloj de inmediato
actualizarReloj();
timerRelojId = setInterval(actualizarReloj, 1000);
