// ==========================================================================
// EJERCICIO 01 (Guiado): Notificación Toast con Cancelación (clearTimeout)
// OBJETIVO: Programar una acción diferida con setTimeout() y cancelarla con clearTimeout().
// ==========================================================================

// 1. variables y constantes de estado
// - Variable para almacenar el ID del temporizador: let timeoutId = null;
// - Variable para el tiempo restante en segundos: let segundosRestantes = 4;
// - Variable para el intervalo de la cuenta atrás visual: let intervaloCuenta = null;

// 2. constantes al DOM
// - Botón de ejecutar acción: #btnEjecutar
// - Botón de deshacer: #btnDeshacer
// - Contenedor toast: #toastNotificacion
// - Texto de cuenta atrás: #toastCuentaAtras
// - Barra visual de tiempo: #barraTiempoProgreso
// - Div de resultado: #resultado

// 3. funciones auxiliares
// - function iniciarToast():
//     * Muestra el toast eliminando la clase 'oculto'.
//     * Habilita el botón de deshacer y deshabilita el de ejecutar.
//     * Resetea segundosRestantes a 4.
//     * Arranca un setTimeout de 4000ms que llamará a ejecutarEliminacionDefinitiva().
//     * Arranca un setInterval de 1000ms para decrementar la cuenta visual.
// - function ejecutarEliminacionDefinitiva():
//     * Limpia el temporizador y el intervalo.
//     * Oculta el toast.
//     * Muestra en el div de resultado que el elemento ha sido eliminado permanentemente.
//     * Restaura los botones.
// - function cancelarAccion():
//     * Cancela el temporizador con clearTimeout(timeoutId).
//     * Limpia el intervalo de la cuenta visual con clearInterval(intervaloCuenta).
//     * Oculta el toast y avisa en el div de resultado: "Acción cancelada. El elemento no se eliminó."
//     * Restaura los botones.

// 4. funciones de eventos
// - Evento click en #btnEjecutar -> llama a iniciarToast()
// - Evento click en #btnDeshacer -> llama a cancelarAccion()

// 5. escuchadores de eventos (addEventListener)
