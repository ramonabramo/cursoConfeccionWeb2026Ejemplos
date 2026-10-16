// ==========================================================================
// EJERCICIO 05 (Guiado): Reloj Digital en Vivo (setInterval + Date)
// OBJETIVO: Leer new Date() cada 1000ms, formatear con padStart y pausar/reanudar.
// ==========================================================================

// 1. variables y constantes de estado
// - ID del intervalo del reloj: let relojIntervalId = null;
// - Estado de ejecución: let relojActivo = true;

// 2. constantes al DOM
// - Elementos de fecha y hora: #relojFecha, #relojHoras, #relojMinutos, #relojSegundos
// - Badge indicador: #relojBadge
// - Botón pausar/reanudar: #btnToggleReloj
// - Div resultado: #resultado

// 3. funciones auxiliares
// - function pad(numero): devuelve el número con 2 dígitos usando String(numero).padStart(2, '0')
// - function actualizarReloj():
//     * const ahora = new Date();
//     * Extraer horas, minutos, segundos y actualizar los spans correspondientes.
//     * Formatear fecha en español con Intl.DateTimeFormat o toLocaleDateString().
// - function iniciarReloj():
//     * Ejecuta actualizarReloj() inmediatamente.
//     * Arranca relojIntervalId = setInterval(actualizarReloj, 1000).
// - function toggleReloj():
//     * Si está activo, clearInterval(relojIntervalId) y cambia el texto del botón a "Reanudar".
//     * Si está pausado, vuelve a llamar a iniciarReloj().

// 4. funciones de eventos
// - Click en #btnToggleReloj -> toggleReloj()

// 5. escuchadores de eventos (addEventListener)
