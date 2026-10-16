// ==========================================================================
// EJERCICIO 10 (Práctica): Ticker de Noticias de Última Hora en Vivo
// OBJETIVO: Rotación periódica cada 2500ms con setInterval, pausa al hover y botón de alternancia.
// ==========================================================================

// 1. variables y constantes de estado
// - ID del intervalo: let tickerIntervalId = null;
// - Índice actual: let indiceNoticia = 0;
// - Array de objetos noticias: [{ titular, categoria, hora }, ...]
// - Bandera de pausa manual: let pausaManual = false;

// 2. constantes al DOM
// - Contenedor: #cajaTicker
// - Textos: #categoriaNoticia, #titularNoticia, #horaNoticia
// - Botones: #btnSiguienteNoticia, #btnToggleTicker
// - Div resultado: #resultado

// 3. funciones auxiliares
// - function mostrarNoticia():
//     * Extrae noticia = noticias[indiceNoticia] y actualiza los campos correspondientes.
// - function pasarSiguienteNoticia():
//     * indiceNoticia = (indiceNoticia + 1) % noticias.length
//     * mostrarNoticia()
// - function arrancarTicker():
//     * Inicia setInterval(pasarSiguienteNoticia, 2500)
// - function frenarTicker():
//     * clearInterval(tickerIntervalId)

// 4. funciones de eventos
// - mouseenter en #cajaTicker -> si no hay pausa manual, frena el ticker
// - mouseleave en #cajaTicker -> si no hay pausa manual, reanuda el ticker
// - click en #btnSiguienteNoticia -> pasarSiguienteNoticia()
// - click en #btnToggleTicker -> conmuta la pausa manual

// 5. escuchadores de eventos (addEventListener)
