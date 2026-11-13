// ==========================================================================
// EJERCICIO 03 (Guiado): Cronómetro Digital (setInterval y clearInterval)
// OBJETIVO: Repetición continua cada 100ms, parada con clearInterval() y control de intervaloId.
// ==========================================================================

// 1. variables y constantes de estado
// - ID del intervalo: let intervaloId = null;
// - Contador de décimas de segundo: let totalDecimas = 0;

// 2. constantes al DOM
// - Pantalla del cronómetro: #displayTiempo
// - Badge de estado: #badgeEstadoCronometro
// - Botón iniciar: #btnIniciar
// - Botón pausar: #btnPausar
// - Botón reiniciar: #btnReiniciar
// - Div de resultado: #resultado

// 3. funciones auxiliares
// - function formatearTiempo(decimasTotales): convierte las décimas a formato "MM:SS.D"
// - function actualizarDisplay(): pinta el tiempo formateado en el DOM
// - function arrancarCronometro():
//     * ¡CLAVE!: Si intervaloId !== null, salimos con return para no duplicar intervalos.
//     * intervaloId = setInterval(..., 100)
// - function pausarCronometro():
//     * clearInterval(intervaloId)
//     * intervaloId = null
// - function reiniciarCronometro():
//     * Pausa el cronómetro y resetea totalDecimas a 0.

// 4. funciones de eventos
// - Click en #btnIniciar -> arrancarCronometro()
// - Click en #btnPausar -> pausarCronometro()
// - Click en #btnReiniciar -> reiniciarCronometro()

// 5. escuchadores de eventos (addEventListener)
