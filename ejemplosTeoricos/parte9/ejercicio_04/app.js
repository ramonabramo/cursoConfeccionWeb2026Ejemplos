// ==========================================================================
// EJERCICIO 04 (Práctica): Temporizador de Cuenta Regresiva
// OBJETIVO: Descontar 1 segundo cada 1000ms con setInterval y parar en 0 con clearInterval.
// ==========================================================================

// 1. variables y constantes de estado
// - ID del intervalo: let timerRegresivoId = null;
// - Segundos restantes: let segundosRestantes = 0;

// 2. constantes al DOM
// - Input de segundos: #inputSegundos
// - Display numérico: #displayCuentaRegresiva
// - Subtexto: #subtextoCuenta
// - Botón comenzar: #btnComenzarCuenta
// - Botón abortar: #btnAbortarCuenta
// - Div de resultado: #resultado

// 3. funciones auxiliares
// - function comenzarCuentaAtras():
//     * Si timerRegresivoId !== null, detenerlo primero.
//     * Leer segundos del input: Number(inputSegundos.value).
//     * Validar que sea > 0.
//     * Iniciar setInterval de 1000ms:
//         - Restar 1 a segundosRestantes.
//         - Actualizar el display.
//         - Si segundosRestantes === 0:
//             * clearInterval(timerRegresivoId)
//             * timerRegresivoId = null
//             * Mostrar mensaje: "¡¡TIEMPO AGOTADO!!" y cambiar estilos a alerta.
//
// - function abortarCuentaAtras():
//     * Si timerRegresivoId !== null, limpiarlo con clearInterval() y ponerlo en null.
//     * Avisar en el div de resultado que la cuenta se canceló manualmente.

// 4. funciones de eventos
// - Click en #btnComenzarCuenta -> comenzarCuentaAtras()
// - Click en #btnAbortarCuenta -> abortarCuentaAtras()

// 5. escuchadores de eventos (addEventListener)
