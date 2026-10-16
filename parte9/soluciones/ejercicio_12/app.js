// ==========================================================================
// EJERCICIO 12 (Práctica): Minijuego de Reflejos / Semáforo Asíncrono
// OBJETIVO: Retardo aleatorio con setTimeout(..., random), cancelar trampa con clearTimeout(), y medir ms con Date.now().
// ==========================================================================

// 1. variables y constantes de estado
let juegoTimeoutId = null;
let tiempoInicioVerde = 0;
let estadoPartida = 'inactivo'; // 'inactivo' | 'esperando_verde' | 'verde_activo' | 'terminado'

// 2. constantes al DOM
const cajaSemaforo = document.querySelector('#cajaSemaforo');
const iconoReflejos = document.querySelector('#iconoReflejos');
const textoReflejos = document.querySelector('#textoReflejos');
const btnIniciarJuego = document.querySelector('#btnIniciarJuego');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function iniciarPartida() {
    // Si había un temporizador corriendo, lo limpiamos de inmediato
    if (juegoTimeoutId !== null) {
        clearTimeout(juegoTimeoutId);
        juegoTimeoutId = null;
    }

    estadoPartida = 'esperando_verde';
    btnIniciarJuego.disabled = true;

    // Estado Rojo: Espera
    cajaSemaforo.className = 'zona-reflejos semaforo-rojo';
    iconoReflejos.textContent = '🔴';
    textoReflejos.textContent = '¡ESPERA! No hagas clic todavía...';

    resultado.textContent = '⏳ El semáforo cambiará en un momento aleatorio entre 2 y 5 segundos...';
    resultado.className = 'resultado alerta-espera';

    // Generar tiempo aleatorio entre 2000ms y 5000ms
    const retardoAleatorio = Math.floor(Math.random() * 3000) + 2000;

    juegoTimeoutId = setTimeout(() => {
        estadoPartida = 'verde_activo';
        tiempoInicioVerde = Date.now(); // Guardar timestamp exacto

        // Estado Verde: ¡Clic!
        cajaSemaforo.className = 'zona-reflejos semaforo-verde';
        iconoReflejos.textContent = '🟢';
        textoReflejos.textContent = '¡¡HAZ CLIC AHORA MISMO!!';
    }, retardoAleatorio);
}

function evaluarClicUsuario() {
    if (estadoPartida === 'esperando_verde') {
        // Hizo clic antes de tiempo (falso arranque)
        clearTimeout(juegoTimeoutId);
        juegoTimeoutId = null;
        estadoPartida = 'inactivo';
        btnIniciarJuego.disabled = false;

        cajaSemaforo.className = 'zona-reflejos semaforo-fallo';
        iconoReflejos.textContent = '⚠️';
        textoReflejos.textContent = '¡FALSO ARRANQUE!';

        resultado.textContent = '🚫 ¡Hiciste clic demasiado pronto mientras estaba en rojo! El temporizador fue cancelado con clearTimeout(). Pulsa Iniciar para reintentar.';
        resultado.className = 'resultado alerta-peligro';

    } else if (estadoPartida === 'verde_activo') {
        // Clic válido en verde: calcular tiempo de reacción
        const tiempoReaccion = Date.now() - tiempoInicioVerde;
        estadoPartida = 'terminado';
        btnIniciarJuego.disabled = false;

        cajaSemaforo.className = 'zona-reflejos semaforo-completado';
        iconoReflejos.textContent = '🏆';
        textoReflejos.textContent = `¡${tiempoReaccion} ms!`;

        let valoracion = '';
        if (tiempoReaccion < 250) {
            valoracion = '🚀 ¡Reflejos sobrehumanos de piloto de F1!';
        } else if (tiempoReaccion < 400) {
            valoracion = '⚡ ¡Excelente tiempo de reacción!';
        } else {
            valoracion = '☕ Buenos reflejos, ¡pero un café te vendría bien!';
        }

        resultado.textContent = `🎯 Tu tiempo de reacción ha sido de ${tiempoReaccion} milisegundos. ${valoracion}`;
        resultado.className = 'resultado alerta-exito';
    }
}

// 4. funciones de eventos
function alPulsarIniciar() {
    iniciarPartida();
}

function alPulsarCajaSemaforo() {
    evaluarClicUsuario();
}

// 5. escuchadores de eventos (addEventListener)
btnIniciarJuego.addEventListener('click', alPulsarIniciar);
cajaSemaforo.addEventListener('click', alPulsarCajaSemaforo);
