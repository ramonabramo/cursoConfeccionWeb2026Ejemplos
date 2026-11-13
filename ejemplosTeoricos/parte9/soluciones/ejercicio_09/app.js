// ==========================================================================
// EJERCICIO 09 (Guiado): Carrusel de Testimonios con Pausa al Hover
// OBJETIVO: Autoplay con setInterval(), pausar en mouseenter con clearInterval(), y reanudar en mouseleave.
// ==========================================================================

// 1. variables y constantes de estado
let carruselIntervalId = null;
let indiceSlide = 0;

const slides = [
    {
        icono: '🌟',
        cita: 'JavaScript ha transformado por completo la forma en que construimos aplicaciones web interactivas.',
        autor: '— Carmen Gómez, Ingeniera Frontend'
    },
    {
        icono: '🚀',
        cita: 'Comprender el Event Loop y la asincronía te separa de un programador novato a un auténtico profesional.',
        autor: '— David Martínez, Arquitecto Web'
    },
    {
        icono: '💡',
        cita: 'Manipular el DOM con eventos limpios y temporizadores controlados hace que tus interfaces cobren vida.',
        autor: '— Laura Sánchez, Diseñadora UI/UX'
    }
];

// 2. constantes al DOM
const contenedorCarrusel = document.querySelector('#contenedorCarrusel');
const badgeCarrusel = document.querySelector('#badgeCarrusel');
const contadorSlide = document.querySelector('#contadorSlide');
const slideIcono = document.querySelector('#slideIcono');
const slideCita = document.querySelector('#slideCita');
const slideAutor = document.querySelector('#slideAutor');
const btnAnterior = document.querySelector('#btnSlideAnterior');
const btnSiguiente = document.querySelector('#btnSlideSiguiente');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function renderizarSlide() {
    const slideActual = slides[indiceSlide];
    slideIcono.textContent = slideActual.icono;
    slideCita.textContent = `"${slideActual.cita}"`;
    slideAutor.textContent = slideActual.autor;
    contadorSlide.textContent = `${indiceSlide + 1} / ${slides.length}`;
}

function avanzarSlide() {
    indiceSlide = (indiceSlide + 1) % slides.length;
    renderizarSlide();
}

function retrocederSlide() {
    indiceSlide = (indiceSlide - 1 + slides.length) % slides.length;
    renderizarSlide();
}

function iniciarAutoplay() {
    if (carruselIntervalId !== null) {
        clearInterval(carruselIntervalId);
    }

    badgeCarrusel.textContent = 'AUTOPLAY ACTIVO';
    badgeCarrusel.className = 'badge-autoplay badge-activo';

    resultado.textContent = '▶️ Autoplay reanudado. Rotará automáticamente cada 3 segundos.';
    resultado.className = 'resultado alerta-exito';

    carruselIntervalId = setInterval(avanzarSlide, 3000);
}

function pausarAutoplay() {
    if (carruselIntervalId !== null) {
        clearInterval(carruselIntervalId);
        carruselIntervalId = null;

        badgeCarrusel.textContent = 'PAUSADO (CURSOR ENCIMA)';
        badgeCarrusel.className = 'badge-autoplay badge-pausado';

        resultado.textContent = '⏸️ Autoplay pausado mediante clearInterval() porque el cursor está sobre el carrusel.';
        resultado.className = 'resultado alerta-espera';
    }
}

// 4. funciones de eventos
function alEntrarRaton() {
    pausarAutoplay();
}

function alSalirRaton() {
    iniciarAutoplay();
}

function alPulsarSiguiente() {
    avanzarSlide();
}

function alPulsarAnterior() {
    retrocederSlide();
}

// 5. escuchadores de eventos (addEventListener)
contenedorCarrusel.addEventListener('mouseenter', alEntrarRaton);
contenedorCarrusel.addEventListener('mouseleave', alSalirRaton);
btnSiguiente.addEventListener('click', alPulsarSiguiente);
btnAnterior.addEventListener('click', alPulsarAnterior);

// Iniciar estado
renderizarSlide();
iniciarAutoplay();
