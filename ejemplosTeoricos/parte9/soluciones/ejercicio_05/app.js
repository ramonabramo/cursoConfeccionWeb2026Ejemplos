// ==========================================================================
// EJERCICIO 05 (Guiado): Reloj Digital en Vivo (setInterval + Date)
// OBJETIVO: Leer new Date() cada 1000ms, formatear con padStart y pausar/reanudar.
// ==========================================================================

// 1. variables y constantes de estado
let relojIntervalId = null;
let relojActivo = true;

// 2. constantes al DOM
const relojFecha = document.querySelector('#relojFecha');
const relojHoras = document.querySelector('#relojHoras');
const relojMinutos = document.querySelector('#relojMinutos');
const relojSegundos = document.querySelector('#relojSegundos');
const relojBadge = document.querySelector('#relojBadge');
const btnToggleReloj = document.querySelector('#btnToggleReloj');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function pad(num) {
    return String(num).padStart(2, '0');
}

function formatearFechaEspanol(fecha) {
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const textoFecha = fecha.toLocaleDateString('es-ES', opciones);
    // Capitalizar la primera letra
    return textoFecha.charAt(0).toUpperCase() + textoFecha.slice(1);
}

function actualizarReloj() {
    const ahora = new Date();

    // Actualizar números de hora
    relojHoras.textContent = pad(ahora.getHours());
    relojMinutos.textContent = pad(ahora.getMinutes());
    relojSegundos.textContent = pad(ahora.getSeconds());

    // Actualizar fecha completa
    relojFecha.textContent = formatearFechaEspanol(ahora);
}

function iniciarReloj() {
    actualizarReloj(); // Primera ejecución síncrona inmediata para no ver "00:00:00" durante el primer segundo

    relojIntervalId = setInterval(() => {
        actualizarReloj();
    }, 1000);

    relojActivo = true;
    relojBadge.textContent = 'EN VIVO';
    relojBadge.className = 'badge-reloj badge-reloj-vivo';
    btnToggleReloj.textContent = '⏸️ Pausar Reloj';

    resultado.textContent = '🟢 Reloj sincronizado con el sistema. Tick de 1000ms activo.';
    resultado.className = 'resultado alerta-exito';
}

function pausarReloj() {
    clearInterval(relojIntervalId);
    relojIntervalId = null;
    relojActivo = false;

    relojBadge.textContent = 'PAUSADO';
    relojBadge.className = 'badge-reloj badge-reloj-pausado';
    btnToggleReloj.textContent = '▶️ Reanudar Reloj';

    resultado.textContent = '⏸️ Reloj congelado con clearInterval(). La hora del sistema sigue avanzando en segundo plano.';
    resultado.className = 'resultado alerta-espera';
}

// 4. funciones de eventos
function alPulsarToggleReloj() {
    if (relojActivo) {
        pausarReloj();
    } else {
        iniciarReloj();
    }
}

// 5. escuchadores de eventos (addEventListener)
btnToggleReloj.addEventListener('click', alPulsarToggleReloj);

// Inicialización al cargar el script
iniciarReloj();
