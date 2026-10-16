// ==========================================================================
// EJERCICIO 02 (Práctica): Simulador de Descarga Programada con Cancelación
// OBJETIVO: Implementar setTimeout() de 5000ms y clearTimeout() al pulsar cancelar.
// ==========================================================================

// 1. variables y constantes de estado
// - Variable para el ID del temporizador: let timerDescarga = null;

// 2. constantes al DOM
// - Botón iniciar descarga: #btnDescargar
// - Botón cancelar descarga: #btnCancelarDescarga
// - Icono de estado: #iconoEstado
// - Texto de estado: #textoEstadoDescarga
// - Div de resultado: #resultado

// 3. funciones auxiliares
// - function iniciarProcesoDescarga():
//     * Deshabilita el botón de descarga y habilita el de cancelar.
//     * Cambia el icono a '⏳' y el texto a "Comprobando antivirus... La descarga iniciará en 5 segundos."
//     * Asigna a timerDescarga un setTimeout de 5000ms que llamará a completarDescarga().
//
// - function completarDescarga():
//     * Cambia el icono a '✅' y el texto a "¡Descarga iniciada! El archivo 'manual_seguridad.pdf' se ha guardado."
//     * Restaura los botones (btnDescargar habilitado, btnCancelarDescarga deshabilitado).
//     * Resetea timerDescarga a null.
//
// - function abortarDescarga():
//     * Si timerDescarga no es null:
//         - Ejecuta clearTimeout(timerDescarga).
//         - Resetea timerDescarga = null.
//         - Cambia el icono a '🚫' y el texto a "Descarga cancelada por el usuario."
//         - Restaura los botones.

// 4. funciones de eventos
// - Evento click en #btnDescargar -> llama a iniciarProcesoDescarga()
// - Evento click en #btnCancelarDescarga -> llama a abortarDescarga()

// 5. escuchadores de eventos (addEventListener)
