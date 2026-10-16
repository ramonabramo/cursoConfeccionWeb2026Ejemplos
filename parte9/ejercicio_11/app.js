// ==========================================================================
// EJERCICIO 11 (Guiado): Demostración Empírica del Event Loop (setTimeout 0ms)
// OBJETIVO: Demostrar visualmente el flujo Call Stack -> Web APIs -> Task Queue -> Event Loop.
// ==========================================================================

// 1. variables y constantes de estado
// - Contador de ejecuciones o historial de logs

// 2. constantes al DOM
// - Botón ejecutar prueba: #btnEjecutarPrueba
// - Botón limpiar: #btnLimpiarConsola
// - Contenedor consola: #cuerpoConsola
// - Div resultado: #resultado

// 3. funciones auxiliares
// - function registrarLog(texto, tipo):
//     * Crea un div con clase 'linea-consola' y el tipo ('sincrono', 'asincrono', 'info').
//     * Lo añade al cuerpoConsola con appendChild.
// - function ejecutarExperimentoEventLoop():
//     * 1. registrarLog("Paso 1: Código SÍNCRONO inicial en Call Stack", "sincrono")
//     * 2. setTimeout(() => {
//              registrarLog("Paso 3: Callback de setTimeout(..., 0ms) extraído de la Task Queue por el Event Loop", "asincrono")
//          }, 0)
//     * 3. registrarLog("Paso 2: Código SÍNCRONO final en Call Stack", "sincrono")

// 4. funciones de eventos
// - Click en #btnEjecutarPrueba -> ejecutarExperimentoEventLoop()
// - Click en #btnLimpiarConsola -> vaciar cuerpoConsola

// 5. escuchadores de eventos (addEventListener)
