// ==========================================================================
// EJERCICIO 02 (Práctica): Simulador de Descarga Programada con Cancelación
// OBJETIVO: Implementar setTimeout() de 5000ms y clearTimeout() al pulsar cancelar.
// ==========================================================================

// 1. variables y constantes de estado
let timerDescarga = null;

// 2. constantes al DOM
const btnDescargar = document.querySelector('#btnDescargar');
const btnCancelarDescarga = document.querySelector('#btnCancelarDescarga');
const iconoEstado = document.querySelector('#iconoEstado');
const textoEstadoDescarga = document.querySelector('#textoEstadoDescarga');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function restaurarEstadoBotones() {
    btnDescargar.disabled = false;
    btnCancelarDescarga.disabled = true;
}

function completarDescarga() {
    timerDescarga = null;
    restaurarEstadoBotones();

    iconoEstado.textContent = '✅';
    textoEstadoDescarga.textContent = '¡Descarga completada con éxito!';

    resultado.textContent = '🎉 El archivo "documento_seguro.pdf" (12.4 MB) se ha descargado correctamente.';
    resultado.className = 'resultado alerta-exito';
}

function iniciarProcesoDescarga() {
    // Si ya había una descarga pendiente, la cancelamos primero
    if (timerDescarga !== null) {
        clearTimeout(timerDescarga);
    }

    btnDescargar.disabled = true;
    btnCancelarDescarga.disabled = false;

    iconoEstado.textContent = '⏳';
    textoEstadoDescarga.textContent = 'Analizando antivirus... La descarga comenzará en 5 segundos.';

    resultado.textContent = '⚠️ Descarga programada. Puedes anular la petición pulsando "Cancelar Descarga".';
    resultado.className = 'resultado alerta-espera';

    // Programar la descarga tras 5000 milisegundos
    timerDescarga = setTimeout(() => {
        completarDescarga();
    }, 5000);
}

function abortarDescarga() {
    if (timerDescarga !== null) {
        // Cancelamos la orden asíncrona pendiente
        clearTimeout(timerDescarga);
        timerDescarga = null;

        restaurarEstadoBotones();

        iconoEstado.textContent = '🚫';
        textoEstadoDescarga.textContent = 'Descarga abortada por el usuario.';

        resultado.textContent = '🛑 La descarga fue cancelada con éxito mediante clearTimeout() antes de completarse.';
        resultado.className = 'resultado alerta-peligro';
    }
}

// 4. funciones de eventos
function alPulsarDescargar() {
    iniciarProcesoDescarga();
}

function alPulsarCancelar() {
    abortarDescarga();
}

// 5. escuchadores de eventos (addEventListener)
btnDescargar.addEventListener('click', alPulsarDescargar);
btnCancelarDescarga.addEventListener('click', alPulsarCancelar);
