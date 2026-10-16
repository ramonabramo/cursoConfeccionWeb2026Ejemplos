// ==========================================================================
// EJERCICIO 03 (Guiado): Paso por Referencia (Heap vs Stack) y Object.freeze()
// OBJETIVO: Demostrar que los objetos se pasan por referencia y cómo clonar o congelar.
// ==========================================================================

// 1. variables y constantes de estado
// - Objeto 'original' en memoria Heap: { nombre: 'Ana', rol: 'Developer' }
// - Variable 'alias': inicialmente apunta a 'original' (const alias = original)
// - Bandera booleana: let esCopiaIndependiente = false;
// - Bandera booleana: let estaCongelado = false;

// 2. constantes al DOM
// - Cajas de memoria: #cajaOriginal, #cajaAlias
// - Textos de datos: #valorOriginalNombre, #valorOriginalRol, #valorAliasNombre, #valorAliasRol
// - Textos de punteros: #textoConector, #punteroAliasBadge
// - Botones: #btnMutarAlias, #btnClonarSpread, #btnCongelar, #btnResetearMemoria
// - Div resultado: #resultado

// 3. funciones auxiliares
// - function renderizarMemoria():
//     * Pinta en el DOM los datos de 'original' y de 'alias'.
// - function mutarAlias():
//     * Intenta cambiar alias.nombre = 'Carlos'.
//     * Si estaCongelado es true, no permite o avisa de que Object.freeze() impidió la mutación.
//     * Muestra cómo la mutación de alias afecta a original si compartían puntero.
// - function clonarConSpread():
//     * alias = { ...original }
//     * Ahora alias tiene una nueva dirección en el Heap (#0x9B2C).
// - function congelarObjeto():
//     * Object.freeze(original)

// 4. funciones de eventos
// - Click en los respectivos botones

// 5. escuchadores de eventos (addEventListener)
