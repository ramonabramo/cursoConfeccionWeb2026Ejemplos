// ==========================================================================
// EJERCICIO 10 (Práctica): Ticker de Noticias de Última Hora en Vivo
// OBJETIVO: Rotación periódica cada 2500ms con setInterval, pausa al hover y botón de alternancia.
// ==========================================================================

// 1. variables y constantes de estado
let tickerIntervalId = null;
let indiceNoticia = 0;
let pausaManual = false;

const noticias = [
    {
        categoria: 'TECNOLOGÍA',
        titular: 'JavaScript consolida su liderazgo como el lenguaje más utilizado en el desarrollo web global.',
        hora: '18:15'
    },
    {
        categoria: 'CIENCIA',
        titular: 'Descubren un nuevo exoplaneta con atmósfera similar a la Tierra a 40 años luz.',
        hora: '18:22'
    },
    {
        categoria: 'EDUCACIÓN',
        titular: 'Los alumnos de Confección Web 2026 dominan la asincronía y el Event Loop en tiempo récord.',
        hora: '18:30'
    },
    {
        categoria: 'INTERNET',
        titular: 'Nuevos estándares del W3C aceleran la velocidad de carga en dispositivos móviles.',
        hora: '18:45'
    }
];

// 2. constantes al DOM
const cajaTicker = document.querySelector('#cajaTicker');
const categoriaNoticia = document.querySelector('#categoriaNoticia');
const titularNoticia = document.querySelector('#titularNoticia');
const horaNoticia = document.querySelector('#horaNoticia');
const btnSiguienteNoticia = document.querySelector('#btnSiguienteNoticia');
const btnToggleTicker = document.querySelector('#btnToggleTicker');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function mostrarNoticiaActual() {
    const n = noticias[indiceNoticia];
    categoriaNoticia.textContent = n.categoria;
    titularNoticia.textContent = n.titular;
    horaNoticia.textContent = n.hora;
}

function avanzarNoticia() {
    indiceNoticia = (indiceNoticia + 1) % noticias.length;
    mostrarNoticiaActual();
}

function arrancarTicker() {
    if (tickerIntervalId !== null) clearInterval(tickerIntervalId);

    tickerIntervalId = setInterval(avanzarNoticia, 2500);

    resultado.textContent = '🟢 Ticker emitiendo noticias automáticamente cada 2.5 segundos.';
    resultado.className = 'resultado alerta-exito';
}

function frenarTicker() {
    if (tickerIntervalId !== null) {
        clearInterval(tickerIntervalId);
        tickerIntervalId = null;

        resultado.textContent = '⏸️ Lectura pausada. El teletipo está congelado.';
        resultado.className = 'resultado alerta-espera';
    }
}

// 4. funciones de eventos
function alPonerCursor() {
    if (!pausaManual) {
        frenarTicker();
    }
}

function alQuitarCursor() {
    if (!pausaManual) {
        arrancarTicker();
    }
}

function alPulsarSiguiente() {
    avanzarNoticia();
}

function alPulsarTogglePausa() {
    pausaManual = !pausaManual;

    if (pausaManual) {
        frenarTicker();
        btnToggleTicker.textContent = '▶️ Reanudar Ticker';
        resultado.textContent = '🛑 Ticker pausado permanentemente por el usuario.';
    } else {
        arrancarTicker();
        btnToggleTicker.textContent = '⏸️ Pausa Manual';
        resultado.textContent = '🟢 Ticker reanudado con éxito.';
    }
}

// 5. escuchadores de eventos (addEventListener)
cajaTicker.addEventListener('mouseenter', alPonerCursor);
cajaTicker.addEventListener('mouseleave', alQuitarCursor);
btnSiguienteNoticia.addEventListener('click', alPulsarSiguiente);
btnToggleTicker.addEventListener('click', alPulsarTogglePausa);

// Inicio
mostrarNoticiaActual();
arrancarTicker();
