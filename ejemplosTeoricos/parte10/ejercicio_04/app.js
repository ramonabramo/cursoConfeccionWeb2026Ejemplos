// ==========================================================================
// EJERCICIO 04 (Práctica): Configurador de Tema con Clonación y Object.freeze()
// OBJETIVO: Blindar la configuración original con Object.freeze() y trabajar sobre una copia.
// ==========================================================================

// 1. variables y constantes de estado
// - Objeto de fábrica congelado:
//     const temaFabrica = Object.freeze({
//         fondo: '#ffffff',
//         texto: '#1e293b',
//         tamano: '16px'
//     });
// - Objeto editable del usuario (clonado con spread):
//     let temaUsuario = { ...temaFabrica };

// 2. constantes al DOM
// - Previsualizador: #cajaPrevisualizacionTema
// - Controles: #inputColorBg, #inputColorTexto, #selectTamano
// - Botones: #btnAplicarCambios, #btnIntentarMutarFabrica, #btnRestaurarFabrica
// - Div resultado: #resultado

// 3. funciones auxiliares
// - function aplicarTemaEnDOM():
//     * Modifica el estilo de #cajaPrevisualizacionTema con temaUsuario.fondo, texto y tamano.
// - function guardarCambiosUsuario():
//     * Lee los inputs y modifica temaUsuario.
//     * Llama a aplicarTemaEnDOM()
// - function intentarCorromperFabrica():
//     * Intenta hacer temaFabrica.fondo = '#000000'.
//     * Comprueba que Object.isFrozen(temaFabrica) es true y muestra que no cambió.
// - function restaurarValoresPorDefecto():
//     * temaUsuario = { ...temaFabrica };
//     * Restaura los inputs y vuelve a aplicar el tema.

// 4. funciones de eventos
// - Click en #btnAplicarCambios -> guardarCambiosUsuario()
// - Click en #btnIntentarMutarFabrica -> intentarCorromperFabrica()
// - Click en #btnRestaurarFabrica -> restaurarValoresPorDefecto()

// 5. escuchadores de eventos (addEventListener)
