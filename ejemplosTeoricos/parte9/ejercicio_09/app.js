// ==========================================================================
// EJERCICIO 09 (Guiado): Carrusel de Testimonios con Pausa al Hover
// OBJETIVO: Autoplay con setInterval(), pausar en mouseenter con clearInterval(), y reanudar en mouseleave.
// ==========================================================================

// 1. variables y constantes de estado
// - ID del intervalo: let carruselIntervalId = null;
// - Índice actual del slide: let indiceSlide = 0;
// - Array de datos de diapositivas con citas y autores

// 2. constantes al DOM
// - Contenedor: #contenedorCarrusel
// - Elementos de la tarjeta: #badgeCarrusel, #contadorSlide, #slideIcono, #slideCita, #slideAutor
// - Botones de navegación: #btnSlideAnterior, #btnSlideSiguiente
// - Div resultado: #resultado

// 3. funciones auxiliares
// - function renderizarSlide():
//     * Lee la diapositiva en datosSlides[indiceSlide] y pinta sus datos en el DOM.
// - function siguienteSlide():
//     * Incrementa indiceSlide de forma circular: (indiceSlide + 1) % datosSlides.length
//     * renderizarSlide()
// - function anteriorSlide():
//     * Decrementa indiceSlide de forma circular.
//     * renderizarSlide()
// - function iniciarAutoplay():
//     * Si carruselIntervalId !== null, detenerlo primero.
//     * Arranca carruselIntervalId = setInterval(siguienteSlide, 3000)
// - function pausarAutoplay():
//     * clearInterval(carruselIntervalId) y pone carruselIntervalId = null.

// 4. funciones de eventos
// - mouseenter en #contenedorCarrusel -> pausarAutoplay()
// - mouseleave en #contenedorCarrusel -> iniciarAutoplay()
// - click en #btnSlideSiguiente -> siguienteSlide()
// - click en #btnSlideAnterior -> anteriorSlide()

// 5. escuchadores de eventos (addEventListener)
