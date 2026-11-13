// ==========================================================================
// EJERCICIO 07 (Guiado): Barra de Progreso de Instalación (setInterval)
// OBJETIVO: Incrementar porcentaje y style.width cada 40ms, autolimpiando al llegar a 100%.
// ==========================================================================

// 1. variables y constantes de estado
// - ID del intervalo: let instalacionIntervalId = null;
// - Porcentaje acumulado: let porcentaje = 0;

// 2. constantes al DOM
// - Textos: #textoFase, #porcentajeTexto
// - Barra interior: #barraInterior
// - Botones: #btnIniciarInstalacion, #btnCancelarInstalacion, #btnResetearInstalacion
// - Div resultado: #resultado

// 3. funciones auxiliares
// - function iniciarInstalacion():
//     * Si ya está en marcha (instalacionIntervalId !== null), return.
//     * Iniciar intervalo de 40ms:
//         - Incrementar porcentaje en 1.
//         - barraInterior.style.width = porcentaje + '%'
//         - porcentajeTexto.textContent = porcentaje + '%'
//         - Actualizar textoFase según el progreso (ej: <30% 'Descargando paquetes...', <70% 'Compilando...', etc.)
//         - Si porcentaje >= 100:
//             * clearInterval(instalacionIntervalId)
//             * instalacionIntervalId = null
//             * Notificar éxito en el resultado.
// - function cancelarInstalacion():
//     * clearInterval(instalacionIntervalId)
//     * instalacionIntervalId = null
// - function resetearInstalacion():
//     * Cancela y devuelve porcentaje a 0 y barraInterior.style.width a '0%'.

// 4. funciones de eventos
// - Click en #btnIniciarInstalacion -> iniciarInstalacion()
// - Click en #btnCancelarInstalacion -> cancelarInstalacion()
// - Click en #btnResetearInstalacion -> resetearInstalacion()

// 5. escuchadores de eventos (addEventListener)
