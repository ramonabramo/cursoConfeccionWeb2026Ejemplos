// ==========================================================================
// EJERCICIO 06 (Práctica): Reloj con Formato 12H / 24H
// OBJETIVO: Conmutar entre 24h y 12h con sufijo AM/PM manteniendo el setInterval activo.
// ==========================================================================

// 1. variables y constantes de estado
// - ID del intervalo: let timerRelojId = null;
// - Bandera booleana de formato: let usarFormato12h = false;

// 2. constantes al DOM
// - Indicador de modo: #indicadorModo
// - Display principal: #relojDisplay12o24
// - Span sufijo AM/PM: #sufijoAmPm
// - Botón cambiar formato: #btnCambiarFormato
// - Div de resultado: #resultado

// 3. funciones auxiliares
// - function formatearHora():
//     * const fecha = new Date();
//     * let horas = fecha.getHours();
//     * const minutos = String(fecha.getMinutes()).padStart(2, '0');
//     * const segundos = String(fecha.getSeconds()).padStart(2, '0');
//     * let sufijo = '';
//     * Si usarFormato12h es true:
//         - sufijo = horas >= 12 ? 'PM' : 'AM';
//         - horas = horas % 12 || 12; // Si horas es 0, se convierte en 12
//     * Pintar en el DOM las horas formateadas y el sufijo.
//
// - function conmutarFormato():
//     * Alternar usarFormato12h = !usarFormato12h;
//     * Actualizar texto del botón y del indicador de modo.
//     * Invocar formatearHora() inmediatamente para reflejar el cambio sin esperar al próximo segundo.

// 4. funciones de eventos
// - Click en #btnCambiarFormato -> conmutarFormato()

// 5. escuchadores de eventos (addEventListener)
// - Iniciar setInterval(formatearHora, 1000) al cargar.
