// ==========================================================================
// EJERCICIO 08 (Práctica): Simulador de Carga de Batería Inteligente
// OBJETIVO: Incrementar carga periódicamente con setInterval, cambiar estilos y parar en 100%.
// ==========================================================================

// 1. variables y constantes de estado
// - ID del temporizador: let bateriaIntervalId = null;
// - Nivel de batería (1 a 100): let nivelBateria = 15;

// 2. constantes al DOM
// - Barra de relleno: #bateriaRelleno
// - Texto de porcentaje: #bateriaTexto
// - Botón conectar: #btnConectarCargador
// - Botón desconectar: #btnDesconectarCargador
// - Div resultado: #resultado

// 3. funciones auxiliares
// - function aplicarColorBateria(nivel):
//     * Si nivel < 20 -> fondo rojo (#ef4444)
//     * Si nivel < 80 -> fondo naranja (#f59e0b)
//     * Si nivel >= 80 -> fondo verde (#10b981)
// - function iniciarCarga():
//     * Si bateriaIntervalId !== null, return.
//     * Habilita botón desconectar y deshabilita botón conectar.
//     * Inicia setInterval de 70ms:
//         - nivelBateria++
//         - Actualiza bateriaRelleno.style.width y bateriaTexto.textContent
//         - Llama a aplicarColorBateria(nivelBateria)
//         - Si nivelBateria >= 100:
//             * clearInterval(bateriaIntervalId)
//             * bateriaIntervalId = null
//             * Notifica: "¡Carga al 100% completada!"
// - function detenerCarga():
//     * clearInterval(bateriaIntervalId)
//     * bateriaIntervalId = null
//     * Restaura botones y avisa que la carga se ha pausado.

// 4. funciones de eventos
// - Click en #btnConectarCargador -> iniciarCarga()
// - Click en #btnDesconectarCargador -> detenerCarga()

// 5. escuchadores de eventos (addEventListener)
