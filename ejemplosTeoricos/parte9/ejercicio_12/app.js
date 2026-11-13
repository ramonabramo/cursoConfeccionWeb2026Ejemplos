// ==========================================================================
// EJERCICIO 12 (Práctica): Minijuego de Reflejos / Semáforo Asíncrono
// OBJETIVO: Retardo aleatorio con setTimeout(..., random), cancelar trampa con clearTimeout(), y medir ms con Date.now().
// ==========================================================================

// 1. variables y constantes de estado
// - ID del temporizador: let juegoTimeoutId = null;
// - Timestamp del momento en que se pone verde: let tiempoInicio = 0;
// - Estado del juego: let estado = 'inactivo'; // 'esperando_verde', 'verde_listo', 'finalizado'

// 2. constantes al DOM
// - Semáforo interactivo: #cajaSemaforo
// - Icono: #iconoReflejos
// - Texto semáforo: #textoReflejos
// - Botón iniciar: #btnIniciarJuego
// - Div resultado: #resultado

// 3. funciones auxiliares
// - function iniciarPartida():
//     * Si había un juego previo, clearTimeout(juegoTimeoutId).
//     * Cambiar estado a 'esperando_verde'.
//     * Poner estilo rojo y texto: "¡ESPERA!... No hagas clic todavía."
//     * Calcular retardo aleatorio entre 2000 y 5000ms: Math.floor(Math.random() * 3000) + 2000.
//     * juegoTimeoutId = setTimeout(() => {
//           estado = 'verde_listo';
//           tiempoInicio = Date.now();
//           Poner estilo verde y texto: "¡¡HAZ CLIC AHORA!!"
//       }, retardo);
//
// - function alHacerClicEnSemaforo():
//     * Si estado === 'esperando_verde':
//         - ¡Hizo clic demasiado pronto!
//         - clearTimeout(juegoTimeoutId)
//         - estado = 'inactivo'
//         - Poner estilo amarillo/fallo y texto: "¡Demasiado pronto! Descalificado por falso arranque 🚫"
//     * Si estado === 'verde_listo':
//         - const milisegundos = Date.now() - tiempoInicio;
//         - estado = 'finalizado'
//         - Mostrar puntuación: "¡Tus reflejos fueron de X ms! 🏆"

// 4. funciones de eventos
// - Click en #btnIniciarJuego -> iniciarPartida()
// - Click en #cajaSemaforo -> alHacerClicEnSemaforo()

// 5. escuchadores de eventos (addEventListener)
