// ==========================================================================
// EJERCICIO 01 (Guiado): Notificación Toast con Cancelación (clearTimeout)
// OBJETIVO: Programar una acción diferida con setTimeout() y cancelarla con clearTimeout().
// ==========================================================================

// 1. variables y constantes de estado
let timeoutId = null;
let intervaloCuenta = null;
let segundosRestantes = 4;

// 2. constantes al DOM
const btnEjecutar = document.querySelector('#btnEjecutar');
const btnDeshacer = document.querySelector('#btnDeshacer');
const toastNotificacion = document.querySelector('#toastNotificacion');
const toastCuentaAtras = document.querySelector('#toastCuentaAtras');
const barraTiempoProgreso = document.querySelector('#barraTiempoProgreso');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function limpiarTemporizadores() {
    if (timeoutId !== null) {
        clearTimeout(timeoutId);
        timeoutId = null;
    }
    if (intervaloCuenta !== null) {
        clearInterval(intervaloCuenta);
        intervaloCuenta = null;
    }
}

function restaurarBotones() {
    btnEjecutar.disabled = false;
    btnDeshacer.disabled = true;
    barraTiempoProgreso.style.width = '100%';
}

function ejecutarEliminacionDefinitiva() {
    limpiarTemporizadores();
    toastNotificacion.classList.add('oculto');
    restaurarBotones();

    resultado.textContent = '❌ El elemento ha sido eliminado definitivamente de la base de datos.';
    resultado.className = 'resultado alerta-peligro';
}

function iniciarToast() {
    // Si había un temporizador previo, lo limpiamos
    limpiarTemporizadores();

    segundosRestantes = 4;
    toastCuentaAtras.textContent = `Se eliminará definitivamente en ${segundosRestantes} segundos...`;
    barraTiempoProgreso.style.width = '100%';

    // Modificar visibilidad y botones
    toastNotificacion.classList.remove('oculto');
    btnEjecutar.disabled = true;
    btnDeshacer.disabled = false;

    resultado.textContent = '⏳ Eliminación programada. Tienes 4 segundos para cancelar con el botón Deshacer.';
    resultado.className = 'resultado alerta-espera';

    // 1. Asincronía: Programamos la eliminación real con setTimeout
    timeoutId = setTimeout(() => {
        ejecutarEliminacionDefinitiva();
    }, 4000);

    // 2. Intervalo visual para actualizar la cuenta regresiva en pantalla
    intervaloCuenta = setInterval(() => {
        segundosRestantes--;
        if (segundosRestantes > 0) {
            toastCuentaAtras.textContent = `Se eliminará definitivamente en ${segundosRestantes} segundo${segundosRestantes === 1 ? '' : 's'}...`;
            barraTiempoProgreso.style.width = `${(segundosRestantes / 4) * 100}%`;
        }
    }, 1000);
}

function cancelarAccion() {
    if (timeoutId !== null) {
        // Cancelamos la ejecución diferida antes de que ocurra
        clearTimeout(timeoutId);
        clearInterval(intervaloCuenta);
        limpiarTemporizadores();

        toastNotificacion.classList.add('oculto');
        restaurarBotones();

        resultado.textContent = '✅ Operación cancelada a tiempo mediante clearTimeout(). El elemento sigue intacto.';
        resultado.className = 'resultado alerta-exito';
    }
}

// 4. funciones de eventos
function alPulsarEjecutar() {
    iniciarToast();
}

function alPulsarDeshacer() {
    cancelarAccion();
}

// 5. escuchadores de eventos (addEventListener)
btnEjecutar.addEventListener('click', alPulsarEjecutar);
btnDeshacer.addEventListener('click', alPulsarDeshacer);
